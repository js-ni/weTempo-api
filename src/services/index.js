/**
 * @name Services
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region endpoint
import * as citiesSvc from "./cities";
import * as observationsSvc from "./observation";
//#endregion

export { citiesSvc, observationsSvc };
