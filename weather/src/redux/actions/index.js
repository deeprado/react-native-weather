/**
 * @flow
 */

'use strict';

const weather = require('./weather');
const location = require('./location');
const postcode = require('./postcode');
const theme = require('./theme');

module.exports = {
  ...weather,
  ...location,
  ...postcode,
  ...theme
};
