import {BaseParameter} from "swagger-schema-official";
import {Store} from "../../common/core/class/Store";
import {DecoratorParameters} from "../../common/core/interfaces";

/**
 *
 * @param {BaseParameter | any} baseParameter
 * @returns {Function}
 * @decorator
 * @swagger
 */
export function BaseParameter(baseParameter: BaseParameter | any) {
    return Store.decorate((store: Store, parameters: DecoratorParameters) => {
        store.merge("baseParameter", baseParameter);
    });
}