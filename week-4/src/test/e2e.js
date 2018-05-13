'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var driver, _animation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Builder().forBrowser('firefox').build();

          case 2:
            driver = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return driver.get('http://localhost:3000/index/index');

          case 6:
            _context.next = 8;
            return driver.findElement(By.id('thumb')).click();

          case 8:
            _animation = driver.findElement(By.id('animation'));
            _context.next = 11;
            return driver.wait(_animation.isDisabled(), 1000);

          case 11:
            _context.prev = 11;
            _context.next = 14;
            return driver.quit();

          case 14:
            return _context.finish(11);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3,, 11, 15]]);
  }));

  function example() {
    return _ref.apply(this, arguments);
  }

  return example;
})()();
