"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _Proxy = _interopRequireDefault(require("../middleware/Proxy"));

var _proxy = _interopRequireDefault(require("../lib/proxy"));

var _util = require("../lib/util");

var Mock = require('mockjs');

var Random = Mock.Random;
var router = new _koaRouter["default"]();
router.get("/api/user/page", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var list2, i, list1, _i;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            list2 = [];

            for (i = 0; i < 10; i++) {
              list2.push(Random.cword(5, 6));
            }

            list1 = [];

            for (_i = 0; _i < 10; _i++) {
              list1.push({
                name: Random.cword(5, 6),
                age: Random.natural(100, 1000),
                mobile: Random.cword(5, 6),
                address: Random.cword(5, 6),
                tags: list2,
                id: Random.natural(100, 1000)
              });
            }

            ctx.body = {
              code: 200,
              msg: Random.cword(5, 6),
              result: {
                rows: list1,
                total: 200
              }
            };

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).post("/api/user/create", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _util.delay)(2);
            ctx.body = {
              code: 200,
              msg: Random.cword(5, 6),
              result: Random.natural(100, 1000)
            };

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()).post("/api/user/edit", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _util.delay)(2);
            ctx.body = {
              code: 200,
              msg: Random.cword(5, 6),
              result: Random["boolean"]()
            };

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}())["delete"]("/api/user/del", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _util.delay)(2);
            ctx.body = {
              code: 200,
              msg: Random.cword(5, 6),
              result: Random["boolean"]()
            };

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
module.exports = router;