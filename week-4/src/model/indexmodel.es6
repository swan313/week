import rp from 'request-promise';

class indexModel {
  constructor(ctx) {
    this.ctx = ctx;
  }

  updataNum() {
    const options = {
      uri: 'http://localhost:8888/praise/praise.php',
      method: 'GET'
    };
    return new Promise((resolve, reject) => {
      rp(options).then(function (result) {
        const info = JSON.parse(result);
        if (info) {
          resolve({data: info.result});
        } else {
          reject({});
        }
        console.log(info);
      })
    })
  }
}

export default indexModel;