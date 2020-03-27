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
 * @name AllCities
 * @memberof Services/Cities
 * @type {ARRAY}
 * @description Scraping for static site to get cities cardinales and win speed
 * @return {ARRAY} - All cities information from scrapping static site
 */
export const byId = async id =>
  await Cities.findOrCreate({
    where: {
      id: id
    }
  });

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

// TODO: add common model action service in v1.1.0 release
/**
 * @name AddNewCity
 * @memberof Services/Cities
 * @type {CITY}
 * @description Add a new city in the database
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
// export const addCity = async cityModel => await Cities.create(cityModel);
export const addCity = async cityModel =>
  await Cities.findOrCreate({
    where: {
      name: cityModel.name
    },
    defaults: cityModel
  });
