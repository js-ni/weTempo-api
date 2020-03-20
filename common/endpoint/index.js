/**
 * @name Endpoint
 * @memberof common/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 */
//#region lib
import express from "express";
//#endregion
//#region endpoint
import RestEndpoints from "../../rest/endpoint";
//#endregion

const GlobEndpoints = express();

GlobEndpoints.use(RestEndpoints);

export default GlobEndpoints;
