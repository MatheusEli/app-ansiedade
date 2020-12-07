(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cadastro-cadastro-module~forum-forum-module~perfil-perfil-module"], {
    /***/
    "./node_modules/class-transformer/ClassTransformer.js":
    /*!************************************************************!*\
      !*** ./node_modules/class-transformer/ClassTransformer.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerClassTransformerJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ClassTransformer = void 0;

      var TransformOperationExecutor_1 = __webpack_require__(
      /*! ./TransformOperationExecutor */
      "./node_modules/class-transformer/TransformOperationExecutor.js");

      var enums_1 = __webpack_require__(
      /*! ./enums */
      "./node_modules/class-transformer/enums/index.js");

      var ClassTransformer = /*#__PURE__*/function () {
        function ClassTransformer() {
          _classCallCheck(this, ClassTransformer);
        }

        _createClass(ClassTransformer, [{
          key: "classToPlain",
          value: function classToPlain(object, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, options || {});
            return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
          }
        }, {
          key: "classToPlainFromExist",
          value: function classToPlainFromExist(object, plainObject, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, options || {});
            return executor.transform(plainObject, object, undefined, undefined, undefined, undefined);
          }
        }, {
          key: "plainToClass",
          value: function plainToClass(cls, plain, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, options || {});
            return executor.transform(undefined, plain, cls, undefined, undefined, undefined);
          }
        }, {
          key: "plainToClassFromExist",
          value: function plainToClassFromExist(clsObject, plain, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, options || {});
            return executor.transform(clsObject, plain, undefined, undefined, undefined, undefined);
          }
        }, {
          key: "classToClass",
          value: function classToClass(object, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, options || {});
            return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
          }
        }, {
          key: "classToClassFromExist",
          value: function classToClassFromExist(object, fromObject, options) {
            var executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, options || {});
            return executor.transform(fromObject, object, undefined, undefined, undefined, undefined);
          }
        }, {
          key: "serialize",
          value: function serialize(object, options) {
            return JSON.stringify(this.classToPlain(object, options));
          }
          /**
           * Deserializes given JSON string to a object of the given class.
           */

        }, {
          key: "deserialize",
          value: function deserialize(cls, json, options) {
            var jsonObject = JSON.parse(json);
            return this.plainToClass(cls, jsonObject, options);
          }
          /**
           * Deserializes given JSON string to an array of objects of the given class.
           */

        }, {
          key: "deserializeArray",
          value: function deserializeArray(cls, json, options) {
            var jsonObject = JSON.parse(json);
            return this.plainToClass(cls, jsonObject, options);
          }
        }]);

        return ClassTransformer;
      }();

      exports.ClassTransformer = ClassTransformer; //# sourceMappingURL=ClassTransformer.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/TransformOperationExecutor.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/class-transformer/TransformOperationExecutor.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerTransformOperationExecutorJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransformOperationExecutor = exports.testForBuffer = void 0;

      var storage_1 = __webpack_require__(
      /*! ./storage */
      "./node_modules/class-transformer/storage.js");

      var enums_1 = __webpack_require__(
      /*! ./enums */
      "./node_modules/class-transformer/enums/index.js");

      function testForBuffer() {
        try {
          Buffer.isBuffer({
            /* empty object */
          });
          return true;
        } catch (_a) {
          return false;
        }
      }

      exports.testForBuffer = testForBuffer;

      function instantiateArrayType(arrayType) {
        var array = new arrayType();

        if (!(array instanceof Set) && !('push' in array)) {
          return [];
        }

        return array;
      }

      var TransformOperationExecutor = /*#__PURE__*/function () {
        // -------------------------------------------------------------------------
        // Constructor
        // -------------------------------------------------------------------------
        function TransformOperationExecutor(transformationType, options) {
          _classCallCheck(this, TransformOperationExecutor);

          this.transformationType = transformationType;
          this.options = options; // -------------------------------------------------------------------------
          // Private Properties
          // -------------------------------------------------------------------------

          this.recursionStack = new Set();
        } // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------


        _createClass(TransformOperationExecutor, [{
          key: "transform",
          value: function transform(source, value, targetType, arrayType, isMap) {
            var _this = this;

            var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            if (Array.isArray(value) || value instanceof Set) {
              var newValue = arrayType && this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? instantiateArrayType(arrayType) : [];
              value.forEach(function (subValue, index) {
                var subSource = source ? source[index] : undefined;

                if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
                  var realTargetType;

                  if (typeof targetType !== 'function' && targetType && targetType.options && targetType.options.discriminator && targetType.options.discriminator.property && targetType.options.discriminator.subTypes) {
                    if (_this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                      realTargetType = targetType.options.discriminator.subTypes.find(function (subType) {
                        return subType.name === subValue[targetType.options.discriminator.property];
                      });
                      var options = {
                        newObject: newValue,
                        object: subValue,
                        property: undefined
                      };
                      var newType = targetType.typeFunction(options);
                      realTargetType === undefined ? realTargetType = newType : realTargetType = realTargetType.value;
                      if (!targetType.options.keepDiscriminatorProperty) delete subValue[targetType.options.discriminator.property];
                    }

                    if (_this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                      realTargetType = subValue.constructor;
                    }

                    if (_this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                      subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find(function (subType) {
                        return subType.value === subValue.constructor;
                      }).name;
                    }
                  } else {
                    realTargetType = targetType;
                  }

                  var _value = _this.transform(subSource, subValue, realTargetType, undefined, subValue instanceof Map, level + 1);

                  if (newValue instanceof Set) {
                    newValue.add(_value);
                  } else {
                    newValue.push(_value);
                  }
                } else if (_this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                  if (newValue instanceof Set) {
                    newValue.add(subValue);
                  } else {
                    newValue.push(subValue);
                  }
                }
              });
              return newValue;
            } else if (targetType === String && !isMap) {
              if (value === null || value === undefined) return value;
              return String(value);
            } else if (targetType === Number && !isMap) {
              if (value === null || value === undefined) return value;
              return Number(value);
            } else if (targetType === Boolean && !isMap) {
              if (value === null || value === undefined) return value;
              return Boolean(value);
            } else if ((targetType === Date || value instanceof Date) && !isMap) {
              if (value instanceof Date) {
                return new Date(value.valueOf());
              }

              if (value === null || value === undefined) return value;
              return new Date(value);
            } else if (testForBuffer() && (targetType === Buffer || value instanceof Buffer) && !isMap) {
              if (value === null || value === undefined) return value;
              return Buffer.from(value);
            } else if (typeof value === 'object' && value !== null) {
              // try to guess the type
              if (!targetType && value.constructor !== Object
              /* && TransformationType === TransformationType.CLASS_TO_PLAIN*/
              ) targetType = value.constructor;
              if (!targetType && source) targetType = source.constructor;

              if (this.options.enableCircularCheck) {
                // add transformed type to prevent circular references
                this.recursionStack.add(value);
              }

              var keys = this.getKeys(targetType, value);

              var _newValue = source ? source : {};

              if (!source && (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS)) {
                if (isMap) {
                  _newValue = new Map();
                } else if (targetType) {
                  _newValue = new targetType();
                } else {
                  _newValue = {};
                }
              } // traverse over keys


              var _iterator = _createForOfIteratorHelper(keys),
                  _step;

              try {
                var _loop = function _loop() {
                  var key = _step.value;

                  if (key === '__proto__' || key === 'constructor') {
                    return "continue";
                  }

                  var valueKey = key;
                  var newValueKey = key,
                      propertyName = key;

                  if (!_this.options.ignoreDecorators && targetType) {
                    if (_this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                      var exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);

                      if (exposeMetadata) {
                        propertyName = exposeMetadata.propertyName;
                        newValueKey = exposeMetadata.propertyName;
                      }
                    } else if (_this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN || _this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                      var _exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(targetType, key);

                      if (_exposeMetadata && _exposeMetadata.options && _exposeMetadata.options.name) {
                        newValueKey = _exposeMetadata.options.name;
                      }
                    }
                  } // get a subvalue


                  var subValue = undefined;

                  if (value instanceof Map) {
                    subValue = value.get(valueKey);
                  } else if (value[valueKey] instanceof Function) {
                    subValue = value[valueKey]();
                  } else {
                    subValue = value[valueKey];
                  } // determine a type


                  var type = undefined,
                      isSubValueMap = subValue instanceof Map;

                  if (targetType && isMap) {
                    type = targetType;
                  } else if (targetType) {
                    var metadata = storage_1.defaultMetadataStorage.findTypeMetadata(targetType, propertyName);

                    if (metadata) {
                      var options = {
                        newObject: _newValue,
                        object: value,
                        property: propertyName
                      };
                      var newType = metadata.typeFunction ? metadata.typeFunction(options) : metadata.reflectedType;

                      if (metadata.options && metadata.options.discriminator && metadata.options.discriminator.property && metadata.options.discriminator.subTypes) {
                        if (!(value[valueKey] instanceof Array)) {
                          if (_this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                            type = metadata.options.discriminator.subTypes.find(function (subType) {
                              if (subValue && metadata.options.discriminator.property in subValue) {
                                return subType.name === subValue[metadata.options.discriminator.property];
                              }
                            });
                            type === undefined ? type = newType : type = type.value;

                            if (!metadata.options.keepDiscriminatorProperty) {
                              if (subValue && metadata.options.discriminator.property in subValue) {
                                delete subValue[metadata.options.discriminator.property];
                              }
                            }
                          }

                          if (_this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                            type = subValue.constructor;
                          }

                          if (_this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                            subValue[metadata.options.discriminator.property] = metadata.options.discriminator.subTypes.find(function (subType) {
                              return subType.value === subValue.constructor;
                            }).name;
                          }
                        } else {
                          type = metadata;
                        }
                      } else {
                        type = newType;
                      }

                      isSubValueMap = isSubValueMap || metadata.reflectedType === Map;
                    } else if (_this.options.targetMaps) {
                      // try to find a type in target maps
                      _this.options.targetMaps.filter(function (map) {
                        return map.target === targetType && !!map.properties[propertyName];
                      }).forEach(function (map) {
                        return type = map.properties[propertyName];
                      });
                    } else if (_this.options.enableImplicitConversion && _this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                      // if we have no registererd type via the @Type() decorator then we check if we have any
                      // type declarations in reflect-metadata (type declaration is emited only if some decorator is added to the property.)
                      var reflectedType = Reflect.getMetadata('design:type', targetType.prototype, propertyName);

                      if (reflectedType) {
                        type = reflectedType;
                      }
                    }
                  } // if value is an array try to get its custom array type


                  var arrayType = Array.isArray(value[valueKey]) ? _this.getReflectedType(targetType, propertyName) : undefined; // const subValueKey = TransformationType === TransformationType.PLAIN_TO_CLASS && newKeyName ? newKeyName : key;

                  var subSource = source ? source[valueKey] : undefined; // if its deserialization then type if required
                  // if we uncomment this types like string[] will not work
                  // if (this.transformationType === TransformationType.PLAIN_TO_CLASS && !type && subValue instanceof Object && !(subValue instanceof Date))
                  //     throw new Error(`Cannot determine type for ${(targetType as any).name }.${propertyName}, did you forget to specify a @Type?`);
                  // if newValue is a source object that has method that match newKeyName then skip it

                  if (_newValue.constructor.prototype) {
                    var descriptor = Object.getOwnPropertyDescriptor(_newValue.constructor.prototype, newValueKey);
                    if ((_this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || _this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) && ( // eslint-disable-next-line @typescript-eslint/unbound-method
                    descriptor && !descriptor.set || _newValue[newValueKey] instanceof Function)) //  || TransformationType === TransformationType.CLASS_TO_CLASS
                      return "continue";
                  }

                  if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
                    var transformKey = _this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
                    var finalValue;

                    if (_this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                      // Get original value
                      finalValue = value[transformKey]; // Apply custom transformation

                      finalValue = _this.applyCustomTransformations(finalValue, targetType, transformKey, value, _this.transformationType); // If nothing change, it means no custom transformation was applied, so use the subValue.

                      finalValue = value[transformKey] === finalValue ? subValue : finalValue; // Apply the default transformation

                      finalValue = _this.transform(subSource, finalValue, type, arrayType, isSubValueMap, level + 1);
                    } else {
                      finalValue = _this.transform(subSource, subValue, type, arrayType, isSubValueMap, level + 1);
                      finalValue = _this.applyCustomTransformations(finalValue, targetType, transformKey, value, _this.transformationType);
                    }

                    if (_newValue instanceof Map) {
                      _newValue.set(newValueKey, finalValue);
                    } else {
                      _newValue[newValueKey] = finalValue;
                    }
                  } else if (_this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                    var _finalValue = subValue;
                    _finalValue = _this.applyCustomTransformations(_finalValue, targetType, key, value, _this.transformationType);

                    if (_newValue instanceof Map) {
                      _newValue.set(newValueKey, _finalValue);
                    } else {
                      _newValue[newValueKey] = _finalValue;
                    }
                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _ret = _loop();

                  if (_ret === "continue") continue;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (this.options.enableCircularCheck) {
                this.recursionStack["delete"](value);
              }

              return _newValue;
            } else {
              return value;
            }
          }
        }, {
          key: "applyCustomTransformations",
          value: function applyCustomTransformations(value, target, key, obj, transformationType) {
            var _this2 = this;

            var metadatas = storage_1.defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType); // apply versioning options

            if (this.options.version !== undefined) {
              metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options) return true;
                return _this2.checkVersion(metadata.options.since, metadata.options.until);
              });
            } // apply grouping options


            if (this.options.groups && this.options.groups.length) {
              metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options) return true;
                return _this2.checkGroups(metadata.options.groups);
              });
            } else {
              metadatas = metadatas.filter(function (metadata) {
                return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
              });
            }

            metadatas.forEach(function (metadata) {
              value = metadata.transformFn(value, obj, transformationType);
            });
            return value;
          } // preventing circular references

        }, {
          key: "isCircular",
          value: function isCircular(object) {
            return this.recursionStack.has(object);
          }
        }, {
          key: "getReflectedType",
          value: function getReflectedType(target, propertyName) {
            if (!target) return undefined;
            var meta = storage_1.defaultMetadataStorage.findTypeMetadata(target, propertyName);
            return meta ? meta.reflectedType : undefined;
          }
        }, {
          key: "getKeys",
          value: function getKeys(target, object) {
            var _this3 = this;

            // determine exclusion strategy
            var strategy = storage_1.defaultMetadataStorage.getStrategy(target);
            if (strategy === 'none') strategy = this.options.strategy || 'exposeAll'; // exposeAll is default strategy
            // get all keys that need to expose

            var keys = [];

            if (strategy === 'exposeAll') {
              if (object instanceof Map) {
                keys = Array.from(object.keys());
              } else {
                keys = Object.keys(object);
              }
            }

            if (!this.options.ignoreDecorators && target) {
              // add all exposed to list of keys
              var exposedProperties = storage_1.defaultMetadataStorage.getExposedProperties(target, this.transformationType);

              if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                exposedProperties = exposedProperties.map(function (key) {
                  var exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);

                  if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                    return exposeMetadata.options.name;
                  }

                  return key;
                });
              }

              if (this.options.excludeExtraneousValues) {
                keys = exposedProperties;
              } else {
                keys = keys.concat(exposedProperties);
              } // exclude excluded properties


              var excludedProperties = storage_1.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);

              if (excludedProperties.length > 0) {
                keys = keys.filter(function (key) {
                  return !excludedProperties.includes(key);
                });
              } // apply versioning options


              if (this.options.version !== undefined) {
                keys = keys.filter(function (key) {
                  var exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                  if (!exposeMetadata || !exposeMetadata.options) return true;
                  return _this3.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
                });
              } // apply grouping options


              if (this.options.groups && this.options.groups.length) {
                keys = keys.filter(function (key) {
                  var exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                  if (!exposeMetadata || !exposeMetadata.options) return true;
                  return _this3.checkGroups(exposeMetadata.options.groups);
                });
              } else {
                keys = keys.filter(function (key) {
                  var exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                  return !exposeMetadata || !exposeMetadata.options || !exposeMetadata.options.groups || !exposeMetadata.options.groups.length;
                });
              }
            } // exclude prefixed properties


            if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
              keys = keys.filter(function (key) {
                return _this3.options.excludePrefixes.every(function (prefix) {
                  return key.substr(0, prefix.length) !== prefix;
                });
              });
            } // make sure we have unique keys


            keys = keys.filter(function (key, index, self) {
              return self.indexOf(key) === index;
            });
            return keys;
          }
        }, {
          key: "checkVersion",
          value: function checkVersion(since, until) {
            var decision = true;
            if (decision && since) decision = this.options.version >= since;
            if (decision && until) decision = this.options.version < until;
            return decision;
          }
        }, {
          key: "checkGroups",
          value: function checkGroups(groups) {
            if (!groups) return true;
            return this.options.groups.some(function (optionGroup) {
              return groups.includes(optionGroup);
            });
          }
        }]);

        return TransformOperationExecutor;
      }();

      exports.TransformOperationExecutor = TransformOperationExecutor; //# sourceMappingURL=TransformOperationExecutor.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/decorators.js":
    /*!******************************************************!*\
      !*** ./node_modules/class-transformer/decorators.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerDecoratorsJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransformPlainToClass = exports.TransformClassToClass = exports.TransformClassToPlain = exports.Exclude = exports.Expose = exports.Type = exports.Transform = void 0;

      var ClassTransformer_1 = __webpack_require__(
      /*! ./ClassTransformer */
      "./node_modules/class-transformer/ClassTransformer.js");

      var storage_1 = __webpack_require__(
      /*! ./storage */
      "./node_modules/class-transformer/storage.js");

      var TypeMetadata_1 = __webpack_require__(
      /*! ./metadata/TypeMetadata */
      "./node_modules/class-transformer/metadata/TypeMetadata.js");

      var ExposeMetadata_1 = __webpack_require__(
      /*! ./metadata/ExposeMetadata */
      "./node_modules/class-transformer/metadata/ExposeMetadata.js");

      var ExcludeMetadata_1 = __webpack_require__(
      /*! ./metadata/ExcludeMetadata */
      "./node_modules/class-transformer/metadata/ExcludeMetadata.js");

      var TransformMetadata_1 = __webpack_require__(
      /*! ./metadata/TransformMetadata */
      "./node_modules/class-transformer/metadata/TransformMetadata.js");
      /**
       * Defines a custom logic for value transformation.
       */


      function Transform(transformFn, options) {
        return function (target, key) {
          var metadata = new TransformMetadata_1.TransformMetadata(target.constructor, key, transformFn, options);
          storage_1.defaultMetadataStorage.addTransformMetadata(metadata);
        };
      }

      exports.Transform = Transform;
      /**
       * Specifies a type of the property.
       * The given TypeFunction can return a constructor. A discriminator can be given in the options.
       */

      function Type(typeFunction, options) {
        return function (target, key) {
          var type = Reflect.getMetadata('design:type', target, key);
          var metadata = new TypeMetadata_1.TypeMetadata(target.constructor, key, type, typeFunction, options);
          storage_1.defaultMetadataStorage.addTypeMetadata(metadata);
        };
      }

      exports.Type = Type;
      /**
       * Marks property as included in the process of transformation. By default it includes the property for both
       * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
       * you want to skip this property.
       */

      function Expose(options) {
        return function (object, propertyName) {
          var metadata = new ExposeMetadata_1.ExposeMetadata(object instanceof Function ? object : object.constructor, propertyName, options || {});
          storage_1.defaultMetadataStorage.addExposeMetadata(metadata);
        };
      }

      exports.Expose = Expose;
      /**
       * Marks property as excluded from the process of transformation. By default it excludes the property for both
       * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
       * you want to skip this property.
       */

      function Exclude(options) {
        return function (object, propertyName) {
          var metadata = new ExcludeMetadata_1.ExcludeMetadata(object instanceof Function ? object : object.constructor, propertyName, options || {});
          storage_1.defaultMetadataStorage.addExcludeMetadata(metadata);
        };
      }

      exports.Exclude = Exclude;
      /**
       * Transform the object from class to plain object and return only with the exposed properties.
       */

      function TransformClassToPlain(params) {
        return function (target, propertyKey, descriptor) {
          var classTransformer = new ClassTransformer_1.ClassTransformer();
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise ? result.then(function (data) {
              return classTransformer.classToPlain(data, params);
            }) : classTransformer.classToPlain(result, params);
          };
        };
      }

      exports.TransformClassToPlain = TransformClassToPlain;
      /**
       * Return the class instance only with the exposed properties.
       */

      function TransformClassToClass(params) {
        return function (target, propertyKey, descriptor) {
          var classTransformer = new ClassTransformer_1.ClassTransformer();
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise ? result.then(function (data) {
              return classTransformer.classToClass(data, params);
            }) : classTransformer.classToClass(result, params);
          };
        };
      }

      exports.TransformClassToClass = TransformClassToClass;
      /**
       * Return the class instance only with the exposed properties.
       */

      function TransformPlainToClass(classType, params) {
        return function (target, propertyKey, descriptor) {
          var classTransformer = new ClassTransformer_1.ClassTransformer();
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise ? result.then(function (data) {
              return classTransformer.plainToClass(classType, data, params);
            }) : classTransformer.plainToClass(classType, result, params);
          };
        };
      }

      exports.TransformPlainToClass = TransformPlainToClass; //# sourceMappingURL=decorators.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/enums/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/class-transformer/enums/index.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerEnumsIndexJs(module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./transformation-type.enum */
      "./node_modules/class-transformer/enums/transformation-type.enum.js"), exports); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/class-transformer/enums/transformation-type.enum.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/class-transformer/enums/transformation-type.enum.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerEnumsTransformationTypeEnumJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransformationType = void 0;
      var TransformationType;

      (function (TransformationType) {
        TransformationType[TransformationType["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
        TransformationType[TransformationType["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
        TransformationType[TransformationType["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
      })(TransformationType = exports.TransformationType || (exports.TransformationType = {})); //# sourceMappingURL=transformation-type.enum.js.map

      /***/

    },

    /***/
    "./node_modules/class-transformer/index.js":
    /*!*************************************************!*\
      !*** ./node_modules/class-transformer/index.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerIndexJs(module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransformationType = exports.deserializeArray = exports.deserialize = exports.serialize = exports.classToClassFromExist = exports.classToClass = exports.plainToClassFromExist = exports.plainToClass = exports.classToPlainFromExist = exports.classToPlain = void 0;

      var ClassTransformer_1 = __webpack_require__(
      /*! ./ClassTransformer */
      "./node_modules/class-transformer/ClassTransformer.js");

      var ClassTransformer_2 = __webpack_require__(
      /*! ./ClassTransformer */
      "./node_modules/class-transformer/ClassTransformer.js");

      Object.defineProperty(exports, "ClassTransformer", {
        enumerable: true,
        get: function get() {
          return ClassTransformer_2.ClassTransformer;
        }
      });

      __exportStar(__webpack_require__(
      /*! ./metadata/ExposeExcludeOptions */
      "./node_modules/class-transformer/metadata/ExposeExcludeOptions.js"), exports);

      __exportStar(__webpack_require__(
      /*! ./decorators */
      "./node_modules/class-transformer/decorators.js"), exports);

      var classTransformer = new ClassTransformer_1.ClassTransformer();

      function classToPlain(object, options) {
        return classTransformer.classToPlain(object, options);
      }

      exports.classToPlain = classToPlain;

      function classToPlainFromExist(object, plainObject, options) {
        return classTransformer.classToPlainFromExist(object, plainObject, options);
      }

      exports.classToPlainFromExist = classToPlainFromExist;

      function plainToClass(cls, plain, options) {
        return classTransformer.plainToClass(cls, plain, options);
      }

      exports.plainToClass = plainToClass;

      function plainToClassFromExist(clsObject, plain, options) {
        return classTransformer.plainToClassFromExist(clsObject, plain, options);
      }

      exports.plainToClassFromExist = plainToClassFromExist;

      function classToClass(object, options) {
        return classTransformer.classToClass(object, options);
      }

      exports.classToClass = classToClass;

      function classToClassFromExist(object, fromObject, options) {
        return classTransformer.classToClassFromExist(object, fromObject, options);
      }

      exports.classToClassFromExist = classToClassFromExist;

      function serialize(object, options) {
        return classTransformer.serialize(object, options);
      }

      exports.serialize = serialize;
      /**
       * Deserializes given JSON string to a object of the given class.
       */

      function deserialize(cls, json, options) {
        return classTransformer.deserialize(cls, json, options);
      }

      exports.deserialize = deserialize;
      /**
       * Deserializes given JSON string to an array of objects of the given class.
       */

      function deserializeArray(cls, json, options) {
        return classTransformer.deserializeArray(cls, json, options);
      }

      exports.deserializeArray = deserializeArray;
      /**
       * Enum representing the different transformation types.
       */

      var TransformationType;

      (function (TransformationType) {
        TransformationType[TransformationType["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
        TransformationType[TransformationType["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
        TransformationType[TransformationType["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
      })(TransformationType = exports.TransformationType || (exports.TransformationType = {})); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/class-transformer/metadata/ExcludeMetadata.js":
    /*!********************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/ExcludeMetadata.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataExcludeMetadataJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExcludeMetadata = void 0;

      var ExcludeMetadata = function ExcludeMetadata(target, propertyName, options) {
        _classCallCheck(this, ExcludeMetadata);

        this.target = target;
        this.propertyName = propertyName;
        this.options = options;
      };

      exports.ExcludeMetadata = ExcludeMetadata; //# sourceMappingURL=ExcludeMetadata.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/metadata/ExposeExcludeOptions.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/ExposeExcludeOptions.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataExposeExcludeOptionsJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); //# sourceMappingURL=ExposeExcludeOptions.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/metadata/ExposeMetadata.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/ExposeMetadata.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataExposeMetadataJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExposeMetadata = void 0;

      var ExposeMetadata = function ExposeMetadata(target, propertyName, options) {
        _classCallCheck(this, ExposeMetadata);

        this.target = target;
        this.propertyName = propertyName;
        this.options = options;
      };

      exports.ExposeMetadata = ExposeMetadata; //# sourceMappingURL=ExposeMetadata.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/metadata/MetadataStorage.js":
    /*!********************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/MetadataStorage.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataMetadataStorageJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MetadataStorage = void 0;

      var enums_1 = __webpack_require__(
      /*! ../enums */
      "./node_modules/class-transformer/enums/index.js");
      /**
       * Storage all library metadata.
       */


      var MetadataStorage = /*#__PURE__*/function () {
        function MetadataStorage() {
          _classCallCheck(this, MetadataStorage);

          // -------------------------------------------------------------------------
          // Properties
          // -------------------------------------------------------------------------
          this._typeMetadatas = new Map();
          this._transformMetadatas = new Map();
          this._exposeMetadatas = new Map();
          this._excludeMetadatas = new Map();
          this._ancestorsMap = new Map();
        } // -------------------------------------------------------------------------
        // Adder Methods
        // -------------------------------------------------------------------------


        _createClass(MetadataStorage, [{
          key: "addTypeMetadata",
          value: function addTypeMetadata(metadata) {
            if (!this._typeMetadatas.has(metadata.target)) {
              this._typeMetadatas.set(metadata.target, new Map());
            }

            this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
          }
        }, {
          key: "addTransformMetadata",
          value: function addTransformMetadata(metadata) {
            if (!this._transformMetadatas.has(metadata.target)) {
              this._transformMetadatas.set(metadata.target, new Map());
            }

            if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
              this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
            }

            this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
          }
        }, {
          key: "addExposeMetadata",
          value: function addExposeMetadata(metadata) {
            if (!this._exposeMetadatas.has(metadata.target)) {
              this._exposeMetadatas.set(metadata.target, new Map());
            }

            this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
          }
        }, {
          key: "addExcludeMetadata",
          value: function addExcludeMetadata(metadata) {
            if (!this._excludeMetadatas.has(metadata.target)) {
              this._excludeMetadatas.set(metadata.target, new Map());
            }

            this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
          } // -------------------------------------------------------------------------
          // Public Methods
          // -------------------------------------------------------------------------

        }, {
          key: "findTransformMetadatas",
          value: function findTransformMetadatas(target, propertyName, transformationType) {
            return this.findMetadatas(this._transformMetadatas, target, propertyName).filter(function (metadata) {
              if (!metadata.options) return true;
              if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true) return true;

              if (metadata.options.toClassOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
              }

              if (metadata.options.toPlainOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
              }

              return true;
            });
          }
        }, {
          key: "findExcludeMetadata",
          value: function findExcludeMetadata(target, propertyName) {
            return this.findMetadata(this._excludeMetadatas, target, propertyName);
          }
        }, {
          key: "findExposeMetadata",
          value: function findExposeMetadata(target, propertyName) {
            return this.findMetadata(this._exposeMetadatas, target, propertyName);
          }
        }, {
          key: "findExposeMetadataByCustomName",
          value: function findExposeMetadataByCustomName(target, name) {
            return this.getExposedMetadatas(target).find(function (metadata) {
              return metadata.options && metadata.options.name === name;
            });
          }
        }, {
          key: "findTypeMetadata",
          value: function findTypeMetadata(target, propertyName) {
            return this.findMetadata(this._typeMetadatas, target, propertyName);
          }
        }, {
          key: "getStrategy",
          value: function getStrategy(target) {
            var excludeMap = this._excludeMetadatas.get(target);

            var exclude = excludeMap && excludeMap.get(undefined);

            var exposeMap = this._exposeMetadatas.get(target);

            var expose = exposeMap && exposeMap.get(undefined);
            if (exclude && expose || !exclude && !expose) return 'none';
            return exclude ? 'excludeAll' : 'exposeAll';
          }
        }, {
          key: "getExposedMetadatas",
          value: function getExposedMetadatas(target) {
            return this.getMetadata(this._exposeMetadatas, target);
          }
        }, {
          key: "getExcludedMetadatas",
          value: function getExcludedMetadatas(target) {
            return this.getMetadata(this._excludeMetadatas, target);
          }
        }, {
          key: "getExposedProperties",
          value: function getExposedProperties(target, transformationType) {
            return this.getExposedMetadatas(target).filter(function (metadata) {
              if (!metadata.options) return true;
              if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true) return true;

              if (metadata.options.toClassOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
              }

              if (metadata.options.toPlainOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
              }

              return true;
            }).map(function (metadata) {
              return metadata.propertyName;
            });
          }
        }, {
          key: "getExcludedProperties",
          value: function getExcludedProperties(target, transformationType) {
            return this.getExcludedMetadatas(target).filter(function (metadata) {
              if (!metadata.options) return true;
              if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true) return true;

              if (metadata.options.toClassOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
              }

              if (metadata.options.toPlainOnly === true) {
                return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
              }

              return true;
            }).map(function (metadata) {
              return metadata.propertyName;
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            this._typeMetadatas.clear();

            this._exposeMetadatas.clear();

            this._excludeMetadatas.clear();

            this._ancestorsMap.clear();
          } // -------------------------------------------------------------------------
          // Private Methods
          // -------------------------------------------------------------------------

        }, {
          key: "getMetadata",
          value: function getMetadata(metadatas, target) {
            var metadataFromTargetMap = metadatas.get(target);
            var metadataFromTarget;

            if (metadataFromTargetMap) {
              metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter(function (meta) {
                return meta.propertyName !== undefined;
              });
            }

            var metadataFromAncestors = [];

            var _iterator2 = _createForOfIteratorHelper(this.getAncestors(target)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ancestor = _step2.value;
                var ancestorMetadataMap = metadatas.get(ancestor);

                if (ancestorMetadataMap) {
                  var metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter(function (meta) {
                    return meta.propertyName !== undefined;
                  });
                  metadataFromAncestors.push.apply(metadataFromAncestors, _toConsumableArray(metadataFromAncestor));
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return metadataFromAncestors.concat(metadataFromTarget || []);
          }
        }, {
          key: "findMetadata",
          value: function findMetadata(metadatas, target, propertyName) {
            var metadataFromTargetMap = metadatas.get(target);

            if (metadataFromTargetMap) {
              var metadataFromTarget = metadataFromTargetMap.get(propertyName);

              if (metadataFromTarget) {
                return metadataFromTarget;
              }
            }

            var _iterator3 = _createForOfIteratorHelper(this.getAncestors(target)),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var ancestor = _step3.value;
                var ancestorMetadataMap = metadatas.get(ancestor);

                if (ancestorMetadataMap) {
                  var ancestorResult = ancestorMetadataMap.get(propertyName);

                  if (ancestorResult) {
                    return ancestorResult;
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return undefined;
          }
        }, {
          key: "findMetadatas",
          value: function findMetadatas(metadatas, target, propertyName) {
            var metadataFromTargetMap = metadatas.get(target);
            var metadataFromTarget;

            if (metadataFromTargetMap) {
              metadataFromTarget = metadataFromTargetMap.get(propertyName);
            }

            var metadataFromAncestorsTarget = [];

            var _iterator4 = _createForOfIteratorHelper(this.getAncestors(target)),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var ancestor = _step4.value;
                var ancestorMetadataMap = metadatas.get(ancestor);

                if (ancestorMetadataMap) {
                  if (ancestorMetadataMap.has(propertyName)) {
                    metadataFromAncestorsTarget.push.apply(metadataFromAncestorsTarget, _toConsumableArray(ancestorMetadataMap.get(propertyName)));
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return metadataFromAncestorsTarget.slice().reverse().concat((metadataFromTarget || []).slice().reverse());
          }
        }, {
          key: "getAncestors",
          value: function getAncestors(target) {
            if (!target) return [];

            if (!this._ancestorsMap.has(target)) {
              var ancestors = [];

              for (var baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== 'undefined'; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
                ancestors.push(baseClass);
              }

              this._ancestorsMap.set(target, ancestors);
            }

            return this._ancestorsMap.get(target);
          }
        }]);

        return MetadataStorage;
      }();

      exports.MetadataStorage = MetadataStorage; //# sourceMappingURL=MetadataStorage.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/metadata/TransformMetadata.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/TransformMetadata.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataTransformMetadataJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransformMetadata = void 0;

      var TransformMetadata = function TransformMetadata(target, propertyName, transformFn, options) {
        _classCallCheck(this, TransformMetadata);

        this.target = target;
        this.propertyName = propertyName;
        this.transformFn = transformFn;
        this.options = options;
      };

      exports.TransformMetadata = TransformMetadata; //# sourceMappingURL=TransformMetadata.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/metadata/TypeMetadata.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/class-transformer/metadata/TypeMetadata.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerMetadataTypeMetadataJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TypeMetadata = void 0;

      var TypeMetadata = function TypeMetadata(target, propertyName, reflectedType, typeFunction, options) {
        _classCallCheck(this, TypeMetadata);

        this.target = target;
        this.propertyName = propertyName;
        this.reflectedType = reflectedType;
        this.typeFunction = typeFunction;
        this.options = options;
      };

      exports.TypeMetadata = TypeMetadata; //# sourceMappingURL=TypeMetadata.js.map

      /***/
    },

    /***/
    "./node_modules/class-transformer/storage.js":
    /*!***************************************************!*\
      !*** ./node_modules/class-transformer/storage.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function node_modulesClassTransformerStorageJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultMetadataStorage = void 0;

      var MetadataStorage_1 = __webpack_require__(
      /*! ./metadata/MetadataStorage */
      "./node_modules/class-transformer/metadata/MetadataStorage.js");
      /**
       * Default metadata storage is used as singleton and can be used to storage all metadatas.
       */


      exports.defaultMetadataStorage = new MetadataStorage_1.MetadataStorage(); //# sourceMappingURL=storage.js.map

      /***/
    },

    /***/
    "./src/app/core/iservicefirebase.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/iservicefirebase.service.ts ***!
      \**************************************************/

    /*! exports provided: ServiceFirebase */

    /***/
    function srcAppCoreIservicefirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceFirebase", function () {
        return ServiceFirebase;
      });
      /* harmony import */


      var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! class-transformer */
      "./node_modules/class-transformer/index.js");
      /* harmony import */


      var class_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ServiceFirebase = /*#__PURE__*/function () {
        function ServiceFirebase(type, firestore, path) {
          _classCallCheck(this, ServiceFirebase);

          this.type = type;
          this.firestore = firestore;
          this.path = path;
          this.ref = this.firestore.collection(this.path);
        }

        _createClass(ServiceFirebase, [{
          key: "get",
          value: function get(id) {
            var _this4 = this;

            var doc = this.ref.doc(id);
            return doc.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (snapshot) {
              return _this4.docToClass(snapshot);
            }));
          }
        }, {
          key: "docToClass",
          value: function docToClass(snapshotDoc) {
            var obj = Object.assign({
              id: snapshotDoc.id
            }, snapshotDoc.data());
            var typed = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(this.type, obj);
            return typed;
          }
        }, {
          key: "list",
          value: function list() {
            return this.ref.valueChanges();
          }
        }, {
          key: "createOrUpdate",
          value: function createOrUpdate(item) {
            var _this5 = this;

            var id = item.id;
            if (!item) return;
            var obj = null;
            if (item instanceof this.type) obj = item.toObject();else obj = item;

            if (id) {
              return this.ref.doc(id).set(obj);
            } else return this.ref.add(obj).then(function (res) {
              obj.id = res.id; // Para salvar com o atributo id

              _this5.ref.doc(res.id).set(obj);
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.ref.doc(id)["delete"]();
          }
        }]);

        return ServiceFirebase;
      }();
      /***/

    },

    /***/
    "./src/app/core/model.ts":
    /*!*******************************!*\
      !*** ./src/app/core/model.ts ***!
      \*******************************/

    /*! exports provided: Model */

    /***/
    function srcAppCoreModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Model", function () {
        return Model;
      });
      /* harmony import */


      var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! class-transformer */
      "./node_modules/class-transformer/index.js");
      /* harmony import */


      var class_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_0__);

      var Model = /*#__PURE__*/function () {
        function Model() {
          _classCallCheck(this, Model);
        }

        _createClass(Model, [{
          key: "toObject",
          value: function toObject() {
            var obj = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this); //realiza a desserialização para uma classe literal

            delete obj.id;
            return obj;
          }
        }]);

        return Model;
      }();
      /***/

    },

    /***/
    "./src/app/models/usuario.ts":
    /*!***********************************!*\
      !*** ./src/app/models/usuario.ts ***!
      \***********************************/

    /*! exports provided: Usuario */

    /***/
    function srcAppModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });
      /* harmony import */


      var _core_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/model */
      "./src/app/core/model.ts");

      var Usuario = /*#__PURE__*/function (_core_model__WEBPACK_) {
        _inherits(Usuario, _core_model__WEBPACK_);

        var _super = _createSuper(Usuario);

        function Usuario() {
          _classCallCheck(this, Usuario);

          return _super.apply(this, arguments);
        }

        return Usuario;
      }(_core_model__WEBPACK_IMPORTED_MODULE_0__["Model"]);
      /***/

    },

    /***/
    "./src/app/services/usuario.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/usuario.service.ts ***!
      \*********************************************/

    /*! exports provided: UsuarioService */

    /***/
    function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
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


      var _models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/usuario */
      "./src/app/models/usuario.ts");

      var UsuarioService = /*#__PURE__*/function (_core_iservicefirebas) {
        _inherits(UsuarioService, _core_iservicefirebas);

        var _super2 = _createSuper(UsuarioService);

        function UsuarioService(firestore) {
          _classCallCheck(this, UsuarioService);

          return _super2.call(this, _models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"], firestore, 'usuarios');
        }

        return UsuarioService;
      }(_core_iservicefirebase_service__WEBPACK_IMPORTED_MODULE_3__["ServiceFirebase"]);

      UsuarioService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UsuarioService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~cadastro-cadastro-module~forum-forum-module~perfil-perfil-module-es5.js.map