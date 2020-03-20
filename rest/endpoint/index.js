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
import weTempoRoutes from "./weTempo";
//#endregion

const RestEndpoint = express();

RestEndpoint.use(weTempoRoutes);

export default RestEndpoint;
