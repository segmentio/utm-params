
describe('utm-params', function(){
  var assert = require('assert');
  var utm = require('utm-params');

  location.__defineGetter__('search', function(){
    return '?utm_source=source&utm_medium=medium&utm_term=term&utm_content=content&utm_campaign=name';
  });

  it('should parse utm params', function(){
    var params = utm(location.search);
    assert('source' == params.source);
    assert('medium' == params.medium);
    assert('term' == params.term);
    assert('content' == params.content);
    assert('name' == params.name);
  })

  it('should ignore non `utm_*`', function(){
    var params = utm('utm_woot=woot&bar=foo');
    assert(null == params.bar);
    assert('woot' == params.woot);
  })
});