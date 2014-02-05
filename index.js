
/**
 * Module dependencies.
 */

var parse = require('querystring').parse;

/**
 * Expose `utm`
 */

module.exports = utm;

/**
 * Get all utm params from the given `querystring`
 *
 * @param {String} query
 * @return {Object}
 * @api private
 */

function utm(query){
  var params = parse(query);
  var ret = {};

  for (var key in params) {
    if (~key.indexOf('utm_')) {
      ret[key.substr(4)] = params[key];
    }
  }

  return ret;
}
