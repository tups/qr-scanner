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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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

/***/ "./qr-scanner.js":
/*!***********************!*\
  !*** ./qr-scanner.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrScanner; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);





function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var QrScanner = /*#__PURE__*/function () {
  function QrScanner(video, options, onDecode) {
    var canvasSizeOrOnDecodeError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this._onDecodeError;
    var canvasSizeOrCalculateScanRegion = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._calculateScanRegion;
    var preferredFacingMode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'environment';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, QrScanner);

    this._options = Object.assign({
      'formats': ['qr_code', 'ean_13', 'code_39']
    }, options);
    this.$video = video;
    this.$canvas = document.createElement('canvas');
    this._onDecode = onDecode;
    this._legacyCanvasSize = QrScanner.DEFAULT_CANVAS_SIZE;
    this._preferredFacingMode = preferredFacingMode;
    this._active = false;
    this._paused = false;
    this._flashOn = false;

    if (typeof canvasSizeOrOnDecodeError === 'number') {
      // legacy function signature where the third argument is the canvas size
      this._legacyCanvasSize = canvasSizeOrOnDecodeError;
      console.warn('You\'re using a deprecated version of the QrScanner constructor which will be removed in ' + 'the future');
    } else {
      this._onDecodeError = canvasSizeOrOnDecodeError;
    }

    if (typeof canvasSizeOrCalculateScanRegion === 'number') {
      // legacy function signature where the fourth argument is the canvas size
      this._legacyCanvasSize = canvasSizeOrCalculateScanRegion;
      console.warn('You\'re using a deprecated version of the QrScanner constructor which will be removed in ' + 'the future');
    } else {
      this._calculateScanRegion = canvasSizeOrCalculateScanRegion;
    }

    this._scanRegion = this._calculateScanRegion(video);
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this); // Allow inline playback on iPhone instead of requiring full screen playback,
    // see https://webkit.org/blog/6784/new-video-policies-for-ios/

    this.$video.playsInline = true; // Allow play() on iPhone without requiring a user gesture. Should not really be needed as camera stream
    // includes no audio, but just to be safe.

    this.$video.muted = true;
    this.$video.disablePictureInPicture = true;
    this.$video.addEventListener('play', this._onPlay);
    this.$video.addEventListener('loadedmetadata', this._onLoadedMetaData);
    document.addEventListener('visibilitychange', this._onVisibilityChange);
    this._qrEnginePromise = QrScanner.createQrEngine(QrScanner.WORKER_PATH, this._options.formats);
  }
  /* async */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(QrScanner, [{
    key: "hasFlash",
    value: function hasFlash() {
      if (!('ImageCapture' in window)) {
        return Promise.resolve(false);
      }

      var track = this.$video.srcObject ? this.$video.srcObject.getVideoTracks()[0] : null;

      if (!track) {
        return Promise.reject('Camera not started or not available');
      }

      var imageCapture = new ImageCapture(track);
      return imageCapture.getPhotoCapabilities().then(function (result) {
        return result.fillLightMode.includes('flash');
      })["catch"](function (error) {
        console.warn(error);
        return false;
      });
    }
  }, {
    key: "isFlashOn",
    value: function isFlashOn() {
      return this._flashOn;
    }
    /* async */

  }, {
    key: "toggleFlash",
    value: function toggleFlash() {
      return this._setFlash(!this._flashOn);
    }
    /* async */

  }, {
    key: "turnFlashOff",
    value: function turnFlashOff() {
      return this._setFlash(false);
    }
    /* async */

  }, {
    key: "turnFlashOn",
    value: function turnFlashOn() {
      return this._setFlash(true);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$video.removeEventListener('loadedmetadata', this._onLoadedMetaData);
      this.$video.removeEventListener('play', this._onPlay);
      document.removeEventListener('visibilitychange', this._onVisibilityChange);
      this.stop();

      QrScanner._postWorkerMessage(this._qrEnginePromise, 'close');
    }
    /* async */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (this._active && !this._paused) {
        return Promise.resolve();
      }

      if (window.location.protocol !== 'https:') {
        // warn but try starting the camera anyways
        console.warn('The camera stream is only accessible if the page is transferred via https.');
      }

      this._active = true;
      this._paused = false;

      if (document.hidden) {
        // camera will be started as soon as tab is in foreground
        return Promise.resolve();
      }

      clearTimeout(this._offTimeout);
      this._offTimeout = null;

      if (this.$video.srcObject) {
        // camera stream already/still set
        this.$video.play();
        return Promise.resolve();
      }

      var facingMode = this._preferredFacingMode;
      return this._getCameraStream(facingMode, true)["catch"](function () {
        // We (probably) don't have a camera of the requested facing mode
        facingMode = facingMode === 'environment' ? 'user' : 'environment';
        return _this._getCameraStream(); // throws if camera is not accessible (e.g. due to not https)
      }).then(function (stream) {
        // Try to determine the facing mode from the stream, otherwise use our guess. Note that the guess is not
        // always accurate as Safari returns cameras of different facing mode, even for exact constraints.
        facingMode = _this._getFacingMode(stream) || facingMode;
        _this.$video.srcObject = stream;

        _this.$video.play();

        _this._setVideoMirror(facingMode);
      })["catch"](function (e) {
        _this._active = false;
        throw e;
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this._active = false;
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;

      this._paused = true;

      if (!this._active) {
        return;
      }

      this.$video.pause();

      if (this._offTimeout) {
        return;
      }

      this._offTimeout = setTimeout(function () {
        var tracks = _this2.$video.srcObject ? _this2.$video.srcObject.getTracks() : [];

        var _iterator = _createForOfIteratorHelper(tracks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var track = _step.value;
            track.stop(); //  note that this will also automatically turn the flashlight off
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this2.$video.srcObject = null;
        _this2._offTimeout = null;
      }, 300);
    }
    /* async */

  }, {
    key: "setGrayscaleWeights",
    value: function setGrayscaleWeights(red, green, blue) {
      var useIntegerApproximation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      // Note that for the native BarcodeDecoder, this is a no-op. However, the native implementations work also
      // well with colored qr codes.
      QrScanner._postWorkerMessage(this._qrEnginePromise, 'grayscaleWeights', {
        red: red,
        green: green,
        blue: blue,
        useIntegerApproximation: useIntegerApproximation
      });
    }
  }, {
    key: "setInversionMode",
    value: function setInversionMode(inversionMode) {
      // Note that for the native BarcodeDecoder, this is a no-op. However, the native implementations scan normal
      // and inverted qr codes by default
      QrScanner._postWorkerMessage(this._qrEnginePromise, 'inversionMode', inversionMode);
    }
    /* async */

  }, {
    key: "_onPlay",
    value: function _onPlay() {
      this._scanRegion = this._calculateScanRegion(this.$video);

      this._scanFrame();
    }
  }, {
    key: "_onLoadedMetaData",
    value: function _onLoadedMetaData() {
      this._scanRegion = this._calculateScanRegion(this.$video);
    }
  }, {
    key: "_onVisibilityChange",
    value: function _onVisibilityChange() {
      if (document.hidden) {
        this.pause();
      } else if (this._active) {
        this.start();
      }
    }
  }, {
    key: "_calculateScanRegion",
    value: function _calculateScanRegion(video) {
      // Default scan region calculation. Note that this can be overwritten in the constructor.
      var smallestDimension = Math.min(video.videoWidth, video.videoHeight);
      var scanRegionSize = Math.round(2 / 3 * smallestDimension);
      return {
        x: (video.videoWidth - scanRegionSize) / 2,
        y: (video.videoHeight - scanRegionSize) / 2,
        width: scanRegionSize,
        height: scanRegionSize,
        downScaledWidth: this._legacyCanvasSize,
        downScaledHeight: this._legacyCanvasSize
      };
    }
  }, {
    key: "_scanFrame",
    value: function _scanFrame() {
      var _this3 = this;

      if (!this._active || this.$video.paused || this.$video.ended) return false; // using requestAnimationFrame to avoid scanning if tab is in background

      requestAnimationFrame(function () {
        if (_this3.$video.readyState <= 1) {
          // Skip scans until the video is ready as drawImage() only works correctly on a video with readyState
          // > 1, see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage#Notes.
          // This also avoids false positives for videos paused after a successful scan which remains visible on
          // the canvas until the video is started again and ready.
          _this3._scanFrame();

          return;
        }

        _this3._qrEnginePromise.then(function (qrEngine) {
          return QrScanner.scanImage(_this3.$video, _this3._scanRegion, qrEngine, _this3.$canvas, _this3._options);
        }).then(_this3._onDecode, function (error) {
          if (!_this3._active) return;
          var errorMessage = error.message || error;

          if (errorMessage.indexOf('service unavailable') !== -1) {
            // When the native BarcodeDetector crashed, create a new one
            _this3._qrEnginePromise = QrScanner.createQrEngine();
          }

          _this3._onDecodeError(error);
        }).then(function () {
          return _this3._scanFrame();
        });
      });
    }
  }, {
    key: "_onDecodeError",
    value: function _onDecodeError(error) {
      // default error handler; can be overwritten in the constructor
      if (error === QrScanner.NO_QR_CODE_FOUND) return;
      console.log(error);
    }
  }, {
    key: "_getCameraStream",
    value: function _getCameraStream(facingMode) {
      var exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var constraintsToTry = [{
        width: {
          min: 1024
        }
      }, {
        width: {
          min: 768
        }
      }, {}];

      if (facingMode) {
        if (exact) {
          facingMode = {
            exact: facingMode
          };
        }

        constraintsToTry.forEach(function (constraint) {
          return constraint.facingMode = facingMode;
        });
      }

      return this._getMatchingCameraStream(constraintsToTry);
    }
  }, {
    key: "_getMatchingCameraStream",
    value: function _getMatchingCameraStream(constraintsToTry) {
      var _this4 = this;

      if (!navigator.mediaDevices || constraintsToTry.length === 0) {
        return Promise.reject('Camera not found.');
      }

      return navigator.mediaDevices.getUserMedia({
        video: constraintsToTry.shift()
      })["catch"](function () {
        return _this4._getMatchingCameraStream(constraintsToTry);
      });
    }
    /* async */

  }, {
    key: "_setFlash",
    value: function _setFlash(on) {
      var _this5 = this;

      return this.hasFlash().then(function (hasFlash) {
        if (!hasFlash) return Promise.reject('No flash available'); // Note that the video track is guaranteed to exist at this point

        return _this5.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: on
          }]
        });
      }).then(function () {
        return _this5._flashOn = on;
      });
    }
  }, {
    key: "_setVideoMirror",
    value: function _setVideoMirror(facingMode) {
      // in user facing mode mirror the video to make it easier for the user to position the QR code
      var scaleFactor = facingMode === 'user' ? -1 : 1;
      this.$video.style.transform = 'scaleX(' + scaleFactor + ')';
    }
  }, {
    key: "_getFacingMode",
    value: function _getFacingMode(videoStream) {
      var videoTrack = videoStream.getVideoTracks()[0];
      if (!videoTrack) return null; // unknown
      // inspired by https://github.com/JodusNodus/react-qr-reader/blob/master/src/getDeviceId.js#L13

      return /rear|back|environment/i.test(videoTrack.label) ? 'environment' : /front|user|face/i.test(videoTrack.label) ? 'user' : null; // unknown
    }
  }], [{
    key: "hasCamera",
    value:
    /* async */
    function hasCamera() {
      if (!navigator.mediaDevices) return Promise.resolve(false); // note that enumerateDevices can always be called and does not prompt the user for permission. However, device
      // labels are only readable if served via https and an active media stream exists or permanent permission is
      // given. That doesn't matter for us though as we don't require labels.

      return navigator.mediaDevices.enumerateDevices().then(function (devices) {
        return devices.some(function (device) {
          return device.kind === 'videoinput';
        });
      })["catch"](function () {
        return false;
      });
    }
  }, {
    key: "scanImage",
    value: function scanImage(imageOrFileOrUrl) {
      var _this6 = this;

      var scanRegion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var qrEngine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var canvas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var fixedCanvasSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var alsoTryWithoutScanRegion = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      var gotExternalWorker = qrEngine instanceof Worker;
      var promise = Promise.all([qrEngine || QrScanner.createQrEngine(), QrScanner._loadImage(imageOrFileOrUrl)]).then(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            engine = _ref2[0],
            image = _ref2[1];

        qrEngine = engine;
        var canvasContext;

        var _this6$_drawToCanvas = _this6._drawToCanvas(image, scanRegion, canvas, fixedCanvasSize);

        var _this6$_drawToCanvas2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this6$_drawToCanvas, 2);

        canvas = _this6$_drawToCanvas2[0];
        canvasContext = _this6$_drawToCanvas2[1];

        if (qrEngine instanceof Worker) {
          if (!gotExternalWorker) {
            // Enable scanning of inverted color qr codes. Not using _postWorkerMessage as it's async
            qrEngine.postMessage({
              type: 'inversionMode',
              data: 'both'
            });
          }

          return new Promise(function (resolve, reject) {
            var timeout, _onMessage, _onError;

            _onMessage = function onMessage(event) {
              if (event.data.type !== 'qrResult') {
                return;
              }

              qrEngine.removeEventListener('message', _onMessage);
              qrEngine.removeEventListener('error', _onError);
              clearTimeout(timeout);

              if (event.data.data !== null) {
                resolve(event.data.data);
              } else {
                reject(QrScanner.NO_QR_CODE_FOUND);
              }
            };

            _onError = function onError(e) {
              qrEngine.removeEventListener('message', _onMessage);
              qrEngine.removeEventListener('error', _onError);
              clearTimeout(timeout);
              var errorMessage = !e ? 'Unknown Error' : e.message || e;
              reject('Scanner error: ' + errorMessage);
            };

            qrEngine.addEventListener('message', _onMessage);
            qrEngine.addEventListener('error', _onError);
            timeout = setTimeout(function () {
              return _onError('timeout');
            }, 10000);
            var imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
            qrEngine.postMessage({
              type: 'decode',
              data: imageData,
              scan: imageData.getImageData(0, 0, canvas.width, canvas.height).data,
              scanWidth: canvas.width,
              scanHeight: canvas.height,
              multiple: true,
              decodeFormats: options.hasOwnProperty('formats') ? options.formats : ['qr_code'],
              cmd: 'normal',
              rotation: 1,
              postOrientation: false
            }, [imageData.data.buffer]);
          });
        } else {
          return new Promise(function (resolve, reject) {
            var timeout = setTimeout(function () {
              return reject('Scanner error: timeout');
            }, 10000);
            qrEngine.detect(canvas).then(function (scanResults) {
              if (!scanResults.length) {
                reject(QrScanner.NO_QR_CODE_FOUND);
              } else {
                resolve(scanResults[0].rawValue);
              }
            })["catch"](function (e) {
              return reject('Scanner error: ' + (e.message || e));
            })["finally"](function () {
              return clearTimeout(timeout);
            });
          });
        }
      });

      if (scanRegion && alsoTryWithoutScanRegion) {
        promise = promise["catch"](function () {
          return QrScanner.scanImage(imageOrFileOrUrl, null, qrEngine, canvas, fixedCanvasSize);
        });
      }

      promise = promise["finally"](function () {
        if (gotExternalWorker) return;

        QrScanner._postWorkerMessage(qrEngine, 'close');
      });
      return promise;
    }
  }, {
    key: "createQrEngine",
    value: function createQrEngine() {
      var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : QrScanner.WORKER_PATH;
      var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['qr_code'];
      var promiseSupport = 'BarcodeDetector' in window ? BarcodeDetector.getSupportedFormats() : Promise.resolve([]);
      promiseSupport.then(function (supportedFormats) {
        var formatNotSupport = [];
        formats.forEach(function (format) {
          if (supportedFormats.indexOf(format) === -1) {
            formatNotSupport.push(format);
          }
        });
        return formatNotSupport.length ? new BarcodeDetector({
          formats: formats
        }) : new Worker(workerPath);
      });
    }
  }, {
    key: "_drawToCanvas",
    value: function _drawToCanvas(image) {
      var scanRegion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var canvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var fixedCanvasSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      canvas = canvas || document.createElement('canvas');
      var scanRegionX = scanRegion && scanRegion.x ? scanRegion.x : 0;
      var scanRegionY = scanRegion && scanRegion.y ? scanRegion.y : 0;
      var scanRegionWidth = scanRegion && scanRegion.width ? scanRegion.width : image.width || image.videoWidth;
      var scanRegionHeight = scanRegion && scanRegion.height ? scanRegion.height : image.height || image.videoHeight;

      if (!fixedCanvasSize) {
        canvas.width = scanRegion && scanRegion.downScaledWidth ? scanRegion.downScaledWidth : scanRegionWidth;
        canvas.height = scanRegion && scanRegion.downScaledHeight ? scanRegion.downScaledHeight : scanRegionHeight;
      }

      var context = canvas.getContext('2d', {
        alpha: false
      });
      context.imageSmoothingEnabled = false; // gives less blurry images

      context.drawImage(image, scanRegionX, scanRegionY, scanRegionWidth, scanRegionHeight, 0, 0, canvas.width, canvas.height);
      return [canvas, context];
    }
    /* async */

  }, {
    key: "_loadImage",
    value: function _loadImage(imageOrFileOrBlobOrUrl) {
      if (imageOrFileOrBlobOrUrl instanceof HTMLCanvasElement || imageOrFileOrBlobOrUrl instanceof HTMLVideoElement || window.ImageBitmap && imageOrFileOrBlobOrUrl instanceof window.ImageBitmap || window.OffscreenCanvas && imageOrFileOrBlobOrUrl instanceof window.OffscreenCanvas) {
        return Promise.resolve(imageOrFileOrBlobOrUrl);
      } else if (imageOrFileOrBlobOrUrl instanceof Image) {
        return QrScanner._awaitImageLoad(imageOrFileOrBlobOrUrl).then(function () {
          return imageOrFileOrBlobOrUrl;
        });
      } else if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob || imageOrFileOrBlobOrUrl instanceof URL || typeof imageOrFileOrBlobOrUrl === 'string') {
        var image = new Image();

        if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob) {
          image.src = URL.createObjectURL(imageOrFileOrBlobOrUrl);
        } else {
          image.src = imageOrFileOrBlobOrUrl;
        }

        return QrScanner._awaitImageLoad(image).then(function () {
          if (imageOrFileOrBlobOrUrl instanceof File || imageOrFileOrBlobOrUrl instanceof Blob) {
            URL.revokeObjectURL(image.src);
          }

          return image;
        });
      } else {
        return Promise.reject('Unsupported image type.');
      }
    }
    /* async */

  }, {
    key: "_awaitImageLoad",
    value: function _awaitImageLoad(image) {
      return new Promise(function (resolve, reject) {
        if (image.complete && image.naturalWidth !== 0) {
          // already loaded
          resolve();
        } else {
          var _onLoad, _onError2;

          _onLoad = function onLoad() {
            image.removeEventListener('load', _onLoad);
            image.removeEventListener('error', _onError2);
            resolve();
          };

          _onError2 = function onError() {
            image.removeEventListener('load', _onLoad);
            image.removeEventListener('error', _onError2);
            reject('Image load error');
          };

          image.addEventListener('load', _onLoad);
          image.addEventListener('error', _onError2);
        }
      });
    }
    /* async */

  }, {
    key: "_postWorkerMessage",
    value: function _postWorkerMessage(qrEngineOrQrEnginePromise, type, data) {
      return Promise.resolve(qrEngineOrQrEnginePromise).then(function (qrEngine) {
        if (!(qrEngine instanceof Worker)) return;
        qrEngine.postMessage({
          type: type,
          data: data
        });
      });
    }
  }]);

  return QrScanner;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(QrScanner, "DECODE_FORMATS", ['code_128', 'code_93', 'code_39', 'ean_13', '2Of5', 'Inter2Of5', 'codabar', 'qr_code']);


QrScanner.DEFAULT_CANVAS_SIZE = 400;
QrScanner.NO_QR_CODE_FOUND = 'No QR code found';
QrScanner.WORKER_PATH = 'qr-scanner-worker.min.js';

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./qr-scanner.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/damientupinier/Sites/qr-scanner/src/qr-scanner.js */"./qr-scanner.js");


/***/ })

/******/ });
//# sourceMappingURL=qr-scanner.js.map