'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Metrics = function () {
  function Metrics() {
    (0, _classCallCheck3.default)(this, Metrics);

    this.metrics = [];
  }

  Metrics.prototype.push = function push(id, metrics) {
    this.metrics.push((0, _keys2.default)(metrics).reduce(function (prevMetrics, metricsKey) {
      prevMetrics[metricsKey.replace('$id', id)] = {
        value: metrics[metricsKey],
        timestamp: Date.now()
      };
      return prevMetrics;
    }, {}));
    return this;
  };

  Metrics.prototype.flatten = function flatten() {
    return this.metrics.reduce(function (prev, curr) {
      return (0, _extends3.default)({}, prev, curr);
    }, {});
  };

  Metrics.prototype.empty = function empty() {
    this.metrics = [];
    return this.metrics;
  };

  return Metrics;
}();

exports.default = Metrics;
//# sourceMappingURL=Metrics.js.map