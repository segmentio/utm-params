'use strict';

/**
 * Module dependencies.
 */

var parse = require('querystring').parse;

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Get all utm params from the given `querystring`
 *
 * @param {String} query
 * @return {Object}
 * @api private
 */

function utm(query){
  // Remove leading ? if present
  if (query.charAt(0) === '?') {
    query = query.substring(1);
  }

  query = query.replace(/\?/g, '&');

  var param;
  var params = parse(query);
  var results = {};

  for (var key in params) {
    if (has.call(params, key)) {
      if (key.substr(0, 4) === 'utm_') {
        param = key.substr(4);
        if (param === 'campaign') param = 'name';
        results[param] = params[key];
      }
    }
  }

  return results;
}

/**
 * Exports.
 */

module.exports = utm;
