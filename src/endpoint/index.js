/**
 * @name Rest/Endpoint
 * @memberof rest/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
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
