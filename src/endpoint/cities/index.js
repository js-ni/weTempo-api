/**
 * @name Rest/Endpoint/Cities
 * @memberof rest/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region lib
import express from "express";
import cheerio from "cheerio";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion
//#region service
import { allCities, addCity } from "../../services/cities";
//#endregion

const citiesEnd = express();
const { citiesRt } = routes;

/**
 * @name getAllCities
 * @memberof Rest/Endpoint/Cities
 * @type {GET}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
citiesEnd.get(citiesRt.all, (req, res) => {
  //   //#region TODO: send this logic to a common context
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

citiesEnd.post(citiesRt.add, (req, res) => {
  let {
    body: { model }
  } = req;
  addCity(model).then(resp => {
    res.json(resp);
  });
});

export default citiesEnd;
