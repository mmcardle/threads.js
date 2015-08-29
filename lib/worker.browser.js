/*eslint-env browser*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _eventemitter3 = require('eventemitter3');

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

if (typeof window.Worker !== 'object') {
  throw new Error('Browser does not support web workers!');
}

var Worker = (function (_EventEmitter) {
  _inherits(Worker, _EventEmitter);

  function Worker(url) {
    _classCallCheck(this, Worker);

    _get(Object.getPrototypeOf(Worker.prototype), 'constructor', this).call(this);

    this.worker = new Worker(url);
    this.setupListeners();
  }

  _createClass(Worker, [{
    key: 'send',
    value: function send(param) {
      var transferables = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      this.worker.postMessage(param, transferables);
      return this;
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.worker.terminate();
      this.emit('exit');
      return this;
    }
  }, {
    key: 'setupListeners',
    value: function setupListeners() {
      this.worker.addEventListener('message', this.emit.bind(this, 'message'));
      this.worker.addEventListener('error', this.emit.bind(this, 'error'));
    }
  }]);

  return Worker;
})(_eventemitter32['default']);

exports['default'] = Worker;
module.exports = exports['default'];