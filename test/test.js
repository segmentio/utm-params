
describe('utm-params', function(){
  var assert = require('assert');
  var utm = require('utm-params');

  it('should parse utm params', function(){
    var params = utm('?utm_foo=foo&utm_burl=burl');
    assert('foo' == params.foo);
    assert('burl' == params.burl);
  })

  it('should ignore non `utm_*`', function(){
    var params = utm('utm_woot=woot&bar=foo');
    assert(null == params.bar);
    assert('woot' == params.woot);
  })
});
