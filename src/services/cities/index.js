/**
 * @file service/weTempo/index.js
 * @module service
 * @desc This is the list of service
 * @since v1.0
 * @author Boyk <clenondavis@outlook.com>
 * @return {Object} List of service
 */

//#region lib
// import request from "superagent";
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

// export const allCities = async () =>
//   await request.get("https://app.deta.sh/hw6g4zdvlmao/");
export const allCities = () => resultScraping;

export const test = () => {};
