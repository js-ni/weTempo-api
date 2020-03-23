/**
 * @name Rest/Endpoint
 * @memberof rest/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region lib
import express from "express";
//#endregion
//#region endpoint
import citiesRoutes from "./cities";
//#endregion

const endpoints = express();

endpoints.use(citiesRoutes);

export default endpoints;
