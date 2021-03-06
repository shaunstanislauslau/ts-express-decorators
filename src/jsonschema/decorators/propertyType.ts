import {Type} from "../../core/interfaces";
import {PropertyMetadata} from "../class/PropertyMetadata";
import {PropertyRegistry} from "../registries/PropertyRegistry";

/**
 * Set the type of the array items. The possible value is String, Boolean, Number, Date, Object, Class, etc...
 *
 * ?> This decorator is used by the Converters to deserialize correctly you model.
 *
 * ```typescript
 * class Model {
 *    @PropertyType(String)
 *    property: string[];
 * }
 * ```
 * !> You didn't use the `type Type = string | number` as parameters Type.
 *
 * Didn't works:
 *
 * ```typescript
 * type Type = "string" | "number"
 * class Model {
 *    @PropertyType(Type)
 *    property: Type[];
 * }
 * ```
 *
 * Works with converter and AJV:
 *
 * ```typescript
 * type Type = "string" | "number"
 * class Model {
 *    @Property()
 *    @AllowTypes("string", "number") // for AJV
 *    property: Type[];
 * }
 * ```
 *
 * @param {Type<any>} type
 * @returns {Function}
 * @decorator
 * @converters
 */
export function PropertyType(type: Type<any>) {
    return PropertyRegistry.decorate((propertyMetadata: PropertyMetadata) => {
        propertyMetadata.type = type;
    });
}