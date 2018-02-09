/**
 * @module common/mvc
 */ /** */

import {InternalServerError} from "ts-httpexceptions";
import {Type} from "../../core/interfaces/Type";
import {nameOf} from "../../core/utils/index";
/**
 * @private
 */
export class CyclicReferenceError extends InternalServerError {

    name = "CYCLIC_REFERENCE_ERROR";

    constructor(c1: Type<any>, c2: Type<any>) {
        super(CyclicReferenceError.buildMessage(c1, c2));
    }

    /**
     *
     * @returns {string}
     */
    static buildMessage(c1: Type<any>, c2: Type<any>) {
        return `Cyclic reference between ${nameOf(c1)} and ${nameOf(c2)}.`;
    }
}