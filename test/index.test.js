'use strict';

/**
 * Module dependencies.
 */

var assert = require('component/assert');
var utm = require('../index');

/**
 * Tests.
 */

describe('utm-params', function() {
  it('should parse utm params', function() {
    var params = utm('?utm_source=source&utm_medium=medium&utm_term=term&utm_content=content&utm_campaign=name&utm_test=test&utm_fake=fake');

    assert.deepEqual(params, {
      content: 'content',
      medium: 'medium',
      name: 'name',
      source: 'source',
      term: 'term',
      fake: 'fake',
      test: 'test'
    });
  });

  it('should ignore parameters that don\'t begin with `utm_`', function() {
    var params = utm('xyz=abc&utm_woot=woot&bar=foo&abc_utm_def=hi');

    assert.deepEqual(params, { woot: 'woot' });
  });

  it('should rename `utm_campaign` to `name`', function() {
    var params = utm('?utm_campaign=foo');

    assert.deepEqual(params, { name: 'foo' });
  });

  it('should replace "?" with "&"', function() {
    var params = utm('?utm_campaign=foo?utm_source=baz');

    assert.deepEqual(params, { name: 'foo', source: 'baz' });
  });
});

describe('utm-params.strict', function() {
    it('should omit unspecced utm params', function() {
      var params = utm.strict('?utm_source=source&utm_medium=medium&utm_term=term&utm_content=content&utm_campaign=name&utm_test=test&utm_fake=fake');
      assert.deepEqual(params, {
        content: 'content',
        medium: 'medium',
        name: 'name',
        source: 'source',
        term: 'term'
      });
    });
  });
