import {Store} from "../../common/core/class/Store";
import {getDecoratorType} from "../../common/core/utils/index";
import {BaseParameter} from "./baseParameter";

/**
 * Add a name metadata on the decorated element.
 *
 * ## Examples
 * ### On parameters
 *
 * ```typescript
 * async myMethod(@Name("nameOf") @PathParams("id") id: string): Promise<Model>  {
 *
 * }
 * ```
 *
 * ### On parameters
 *
 * ```typescript
 * @Name("AliasName")
 * @Controller("/")
 * class ModelCtrl {
 *
 * }
 * ```
 *
 * @param name
 * @returns {Function}
 * @decorator
 * @swagger
 */
export function Name(name: string) {
    return (...args: any[]) => {
        const type = getDecoratorType(args);
        switch (type) {
            case "parameter":
                return BaseParameter({name})(...args);
            case "class":
                Store.from(...args).set("name", name);
                break;
            default:
                throw new Error("Name is only supported on parameters and class");
        }
    };
}