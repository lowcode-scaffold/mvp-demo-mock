"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _Proxy = _interopRequireDefault(require("../middleware/Proxy"));

var _proxy = _interopRequireDefault(require("../lib/proxy"));

var _util = require("../lib/util");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Mock = require('mockjs');

var Random = Mock.Random;
var router = new _koaRouter["default"]();
router.get('/', function (ctx) {
  ctx.body = 'lowcode-mock1212';
}).get('dist/app.js', function (ctx) {
  ctx.body = '123';
}).get('/dist/app.js', function (ctx) {
  ctx.body = 'lowcode-mock';
}).get('/delay', function (ctx) {
  (0, _util.delay)(3);
  ctx.body = 'delay';
}).get('/httpError', function (ctx) {
  ctx.status = 401;
  ctx.body = 'http 401';
}).get('/mock', function (ctx) {
  var list2 = [];

  for (var i = 0; i < 10; i++) {
    list2.push(Random.cword(5, 7));
  }

  var list1 = [];

  for (var _i = 0; _i < 10; _i++) {
    list1.push({
      name: Random.cword(5, 7),
      area: list2
    });
  }

  ctx.body = {
    name: Random.cword(5, 7),
    city: list1
  };
}).get('/intercept/response', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    var result, interceptResult;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _proxy["default"])(ctx, 'http://localhost:3000/mock');

          case 2:
            result = _context.sent;
            interceptResult = _objectSpread(_objectSpread({}, result.body), {}, {
              intercept: '拦截响应'
            });
            ctx.body = interceptResult;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()).get('/proxy', (0, _Proxy["default"])('https://github.com/wjkang/lowcode-mock'), function (ctx) {
  ctx.body = 'https://github.com/wjkang/lowcode-mock';
}).all(new RegExp('^/lowcode/mock/(|^$)'), (0, _Proxy["default"])('https://github.com/wjkang/lowcode-mock')).all('(.*)', function (ctx) {
  ctx.body = 'lowcode-mock';
});
module.exports = router;