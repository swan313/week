'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//打开端口.端口测试 的时候要把项目关掉，否则会报冲突的错误
function request() {
  return (0, _supertest2.default)(_app2.default.listen());
}

describe('接口测试', function () {
  it('点赞+1', function (done) {
    request().get('/index/update').expect(200, done).end(function (err, res) {
      if (res.data == 1) return done(err);
      done();
    });
  });
});
