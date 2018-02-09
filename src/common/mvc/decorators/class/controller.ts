import {Type} from "../../../core/interfaces/Type";
import {isArrayOrArrayClass} from "../../../core/utils/index";
import {IControllerOptions} from "../../interfaces/IControllerOptions";
import {PathParamsType} from "../../interfaces/PathParamsType";
/**
 * @module common/mvc
 */
/** */
import {ControllerRegistry} from "../../registries/ControllerRegistry";

/**
 * Declare a new controller with his Rest path. His methods annotated will be collected to build the routing list.
 * This routing listing will be built with the `express.Router` object.
 *
 * ```typescript
 *  @Controller("/calendars")
 *  export provide CalendarCtrl {
 *
 *    @Get("/:id")
 *    public get(
 *      @Request() request: Express.Request,
 *      @Response() response: Express.Response,
 *      @Next() next: Express.NextFunction
 *    ): void {
 *
 *    }
 *  }
 * ```
 *
 * @param path
 * @param dependencies
 * @returns {Function}
 * @decorator
 */
export function Controller(path: PathParamsType | IControllerOptions, ...dependencies: Type<any>[]): Function {
    return (target: any): void => {
        if (typeof path === "string" || path instanceof RegExp || isArrayOrArrayClass(path)) {
            ControllerRegistry.merge(target, {path: (path as PathParamsType), dependencies});
        } else {
            ControllerRegistry.merge(target, path as any);
        }
    };
}


