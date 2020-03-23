/**
 * @name Rest/Endpoint/Cities
 * @memberof Rest/Endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region lib
import express from "express";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion
//#region service
import { citiesSvc } from "../../services";
//#endregion

const endpoint = express();
const { allCities, addCity } = citiesSvc;
const { citiesRt } = routes;

/**
 * @name getAllCities
 * @memberof Rest/Endpoint/Cities
 * @type {GET}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.get(citiesRt.all, (req, res) => {
  //   //#region TODO: move this logic to a common utility context
  //   //this context should return the array of object with
  //   //each city info
  const { coords, winSpeeds } = allCities();
  // allCities().then(({ text }) => {
  //   const $ = cheerio.load(text);
  //   const coords = [],
  //     winSpeeds = [];
  //   $("tbody tr td:first-child").each((i, el) => {
  //     coords.push(el.children[0].data);
  //   });

  //   $("tbody tr td:last-child").each((i, el) => {
  //     winSpeeds.push(el.children[0].data);
  //   });
  //   //#endregion

  //   res.json({
  //     coords,
  //     winSpeeds
  //   });
  // });
  res.json({
    coords,
    winSpeeds
  });
});

/**
 * @name AddNewCity
 * @memberof Rest/Endpoint/Cities
 * @type {POST}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.post(citiesRt.add, (req, res) => {
  let {
    body: { model }
  } = req;
  addCity(model).then(resp => {
    res.json(resp);
  });
});

export default endpoint;
