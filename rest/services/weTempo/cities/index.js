/**
 * @file service/weTempo/index.js
 * @module service
 * @desc This is the list of service
 * @since v1.0
 * @author Boyk <clenondavis@outlook.com>
 * @return {Object} List of service
 */

//#region lib
import request from "superagent";
//#endregion

export const cities = async () =>
  // await request.get("https://app.deta.sh/hw6g4zdvlmao/");
  await request.get(
    "file:///C:/Users/CLeno/Downloads/World%20Wind%20Speeds.html"
  );

export const test = () => {};
