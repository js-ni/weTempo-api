/**
 * @name Endpoint
 * @memberof common/endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 */
//#region lib
import express from "express";
//#endregion

const GlobEndpoints = express();

GlobEndpoints.get("/", (req, res) => {
  res.json({
    message: "Hello this is public community api"
  });
});

export default GlobEndpoints;
