/**
 * @name Rest/Endpoint/Observations
 * @memberof Rest/Endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 */
//#region lib
import express from "express";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion
//#region service
import { observationsSvc } from "../../services";
//#endregion

const endpoint = express();
const { observationsRt } = routes;

/**
 * @name getAllObservations
 * @memberof Rest/Endpoint/Observations
 * @type {GET}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.get(observationsRt.all, (req, res) =>
  observationsSvc.allObservations().then(resp => {
    res.json(resp);
  })
);

export default endpoint;
