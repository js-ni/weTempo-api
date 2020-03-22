const baseApi = "/api";
const rest = "/rest";
const v1 = "/v1.0.0";
const baseRestUrl = `${baseApi}${rest}${v1}`;
const citiesUrl = `${baseRestUrl}/cities`;

export const citiesRt = {
  all: `${citiesUrl}/cities`
};
