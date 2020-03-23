/**
 * @name Rest/Endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import express from "express";
//#endregion
//#region endpoint
import citiesEnd from "./cities";
import observationEnd from "./observation";
//#endregion

const endpoints = express();

endpoints.use(citiesEnd);
endpoints.use(observationEnd);

export default endpoints;
