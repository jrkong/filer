var util = require('../lib/test-utils.js');
var expect = require('chai').expect;
var md5 = require('md5');
var ogmd5 = '93daadfcadd3230c745790a5bc2fd5d8';
describe('Verifying package-lock.json integrity', function() {
  beforeEach(util.setup);
  afterEach(util.cleanup);

  it('package-lock.json is different from git version, a dependency may be missing or not installed', function(done) {
    var fs = util.fs();

    fs.readFile('./package-lock.json', 'utf8', function(error, data) {
      var check = md5(data);
      expect(check).to.equal(ogmd5);
      done();
    });
  });
});

