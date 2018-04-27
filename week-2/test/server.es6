import requestsuper from 'supertest';
import app from '../app.js';

//打开端口.端口测试 的时候要把项目关掉，否则会报冲突的错误
function request() {
  return requestsuper(app.listen());
}

describe('测试路由', function() {
  it('点赞+1', function(done) {
    request()
        .get('/index/update')
        .expect(200)
        .end(function (err, res) {
          if(res.data ==1) return done(err);
          done();
        });
  });
});
