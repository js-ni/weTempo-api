/**
 * @name Services/Observations
 * @memberof Services
 * @type {Object}
 * @return {Object} List of observations services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
// import request from "superagent";
//#endregion
//#region models
import { Observations } from "../../db/models";
//#endregion

// TODO: convert this file to ES class context, in order to add scalability and other feature benefits

/**
 * @name AllObservations
 * @memberof Services/Observations
 * @type {ARRAY}
 * @description Get the list of observations in the database
 * @return {ARRAY} - All observations
 */
export const allObservations = async () => await Observations.findAll();

// TODO: add common action service in v1.1.0 release
/**
 * @name AddNewObservation
 * @memberof Services/Observations
 * @type {OBSERVATION}
 * @description Add a new observation in to the database
 * @return {PROMISE/MODEL} - A promise with The observation model just created
 */
export const addObservation = async observationModel =>
  await Observations.create(observationModel);
