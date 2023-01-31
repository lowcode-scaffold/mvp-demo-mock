"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _koa2Cors = _interopRequireDefault(require("koa2-cors"));

var _start = _interopRequireDefault(require("./routes/start"));

var _mvpDemo = _interopRequireDefault(require("./routes/mvp-demo"));

var _Proxy = _interopRequireDefault(require("./middleware/Proxy"));

var _config = _interopRequireDefault(require("./config"));

// import Routes from './routes/index';
var https = require('https');

var fs = require('fs');

var app = new _koa["default"]();
app.use((0, _koa2Cors["default"])({
  origin: function origin(ctx) {
    return ctx.headers.origin;
  },
  credentials: true
}));
app.use(function (ctx, next) {
  var start = new Date();
  return next().then(function () {
    var ms = new Date() - start;
    console.log("".concat(ctx.method, " ").concat(decodeURI(ctx.url), " - ").concat(ms, "ms data:").concat(JSON.stringify(ctx.request.body)));
  });
});
app.use((0, _koaBody["default"])({
  multipart: true,
  jsonLimit: '10mb',
  formLimit: '10mb',
  textLimit: '10mb'
})); // Object.keys(Routes).forEach((key) => {
//   app.use(Routes[key].routes()).use(Routes[key].allowedMethods());
// });

app.use(_start["default"].routes()).use(_start["default"].allowedMethods());
app.use(_mvpDemo["default"].routes()).use(_mvpDemo["default"].allowedMethods());
var router = new _koaRouter["default"]();
router.all(new RegExp('^/lowcode-mock(|^$)'), (0, _Proxy["default"])('https://github.com/wjkang'));
app.use(router.routes()).use(router.allowedMethods());

if (_config["default"].https) {
  var options = {
    key: fs.readFileSync('./src/ca-key.pem'),
    cert: fs.readFileSync('./src/ca-cert.pem')
  };
  https.createServer(options, app.callback()).listen(_config["default"].port, function () {
    console.log("start https mock server on port  ".concat(_config["default"].port, " ..."));
  });
} else {
  app.listen(_config["default"].port, function () {
    console.log("start mock server on port  ".concat(_config["default"].port, " ..."));
  });
}

var _default = app;
exports["default"] = _default;