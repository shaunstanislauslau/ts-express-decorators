// fooservice.ts

import {InjectorService} from "../../../../src/common/di/services/InjectorService";
export interface ICustomFactory {
    getFoo(): string;
}

export type CustomFactory = ICustomFactory;
export const CustomFactory = Symbol("CustomFactory");

InjectorService.factory(CustomFactory, {
    getFoo: () => "test"
});