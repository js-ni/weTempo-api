/**
 * @name Rest/Endpoint
 * @memberof rest/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 */
//#region lib
import express from "express";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion

const RestEndpoint = express();
const { weTempo } = routes;

RestEndpoint.get(weTempo.cities, (req, res) => {
  res.json({
    message: "This is the list of citites"
  });
});

export default RestEndpoint;
