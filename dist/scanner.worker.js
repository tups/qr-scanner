/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../node_modules/jsqr-es6/dist/jsQR.js":
/*!*********************************************!*\
  !*** ../node_modules/jsqr-es6/dist/jsQR.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var BitMatrix = /*#__PURE__*/function () {
  function BitMatrix(data, width) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BitMatrix);

    this.width = width;
    this.height = data.length / width;
    this.data = data;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BitMatrix, [{
    key: "get",
    value: function get(x, y) {
      if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
        return false;
      }

      return !!this.data[y * this.width + x];
    }
  }, {
    key: "set",
    value: function set(x, y, v) {
      this.data[y * this.width + x] = v ? 1 : 0;
    }
  }, {
    key: "setRegion",
    value: function setRegion(left, top, width, height, v) {
      for (var y = top; y < top + height; y++) {
        for (var x = left; x < left + width; x++) {
          this.set(x, y, !!v);
        }
      }
    }
  }], [{
    key: "createEmpty",
    value: function createEmpty(width, height) {
      return new BitMatrix(new Uint8ClampedArray(width * height), width);
    }
  }]);

  return BitMatrix;
}();

var REGION_SIZE = 8;
var MIN_DYNAMIC_RANGE = 24;

function numBetween(value, min, max) {
  return value < min ? min : value > max ? max : value;
} // Like BitMatrix but accepts arbitry Uint8 values


var Matrix = /*#__PURE__*/function () {
  function Matrix(width, height, buffer) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Matrix);

    this.width = width;
    var bufferSize = width * height;

    if (buffer && buffer.length !== bufferSize) {
      throw new Error("Wrong buffer size");
    }

    this.data = buffer || new Uint8ClampedArray(bufferSize);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Matrix, [{
    key: "get",
    value: function get(x, y) {
      return this.data[y * this.width + x];
    }
  }, {
    key: "set",
    value: function set(x, y, value) {
      this.data[y * this.width + x] = value;
    }
  }]);

  return Matrix;
}();

function binarize(data, width, height, returnInverted, greyscaleWeights, canOverwriteImage) {
  var pixelCount = width * height;

  if (data.length !== pixelCount * 4) {
    throw new Error("Malformed data passed to binarizer.");
  } // assign the greyscale and binary image within the rgba buffer as the rgba image will not be needed after conversion


  var bufferOffset = 0; // Convert image to greyscale

  var greyscaleBuffer;

  if (canOverwriteImage) {
    greyscaleBuffer = new Uint8ClampedArray(data.buffer, bufferOffset, pixelCount);
    bufferOffset += pixelCount;
  }

  var greyscalePixels = new Matrix(width, height, greyscaleBuffer);

  if (greyscaleWeights.useIntegerApproximation) {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var pixelPosition = (y * width + x) * 4;
        var r = data[pixelPosition];
        var g = data[pixelPosition + 1];
        var b = data[pixelPosition + 2];
        greyscalePixels.set(x, y, // tslint:disable-next-line no-bitwise
        greyscaleWeights.red * r + greyscaleWeights.green * g + greyscaleWeights.blue * b + 128 >> 8);
      }
    }
  } else {
    for (var _y = 0; _y < height; _y++) {
      for (var _x = 0; _x < width; _x++) {
        var _pixelPosition = (_y * width + _x) * 4;

        var _r = data[_pixelPosition];
        var _g = data[_pixelPosition + 1];
        var _b = data[_pixelPosition + 2];
        greyscalePixels.set(_x, _y, greyscaleWeights.red * _r + greyscaleWeights.green * _g + greyscaleWeights.blue * _b);
      }
    }
  }

  var horizontalRegionCount = Math.ceil(width / REGION_SIZE);
  var verticalRegionCount = Math.ceil(height / REGION_SIZE);
  var blackPointsCount = horizontalRegionCount * verticalRegionCount;
  var blackPointsBuffer;

  if (canOverwriteImage) {
    blackPointsBuffer = new Uint8ClampedArray(data.buffer, bufferOffset, blackPointsCount);
    bufferOffset += blackPointsCount;
  }

  var blackPoints = new Matrix(horizontalRegionCount, verticalRegionCount, blackPointsBuffer);

  for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
    for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
      var min = Infinity;
      var max = 0;

      for (var _y2 = 0; _y2 < REGION_SIZE; _y2++) {
        for (var _x2 = 0; _x2 < REGION_SIZE; _x2++) {
          var pixelLumosity = greyscalePixels.get(hortizontalRegion * REGION_SIZE + _x2, verticalRegion * REGION_SIZE + _y2);
          min = Math.min(min, pixelLumosity);
          max = Math.max(max, pixelLumosity);
        }
      } // We could also compute the real average of all pixels but following the assumption that the qr code consists
      // of bright and dark pixels and essentially not much in between, by (min + max)/2 we make the cut really between
      // those two classes. If using the average over all pixel in a block of mostly bright pixels and few dark pixels,
      // the avg would tend to the bright side and darker bright pixels could be interpreted as dark.


      var average = (min + max) / 2; // Small bias towards black by moving the threshold up. We do this, as in the finder patterns white holes tend
      // to appear which makes them undetectable.

      var blackBias = 1.1;
      average = Math.min(255, average * blackBias);

      if (max - min <= MIN_DYNAMIC_RANGE) {
        // If variation within the block is low, assume this is a block with only light or only
        // dark pixels. In that case we do not want to use the average, as it would divide this
        // low contrast area into black and white pixels, essentially creating data out of noise.
        //
        // Default the blackpoint for these blocks to be half the min - effectively white them out
        average = min / 2;

        if (verticalRegion > 0 && hortizontalRegion > 0) {
          // Correct the "white background" assumption for blocks that have neighbors by comparing
          // the pixels in this block to the previously calculated black points. This is based on
          // the fact that dark barcode symbology is always surrounded by some amount of light
          // background for which reasonable black point estimates were made. The bp estimated at
          // the boundaries is used for the interior.
          // The (min < bp) is arbitrary but works better than other heuristics that were tried.
          var averageNeighborBlackPoint = (blackPoints.get(hortizontalRegion, verticalRegion - 1) + 2 * blackPoints.get(hortizontalRegion - 1, verticalRegion) + blackPoints.get(hortizontalRegion - 1, verticalRegion - 1)) / 4;

          if (min < averageNeighborBlackPoint) {
            average = averageNeighborBlackPoint; // no need to apply black bias as already applied to neighbors
          }
        }
      }

      blackPoints.set(hortizontalRegion, verticalRegion, average);
    }
  }

  var binarized;

  if (canOverwriteImage) {
    var binarizedBuffer = new Uint8ClampedArray(data.buffer, bufferOffset, pixelCount);
    bufferOffset += pixelCount;
    binarized = new BitMatrix(binarizedBuffer, width);
  } else {
    binarized = BitMatrix.createEmpty(width, height);
  }

  var inverted = null;

  if (returnInverted) {
    if (canOverwriteImage) {
      var invertedBuffer = new Uint8ClampedArray(data.buffer, bufferOffset, pixelCount);
      inverted = new BitMatrix(invertedBuffer, width);
    } else {
      inverted = BitMatrix.createEmpty(width, height);
    }
  }

  for (var _verticalRegion = 0; _verticalRegion < verticalRegionCount; _verticalRegion++) {
    for (var _hortizontalRegion = 0; _hortizontalRegion < horizontalRegionCount; _hortizontalRegion++) {
      var left = numBetween(_hortizontalRegion, 2, horizontalRegionCount - 3);
      var top = numBetween(_verticalRegion, 2, verticalRegionCount - 3);
      var _sum = 0;

      for (var xRegion = -2; xRegion <= 2; xRegion++) {
        for (var yRegion = -2; yRegion <= 2; yRegion++) {
          _sum += blackPoints.get(left + xRegion, top + yRegion);
        }
      }

      var threshold = _sum / 25;

      for (var _xRegion = 0; _xRegion < REGION_SIZE; _xRegion++) {
        for (var _yRegion = 0; _yRegion < REGION_SIZE; _yRegion++) {
          var _x3 = _hortizontalRegion * REGION_SIZE + _xRegion;

          var _y3 = _verticalRegion * REGION_SIZE + _yRegion;

          var lum = greyscalePixels.get(_x3, _y3);
          binarized.set(_x3, _y3, lum <= threshold);

          if (returnInverted) {
            inverted.set(_x3, _y3, !(lum <= threshold));
          }
        }
      }
    }
  }

  if (returnInverted) {
    return {
      binarized: binarized,
      inverted: inverted
    };
  }

  return {
    binarized: binarized
  };
} // tslint:disable:no-bitwise


var BitStream = /*#__PURE__*/function () {
  function BitStream(bytes) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BitStream);

    this.byteOffset = 0;
    this.bitOffset = 0;
    this.bytes = bytes;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BitStream, [{
    key: "readBits",
    value: function readBits(numBits) {
      if (numBits < 1 || numBits > 32 || numBits > this.available()) {
        throw new Error("Cannot read " + numBits.toString() + " bits");
      }

      var result = 0; // First, read remainder from current byte

      if (this.bitOffset > 0) {
        var bitsLeft = 8 - this.bitOffset;
        var toRead = numBits < bitsLeft ? numBits : bitsLeft;
        var bitsToNotRead = bitsLeft - toRead;
        var mask = 0xFF >> 8 - toRead << bitsToNotRead;
        result = (this.bytes[this.byteOffset] & mask) >> bitsToNotRead;
        numBits -= toRead;
        this.bitOffset += toRead;

        if (this.bitOffset === 8) {
          this.bitOffset = 0;
          this.byteOffset++;
        }
      } // Next read whole bytes


      if (numBits > 0) {
        while (numBits >= 8) {
          result = result << 8 | this.bytes[this.byteOffset] & 0xFF;
          this.byteOffset++;
          numBits -= 8;
        } // Finally read a partial byte


        if (numBits > 0) {
          var _bitsToNotRead = 8 - numBits;

          var _mask = 0xFF >> _bitsToNotRead << _bitsToNotRead;

          result = result << numBits | (this.bytes[this.byteOffset] & _mask) >> _bitsToNotRead;
          this.bitOffset += numBits;
        }
      }

      return result;
    }
  }, {
    key: "available",
    value: function available() {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    }
  }]);

  return BitStream;
}(); // tslint:disable:no-bitwise


var Mode;

(function (Mode) {
  Mode["Numeric"] = "numeric";
  Mode["Alphanumeric"] = "alphanumeric";
  Mode["Byte"] = "byte";
  Mode["Kanji"] = "kanji";
  Mode["ECI"] = "eci";
})(Mode || (Mode = {}));

var ModeByte;

(function (ModeByte) {
  ModeByte[ModeByte["Terminator"] = 0] = "Terminator";
  ModeByte[ModeByte["Numeric"] = 1] = "Numeric";
  ModeByte[ModeByte["Alphanumeric"] = 2] = "Alphanumeric";
  ModeByte[ModeByte["Byte"] = 4] = "Byte";
  ModeByte[ModeByte["Kanji"] = 8] = "Kanji";
  ModeByte[ModeByte["ECI"] = 7] = "ECI"; // StructuredAppend = 0x3,
  // FNC1FirstPosition = 0x5,
  // FNC1SecondPosition = 0x9,
})(ModeByte || (ModeByte = {}));

function decodeNumeric(stream, size) {
  var bytes = [];
  var text = "";
  var characterCountSize = [10, 12, 14][size];
  var length = stream.readBits(characterCountSize); // Read digits in groups of 3

  while (length >= 3) {
    var num = stream.readBits(10);

    if (num >= 1000) {
      throw new Error("Invalid numeric value above 999");
    }

    var a = Math.floor(num / 100);
    var b = Math.floor(num / 10) % 10;
    var c = num % 10;
    bytes.push(48 + a, 48 + b, 48 + c);
    text += a.toString() + b.toString() + c.toString();
    length -= 3;
  } // If the number of digits aren't a multiple of 3, the remaining digits are special cased.


  if (length === 2) {
    var _num = stream.readBits(7);

    if (_num >= 100) {
      throw new Error("Invalid numeric value above 99");
    }

    var _a2 = Math.floor(_num / 10);

    var _b2 = _num % 10;

    bytes.push(48 + _a2, 48 + _b2);
    text += _a2.toString() + _b2.toString();
  } else if (length === 1) {
    var _num2 = stream.readBits(4);

    if (_num2 >= 10) {
      throw new Error("Invalid numeric value above 9");
    }

    bytes.push(48 + _num2);
    text += _num2.toString();
  }

  return {
    bytes: bytes,
    text: text
  };
}

var AlphanumericCharacterCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function decodeAlphanumeric(stream, size) {
  var bytes = [];
  var text = "";
  var characterCountSize = [9, 11, 13][size];
  var length = stream.readBits(characterCountSize);

  while (length >= 2) {
    var v = stream.readBits(11);
    var a = Math.floor(v / 45);
    var b = v % 45;
    bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0), AlphanumericCharacterCodes[b].charCodeAt(0));
    text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
    length -= 2;
  }

  if (length === 1) {
    var _a3 = stream.readBits(6);

    bytes.push(AlphanumericCharacterCodes[_a3].charCodeAt(0));
    text += AlphanumericCharacterCodes[_a3];
  }

  return {
    bytes: bytes,
    text: text
  };
}

function decodeByte(stream, size) {
  var bytes = [];
  var text = "";
  var characterCountSize = [8, 16, 16][size];
  var length = stream.readBits(characterCountSize);

  for (var i = 0; i < length; i++) {
    var b = stream.readBits(8);
    bytes.push(b);
  }

  try {
    text += decodeURIComponent(bytes.map(function (b) {
      return "%".concat(("0" + b.toString(16)).substr(-2));
    }).join(""));
  } catch (_a) {// failed to decode
  }

  return {
    bytes: bytes,
    text: text
  };
}

function decodeKanji(stream, size) {
  var bytes = [];
  var characterCountSize = [8, 10, 12][size];
  var length = stream.readBits(characterCountSize);

  for (var i = 0; i < length; i++) {
    var k = stream.readBits(13);
    var c = Math.floor(k / 0xC0) << 8 | k % 0xC0;

    if (c < 0x1F00) {
      c += 0x8140;
    } else {
      c += 0xC140;
    }

    bytes.push(c >> 8, c & 0xFF);
  }

  var text = new TextDecoder("shift-jis").decode(Uint8Array.from(bytes));
  return {
    bytes: bytes,
    text: text
  };
}

function decode(data, version) {
  var stream = new BitStream(data); // There are 3 'sizes' based on the version. 1-9 is small (0), 10-26 is medium (1) and 27-40 is large (2).

  var size = version <= 9 ? 0 : version <= 26 ? 1 : 2;
  var result = {
    text: "",
    bytes: [],
    chunks: []
  };

  while (stream.available() >= 4) {
    var mode = stream.readBits(4);

    if (mode === ModeByte.Terminator) {
      return result;
    } else if (mode === ModeByte.ECI) {
      if (stream.readBits(1) === 0) {
        result.chunks.push({
          type: Mode.ECI,
          assignmentNumber: stream.readBits(7)
        });
      } else if (stream.readBits(1) === 0) {
        result.chunks.push({
          type: Mode.ECI,
          assignmentNumber: stream.readBits(14)
        });
      } else if (stream.readBits(1) === 0) {
        result.chunks.push({
          type: Mode.ECI,
          assignmentNumber: stream.readBits(21)
        });
      } else {
        // ECI data seems corrupted
        result.chunks.push({
          type: Mode.ECI,
          assignmentNumber: -1
        });
      }
    } else if (mode === ModeByte.Numeric) {
      var _result$bytes;

      var numericResult = decodeNumeric(stream, size);
      result.text += numericResult.text;

      (_result$bytes = result.bytes).push.apply(_result$bytes, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(numericResult.bytes));

      result.chunks.push({
        type: Mode.Numeric,
        text: numericResult.text
      });
    } else if (mode === ModeByte.Alphanumeric) {
      var _result$bytes2;

      var alphanumericResult = decodeAlphanumeric(stream, size);
      result.text += alphanumericResult.text;

      (_result$bytes2 = result.bytes).push.apply(_result$bytes2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(alphanumericResult.bytes));

      result.chunks.push({
        type: Mode.Alphanumeric,
        text: alphanumericResult.text
      });
    } else if (mode === ModeByte.Byte) {
      var _result$bytes3;

      var byteResult = decodeByte(stream, size);
      result.text += byteResult.text;

      (_result$bytes3 = result.bytes).push.apply(_result$bytes3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(byteResult.bytes));

      result.chunks.push({
        type: Mode.Byte,
        bytes: byteResult.bytes,
        text: byteResult.text
      });
    } else if (mode === ModeByte.Kanji) {
      var _result$bytes4;

      var kanjiResult = decodeKanji(stream, size);
      result.text += kanjiResult.text;

      (_result$bytes4 = result.bytes).push.apply(_result$bytes4, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(kanjiResult.bytes));

      result.chunks.push({
        type: Mode.Kanji,
        bytes: kanjiResult.bytes,
        text: kanjiResult.text
      });
    }
  } // If there is no data left, or the remaining bits are all 0, then that counts as a termination marker


  if (stream.available() === 0 || stream.readBits(stream.available()) === 0) {
    return result;
  }
}

var GenericGFPoly = /*#__PURE__*/function () {
  function GenericGFPoly(field, coefficients) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericGFPoly);

    if (coefficients.length === 0) {
      throw new Error("No coefficients.");
    }

    this.field = field;
    var coefficientsLength = coefficients.length;

    if (coefficientsLength > 1 && coefficients[0] === 0) {
      // Leading term must be non-zero for anything except the constant polynomial "0"
      var firstNonZero = 1;

      while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
        firstNonZero++;
      }

      if (firstNonZero === coefficientsLength) {
        this.coefficients = field.zero.coefficients;
      } else {
        this.coefficients = new Uint8ClampedArray(coefficientsLength - firstNonZero);

        for (var i = 0; i < this.coefficients.length; i++) {
          this.coefficients[i] = coefficients[firstNonZero + i];
        }
      }
    } else {
      this.coefficients = coefficients;
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericGFPoly, [{
    key: "degree",
    value: function degree() {
      return this.coefficients.length - 1;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      return this.coefficients[0] === 0;
    }
  }, {
    key: "getCoefficient",
    value: function getCoefficient(degree) {
      return this.coefficients[this.coefficients.length - 1 - degree];
    }
  }, {
    key: "addOrSubtract",
    value: function addOrSubtract(other) {
      if (this.isZero()) {
        return other;
      }

      if (other.isZero()) {
        return this;
      }

      var smallerCoefficients = this.coefficients;
      var largerCoefficients = other.coefficients;

      if (smallerCoefficients.length > largerCoefficients.length) {
        var _ref = [largerCoefficients, smallerCoefficients];
        smallerCoefficients = _ref[0];
        largerCoefficients = _ref[1];
      }

      var sumDiff = new Uint8ClampedArray(largerCoefficients.length);
      var lengthDiff = largerCoefficients.length - smallerCoefficients.length;

      for (var i = 0; i < lengthDiff; i++) {
        sumDiff[i] = largerCoefficients[i];
      }

      for (var _i = lengthDiff; _i < largerCoefficients.length; _i++) {
        sumDiff[_i] = addOrSubtractGF(smallerCoefficients[_i - lengthDiff], largerCoefficients[_i]);
      }

      return new GenericGFPoly(this.field, sumDiff);
    }
  }, {
    key: "multiply",
    value: function multiply(scalar) {
      if (scalar === 0) {
        return this.field.zero;
      }

      if (scalar === 1) {
        return this;
      }

      var size = this.coefficients.length;
      var product = new Uint8ClampedArray(size);

      for (var i = 0; i < size; i++) {
        product[i] = this.field.multiply(this.coefficients[i], scalar);
      }

      return new GenericGFPoly(this.field, product);
    }
  }, {
    key: "multiplyPoly",
    value: function multiplyPoly(other) {
      if (this.isZero() || other.isZero()) {
        return this.field.zero;
      }

      var aCoefficients = this.coefficients;
      var aLength = aCoefficients.length;
      var bCoefficients = other.coefficients;
      var bLength = bCoefficients.length;
      var product = new Uint8ClampedArray(aLength + bLength - 1);

      for (var i = 0; i < aLength; i++) {
        var aCoeff = aCoefficients[i];

        for (var j = 0; j < bLength; j++) {
          product[i + j] = addOrSubtractGF(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
        }
      }

      return new GenericGFPoly(this.field, product);
    }
  }, {
    key: "multiplyByMonomial",
    value: function multiplyByMonomial(degree, coefficient) {
      if (degree < 0) {
        throw new Error("Invalid degree less than 0");
      }

      if (coefficient === 0) {
        return this.field.zero;
      }

      var size = this.coefficients.length;
      var product = new Uint8ClampedArray(size + degree);

      for (var i = 0; i < size; i++) {
        product[i] = this.field.multiply(this.coefficients[i], coefficient);
      }

      return new GenericGFPoly(this.field, product);
    }
  }, {
    key: "evaluateAt",
    value: function evaluateAt(a) {
      var result = 0;

      if (a === 0) {
        // Just return the x^0 coefficient
        return this.getCoefficient(0);
      }

      var size = this.coefficients.length;

      if (a === 1) {
        // Just the sum of the coefficients
        this.coefficients.forEach(function (coefficient) {
          result = addOrSubtractGF(result, coefficient);
        });
        return result;
      }

      result = this.coefficients[0];

      for (var i = 1; i < size; i++) {
        result = addOrSubtractGF(this.field.multiply(a, result), this.coefficients[i]);
      }

      return result;
    }
  }]);

  return GenericGFPoly;
}();

function addOrSubtractGF(a, b) {
  return a ^ b; // tslint:disable-line:no-bitwise
}

var GenericGF = /*#__PURE__*/function () {
  function GenericGF(primitive, size, genBase) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericGF);

    this.primitive = primitive;
    this.size = size;
    this.generatorBase = genBase;
    this.expTable = new Array(this.size);
    this.logTable = new Array(this.size);
    var x = 1;

    for (var i = 0; i < this.size; i++) {
      this.expTable[i] = x;
      x = x * 2;

      if (x >= this.size) {
        x = (x ^ this.primitive) & this.size - 1; // tslint:disable-line:no-bitwise
      }
    }

    for (var _i2 = 0; _i2 < this.size - 1; _i2++) {
      this.logTable[this.expTable[_i2]] = _i2;
    }

    this.zero = new GenericGFPoly(this, Uint8ClampedArray.from([0]));
    this.one = new GenericGFPoly(this, Uint8ClampedArray.from([1]));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericGF, [{
    key: "multiply",
    value: function multiply(a, b) {
      if (a === 0 || b === 0) {
        return 0;
      }

      return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    }
  }, {
    key: "inverse",
    value: function inverse(a) {
      if (a === 0) {
        throw new Error("Can't invert 0");
      }

      return this.expTable[this.size - this.logTable[a] - 1];
    }
  }, {
    key: "buildMonomial",
    value: function buildMonomial(degree, coefficient) {
      if (degree < 0) {
        throw new Error("Invalid monomial degree less than 0");
      }

      if (coefficient === 0) {
        return this.zero;
      }

      var coefficients = new Uint8ClampedArray(degree + 1);
      coefficients[0] = coefficient;
      return new GenericGFPoly(this, coefficients);
    }
  }, {
    key: "log",
    value: function log(a) {
      if (a === 0) {
        throw new Error("Can't take log(0)");
      }

      return this.logTable[a];
    }
  }, {
    key: "exp",
    value: function exp(a) {
      return this.expTable[a];
    }
  }]);

  return GenericGF;
}();

function runEuclideanAlgorithm(field, a, b, R) {
  // Assume a's degree is >= b's
  if (a.degree() < b.degree()) {
    var _ref2 = [b, a];
    a = _ref2[0];
    b = _ref2[1];
  }

  var rLast = a;
  var r = b;
  var tLast = field.zero;
  var t = field.one; // Run Euclidean algorithm until r's degree is less than R/2

  while (r.degree() >= R / 2) {
    var rLastLast = rLast;
    var tLastLast = tLast;
    rLast = r;
    tLast = t; // Divide rLastLast by rLast, with quotient in q and remainder in r

    if (rLast.isZero()) {
      // Euclidean algorithm already terminated?
      return null;
    }

    r = rLastLast;
    var q = field.zero;
    var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree());
    var dltInverse = field.inverse(denominatorLeadingTerm);

    while (r.degree() >= rLast.degree() && !r.isZero()) {
      var degreeDiff = r.degree() - rLast.degree();
      var scale = field.multiply(r.getCoefficient(r.degree()), dltInverse);
      q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
      r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
    }

    t = q.multiplyPoly(tLast).addOrSubtract(tLastLast);

    if (r.degree() >= rLast.degree()) {
      return null;
    }
  }

  var sigmaTildeAtZero = t.getCoefficient(0);

  if (sigmaTildeAtZero === 0) {
    return null;
  }

  var inverse = field.inverse(sigmaTildeAtZero);
  return [t.multiply(inverse), r.multiply(inverse)];
}

function findErrorLocations(field, errorLocator) {
  // This is a direct application of Chien's search
  var numErrors = errorLocator.degree();

  if (numErrors === 1) {
    return [errorLocator.getCoefficient(1)];
  }

  var result = new Array(numErrors);
  var errorCount = 0;

  for (var i = 1; i < field.size && errorCount < numErrors; i++) {
    if (errorLocator.evaluateAt(i) === 0) {
      result[errorCount] = field.inverse(i);
      errorCount++;
    }
  }

  if (errorCount !== numErrors) {
    return null;
  }

  return result;
}

function findErrorMagnitudes(field, errorEvaluator, errorLocations) {
  // This is directly applying Forney's Formula
  var s = errorLocations.length;
  var result = new Array(s);

  for (var i = 0; i < s; i++) {
    var xiInverse = field.inverse(errorLocations[i]);
    var denominator = 1;

    for (var j = 0; j < s; j++) {
      if (i !== j) {
        denominator = field.multiply(denominator, addOrSubtractGF(1, field.multiply(errorLocations[j], xiInverse)));
      }
    }

    result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));

    if (field.generatorBase !== 0) {
      result[i] = field.multiply(result[i], xiInverse);
    }
  }

  return result;
}

function decode$1(bytes, twoS) {
  var outputBytes = new Uint8ClampedArray(bytes.length);
  outputBytes.set(bytes);
  var field = new GenericGF(0x011D, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1

  var poly = new GenericGFPoly(field, outputBytes);
  var syndromeCoefficients = new Uint8ClampedArray(twoS);
  var error = false;

  for (var s = 0; s < twoS; s++) {
    var evaluation = poly.evaluateAt(field.exp(s + field.generatorBase));
    syndromeCoefficients[syndromeCoefficients.length - 1 - s] = evaluation;

    if (evaluation !== 0) {
      error = true;
    }
  }

  if (!error) {
    return outputBytes;
  }

  var syndrome = new GenericGFPoly(field, syndromeCoefficients);
  var sigmaOmega = runEuclideanAlgorithm(field, field.buildMonomial(twoS, 1), syndrome, twoS);

  if (sigmaOmega === null) {
    return null;
  }

  var errorLocations = findErrorLocations(field, sigmaOmega[0]);

  if (errorLocations == null) {
    return null;
  }

  var errorMagnitudes = findErrorMagnitudes(field, sigmaOmega[1], errorLocations);

  for (var i = 0; i < errorLocations.length; i++) {
    var position = outputBytes.length - 1 - field.log(errorLocations[i]);

    if (position < 0) {
      return null;
    }

    outputBytes[position] = addOrSubtractGF(outputBytes[position], errorMagnitudes[i]);
  }

  return outputBytes;
}

var VERSIONS = [{
  infoBits: null,
  versionNumber: 1,
  alignmentPatternCenters: [],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 7,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 19
    }]
  }, {
    ecCodewordsPerBlock: 10,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 16
    }]
  }, {
    ecCodewordsPerBlock: 13,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 13
    }]
  }, {
    ecCodewordsPerBlock: 17,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 9
    }]
  }]
}, {
  infoBits: null,
  versionNumber: 2,
  alignmentPatternCenters: [6, 18],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 10,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 34
    }]
  }, {
    ecCodewordsPerBlock: 16,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 28
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 22
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: null,
  versionNumber: 3,
  alignmentPatternCenters: [6, 22],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 15,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 55
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 44
    }]
  }, {
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 17
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: null,
  versionNumber: 4,
  alignmentPatternCenters: [6, 26],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 20,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 80
    }]
  }, {
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 32
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 24
    }]
  }, {
    ecCodewordsPerBlock: 16,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 9
    }]
  }]
}, {
  infoBits: null,
  versionNumber: 5,
  alignmentPatternCenters: [6, 30],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 108
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 43
    }]
  }, {
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 16
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 11
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 12
    }]
  }]
}, {
  infoBits: null,
  versionNumber: 6,
  alignmentPatternCenters: [6, 34],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 68
    }]
  }, {
    ecCodewordsPerBlock: 16,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 27
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 19
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 15
    }]
  }]
}, {
  infoBits: 0x07C94,
  versionNumber: 7,
  alignmentPatternCenters: [6, 22, 38],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 20,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 78
    }]
  }, {
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 31
    }]
  }, {
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 14
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 15
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 13
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 14
    }]
  }]
}, {
  infoBits: 0x085BC,
  versionNumber: 8,
  alignmentPatternCenters: [6, 24, 42],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 97
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 38
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 39
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 18
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 19
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 14
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 15
    }]
  }]
}, {
  infoBits: 0x09A99,
  versionNumber: 9,
  alignmentPatternCenters: [6, 26, 46],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 36
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 37
    }]
  }, {
    ecCodewordsPerBlock: 20,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 17
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 12
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: 0x0A4D3,
  versionNumber: 10,
  alignmentPatternCenters: [6, 28, 50],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 18,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 68
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 69
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 43
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 44
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 19
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 20
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x0BBF6,
  versionNumber: 11,
  alignmentPatternCenters: [6, 30, 54],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 20,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 81
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 50
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 51
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 22
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 23
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 12
    }, {
      numBlocks: 8,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: 0x0C762,
  versionNumber: 12,
  alignmentPatternCenters: [6, 32, 58],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 92
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 93
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 36
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 37
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 20
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 21
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 7,
      dataCodewordsPerBlock: 14
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 15
    }]
  }]
}, {
  infoBits: 0x0D847,
  versionNumber: 13,
  alignmentPatternCenters: [6, 34, 62],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 107
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 37
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 38
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 20
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 21
    }]
  }, {
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 12,
      dataCodewordsPerBlock: 11
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 12
    }]
  }]
}, {
  infoBits: 0x0E60D,
  versionNumber: 14,
  alignmentPatternCenters: [6, 26, 46, 66],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 115
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 40
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 41
    }]
  }, {
    ecCodewordsPerBlock: 20,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 17
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 12
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: 0x0F928,
  versionNumber: 15,
  alignmentPatternCenters: [6, 26, 48, 70],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 22,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 87
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 88
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 41
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 42
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 12
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: 0x10B78,
  versionNumber: 16,
  alignmentPatternCenters: [6, 26, 50, 74],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 98
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 99
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 7,
      dataCodewordsPerBlock: 45
    }, {
      numBlocks: 3,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 15,
      dataCodewordsPerBlock: 19
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 20
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 13,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1145D,
  versionNumber: 17,
  alignmentPatternCenters: [6, 30, 54, 78],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 107
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 108
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 10,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 22
    }, {
      numBlocks: 15,
      dataCodewordsPerBlock: 23
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 14
    }, {
      numBlocks: 17,
      dataCodewordsPerBlock: 15
    }]
  }]
}, {
  infoBits: 0x12A17,
  versionNumber: 18,
  alignmentPatternCenters: [6, 30, 56, 82],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 120
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 121
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 9,
      dataCodewordsPerBlock: 43
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 44
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 22
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 23
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 14
    }, {
      numBlocks: 19,
      dataCodewordsPerBlock: 15
    }]
  }]
}, {
  infoBits: 0x13532,
  versionNumber: 19,
  alignmentPatternCenters: [6, 30, 58, 86],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 113
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 114
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 44
    }, {
      numBlocks: 11,
      dataCodewordsPerBlock: 45
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 21
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 22
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 9,
      dataCodewordsPerBlock: 13
    }, {
      numBlocks: 16,
      dataCodewordsPerBlock: 14
    }]
  }]
}, {
  infoBits: 0x149A6,
  versionNumber: 20,
  alignmentPatternCenters: [6, 34, 62, 90],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 107
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 108
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 41
    }, {
      numBlocks: 13,
      dataCodewordsPerBlock: 42
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 15,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 15,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x15683,
  versionNumber: 21,
  alignmentPatternCenters: [6, 28, 50, 72, 94],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 116
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 117
    }]
  }, {
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 42
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 22
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 23
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 17
    }]
  }]
}, {
  infoBits: 0x168C9,
  versionNumber: 22,
  alignmentPatternCenters: [6, 26, 50, 74, 98],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 111
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 112
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 7,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 16,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 24,
    ecBlocks: [{
      numBlocks: 34,
      dataCodewordsPerBlock: 13
    }]
  }]
}, {
  infoBits: 0x177EC,
  versionNumber: 23,
  alignmentPatternCenters: [6, 30, 54, 74, 102],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 121
    }, {
      numBlocks: 5,
      dataCodewordsPerBlock: 122
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 16,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x18EC4,
  versionNumber: 24,
  alignmentPatternCenters: [6, 28, 54, 80, 106],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 117
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 118
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 45
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 16,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 30,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 17
    }]
  }]
}, {
  infoBits: 0x191E1,
  versionNumber: 25,
  alignmentPatternCenters: [6, 32, 58, 84, 110],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 26,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 106
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 107
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 13,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 7,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 22,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 22,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 13,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1AFAB,
  versionNumber: 26,
  alignmentPatternCenters: [6, 30, 58, 86, 114],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 10,
      dataCodewordsPerBlock: 114
    }, {
      numBlocks: 2,
      dataCodewordsPerBlock: 115
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 28,
      dataCodewordsPerBlock: 22
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 23
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 33,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 17
    }]
  }]
}, {
  infoBits: 0x1B08E,
  versionNumber: 27,
  alignmentPatternCenters: [6, 34, 62, 90, 118],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 122
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 123
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 22,
      dataCodewordsPerBlock: 45
    }, {
      numBlocks: 3,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 8,
      dataCodewordsPerBlock: 23
    }, {
      numBlocks: 26,
      dataCodewordsPerBlock: 24
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 12,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 28,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1CC1A,
  versionNumber: 28,
  alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 117
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 118
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 3,
      dataCodewordsPerBlock: 45
    }, {
      numBlocks: 23,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 31,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 31,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1D33F,
  versionNumber: 29,
  alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 7,
      dataCodewordsPerBlock: 116
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 117
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 21,
      dataCodewordsPerBlock: 45
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 46
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 1,
      dataCodewordsPerBlock: 23
    }, {
      numBlocks: 37,
      dataCodewordsPerBlock: 24
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 26,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1ED75,
  versionNumber: 30,
  alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 5,
      dataCodewordsPerBlock: 115
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 15,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 25,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 23,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 25,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x1F250,
  versionNumber: 31,
  alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 13,
      dataCodewordsPerBlock: 115
    }, {
      numBlocks: 3,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 29,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 42,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 23,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 28,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x209D5,
  versionNumber: 32,
  alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 115
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 10,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 23,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 10,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 35,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 35,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x216F0,
  versionNumber: 33,
  alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 115
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 14,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 21,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 29,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 19,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 11,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 46,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x228BA,
  versionNumber: 34,
  alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 13,
      dataCodewordsPerBlock: 115
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 116
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 14,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 23,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 44,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 59,
      dataCodewordsPerBlock: 16
    }, {
      numBlocks: 1,
      dataCodewordsPerBlock: 17
    }]
  }]
}, {
  infoBits: 0x2379F,
  versionNumber: 35,
  alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 12,
      dataCodewordsPerBlock: 121
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 122
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 12,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 26,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 39,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 22,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 41,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x24B0B,
  versionNumber: 36,
  alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 121
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 122
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 6,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 34,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 46,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 2,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 64,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x2542E,
  versionNumber: 37,
  alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 17,
      dataCodewordsPerBlock: 122
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 123
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 29,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 49,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 10,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 24,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 46,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x26A64,
  versionNumber: 38,
  alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 4,
      dataCodewordsPerBlock: 122
    }, {
      numBlocks: 18,
      dataCodewordsPerBlock: 123
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 13,
      dataCodewordsPerBlock: 46
    }, {
      numBlocks: 32,
      dataCodewordsPerBlock: 47
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 48,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 14,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 42,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 32,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x27541,
  versionNumber: 39,
  alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 20,
      dataCodewordsPerBlock: 117
    }, {
      numBlocks: 4,
      dataCodewordsPerBlock: 118
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 40,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 7,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 43,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 22,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 10,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 67,
      dataCodewordsPerBlock: 16
    }]
  }]
}, {
  infoBits: 0x28C69,
  versionNumber: 40,
  alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
  errorCorrectionLevels: [{
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 19,
      dataCodewordsPerBlock: 118
    }, {
      numBlocks: 6,
      dataCodewordsPerBlock: 119
    }]
  }, {
    ecCodewordsPerBlock: 28,
    ecBlocks: [{
      numBlocks: 18,
      dataCodewordsPerBlock: 47
    }, {
      numBlocks: 31,
      dataCodewordsPerBlock: 48
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 34,
      dataCodewordsPerBlock: 24
    }, {
      numBlocks: 34,
      dataCodewordsPerBlock: 25
    }]
  }, {
    ecCodewordsPerBlock: 30,
    ecBlocks: [{
      numBlocks: 20,
      dataCodewordsPerBlock: 15
    }, {
      numBlocks: 61,
      dataCodewordsPerBlock: 16
    }]
  }]
}]; // tslint:disable:no-bitwise

function numBitsDiffering(x, y) {
  var z = x ^ y;
  var bitCount = 0;

  while (z) {
    bitCount++;
    z &= z - 1;
  }

  return bitCount;
}

function pushBit(bit, _byte) {
  return _byte << 1 | bit;
} // tslint:enable:no-bitwise


var FORMAT_INFO_TABLE = [{
  bits: 0x5412,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 0
  }
}, {
  bits: 0x5125,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 1
  }
}, {
  bits: 0x5E7C,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 2
  }
}, {
  bits: 0x5B4B,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 3
  }
}, {
  bits: 0x45F9,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 4
  }
}, {
  bits: 0x40CE,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 5
  }
}, {
  bits: 0x4F97,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 6
  }
}, {
  bits: 0x4AA0,
  formatInfo: {
    errorCorrectionLevel: 1,
    dataMask: 7
  }
}, {
  bits: 0x77C4,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 0
  }
}, {
  bits: 0x72F3,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 1
  }
}, {
  bits: 0x7DAA,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 2
  }
}, {
  bits: 0x789D,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 3
  }
}, {
  bits: 0x662F,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 4
  }
}, {
  bits: 0x6318,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 5
  }
}, {
  bits: 0x6C41,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 6
  }
}, {
  bits: 0x6976,
  formatInfo: {
    errorCorrectionLevel: 0,
    dataMask: 7
  }
}, {
  bits: 0x1689,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 0
  }
}, {
  bits: 0x13BE,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 1
  }
}, {
  bits: 0x1CE7,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 2
  }
}, {
  bits: 0x19D0,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 3
  }
}, {
  bits: 0x0762,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 4
  }
}, {
  bits: 0x0255,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 5
  }
}, {
  bits: 0x0D0C,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 6
  }
}, {
  bits: 0x083B,
  formatInfo: {
    errorCorrectionLevel: 3,
    dataMask: 7
  }
}, {
  bits: 0x355F,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 0
  }
}, {
  bits: 0x3068,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 1
  }
}, {
  bits: 0x3F31,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 2
  }
}, {
  bits: 0x3A06,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 3
  }
}, {
  bits: 0x24B4,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 4
  }
}, {
  bits: 0x2183,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 5
  }
}, {
  bits: 0x2EDA,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 6
  }
}, {
  bits: 0x2BED,
  formatInfo: {
    errorCorrectionLevel: 2,
    dataMask: 7
  }
}];
var DATA_MASKS = [function (p) {
  return (p.y + p.x) % 2 === 0;
}, function (p) {
  return p.y % 2 === 0;
}, function (p) {
  return p.x % 3 === 0;
}, function (p) {
  return (p.y + p.x) % 3 === 0;
}, function (p) {
  return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0;
}, function (p) {
  return p.x * p.y % 2 + p.x * p.y % 3 === 0;
}, function (p) {
  return (p.y * p.x % 2 + p.y * p.x % 3) % 2 === 0;
}, function (p) {
  return ((p.y + p.x) % 2 + p.y * p.x % 3) % 2 === 0;
}];

function buildFunctionPatternMask(version) {
  var dimension = 17 + 4 * version.versionNumber;
  var matrix = BitMatrix.createEmpty(dimension, dimension);
  matrix.setRegion(0, 0, 9, 9, true); // Top left finder pattern + separator + format

  matrix.setRegion(dimension - 8, 0, 8, 9, true); // Top right finder pattern + separator + format

  matrix.setRegion(0, dimension - 8, 9, 8, true); // Bottom left finder pattern + separator + format
  // Alignment patterns

  var _iterator = _createForOfIteratorHelper(version.alignmentPatternCenters),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _x4 = _step.value;

      var _iterator2 = _createForOfIteratorHelper(version.alignmentPatternCenters),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var y = _step2.value;

          if (!(_x4 === 6 && y === 6 || _x4 === 6 && y === dimension - 7 || _x4 === dimension - 7 && y === 6)) {
            matrix.setRegion(_x4 - 2, y - 2, 5, 5, true);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  matrix.setRegion(6, 9, 1, dimension - 17, true); // Vertical timing pattern

  matrix.setRegion(9, 6, dimension - 17, 1, true); // Horizontal timing pattern

  if (version.versionNumber > 6) {
    matrix.setRegion(dimension - 11, 0, 3, 6, true); // Version info, top right

    matrix.setRegion(0, dimension - 11, 6, 3, true); // Version info, bottom left
  }

  return matrix;
}

function readCodewords(matrix, version, formatInfo) {
  var dataMask = DATA_MASKS[formatInfo.dataMask];
  var dimension = matrix.height;
  var functionPatternMask = buildFunctionPatternMask(version);
  var codewords = [];
  var currentByte = 0;
  var bitsRead = 0; // Read columns in pairs, from right to left

  var readingUp = true;

  for (var columnIndex = dimension - 1; columnIndex > 0; columnIndex -= 2) {
    if (columnIndex === 6) {
      // Skip whole column with vertical alignment pattern;
      columnIndex--;
    }

    for (var i = 0; i < dimension; i++) {
      var y = readingUp ? dimension - 1 - i : i;

      for (var columnOffset = 0; columnOffset < 2; columnOffset++) {
        var _x5 = columnIndex - columnOffset;

        if (!functionPatternMask.get(_x5, y)) {
          bitsRead++;
          var bit = matrix.get(_x5, y);

          if (dataMask({
            y: y,
            x: _x5
          })) {
            bit = !bit;
          }

          currentByte = pushBit(bit, currentByte);

          if (bitsRead === 8) {
            // Whole bytes
            codewords.push(currentByte);
            bitsRead = 0;
            currentByte = 0;
          }
        }
      }
    }

    readingUp = !readingUp;
  }

  return codewords;
}

function readVersion(matrix) {
  var dimension = matrix.height;
  var provisionalVersion = Math.floor((dimension - 17) / 4);

  if (provisionalVersion <= 6) {
    // 6 and under dont have version info in the QR code
    return VERSIONS[provisionalVersion - 1];
  }

  var topRightVersionBits = 0;

  for (var y = 5; y >= 0; y--) {
    for (var _x6 = dimension - 9; _x6 >= dimension - 11; _x6--) {
      topRightVersionBits = pushBit(matrix.get(_x6, y), topRightVersionBits);
    }
  }

  var bottomLeftVersionBits = 0;

  for (var _x7 = 5; _x7 >= 0; _x7--) {
    for (var _y4 = dimension - 9; _y4 >= dimension - 11; _y4--) {
      bottomLeftVersionBits = pushBit(matrix.get(_x7, _y4), bottomLeftVersionBits);
    }
  }

  var bestDifference = Infinity;
  var bestVersion;

  var _iterator3 = _createForOfIteratorHelper(VERSIONS),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var version = _step3.value;

      if (version.infoBits === topRightVersionBits || version.infoBits === bottomLeftVersionBits) {
        return version;
      }

      var difference = numBitsDiffering(topRightVersionBits, version.infoBits);

      if (difference < bestDifference) {
        bestVersion = version;
        bestDifference = difference;
      }

      difference = numBitsDiffering(bottomLeftVersionBits, version.infoBits);

      if (difference < bestDifference) {
        bestVersion = version;
        bestDifference = difference;
      }
    } // We can tolerate up to 3 bits of error since no two version info codewords will
    // differ in less than 8 bits.

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (bestDifference <= 3) {
    return bestVersion;
  }
}

function readFormatInformation(matrix) {
  var topLeftFormatInfoBits = 0;

  for (var _x8 = 0; _x8 <= 8; _x8++) {
    if (_x8 !== 6) {
      // Skip timing pattern bit
      topLeftFormatInfoBits = pushBit(matrix.get(_x8, 8), topLeftFormatInfoBits);
    }
  }

  for (var y = 7; y >= 0; y--) {
    if (y !== 6) {
      // Skip timing pattern bit
      topLeftFormatInfoBits = pushBit(matrix.get(8, y), topLeftFormatInfoBits);
    }
  }

  var dimension = matrix.height;
  var topRightBottomRightFormatInfoBits = 0;

  for (var _y5 = dimension - 1; _y5 >= dimension - 7; _y5--) {
    // bottom left
    topRightBottomRightFormatInfoBits = pushBit(matrix.get(8, _y5), topRightBottomRightFormatInfoBits);
  }

  for (var _x9 = dimension - 8; _x9 < dimension; _x9++) {
    // top right
    topRightBottomRightFormatInfoBits = pushBit(matrix.get(_x9, 8), topRightBottomRightFormatInfoBits);
  }

  var bestDifference = Infinity;
  var bestFormatInfo = null;

  var _iterator4 = _createForOfIteratorHelper(FORMAT_INFO_TABLE),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = _step4.value,
          bits = _step4$value.bits,
          formatInfo = _step4$value.formatInfo;

      if (bits === topLeftFormatInfoBits || bits === topRightBottomRightFormatInfoBits) {
        return formatInfo;
      }

      var difference = numBitsDiffering(topLeftFormatInfoBits, bits);

      if (difference < bestDifference) {
        bestFormatInfo = formatInfo;
        bestDifference = difference;
      }

      if (topLeftFormatInfoBits !== topRightBottomRightFormatInfoBits) {
        // also try the other option
        difference = numBitsDiffering(topRightBottomRightFormatInfoBits, bits);

        if (difference < bestDifference) {
          bestFormatInfo = formatInfo;
          bestDifference = difference;
        }
      }
    } // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits differing means we found a match

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (bestDifference <= 3) {
    return bestFormatInfo;
  }

  return null;
}

function getDataBlocks(codewords, version, ecLevel) {
  var ecInfo = version.errorCorrectionLevels[ecLevel];
  var dataBlocks = [];
  var totalCodewords = 0;
  ecInfo.ecBlocks.forEach(function (block) {
    for (var i = 0; i < block.numBlocks; i++) {
      dataBlocks.push({
        numDataCodewords: block.dataCodewordsPerBlock,
        codewords: []
      });
      totalCodewords += block.dataCodewordsPerBlock + ecInfo.ecCodewordsPerBlock;
    }
  }); // In some cases the QR code will be malformed enough that we pull off more or less than we should.
  // If we pull off less there's nothing we can do.
  // If we pull off more we can safely truncate

  if (codewords.length < totalCodewords) {
    return null;
  }

  codewords = codewords.slice(0, totalCodewords);
  var shortBlockSize = ecInfo.ecBlocks[0].dataCodewordsPerBlock; // Pull codewords to fill the blocks up to the minimum size

  for (var i = 0; i < shortBlockSize; i++) {
    var _iterator5 = _createForOfIteratorHelper(dataBlocks),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var dataBlock = _step5.value;
        dataBlock.codewords.push(codewords.shift());
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  } // If there are any large blocks, pull codewords to fill the last element of those


  if (ecInfo.ecBlocks.length > 1) {
    var smallBlockCount = ecInfo.ecBlocks[0].numBlocks;
    var largeBlockCount = ecInfo.ecBlocks[1].numBlocks;

    for (var _i3 = 0; _i3 < largeBlockCount; _i3++) {
      dataBlocks[smallBlockCount + _i3].codewords.push(codewords.shift());
    }
  } // Add the rest of the codewords to the blocks. These are the error correction codewords.


  while (codewords.length > 0) {
    var _iterator6 = _createForOfIteratorHelper(dataBlocks),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _dataBlock = _step6.value;

        _dataBlock.codewords.push(codewords.shift());
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  return dataBlocks;
}

function decodeMatrix(matrix) {
  var version = readVersion(matrix);

  if (!version) {
    return null;
  }

  var formatInfo = readFormatInformation(matrix);

  if (!formatInfo) {
    return null;
  }

  var codewords = readCodewords(matrix, version, formatInfo);
  var dataBlocks = getDataBlocks(codewords, version, formatInfo.errorCorrectionLevel);

  if (!dataBlocks) {
    return null;
  } // Count total number of data bytes


  var totalBytes = dataBlocks.reduce(function (a, b) {
    return a + b.numDataCodewords;
  }, 0);
  var resultBytes = new Uint8ClampedArray(totalBytes);
  var resultIndex = 0;

  var _iterator7 = _createForOfIteratorHelper(dataBlocks),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var dataBlock = _step7.value;
      var correctedBytes = decode$1(dataBlock.codewords, dataBlock.codewords.length - dataBlock.numDataCodewords);

      if (!correctedBytes) {
        return null;
      }

      for (var i = 0; i < dataBlock.numDataCodewords; i++) {
        resultBytes[resultIndex++] = correctedBytes[i];
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  try {
    return decode(resultBytes, version.versionNumber);
  } catch (_a) {
    return null;
  }
}

function decode$2(matrix) {
  if (matrix == null) {
    return null;
  }

  var result = decodeMatrix(matrix);

  if (result) {
    return result;
  } // Decoding didn't work, try mirroring the QR across the topLeft -> bottomRight line.


  for (var _x10 = 0; _x10 < matrix.width; _x10++) {
    for (var y = _x10 + 1; y < matrix.height; y++) {
      if (matrix.get(_x10, y) !== matrix.get(y, _x10)) {
        matrix.set(_x10, y, !matrix.get(_x10, y));
        matrix.set(y, _x10, !matrix.get(y, _x10));
      }
    }
  }

  return decodeMatrix(matrix);
}

function squareToQuadrilateral(p1, p2, p3, p4) {
  var dx3 = p1.x - p2.x + p3.x - p4.x;
  var dy3 = p1.y - p2.y + p3.y - p4.y;

  if (dx3 === 0 && dy3 === 0) {
    // Affine
    return {
      a11: p2.x - p1.x,
      a12: p2.y - p1.y,
      a13: 0,
      a21: p3.x - p2.x,
      a22: p3.y - p2.y,
      a23: 0,
      a31: p1.x,
      a32: p1.y,
      a33: 1
    };
  } else {
    var dx1 = p2.x - p3.x;
    var dx2 = p4.x - p3.x;
    var dy1 = p2.y - p3.y;
    var dy2 = p4.y - p3.y;
    var denominator = dx1 * dy2 - dx2 * dy1;
    var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
    var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
    return {
      a11: p2.x - p1.x + a13 * p2.x,
      a12: p2.y - p1.y + a13 * p2.y,
      a13: a13,
      a21: p4.x - p1.x + a23 * p4.x,
      a22: p4.y - p1.y + a23 * p4.y,
      a23: a23,
      a31: p1.x,
      a32: p1.y,
      a33: 1
    };
  }
}

function quadrilateralToSquare(p1, p2, p3, p4) {
  // Here, the adjoint serves as the inverse:
  var sToQ = squareToQuadrilateral(p1, p2, p3, p4);
  return {
    a11: sToQ.a22 * sToQ.a33 - sToQ.a23 * sToQ.a32,
    a12: sToQ.a13 * sToQ.a32 - sToQ.a12 * sToQ.a33,
    a13: sToQ.a12 * sToQ.a23 - sToQ.a13 * sToQ.a22,
    a21: sToQ.a23 * sToQ.a31 - sToQ.a21 * sToQ.a33,
    a22: sToQ.a11 * sToQ.a33 - sToQ.a13 * sToQ.a31,
    a23: sToQ.a13 * sToQ.a21 - sToQ.a11 * sToQ.a23,
    a31: sToQ.a21 * sToQ.a32 - sToQ.a22 * sToQ.a31,
    a32: sToQ.a12 * sToQ.a31 - sToQ.a11 * sToQ.a32,
    a33: sToQ.a11 * sToQ.a22 - sToQ.a12 * sToQ.a21
  };
}

function times(a, b) {
  return {
    a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
    a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
    a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
    a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
    a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
    a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
    a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
    a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
    a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33
  };
}

function extract(image, location) {
  var qToS = quadrilateralToSquare({
    x: 3.5,
    y: 3.5
  }, {
    x: location.dimension - 3.5,
    y: 3.5
  }, {
    x: location.dimension - 6.5,
    y: location.dimension - 6.5
  }, {
    x: 3.5,
    y: location.dimension - 3.5
  });
  var sToQ = squareToQuadrilateral(location.topLeft, location.topRight, location.alignmentPattern, location.bottomLeft);
  var transform = times(sToQ, qToS);
  var matrix = BitMatrix.createEmpty(location.dimension, location.dimension);

  var mappingFunction = function mappingFunction(x, y) {
    var denominator = transform.a13 * x + transform.a23 * y + transform.a33;
    return {
      x: (transform.a11 * x + transform.a21 * y + transform.a31) / denominator,
      y: (transform.a12 * x + transform.a22 * y + transform.a32) / denominator
    };
  };

  for (var y = 0; y < location.dimension; y++) {
    for (var _x11 = 0; _x11 < location.dimension; _x11++) {
      var xValue = _x11 + 0.5;
      var yValue = y + 0.5;
      var sourcePixel = mappingFunction(xValue, yValue);
      matrix.set(_x11, y, image.get(Math.floor(sourcePixel.x), Math.floor(sourcePixel.y)));
    }
  }

  return {
    matrix: matrix,
    mappingFunction: mappingFunction
  };
}

var MAX_FINDERPATTERNS_TO_SEARCH = 4;
var MIN_QUAD_RATIO = 0.5;
var MAX_QUAD_RATIO = 1.5;

var distance = function distance(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

function sum(values) {
  return values.reduce(function (a, b) {
    return a + b;
  });
} // Takes three finder patterns and organizes them into topLeft, topRight, etc


function reorderFinderPatterns(pattern1, pattern2, pattern3) {
  // Find distances between pattern centers
  var oneTwoDistance = distance(pattern1, pattern2);
  var twoThreeDistance = distance(pattern2, pattern3);
  var oneThreeDistance = distance(pattern1, pattern3);
  var bottomLeft;
  var topLeft;
  var topRight; // Assume one closest to other two is B; A and C will just be guesses at first

  if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
    bottomLeft = pattern2;
    topLeft = pattern1;
    topRight = pattern3;
  } else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
    bottomLeft = pattern1;
    topLeft = pattern2;
    topRight = pattern3;
  } else {
    bottomLeft = pattern1;
    topLeft = pattern3;
    topRight = pattern2;
  } // Use cross product to figure out whether bottomLeft (A) and topRight (C) are correct or flipped in relation to topLeft (B)
  // This asks whether BC x BA has a positive z component, which is the arrangement we want. If it's negative, then
  // we've got it flipped around and should swap topRight and bottomLeft.


  if ((topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y) - (topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x) < 0) {
    var _ref3 = [topRight, bottomLeft];
    bottomLeft = _ref3[0];
    topRight = _ref3[1];
  }

  return {
    bottomLeft: bottomLeft,
    topLeft: topLeft,
    topRight: topRight
  };
} // Computes the dimension (number of modules on a side) of the QR Code based on the position of the finder patterns


function computeDimension(topLeft, topRight, bottomLeft, matrix) {
  var moduleSize = (sum(countBlackWhiteRun(topLeft, bottomLeft, matrix, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
  sum(countBlackWhiteRun(topLeft, topRight, matrix, 5)) / 7 + sum(countBlackWhiteRun(bottomLeft, topLeft, matrix, 5)) / 7 + sum(countBlackWhiteRun(topRight, topLeft, matrix, 5)) / 7) / 4;

  if (moduleSize < 1) {
    throw new Error("Invalid module size");
  }

  var topDimension = Math.round(distance(topLeft, topRight) / moduleSize);
  var sideDimension = Math.round(distance(topLeft, bottomLeft) / moduleSize);
  var dimension = Math.floor((topDimension + sideDimension) / 2) + 7;

  switch (dimension % 4) {
    case 0:
      dimension++;
      break;

    case 2:
      dimension--;
      break;
  }

  return {
    dimension: dimension,
    moduleSize: moduleSize
  };
} // Takes an origin point and an end point and counts the sizes of the black white run from the origin towards the end point.
// Returns an array of elements, representing the pixel size of the black white run.
// Uses a variant of http://en.wikipedia.org/wiki/Bresenham's_line_algorithm


function countBlackWhiteRunTowardsPoint(origin, end, matrix, length) {
  var switchPoints = [{
    x: Math.floor(origin.x),
    y: Math.floor(origin.y)
  }];
  var steep = Math.abs(end.y - origin.y) > Math.abs(end.x - origin.x);
  var fromX;
  var fromY;
  var toX;
  var toY;

  if (steep) {
    fromX = Math.floor(origin.y);
    fromY = Math.floor(origin.x);
    toX = Math.floor(end.y);
    toY = Math.floor(end.x);
  } else {
    fromX = Math.floor(origin.x);
    fromY = Math.floor(origin.y);
    toX = Math.floor(end.x);
    toY = Math.floor(end.y);
  }

  var dx = Math.abs(toX - fromX);
  var dy = Math.abs(toY - fromY);
  var error = Math.floor(-dx / 2);
  var xStep = fromX < toX ? 1 : -1;
  var yStep = fromY < toY ? 1 : -1;
  var currentPixel = true; // Loop up until x == toX, but not beyond

  for (var _x12 = fromX, y = fromY; _x12 !== toX + xStep; _x12 += xStep) {
    // Does current pixel mean we have moved white to black or vice versa?
    // Scanning black in state 0,2 and white in state 1, so if we find the wrong
    // color, advance to next state or end if we are in state 2 already
    var realX = steep ? y : _x12;
    var realY = steep ? _x12 : y;

    if (matrix.get(realX, realY) !== currentPixel) {
      currentPixel = !currentPixel;
      switchPoints.push({
        x: realX,
        y: realY
      });

      if (switchPoints.length === length + 1) {
        break;
      }
    }

    error += dy;

    if (error > 0) {
      if (y === toY) {
        break;
      }

      y += yStep;
      error -= dx;
    }
  }

  var distances = [];

  for (var i = 0; i < length; i++) {
    if (switchPoints[i] && switchPoints[i + 1]) {
      distances.push(distance(switchPoints[i], switchPoints[i + 1]));
    } else {
      distances.push(0);
    }
  }

  return distances;
} // Takes an origin point and an end point and counts the sizes of the black white run in the origin point
// along the line that intersects with the end point. Returns an array of elements, representing the pixel sizes
// of the black white run. Takes a length which represents the number of switches from black to white to look for.


function countBlackWhiteRun(origin, end, matrix, length) {
  var _awayFromEnd$concat;

  var rise = end.y - origin.y;
  var run = end.x - origin.x;
  var towardsEnd = countBlackWhiteRunTowardsPoint(origin, end, matrix, Math.ceil(length / 2));
  var awayFromEnd = countBlackWhiteRunTowardsPoint(origin, {
    x: origin.x - run,
    y: origin.y - rise
  }, matrix, Math.ceil(length / 2));
  var middleValue = towardsEnd.shift() + awayFromEnd.shift() - 1; // Substract one so we don't double count a pixel

  return (_awayFromEnd$concat = awayFromEnd.concat(middleValue)).concat.apply(_awayFromEnd$concat, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(towardsEnd));
} // Takes in a black white run and an array of expected ratios. Returns the average size of the run as well as the "error" -
// that is the amount the run diverges from the expected ratio


function scoreBlackWhiteRun(sequence, ratios) {
  var averageSize = sum(sequence) / sum(ratios);
  var error = 0;
  ratios.forEach(function (ratio, i) {
    error += Math.pow(sequence[i] - ratio * averageSize, 2);
  });
  return {
    averageSize: averageSize,
    error: error
  };
} // Takes an X,Y point and an array of sizes and scores the point against those ratios.
// For example for a finder pattern takes the ratio list of 1:1:3:1:1 and checks horizontal, vertical and diagonal ratios
// against that.


function scorePattern(point, ratios, matrix) {
  try {
    var horizontalRun = countBlackWhiteRun(point, {
      x: -1,
      y: point.y
    }, matrix, ratios.length);
    var verticalRun = countBlackWhiteRun(point, {
      x: point.x,
      y: -1
    }, matrix, ratios.length);
    var topLeftPoint = {
      x: Math.max(0, point.x - point.y) - 1,
      y: Math.max(0, point.y - point.x) - 1
    };
    var topLeftBottomRightRun = countBlackWhiteRun(point, topLeftPoint, matrix, ratios.length);
    var bottomLeftPoint = {
      x: Math.min(matrix.width, point.x + point.y) + 1,
      y: Math.min(matrix.height, point.y + point.x) + 1
    };
    var bottomLeftTopRightRun = countBlackWhiteRun(point, bottomLeftPoint, matrix, ratios.length);
    var horzError = scoreBlackWhiteRun(horizontalRun, ratios);
    var vertError = scoreBlackWhiteRun(verticalRun, ratios);
    var diagDownError = scoreBlackWhiteRun(topLeftBottomRightRun, ratios);
    var diagUpError = scoreBlackWhiteRun(bottomLeftTopRightRun, ratios);
    var ratioError = Math.sqrt(horzError.error * horzError.error + vertError.error * vertError.error + diagDownError.error * diagDownError.error + diagUpError.error * diagUpError.error);
    var avgSize = (horzError.averageSize + vertError.averageSize + diagDownError.averageSize + diagUpError.averageSize) / 4;
    var sizeError = (Math.pow(horzError.averageSize - avgSize, 2) + Math.pow(vertError.averageSize - avgSize, 2) + Math.pow(diagDownError.averageSize - avgSize, 2) + Math.pow(diagUpError.averageSize - avgSize, 2)) / avgSize;
    return ratioError + sizeError;
  } catch (_a) {
    return Infinity;
  }
}

function recenterLocation(matrix, p) {
  var leftX = Math.round(p.x);

  while (matrix.get(leftX, Math.round(p.y))) {
    leftX--;
  }

  var rightX = Math.round(p.x);

  while (matrix.get(rightX, Math.round(p.y))) {
    rightX++;
  }

  var x = (leftX + rightX) / 2;
  var topY = Math.round(p.y);

  while (matrix.get(Math.round(x), topY)) {
    topY--;
  }

  var bottomY = Math.round(p.y);

  while (matrix.get(Math.round(x), bottomY)) {
    bottomY++;
  }

  var y = (topY + bottomY) / 2;
  return {
    x: x,
    y: y
  };
}

function locate(matrix) {
  var finderPatternQuads = [];
  var activeFinderPatternQuads = [];
  var alignmentPatternQuads = [];
  var activeAlignmentPatternQuads = [];

  var _loop = function _loop(y) {
    var length = 0;
    var lastBit = false;
    var scans = [0, 0, 0, 0, 0];

    for (var _x13 = -1; _x13 <= matrix.width; _x13++) {
      var v = matrix.get(_x13, y);

      if (v === lastBit) {
        length++;
      } else {
        scans = [scans[1], scans[2], scans[3], scans[4], length];
        length = 1;
        lastBit = v; // Do the last 5 color changes ~ match the expected ratio for a finder pattern? 1:1:3:1:1 of b:w:b:w:b

        var averageFinderPatternBlocksize = sum(scans) / 7;
        var validFinderPattern = Math.abs(scans[0] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize && Math.abs(scans[1] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize && Math.abs(scans[2] - 3 * averageFinderPatternBlocksize) < 3 * averageFinderPatternBlocksize && Math.abs(scans[3] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize && Math.abs(scans[4] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize && !v; // And make sure the current pixel is white since finder patterns are bordered in white
        // Do the last 3 color changes ~ match the expected ratio for an alignment pattern? 1:1:1 of w:b:w

        var averageAlignmentPatternBlocksize = sum(scans.slice(-3)) / 3;
        var validAlignmentPattern = Math.abs(scans[2] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize && Math.abs(scans[3] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize && Math.abs(scans[4] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize && v; // Is the current pixel black since alignment patterns are bordered in black

        if (validFinderPattern) {
          (function () {
            // Compute the start and end x values of the large center black square
            var endX = _x13 - scans[3] - scans[4];
            var startX = endX - scans[2];
            var line = {
              startX: startX,
              endX: endX,
              y: y
            }; // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
            // that line as the starting point.

            var matchingQuads = activeFinderPatternQuads.filter(function (q) {
              return startX >= q.bottom.startX && startX <= q.bottom.endX || endX >= q.bottom.startX && startX <= q.bottom.endX || startX <= q.bottom.startX && endX >= q.bottom.endX && scans[2] / (q.bottom.endX - q.bottom.startX) < MAX_QUAD_RATIO && scans[2] / (q.bottom.endX - q.bottom.startX) > MIN_QUAD_RATIO;
            });

            if (matchingQuads.length > 0) {
              matchingQuads[0].bottom = line;
            } else {
              activeFinderPatternQuads.push({
                top: line,
                bottom: line
              });
            }
          })();
        }

        if (validAlignmentPattern) {
          (function () {
            // Compute the start and end x values of the center black square
            var endX = _x13 - scans[4];
            var startX = endX - scans[3];
            var line = {
              startX: startX,
              y: y,
              endX: endX
            }; // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
            // that line as the starting point.

            var matchingQuads = activeAlignmentPatternQuads.filter(function (q) {
              return startX >= q.bottom.startX && startX <= q.bottom.endX || endX >= q.bottom.startX && startX <= q.bottom.endX || startX <= q.bottom.startX && endX >= q.bottom.endX && scans[2] / (q.bottom.endX - q.bottom.startX) < MAX_QUAD_RATIO && scans[2] / (q.bottom.endX - q.bottom.startX) > MIN_QUAD_RATIO;
            });

            if (matchingQuads.length > 0) {
              matchingQuads[0].bottom = line;
            } else {
              activeAlignmentPatternQuads.push({
                top: line,
                bottom: line
              });
            }
          })();
        }
      }
    }

    finderPatternQuads.push.apply(finderPatternQuads, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(activeFinderPatternQuads.filter(function (q) {
      return q.bottom.y !== y && q.bottom.y - q.top.y >= 2;
    })));
    activeFinderPatternQuads = activeFinderPatternQuads.filter(function (q) {
      return q.bottom.y === y;
    });
    alignmentPatternQuads.push.apply(alignmentPatternQuads, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(activeAlignmentPatternQuads.filter(function (q) {
      return q.bottom.y !== y;
    })));
    activeAlignmentPatternQuads = activeAlignmentPatternQuads.filter(function (q) {
      return q.bottom.y === y;
    });
  };

  for (var y = 0; y <= matrix.height; y++) {
    _loop(y);
  }

  finderPatternQuads.push.apply(finderPatternQuads, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(activeFinderPatternQuads.filter(function (q) {
    return q.bottom.y - q.top.y >= 2;
  })));
  alignmentPatternQuads.push.apply(alignmentPatternQuads, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(activeAlignmentPatternQuads));
  var finderPatternGroups = finderPatternQuads.filter(function (q) {
    return q.bottom.y - q.top.y >= 2;
  }) // All quads must be at least 2px tall since the center square is larger than a block
  .map(function (q) {
    var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
    var y = (q.top.y + q.bottom.y + 1) / 2;

    if (!matrix.get(Math.round(x), Math.round(y))) {
      return;
    }

    var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, q.bottom.y - q.top.y + 1];
    var size = sum(lengths) / lengths.length;
    var score = scorePattern({
      x: Math.round(x),
      y: Math.round(y)
    }, [1, 1, 3, 1, 1], matrix);
    return {
      score: score,
      x: x,
      y: y,
      size: size
    };
  }).filter(function (q) {
    return !!q;
  }) // Filter out any rejected quads from above
  .sort(function (a, b) {
    return a.score - b.score;
  }) // Now take the top finder pattern options and try to find 2 other options with a similar size.
  .map(function (point, i, finderPatterns) {
    if (i > MAX_FINDERPATTERNS_TO_SEARCH) {
      return null;
    }

    var otherPoints = finderPatterns.filter(function (p, ii) {
      return i !== ii;
    }).map(function (p) {
      return {
        x: p.x,
        y: p.y,
        score: p.score + Math.pow(p.size - point.size, 2) / point.size,
        size: p.size
      };
    }).sort(function (a, b) {
      return a.score - b.score;
    });

    if (otherPoints.length < 2) {
      return null;
    }

    var score = point.score + otherPoints[0].score + otherPoints[1].score;
    return {
      points: [point].concat(otherPoints.slice(0, 2)),
      score: score
    };
  }).filter(function (q) {
    return !!q;
  }) // Filter out any rejected finder patterns from above
  .sort(function (a, b) {
    return a.score - b.score;
  });

  if (finderPatternGroups.length === 0) {
    return null;
  }

  var _reorderFinderPattern = reorderFinderPatterns(finderPatternGroups[0].points[0], finderPatternGroups[0].points[1], finderPatternGroups[0].points[2]),
      topRight = _reorderFinderPattern.topRight,
      topLeft = _reorderFinderPattern.topLeft,
      bottomLeft = _reorderFinderPattern.bottomLeft;

  var alignment = findAlignmentPattern(matrix, alignmentPatternQuads, topRight, topLeft, bottomLeft);
  var result = [];

  if (alignment) {
    result.push({
      alignmentPattern: {
        x: alignment.alignmentPattern.x,
        y: alignment.alignmentPattern.y
      },
      bottomLeft: {
        x: bottomLeft.x,
        y: bottomLeft.y
      },
      dimension: alignment.dimension,
      topLeft: {
        x: topLeft.x,
        y: topLeft.y
      },
      topRight: {
        x: topRight.x,
        y: topRight.y
      }
    });
  } // We normally use the center of the quads as the location of the tracking points, which is optimal for most cases and will account
  // for a skew in the image. However, In some cases, a slight skew might not be real and instead be caused by image compression
  // errors and/or low resolution. For those cases, we'd be better off centering the point exactly in the middle of the black area. We
  // compute and return the location data for the naively centered points as it is little additional work and allows for multiple
  // attempts at decoding harder images.


  var midTopRight = recenterLocation(matrix, topRight);
  var midTopLeft = recenterLocation(matrix, topLeft);
  var midBottomLeft = recenterLocation(matrix, bottomLeft);
  var centeredAlignment = findAlignmentPattern(matrix, alignmentPatternQuads, midTopRight, midTopLeft, midBottomLeft);

  if (centeredAlignment) {
    result.push({
      alignmentPattern: {
        x: centeredAlignment.alignmentPattern.x,
        y: centeredAlignment.alignmentPattern.y
      },
      bottomLeft: {
        x: midBottomLeft.x,
        y: midBottomLeft.y
      },
      topLeft: {
        x: midTopLeft.x,
        y: midTopLeft.y
      },
      topRight: {
        x: midTopRight.x,
        y: midTopRight.y
      },
      dimension: centeredAlignment.dimension
    });
  }

  if (result.length === 0) {
    return null;
  }

  return result;
}

function findAlignmentPattern(matrix, alignmentPatternQuads, topRight, topLeft, bottomLeft) {
  // Now that we've found the three finder patterns we can determine the blockSize and the size of the QR code.
  // We'll use these to help find the alignment pattern but also later when we do the extraction.
  var dimension;
  var moduleSize;

  try {
    var _computeDimension = computeDimension(topLeft, topRight, bottomLeft, matrix);

    dimension = _computeDimension.dimension;
    moduleSize = _computeDimension.moduleSize;
  } catch (e) {
    return null;
  } // Now find the alignment pattern


  var bottomRightFinderPattern = {
    x: topRight.x - topLeft.x + bottomLeft.x,
    y: topRight.y - topLeft.y + bottomLeft.y
  };
  var modulesBetweenFinderPatterns = (distance(topLeft, bottomLeft) + distance(topLeft, topRight)) / 2 / moduleSize;
  var correctionToTopLeft = 1 - 3 / modulesBetweenFinderPatterns;
  var expectedAlignmentPattern = {
    x: topLeft.x + correctionToTopLeft * (bottomRightFinderPattern.x - topLeft.x),
    y: topLeft.y + correctionToTopLeft * (bottomRightFinderPattern.y - topLeft.y)
  };
  var alignmentPatterns = alignmentPatternQuads.map(function (q) {
    var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
    var y = (q.top.y + q.bottom.y + 1) / 2;

    if (!matrix.get(Math.floor(x), Math.floor(y))) {
      return;
    }

    var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, q.bottom.y - q.top.y + 1];
    var size = sum(lengths) / lengths.length;
    var sizeScore = scorePattern({
      x: Math.floor(x),
      y: Math.floor(y)
    }, [1, 1, 1], matrix);
    var score = sizeScore + distance({
      x: x,
      y: y
    }, expectedAlignmentPattern);
    return {
      x: x,
      y: y,
      score: score
    };
  }).filter(function (v) {
    return !!v;
  }).sort(function (a, b) {
    return a.score - b.score;
  }); // If there are less than 15 modules between finder patterns it's a version 1 QR code and as such has no alignmemnt pattern
  // so we can only use our best guess.

  var alignmentPattern = modulesBetweenFinderPatterns >= 15 && alignmentPatterns.length ? alignmentPatterns[0] : expectedAlignmentPattern;
  return {
    alignmentPattern: alignmentPattern,
    dimension: dimension
  };
}

function scan(matrix) {
  var locations = locate(matrix);

  if (!locations) {
    return null;
  }

  var _iterator8 = _createForOfIteratorHelper(locations),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var location = _step8.value;
      var extracted = extract(matrix, location);
      var decoded = decode$2(extracted.matrix);

      if (decoded) {
        return {
          binaryData: decoded.bytes,
          data: decoded.text,
          chunks: decoded.chunks,
          location: {
            topRightCorner: extracted.mappingFunction(location.dimension, 0),
            topLeftCorner: extracted.mappingFunction(0, 0),
            bottomRightCorner: extracted.mappingFunction(location.dimension, location.dimension),
            bottomLeftCorner: extracted.mappingFunction(0, location.dimension),
            topRightFinderPattern: location.topRight,
            topLeftFinderPattern: location.topLeft,
            bottomLeftFinderPattern: location.bottomLeft,
            bottomRightAlignmentPattern: location.alignmentPattern
          },
          matrix: extracted.matrix
        };
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  return null;
}

var defaultOptions = {
  inversionAttempts: "attemptBoth",
  greyScaleWeights: {
    red: 0.2126,
    green: 0.7152,
    blue: 0.0722,
    useIntegerApproximation: false
  },
  canOverwriteImage: true
};

function mergeObject(target, src) {
  Object.keys(src).forEach(function (opt) {
    target[opt] = src[opt];
  });
}

function jsQR(data, width, height) {
  var providedOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = Object.create(null);
  mergeObject(options, defaultOptions);
  mergeObject(options, providedOptions);
  var tryInvertedFirst = options.inversionAttempts === "onlyInvert" || options.inversionAttempts === "invertFirst";
  var shouldInvert = options.inversionAttempts === "attemptBoth" || tryInvertedFirst;

  var _binarize = binarize(data, width, height, shouldInvert, options.greyScaleWeights, options.canOverwriteImage),
      binarized = _binarize.binarized,
      inverted = _binarize.inverted;

  var result = scan(tryInvertedFirst ? inverted : binarized);

  if (!result && (options.inversionAttempts === "attemptBoth" || options.inversionAttempts === "invertFirst")) {
    result = scan(tryInvertedFirst ? binarized : inverted);
  }

  return result;
}

jsQR["default"] = jsQR;
/* harmony default export */ __webpack_exports__["default"] = (jsQR);

/***/ }),

/***/ "./Decoder1D.js":
/*!**********************!*\
  !*** ./Decoder1D.js ***!
  \**********************/
/*! exports provided: CreateTable, CreateScanTable, CreateImageData, Scale, Rotate, ScanImage, Image, FormatPriority, Multiple, availableFormats, Locations, Main, allTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTable", function() { return CreateTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScanTable", function() { return CreateScanTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateImageData", function() { return CreateImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotate", function() { return Rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanImage", function() { return ScanImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPriority", function() { return FormatPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiple", function() { return Multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableFormats", function() { return availableFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locations", function() { return Locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTables", function() { return allTables; });
/* --------------------------------------------------
Hybrid ES2015/ESLint'ed fork of Javascript Only Barcode_Reader

Original JOB sourcecode by Eddie Larsson <https://github.com/EddieLa/BarcodeReader>

This software is provided under the MIT license, http://opensource.org/licenses/MIT.
All use of this software must include this
text, including the reference to the creator of the original source code. The
originator accepts no responsibility of any kind pertaining to
use of this software.

Copyright (c) 2013 Eddie Larsson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

------------------------ */
var availableFormats = ['Code128', 'Code93', 'Code39', 'EAN-13', '2Of5', 'Inter2Of5', 'Codabar'];
var TwoOfFiveEncoding = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];
var Code128Encoding = {
  '212222': {
    A: ' ',
    B: ' ',
    C: '00'
  },
  '222122': {
    A: '!',
    B: '!',
    C: '01'
  },
  '222221': {
    A: '\'',
    B: '\'',
    C: '02'
  },
  '121223': {
    A: '#',
    B: '#',
    C: '03'
  },
  '121322': {
    A: '$',
    B: '$',
    C: '04'
  },
  '131222': {
    A: '%',
    B: '%',
    C: '05'
  },
  '122213': {
    A: '&',
    B: '&',
    C: '06'
  },
  '122312': {
    A: '\'',
    B: '\'',
    C: '07'
  },
  '132212': {
    A: '(',
    B: '(',
    C: '08'
  },
  '221213': {
    A: ')',
    B: ')',
    C: '09'
  },
  '221312': {
    A: '*',
    B: '*',
    C: '10'
  },
  '231212': {
    A: '+',
    B: '+',
    C: '11'
  },
  '112232': {
    A: ',',
    B: ',',
    C: '12'
  },
  '122132': {
    A: '-',
    B: '-',
    C: '13'
  },
  '122231': {
    A: '.',
    B: '.',
    C: '14'
  },
  '113222': {
    A: '/',
    B: '/',
    C: '15'
  },
  '123122': {
    A: '0',
    B: '0',
    C: '16'
  },
  '123221': {
    A: '1',
    B: '1',
    C: '17'
  },
  '223211': {
    A: '2',
    B: '2',
    C: '18'
  },
  '221132': {
    A: '3',
    B: '3',
    C: '19'
  },
  '221231': {
    A: '4',
    B: '4',
    C: '20'
  },
  '213212': {
    A: '5',
    B: '5',
    C: '21'
  },
  '223112': {
    A: '6',
    B: '6',
    C: '22'
  },
  '312131': {
    A: '7',
    B: '7',
    C: '23'
  },
  '311222': {
    A: '8',
    B: '8',
    C: '24'
  },
  '321122': {
    A: '9',
    B: '9',
    C: '25'
  },
  '321221': {
    A: ':',
    B: ':',
    C: '26'
  },
  '312212': {
    A: ';',
    B: ';',
    C: '27'
  },
  '322112': {
    A: '<',
    B: '<',
    C: '28'
  },
  '322211': {
    A: '=',
    B: '=',
    C: '29'
  },
  '212123': {
    A: '>',
    B: '>',
    C: '30'
  },
  '212321': {
    A: '?',
    B: '?',
    C: '31'
  },
  '232121': {
    A: '@',
    B: '@',
    C: '32'
  },
  '111323': {
    A: 'A',
    B: 'A',
    C: '33'
  },
  '131123': {
    A: 'B',
    B: 'B',
    C: '34'
  },
  '131321': {
    A: 'C',
    B: 'C',
    C: '35'
  },
  '112313': {
    A: 'D',
    B: 'D',
    C: '36'
  },
  '132113': {
    A: 'E',
    B: 'E',
    C: '37'
  },
  '132311': {
    A: 'F',
    B: 'F',
    C: '38'
  },
  '211313': {
    A: 'G',
    B: 'G',
    C: '39'
  },
  '231113': {
    A: 'H',
    B: 'H',
    C: '40'
  },
  '231311': {
    A: 'I',
    B: 'I',
    C: '41'
  },
  '112133': {
    A: 'J',
    B: 'J',
    C: '42'
  },
  '112331': {
    A: 'K',
    B: 'K',
    C: '43'
  },
  '132131': {
    A: 'L',
    B: 'L',
    C: '44'
  },
  '113123': {
    A: 'M',
    B: 'M',
    C: '45'
  },
  '113321': {
    A: 'N',
    B: 'N',
    C: '46'
  },
  '133121': {
    A: 'O',
    B: 'O',
    C: '47'
  },
  '313121': {
    A: 'P',
    B: 'P',
    C: '48'
  },
  '211331': {
    A: 'Q',
    B: 'Q',
    C: '49'
  },
  '231131': {
    A: 'R',
    B: 'R',
    C: '50'
  },
  '213113': {
    A: 'S',
    B: 'S',
    C: '51'
  },
  '213311': {
    A: 'T',
    B: 'T',
    C: '52'
  },
  '213131': {
    A: 'U',
    B: 'U',
    C: '53'
  },
  '311123': {
    A: 'V',
    B: 'V',
    C: '54'
  },
  '311321': {
    A: 'W',
    B: 'W',
    C: '55'
  },
  '331121': {
    A: 'X',
    B: 'X',
    C: '56'
  },
  '312113': {
    A: 'Y',
    B: 'Y',
    C: '57'
  },
  '312311': {
    A: 'Z',
    B: 'Z',
    C: '58'
  },
  '332111': {
    A: '[',
    B: '[',
    C: '59'
  },
  '314111': {
    A: '\\',
    B: '\\',
    C: '60'
  },
  '221411': {
    A: ']',
    B: ']',
    C: '61'
  },
  '431111': {
    A: '^',
    B: '^',
    C: '62'
  },
  '111224': {
    A: '_',
    B: '_',
    C: '63'
  },
  '111422': {
    A: 'NUL',
    B: '`',
    C: '64'
  },
  '121124': {
    A: 'SOH',
    B: 'a',
    C: '65'
  },
  '121421': {
    A: 'STX',
    B: 'b',
    C: '66'
  },
  '141122': {
    A: 'ETX',
    B: 'c',
    C: '67'
  },
  '141221': {
    A: 'EOT',
    B: 'd',
    C: '68'
  },
  '112214': {
    A: 'ENQ',
    B: 'e',
    C: '69'
  },
  '112412': {
    A: 'ACK',
    B: 'f',
    C: '70'
  },
  '122114': {
    A: 'BEL',
    B: 'g',
    C: '71'
  },
  '122411': {
    A: 'BS',
    B: 'h',
    C: '72'
  },
  '142112': {
    A: 'HT',
    B: 'i',
    C: '73'
  },
  '142211': {
    A: 'LF',
    B: 'j',
    C: '74'
  },
  '241211': {
    A: 'VT',
    B: 'k',
    C: '75'
  },
  '221114': {
    A: 'FF',
    B: 'l',
    C: '76'
  },
  '413111': {
    A: 'CR',
    B: 'm',
    C: '77'
  },
  '241112': {
    A: 'SO',
    B: 'n',
    C: '78'
  },
  '134111': {
    A: 'SI',
    B: 'o',
    C: '79'
  },
  '111242': {
    A: 'DLE',
    B: 'p',
    C: '80'
  },
  '121142': {
    A: 'DC1',
    B: 'q',
    C: '81'
  },
  '121241': {
    A: 'DC2',
    B: 'r',
    C: '82'
  },
  '114212': {
    A: 'DC3',
    B: 's',
    C: '83'
  },
  '124112': {
    A: 'DC4',
    B: 't',
    C: '84'
  },
  '124211': {
    A: 'NAK',
    B: 'u',
    C: '85'
  },
  '411212': {
    A: 'SYN',
    B: 'v',
    C: '86'
  },
  '421112': {
    A: 'ETB',
    B: 'w',
    C: '87'
  },
  '421211': {
    A: 'CAN',
    B: 'x',
    C: '88'
  },
  '212141': {
    A: 'EM',
    B: 'y',
    C: '89'
  },
  '214121': {
    A: 'SUB',
    B: 'z',
    C: '90'
  },
  '412121': {
    A: 'ESC',
    B: '{',
    C: '91'
  },
  '111143': {
    A: 'FS',
    B: '|',
    C: '92'
  },
  '111341': {
    A: 'GS',
    B: '}',
    C: '93'
  },
  '131141': {
    A: 'RS',
    B: '~',
    C: '94'
  },
  '114113': {
    A: 'US',
    B: 'DEL',
    C: '95'
  },
  '114311': {
    A: 'FNC3',
    B: 'FNC3',
    C: '96'
  },
  '411113': {
    A: 'FNC2',
    B: 'FNC2',
    C: '97'
  },
  '411311': {
    A: 'SHIFT_B',
    B: 'SHIFT_A',
    C: '98'
  },
  '113141': {
    A: 'Code_C',
    B: 'Code_C',
    C: '99'
  },
  '114131': {
    A: 'Code_B',
    B: 'FNC4',
    C: 'Code_B'
  },
  '311141': {
    A: 'FNC4',
    B: 'Code_A',
    C: 'Code_A'
  },
  '411131': {
    A: 'FNC1',
    B: 'FNC1',
    C: 'FNC1'
  },
  '211412': 'A',
  '211214': 'B',
  '211232': 'C',
  '233111': {
    A: 'STOP',
    B: 'STOP',
    C: 'STOP'
  },
  value: ['212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213', '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132', '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211', '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313', '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331', '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111', '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214', '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111', '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141', '214121', '412121', '111143', '111341', '131141', '114113', '114311', '411113', '411311', '113141', '114131', '311141', '411131', '211412', '211214', '211232', '233111']
};
var Code93Encoding = {
  '131112': {
    value: 0,
    character: '0'
  },
  '111213': {
    value: 1,
    character: '1'
  },
  '111312': {
    value: 2,
    character: '2'
  },
  '111411': {
    value: 3,
    character: '3'
  },
  '121113': {
    value: 4,
    character: '4'
  },
  '121212': {
    value: 5,
    character: '5'
  },
  '121311': {
    value: 6,
    character: '6'
  },
  '111114': {
    value: 7,
    character: '7'
  },
  '131211': {
    value: 8,
    character: '8'
  },
  '141111': {
    value: 9,
    character: '9'
  },
  '211113': {
    value: 10,
    character: 'A'
  },
  '211212': {
    value: 11,
    character: 'B'
  },
  '211311': {
    value: 12,
    character: 'C'
  },
  '221112': {
    value: 13,
    character: 'D'
  },
  '221211': {
    value: 14,
    character: 'E'
  },
  '231111': {
    value: 15,
    character: 'F'
  },
  '112113': {
    value: 16,
    character: 'G'
  },
  '112212': {
    value: 17,
    character: 'H'
  },
  '112311': {
    value: 18,
    character: 'I'
  },
  '122112': {
    value: 19,
    character: 'J'
  },
  '132111': {
    value: 20,
    character: 'K'
  },
  '111123': {
    value: 21,
    character: 'L'
  },
  '111222': {
    value: 22,
    character: 'M'
  },
  '111321': {
    value: 23,
    character: 'N'
  },
  '121122': {
    value: 24,
    character: 'O'
  },
  '131121': {
    value: 25,
    character: 'P'
  },
  '212112': {
    value: 26,
    character: 'Q'
  },
  '212211': {
    value: 27,
    character: 'R'
  },
  '211122': {
    value: 28,
    character: 'S'
  },
  '211221': {
    value: 29,
    character: 'T'
  },
  '221121': {
    value: 30,
    character: 'U'
  },
  '222111': {
    value: 31,
    character: 'V'
  },
  '112122': {
    value: 32,
    character: 'W'
  },
  '112221': {
    value: 33,
    character: 'X'
  },
  '122121': {
    value: 34,
    character: 'Y'
  },
  '123111': {
    value: 35,
    character: 'Z'
  },
  '121131': {
    value: 36,
    character: '-'
  },
  '311112': {
    value: 37,
    character: '.'
  },
  '311211': {
    value: 38,
    character: ' '
  },
  '321111': {
    value: 39,
    character: '$'
  },
  '112131': {
    value: 40,
    character: '/'
  },
  '113121': {
    value: 41,
    character: '+'
  },
  '211131': {
    value: 42,
    character: '%'
  },
  '121221': {
    value: 43,
    character: '($)'
  },
  '312111': {
    value: 44,
    character: '(%)'
  },
  '311121': {
    value: 45,
    character: '(/)'
  },
  '122211': {
    value: 46,
    character: '(+)'
  },
  '111141': {
    value: -1,
    character: '*'
  }
};
var Code39Encoding = {
  '111221211': {
    value: 0,
    character: '0'
  },
  '211211112': {
    value: 1,
    character: '1'
  },
  '112211112': {
    value: 2,
    character: '2'
  },
  '212211111': {
    value: 3,
    character: '3'
  },
  '111221112': {
    value: 4,
    character: '4'
  },
  '211221111': {
    value: 5,
    character: '5'
  },
  '112221111': {
    value: 6,
    character: '6'
  },
  '111211212': {
    value: 7,
    character: '7'
  },
  '211211211': {
    value: 8,
    character: '8'
  },
  '112211211': {
    value: 9,
    character: '9'
  },
  '211112112': {
    value: 10,
    character: 'A'
  },
  '112112112': {
    value: 11,
    character: 'B'
  },
  '212112111': {
    value: 12,
    character: 'C'
  },
  '111122112': {
    value: 13,
    character: 'D'
  },
  '211122111': {
    value: 14,
    character: 'E'
  },
  '112122111': {
    value: 15,
    character: 'F'
  },
  '111112212': {
    value: 16,
    character: 'G'
  },
  '211112211': {
    value: 17,
    character: 'H'
  },
  '112112211': {
    value: 18,
    character: 'I'
  },
  '111122211': {
    value: 19,
    character: 'J'
  },
  '211111122': {
    value: 20,
    character: 'K'
  },
  '112111122': {
    value: 21,
    character: 'L'
  },
  '212111121': {
    value: 22,
    character: 'M'
  },
  '111121122': {
    value: 23,
    character: 'N'
  },
  '211121121': {
    value: 24,
    character: 'O'
  },
  '112121121': {
    value: 25,
    character: 'P'
  },
  '111111222': {
    value: 26,
    character: 'Q'
  },
  '211111221': {
    value: 27,
    character: 'R'
  },
  '112111221': {
    value: 28,
    character: 'S'
  },
  '111121221': {
    value: 29,
    character: 'T'
  },
  '221111112': {
    value: 30,
    character: 'U'
  },
  '122111112': {
    value: 31,
    character: 'V'
  },
  '222111111': {
    value: 32,
    character: 'W'
  },
  '121121112': {
    value: 33,
    character: 'X'
  },
  '221121111': {
    value: 34,
    character: 'Y'
  },
  '122121111': {
    value: 35,
    character: 'Z'
  },
  '121111212': {
    value: 36,
    character: '-'
  },
  '221111211': {
    value: 37,
    character: '.'
  },
  '122111211': {
    value: 38,
    character: ' '
  },
  '121212111': {
    value: 39,
    character: '$'
  },
  '121211121': {
    value: 40,
    character: '/'
  },
  '121112121': {
    value: 41,
    character: '+'
  },
  '111212121': {
    value: 42,
    character: '%'
  },
  '121121211': {
    value: -1,
    character: '*'
  }
};
var ExtendedEncoding = {
  '/A': '!',
  '/B': '\'',
  '/C': '#',
  '/D': '$',
  '/E': '%',
  '/F': '&',
  '/G': '\'',
  '/H': '(',
  '/I': ')',
  '/J': '*',
  '/K': '+',
  '/L': ',',
  '/O': '/',
  '/Z': ':',
  '%F': ';',
  '%G': '<',
  '%H': '=',
  '%I': '>',
  '%J': '?',
  '%K': '[',
  '%L': '\\',
  '%M': ']',
  '%N': '^',
  '%O': '_',
  '+A': 'a',
  '+B': 'b',
  '+C': 'c',
  '+D': 'd',
  '+E': 'e',
  '+F': 'f',
  '+G': 'g',
  '+H': 'h',
  '+I': 'i',
  '+J': 'j',
  '+K': 'k',
  '+L': 'l',
  '+M': 'm',
  '+N': 'n',
  '+O': 'o',
  '+P': 'p',
  '+Q': 'q',
  '+R': 'r',
  '+S': 's',
  '+T': 't',
  '+U': 'u',
  '+V': 'v',
  '+W': 'w',
  '+X': 'x',
  '+Y': 'y',
  '+Z': 'z',
  '%P': '{',
  '%Q': '|',
  '%R': '|',
  '%S': '~'
};
var CodaBarEncoding = {
  '0000011': '0',
  '0000110': '1',
  '0001001': '2',
  '1100000': '3',
  '0010010': '4',
  '1000010': '5',
  '0100001': '6',
  '0100100': '7',
  '0110000': '8',
  '1001000': '9',
  '0001100': '-',
  '0011000': '$',
  '1000101': ':',
  '1010001': '/',
  '1010100': '.',
  '0011111': '+',
  '0011010': 'A',
  '0001011': 'B',
  '0101001': 'C',
  '0001110': 'D'
};
var EAN13Encoding = {
  'L': {
    '3211': 0,
    '2221': 1,
    '2122': 2,
    '1411': 3,
    '1132': 4,
    '1231': 5,
    '1114': 6,
    '1312': 7,
    '1213': 8,
    '3112': 9
  },
  'G': {
    '1123': 0,
    '1222': 1,
    '2212': 2,
    '1141': 3,
    '2311': 4,
    '1321': 5,
    '4111': 6,
    '2131': 7,
    '3121': 8,
    '2113': 9
  },
  'R': {
    '3211': 0,
    '2221': 1,
    '2122': 2,
    '1411': 3,
    '1132': 4,
    '1231': 5,
    '1114': 6,
    '1312': 7,
    '1213': 8,
    '3112': 9
  },
  formats: {
    'LLLLLL': 0,
    'LLGLGG': 1,
    'LLGGLG': 2,
    'LLGGGL': 3,
    'LGLLGG': 4,
    'LGGLLG': 5,
    'LGGGLL': 6,
    'LGLGLG': 7,
    'LGLGGL': 8,
    'LGGLGL': 9
  }
};
var SecureCodabar = true;
var Secure2Of5 = true;
var Image, ScanImage, allTables, FormatPriority, Multiple, Locations;

function Rotate(data, width, height, rotation) {
  var newData = [];
  var x, y;

  switch (rotation) {
    case 90:
      for (x = 0; x < width * 4; x += 4) {
        for (y = width * 4 * (height - 1); y >= 0; y -= width * 4) {
          newData.push(data[x + y]);
          newData.push(data[x + y + 1]);
          newData.push(data[x + y + 2]);
          newData.push(data[x + y + 3]);
        }
      }

      break;

    case -90:
      for (x = width * 4 - 4; x >= 0; x -= 4) {
        for (y = 0; y < data.length; y += width * 4) {
          newData.push(data[x + y]);
          newData.push(data[x + y + 1]);
          newData.push(data[x + y + 2]);
          newData.push(data[x + y + 3]);
        }
      }

      break;

    case 180:
      for (y = width * 4 * (height - 1); y >= 0; y -= width * 4) {
        for (x = width * 4 - 4; x >= 0; x -= 4) {
          newData.push(data[x + y]);
          newData.push(data[x + y + 1]);
          newData.push(data[x + y + 2]);
          newData.push(data[x + y + 3]);
        }
      }

  }

  return new Uint8ClampedArray(newData);
}

function BoxFilter(data, width, radius) {
  // Pre-allocate
  var sum = new Array(width).fill(0);
  var elements = new Array(width).fill().map(function (e, i) {
    return [];
  });
  var innerLoopLength = (radius + 1) * width;
  var dataLength = data.length;
  var output = new Array(dataLength + width);

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < innerLoopLength; y += width) {
      elements[x].push(data[x + y]);
      sum[x] = sum[x] + data[x + y];
    }
  } // elements length doesn't change from here
  // can be made const so we don't have to reeval


  var elementsLength = elements.length;

  for (var _y = 0; _y < dataLength; _y += width) {
    for (var _x = 0; _x < width; _x++) {
      var newVal = 0;
      var length = 0;
      var tempLength = 0;

      for (var i = _x; i >= 0; i--) {
        newVal += sum[i];
        length++;
        if (length === radius + 1) break;
      }

      for (var _i = _x + 1; _i < width; _i++) {
        newVal += sum[_i];
        length++;
        tempLength++;
        if (tempLength === radius) break;
      }

      length *= elements[0].length;
      newVal /= length;
      output[_y + _x] = newVal;
    }

    if (_y - radius * width >= 0) {
      for (var _i2 = 0; _i2 < elementsLength; _i2++) {
        var val = elements[_i2].shift();

        sum[_i2] = sum[_i2] - val;
      }
    }

    if (_y + (radius + 1) * width < dataLength) {
      for (var _i3 = 0; _i3 < elementsLength; _i3++) {
        var _val = data[_i3 + _y + (radius + 1) * width];

        elements[_i3].push(_val);

        sum[_i3] = sum[_i3] + _val;
      }
    }
  }

  return output;
}

function Scale(data, width, height) {
  var newData = [];
  var x, y;

  for (y = 0; y < data.length; y += width * 8) {
    for (x = 0; x < width * 4; x += 8) {
      var r = (data[y + x] + data[y + x + 4] + data[y + width * 4 + x] + data[y + width * 4 + x + 4]) / 4;
      newData.push(r);
      var g = (data[y + x + 1] + data[y + x + 4 + 1] + data[y + width * 4 + x + 1] + data[y + width * 4 + x + 4 + 1]) / 4;
      newData.push(g);
      var b = (data[y + x + 2] + data[y + x + 4 + 2] + data[y + width * 4 + x + 2] + data[y + width * 4 + x + 4 + 2]) / 4;
      newData.push(b);
      newData.push(255);
    }
  }

  return new Uint8ClampedArray(newData);
}

function IntensityGradient(data, width) {
  var newData = [];
  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;
  var x, y, i;

  for (y = 0; y < data.length; y += width * 4) {
    for (x = 0; x < width * 4; x += 4) {
      var horizontalDiff = 0;
      var verticalDiff = 0;

      for (i = 1; i < 2; i++) {
        if (x + i * 4 < width * 4) {
          horizontalDiff = horizontalDiff + Math.abs(data[y + x] - data[y + x + i * 4]);
        }

        if (y + width * 4 * i < data.length) {
          verticalDiff += verticalDiff + Math.abs(data[y + x] - data[y + x + width * 4 * i]);
        }
      }

      var diff = horizontalDiff - verticalDiff;
      max = diff > max ? diff : max;
      min = diff < min ? diff : min;
      newData.push(diff);
    }
  }

  if (min < 0) {
    for (i = 0; i < newData.length; i++) {
      newData[i] = newData[i] - min;
    }

    min = 0;
  }

  return newData;
}

function greyScale(data) {
  for (var i = 0; i < data.length; i += 4) {
    var max = 0;
    var min = 255;
    max = data[i] > max ? data[i] : max;
    max = data[i + 1] > max ? data[i + 1] : max;
    max = data[i + 2] > max ? data[i + 2] : max;
    min = data[i] < min ? data[i] : min;
    min = data[i + 1] < min ? data[i + 1] : min;
    min = data[i + 2] < min ? data[i + 2] : min;
    data[i] = data[i + 1] = data[i + 2] = (max + min) / 2;
  }
} // function histogram(data) {
//   var i;
//   var hist = [];
//   for (i = 0; i < 256; i++) {
//     hist[i] = 0;
//   }
//   for (i = 0; i < data.length; i += 4) {
//     hist[data[i]] = hist[data[i]] + 1;
//   }
//   return hist;
// }


function otsu(histogram, total) {
  var i;
  var sum = 0;
  var sumB = 0;
  var wB = 0;
  var wF = 0;
  var mB;
  var mF;
  var max = 0.0;
  var between = 0.0;
  var threshold1 = 0.0;
  var threshold2 = 0.0;
  var histogramLength = histogram.length;

  for (i = 1; i < histogramLength; ++i) {
    sum += i * histogram[i];
  }

  for (i = 0; i < histogramLength; ++i) {
    wB += histogram[i];

    if (wB === 0) {
      continue;
    }

    wF = total - wB;

    if (wF === 0) {
      break;
    }

    sumB += i * histogram[i];
    mB = sumB / wB;
    mF = (sum - sumB) / wF;
    between = wB * wF * Math.pow(mB - mF, 2);

    if (between >= max) {
      threshold1 = i;

      if (between > max) {
        threshold2 = i;
      }

      max = between;
    }
  }

  return (threshold1 + threshold2) / 2.0;
}

function CreateImageData() {
  var Converter;
  var x, y;
  Image.data = new Uint8ClampedArray(Image.width * Image.height * 4);

  for (y = 0; y < Image.height; y++) {
    for (x = 0; x < Image.width; x++) {
      Converter = y * 4 * Image.width;
      Image.data[Converter + x * 4] = Image.table[x][y][0];
      Image.data[Converter + x * 4 + 1] = Image.table[x][y][1];
      Image.data[Converter + x * 4 + 2] = Image.table[x][y][2];
      Image.data[Converter + x * 4 + 3] = Image.table[x][y][3];
    }
  }
} // function CreateScanImageData() {
//   var Converter;
//   var x, y;
//   ScanImage.data = new Uint8ClampedArray(ScanImage.width * ScanImage.height * 4);
//   for (y = 0; y < ScanImage.height; y++) {
//     for (x = 0; x < ScanImage.width; x++) {
//       Converter = y * 4 * ScanImage.width;
//       ScanImage.data[Converter + x * 4] = ScanImage.table[x][y][0];
//       ScanImage.data[Converter + x * 4 + 1] = ScanImage.table[x][y][1];
//       ScanImage.data[Converter + x * 4 + 2] = ScanImage.table[x][y][2];
//       ScanImage.data[Converter + x * 4 + 3] = ScanImage.table[x][y][3];
//     }
//   }
// }


function ShuffleTable() {
  var imageLengthX4 = Image.width * 4;
  Image.table = new Array(imageLengthX4 / 4).fill().map(function (e, i) {
    return [];
  });
  ;

  for (var i = 0; i < imageLengthX4; i += 4) {
    var tempArray = [];

    for (var j = i; j < Image.data.length; j += imageLengthX4) {
      tempArray.push([Image.data[j], Image.data[j + 1], Image.data[j + 2], Image.data[j + 3]]);
    }

    Image.table[i / 4] = tempArray;
  }
}

function CreateTable() {
  return new Promise(function (resolve, reject) {
    ShuffleTable();
    resolve('CreateTable Complete');
  });
}

function CreateScanTable() {
  return new Promise(function (resolve, reject) {
    var scanImageDataLength = ScanImage.data.length;
    var scanImageDataX4 = ScanImage.width * 4;
    ScanImage.table = new Array(scanImageDataX4 / 4).fill().map(function (e, i) {
      return [];
    });

    for (var i = 0; i < scanImageDataX4; i += 4) {
      var tempArray = [];

      for (var j = i; j < scanImageDataLength; j += scanImageDataX4) {
        tempArray.push([ScanImage.data[j], ScanImage.data[j + 1], ScanImage.data[j + 2], ScanImage.data[j + 3]]);
      }

      ScanImage.table[i / 4] = tempArray;
    }

    resolve('CreateScanTable Complete');
  });
}

function EnlargeTable(h, w) {
  var TempArray = [];
  var x, y, i;

  for (x = 0; x < Image.width; x++) {
    TempArray = [];

    for (y = 0; y < Image.height; y++) {
      for (i = 0; i < h; i++) {
        TempArray.push(Image.table[x][y]);
      }
    }

    Image.table[x] = TempArray.slice();
  }

  TempArray = Image.table.slice();

  for (x = 0; x < Image.width; x++) {
    for (i = 0; i < w; i++) {
      Image.table[x * w + i] = TempArray[x].slice();
    }
  }

  Image.width = Image.table.length;
  Image.height = Image.table[0].length;
  CreateImageData();
}

function ScaleHeight(scale) {
  var tempArray = [];
  var avrgRed = 0;
  var avrgGreen = 0;
  var avrgBlue = 0;
  var i, j, k;

  for (i = 0; i < Image.height - scale; i += scale) {
    for (j = 0; j < Image.width; j++) {
      avrgRed = 0;
      avrgGreen = 0;
      avrgBlue = 0;

      for (k = i; k < i + scale; k++) {
        avrgRed += Image.table[j][k][0];
        avrgGreen += Image.table[j][k][1];
        avrgBlue += Image.table[j][k][2];
      }

      tempArray.push(avrgRed / scale);
      tempArray.push(avrgGreen / scale);
      tempArray.push(avrgBlue / scale);
      tempArray.push(255);
    }
  }

  return new Uint8ClampedArray(tempArray);
}

function Intersects(rectOne, rectTwo) {
  return rectOne[0][0] <= rectTwo[0][1] && rectTwo[0][0] <= rectOne[0][1] && rectOne[1][0] <= rectTwo[1][1] && rectTwo[1][0] <= rectOne[1][1];
}

function maxLocalization(max, maxPos, data) {
  var originalMax = max;
  var rects = [];
  var x, y, i;

  do {
    var startX = maxPos % Image.width;
    var startY = (maxPos - startX) / Image.width;
    var minY = 0;
    var maxY = Image.height;
    var minX = 0;
    var maxX = Image.width - 1;

    for (y = startY; y < Image.height - 1; y++) {
      if (Image.table[startX][y + 1][0] === 0) {
        maxY = y;
        break;
      }
    }

    for (y = startY; y > 0; y--) {
      if (Image.table[startX][y - 1][0] === 0) {
        minY = y;
        break;
      }
    }

    for (x = startX; x < Image.width - 1; x++) {
      if (Image.table[x + 1][startY][0] === 0) {
        maxX = x;
        break;
      }
    }

    for (x = startX; x > 0; x--) {
      if (Image.table[x - 1][startY][0] === 0) {
        minX = x;
        break;
      }
    }

    for (y = minY * Image.width; y <= maxY * Image.width; y += Image.width) {
      for (x = minX; x <= maxX; x++) {
        data[y + x] = 0;
      }
    }

    var newRect = [[minX, maxX], [minY, maxY]];

    for (i = 0; i < rects.length; i++) {
      if (Intersects(newRect, rects[i])) {
        if (rects[i][0][1] - rects[i][0][0] > newRect[0][1] - newRect[0][0]) {
          rects[i][0][0] = rects[i][0][0] < newRect[0][0] ? rects[i][0][0] : newRect[0][0];
          rects[i][0][1] = rects[i][0][1] > newRect[0][1] ? rects[i][0][1] : newRect[0][1];
          newRect = [];
          break;
        } else {
          rects[i][0][0] = rects[i][0][0] < newRect[0][0] ? rects[i][0][0] : newRect[0][0];
          rects[i][0][1] = rects[i][0][1] > newRect[0][1] ? rects[i][0][1] : newRect[0][1];
          rects[i][1][0] = newRect[1][0];
          rects[i][1][1] = newRect[1][1];
          newRect = [];
          break;
        }
      }
    }

    if (newRect.length > 0) {
      rects.push(newRect);
    }

    max = 0;
    maxPos = 0;

    for (i = 0; i < data.length; i++) {
      if (data[i] > max) {
        max = data[i];
        maxPos = i;
      }
    }
  } while (max > originalMax * 0.70);

  return rects;
}

function ImgProcessing() {
  var newData;
  var min;
  var i, x, y;
  var max = 0;
  var maxPos = 0;
  var avrgLight = 0;
  greyScale(Image.data);
  newData = IntensityGradient(Image.data, Image.width);
  min = newData[0];
  newData = BoxFilter(newData, Image.width, 15);

  for (i = 1; i < newData.length; i++) {
    min = min > newData[i] ? newData[i] : min;
  }

  for (i = 0; i < newData.length; i++) {
    newData[i] = Math.round(newData[i] - min);
    avrgLight += newData[i];

    if (max < newData[i]) {
      max = newData[i];
      maxPos = i;
    }
  }

  avrgLight /= newData.length;

  if (avrgLight < 15) {
    newData = BoxFilter(newData, Image.width, 8);
    min = newData[0];

    for (i = 1; i < newData.length; i++) {
      min = min > newData[i] ? newData[i] : min;
    }

    max = 0;
    maxPos = 0;

    for (i = 0; i < newData.length; i++) {
      newData[i] = Math.round(newData[i] - min);

      if (max < newData[i]) {
        max = newData[i];
        maxPos = i;
      }
    }
  }

  var hist = [];

  for (i = 0; i <= max; i++) {
    hist[i] = 0;
  }

  for (i = 0; i < newData.length; i++) {
    hist[newData[i]] = hist[newData[i]] + 1;
  }

  var thresh = otsu(hist, newData.length);

  for (i = 0; i < newData.length; i++) {
    if (newData[i] < thresh) {
      Image.data[i * 4] = Image.data[i * 4 + 1] = Image.data[i * 4 + 2] = 0;
    } else {
      Image.data[i * 4] = Image.data[i * 4 + 1] = Image.data[i * 4 + 2] = 255;
    }
  }

  ShuffleTable();
  var rects = maxLocalization(max, maxPos, newData);
  var feedBack = [];

  for (i = 0; i < rects.length; i++) {
    feedBack.push({
      x: rects[i][0][0],
      y: rects[i][1][0],
      width: rects[i][0][1] - rects[i][0][0],
      height: rects[i][1][1] - rects[i][1][0]
    });
  }

  if (feedBack.length > 0) {
    postMessage({
      result: feedBack,
      success: 'localization'
    });
  }

  Locations = feedBack;
  allTables = [];

  for (i = 0; i < rects.length; i++) {
    var newTable = [];

    for (x = rects[i][0][0] * 2; x < rects[i][0][1] * 2; x++) {
      var tempArray = [];

      for (y = rects[i][1][0] * 2; y < rects[i][1][1] * 2; y++) {
        tempArray.push([ScanImage.table[x][y][0], ScanImage.table[x][y][1], ScanImage.table[x][y][2], 255]);
      }

      newTable.push(tempArray);
    }

    if (newTable.length < 1) continue;
    Image.table = newTable;
    Image.width = newTable.length;
    Image.height = newTable[0].length;
    CreateImageData();
    allTables.push({
      table: newTable,
      data: new Uint8ClampedArray(Image.data),
      width: Image.width,
      height: Image.height
    });
  }
} // function showImage(data, width, height) {
//   postMessage({
//     result: data,
//     width: width,
//     height: height,
//     success: 'image'
//   });
// }


function yStraighten(img, start, end) {
  var average = 0;
  var threshold;
  var newImg = new Uint8ClampedArray(Image.width * (end - start + 1) * 4);
  var i, j;

  for (i = 0; i < newImg.length; i++) {
    newImg[i] = 255;
  }

  for (i = 0; i < Image.width * 4; i += 4) {
    threshold = end;
    average = (img[i] + img[i + 1] + img[i + 2]) / 3;

    if (i < Image.width * 4 - 4) {
      average += (img[i + 4] + img[i + 5] + img[i + 6]) / 3;
      average /= 2;
    }

    for (j = i; j < newImg.length; j += Image.width * 4) {
      if (average < threshold) {
        newImg[j] = newImg[j + 1] = newImg[j + 2] = 0;
      }

      threshold--;
    }
  }

  return newImg;
}

function CheckEan13(values, middle) {
  if (middle) {
    if (values.length !== 5) return false;
  } else {
    if (values.length !== 3) return false;
  }

  var avrg = 0;

  for (var i = 0; i < values.length; i++) {
    avrg += values[i];
  }

  avrg /= values.length;

  for (var _i4 = 0; _i4 < values.length; _i4++) {
    if (values[_i4] / avrg < 0.5 || values[_i4] / avrg > 1.5) return false;
  }

  return true;
}

function BinaryConfiguration(binaryString, type) {
  var result = [];
  var binTemp = [];
  var count = 0;
  var len;
  var totalBars;
  var i;

  if (type === 'Code128' || type === 'Code93') {
    totalBars = 6;
    len = binaryString[0];
    if (type === 'Code128') len /= 2;

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 6) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    do {
      if (binaryString.length === 7 && type === 'Code128') {
        result.push(binaryString.splice(0, binaryString.length));
      } else {
        result.push(binaryString.splice(0, totalBars));
      }

      if (type === 'Code93' && binaryString.length < 6) binaryString.splice(0, totalBars);
    } while (binaryString.length > 0);
  }

  if (type === 'Code39') {
    totalBars = 9;
    len = binaryString[0];

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 5) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    do {
      result.push(binaryString.splice(0, totalBars));
      binaryString.splice(0, 1);
    } while (binaryString.length > 0);
  }

  if (type === 'EAN-13') {
    totalBars = 4;
    len = binaryString[0];
    var secureCount = 0;

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 6) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    if (CheckEan13(binaryString.splice(0, 3), false)) secureCount++;
    count = 0;

    do {
      result.push(binaryString.splice(0, totalBars));
      count++;

      if (count === 6) {
        if (CheckEan13(binaryString.splice(0, 5), true)) secureCount++;
      }
    } while (result.length < 12 && binaryString.length > 0);

    if (CheckEan13(binaryString.splice(0, 3), false)) secureCount++;
    if (secureCount < 2) return [];
  }

  if (type === '2Of5') {
    totalBars = 5;
    len = binaryString[0] / 2;

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 5) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    var temp = binaryString.splice(0, 6);
    result.push(temp);

    do {
      binTemp = [];

      for (i = 0; i < totalBars; i++) {
        binTemp.push(binaryString.splice(0, 1)[0]); // binaryString.splice(0, 1)[0];
      }

      result.push(binTemp);
      if (binaryString.length === 5) result.push(binaryString.splice(0, 5));
    } while (binaryString.length > 0);
  }

  if (type === 'Inter2Of5') {
    totalBars = 5;
    len = binaryString[0];

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 5) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    result.push(binaryString.splice(0, 4));
    var binTempWhite = [];

    do {
      binTemp = [];
      binTempWhite = [];

      for (i = 0; i < totalBars; i++) {
        binTemp.push(binaryString.splice(0, 1)[0]);
        binTempWhite.push(binaryString.splice(0, 1)[0]);
      }

      result.push(binTemp);
      result.push(binTempWhite);
      if (binaryString.length === 3) result.push(binaryString.splice(0, 3));
    } while (binaryString.length > 0);
  }

  if (type === 'Codabar') {
    totalBars = 7;
    len = binaryString[0];

    for (i = 0; i < binaryString.length; i++) {
      if (binaryString[i] > len * 5) {
        binaryString.splice(i, binaryString.length);
        break;
      }
    }

    do {
      result.push(binaryString.splice(0, totalBars));
      binaryString.splice(0, 1);
    } while (binaryString.length > 0);
  }

  return result;
}

function TwoOfFiveStartEnd(values, start) {
  if (values.length < 5 || values.length > 6) return false;
  var maximum = 0;
  var TwoOfFiveMax = [0, 0];
  var u;

  for (u = 0; u < values.length; u++) {
    if (values[u] > maximum) {
      maximum = values[u];
      TwoOfFiveMax[0] = u;
    }
  }

  maximum = 0;

  for (u = 0; u < values.length; u++) {
    if (u === TwoOfFiveMax[0]) continue;

    if (values[u] > maximum) {
      maximum = values[u];
      TwoOfFiveMax[1] = u;
    }
  }

  if (start) {
    return TwoOfFiveMax[0] + TwoOfFiveMax[1] === 2;
  }

  return TwoOfFiveMax[0] + TwoOfFiveMax[1] === 2;
}

function CheckInterleaved(values, start) {
  var average = 0;
  var i;

  for (i = 0; i < values.length; i++) {
    average += values[i];
  }

  average /= 4;

  if (start) {
    if (values.length !== 4) return false;

    for (i = 0; i < values.length; i++) {
      if (values[i] / average < 0.5 || values[i] / average > 1.5) return false;
    }

    return true;
  }

  if (values.length !== 3) return false;
  var max = 0;
  var pos;

  for (i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
      pos = i;
    }
  }

  if (pos !== 0) return false;
  if (values[0] / average < 1.5 || values[0] / average > 2.5) return false;

  for (i = 1; i < values.length; i++) {
    if (values[i] / average < 0.5 || values[i] / average > 1.5) return false;
  }

  return true;
}

function Distribution(totalBinArray, type) {
  var testData = 0;
  var result = [];
  var totalBars;
  var total;
  var maxLength;
  var k, i, j;
  var blackMax;
  var whiteMax;
  var wideAvrg;
  var narrowAvrg;
  var prevPos;
  var wideValues;
  var max;
  type = availableFormats.indexOf(type);

  if (type === 0) {
    total = 11;
    totalBars = 6;
    maxLength = 4;
  } else if (type === 1) {
    total = 9;
    totalBars = 6;
    maxLength = 4;
  } else if (type === 2) {
    total = 12;
    totalBars = 9;
  } else if (type === 3) {
    total = 7;
    totalBars = 4;
    maxLength = 4;
  } else if (type === 6) {
    totalBars = 7;
  }

  for (k = 0; k < totalBinArray.length; k++) {
    var BinArray = totalBinArray[k];
    var sum = 0;
    var counter = 0;
    var tempBin = [];

    if (type === 6) {
      var upperTolerance = 1.5;
      var lowerTolerance = 1 / 2;
      if (BinArray.length !== 7) return [];

      if (k === 0 || k === totalBinArray.length - 1) {
        whiteMax = [[0, 0], [0, 0]];
        blackMax = [0, 0];

        for (i = 0; i < BinArray.length; i++) {
          if (i % 2 === 0) {
            if (BinArray[i] > blackMax[0]) {
              blackMax[0] = BinArray[i];
              blackMax[1] = i;
            }
          } else {
            if (BinArray[i] > whiteMax[0][0]) {
              whiteMax[0][0] = BinArray[i];
              prevPos = whiteMax[0][1];
              whiteMax[0][1] = i;
              i = prevPos - 1;
              continue;
            }

            if (BinArray[i] > whiteMax[1][0] && i !== whiteMax[0][1]) {
              whiteMax[1][0] = BinArray[i];
              whiteMax[1][1] = i;
            }
          }
        }

        if (SecureCodabar) {
          wideAvrg = whiteMax[0][0] + whiteMax[1][0] + blackMax[0];
          wideAvrg /= 3;
          wideValues = [whiteMax[0][0], whiteMax[1][0], blackMax[0]];

          for (i = 0; i < wideValues.length; i++) {
            if (wideValues[i] / wideAvrg > upperTolerance || wideValues[i] / wideAvrg < lowerTolerance) return [];
          }

          narrowAvrg = 0;

          for (i = 0; i < BinArray.length; i++) {
            if (i === blackMax[1] || i === whiteMax[0][1] || i === whiteMax[1][1]) continue;
            narrowAvrg += BinArray[i];
          }

          narrowAvrg /= 4;

          for (i = 0; i < BinArray.length; i++) {
            if (i === blackMax[1] || i === whiteMax[0][1] || i === whiteMax[1][1]) continue;
            if (BinArray[i] / narrowAvrg > upperTolerance || BinArray[i] / narrowAvrg < lowerTolerance) return [];
          }
        }

        for (i = 0; i < BinArray.length; i++) {
          if (i === blackMax[1] || i === whiteMax[0][1] || i === whiteMax[1][1]) {
            tempBin.push(1);
          } else {
            tempBin.push(0);
          }
        }
      } else {
        blackMax = [0, 0];
        whiteMax = [0, 0];

        for (i = 0; i < BinArray.length; i++) {
          if (i % 2 === 0) {
            if (BinArray[i] > blackMax[0]) {
              blackMax[0] = BinArray[i];
              blackMax[1] = i;
            }
          } else {
            if (BinArray[i] > whiteMax[0]) {
              whiteMax[0] = BinArray[i];
              whiteMax[1] = i;
            }
          }
        }

        if (blackMax[0] / whiteMax[0] > 1.55) {
          var tempArray = blackMax;
          blackMax = [tempArray, [0, 0], [0, 0]];

          for (i = 0; i < BinArray.length; i++) {
            if (i % 2 === 0) {
              if (BinArray[i] > blackMax[1][0] && i !== blackMax[0][1]) {
                blackMax[1][0] = BinArray[i];
                prevPos = blackMax[1][1];
                blackMax[1][1] = i;
                i = prevPos - 1;
                continue;
              }

              if (BinArray[i] > blackMax[2][0] && i !== blackMax[0][1] && i !== blackMax[1][1]) {
                blackMax[2][0] = BinArray[i];
                blackMax[2][1] = i;
              }
            }
          }

          if (SecureCodabar) {
            wideAvrg = blackMax[0][0] + blackMax[1][0] + blackMax[2][0];
            wideAvrg /= 3;

            for (i = 0; i < blackMax.length; i++) {
              if (blackMax[i][0] / wideAvrg > upperTolerance || blackMax[i][0] / wideAvrg < lowerTolerance) return [];
            }

            narrowAvrg = 0;

            for (i = 0; i < BinArray.length; i++) {
              if (i === blackMax[0][1] || i === blackMax[1][1] || i === blackMax[2][1]) continue;
              narrowAvrg += BinArray[i];
            }

            narrowAvrg /= 4;

            for (i = 0; i < BinArray.length; i++) {
              if (i === blackMax[0][1] || i === blackMax[1][1] || i === blackMax[2][1]) continue;
              if (BinArray[i] / narrowAvrg > upperTolerance || BinArray[i] / narrowAvrg < lowerTolerance) return [];
            }
          }

          for (i = 0; i < BinArray.length; i++) {
            if (i === blackMax[0][1] || i === blackMax[1][1] || i === blackMax[2][1]) {
              tempBin.push(1);
            } else {
              tempBin.push(0);
            }
          }
        } else {
          if (SecureCodabar) {
            wideAvrg = blackMax[0] + whiteMax[0];
            wideAvrg /= 2;
            if (blackMax[0] / wideAvrg > 1.5 || blackMax[0] / wideAvrg < 0.5) return [];
            if (whiteMax[0] / wideAvrg > 1.5 || whiteMax[0] / wideAvrg < 0.5) return [];
            narrowAvrg = 0;

            for (i = 0; i < BinArray.length; i++) {
              if (i === blackMax[1] || i === whiteMax[1]) continue;
              narrowAvrg += BinArray[i];
            }

            narrowAvrg /= 5;

            for (i = 0; i < BinArray.length; i++) {
              if (i === blackMax[1] || i === whiteMax[1]) continue;
              if (BinArray[i] / narrowAvrg > upperTolerance || BinArray[i] / narrowAvrg < lowerTolerance) return [];
            }
          }

          for (i = 0; i < BinArray.length; i++) {
            if (i === blackMax[1] || i === whiteMax[1]) {
              tempBin.push(1);
            } else {
              tempBin.push(0);
            }
          }
        }
      }

      result.push(tempBin);
      continue;
    }

    if (type === 4 || type === 5) {
      max = [[0, 0], [0, 0]];

      for (i = 0; i < BinArray.length; i++) {
        if (!isFinite(BinArray[i])) return [];

        if (BinArray[i] > max[0][0]) {
          max[0][0] = BinArray[i];
          prevPos = max[0][1];
          max[0][1] = i;
          i = prevPos - 1;
        }

        if (BinArray[i] > max[1][0] && i !== max[0][1]) {
          max[1][0] = BinArray[i];
          max[1][1] = i;
        }
      }

      if (Secure2Of5) {
        wideAvrg = max[0][0] + max[1][0];
        wideAvrg /= 2;
        if (max[0][0] / wideAvrg > 1.3 || max[0][0] / wideAvrg < 0.7) return [];
        if (max[1][0] / wideAvrg > 1.3 || max[1][0] / wideAvrg < 0.7) return [];
        narrowAvrg = 0;

        for (i = 0; i < BinArray.length; i++) {
          if (i === max[0][1] || i === max[1][1]) continue;
          narrowAvrg += BinArray[i];
        }

        narrowAvrg /= 3;

        for (i = 0; i < BinArray.length; i++) {
          if (i === max[0][1] || i === max[1][1]) continue;
          if (BinArray[i] / narrowAvrg > 1.3 || BinArray[i] / narrowAvrg < 0.7) return [];
        }
      }

      for (i = 0; i < BinArray.length; i++) {
        if (i === max[0][1] || i === max[1][1]) {
          tempBin.push(1);
          continue;
        }

        tempBin.push(0);
      }

      result.push(tempBin);
      continue;
    }

    while (counter < totalBars) {
      sum += BinArray[counter];
      counter++;
    }

    if (type === 2) {
      blackMax = [[0, 0], [0, 0]];
      whiteMax = [0, 0];

      for (j = 0; j < BinArray.length; j++) {
        if (j % 2 === 0) {
          if (BinArray[j] > blackMax[0][0]) {
            blackMax[0][0] = BinArray[j];
            prevPos = blackMax[0][1];
            blackMax[0][1] = j;
            j = prevPos;
          }

          if (BinArray[j] > blackMax[1][0] && j !== blackMax[0][1]) {
            blackMax[1][0] = BinArray[j];
            blackMax[1][1] = j;
          }
        } else {
          if (BinArray[j] > whiteMax[0]) {
            whiteMax[0] = BinArray[j];
            whiteMax[1] = j;
          }
        }
      }

      if (whiteMax[0] / blackMax[0][0] > 1.5 && whiteMax[0] / blackMax[1][0] > 1.5) {
        blackMax = [[0, 0], [0, 0]];

        for (j = 0; j < BinArray.length; j++) {
          if (j % 2 !== 0) {
            if (BinArray[j] > blackMax[0][0] && j !== whiteMax[1]) {
              blackMax[0][0] = BinArray[j];
              prevPos = blackMax[0][1];
              blackMax[0][1] = j;
              j = prevPos;
            }

            if (BinArray[j] > blackMax[1][0] && j !== blackMax[0][1] && j !== whiteMax[1]) {
              blackMax[1][0] = BinArray[j];
              blackMax[1][1] = j;
            }
          }
        }
      }

      wideAvrg = blackMax[0][0] + blackMax[1][0] + whiteMax[0];
      wideAvrg /= 3;
      if (blackMax[0][0] / wideAvrg > 1.6 || blackMax[0][0] / wideAvrg < 0.4) return [];
      if (blackMax[1][0] / wideAvrg > 1.6 || blackMax[1][0] / wideAvrg < 0.4) return [];
      if (whiteMax[0] / wideAvrg > 1.6 || whiteMax[0] / wideAvrg < 0.4) return [];
      narrowAvrg = 0;

      for (i = 0; i < BinArray.length; i++) {
        if (i === blackMax[0][1] || i === blackMax[1][1] || i === whiteMax[1]) continue;
        narrowAvrg += BinArray[i];
      }

      narrowAvrg /= 6;

      for (i = 0; i < BinArray.length; i++) {
        if (i === blackMax[0][1] || i === blackMax[1][1] || i === whiteMax[1]) continue;
        if (BinArray[i] / narrowAvrg > 1.6 || BinArray[i] / narrowAvrg < 0.4) return [];
      }

      for (j = 0; j < BinArray.length; j++) {
        if (j === blackMax[0][1] || j === blackMax[1][1] || j === whiteMax[1]) {
          tempBin.push(2);
        } else {
          tempBin.push(1);
        }
      }

      result.push(tempBin);
      continue;
    }

    if (type === 3) {
      max = [[0, 0], [0, 0], [0, 0]];

      for (j = 0; j < BinArray.length; j++) {
        if (BinArray[j] > max[0][0]) {
          max[0][0] = BinArray[j];
          prevPos = max[0][1];
          max[0][1] = j;
          j = prevPos;
        }

        if (BinArray[j] > max[1][0] && j !== max[0][1]) {
          max[1][0] = BinArray[j];
          prevPos = max[1][1];
          max[1][1] = j;
          j = prevPos;
        }

        if (BinArray[j] > max[2][0] && j !== max[0][1] && j !== max[1][1]) {
          max[2][0] = BinArray[j];
          max[2][1] = j;
        }
      }

      if (max[0][0] / max[1][0] >= 3) {
        narrowAvrg = 0;

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1]) continue;
          narrowAvrg += BinArray[j];
        }

        narrowAvrg /= 3;

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1]) continue;

          if (BinArray[j] / narrowAvrg < 0.02 || BinArray[j] / narrowAvrg > 3) {
            return {
              data: [],
              correction: 0
            };
          }
        }

        if (max[0][0] / narrowAvrg < 2.2 || max[0][0] / narrowAvrg > 6) {
          return {
            data: [],
            correction: 0
          };
        }

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1]) {
            tempBin.push(4);
          } else {
            tempBin.push(1);
          }
        }

        result.push(tempBin);
      } else if (max[0][0] / max[2][0] > 2) {
        wideAvrg = max[0][0] + max[1][0];
        wideAvrg /= 5;

        if (max[0][0] / (wideAvrg * 3) < 0.02 || max[0][0] / (wideAvrg * 3) > 3) {
          return {
            data: [],
            correction: 0
          };
        }

        if (max[1][0] / (wideAvrg * 2) < 0.02 || max[1][0] / (wideAvrg * 2) > 3) {
          return {
            data: [],
            correction: 0
          };
        }

        narrowAvrg = 0;

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1] || j === max[1][1]) continue;
          narrowAvrg += BinArray[j];
        }

        narrowAvrg /= 2;

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1] || j === max[1][1]) continue;

          if (BinArray[j] / narrowAvrg < 0.02 || BinArray[j] / narrowAvrg > 3) {
            return {
              data: [],
              correction: 0
            };
          }
        }

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1]) {
            tempBin.push(3);
          } else if (j === max[1][1]) {
            tempBin.push(2);
          } else {
            tempBin.push(1);
          }
        }

        result.push(tempBin);
      } else {
        if (max[0][1] % 2 === max[1][1] % 2 && max[0][1] % 2 === max[2][1] % 2) {
          var modMem = max[0][1] % 2;
          max[2] = [0, 0];

          for (j = 0; j < BinArray.length; j++) {
            if (j % 2 === modMem) continue;

            if (BinArray[j] > max[2][0]) {
              max[2][0] = BinArray[j];
              max[2][1] = j;
            }
          }
        }

        wideAvrg = max[0][0] + max[1][0] + max[2][0];
        wideAvrg /= 3;

        for (j = 0; j < max.length; j++) {
          if (max[j][0] / wideAvrg < 0.02 || max[j][0] / wideAvrg > 3) {
            return {
              data: [],
              correction: 0
            };
          }
        }

        var narrow = 0;

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1] || j === max[1][1] || j === max[2][1]) continue;
          narrow = BinArray[j];
        }

        if (wideAvrg / narrow < 0.02 || wideAvrg / narrow > 3) {
          return {
            data: [],
            correction: 0
          };
        }

        for (j = 0; j < BinArray.length; j++) {
          if (j === max[0][1] || j === max[1][1] || j === max[2][1]) {
            tempBin.push(2);
          } else {
            tempBin.push(1);
          }
        }

        result.push(tempBin);
      }

      for (j = 0; j < tempBin.length; j++) {
        testData += Math.abs(tempBin[j] - BinArray[j] / sum * total);
      }

      continue;
    }

    counter = 0;

    while (counter < totalBars) {
      tempBin.push(BinArray[counter] / sum * total);
      counter++;
    }

    counter = 0;

    while (counter < totalBars) {
      tempBin[counter] = tempBin[counter] > maxLength ? maxLength : tempBin[counter];
      tempBin[counter] = tempBin[counter] < 1 ? 1 : tempBin[counter];
      tempBin[counter] = Math.round(tempBin[counter]);
      counter++;
    }

    if (type === 3) {
      var checking = 0;

      for (var _i5 = 0; _i5 < tempBin.length; _i5++) {
        checking += tempBin[_i5];
      }

      if (checking > 7) {
        max = 0;
        var hitIndex = 0;

        for (var _i6 = 0; _i6 < tempBin.length; _i6++) {
          if (tempBin[_i6] > max) {
            max = tempBin[_i6];
            hitIndex = _i6;
          }
        }

        tempBin[hitIndex] = max - (checking - 7);
      }
    }

    if (type === 3) {
      for (i = 0; i < tempBin.length; i++) {
        testData += Math.abs(tempBin[i] - BinArray[i] / sum * total);
      }
    }

    result.push(tempBin);
  }

  if (type === 3) {
    return {
      data: result,
      correction: testData
    };
  }

  return result;
}

function CheckCode128(string) {
  var checksum = string[string.length - 2].join('');
  checksum = Code128Encoding.value.indexOf(checksum);
  if (checksum === -1) return false;
  var summarizer = Code128Encoding.value.indexOf(string[0].join(''));
  if (summarizer === -1) return false;
  var startChar = Code128Encoding[string[0].join('')];
  if (typeof startChar === 'undefined') return false;
  if (startChar !== 'A' && startChar !== 'B' && startChar !== 'C') return false;

  for (var i = 1; i < string.length - 2; i++) {
    summarizer += Code128Encoding.value.indexOf(string[i].join('')) * i;
    if (Code128Encoding.value.indexOf(string[i].join('')) === -1) return false;
  }

  return summarizer % 103 === checksum;
}

function Decode2Of5(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (TwoOfFiveEncoding.indexOf(string[i].join('')) === -1) return false;
    result += TwoOfFiveEncoding.indexOf(string[i].join(''));
  }

  return result;
}

function DecodeCodaBar(string) {
  var result = '';
  var start = string[0].join('');
  var end = string[string.length - 1].join('');

  if (!(CodaBarEncoding[start] === 'A' || CodaBarEncoding[start] === 'B' || CodaBarEncoding[start] === 'C' || CodaBarEncoding[start] === 'D')) {
    return false;
  }

  if (!(CodaBarEncoding[end] === 'A' || CodaBarEncoding[end] === 'B' || CodaBarEncoding[end] === 'C' || CodaBarEncoding[end] === 'D')) {
    return false;
  }

  for (var i = 1; i < string.length - 1; i++) {
    if (typeof CodaBarEncoding[string[i].join('')] === 'undefined') return false;
    result += CodaBarEncoding[string[i].join('')];
  }

  return result;
}

function DecodeEAN13(string) {
  if (string.length !== 12) return false;
  var leftSide = string.slice(0, 6);
  var trigger = false;
  var rightSide = string.slice(6, string.length);

  for (var i = 0; i < leftSide.length; i++) {
    leftSide[i] = leftSide[i].join('');

    if (leftSide[i].length !== 4) {
      trigger = true;
      break;
    }
  }

  if (trigger) return false;

  for (var _i7 = 0; _i7 < rightSide.length; _i7++) {
    rightSide[_i7] = rightSide[_i7].join('');

    if (rightSide[_i7].length !== 4) {
      trigger = true;
      break;
    }
  }

  if (trigger) return false;
  var decodeFormat = [];

  for (var _i8 = 0; _i8 < leftSide.length; _i8++) {
    if (typeof EAN13Encoding.L[leftSide[_i8]] !== 'undefined') {
      decodeFormat.push('L');
    } else if (typeof EAN13Encoding.G[leftSide[_i8]] !== 'undefined') {
      decodeFormat.push('G');
    } else {
      trigger = true;
      break;
    }
  }

  if (trigger) return false;
  var resultArray = [];
  if (typeof EAN13Encoding.formats[decodeFormat.join('')] === 'undefined') return false;
  resultArray.push(EAN13Encoding.formats[decodeFormat.join('')]);

  for (var _i9 = 0; _i9 < leftSide.length; _i9++) {
    if (typeof EAN13Encoding[decodeFormat[_i9]][leftSide[_i9]] === 'undefined') {
      trigger = true;
      break;
    }

    resultArray.push(EAN13Encoding[decodeFormat[_i9]][leftSide[_i9]]);
  }

  if (trigger) return false;

  for (var _i10 = 0; _i10 < rightSide.length; _i10++) {
    if (typeof EAN13Encoding.R[rightSide[_i10]] === 'undefined') {
      trigger = true;
      break;
    }

    resultArray.push(EAN13Encoding.R[rightSide[_i10]]);
  }

  if (trigger) return false;
  var weight = 3;
  var sum = 0;

  for (var _i11 = resultArray.length - 2; _i11 >= 0; _i11--) {
    sum += resultArray[_i11] * weight;

    if (weight === 3) {
      weight = 1;
    } else {
      weight = 3;
    }
  }

  sum = (10 - sum % 10) % 10;

  if (resultArray[resultArray.length - 1] === sum) {
    return resultArray.join('');
  }

  return false;
}

function CheckCode93(string) {
  var checkOne = string[string.length - 3].join('');
  var checkTwo = string[string.length - 2].join('');
  var failSafe = true;
  if (typeof Code93Encoding[checkOne] === 'undefined') return false;
  if (typeof Code93Encoding[checkTwo] === 'undefined') return false;
  var checkSum = Code93Encoding[checkOne].value;
  var weight = 1;
  var sum = 0;

  for (var i = string.length - 4; i > 0; i--) {
    failSafe = typeof Code93Encoding[string[i].join('')] === 'undefined' ? false : failSafe;
    if (!failSafe) break;
    sum += Code93Encoding[string[i].join('')].value * weight;
    weight++;
    if (weight > 20) weight = 1;
  }

  var firstCheck = sum % 47;
  var firstBool = firstCheck === checkSum;
  if (!firstBool) return false;
  if (!failSafe) return false;
  sum = firstCheck;
  weight = 2;
  checkSum = Code93Encoding[checkTwo].value;

  for (var _i12 = string.length - 4; _i12 > 0; _i12--) {
    failSafe = typeof Code93Encoding[string[_i12].join('')] === 'undefined' ? false : failSafe;
    if (!failSafe) break;
    sum += Code93Encoding[string[_i12].join('')].value * weight;
    weight++;
    if (weight > 15) weight = 1;
  }

  var secondCheck = sum % 47;
  var secondBool = secondCheck === checkSum;
  return secondBool && firstBool;
}

function CheckCode39(string) {
  var trigger = true;
  if (typeof Code39Encoding[string[0].join('')] === 'undefined') return false;
  if (Code39Encoding[string[0].join('')].character !== '*') return false;
  if (typeof Code39Encoding[string[string.length - 1].join('')] === 'undefined') return false;
  if (Code39Encoding[string[string.length - 1].join('')].character !== '*') return false;

  for (var i = 1; i < string.length - 1; i++) {
    if (typeof Code39Encoding[string[i].join('')] === 'undefined') {
      trigger = false;
      break;
    }
  }

  return trigger;
}

function DecodeCode39(string) {
  var resultString = '';
  var special = false;
  var character = '';
  var specialchar = '';
  var i;

  for (i = 1; i < string.length - 1; i++) {
    character = Code39Encoding[string[i].join('')].character;

    if (character === '$' || character === '/' || character === '+' || character === '%') {
      // if next character exists => this a special character
      if (i + 1 < string.length - 1) {
        special = true;
        specialchar = character;
        continue;
      }
    }

    if (special) {
      if (typeof ExtendedEncoding[specialchar + character] === 'undefined') {} else {
        resultString += ExtendedEncoding[specialchar + character];
      }

      special = false;
      continue;
    }

    resultString += character;
  }

  return resultString;
}

function DecodeCode93(string) {
  var resultString = '';
  var special = false;
  var character = '';
  var specialchar = '';

  for (var i = 1; i < string.length - 3; i++) {
    character = Code93Encoding[string[i].join('')].character;

    if (character === '($)' || character === '(/)' || character === '(+)' || character === '(%)') {
      special = true;
      specialchar = character[1];
      continue;
    }

    if (special) {
      if (typeof ExtendedEncoding[specialchar + character] === 'undefined') {} else {
        resultString += ExtendedEncoding[specialchar + character];
      }

      special = false;
      continue;
    }

    resultString += character;
  }

  return resultString;
}

function DecodeCode128(string) {
  var set = Code128Encoding[string[0].join('')];
  var symbol;
  var Code128Format = 'Code128';
  var resultString = '';
  var i;

  for (i = 1; i < string.length - 2; i++) {
    symbol = Code128Encoding[string[i].join('')][set];

    switch (symbol) {
      case 'FNC1':
        if (i === 1) Code128Format = 'GS1-128';
        break;

      case 'FNC2':
      case 'FNC3':
      case 'FNC4':
        break;

      case 'SHIFT_B':
        i++;
        resultString += Code128Encoding[string[i].join('')].B;
        break;

      case 'SHIFT_A':
        i++;
        resultString += Code128Encoding[string[i].join('')].A;
        break;

      case 'Code_A':
        set = 'A';
        break;

      case 'Code_B':
        set = 'B';
        break;

      case 'Code_C':
        set = 'C';
        break;

      default:
        resultString += symbol;
    }
  }

  return {
    string: resultString,
    format: Code128Format
  };
}

function BinaryString(img, type) {
  var binaryString = [];
  var format;
  var tempString;
  var corrections;
  var container; // things that don't change

  var splitImageLength = img.length - Image.width * 4;
  var imageWidthX4 = Image.width * 4;

  for (var j = 0; j < splitImageLength; j += imageWidthX4) {
    var i = 0;
    var SlicedArray = img.subarray(j, j + imageWidthX4); // could use SlicedArray.length but we have the numbers,
    // so don't burn millis (15ms gain)

    var slicedArrayLength = j + imageWidthX4 - j;

    while (SlicedArray[i] === 255) {
      i += 4;
    }

    while (i < slicedArrayLength) {
      var count = 0;
      container = SlicedArray[i];

      while (i < slicedArrayLength) {
        if (SlicedArray[i] !== container) {
          break;
        }

        count++;
        i += 4;
      }

      binaryString.push(count);
    }

    if (binaryString.length > 2 && binaryString[0] <= binaryString[1] / 10) {
      binaryString.splice(0, 2);
    }

    var binaryHolder = binaryString.slice();
    var success = false;
    var FormatPriorityLength = FormatPriority.length;

    for (var _i13 = 0; _i13 < FormatPriorityLength; _i13++) {
      binaryString = binaryHolder.slice();
      var first = void 0;
      var second = void 0;
      format = FormatPriority[_i13];
      binaryString = BinaryConfiguration(binaryString, format);

      if (format === '2Of5' || format === 'Inter2Of5') {
        first = binaryString.splice(0, 1)[0];
        second = binaryString.splice(binaryString.length - 1, 1)[0];
      }

      var binTemp = Distribution(binaryString, format);

      if (format === 'EAN-13') {
        binaryString = binTemp.data;
        corrections = binTemp.correction;
      } else {
        binaryString = binTemp;
      }

      if (typeof binaryString === 'undefined') continue;

      if (binaryString.length > 4 || format === 'Code39' && binaryString.length > 2) {
        if (format === 'Code128') {
          if (CheckCode128(binaryString)) {
            binaryString = DecodeCode128(binaryString);
            success = true;
          }
        } else if (format === 'Code93') {
          if (CheckCode93(binaryString)) {
            binaryString = DecodeCode93(binaryString);
            success = true;
          }
        } else if (format === 'Code39') {
          if (CheckCode39(binaryString)) {
            binaryString = DecodeCode39(binaryString);
            success = true;
          }
        } else if (format === 'EAN-13') {
          tempString = DecodeEAN13(binaryString);

          if (tempString) {
            if (tempString.length === 13) {
              binaryString = tempString;
              success = true;
            }
          }
        } else if (format === '2Of5' || format === 'Inter2Of5') {
          if (format === '2Of5') {
            if (typeof first !== 'undefined') {
              if (!TwoOfFiveStartEnd(first, true)) continue;
            }

            if (typeof second !== 'undefined') {
              if (!TwoOfFiveStartEnd(second, false)) continue;
            }
          }

          if (format === 'Inter2Of5') {
            if (typeof first !== 'undefined') {
              if (!CheckInterleaved(first, true)) continue;
            }

            if (typeof second !== 'undefined') {
              if (!CheckInterleaved(second, false)) continue;
            }
          }

          tempString = Decode2Of5(binaryString);

          if (tempString) {
            binaryString = tempString;
            success = true;
          }
        } else if (format === 'Codabar') {
          tempString = DecodeCodaBar(binaryString);

          if (tempString) {
            binaryString = tempString;
            success = true;
          }
        }
      }

      if (success) {
        if (format === 'Inter2Of5') format = 'Interleaved 2 of 5';
        if (format === '2Of5') format = 'Standard 2 of 5';
        break;
      }
    }

    if (success) break;
  }

  if (format === 'Code128') {
    if (typeof binaryString.string === 'string') {
      return binaryString;
    }

    return {
      string: false
    };
  }

  if (typeof binaryString === 'string') {
    if (format === 'EAN-13') {
      return {
        string: binaryString,
        format: format,
        correction: corrections
      };
    }

    return {
      string: binaryString,
      format: format
    };
  }

  return {
    string: false
  };
}

function Main() {
  var allResults = [];
  var tempObj;
  var tempData;
  var hist;
  var val;
  var thresh;
  var start;
  var end;
  var z, i;
  ImgProcessing();

  for (z = 0; z < allTables.length; z++) {
    Image = allTables[z];
    var scaled = ScaleHeight(30);
    var variationData = void 0;
    var incrmt = 0;
    var format = '';
    var eanStatistics = {};
    var eanOrder = [];
    var Selection = false;

    do {
      tempData = scaled.subarray(incrmt, incrmt + Image.width * 4);
      hist = [];

      for (i = 0; i < 256; i++) {
        hist[i] = 0;
      }

      for (i = 0; i < tempData.length; i += 4) {
        val = Math.round((tempData[i] + tempData[i + 1] + tempData[i + 2]) / 3);
        hist[val] = hist[val] + 1;
      }

      thresh = otsu(hist, tempData.length / 4);
      start = thresh < 41 ? 1 : thresh - 40;
      end = thresh > 254 - 40 ? 254 : thresh + 40;
      variationData = yStraighten(tempData, start, end);
      Selection = BinaryString(variationData);

      if (Selection.string) {
        format = Selection.format;
        tempObj = Selection;
        Selection = Selection.string;

        if (format === 'EAN-13') {
          if (typeof eanStatistics[Selection] === 'undefined') {
            eanStatistics[Selection] = {
              count: 1,
              correction: tempObj.correction
            };
            eanOrder.push(Selection);
          } else {
            eanStatistics[Selection].count = eanStatistics[Selection].count + 1;
            eanStatistics[Selection].correction = eanStatistics[Selection].correction + tempObj.correction;
          }

          Selection = false;
        }
      } else {
        Selection = false;
      }

      incrmt += Image.width * 4;
    } while (!Selection && incrmt < scaled.length);

    if (Selection && format !== 'EAN-13') {
      allResults.push({
        Format: format,
        Value: Selection,
        bBox: Locations[z]
      });
    }

    if (format === 'EAN-13') Selection = false;

    if (!Selection) {
      EnlargeTable(4, 2);
      incrmt = 0;
      scaled = ScaleHeight(20);

      do {
        tempData = scaled.subarray(incrmt, incrmt + Image.width * 4);
        hist = [];

        for (i = 0; i < 256; i++) {
          hist[i] = 0;
        }

        for (i = 0; i < tempData.length; i += 4) {
          val = Math.round((tempData[i] + tempData[i + 1] + tempData[i + 2]) / 3);
          hist[val] = hist[val] + 1;
        }

        thresh = otsu(hist, tempData.length / 4);
        start = thresh < 40 ? 0 : thresh - 40;
        end = thresh > 255 - 40 ? 255 : thresh + 40;
        variationData = yStraighten(tempData, start, end);
        Selection = BinaryString(variationData);

        if (Selection.string) {
          format = Selection.format;
          tempObj = Selection;
          Selection = Selection.string;

          if (format === 'EAN-13') {
            if (typeof eanStatistics[Selection] === 'undefined') {
              eanStatistics[Selection] = {
                count: 1,
                correction: tempObj.correction
              };
              eanOrder.push(Selection);
            } else {
              eanStatistics[Selection].count = eanStatistics[Selection].count + 1;
              eanStatistics[Selection].correction = eanStatistics[Selection].correction + tempObj.correction;
            }

            Selection = false;
          }
        } else {
          Selection = false;
        }

        incrmt += Image.width * 4;
      } while (!Selection && incrmt < scaled.length);

      if (format === 'EAN-13') {
        var points = {};
        var key = void 0;

        for (key in eanStatistics) {
          eanStatistics[key].correction = eanStatistics[key].correction / eanStatistics[key].count;
          var pointTemp = eanStatistics[key].correction;
          pointTemp -= eanStatistics[key].count;
          pointTemp += eanOrder.indexOf(key);
          points[key] = pointTemp;
        }

        var minPoints = Number.POSITIVE_INFINITY;
        var tempString = '';

        for (var point in points) {
          if (points[point] < minPoints) {
            minPoints = points[point];
            tempString = key;
          }
        }

        if (minPoints < 11) {
          Selection = tempString;
        } else {
          Selection = false;
        }
      }

      if (Selection) {
        allResults.push({
          Format: format,
          Value: Selection,
          bBox: Locations[z]
        });
      }
    }

    if (allResults.length > 0 && !Multiple) break;
  }

  return allResults;
}



/***/ }),

/***/ "./scanner.worker.js":
/*!***************************!*\
  !*** ./scanner.worker.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsqr_es6_dist_jsQR_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsqr-es6/dist/jsQR.js */ "../node_modules/jsqr-es6/dist/jsQR.js");
/* harmony import */ var _Decoder1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decoder1D */ "./Decoder1D.js");


/* eslint-disable no-restricted-globals */
//import {BrowserMultiFormatReader} from "@zxing/library/es2015/index.js";

var inversionAttempts = 'dontInvert';
var grayscaleWeights = {
  // weights for quick luma integer approximation (https://en.wikipedia.org/wiki/YUV#Full_swing_for_BT.601)
  red: 77,
  green: 150,
  blue: 29,
  useIntegerApproximation: true
};

self.onmessage = function (event) {
  var type = event['data']['type'];
  var data = event['data']['data'];

  switch (type) {
    case 'decode':
      decode(data);
      break;

    case 'grayscaleWeights':
      setGrayscaleWeights(data);
      break;

    case 'inversionMode':
      setInversionMode(data);
      break;

    case 'close':
      // close after earlier messages in the event loop finished processing
      self.close();
      break;
  }
};

function decode(data) {
  var rgbaData = data['data'];
  var width = data['width'];
  var height = data['height'];
  var worker = self;
  var resultTemp = Object(jsqr_es6_dist_jsQR_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rgbaData, width, height, {
    inversionAttempts: inversionAttempts,
    greyScaleWeights: grayscaleWeights
  });

  if (resultTemp) {
    worker.postMessage({
      type: 'qrResult',
      data: resultTemp ? resultTemp : null
    });
  } else {
    var _width;

    var decodeFormats;
    ScanImage = {
      data: new Uint8ClampedArray(data.scan),
      width: data.scanWidth,
      height: data.scanHeight
    };

    switch (data.rotation) {
      case 8:
        ScanImage.data = Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["Rotate"])(ScanImage.data, ScanImage.width, ScanImage.height, -90);
        _width = data.scanWidth;
        ScanImage.width = ScanImage.height;
        ScanImage.height = _width;
        break;

      case 6:
        ScanImage.data = Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["Rotate"])(ScanImage.data, ScanImage.width, ScanImage.height, 90);
        _width = data.scanWidth;
        ScanImage.width = ScanImage.height;
        ScanImage.height = _width;
        break;

      case 3:
        ScanImage.data = Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["Rotate"])(ScanImage.data, ScanImage.width, ScanImage.height, 180);
    }

    Image = {
      data: Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["Scale"])(ScanImage.data, ScanImage.width, ScanImage.height),
      width: ScanImage.width / 2,
      height: ScanImage.height / 2
    };

    if (data.postOrientation) {
      postMessage({
        result: Image,
        success: 'orientationData'
      });
    }

    FormatPriority = [];
    Multiple = true;

    if (typeof data.multiple !== 'undefined') {
      Multiple = data.multiple;
    }

    if (typeof data.decodeFormats !== 'undefined') {
      decodeFormats = data.decodeFormats;
    } else {
      decodeFormats = _Decoder1D__WEBPACK_IMPORTED_MODULE_1__["availableFormats"];
    }

    for (var i = 0; i < decodeFormats.length; i++) {
      FormatPriority.push(decodeFormats[i]);
    }

    Locations = [];
    Promise.all([Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["CreateTable"])(), Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["CreateScanTable"])()]).then(function () {
      var FinalResult = Object(_Decoder1D__WEBPACK_IMPORTED_MODULE_1__["Main"])();

      if (FinalResult.length > 0) {
        postMessage({
          id: data.id,
          result: FinalResult,
          success: true,
          type: 'qrResult',
          data: FinalResult
        });
      } else {
        postMessage({
          id: data.id,
          result: FinalResult,
          success: false,
          type: 'qrResult',
          data: null
        });
      }
    });
  }
}

function setGrayscaleWeights(data) {
  // update grayscaleWeights in a closure compiler compatible fashion
  grayscaleWeights.red = data['red'];
  grayscaleWeights.green = data['green'];
  grayscaleWeights.blue = data['blue'];
  grayscaleWeights.useIntegerApproximation = data['useIntegerApproximation'];
}

function setInversionMode(inversionMode) {
  switch (inversionMode) {
    case 'original':
      inversionAttempts = 'dontInvert';
      break;

    case 'invert':
      inversionAttempts = 'onlyInvert';
      break;

    case 'both':
      inversionAttempts = 'attemptBoth';
      break;

    default:
      throw new Error('Invalid inversion mode');
  }
}

/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** multi ./scanner.worker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/damientupinier/Sites/qr-scanner/src/scanner.worker.js */"./scanner.worker.js");


/***/ })

/******/ });
//# sourceMappingURL=scanner.worker.js.map