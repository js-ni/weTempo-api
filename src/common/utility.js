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
  let citiesList = [];

  $("tbody tr td:first-child").each((i, el) => {
    cards.push(el.children[0].data);
  });

  $("tbody tr td:last-child").each((i, el) => {
    winSpeeds.push(el.children[0].data);
  });

  cards.map((card, idx) => {
    const cardinals = cards[idx];
    const cardSplit = cardinals.split(",");
    const firstCard = cardSplit[0];
    const secondCard = cardSplit[1];
    let cityName = "N/D";

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
      cardinals
    };

    citiesList.push(cityInfo);
  });

  const citiesListPromises = citiesList.map(cityInfo => {
    cityNameByCard(cityInfo.queryForCityName).then(({ result }) => {
      return {
        name: result,
        ...cityInfo
      };
    });
  });

  Promise.all(citiesListPromises).then(resp => {
    console.log(resp);
  });
  return citiesList;
};
