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
import { observationsSvc, citiesSvc } from "../../services";
//#endregion

const endpoint = express();
const { observationsRt } = routes;
const { allObservations, addObservation } = observationsSvc;
const { addCity } = citiesSvc;

/**
 * @name getAllObservations
 * @memberof Rest/Endpoint/Observations
 * @type {GET}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.get(observationsRt.all, (req, res) => {
  const {
    body: { filter }
  } = req;
  allObservations(filter).then(resp => {
    res.json(resp);
  });
});

/**
 * @name AddNewObservation
 * @memberof Rest/Endpoint/Observations
 * @type {POST}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.post(observationsRt.add, (req, res) => {
  let {
    body: {
      model: { city, observation }
    }
  } = req;
  addCity(city).then(({ id }) => {
    const observationToSend = {
      cityId: id,
      ...observation
    };
    addObservation(observationToSend).then(resp => {
      res.json(resp);
    });
  });
});

export default endpoint;
