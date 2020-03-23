/**
 * @name Rest/Endpoint
 * @memberof rest/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 */
//#region lib
import express from "express";
import cheerio from "cheerio";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion
//#region service
import { allCities } from "../../services/cities";
//#endregion

const citiesEnd = express();
const { citiesRt } = routes;

citiesEnd.get(citiesRt.all, (req, res) => {
  const { coords, winSpeeds } = allCities();
  // allCities().then(({ text }) => {
  //   //#region TODO: send this logic to a common context
  //   //this context should return the array of object with
  //   //each city info
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

export default citiesEnd;
