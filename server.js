/**
 * @file server.js
 * @class Base server file
 * @classdesc Interface to comunicate with the API.
 * @since v1.0.0
 * @author boyk <clenondavis@outlook.com>
 */

//#region lib
import express from "express";
import bodyParser from "body-parser";
// import EndPoints from "./server/endpoint";
//#endregion

const app = express();
const port = 7000;

// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(EndPoints);

app.listen(port, () =>
  console.log(
    `|o| yupiii!! your node api seed is now listening on port ${port}`
  )
);
