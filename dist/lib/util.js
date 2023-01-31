"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = delay;

var _atomicSleep = _interopRequireDefault(require("atomic-sleep"));

function delay(seconds) {
  (0, _atomicSleep["default"])(seconds * 1000);
}