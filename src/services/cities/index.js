/**
 * @name Services/Cities
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import request from "superagent";
//#endregion
//#region models
import { Cities } from "../../db/models";
//#endregion

const resultScraping = {
  coords: [
    "51.5074° N, 0.1278° W",
    "41.7151° N, 44.827° E",
    "19.4326° N, 99.1332° W",
    "40.7128° N, 74.0060° W",
    "54.8019° S, 68.3030° W",
    "3.1390° N, 101.6869° E",
    "24.4539° N, 54.3773° E",
    "28.7041° N, 77.1025° E",
    "33.8688° S, 151.2093° E",
    "1.2921° S, 36.8219° E"
  ],
  winSpeeds: [
    "41 kph",
    "36 kph",
    "42 kph",
    "11 kph",
    "45 kph",
    "25 kph",
    "16 kph",
    "2 kph",
    "31 kph",
    "41 kph"
  ]
};

const citiesData = [
  {
    name: "London, United Kingdom",
    coords: "51.5074° N, 0.1278° W",
    winSpeed: "41 kph"
  },
  {
    name: "Tbilisi, Georgia",
    coords: "51.5074° N, 0.1278° E",
    winSpeed: "41 kph"
  },
  {
    name: "Tbilisi, Georgia",
    coords: "51.5074° N, 0.1278° E",
    winSpeed: "41 kph"
  },
  {
    name: "Mexico City, Mexico",
    coords: "51.5074° N, 0.1278° E",
    winSpeed: "41 kph"
  }
];

// TODO: convert this file to ES class context, in order to add scalability and other feature benefits

/**
 * @name AllCities
 * @memberof Services/Cities
 * @type {ARRAY}
 * @description Scraping for static site to get cities cardinales and win speed
 * @return {ARRAY} - All cities information from scrapping static site
 */
export const allCities = async () =>
  await request.get("https://app.deta.sh/hw6g4zdvlmao/");

/**
 * @name CityNameByCard
 * @memberof Services/Cities
 * @type {ARRAY}
 * @description get City name
 * @return {ARRAY} - All cities information from scrapping static site
 */
export const cityNameByCard = async query => {
  return await request
    .get(`https://app.deta.sh/hw6g4zdvlmao/lookup?${query}`)
    .then(resp => resp.body)
    .then(resp => resp)
    .catch(err => console.log("err", err));
};
// export const allCities = () => resultScraping;

// TODO: add common model action service in v1.1.0 release
/**
 * @name AddNewCity
 * @memberof Services/Cities
 * @type {CITY}
 * @description Add a new city in the database
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
export const addCity = async cityModel => await Cities.create(cityModel);
