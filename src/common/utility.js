/**
 * @name Common/Utility
 * @memberof Settings
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region lib
import cheerio from "cheerio";
//#endregion
//#region services
import { citiesSvc } from "../services";
//#endregion

/**
 * @name scrappingCityData
 * @memberof Common/Utility
 * @param {STRING} scrapModel  - scrapping text
 * @return {ARRAY} Array of citites with data
 */
export const scrappingCityData = scrapModel => {
  const $ = cheerio.load(scrapModel);
  const { cityNameByCard } = citiesSvc;
  const cards = [],
    winSpeeds = [];
  var citiesList = [];

  $("tbody tr td:first-child").each((i, el) => {
    cards.push(el.children[0].data);
  });

  $("tbody tr td:last-child").each((i, el) => {
    winSpeeds.push(el.children[0].data);
  });

  cards.map((card, idx) => {
    const cardinal = cards[idx];
    const cardSplit = cardinal.split(",");
    const firstCard = cardSplit[0];
    const secondCard = cardSplit[1];

    //First city cardinal location
    const firstCardLetter = firstCard.slice(firstCard.length - 1);
    const firstCardLetterToLower = firstCardLetter.toLowerCase();
    const firstCardValueCleanSimbol = firstCard.replace("°", "");
    const firstCardValueWithLetter = firstCardValueCleanSimbol.replace(" ", "");
    const firstCardValueWithoutLetter = firstCardValueWithLetter.substring(
      0,
      firstCardValueWithLetter.length - 1
    );
    //Second city cardinal location
    const secondCardLetter = secondCard.slice(secondCard.length - 1);
    const secondCardLetterToLower = secondCardLetter.toLowerCase();
    const secondCardValueCleanSimbol = secondCard.replace("°", "");
    const secondCardValueSpace = secondCardValueCleanSimbol.replace(" ", "");
    const secondCardValueWithLetter = secondCardValueSpace.replace(" ", "");
    const secondCardValueWithoutLetter = secondCardValueWithLetter.substring(
      0,
      secondCardValueWithLetter.length - 1
    );

    const queryForCityName = `${firstCardLetterToLower}=${firstCardValueWithoutLetter}&${secondCardLetterToLower}=${secondCardValueWithoutLetter}`;

    const cityInfo = {
      queryForCityName,
      winSpeed: winSpeeds[idx],
      cardinal
    };

    citiesList.push(cityInfo);
  });

  /**
   * @name citiesListPromises
   * @memberof scrappingCityData
   * @type {PROMISE}
   * @description Que the list of city name by calling url endpoint
   * @returns {ARRAY} Array of promises
   */
  const citiesListPromises = citiesList.map(async cityInfo => {
    return await cityNameByCard(cityInfo.queryForCityName).then(
      ({ result }) => {
        return {
          name: result,
          ...cityInfo
        };
      }
    );
  });

  return Promise.all(citiesListPromises);
};
