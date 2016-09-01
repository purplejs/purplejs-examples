var t = require('/lib/testing');
var main = require('./main');

// Test get method
t.test('test get', function () {

    var result = main.get({});
    t.assertEquals('Hello World!', result.body);

});
