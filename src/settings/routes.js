/**
 * @file rest/settings/routes.js
 * @name Settings/Routes
 * @memberof Settings
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

const baseApi = "/api";
const rest = "/rest";
const v1 = "/v1.0.0";
const baseRestUrl = `${baseApi}${rest}${v1}`;
const citiesUrl = `${baseRestUrl}/cities`;
const observationsUrl = `${baseRestUrl}/observations`;

export const citiesRt = {
  all: `${citiesUrl}`,
  add: `${citiesUrl}`
};

export const observationsRt = {
  all: `${observationsUrl}`,
  add: `${observationsUrl}`
};
