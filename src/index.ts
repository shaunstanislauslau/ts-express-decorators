/**
 * @module core
 * @preferred
 */
/** */
if (!require.extensions[".ts"]) {
    require("source-map-support").install();
}
import "reflect-metadata";

export * from "./common/core";
export * from "./common/di";
export * from "./common/config";
export * from "./common/jsonschema";
export * from "./common/converters";
export * from "./common/filters";
export * from "./common/mvc";
export * from "./common/server";