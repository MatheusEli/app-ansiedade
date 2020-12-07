(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-forum-module"], {
    /***/
    "./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js ***!
      \*******************************************************************/

    /*! exports provided: AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, FromPairsPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RadiansPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, ɵa */

    /***/
    function node_modulesNgxPipes__ivy_ngcc__Fesm2015NgxPipesJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AorAnPipe", function () {
        return AorAnPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BOOLEAN_PIPES", function () {
        return BOOLEAN_PIPES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BytesPipe", function () {
        return BytesPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CamelizePipe", function () {
        return CamelizePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CeilPipe", function () {
        return CeilPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChunkPipe", function () {
        return ChunkPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DATE_PIPES", function () {
        return DATE_PIPES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DegreesPipe", function () {
        return DegreesPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiffObjPipe", function () {
        return DiffObjPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiffPipe", function () {
        return DiffPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EveryPipe", function () {
        return EveryPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterByImpurePipe", function () {
        return FilterByImpurePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterByPipe", function () {
        return FilterByPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlattenPipe", function () {
        return FlattenPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloorPipe", function () {
        return FloorPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FromPairsPipe", function () {
        return FromPairsPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupByImpurePipe", function () {
        return GroupByImpurePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupByPipe", function () {
        return GroupByPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitialPipe", function () {
        return InitialPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function () {
        return IntersectionPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvertByPipe", function () {
        return InvertByPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvertPipe", function () {
        return InvertPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function () {
        return IsArrayPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function () {
        return IsDefinedPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function () {
        return IsEqualToPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function () {
        return IsFunctionPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsGreaterEqualThanPipe", function () {
        return IsGreaterEqualThanPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function () {
        return IsGreaterThanPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function () {
        return IsIdenticalToPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsLessEqualThanPipe", function () {
        return IsLessEqualThanPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function () {
        return IsLessThanPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function () {
        return IsNotEqualToPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function () {
        return IsNotIdenticalToPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsNullPipe", function () {
        return IsNullPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function () {
        return IsNumberPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function () {
        return IsObjectPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsStringPipe", function () {
        return IsStringPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function () {
        return IsUndefinedPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeysPipe", function () {
        return KeysPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LatinisePipe", function () {
        return LatinisePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function () {
        return LeftPadPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function () {
        return LeftTrimPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinesPipe", function () {
        return LinesPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATH_PIPES", function () {
        return MATH_PIPES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MakePluralStringPipe", function () {
        return MakePluralStringPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchPipe", function () {
        return MatchPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxPipe", function () {
        return MaxPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinPipe", function () {
        return MinPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function () {
        return NgArrayPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function () {
        return NgBooleanPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgDatePipesModule", function () {
        return NgDatePipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function () {
        return NgMathPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function () {
        return NgObjectPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgPipesModule", function () {
        return NgPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function () {
        return NgStringPipesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OmitPipe", function () {
        return OmitPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderByImpurePipe", function () {
        return OrderByImpurePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
        return OrderByPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PairsPipe", function () {
        return PairsPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PercentagePipe", function () {
        return PercentagePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickPipe", function () {
        return PickPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PluckPipe", function () {
        return PluckPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PowerPipe", function () {
        return PowerPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadiansPipe", function () {
        return RadiansPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangePipe", function () {
        return RangePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepeatPipe", function () {
        return RepeatPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
        return ReversePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightPadPipe", function () {
        return RightPadPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function () {
        return RightTrimPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
        return RoundPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STRING_PIPES", function () {
        return STRING_PIPES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePipe", function () {
        return SamplePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanPipe", function () {
        return ScanPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShortenPipe", function () {
        return ShortenPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShufflePipe", function () {
        return ShufflePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function () {
        return SlugifyPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SomePipe", function () {
        return SomePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SqrtPipe", function () {
        return SqrtPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function () {
        return StripTagsPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SumPipe", function () {
        return SumPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TailPipe", function () {
        return TailPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPipe", function () {
        return TestPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
        return TimeAgoPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrimPipe", function () {
        return TrimPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrurthifyPipe", function () {
        return TrurthifyPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UcFirstPipe", function () {
        return UcFirstPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UcWordsPipe", function () {
        return UcWordsPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function () {
        return UnderscorePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnionPipe", function () {
        return UnionPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniquePipe", function () {
        return UniquePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValuesPipe", function () {
        return ValuesPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithoutPipe", function () {
        return WithoutPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WrapPipe", function () {
        return WrapPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return isString;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DiffPipe = /*#__PURE__*/function () {
        function DiffPipe() {
          _classCallCheck(this, DiffPipe);
        }

        _createClass(DiffPipe, [{
          key: "transform",
          value: function transform(input) {
            if (!Array.isArray(input)) {
              return input;
            } // tslint:disable-next-line no-bitwise


            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return args.reduce(function (d, c) {
              return d.filter(function (e) {
                return !~c.indexOf(e);
              });
            }, input);
          }
        }]);

        return DiffPipe;
      }();

      DiffPipe.ɵfac = function DiffPipe_Factory(t) {
        return new (t || DiffPipe)();
      };

      DiffPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "diff",
        type: DiffPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'diff'
          }]
        }], null, null);
      })();

      var InitialPipe = /*#__PURE__*/function () {
        function InitialPipe() {
          _classCallCheck(this, InitialPipe);
        }

        _createClass(InitialPipe, [{
          key: "transform",
          value: function transform(input) {
            var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return Array.isArray(input) ? input.slice(0, input.length - num) : input;
          }
        }]);

        return InitialPipe;
      }();

      InitialPipe.ɵfac = function InitialPipe_Factory(t) {
        return new (t || InitialPipe)();
      };

      InitialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "initial",
        type: InitialPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'initial'
          }]
        }], null, null);
      })();

      var FlattenPipe = /*#__PURE__*/function () {
        function FlattenPipe() {
          _classCallCheck(this, FlattenPipe);
        }

        _createClass(FlattenPipe, [{
          key: "transform",
          value: function transform(input) {
            var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!Array.isArray(input)) {
              return input;
            }

            return shallow ? [].concat.apply([], input) : this.flatten(input);
          }
        }, {
          key: "flatten",
          value: function flatten(array) {
            var _this = this;

            return array.reduce(function (arr, elm) {
              if (Array.isArray(elm)) {
                return arr.concat(_this.flatten(elm));
              }

              return arr.concat(elm);
            }, []);
          }
        }]);

        return FlattenPipe;
      }();

      FlattenPipe.ɵfac = function FlattenPipe_Factory(t) {
        return new (t || FlattenPipe)();
      };

      FlattenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "flatten",
        type: FlattenPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlattenPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'flatten'
          }]
        }], null, null);
      })();

      var IntersectionPipe = /*#__PURE__*/function () {
        function IntersectionPipe() {
          _classCallCheck(this, IntersectionPipe);
        }

        _createClass(IntersectionPipe, [{
          key: "transform",
          value: function transform(input) {
            if (!Array.isArray(input)) {
              return input;
            } // tslint:disable-next-line no-bitwise


            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return args.reduce(function (n, c) {
              return n.filter(function (e) {
                return !!~c.indexOf(e);
              });
            }, input);
          }
        }]);

        return IntersectionPipe;
      }();

      IntersectionPipe.ɵfac = function IntersectionPipe_Factory(t) {
        return new (t || IntersectionPipe)();
      };

      IntersectionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "intersection",
        type: IntersectionPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntersectionPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'intersection'
          }]
        }], null, null);
      })();

      function isUndefined(value) {
        return typeof value === 'undefined';
      }

      function isNull(value) {
        return value === null;
      }

      function isFunction(value) {
        return typeof value === 'function';
      }

      function isNumber(value) {
        return typeof value === 'number';
      }

      function isString(value) {
        return typeof value === 'string';
      }

      function isBoolean(value) {
        return typeof value === 'boolean';
      }

      function isObject(value) {
        return value !== null && typeof value === 'object';
      }

      function isNumberFinite(value) {
        return isNumber(value) && isFinite(value);
      }

      function isVowel(letter) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.indexOf(letter) !== -1;
      }

      function ucFirst(text) {
        var _text$split = text.split(/\s/g),
            _text$split2 = _toArray(_text$split),
            part = _text$split2[0],
            split = _text$split2.slice(1);

        var ucd = part.toLowerCase().split(/(?=['|-])/g).map(function (word) {
          return word.indexOf('-') + word.indexOf("'") > -2 ? word.slice(0, 2).toUpperCase() + word.slice(2) : word.slice(0, 1).toUpperCase() + word.slice(1);
        }).join('');
        return [ucd].concat(_toConsumableArray(split)).join(' ');
      }

      function applyPrecision(num, precision) {
        if (precision <= 0) {
          return Math.round(num);
        }

        var tho = Math.pow(10, precision);
        return Math.round(num * tho) / tho;
      }

      function extractDeepPropertyByMapKey(obj, map) {
        var keys = map.split('.');
        var head = keys.shift();
        return keys.reduce(function (prop, key) {
          return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
        }, obj[head || '']);
      }

      function extractDeepPropertyByParentMapKey(obj, map) {
        var keys = map.split('.');
        var tail = keys.pop();
        var props = extractDeepPropertyByMapKey(obj, keys.join('.'));
        return {
          props: props,
          tail: tail
        };
      }

      function getKeysTwoObjects(obj, other) {
        return [].concat(_toConsumableArray(Object.keys(obj)), _toConsumableArray(Object.keys(other))).filter(function (key, index, array) {
          return array.indexOf(key) === index;
        });
      }

      function isDeepEqual(obj, other) {
        if (!isObject(obj) || !isObject(other)) {
          return obj === other;
        }

        return getKeysTwoObjects(obj, other).every(function (key) {
          if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
          }

          if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
          }

          return isDeepEqual(obj[key], other[key]);
        });
      }

      var ReversePipe = /*#__PURE__*/function () {
        function ReversePipe() {
          _classCallCheck(this, ReversePipe);
        }

        _createClass(ReversePipe, [{
          key: "transform",
          value: function transform(input) {
            if (isString(input)) {
              return input.split('').reverse().join('');
            }

            return Array.isArray(input) ? input.slice().reverse() : input;
          }
        }]);

        return ReversePipe;
      }();

      ReversePipe.ɵfac = function ReversePipe_Factory(t) {
        return new (t || ReversePipe)();
      };

      ReversePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "reverse",
        type: ReversePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReversePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'reverse'
          }]
        }], null, null);
      })();

      var TailPipe = /*#__PURE__*/function () {
        function TailPipe() {
          _classCallCheck(this, TailPipe);
        }

        _createClass(TailPipe, [{
          key: "transform",
          value: function transform(input) {
            var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return Array.isArray(input) ? input.slice(num) : input;
          }
        }]);

        return TailPipe;
      }();

      TailPipe.ɵfac = function TailPipe_Factory(t) {
        return new (t || TailPipe)();
      };

      TailPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "tail",
        type: TailPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TailPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'tail'
          }]
        }], null, null);
      })();

      var TrurthifyPipe = /*#__PURE__*/function () {
        function TrurthifyPipe() {
          _classCallCheck(this, TrurthifyPipe);
        }

        _createClass(TrurthifyPipe, [{
          key: "transform",
          value: function transform(input) {
            return Array.isArray(input) ? input.filter(function (e) {
              return !!e;
            }) : input;
          }
        }]);

        return TrurthifyPipe;
      }();

      TrurthifyPipe.ɵfac = function TrurthifyPipe_Factory(t) {
        return new (t || TrurthifyPipe)();
      };

      TrurthifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "truthify",
        type: TrurthifyPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrurthifyPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'truthify'
          }]
        }], null, null);
      })();

      var UnionPipe = /*#__PURE__*/function () {
        function UnionPipe() {
          _classCallCheck(this, UnionPipe);
        }

        _createClass(UnionPipe, [{
          key: "transform",
          value: function transform(input) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (!Array.isArray(input) || !Array.isArray(args)) {
              return input;
            }

            return args.reduce(function (newArr, currArr) {
              return newArr.concat(currArr.reduce(function (noDupArr, curr) {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
              }, []));
            }, input);
          }
        }]);

        return UnionPipe;
      }();

      UnionPipe.ɵfac = function UnionPipe_Factory(t) {
        return new (t || UnionPipe)();
      };

      UnionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "union",
        type: UnionPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnionPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'union'
          }]
        }], null, null);
      })();

      var UniquePipe = /*#__PURE__*/function () {
        function UniquePipe() {
          _classCallCheck(this, UniquePipe);
        }

        _createClass(UniquePipe, [{
          key: "transform",
          value: function transform(input, propertyName) {
            var uniques = [];
            return Array.isArray(input) ? isUndefined(propertyName) ? input.filter(function (e, i) {
              return input.indexOf(e) === i;
            }) : input.filter(function (e, i) {
              var value = extractDeepPropertyByMapKey(e, propertyName);
              value = isObject(value) ? JSON.stringify(value) : value;

              if (isUndefined(value) || uniques[value]) {
                return false;
              }

              uniques[value] = true;
              return true;
            }) : input;
          }
        }]);

        return UniquePipe;
      }();

      UniquePipe.ɵfac = function UniquePipe_Factory(t) {
        return new (t || UniquePipe)();
      };

      UniquePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "unique",
        type: UniquePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniquePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'unique'
          }]
        }], null, null);
      })();

      var WithoutPipe = /*#__PURE__*/function () {
        function WithoutPipe() {
          _classCallCheck(this, WithoutPipe);
        }

        _createClass(WithoutPipe, [{
          key: "transform",
          value: function transform(input) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            return Array.isArray(input) ? // tslint:disable-next-line:no-bitwise
            input.filter(function (e) {
              return !~args.indexOf(e);
            }) : input;
          }
        }]);

        return WithoutPipe;
      }();

      WithoutPipe.ɵfac = function WithoutPipe_Factory(t) {
        return new (t || WithoutPipe)();
      };

      WithoutPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "without",
        type: WithoutPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'without'
          }]
        }], null, null);
      })();

      var PluckPipe = /*#__PURE__*/function () {
        function PluckPipe() {
          _classCallCheck(this, PluckPipe);
        }

        _createClass(PluckPipe, [{
          key: "transform",
          value: function transform(input, map) {
            if (Array.isArray(input)) {
              return input.map(function (e) {
                return extractDeepPropertyByMapKey(e, map);
              });
            }

            return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
          }
        }]);

        return PluckPipe;
      }();

      PluckPipe.ɵfac = function PluckPipe_Factory(t) {
        return new (t || PluckPipe)();
      };

      PluckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "pluck",
        type: PluckPipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluckPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'pluck',
            pure: false
          }]
        }], null, null);
      })();

      var ShufflePipe = /*#__PURE__*/function () {
        function ShufflePipe() {
          _classCallCheck(this, ShufflePipe);
        }

        _createClass(ShufflePipe, [{
          key: "transform",
          // Using a version of the Fisher-Yates shuffle algorithm
          // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
          value: function transform(input) {
            if (!Array.isArray(input)) {
              return input;
            }

            var shuffled = _toConsumableArray(input);

            var n = input.length - 1;

            for (var i = 0; i < n; ++i) {
              var j = Math.floor(Math.random() * (n - i + 1)) + i;
              var _ref = [shuffled[j], shuffled[i]];
              shuffled[i] = _ref[0];
              shuffled[j] = _ref[1];
            }

            return shuffled;
          }
        }]);

        return ShufflePipe;
      }();

      ShufflePipe.ɵfac = function ShufflePipe_Factory(t) {
        return new (t || ShufflePipe)();
      };

      ShufflePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "shuffle",
        type: ShufflePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShufflePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'shuffle'
          }]
        }], null, null);
      })();

      var EveryPipe = /*#__PURE__*/function () {
        function EveryPipe() {
          _classCallCheck(this, EveryPipe);
        }

        _createClass(EveryPipe, [{
          key: "transform",
          value: function transform(input, predicate) {
            return Array.isArray(input) ? input.every(predicate) : false;
          }
        }]);

        return EveryPipe;
      }();

      EveryPipe.ɵfac = function EveryPipe_Factory(t) {
        return new (t || EveryPipe)();
      };

      EveryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "every",
        type: EveryPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EveryPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'every'
          }]
        }], null, null);
      })();

      var SomePipe = /*#__PURE__*/function () {
        function SomePipe() {
          _classCallCheck(this, SomePipe);
        }

        _createClass(SomePipe, [{
          key: "transform",
          value: function transform(input, predicate) {
            return Array.isArray(input) ? input.some(predicate) : input;
          }
        }]);

        return SomePipe;
      }();

      SomePipe.ɵfac = function SomePipe_Factory(t) {
        return new (t || SomePipe)();
      };

      SomePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "some",
        type: SomePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SomePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'some'
          }]
        }], null, null);
      })();

      var SamplePipe = /*#__PURE__*/function () {
        function SamplePipe() {
          _classCallCheck(this, SamplePipe);
        }

        _createClass(SamplePipe, [{
          key: "transform",
          value: function transform(input) {
            var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            if (!Array.isArray(input)) {
              return input;
            }

            var sample = [];

            var tmp = _toConsumableArray(input);

            var l = len < tmp.length ? len : tmp.length;

            for (var i = 0; i < l; ++i) {
              sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
            }

            return sample;
          }
        }]);

        return SamplePipe;
      }();

      SamplePipe.ɵfac = function SamplePipe_Factory(t) {
        return new (t || SamplePipe)();
      };

      SamplePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "sample",
        type: SamplePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'sample'
          }]
        }], null, null);
      })();

      var GroupByPipe = /*#__PURE__*/function () {
        function GroupByPipe() {
          _classCallCheck(this, GroupByPipe);
        }

        _createClass(GroupByPipe, [{
          key: "transform",
          value: function transform(input) {
            var discriminator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '|';

            if (!Array.isArray(input)) {
              return input;
            }

            return this.groupBy(input, discriminator, delimiter);
          }
        }, {
          key: "groupBy",
          value: function groupBy(list, discriminator, delimiter) {
            var _this2 = this;

            return list.reduce(function (acc, payload) {
              var key = _this2.extractKeyByDiscriminator(discriminator, payload, delimiter);

              acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
              return acc;
            }, {});
          }
        }, {
          key: "extractKeyByDiscriminator",
          value: function extractKeyByDiscriminator(discriminator, payload, delimiter) {
            if (isFunction(discriminator)) {
              return discriminator(payload);
            }

            if (Array.isArray(discriminator)) {
              return discriminator.map(function (k) {
                return extractDeepPropertyByMapKey(payload, k);
              }).join(delimiter);
            }

            return extractDeepPropertyByMapKey(payload, discriminator);
          }
        }]);

        return GroupByPipe;
      }();

      GroupByPipe.ɵfac = function GroupByPipe_Factory(t) {
        return new (t || GroupByPipe)();
      };

      GroupByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "groupBy",
        type: GroupByPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'groupBy'
          }]
        }], null, null);
      })(); // tslint:disable no-bitwise


      var FilterByPipe = /*#__PURE__*/function () {
        function FilterByPipe() {
          _classCallCheck(this, FilterByPipe);
        }

        _createClass(FilterByPipe, [{
          key: "transform",
          value: function transform(input, props) {
            var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var strict = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (!Array.isArray(input) || !Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search)) {
              return input;
            }

            var terms = String(search).toLowerCase().split(',');
            return input.filter(function (obj) {
              return props.some(function (prop) {
                return terms.some(function (term) {
                  var value = extractDeepPropertyByMapKey(obj, prop);
                  /* tslint:disable */

                  var _extractDeepPropertyB = extractDeepPropertyByParentMapKey(obj, prop),
                      props = _extractDeepPropertyB.props,
                      tail = _extractDeepPropertyB.tail;

                  if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                    return props.some(function (parent) {
                      var str = String(parent[tail]).toLowerCase();
                      return strict ? str === term : !!~str.indexOf(term);
                    });
                  }

                  if (isUndefined(value)) {
                    return false;
                  }

                  var strValue = String(value).toLowerCase();
                  return strict ? term === strValue : !!~strValue.indexOf(term);
                });
              });
            });
          }
        }]);

        return FilterByPipe;
      }();

      FilterByPipe.ɵfac = function FilterByPipe_Factory(t) {
        return new (t || FilterByPipe)();
      };

      FilterByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filterBy",
        type: FilterByPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filterBy'
          }]
        }], null, null);
      })();

      var OrderByPipe = /*#__PURE__*/function () {
        function OrderByPipe() {
          _classCallCheck(this, OrderByPipe);
        }

        _createClass(OrderByPipe, [{
          key: "transform",
          value: function transform(input, config) {
            if (!Array.isArray(input)) {
              return input;
            }

            var out = _toConsumableArray(input); // sort by multiple properties


            if (Array.isArray(config)) {
              return out.sort(function (a, b) {
                var l = config.length;

                for (var i = 0; i < l; ++i) {
                  var _OrderByPipe$extractF = OrderByPipe.extractFromConfig(config[i]),
                      _OrderByPipe$extractF2 = _slicedToArray(_OrderByPipe$extractF, 2),
                      prop = _OrderByPipe$extractF2[0],
                      asc = _OrderByPipe$extractF2[1];

                  var pos = OrderByPipe.orderCompare(prop, asc, a, b);

                  if (pos !== 0) {
                    return pos;
                  }
                }

                return 0;
              });
            } // sort by a single property value


            if (isString(config)) {
              var _OrderByPipe$extractF3 = OrderByPipe.extractFromConfig(config),
                  _OrderByPipe$extractF4 = _slicedToArray(_OrderByPipe$extractF3, 3),
                  prop = _OrderByPipe$extractF4[0],
                  asc = _OrderByPipe$extractF4[1],
                  sign = _OrderByPipe$extractF4[2];

              if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                  case '+':
                    return out.sort(OrderByPipe.simpleSort.bind(this));

                  case '-':
                    return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                }
              }

              return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
            } // default sort by value


            return out.sort(OrderByPipe.simpleSort.bind(this));
          }
        }], [{
          key: "simpleSort",
          value: function simpleSort(a, b) {
            return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
          }
        }, {
          key: "orderCompare",
          value: function orderCompare(prop, asc, a, b) {
            var first = extractDeepPropertyByMapKey(a, prop);
            var second = extractDeepPropertyByMapKey(b, prop);

            if (first === second) {
              return 0;
            }

            if (isUndefined(first) || first === '') {
              return 1;
            }

            if (isUndefined(second) || second === '') {
              return -1;
            }

            if (isString(first) && isString(second)) {
              var pos = first.toLowerCase().localeCompare(second.toLowerCase());
              return asc ? pos : -pos;
            }

            return asc ? first - second : second - first;
          }
        }, {
          key: "extractFromConfig",
          value: function extractFromConfig(config) {
            var sign = config.substr(0, 1);
            var prop = config.replace(/^[-+]/, '');
            var asc = sign !== '-';
            return [prop, asc, sign];
          }
        }]);

        return OrderByPipe;
      }();

      OrderByPipe.ɵfac = function OrderByPipe_Factory(t) {
        return new (t || OrderByPipe)();
      };

      OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "orderBy",
        type: OrderByPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'orderBy'
          }]
        }], null, null);
      })(); // tslint:disable use-pipe-transform-interface


      var GroupByImpurePipe = /*#__PURE__*/function (_GroupByPipe) {
        _inherits(GroupByImpurePipe, _GroupByPipe);

        var _super = _createSuper(GroupByImpurePipe);

        function GroupByImpurePipe() {
          _classCallCheck(this, GroupByImpurePipe);

          return _super.apply(this, arguments);
        }

        return GroupByImpurePipe;
      }(GroupByPipe);

      GroupByImpurePipe.ɵfac = function GroupByImpurePipe_Factory(t) {
        return ɵGroupByImpurePipe_BaseFactory(t || GroupByImpurePipe);
      };

      GroupByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "groupByImpure",
        type: GroupByImpurePipe,
        pure: false
      });

      var ɵGroupByImpurePipe_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GroupByImpurePipe);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByImpurePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'groupByImpure',
            pure: false
          }]
        }], null, null);
      })(); // tslint:disable use-pipe-transform-interface


      var FilterByImpurePipe = /*#__PURE__*/function (_FilterByPipe) {
        _inherits(FilterByImpurePipe, _FilterByPipe);

        var _super2 = _createSuper(FilterByImpurePipe);

        function FilterByImpurePipe() {
          _classCallCheck(this, FilterByImpurePipe);

          return _super2.apply(this, arguments);
        }

        return FilterByImpurePipe;
      }(FilterByPipe);

      FilterByImpurePipe.ɵfac = function FilterByImpurePipe_Factory(t) {
        return ɵFilterByImpurePipe_BaseFactory(t || FilterByImpurePipe);
      };

      FilterByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filterByImpure",
        type: FilterByImpurePipe,
        pure: false
      });

      var ɵFilterByImpurePipe_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FilterByImpurePipe);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByImpurePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filterByImpure',
            pure: false
          }]
        }], null, null);
      })(); // tslint:disable use-pipe-transform-interface


      var OrderByImpurePipe = /*#__PURE__*/function (_OrderByPipe) {
        _inherits(OrderByImpurePipe, _OrderByPipe);

        var _super3 = _createSuper(OrderByImpurePipe);

        function OrderByImpurePipe() {
          _classCallCheck(this, OrderByImpurePipe);

          return _super3.apply(this, arguments);
        }

        return OrderByImpurePipe;
      }(OrderByPipe);

      OrderByImpurePipe.ɵfac = function OrderByImpurePipe_Factory(t) {
        return ɵOrderByImpurePipe_BaseFactory(t || OrderByImpurePipe);
      };

      OrderByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "orderByImpure",
        type: OrderByImpurePipe,
        pure: false
      });

      var ɵOrderByImpurePipe_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OrderByImpurePipe);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByImpurePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'orderByImpure',
            pure: false
          }]
        }], null, null);
      })();

      var RangePipe = /*#__PURE__*/function () {
        function RangePipe() {
          _classCallCheck(this, RangePipe);
        }

        _createClass(RangePipe, [{
          key: "transform",
          value: function transform() {
            var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Array(count).fill('').map(function (v, i) {
              return step * i + start;
            });
          }
        }]);

        return RangePipe;
      }();

      RangePipe.ɵfac = function RangePipe_Factory(t) {
        return new (t || RangePipe)();
      };

      RangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "range",
        type: RangePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'range'
          }]
        }], null, null);
      })();

      var ChunkPipe = /*#__PURE__*/function () {
        function ChunkPipe() {
          _classCallCheck(this, ChunkPipe);
        }

        _createClass(ChunkPipe, [{
          key: "transform",
          value: function transform(input) {
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            if (isString(input)) {
              return this.chunk(input.split(''), size);
            }

            return Array.isArray(input) ? this.chunk(input, size) : input;
          }
        }, {
          key: "chunk",
          value: function chunk(input, size) {
            return Array(Math.ceil(input.length / size)).fill([]).map(function (_, index) {
              return index * size;
            }).map(function (begin) {
              return input.slice(begin, begin + size);
            });
          }
        }]);

        return ChunkPipe;
      }();

      ChunkPipe.ɵfac = function ChunkPipe_Factory(t) {
        return new (t || ChunkPipe)();
      };

      ChunkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "chunk",
        type: ChunkPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChunkPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'chunk'
          }]
        }], null, null);
      })();

      var FromPairsPipe = /*#__PURE__*/function () {
        function FromPairsPipe() {
          _classCallCheck(this, FromPairsPipe);
        }

        _createClass(FromPairsPipe, [{
          key: "transform",
          value: function transform(input) {
            if (!Array.isArray(input)) {
              return input;
            }

            return input.reduce(function (obj, arr) {
              if (!Array.isArray(arr)) {
                return obj;
              }

              var _arr2 = _slicedToArray(arr, 2),
                  prop = _arr2[0],
                  val = _arr2[1];

              obj[prop] = val;
              return obj;
            }, {});
          }
        }]);

        return FromPairsPipe;
      }();

      FromPairsPipe.ɵfac = function FromPairsPipe_Factory(t) {
        return new (t || FromPairsPipe)();
      };

      FromPairsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "fromPairs",
        type: FromPairsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromPairsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'fromPairs'
          }]
        }], null, null);
      })();

      var ARRAY_PIPES = [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe];

      var NgArrayPipesModule = function NgArrayPipesModule() {
        _classCallCheck(this, NgArrayPipesModule);
      };

      NgArrayPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgArrayPipesModule
      });
      NgArrayPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgArrayPipesModule_Factory(t) {
          return new (t || NgArrayPipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgArrayPipesModule, {
          declarations: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe],
          exports: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgArrayPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: ARRAY_PIPES,
            imports: [],
            exports: ARRAY_PIPES
          }]
        }], null, null);
      })();

      var KeysPipe = /*#__PURE__*/function () {
        function KeysPipe() {
          _classCallCheck(this, KeysPipe);
        }

        _createClass(KeysPipe, [{
          key: "transform",
          value: function transform(obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.keys(obj);
          }
        }]);

        return KeysPipe;
      }();

      KeysPipe.ɵfac = function KeysPipe_Factory(t) {
        return new (t || KeysPipe)();
      };

      KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "keys",
        type: KeysPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'keys'
          }]
        }], null, null);
      })();

      var ValuesPipe = /*#__PURE__*/function () {
        function ValuesPipe() {
          _classCallCheck(this, ValuesPipe);
        }

        _createClass(ValuesPipe, [{
          key: "transform",
          value: function transform(obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.keys(obj).map(function (k) {
              return obj[k];
            });
          }
        }]);

        return ValuesPipe;
      }();

      ValuesPipe.ɵfac = function ValuesPipe_Factory(t) {
        return new (t || ValuesPipe)();
      };

      ValuesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "values",
        type: ValuesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'values'
          }]
        }], null, null);
      })();

      var PairsPipe = /*#__PURE__*/function () {
        function PairsPipe() {
          _classCallCheck(this, PairsPipe);
        }

        _createClass(PairsPipe, [{
          key: "transform",
          value: function transform(obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.entries(obj);
          }
        }]);

        return PairsPipe;
      }();

      PairsPipe.ɵfac = function PairsPipe_Factory(t) {
        return new (t || PairsPipe)();
      };

      PairsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "pairs",
        type: PairsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PairsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'pairs'
          }]
        }], null, null);
      })();

      var PickPipe = /*#__PURE__*/function () {
        function PickPipe() {
          _classCallCheck(this, PickPipe);
        }

        _createClass(PickPipe, [{
          key: "transform",
          value: function transform(obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            return args.reduce(function (o, k) {
              return Object.assign(o, _defineProperty({}, k, obj[k]));
            }, {});
          }
        }]);

        return PickPipe;
      }();

      PickPipe.ɵfac = function PickPipe_Factory(t) {
        return new (t || PickPipe)();
      };

      PickPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "pick",
        type: PickPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'pick'
          }]
        }], null, null);
      })();

      var OmitPipe = /*#__PURE__*/function () {
        function OmitPipe() {
          _classCallCheck(this, OmitPipe);
        }

        _createClass(OmitPipe, [{
          key: "transform",
          value: function transform(obj) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }

            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.keys(obj) // tslint:disable-next-line:no-bitwise
            .filter(function (k) {
              return !~args.indexOf(k);
            }).reduce(function (o, k) {
              return Object.assign(o, _defineProperty({}, k, obj[k]));
            }, {});
          }
        }]);

        return OmitPipe;
      }();

      OmitPipe.ɵfac = function OmitPipe_Factory(t) {
        return new (t || OmitPipe)();
      };

      OmitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "omit",
        type: OmitPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmitPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'omit'
          }]
        }], null, null);
      })();

      var InvertPipe = /*#__PURE__*/function () {
        function InvertPipe() {
          _classCallCheck(this, InvertPipe);
        }

        _createClass(InvertPipe, [{
          key: "transform",
          value: function transform(obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.keys(obj).reduce(function (o, k) {
              return Object.assign(o, _defineProperty({}, obj[k], k));
            }, {});
          }
        }]);

        return InvertPipe;
      }();

      InvertPipe.ɵfac = function InvertPipe_Factory(t) {
        return new (t || InvertPipe)();
      };

      InvertPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "invert",
        type: InvertPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'invert'
          }]
        }], null, null);
      })();

      var InvertByPipe = /*#__PURE__*/function () {
        function InvertByPipe() {
          _classCallCheck(this, InvertByPipe);
        }

        _createClass(InvertByPipe, [{
          key: "transform",
          value: function transform(obj, cb) {
            if (Array.isArray(obj) || !isObject(obj)) {
              return obj;
            }

            return Object.keys(obj).reduce(function (o, k) {
              var key = cb ? cb(obj[k]) : obj[k];
              return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, _defineProperty({}, key, [k]));
            }, {});
          }
        }]);

        return InvertByPipe;
      }();

      InvertByPipe.ɵfac = function InvertByPipe_Factory(t) {
        return new (t || InvertByPipe)();
      };

      InvertByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "invertBy",
        type: InvertByPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertByPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'invertBy'
          }]
        }], null, null);
      })();

      var DiffObjPipe = /*#__PURE__*/function () {
        function DiffObjPipe() {
          _classCallCheck(this, DiffObjPipe);
        }

        _createClass(DiffObjPipe, [{
          key: "transform",
          value: function transform(obj) {
            var original = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
              return {};
            }

            return getKeysTwoObjects(obj, original).reduce(function (diff, key) {
              if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
              }

              return diff;
            }, {});
          }
        }]);

        return DiffObjPipe;
      }();

      DiffObjPipe.ɵfac = function DiffObjPipe_Factory(t) {
        return new (t || DiffObjPipe)();
      };

      DiffObjPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "diffObj",
        type: DiffObjPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffObjPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'diffObj'
          }]
        }], null, null);
      })();

      var OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];

      var NgObjectPipesModule = function NgObjectPipesModule() {
        _classCallCheck(this, NgObjectPipesModule);
      };

      NgObjectPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgObjectPipesModule
      });
      NgObjectPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgObjectPipesModule_Factory(t) {
          return new (t || NgObjectPipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgObjectPipesModule, {
          declarations: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe],
          exports: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgObjectPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: OBJECT_PIPES,
            imports: [],
            exports: OBJECT_PIPES
          }]
        }], null, null);
      })();
      /**
       * Takes a string and returns the string prepended by 'a' or 'an'.
       * Uses both naive and holdout-list approaches.
       * @constructor
       * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
       */


      var AorAnPipe = /*#__PURE__*/function () {
        function AorAnPipe() {
          _classCallCheck(this, AorAnPipe);

          this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a'
          };
        }

        _createClass(AorAnPipe, [{
          key: "transform",
          value: function transform(stringEntity) {
            if (!stringEntity || stringEntity === '') {
              return '';
            } else {
              var firstWord = stringEntity.trim().split(' ')[0];

              if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return "".concat(this.irregularMap[firstWord.toLocaleLowerCase()], " ").concat(stringEntity);
              } else {
                return isVowel(stringEntity[0]) ? "an ".concat(stringEntity) : "a ".concat(stringEntity);
              }
            }
          }
        }]);

        return AorAnPipe;
      }();

      AorAnPipe.ɵfac = function AorAnPipe_Factory(t) {
        return new (t || AorAnPipe)();
      };

      AorAnPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "aOrAn",
        type: AorAnPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AorAnPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'aOrAn'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var UcWordsPipe = /*#__PURE__*/function () {
        function UcWordsPipe() {
          _classCallCheck(this, UcWordsPipe);
        }

        _createClass(UcWordsPipe, [{
          key: "transform",
          value: function transform(text) {
            if (isString(text)) {
              return text.split(' ').map(function (sub) {
                return ucFirst(sub);
              }).join(' ');
            }

            return text;
          }
        }]);

        return UcWordsPipe;
      }();

      UcWordsPipe.ɵfac = function UcWordsPipe_Factory(t) {
        return new (t || UcWordsPipe)();
      };

      UcWordsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ucwords",
        type: UcWordsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcWordsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'ucwords'
          }]
        }], null, null);
      })();

      var LeftTrimPipe = /*#__PURE__*/function () {
        function LeftTrimPipe() {
          _classCallCheck(this, LeftTrimPipe);
        }

        _createClass(LeftTrimPipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.replace(new RegExp("^[".concat(chars, "]+")), '') : text;
          }
        }]);

        return LeftTrimPipe;
      }();

      LeftTrimPipe.ɵfac = function LeftTrimPipe_Factory(t) {
        return new (t || LeftTrimPipe)();
      };

      LeftTrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ltrim",
        type: LeftTrimPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTrimPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'ltrim'
          }]
        }], null, null);
      })();

      var RepeatPipe = /*#__PURE__*/function () {
        function RepeatPipe() {
          _classCallCheck(this, RepeatPipe);
        }

        _createClass(RepeatPipe, [{
          key: "transform",
          value: function transform(str) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (n <= 0) {
              throw new RangeError();
            }

            return n === 1 ? str : this.repeat(str, n - 1, separator);
          }
        }, {
          key: "repeat",
          value: function repeat(str, n, separator) {
            return isString(str) ? n === 0 ? str : str + separator + this.repeat(str, n - 1, separator) : str;
          }
        }]);

        return RepeatPipe;
      }();

      RepeatPipe.ɵfac = function RepeatPipe_Factory(t) {
        return new (t || RepeatPipe)();
      };

      RepeatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "repeat",
        type: RepeatPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepeatPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'repeat'
          }]
        }], null, null);
      })();

      var RightTrimPipe = /*#__PURE__*/function () {
        function RightTrimPipe() {
          _classCallCheck(this, RightTrimPipe);
        }

        _createClass(RightTrimPipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.replace(new RegExp("[".concat(chars, "]+$")), '') : text;
          }
        }]);

        return RightTrimPipe;
      }();

      RightTrimPipe.ɵfac = function RightTrimPipe_Factory(t) {
        return new (t || RightTrimPipe)();
      };

      RightTrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "rtrim",
        type: RightTrimPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTrimPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'rtrim'
          }]
        }], null, null);
      })();

      var ScanPipe = /*#__PURE__*/function () {
        function ScanPipe() {
          _classCallCheck(this, ScanPipe);
        }

        _createClass(ScanPipe, [{
          key: "transform",
          value: function transform(text) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            return isString(text) ? text.replace(/\{(\d+)}/g, function (match, index) {
              return !isUndefined(args[index]) ? args[index] : match;
            }) : text;
          }
        }]);

        return ScanPipe;
      }();

      ScanPipe.ɵfac = function ScanPipe_Factory(t) {
        return new (t || ScanPipe)();
      };

      ScanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "scan",
        type: ScanPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'scan'
          }]
        }], null, null);
      })();

      var ShortenPipe = /*#__PURE__*/function () {
        function ShortenPipe() {
          _classCallCheck(this, ShortenPipe);
        }

        _createClass(ShortenPipe, [{
          key: "transform",
          value: function transform(text) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var wordBreak = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            if (!isString(text)) {
              return text;
            }

            if (text.length > length) {
              if (wordBreak) {
                return text.slice(0, length) + suffix;
              } // tslint:disable-next-line:no-bitwise


              if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
              }
            }

            return text;
          }
        }]);

        return ShortenPipe;
      }();

      ShortenPipe.ɵfac = function ShortenPipe_Factory(t) {
        return new (t || ShortenPipe)();
      };

      ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "shorten",
        type: ShortenPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'shorten'
          }]
        }], null, null);
      })();

      var StripTagsPipe = /*#__PURE__*/function () {
        function StripTagsPipe() {
          _classCallCheck(this, StripTagsPipe);
        }

        _createClass(StripTagsPipe, [{
          key: "transform",
          value: function transform(text) {
            for (var _len5 = arguments.length, allowedTags = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              allowedTags[_key5 - 1] = arguments[_key5];
            }

            return allowedTags.length > 0 ? text.replace(new RegExp("<(?!/?(".concat(allowedTags.join('|'), ")s*/?)[^>]+>"), 'g'), '') : text.replace(/<(?:.|\s)*?>/g, '');
          }
        }]);

        return StripTagsPipe;
      }();

      StripTagsPipe.ɵfac = function StripTagsPipe_Factory(t) {
        return new (t || StripTagsPipe)();
      };

      StripTagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "stripTags",
        type: StripTagsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripTagsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'stripTags'
          }]
        }], null, null);
      })();

      var TrimPipe = /*#__PURE__*/function () {
        function TrimPipe() {
          _classCallCheck(this, TrimPipe);
        }

        _createClass(TrimPipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.replace(new RegExp("^[".concat(chars, "]+|[").concat(chars, "]+$"), 'g'), '') : text;
          }
        }]);

        return TrimPipe;
      }();

      TrimPipe.ɵfac = function TrimPipe_Factory(t) {
        return new (t || TrimPipe)();
      };

      TrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "trim",
        type: TrimPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrimPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'trim'
          }]
        }], null, null);
      })();

      var UcFirstPipe = /*#__PURE__*/function () {
        function UcFirstPipe() {
          _classCallCheck(this, UcFirstPipe);
        }

        _createClass(UcFirstPipe, [{
          key: "transform",
          value: function transform(text) {
            return isString(text) ? ucFirst(text) : text;
          }
        }]);

        return UcFirstPipe;
      }();

      UcFirstPipe.ɵfac = function UcFirstPipe_Factory(t) {
        return new (t || UcFirstPipe)();
      };

      UcFirstPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ucfirst",
        type: UcFirstPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcFirstPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'ucfirst'
          }]
        }], null, null);
      })();

      var SlugifyPipe = /*#__PURE__*/function () {
        function SlugifyPipe() {
          _classCallCheck(this, SlugifyPipe);
        }

        _createClass(SlugifyPipe, [{
          key: "transform",
          value: function transform(str) {
            return isString(str) ? str.toLowerCase().trim().replace(/[^\w\-]+/g, ' ').replace(/\s+/g, '-') : str;
          }
        }]);

        return SlugifyPipe;
      }();

      SlugifyPipe.ɵfac = function SlugifyPipe_Factory(t) {
        return new (t || SlugifyPipe)();
      };

      SlugifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "slugify",
        type: SlugifyPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlugifyPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'slugify'
          }]
        }], null, null);
      })();

      var CamelizePipe = /*#__PURE__*/function () {
        function CamelizePipe() {
          _classCallCheck(this, CamelizePipe);
        }

        _createClass(CamelizePipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';

            if (!isString(text)) {
              return text;
            }

            return text.toLowerCase().split(/[-_\s]/g).filter(function (v) {
              return !!v;
            }).map(function (word, key) {
              return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
            }).join('');
          }
        }]);

        return CamelizePipe;
      }();

      CamelizePipe.ɵfac = function CamelizePipe_Factory(t) {
        return new (t || CamelizePipe)();
      };

      CamelizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "camelize",
        type: CamelizePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamelizePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'camelize'
          }]
        }], null, null);
      })();

      var LatinisePipe = /*#__PURE__*/function () {
        function LatinisePipe() {
          _classCallCheck(this, LatinisePipe);

          // Source: http://semplicewebsites.com/removing-accents-javascript
          // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
          this.latinMap = {
            'Á': 'A',
            'Ă': 'A',
            'Ắ': 'A',
            'Ặ': 'A',
            'Ằ': 'A',
            'Ẳ': 'A',
            'Ẵ': 'A',
            'Ǎ': 'A',
            'Â': 'A',
            'Ấ': 'A',
            'Ậ': 'A',
            'Ầ': 'A',
            'Ẩ': 'A',
            'Ẫ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ạ': 'A',
            'Ȁ': 'A',
            'À': 'A',
            'Ả': 'A',
            'Ȃ': 'A',
            'Ā': 'A',
            'Ą': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ḁ': 'A',
            'Ⱥ': 'A',
            'Ã': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ɓ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ć': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ď': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḋ': 'D',
            'Ḍ': 'D',
            'Ɗ': 'D',
            'Ḏ': 'D',
            'ǲ': 'D',
            'ǅ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'É': 'E',
            'Ĕ': 'E',
            'Ě': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ê': 'E',
            'Ế': 'E',
            'Ệ': 'E',
            'Ề': 'E',
            'Ể': 'E',
            'Ễ': 'E',
            'Ḙ': 'E',
            'Ë': 'E',
            'Ė': 'E',
            'Ẹ': 'E',
            'Ȅ': 'E',
            'È': 'E',
            'Ẻ': 'E',
            'Ȇ': 'E',
            'Ē': 'E',
            'Ḗ': 'E',
            'Ḕ': 'E',
            'Ę': 'E',
            'Ɇ': 'E',
            'Ẽ': 'E',
            'Ḛ': 'E',
            'Ꝫ': 'ET',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ǵ': 'G',
            'Ğ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ĝ': 'G',
            'Ġ': 'G',
            'Ɠ': 'G',
            'Ḡ': 'G',
            'Ǥ': 'G',
            'Ḫ': 'H',
            'Ȟ': 'H',
            'Ḩ': 'H',
            'Ĥ': 'H',
            'Ⱨ': 'H',
            'Ḧ': 'H',
            'Ḣ': 'H',
            'Ḥ': 'H',
            'Ħ': 'H',
            'Í': 'I',
            'Ĭ': 'I',
            'Ǐ': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'İ': 'I',
            'Ị': 'I',
            'Ȉ': 'I',
            'Ì': 'I',
            'Ỉ': 'I',
            'Ȋ': 'I',
            'Ī': 'I',
            'Į': 'I',
            'Ɨ': 'I',
            'Ĩ': 'I',
            'Ḭ': 'I',
            'Ꝺ': 'D',
            'Ꝼ': 'F',
            'Ᵹ': 'G',
            'Ꞃ': 'R',
            'Ꞅ': 'S',
            'Ꞇ': 'T',
            'Ꝭ': 'IS',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ķ': 'K',
            'Ⱪ': 'K',
            'Ꝃ': 'K',
            'Ḳ': 'K',
            'Ƙ': 'K',
            'Ḵ': 'K',
            'Ꝁ': 'K',
            'Ꝅ': 'K',
            'Ĺ': 'L',
            'Ƚ': 'L',
            'Ľ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ḻ': 'L',
            'Ŀ': 'L',
            'Ɫ': 'L',
            'ǈ': 'L',
            'Ł': 'L',
            'Ǉ': 'LJ',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṅ': 'N',
            'Ṇ': 'N',
            'Ǹ': 'N',
            'Ɲ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'ǋ': 'N',
            'Ñ': 'N',
            'Ǌ': 'NJ',
            'Ó': 'O',
            'Ŏ': 'O',
            'Ǒ': 'O',
            'Ô': 'O',
            'Ố': 'O',
            'Ộ': 'O',
            'Ồ': 'O',
            'Ổ': 'O',
            'Ỗ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ọ': 'O',
            'Ő': 'O',
            'Ȍ': 'O',
            'Ò': 'O',
            'Ỏ': 'O',
            'Ơ': 'O',
            'Ớ': 'O',
            'Ợ': 'O',
            'Ờ': 'O',
            'Ở': 'O',
            'Ỡ': 'O',
            'Ȏ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Ō': 'O',
            'Ṓ': 'O',
            'Ṑ': 'O',
            'Ɵ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ṏ': 'O',
            'Ȭ': 'O',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ɛ': 'E',
            'Ɔ': 'O',
            'Ȣ': 'OU',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ꝓ': 'P',
            'Ƥ': 'P',
            'Ꝕ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝙ': 'Q',
            'Ꝗ': 'Q',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ṙ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꜿ': 'C',
            'Ǝ': 'E',
            'Ś': 'S',
            'Ṥ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ṡ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'ẞ': 'SS',
            'Ť': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ț': 'T',
            'Ⱦ': 'T',
            'Ṫ': 'T',
            'Ṭ': 'T',
            'Ƭ': 'T',
            'Ṯ': 'T',
            'Ʈ': 'T',
            'Ŧ': 'T',
            'Ɐ': 'A',
            'Ꞁ': 'L',
            'Ɯ': 'M',
            'Ʌ': 'V',
            'Ꜩ': 'TZ',
            'Ú': 'U',
            'Ŭ': 'U',
            'Ǔ': 'U',
            'Û': 'U',
            'Ṷ': 'U',
            'Ü': 'U',
            'Ǘ': 'U',
            'Ǚ': 'U',
            'Ǜ': 'U',
            'Ǖ': 'U',
            'Ṳ': 'U',
            'Ụ': 'U',
            'Ű': 'U',
            'Ȕ': 'U',
            'Ù': 'U',
            'Ủ': 'U',
            'Ư': 'U',
            'Ứ': 'U',
            'Ự': 'U',
            'Ừ': 'U',
            'Ử': 'U',
            'Ữ': 'U',
            'Ȗ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ų': 'U',
            'Ů': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ṵ': 'U',
            'Ꝟ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ṽ': 'V',
            'Ꝡ': 'VY',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẅ': 'W',
            'Ẇ': 'W',
            'Ẉ': 'W',
            'Ẁ': 'W',
            'Ⱳ': 'W',
            'Ẍ': 'X',
            'Ẋ': 'X',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ẏ': 'Y',
            'Ỵ': 'Y',
            'Ỳ': 'Y',
            'Ƴ': 'Y',
            'Ỷ': 'Y',
            'Ỿ': 'Y',
            'Ȳ': 'Y',
            'Ɏ': 'Y',
            'Ỹ': 'Y',
            'Ź': 'Z',
            'Ž': 'Z',
            'Ẑ': 'Z',
            'Ⱬ': 'Z',
            'Ż': 'Z',
            'Ẓ': 'Z',
            'Ȥ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ĳ': 'IJ',
            'Œ': 'OE',
            'ᴀ': 'A',
            'ᴁ': 'AE',
            'ʙ': 'B',
            'ᴃ': 'B',
            'ᴄ': 'C',
            'ᴅ': 'D',
            'ᴇ': 'E',
            'ꜰ': 'F',
            'ɢ': 'G',
            'ʛ': 'G',
            'ʜ': 'H',
            'ɪ': 'I',
            'ʁ': 'R',
            'ᴊ': 'J',
            'ᴋ': 'K',
            'ʟ': 'L',
            'ᴌ': 'L',
            'ᴍ': 'M',
            'ɴ': 'N',
            'ᴏ': 'O',
            'ɶ': 'OE',
            'ᴐ': 'O',
            'ᴕ': 'OU',
            'ᴘ': 'P',
            'ʀ': 'R',
            'ᴎ': 'N',
            'ᴙ': 'R',
            'ꜱ': 'S',
            'ᴛ': 'T',
            'ⱻ': 'E',
            'ᴚ': 'R',
            'ᴜ': 'U',
            'ᴠ': 'V',
            'ᴡ': 'W',
            'ʏ': 'Y',
            'ᴢ': 'Z',
            'á': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ặ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ǎ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ậ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ạ': 'a',
            'ȁ': 'a',
            'à': 'a',
            'ả': 'a',
            'ȃ': 'a',
            'ā': 'a',
            'ą': 'a',
            'ᶏ': 'a',
            'ẚ': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ḁ': 'a',
            'ⱥ': 'a',
            'ã': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ḃ': 'b',
            'ḅ': 'b',
            'ɓ': 'b',
            'ḇ': 'b',
            'ᵬ': 'b',
            'ᶀ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɵ': 'o',
            'ć': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ĉ': 'c',
            'ɕ': 'c',
            'ċ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ď': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ȡ': 'd',
            'ḋ': 'd',
            'ḍ': 'd',
            'ɗ': 'd',
            'ᶑ': 'd',
            'ḏ': 'd',
            'ᵭ': 'd',
            'ᶁ': 'd',
            'đ': 'd',
            'ɖ': 'd',
            'ƌ': 'd',
            'ı': 'i',
            'ȷ': 'j',
            'ɟ': 'j',
            'ʄ': 'j',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'é': 'e',
            'ĕ': 'e',
            'ě': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ệ': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ḙ': 'e',
            'ë': 'e',
            'ė': 'e',
            'ẹ': 'e',
            'ȅ': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ȇ': 'e',
            'ē': 'e',
            'ḗ': 'e',
            'ḕ': 'e',
            'ⱸ': 'e',
            'ę': 'e',
            'ᶒ': 'e',
            'ɇ': 'e',
            'ẽ': 'e',
            'ḛ': 'e',
            'ꝫ': 'et',
            'ḟ': 'f',
            'ƒ': 'f',
            'ᵮ': 'f',
            'ᶂ': 'f',
            'ǵ': 'g',
            'ğ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ĝ': 'g',
            'ġ': 'g',
            'ɠ': 'g',
            'ḡ': 'g',
            'ᶃ': 'g',
            'ǥ': 'g',
            'ḫ': 'h',
            'ȟ': 'h',
            'ḩ': 'h',
            'ĥ': 'h',
            'ⱨ': 'h',
            'ḧ': 'h',
            'ḣ': 'h',
            'ḥ': 'h',
            'ɦ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ƕ': 'hv',
            'í': 'i',
            'ĭ': 'i',
            'ǐ': 'i',
            'î': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ị': 'i',
            'ȉ': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ȋ': 'i',
            'ī': 'i',
            'į': 'i',
            'ᶖ': 'i',
            'ɨ': 'i',
            'ĩ': 'i',
            'ḭ': 'i',
            'ꝺ': 'd',
            'ꝼ': 'f',
            'ᵹ': 'g',
            'ꞃ': 'r',
            'ꞅ': 's',
            'ꞇ': 't',
            'ꝭ': 'is',
            'ǰ': 'j',
            'ĵ': 'j',
            'ʝ': 'j',
            'ɉ': 'j',
            'ḱ': 'k',
            'ǩ': 'k',
            'ķ': 'k',
            'ⱪ': 'k',
            'ꝃ': 'k',
            'ḳ': 'k',
            'ƙ': 'k',
            'ḵ': 'k',
            'ᶄ': 'k',
            'ꝁ': 'k',
            'ꝅ': 'k',
            'ĺ': 'l',
            'ƚ': 'l',
            'ɬ': 'l',
            'ľ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ȴ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ḻ': 'l',
            'ŀ': 'l',
            'ɫ': 'l',
            'ᶅ': 'l',
            'ɭ': 'l',
            'ł': 'l',
            'ǉ': 'lj',
            'ſ': 's',
            'ẜ': 's',
            'ẛ': 's',
            'ẝ': 's',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ᵯ': 'm',
            'ᶆ': 'm',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ȵ': 'n',
            'ṅ': 'n',
            'ṇ': 'n',
            'ǹ': 'n',
            'ɲ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ᵰ': 'n',
            'ᶇ': 'n',
            'ɳ': 'n',
            'ñ': 'n',
            'ǌ': 'nj',
            'ó': 'o',
            'ŏ': 'o',
            'ǒ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ộ': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ọ': 'o',
            'ő': 'o',
            'ȍ': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ợ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ȏ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ⱺ': 'o',
            'ō': 'o',
            'ṓ': 'o',
            'ṑ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ṏ': 'o',
            'ȭ': 'o',
            'ƣ': 'oi',
            'ꝏ': 'oo',
            'ɛ': 'e',
            'ᶓ': 'e',
            'ɔ': 'o',
            'ᶗ': 'o',
            'ȣ': 'ou',
            'ṕ': 'p',
            'ṗ': 'p',
            'ꝓ': 'p',
            'ƥ': 'p',
            'ᵱ': 'p',
            'ᶈ': 'p',
            'ꝕ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝙ': 'q',
            'ʠ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ṙ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ȑ': 'r',
            'ɾ': 'r',
            'ᵳ': 'r',
            'ȓ': 'r',
            'ṟ': 'r',
            'ɼ': 'r',
            'ᵲ': 'r',
            'ᶉ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ↄ': 'c',
            'ꜿ': 'c',
            'ɘ': 'e',
            'ɿ': 'r',
            'ś': 's',
            'ṥ': 's',
            'š': 's',
            'ṧ': 's',
            'ş': 's',
            'ŝ': 's',
            'ș': 's',
            'ṡ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ʂ': 's',
            'ᵴ': 's',
            'ᶊ': 's',
            'ȿ': 's',
            'ɡ': 'g',
            'ß': 'ss',
            'ᴑ': 'o',
            'ᴓ': 'o',
            'ᴝ': 'u',
            'ť': 't',
            'ţ': 't',
            'ṱ': 't',
            'ț': 't',
            'ȶ': 't',
            'ẗ': 't',
            'ⱦ': 't',
            'ṫ': 't',
            'ṭ': 't',
            'ƭ': 't',
            'ṯ': 't',
            'ᵵ': 't',
            'ƫ': 't',
            'ʈ': 't',
            'ŧ': 't',
            'ᵺ': 'th',
            'ɐ': 'a',
            'ᴂ': 'ae',
            'ǝ': 'e',
            'ᵷ': 'g',
            'ɥ': 'h',
            'ʮ': 'h',
            'ʯ': 'h',
            'ᴉ': 'i',
            'ʞ': 'k',
            'ꞁ': 'l',
            'ɯ': 'm',
            'ɰ': 'm',
            'ᴔ': 'oe',
            'ɹ': 'r',
            'ɻ': 'r',
            'ɺ': 'r',
            'ⱹ': 'r',
            'ʇ': 't',
            'ʌ': 'v',
            'ʍ': 'w',
            'ʎ': 'y',
            'ꜩ': 'tz',
            'ú': 'u',
            'ŭ': 'u',
            'ǔ': 'u',
            'û': 'u',
            'ṷ': 'u',
            'ü': 'u',
            'ǘ': 'u',
            'ǚ': 'u',
            'ǜ': 'u',
            'ǖ': 'u',
            'ṳ': 'u',
            'ụ': 'u',
            'ű': 'u',
            'ȕ': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ự': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ȗ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ų': 'u',
            'ᶙ': 'u',
            'ů': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ṵ': 'u',
            'ᵫ': 'ue',
            'ꝸ': 'um',
            'ⱴ': 'v',
            'ꝟ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ᶌ': 'v',
            'ⱱ': 'v',
            'ṽ': 'v',
            'ꝡ': 'vy',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẅ': 'w',
            'ẇ': 'w',
            'ẉ': 'w',
            'ẁ': 'w',
            'ⱳ': 'w',
            'ẘ': 'w',
            'ẍ': 'x',
            'ẋ': 'x',
            'ᶍ': 'x',
            'ý': 'y',
            'ŷ': 'y',
            'ÿ': 'y',
            'ẏ': 'y',
            'ỵ': 'y',
            'ỳ': 'y',
            'ƴ': 'y',
            'ỷ': 'y',
            'ỿ': 'y',
            'ȳ': 'y',
            'ẙ': 'y',
            'ɏ': 'y',
            'ỹ': 'y',
            'ź': 'z',
            'ž': 'z',
            'ẑ': 'z',
            'ʑ': 'z',
            'ⱬ': 'z',
            'ż': 'z',
            'ẓ': 'z',
            'ȥ': 'z',
            'ẕ': 'z',
            'ᵶ': 'z',
            'ᶎ': 'z',
            'ʐ': 'z',
            'ƶ': 'z',
            'ɀ': 'z',
            'ﬀ': 'ff',
            'ﬃ': 'ffi',
            'ﬄ': 'ffl',
            'ﬁ': 'fi',
            'ﬂ': 'fl',
            'ĳ': 'ij',
            'œ': 'oe',
            'ﬆ': 'st',
            'ₐ': 'a',
            'ₑ': 'e',
            'ᵢ': 'i',
            'ⱼ': 'j',
            'ₒ': 'o',
            'ᵣ': 'r',
            'ᵤ': 'u',
            'ᵥ': 'v',
            'ₓ': 'x'
          };
        }

        _createClass(LatinisePipe, [{
          key: "transform",
          value: function transform(text) {
            var _this3 = this;

            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.replace(/[^A-Za-z0-9]/g, function (key) {
              return _this3.latinMap[key] || key;
            }) : text;
          }
        }]);

        return LatinisePipe;
      }();

      LatinisePipe.ɵfac = function LatinisePipe_Factory(t) {
        return new (t || LatinisePipe)();
      };

      LatinisePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "latinise",
        type: LatinisePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatinisePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'latinise'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var LinesPipe = /*#__PURE__*/function () {
        function LinesPipe() {
          _classCallCheck(this, LinesPipe);
        }

        _createClass(LinesPipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
          }
        }]);

        return LinesPipe;
      }();

      LinesPipe.ɵfac = function LinesPipe_Factory(t) {
        return new (t || LinesPipe)();
      };

      LinesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "lines",
        type: LinesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'lines'
          }]
        }], null, null);
      })();

      var UnderscorePipe = /*#__PURE__*/function () {
        function UnderscorePipe() {
          _classCallCheck(this, UnderscorePipe);
        }

        _createClass(UnderscorePipe, [{
          key: "transform",
          value: function transform(text) {
            var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\\s';
            return isString(text) ? text.trim().replace(/\s+/g, '').replace(/[A-Z]/g, function (c, k) {
              return k ? "_".concat(c.toLowerCase()) : c.toLowerCase();
            }) : text;
          }
        }]);

        return UnderscorePipe;
      }();

      UnderscorePipe.ɵfac = function UnderscorePipe_Factory(t) {
        return new (t || UnderscorePipe)();
      };

      UnderscorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "underscore",
        type: UnderscorePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderscorePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'underscore'
          }]
        }], null, null);
      })();

      var MatchPipe = /*#__PURE__*/function () {
        function MatchPipe() {
          _classCallCheck(this, MatchPipe);
        }

        _createClass(MatchPipe, [{
          key: "transform",
          value: function transform(text, pattern, flags) {
            if (!isString(text)) {
              return text;
            }

            return text.match(new RegExp(pattern, flags));
          }
        }]);

        return MatchPipe;
      }();

      MatchPipe.ɵfac = function MatchPipe_Factory(t) {
        return new (t || MatchPipe)();
      };

      MatchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "match",
        type: MatchPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'match'
          }]
        }], null, null);
      })();

      var TestPipe = /*#__PURE__*/function () {
        function TestPipe() {
          _classCallCheck(this, TestPipe);
        }

        _createClass(TestPipe, [{
          key: "transform",
          value: function transform(text, pattern, flags) {
            if (!isString(text)) {
              return text;
            }

            return new RegExp(pattern, flags).test(text);
          }
        }]);

        return TestPipe;
      }();

      TestPipe.ɵfac = function TestPipe_Factory(t) {
        return new (t || TestPipe)();
      };

      TestPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "test",
        type: TestPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'test'
          }]
        }], null, null);
      })();

      var LeftPadPipe = /*#__PURE__*/function () {
        function LeftPadPipe() {
          _classCallCheck(this, LeftPadPipe);
        }

        _createClass(LeftPadPipe, [{
          key: "transform",
          value: function transform(str, length) {
            var padCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

            if (!isString(str) || str.length >= length) {
              return str;
            }

            while (str.length < length) {
              str = padCharacter + str;
            }

            return str;
          }
        }]);

        return LeftPadPipe;
      }();

      LeftPadPipe.ɵfac = function LeftPadPipe_Factory(t) {
        return new (t || LeftPadPipe)();
      };

      LeftPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "lpad",
        type: LeftPadPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPadPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'lpad'
          }]
        }], null, null);
      })();

      var RightPadPipe = /*#__PURE__*/function () {
        function RightPadPipe() {
          _classCallCheck(this, RightPadPipe);
        }

        _createClass(RightPadPipe, [{
          key: "transform",
          value: function transform(str) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var padCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

            if (!isString(str) || str.length >= length) {
              return str;
            }

            while (str.length < length) {
              str = str + padCharacter;
            }

            return str;
          }
        }]);

        return RightPadPipe;
      }();

      RightPadPipe.ɵfac = function RightPadPipe_Factory(t) {
        return new (t || RightPadPipe)();
      };

      RightPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "rpad",
        type: RightPadPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPadPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'rpad'
          }]
        }], null, null);
      })();
      /**
       * Takes a singular entity string and pluralizes it.
       * Uses both naive and holdout-list approaches.
       * If several words appear in the string, only the last word is pluralized -- this
       * means that if "your story" was passed in, "your stories" would be passed out.
       *
       * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
       *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
       * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
       *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
       *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
       */


      var MakePluralStringPipe = /*#__PURE__*/function () {
        function MakePluralStringPipe() {
          _classCallCheck(this, MakePluralStringPipe);

          this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            "this": 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes'
          };
        }

        _createClass(MakePluralStringPipe, [{
          key: "transform",
          value: function transform(singularEntity) {
            var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!singularEntity || singularEntity === '') {
              return '';
            }

            if (quantity === 1) {
              return singularEntity;
            } else {
              var lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];

              if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                  return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }

                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
              } else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2]) ? singularEntity + 's' : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
              } else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
              } else {
                return singularEntity + 's';
              }
            }
          }
        }]);

        return MakePluralStringPipe;
      }();

      MakePluralStringPipe.ɵfac = function MakePluralStringPipe_Factory(t) {
        return new (t || MakePluralStringPipe)();
      };

      MakePluralStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "makePluralString",
        type: MakePluralStringPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakePluralStringPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'makePluralString'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var WrapPipe = /*#__PURE__*/function () {
        function WrapPipe() {
          _classCallCheck(this, WrapPipe);
        }

        _createClass(WrapPipe, [{
          key: "transform",
          value: function transform(str) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!isString(str)) {
              return str;
            }

            return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
          }
        }]);

        return WrapPipe;
      }();

      WrapPipe.ɵfac = function WrapPipe_Factory(t) {
        return new (t || WrapPipe)();
      };

      WrapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "wrap",
        type: WrapPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'wrap'
          }]
        }], null, null);
      })();

      var STRING_PIPES = [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe];

      var NgStringPipesModule = function NgStringPipesModule() {
        _classCallCheck(this, NgStringPipesModule);
      };

      NgStringPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgStringPipesModule
      });
      NgStringPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgStringPipesModule_Factory(t) {
          return new (t || NgStringPipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgStringPipesModule, {
          declarations: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe],
          exports: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgStringPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: STRING_PIPES,
            imports: [],
            exports: STRING_PIPES
          }]
        }], null, null);
      })();

      var MaxPipe = /*#__PURE__*/function () {
        function MaxPipe() {
          _classCallCheck(this, MaxPipe);
        }

        _createClass(MaxPipe, [{
          key: "transform",
          value: function transform(arr) {
            return Array.isArray(arr) ? Math.max.apply(Math, _toConsumableArray(arr)) : arr;
          }
        }]);

        return MaxPipe;
      }();

      MaxPipe.ɵfac = function MaxPipe_Factory(t) {
        return new (t || MaxPipe)();
      };

      MaxPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "max",
        type: MaxPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'max'
          }]
        }], null, null);
      })();

      var MinPipe = /*#__PURE__*/function () {
        function MinPipe() {
          _classCallCheck(this, MinPipe);
        }

        _createClass(MinPipe, [{
          key: "transform",
          value: function transform(arr) {
            return Array.isArray(arr) ? Math.min.apply(Math, _toConsumableArray(arr)) : arr;
          }
        }]);

        return MinPipe;
      }();

      MinPipe.ɵfac = function MinPipe_Factory(t) {
        return new (t || MinPipe)();
      };

      MinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "min",
        type: MinPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'min'
          }]
        }], null, null);
      })();

      var PercentagePipe = /*#__PURE__*/function () {
        function PercentagePipe() {
          _classCallCheck(this, PercentagePipe);
        }

        _createClass(PercentagePipe, [{
          key: "transform",
          value: function transform(num) {
            var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
            var floor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (isNaN(num)) {
              return num;
            }

            var percent = num * 100 / total;
            return floor ? Math.floor(percent) : percent;
          }
        }]);

        return PercentagePipe;
      }();

      PercentagePipe.ɵfac = function PercentagePipe_Factory(t) {
        return new (t || PercentagePipe)();
      };

      PercentagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "percentage",
        type: PercentagePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentagePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'percentage'
          }]
        }], null, null);
      })();

      var SumPipe = /*#__PURE__*/function () {
        function SumPipe() {
          _classCallCheck(this, SumPipe);
        }

        _createClass(SumPipe, [{
          key: "transform",
          value: function transform(arr) {
            return Array.isArray(arr) ? arr.reduce(function (sum, curr) {
              return sum + curr;
            }, 0) : arr;
          }
        }]);

        return SumPipe;
      }();

      SumPipe.ɵfac = function SumPipe_Factory(t) {
        return new (t || SumPipe)();
      };

      SumPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "sum",
        type: SumPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SumPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'sum'
          }]
        }], null, null);
      })();

      var FloorPipe = /*#__PURE__*/function () {
        function FloorPipe() {
          _classCallCheck(this, FloorPipe);
        }

        _createClass(FloorPipe, [{
          key: "transform",
          value: function transform(num) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (precision <= 0) {
              return Math.floor(num);
            }

            var tho = Math.pow(10, precision);
            return Math.floor(num * tho) / tho;
          }
        }]);

        return FloorPipe;
      }();

      FloorPipe.ɵfac = function FloorPipe_Factory(t) {
        return new (t || FloorPipe)();
      };

      FloorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "floor",
        type: FloorPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'floor'
          }]
        }], null, null);
      })();

      var RoundPipe = /*#__PURE__*/function () {
        function RoundPipe() {
          _classCallCheck(this, RoundPipe);
        }

        _createClass(RoundPipe, [{
          key: "transform",
          value: function transform(num) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return applyPrecision(num, precision);
          }
        }]);

        return RoundPipe;
      }();

      RoundPipe.ɵfac = function RoundPipe_Factory(t) {
        return new (t || RoundPipe)();
      };

      RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "round",
        type: RoundPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'round'
          }]
        }], null, null);
      })();

      var SqrtPipe = /*#__PURE__*/function () {
        function SqrtPipe() {
          _classCallCheck(this, SqrtPipe);
        }

        _createClass(SqrtPipe, [{
          key: "transform",
          value: function transform(num) {
            return !isNaN(num) ? Math.sqrt(num) : num;
          }
        }]);

        return SqrtPipe;
      }();

      SqrtPipe.ɵfac = function SqrtPipe_Factory(t) {
        return new (t || SqrtPipe)();
      };

      SqrtPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "sqrt",
        type: SqrtPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqrtPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'sqrt'
          }]
        }], null, null);
      })();

      var PowerPipe = /*#__PURE__*/function () {
        function PowerPipe() {
          _classCallCheck(this, PowerPipe);
        }

        _createClass(PowerPipe, [{
          key: "transform",
          value: function transform(num) {
            var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            return !isNaN(num) ? Math.pow(num, power) : num;
          }
        }]);

        return PowerPipe;
      }();

      PowerPipe.ɵfac = function PowerPipe_Factory(t) {
        return new (t || PowerPipe)();
      };

      PowerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "pow",
        type: PowerPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'pow'
          }]
        }], null, null);
      })();

      var CeilPipe = /*#__PURE__*/function () {
        function CeilPipe() {
          _classCallCheck(this, CeilPipe);
        }

        _createClass(CeilPipe, [{
          key: "transform",
          value: function transform(num) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (precision <= 0) {
              return Math.ceil(num);
            }

            var tho = Math.pow(10, precision);
            return Math.ceil(num * tho) / tho;
          }
        }]);

        return CeilPipe;
      }();

      CeilPipe.ɵfac = function CeilPipe_Factory(t) {
        return new (t || CeilPipe)();
      };

      CeilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ceil",
        type: CeilPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeilPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'ceil'
          }]
        }], null, null);
      })();

      var DegreesPipe = /*#__PURE__*/function () {
        function DegreesPipe() {
          _classCallCheck(this, DegreesPipe);
        }

        _createClass(DegreesPipe, [{
          key: "transform",
          value: function transform(radians) {
            if (!isNumberFinite(radians)) {
              return NaN;
            }

            return radians * 180 / Math.PI;
          }
        }]);

        return DegreesPipe;
      }();

      DegreesPipe.ɵfac = function DegreesPipe_Factory(t) {
        return new (t || DegreesPipe)();
      };

      DegreesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "degrees",
        type: DegreesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'degrees'
          }]
        }], null, null);
      })();

      var BytesPipe = /*#__PURE__*/function () {
        function BytesPipe() {
          _classCallCheck(this, BytesPipe);

          this.dictionary = [{
            max: 1024,
            type: 'B'
          }, {
            max: 1048576,
            type: 'KB'
          }, {
            max: 1073741824,
            type: 'MB'
          }, {
            max: 1.0995116e12,
            type: 'GB'
          }];
        }

        _createClass(BytesPipe, [{
          key: "transform",
          value: function transform(value, precision) {
            if (!isNumberFinite(value)) {
              return NaN;
            }

            var format = this.dictionary.find(function (d) {
              return value < d.max;
            }) || this.dictionary[this.dictionary.length - 1];
            var calc = value / (format.max / 1024);
            var num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
            return "".concat(num, " ").concat(format.type);
          }
        }]);

        return BytesPipe;
      }();

      BytesPipe.ɵfac = function BytesPipe_Factory(t) {
        return new (t || BytesPipe)();
      };

      BytesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "bytes",
        type: BytesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'bytes'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var RadiansPipe = /*#__PURE__*/function () {
        function RadiansPipe() {
          _classCallCheck(this, RadiansPipe);
        }

        _createClass(RadiansPipe, [{
          key: "transform",
          value: function transform(degrees) {
            if (!isNumberFinite(degrees)) {
              return NaN;
            }

            return degrees * Math.PI / 180;
          }
        }]);

        return RadiansPipe;
      }();

      RadiansPipe.ɵfac = function RadiansPipe_Factory(t) {
        return new (t || RadiansPipe)();
      };

      RadiansPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "radians",
        type: RadiansPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadiansPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'radians'
          }]
        }], null, null);
      })();

      var MATH_PIPES = [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe];

      var NgMathPipesModule = function NgMathPipesModule() {
        _classCallCheck(this, NgMathPipesModule);
      };

      NgMathPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgMathPipesModule
      });
      NgMathPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgMathPipesModule_Factory(t) {
          return new (t || NgMathPipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgMathPipesModule, {
          declarations: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe],
          exports: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMathPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: MATH_PIPES,
            imports: [],
            exports: MATH_PIPES
          }]
        }], null, null);
      })();

      var IsDefinedPipe = /*#__PURE__*/function () {
        function IsDefinedPipe() {
          _classCallCheck(this, IsDefinedPipe);
        }

        _createClass(IsDefinedPipe, [{
          key: "transform",
          value: function transform(input) {
            return !isUndefined(input);
          }
        }]);

        return IsDefinedPipe;
      }();

      IsDefinedPipe.ɵfac = function IsDefinedPipe_Factory(t) {
        return new (t || IsDefinedPipe)();
      };

      IsDefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isDefined",
        type: IsDefinedPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsDefinedPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isDefined'
          }]
        }], null, null);
      })();

      var IsNullPipe = /*#__PURE__*/function () {
        function IsNullPipe() {
          _classCallCheck(this, IsNullPipe);
        }

        _createClass(IsNullPipe, [{
          key: "transform",
          value: function transform(input) {
            return input === null;
          }
        }]);

        return IsNullPipe;
      }();

      IsNullPipe.ɵfac = function IsNullPipe_Factory(t) {
        return new (t || IsNullPipe)();
      };

      IsNullPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isNull",
        type: IsNullPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNullPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isNull'
          }]
        }], null, null);
      })();

      var IsUndefinedPipe = /*#__PURE__*/function () {
        function IsUndefinedPipe() {
          _classCallCheck(this, IsUndefinedPipe);
        }

        _createClass(IsUndefinedPipe, [{
          key: "transform",
          value: function transform(input) {
            return isUndefined(input);
          }
        }]);

        return IsUndefinedPipe;
      }();

      IsUndefinedPipe.ɵfac = function IsUndefinedPipe_Factory(t) {
        return new (t || IsUndefinedPipe)();
      };

      IsUndefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isUndefined",
        type: IsUndefinedPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsUndefinedPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isUndefined'
          }]
        }], null, null);
      })();

      var IsStringPipe = /*#__PURE__*/function () {
        function IsStringPipe() {
          _classCallCheck(this, IsStringPipe);
        }

        _createClass(IsStringPipe, [{
          key: "transform",
          value: function transform(input) {
            return isString(input);
          }
        }]);

        return IsStringPipe;
      }();

      IsStringPipe.ɵfac = function IsStringPipe_Factory(t) {
        return new (t || IsStringPipe)();
      };

      IsStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isString",
        type: IsStringPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsStringPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isString'
          }]
        }], null, null);
      })();

      var IsFunctionPipe = /*#__PURE__*/function () {
        function IsFunctionPipe() {
          _classCallCheck(this, IsFunctionPipe);
        }

        _createClass(IsFunctionPipe, [{
          key: "transform",
          value: function transform(input) {
            return isFunction(input);
          }
        }]);

        return IsFunctionPipe;
      }();

      IsFunctionPipe.ɵfac = function IsFunctionPipe_Factory(t) {
        return new (t || IsFunctionPipe)();
      };

      IsFunctionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isFunction",
        type: IsFunctionPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsFunctionPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isFunction'
          }]
        }], null, null);
      })();

      var IsNumberPipe = /*#__PURE__*/function () {
        function IsNumberPipe() {
          _classCallCheck(this, IsNumberPipe);
        }

        _createClass(IsNumberPipe, [{
          key: "transform",
          value: function transform(input) {
            return isNumber(input);
          }
        }]);

        return IsNumberPipe;
      }();

      IsNumberPipe.ɵfac = function IsNumberPipe_Factory(t) {
        return new (t || IsNumberPipe)();
      };

      IsNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isNumber",
        type: IsNumberPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNumberPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isNumber'
          }]
        }], null, null);
      })();

      var IsArrayPipe = /*#__PURE__*/function () {
        function IsArrayPipe() {
          _classCallCheck(this, IsArrayPipe);
        }

        _createClass(IsArrayPipe, [{
          key: "transform",
          value: function transform(input) {
            return Array.isArray(input);
          }
        }]);

        return IsArrayPipe;
      }();

      IsArrayPipe.ɵfac = function IsArrayPipe_Factory(t) {
        return new (t || IsArrayPipe)();
      };

      IsArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isArray",
        type: IsArrayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsArrayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isArray'
          }]
        }], null, null);
      })();

      var IsObjectPipe = /*#__PURE__*/function () {
        function IsObjectPipe() {
          _classCallCheck(this, IsObjectPipe);
        }

        _createClass(IsObjectPipe, [{
          key: "transform",
          value: function transform(input) {
            return isObject(input);
          }
        }]);

        return IsObjectPipe;
      }();

      IsObjectPipe.ɵfac = function IsObjectPipe_Factory(t) {
        return new (t || IsObjectPipe)();
      };

      IsObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isObject",
        type: IsObjectPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsObjectPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isObject'
          }]
        }], null, null);
      })();

      var IsGreaterEqualThanPipe = /*#__PURE__*/function () {
        function IsGreaterEqualThanPipe() {
          _classCallCheck(this, IsGreaterEqualThanPipe);
        }

        _createClass(IsGreaterEqualThanPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input >= other;
          }
        }]);

        return IsGreaterEqualThanPipe;
      }();

      IsGreaterEqualThanPipe.ɵfac = function IsGreaterEqualThanPipe_Factory(t) {
        return new (t || IsGreaterEqualThanPipe)();
      };

      IsGreaterEqualThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isGreaterEqualThan",
        type: IsGreaterEqualThanPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterEqualThanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isGreaterEqualThan'
          }]
        }], null, null);
      })();

      var IsGreaterThanPipe = /*#__PURE__*/function () {
        function IsGreaterThanPipe() {
          _classCallCheck(this, IsGreaterThanPipe);
        }

        _createClass(IsGreaterThanPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input > other;
          }
        }]);

        return IsGreaterThanPipe;
      }();

      IsGreaterThanPipe.ɵfac = function IsGreaterThanPipe_Factory(t) {
        return new (t || IsGreaterThanPipe)();
      };

      IsGreaterThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isGreaterThan",
        type: IsGreaterThanPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterThanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isGreaterThan'
          }]
        }], null, null);
      })();

      var IsLessEqualThanPipe = /*#__PURE__*/function () {
        function IsLessEqualThanPipe() {
          _classCallCheck(this, IsLessEqualThanPipe);
        }

        _createClass(IsLessEqualThanPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input <= other;
          }
        }]);

        return IsLessEqualThanPipe;
      }();

      IsLessEqualThanPipe.ɵfac = function IsLessEqualThanPipe_Factory(t) {
        return new (t || IsLessEqualThanPipe)();
      };

      IsLessEqualThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isLessEqualThan",
        type: IsLessEqualThanPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessEqualThanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isLessEqualThan'
          }]
        }], null, null);
      })();

      var IsEqualToPipe = /*#__PURE__*/function () {
        function IsEqualToPipe() {
          _classCallCheck(this, IsEqualToPipe);
        }

        _createClass(IsEqualToPipe, [{
          key: "transform",
          value: function transform(input, other) {
            // tslint:disable-next-line:triple-equals
            return input == other;
          }
        }]);

        return IsEqualToPipe;
      }();

      IsEqualToPipe.ɵfac = function IsEqualToPipe_Factory(t) {
        return new (t || IsEqualToPipe)();
      };

      IsEqualToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isEqualTo",
        type: IsEqualToPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsEqualToPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isEqualTo'
          }]
        }], null, null);
      })();

      var IsNotEqualToPipe = /*#__PURE__*/function () {
        function IsNotEqualToPipe() {
          _classCallCheck(this, IsNotEqualToPipe);
        }

        _createClass(IsNotEqualToPipe, [{
          key: "transform",
          value: function transform(input, other) {
            // tslint:disable-next-line:triple-equals
            return input != other;
          }
        }]);

        return IsNotEqualToPipe;
      }();

      IsNotEqualToPipe.ɵfac = function IsNotEqualToPipe_Factory(t) {
        return new (t || IsNotEqualToPipe)();
      };

      IsNotEqualToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isNotEqualTo",
        type: IsNotEqualToPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotEqualToPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isNotEqualTo'
          }]
        }], null, null);
      })();

      var IsIdenticalToPipe = /*#__PURE__*/function () {
        function IsIdenticalToPipe() {
          _classCallCheck(this, IsIdenticalToPipe);
        }

        _createClass(IsIdenticalToPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input === other;
          }
        }]);

        return IsIdenticalToPipe;
      }();

      IsIdenticalToPipe.ɵfac = function IsIdenticalToPipe_Factory(t) {
        return new (t || IsIdenticalToPipe)();
      };

      IsIdenticalToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isIdenticalTo",
        type: IsIdenticalToPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsIdenticalToPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isIdenticalTo'
          }]
        }], null, null);
      })();

      var IsNotIdenticalToPipe = /*#__PURE__*/function () {
        function IsNotIdenticalToPipe() {
          _classCallCheck(this, IsNotIdenticalToPipe);
        }

        _createClass(IsNotIdenticalToPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input !== other;
          }
        }]);

        return IsNotIdenticalToPipe;
      }();

      IsNotIdenticalToPipe.ɵfac = function IsNotIdenticalToPipe_Factory(t) {
        return new (t || IsNotIdenticalToPipe)();
      };

      IsNotIdenticalToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isNotIdenticalTo",
        type: IsNotIdenticalToPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotIdenticalToPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isNotIdenticalTo'
          }]
        }], null, null);
      })();

      var IsLessThanPipe = /*#__PURE__*/function () {
        function IsLessThanPipe() {
          _classCallCheck(this, IsLessThanPipe);
        }

        _createClass(IsLessThanPipe, [{
          key: "transform",
          value: function transform(input, other) {
            return input < other;
          }
        }]);

        return IsLessThanPipe;
      }();

      IsLessThanPipe.ɵfac = function IsLessThanPipe_Factory(t) {
        return new (t || IsLessThanPipe)();
      };

      IsLessThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isLessThan",
        type: IsLessThanPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessThanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isLessThan'
          }]
        }], null, null);
      })();

      var BOOLEAN_PIPES = [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe];

      var NgBooleanPipesModule = function NgBooleanPipesModule() {
        _classCallCheck(this, NgBooleanPipesModule);
      };

      NgBooleanPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgBooleanPipesModule
      });
      NgBooleanPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgBooleanPipesModule_Factory(t) {
          return new (t || NgBooleanPipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgBooleanPipesModule, {
          declarations: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe],
          exports: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgBooleanPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: BOOLEAN_PIPES,
            imports: [],
            exports: BOOLEAN_PIPES
          }]
        }], null, null);
      })();

      var TimeAgoPipe = /*#__PURE__*/function () {
        function TimeAgoPipe() {
          _classCallCheck(this, TimeAgoPipe);
        }

        _createClass(TimeAgoPipe, [{
          key: "transform",

          /**
           * @param inputDate: Date | Moment - not included as TypeScript interface,
           * in order to keep `ngx-pipes` "pure" from dependencies!
           */
          value: function transform(inputDate) {
            if (!inputDate || !inputDate.getTime && !inputDate.toDate) {
              return 'Invalid date';
            }

            var past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
            var now = +new Date();

            if (past > now) {
              return 'in the future';
            }

            for (var i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
              var elm = TimeAgoPipe.MAPPER[i];
              var unit = Math.floor(ms / (div /= elm.div));

              if (unit >= 1) {
                return unit === 1 ? elm.single : "".concat(unit, " ").concat(elm.many, " ago");
              }
            }

            return 'just now';
          }
        }]);

        return TimeAgoPipe;
      }();

      TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
        return new (t || TimeAgoPipe)();
      };

      TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "timeAgo",
        type: TimeAgoPipe,
        pure: true
      });
      TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
      TimeAgoPipe.MAPPER = [{
        single: 'last year',
        many: 'years',
        div: 1
      }, {
        single: 'last month',
        many: 'months',
        div: 12
      }, {
        single: 'last week',
        many: 'weeks',
        div: 4
      }, {
        single: 'yesterday',
        many: 'days',
        div: 7
      }, {
        single: 'an hour ago',
        many: 'hours',
        div: 24
      }, {
        single: 'just now',
        many: 'minutes',
        div: 60
      }];
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'timeAgo'
          }]
        }], null, null);
      })();

      var DATE_PIPES = [TimeAgoPipe];

      var NgDatePipesModule = function NgDatePipesModule() {
        _classCallCheck(this, NgDatePipesModule);
      };

      NgDatePipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgDatePipesModule
      });
      NgDatePipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgDatePipesModule_Factory(t) {
          return new (t || NgDatePipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgDatePipesModule, {
          declarations: [TimeAgoPipe],
          exports: [TimeAgoPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDatePipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: DATE_PIPES,
            imports: [],
            exports: DATE_PIPES
          }]
        }], null, null);
      })();

      var NgPipesModule = function NgPipesModule() {
        _classCallCheck(this, NgPipesModule);
      };

      NgPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgPipesModule
      });
      NgPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgPipesModule_Factory(t) {
          return new (t || NgPipesModule)();
        },
        imports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgPipesModule, {
          exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-pipes.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forum/forum.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/forum/forum.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeForumForumPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-content class=\"ion-padding\">\r\n  <h1>\r\n    <strong>\r\n      Olá  {{nomeUsuario}}\r\n    </strong>\r\n  </h1>\r\n\r\n\r\n  <form *ngIf = \"usuarioLogado != null\" [formGroup] = \"form\">\r\n    <ion-item class = \"ion-margin-top ion-align-items-center\">\r\n      <ion-icon name=\"chatbox-outline\" slot=\"start\"></ion-icon>\r\n      <ion-textarea placeholder=\"Compartilhe sua história!\" formControlName=\"conteudo\"></ion-textarea>\r\n      <ion-button (click) = \"postar()\" block><ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n    </ion-item>\r\n  </form>\r\n\r\n\r\n  <ion-row class=\"ion-align-items-center  ion-margin--top\">\r\n\r\n    <ion-col size=\"auto\">\r\n      <h2><strong>Últimos posts</strong> </h2>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-text-right\">\r\n      <ion-text color=\"medium\">\r\n        Mais\r\n      </ion-text>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-card *ngFor = \"let post of posts$ | async\" class = \"ion-margin-bottom\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <img src=\"{{post.proprietario_imagem}}\" alt=\"foto do usuario maria\">\r\n          </ion-avatar>\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-card-title> {{post.proprietario}}</ion-card-title>\r\n            <ion-card-subtitle> {{post.proprietario_profissao}} </ion-card-subtitle>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-badge> Novo! </ion-badge>\r\n      <!--<ion-badge class=\"ion-margin-start\">Likes 95</ion-badge>-->\r\n\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      {{post.conteudo}}\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n  <ion-row class=\"ion-align-items-center  ion-margin--top\">\r\n\r\n    <ion-col size=\"auto\">\r\n      <h2><strong>Notícias</strong> </h2>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-text-right\">\r\n      <ion-text color=\"medium\">\r\n        Mais\r\n      </ion-text>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-card class = \"ion-margin-bottom\">\r\n    <img class = \"imagem-card\" src=\"https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\" alt=\"\"> \r\n    \r\n    <ion-card-subtitle class =\"ion-padding\"> Segundo Dados da OMS o Brasil é o segundo País mais Ansioso sendo 9.3% da População.</ion-card-subtitle>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card class = \"ion-margin-bottom\">\r\n    <img class = \"imagem-card\" src=\"https://images.pexels.com/photos/2475878/pexels-photo-2475878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\" alt=\"\"> \r\n    \r\n    <ion-card-subtitle class = \"ion-padding\"> Exercicios são recomendados tanto para ter uma boa Saúde quanto para tratamento para Ansiedade, então comece o quanto antes e seja saúdavel.</ion-card-subtitle>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/forum/forum-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/home/forum/forum-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: ForumPageRoutingModule */

    /***/
    function srcAppHomeForumForumRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumPageRoutingModule", function () {
        return ForumPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _forum_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forum.page */
      "./src/app/home/forum/forum.page.ts");

      var routes = [{
        path: '',
        component: _forum_page__WEBPACK_IMPORTED_MODULE_3__["ForumPage"]
      }];

      var ForumPageRoutingModule = function ForumPageRoutingModule() {
        _classCallCheck(this, ForumPageRoutingModule);
      };

      ForumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForumPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/forum/forum.module.ts":
    /*!********************************************!*\
      !*** ./src/app/home/forum/forum.module.ts ***!
      \********************************************/

    /*! exports provided: ForumPageModule */

    /***/
    function srcAppHomeForumForumModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumPageModule", function () {
        return ForumPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _forum_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forum-routing.module */
      "./src/app/home/forum/forum-routing.module.ts");
      /* harmony import */


      var _forum_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forum.page */
      "./src/app/home/forum/forum.page.ts");
      /* harmony import */


      var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-pipes */
      "./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js");

      var ForumPageModule = function ForumPageModule() {
        _classCallCheck(this, ForumPageModule);
      };

      ForumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forum_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForumPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"]],
        declarations: [_forum_page__WEBPACK_IMPORTED_MODULE_6__["ForumPage"]]
      })], ForumPageModule);
      /***/
    },

    /***/
    "./src/app/home/forum/forum.page.scss":
    /*!********************************************!*\
      !*** ./src/app/home/forum/forum.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeForumForumPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imagem-card {\n  width: 100%;\n  height: 13em;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3J1bS9mb3J1bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9ydW0vZm9ydW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbS1jYXJke1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxM2VtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/forum/forum.page.ts":
    /*!******************************************!*\
      !*** ./src/app/home/forum/forum.page.ts ***!
      \******************************************/

    /*! exports provided: ForumPage */

    /***/
    function srcAppHomeForumForumPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumPage", function () {
        return ForumPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/post.service */
      "./src/app/services/post.service.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");

      var ForumPage = /*#__PURE__*/function () {
        function ForumPage(userService, firestore, postService, fb, auth) {
          _classCallCheck(this, ForumPage);

          this.userService = userService;
          this.firestore = firestore;
          this.postService = postService;
          this.fb = fb;
          this.auth = auth;
          this.ref = this.firestore.collection('posts', function (ref) {
            return ref.orderBy("dataPostagem", "desc").limit(10);
          });
          this.posts$ = this.ref.valueChanges();
          this.usuarios$ = this.userService.list();
        }

        _createClass(ForumPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.usuarios$.subscribe(function (val) {
              return val.map(function (user) {
                if (user.email == _this4.auth.currentUserName) {
                  _this4.usuarioLogado = user;
                  _this4.nomeUsuario = _this4.usuarioLogado.nome;
                  _this4.profissaoUsuario = _this4.usuarioLogado.profissao;
                  _this4.imagemUsuario = _this4.usuarioLogado.foto;

                  _this4.configForm();
                }
              });
            });
          }
        }, {
          key: "configForm",
          value: function configForm() {
            this.form = this.fb.group({
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              proprietario: this.nomeUsuario,
              proprietario_profissao: this.profissaoUsuario,
              proprietario_imagem: this.imagemUsuario,
              dataPostagem: new Date(),
              conteudo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
          }
        }, {
          key: "postar",
          value: function postar() {
            this.postService.createOrUpdate(this.form.value);
            this.form.reset();
          }
        }]);

        return ForumPage;
      }();

      ForumPage.ctorParameters = function () {
        return [{
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      ForumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forum',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forum.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forum/forum.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forum.page.scss */
        "./src/app/home/forum/forum.page.scss"))["default"]]
      })], ForumPage);
      /***/
    },

    /***/
    "./src/app/models/post.ts":
    /*!********************************!*\
      !*** ./src/app/models/post.ts ***!
      \********************************/

    /*! exports provided: Post */

    /***/
    function srcAppModelsPostTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Post", function () {
        return Post;
      });
      /* harmony import */


      var _core_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/model */
      "./src/app/core/model.ts");

      var Post = /*#__PURE__*/function (_core_model__WEBPACK_) {
        _inherits(Post, _core_model__WEBPACK_);

        var _super4 = _createSuper(Post);

        function Post() {
          _classCallCheck(this, Post);

          return _super4.apply(this, arguments);
        }

        return Post;
      }(_core_model__WEBPACK_IMPORTED_MODULE_0__["Model"]);
      /***/

    },

    /***/
    "./src/app/services/post.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/post.service.ts ***!
      \******************************************/

    /*! exports provided: PostService */

    /***/
    function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostService", function () {
        return PostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _core_iservicefirebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/iservicefirebase.service */
      "./src/app/core/iservicefirebase.service.ts");
      /* harmony import */


      var _models_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/post */
      "./src/app/models/post.ts");

      var PostService = /*#__PURE__*/function (_core_iservicefirebas) {
        _inherits(PostService, _core_iservicefirebas);

        var _super5 = _createSuper(PostService);

        function PostService(firestore) {
          _classCallCheck(this, PostService);

          return _super5.call(this, _models_post__WEBPACK_IMPORTED_MODULE_4__["Post"], firestore, 'posts');
        }

        return PostService;
      }(_core_iservicefirebase_service__WEBPACK_IMPORTED_MODULE_3__["ServiceFirebase"]);

      PostService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forum-forum-module-es5.js.map