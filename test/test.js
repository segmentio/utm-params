
describe('utm-params', function(){
  var assert = require('component/assert');
  var utm = require('../index');

  it('should parse utm params', function(){
    var params = utm('?utm_source=source&utm_medium=medium&utm_term=term&utm_content=content&utm_campaign=name');
    assert('source' == params.source);
    assert('medium' == params.medium);
    assert('term' == params.term);
    assert('content' == params.content);
    assert('name' == params.name);
  })

  it('should ignore non `utm_*`', function(){
    var params = utm('utm_woot=woot&bar=foo&foo_utm_bar=foo');
    assert(null == params.bar);
    assert(null == params.utm_bar);
    assert('woot' == params.woot);
  })

  it('should replace "?" with "&"', function(){
    var params = utm('?utm_campaign=foo?utm_source=baz');
    assert('foo' == params.name);
    assert('baz' == params.source);
  });
});
