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
