import * as Ajv from "ajv";
import {ErrorObject} from "ajv";
import {BadRequest} from "ts-httpexceptions";
import {$log} from "ts-log-debug";
import {ServerSettingsService} from "../../common/config/services/ServerSettingsService";
import {ConverterService} from "../../common/converters";
import {Type} from "../../common/core/interfaces";
import {nameOf} from "../../common/core/utils";
import {OverrideService} from "../../common/di/decorators/overrideService";
import {ValidationService} from "../../common/filters/services/ValidationService";
import {JsonSchemesService} from "../../common/jsonschema/services/JsonSchemesService";
import {AjvErrorObject, ErrorFormatter, IAjvOptions, IAjvSettings} from "../interfaces/IAjvSettings";

@OverrideService(ValidationService)
export class AjvService extends ValidationService {

    private errorFormatter: ErrorFormatter;
    private options: IAjvOptions;

    constructor(private jsonSchemaService: JsonSchemesService,
                private serverSettingsService: ServerSettingsService,
                private converterService: ConverterService) {
        super();

        const ajvSettings: IAjvSettings = this.serverSettingsService.get("ajv") || {};

        this.options = Object.assign({
            verbose: false
        }, ajvSettings.options || {});

        this.errorFormatter = ajvSettings.errorFormat ? ajvSettings.errorFormat : this.defaultFormatter;
    }

    /**
     *
     * @param obj
     * @param targetType
     * @param baseType
     * @returns {boolean}
     */
    public validate(obj: any, targetType: any, baseType?: any): boolean {
        let schema = <any>this.jsonSchemaService.getSchemaDefinition(targetType);

        if (schema) {
            const collection = baseType ? obj : [obj];
            const options = {
                ignoreCallback: (obj: any, type: any) => type === Date,
                checkRequiredValue: false
            };

            const test = (obj: any) => {
                const ajv = new Ajv(this.options);
                const valid = ajv.validate(schema, obj);
                if (!valid) {
                    throw this.buildErrors(ajv.errors!, targetType);
                }
            };

            Object
                .keys(collection)
                .forEach((key: any) =>
                    test(this.converterService.deserialize(
                        collection[key],
                        targetType,
                        undefined,
                        options)
                    )
                );
        }
        return true;
    }

    /**
     *
     * @param {ajv.ErrorObject[]} errors
     * @param {Type<any>} targetType
     * @returns {BadRequest}
     */
    private buildErrors(errors: ErrorObject[], targetType: Type<any>) {
        $log.debug("AJV errors: ", errors);

        const message = errors.map((error: AjvErrorObject) => {
            error.modelName = nameOf(targetType);
            return this.errorFormatter.call(this, error);
        }).join("\n");

        const error: any = new BadRequest(message);
        error.origin! = errors;

        return error;
    }

    /**
     *
     * @param error
     * @returns {string}
     */
    private defaultFormatter(error: AjvErrorObject) {
        let value = "";
        if (this.options.verbose) {
            value = `, value "${error.data}"`;
        }
        return `At ${error.modelName}${error.dataPath}${value} ${error.message}`;
    }
}