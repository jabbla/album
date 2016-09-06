/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _puzzle = __webpack_require__(1);

	var _waterfall = __webpack_require__(8);

	var _barrel = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * MultiAlbum类
	 */
	var MultiAlbum = function () {
		function MultiAlbum() {
			_classCallCheck(this, MultiAlbum);
		}
		/**
	  * 获取Puzzle实例
	  * @param {Object} obj 配置对象
	  */


		_createClass(MultiAlbum, [{
			key: 'Puzzle',
			value: function Puzzle(obj) {
				return new _puzzle.Puzzle(obj);
			}
			/**
	   * 获取Waterfall实例
	   * @param {Object} obj 配置对象
	   */

		}, {
			key: 'Waterfall',
			value: function Waterfall(obj) {
				return new _waterfall.Waterfall(obj);
			}
			/**
	   * 获取Barrel实例
	   * @param {Object} obj 配置对象
	   */

		}, {
			key: 'Barrel',
			value: function Barrel(obj) {
				return new _barrel.Barrel(obj);
			}
		}]);

		return MultiAlbum;
	}();

	window.MultiAlbum = MultiAlbum;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	exports.Puzzle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _layout = __webpack_require__(2);

	var _puzzle_image_prop = __webpack_require__(6);

	var _createAndSet = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * 拼图布局类
	 * @extends Layout
	 */
	var Puzzle = function (_Layout) {
				_inherits(Puzzle, _Layout);

				/**
	    * @param  {Object}	obj - 配置对象
	    */
				function Puzzle(obj) {
							_classCallCheck(this, Puzzle);

							//创建方法索引
							var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Puzzle).call(this, obj));

							_this._method = {
										1: _this._one,
										2: _this._two,
										3: _this._three,
										4: _this._four,
										5: _this._five,
										6: _this._six
							};

							_this.$el.style.height = '100%';
							return _this;
				}
				/** 渲染动作 */


				_createClass(Puzzle, [{
							key: 'render',
							value: function render() {
										_get(Object.getPrototypeOf(Puzzle.prototype), 'render', this).call(this);
										this._method[this._pics.length <= 6 ? this._pics.length : 6].call(this);
							}
							/** 1张图片布局 */

				}, {
							key: '_one',
							value: function _one() {
										//创建image-wraper,并设置宽高，及class
										var wraper = (0, _createAndSet.createAndSet)({ height: '100%' });
										_puzzle_image_prop.imgProp.call(this, wraper, './imgs/srcP.jpg', this._pics[0]);

										this.$el.appendChild(wraper);
										this._wrapers.push(wraper);
							}
							/** 2张图片布局 */

				}, {
							key: '_two',
							value: function _two() {
										var wraper_left = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' }),
										    wraper_right = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' });

										_puzzle_image_prop.imgProp.call(this, wraper_left, './imgs/srcP.jpg', this._pics[0]);
										_puzzle_image_prop.imgProp.call(this, wraper_right, './imgs/srcP.jpg', this._pics[1]);

										this.$el.appendChild(wraper_left);
										this.$el.appendChild(wraper_right);

										this._wrapers.push(wraper_left);
										this._wrapers.push(wraper_right);
							}
							/** 3张图片布局 */

				}, {
							key: '_three',
							value: function _three() {
										var width = this.$parent._innerW,
										    height = this.$parent._innerH;

										var wraper_left = (0, _createAndSet.createAndSet)({ width: width - height / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_right = (0, _createAndSet.createAndSet)({ width: height / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_right_top = (0, _createAndSet.createAndSet)({ width: height / 2 + 'px', height: height / 2 + 'px' }),
										    wraper_right_bottom = (0, _createAndSet.createAndSet)({ width: height / 2 + 'px', height: height / 2 + 'px' });

										_puzzle_image_prop.imgProp.call(this, wraper_left, './imgs/srcP.jpg', this._pics[0]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_top, './imgs/srcP.jpg', this._pics[1]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_bottom, './imgs/srcP.jpg', this._pics[2]);

										this._wrapers.push(wraper_left);
										this._wrapers.push(wraper_right_top);
										this._wrapers.push(wraper_right_bottom);

										wraper_right.appendChild(wraper_right_top);
										wraper_right.appendChild(wraper_right_bottom);
										this.$el.appendChild(wraper_left);
										this.$el.appendChild(wraper_right);
							}
							/** 4张图片布局 */

				}, {
							key: '_four',
							value: function _four() {

										var width = this.$parent._innerW,
										    height = this.$parent._innerH;

										var wraper_left = (0, _createAndSet.createAndSet)({ width: width / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_right = (0, _createAndSet.createAndSet)({ width: width / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_left_top = (0, _createAndSet.createAndSet)({ width: '100%', height: height / 2 + 'px' }),
										    wraper_left_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: height / 2 + 'px' }),
										    wraper_right_top = (0, _createAndSet.createAndSet)({ width: '100%', height: height / 2 + 'px' }),
										    wraper_right_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: height / 2 + 'px' });

										_puzzle_image_prop.imgProp.call(this, wraper_left_top, './imgs/srcP.jpg', this._pics[0]);
										_puzzle_image_prop.imgProp.call(this, wraper_left_bottom, './imgs/srcP.jpg', this._pics[1]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_top, './imgs/srcP.jpg', this._pics[2]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_bottom, './imgs/srcP.jpg', this._pics[3]);

										this._wrapers.push(wraper_left_top);
										this._wrapers.push(wraper_left_bottom);
										this._wrapers.push(wraper_right_top);
										this._wrapers.push(wraper_right_bottom);

										wraper_left.appendChild(wraper_left_top);
										wraper_left.appendChild(wraper_left_bottom);
										wraper_right.appendChild(wraper_right_top);
										wraper_right.appendChild(wraper_right_bottom);

										this.$el.appendChild(wraper_left);
										this.$el.appendChild(wraper_right);
							}
							/** 5张图片布局 */

				}, {
							key: '_five',
							value: function _five() {
										var width = this.$parent._innerW,
										    height = this.$parent._innerH;

										var wraper_left = (0, _createAndSet.createAndSet)({ width: width - height / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_right = (0, _createAndSet.createAndSet)({ width: height / 2 + 'px', height: '100%', display: 'inline-block' }),
										    wraper_left_top = (0, _createAndSet.createAndSet)({ width: '100%', height: '50%' }),
										    wraper_left_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: '50%' }),
										    wraper_left_bottom_left = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' }),
										    wraper_left_bottom_right = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' }),
										    wraper_right_top = (0, _createAndSet.createAndSet)({ width: '100%', height: '50%' }),
										    wraper_right_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: '50%' });

										_puzzle_image_prop.imgProp.call(this, wraper_left_top, './imgs/srcP.jpg', this._pics[0]);
										_puzzle_image_prop.imgProp.call(this, wraper_left_bottom_left, './imgs/srcP.jpg', this._pics[1]);
										_puzzle_image_prop.imgProp.call(this, wraper_left_bottom_right, './imgs/srcP.jpg', this._pics[2]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_top, './imgs/srcP.jpg', this._pics[3]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_bottom, './imgs/srcP.jpg', this._pics[4]);

										this._wrapers.push(wraper_left_top);
										this._wrapers.push(wraper_left_bottom_left);
										this._wrapers.push(wraper_left_bottom_right);
										this._wrapers.push(wraper_right_top);
										this._wrapers.push(wraper_right_bottom);

										wraper_left.appendChild(wraper_left_top);
										wraper_left_bottom.appendChild(wraper_left_bottom_left);
										wraper_left_bottom.appendChild(wraper_left_bottom_right);
										wraper_left.appendChild(wraper_left_bottom);

										wraper_right.appendChild(wraper_right_top);
										wraper_right.appendChild(wraper_right_bottom);

										this.$el.appendChild(wraper_left);
										this.$el.appendChild(wraper_right);
							}
							/** 6张图片布局 */

				}, {
							key: '_six',
							value: function _six() {
										var width = this.$parent._innerW,
										    height = this.$parent._innerH;

										var wraper_left = (0, _createAndSet.createAndSet)({ width: '66.666666%', height: '100%', display: 'inline-block' }),
										    wraper_right = (0, _createAndSet.createAndSet)({ width: '33.333333%', height: '100%', display: 'inline-block' }),
										    wraper_left_top = (0, _createAndSet.createAndSet)({ width: '100%', height: '66.666666%' }),
										    wraper_left_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: '33.333333%' }),
										    wraper_left_bottom_left = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' }),
										    wraper_left_bottom_right = (0, _createAndSet.createAndSet)({ width: '50%', height: '100%', display: 'inline-block' }),
										    wraper_right_top = (0, _createAndSet.createAndSet)({ width: '100%', height: '33.333333%' }),
										    wraper_right_middle = (0, _createAndSet.createAndSet)({ width: '100%', height: '33.333333%' }),
										    wraper_right_bottom = (0, _createAndSet.createAndSet)({ width: '100%', height: '33.333333%' });

										_puzzle_image_prop.imgProp.call(this, wraper_left_top, './imgs/srcP.jpg', this._pics[0]);
										_puzzle_image_prop.imgProp.call(this, wraper_left_bottom_left, './imgs/srcP.jpg', this._pics[1]);
										_puzzle_image_prop.imgProp.call(this, wraper_left_bottom_right, './imgs/srcP.jpg', this._pics[2]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_top, './imgs/srcP.jpg', this._pics[3]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_middle, './imgs/srcP.jpg', this._pics[4]);
										_puzzle_image_prop.imgProp.call(this, wraper_right_bottom, './imgs/srcP.jpg', this._pics[5]);

										this._wrapers.push(wraper_left_top);
										this._wrapers.push(wraper_left_bottom_left);
										this._wrapers.push(wraper_left_bottom_right);
										this._wrapers.push(wraper_right_top);
										this._wrapers.push(wraper_right_middle);
										this._wrapers.push(wraper_right_bottom);

										wraper_left.appendChild(wraper_left_top);
										wraper_left.appendChild(wraper_left_bottom);
										wraper_left_bottom.appendChild(wraper_left_bottom_left);
										wraper_left_bottom.appendChild(wraper_left_bottom_right);

										wraper_right.appendChild(wraper_right_top);
										wraper_right.appendChild(wraper_right_middle);
										wraper_right.appendChild(wraper_right_bottom);

										this.$el.appendChild(wraper_left);
										this.$el.appendChild(wraper_right);
							}
				}]);

				return Puzzle;
	}(_layout.Layout);

	exports.Puzzle = Puzzle;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Layout = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _NodeList = __webpack_require__(3);

	var _NodeList2 = _interopRequireDefault(_NodeList);

	var _widthAndHeight2 = __webpack_require__(4);

	var _getComputedStyle = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** 基础布局类 */
	var Layout = function () {
		/**
	  * @param  {Object}	obj 配置对象
	  * @param {String} obj.el 布局的挂载元素
	  * @param {Array} obj.pictures 图片元数据数组 
	  */
		function Layout(obj) {
			_classCallCheck(this, Layout);

			if (!obj || !obj.el) throw new Error('The layout needs a el');
			if (obj.pictures && !(obj.pictures instanceof Array)) throw new Error('the configuration is wrong');

			//设置默认挂载元素为body
			this.$parent = (0, _NodeList2.default)(obj.el);
			this.$parent = this.$parent[0] || this.$parent;

			var _widthAndHeight = (0, _widthAndHeight2.widthAndHeight)(this.$parent);

			var width = _widthAndHeight.width;
			var height = _widthAndHeight.height;
			var overflow = _widthAndHeight.overflow;


			this.$parent._innerW = width;
			this.$parent._innerH = height;

			//创建最外层div
			this.$el = document.createElement('div');
			//图片数组
			this._pics = obj.pictures || [];
			//image-wraper数组
			this._wrapers = [];
			//自定义类空间
			this._classSpace = { imgWraper: '' };
		}
		/** 基础的渲染动作 */


		_createClass(Layout, [{
			key: 'render',
			value: function render() {
				if (!this._pics.length) throw new Error('you have no pictrue please use add() before render()');

				this.$parent.appendChild(this.$el);
			}
			/**
	   * 添加元信息
	   * @param {Array} arr - 元数据数组
	   */

		}, {
			key: 'add',
			value: function add(arr) {

				if (!(arr instanceof Array)) throw new TypeError('the add() method only accepts Array');
				this._pics = this._pics.concat(arr);
			}
			/**
	   * 返回当前布局的所有image-wraper
	   * @return {Array} 
	   */

		}, {
			key: 'getWrapers',
			value: function getWrapers() {
				return this._wrapers;
			}
			/**
	   * 追加自定义前缀
	   * @param  {Object} obj 自定义类名
	   * @param {String} obj.imgWraper 图片包裹层类名	
	   * @return {Object} 类空间
	   */

		}, {
			key: 'classSpace',
			value: function classSpace() {
				var obj = arguments.length <= 0 || arguments[0] === undefined ? { imgWraper: '' } : arguments[0];

				this._classSpace = obj;
				return this._classSpace;
			}
		}]);

		return Layout;
	}();

	exports.Layout = Layout;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];

	var NodeList = function () {
	  function NodeList(args) {
	    _classCallCheck(this, NodeList);

	    var i = 0,
	        l,
	        nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var _i in nodes) {
	        this[_i] = nodes[_i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }

	  _createClass(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var el = _step.value;

	            if (el instanceof Node) {
	              if (!~nodes.indexOf(el)) nodes.push(el);
	            } else if (el) {
	              flatten(el);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var arg = _step2.value;

	          if (arg instanceof Node) {
	            if (!~nodes.indexOf(arg)) nodes.push(arg);
	          } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
	            flatten(arg);
	          } else {
	            throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.map(function (el) {
	        return el.parentNode;
	      });
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = flatten(this)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var el = _step3.value;

	          var node = el.querySelectorAll(element);
	          if (node && node.length) nodes.push(node);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;

	      return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return flatten(ArrayProto.map.apply(this, args), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;

	      try {
	        for (var _iterator4 = arguments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var arg = _step4.value;

	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg);
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var list = new NodeList([[], this.owner]);
	      var splice = function splice(index) {
	        return ArrayProto.splice.apply();
	      };
	      var i = this.length - 1;
	      for (var el = this[i]; el; el = this[--i]) {
	        if (el.remove) {
	          el.remove();
	          ArrayProto.splice.call(this, i, 1);
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	          ArrayProto.splice.call(this, i, 1);
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var shift = ArrayProto.shift.bind(this);
	      while (amount--) {
	        nodes.push(shift());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      return new NodeList([ArrayProto.slice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var i = 2, l = arguments.length; i < l; i++) {
	        if (!(arguments[i] instanceof Node)) throw nodeError;
	      }
	      return new NodeList([ArrayProto.splice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var unshift = ArrayProto.unshift.bind(this);
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = arguments[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var arg = _step5.value;

	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) unshift(arg);
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var _this2 = this;

	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this2.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = this[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var el = _step6.value;

	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        var _iteratorNormalCompletion7 = true;
	        var _didIteratorError7 = false;
	        var _iteratorError7 = undefined;

	        try {
	          for (var _iterator7 = this[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	            var el = _step7.value;

	            if (el) {
	              for (key in prop) {
	                if (key in el) {
	                  el[key] = prop[key];
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError7 = true;
	          _iteratorError7 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	              _iterator7.return();
	            }
	          } finally {
	            if (_didIteratorError7) {
	              throw _iteratorError7;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion8 = true;
	        var _didIteratorError8 = false;
	        var _iteratorError8 = undefined;

	        try {
	          for (var _iterator8 = this[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	            var _el = _step8.value;

	            if (prop in _el) {
	              _el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError8 = true;
	          _iteratorError8 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion8 && _iterator8.return) {
	              _iterator8.return();
	            }
	          } finally {
	            if (_didIteratorError8) {
	              throw _iteratorError8;
	            }
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion9 = true;
	      var _didIteratorError9 = false;
	      var _iteratorError9 = undefined;

	      try {
	        for (var _iterator9 = this[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	          var el = _step9.value;

	          if (el && el[method] instanceof Function) {
	            el = el[method].apply(el, args);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError9 = true;
	        _iteratorError9 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion9 && _iterator9.return) {
	            _iterator9.return();
	          }
	        } finally {
	          if (_didIteratorError9) {
	            throw _iteratorError9;
	          }
	        }
	      }

	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return new NodeList([[this[index]], this]);
	    }
	  }, {
	    key: 'on',


	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = new NodeList([selector, this]);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      var _iteratorNormalCompletion10 = true;
	      var _didIteratorError10 = false;
	      var _iteratorError10 = undefined;

	      try {
	        for (var _iterator10 = events[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	          var event = _step10.value;
	          var _iteratorNormalCompletion11 = true;
	          var _didIteratorError11 = false;
	          var _iteratorError11 = undefined;

	          try {
	            for (var _iterator11 = this[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	              var el = _step11.value;

	              el.addEventListener(event, callback, false);
	              Events.push({
	                el: el,
	                event: event,
	                callback: callback
	              });
	            }
	          } catch (err) {
	            _didIteratorError11 = true;
	            _iteratorError11 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                _iterator11.return();
	              }
	            } finally {
	              if (_didIteratorError11) {
	                throw _iteratorError11;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError10 = true;
	        _iteratorError10 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion10 && _iterator10.return) {
	            _iterator10.return();
	          }
	        } finally {
	          if (_didIteratorError10) {
	            throw _iteratorError10;
	          }
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        var _iteratorNormalCompletion12 = true;
	        var _didIteratorError12 = false;
	        var _iteratorError12 = undefined;

	        try {
	          for (var _iterator12 = this[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	            var el = _step12.value;

	            for (var e in Events) {
	              var _iteratorNormalCompletion13 = true;
	              var _didIteratorError13 = false;
	              var _iteratorError13 = undefined;

	              try {
	                for (var _iterator13 = events.split(' ')[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	                  var event = _step13.value;

	                  if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
	                    Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                    delete Events[e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError13 = true;
	                _iteratorError13 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
	                    _iterator13.return();
	                  }
	                } finally {
	                  if (_didIteratorError13) {
	                    throw _iteratorError13;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError12 = true;
	          _iteratorError12 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	              _iterator12.return();
	            }
	          } finally {
	            if (_didIteratorError12) {
	              throw _iteratorError12;
	            }
	          }
	        }
	      } else if (typeof events === 'string') {
	        var _iteratorNormalCompletion14 = true;
	        var _didIteratorError14 = false;
	        var _iteratorError14 = undefined;

	        try {
	          for (var _iterator14 = this[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
	            var _el2 = _step14.value;

	            for (var _e in Events) {
	              var _iteratorNormalCompletion15 = true;
	              var _didIteratorError15 = false;
	              var _iteratorError15 = undefined;

	              try {
	                for (var _iterator15 = events.split(' ')[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
	                  var _event = _step15.value;

	                  if (Events[_e] && Events[_e].el === _el2 && Events[_e].event === _event) {
	                    Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
	                    delete Events[_e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError15 = true;
	                _iteratorError15 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion15 && _iterator15.return) {
	                    _iterator15.return();
	                  }
	                } finally {
	                  if (_didIteratorError15) {
	                    throw _iteratorError15;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError14 = true;
	          _iteratorError14 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion14 && _iterator14.return) {
	              _iterator14.return();
	            }
	          } finally {
	            if (_didIteratorError14) {
	              throw _iteratorError14;
	            }
	          }
	        }
	      } else if (callback instanceof Function) {
	        var _iteratorNormalCompletion16 = true;
	        var _didIteratorError16 = false;
	        var _iteratorError16 = undefined;

	        try {
	          for (var _iterator16 = this[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
	            var _el3 = _step16.value;

	            for (var _e2 in Events) {
	              if (Events[_e2] && Events[_e2].el === _el3 && Events[_e2].callback === callback) {
	                Events[_e2].el.removeEventListener(Events[_e2].event, Events[_e2].callback);
	                delete Events[_e2];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError16 = true;
	          _iteratorError16 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion16 && _iterator16.return) {
	              _iterator16.return();
	            }
	          } finally {
	            if (_didIteratorError16) {
	              throw _iteratorError16;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion17 = true;
	        var _didIteratorError17 = false;
	        var _iteratorError17 = undefined;

	        try {
	          for (var _iterator17 = this[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
	            var _el4 = _step17.value;

	            for (var _e3 in Events) {
	              if (Events[_e3] && Events[_e3].el === _el4) {
	                Events[_e3].el.removeEventListener(Events[_e3].event, Events[_e3].callback);
	                delete Events[_e3];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError17 = true;
	          _iteratorError17 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion17 && _iterator17.return) {
	              _iterator17.return();
	            }
	          } finally {
	            if (_didIteratorError17) {
	              throw _iteratorError17;
	            }
	          }
	        }
	      }
	      Events = Events.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({
	          el: el,
	          callback: callback
	        });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          var _iteratorNormalCompletion18 = true;
	          var _didIteratorError18 = false;
	          var _iteratorError18 = undefined;

	          try {
	            for (var _iterator18 = blurList[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
	              var item = _step18.value;

	              var target = item.el.contains(e.target) || item.el === e.target;
	              if (!target) item.callback.call(item.el, e, item.el);
	            }
	          } catch (err) {
	            _didIteratorError18 = true;
	            _iteratorError18 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion18 && _iterator18.return) {
	                _iterator18.return();
	              }
	            } finally {
	              if (_didIteratorError18) {
	                throw _iteratorError18;
	              }
	            }
	          }
	        };
	        document.addEventListener('click', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        for (var e in blurList) {
	          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
	            delete blurList[e];
	          }
	        }
	      });
	      blurList = blurList.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);

	  return NodeList;
	}();

	var NL = NodeList.prototype;

	function flatten(arr, owner) {
	  var list = [];
	  var _iteratorNormalCompletion19 = true;
	  var _didIteratorError19 = false;
	  var _iteratorError19 = undefined;

	  try {
	    for (var _iterator19 = arr[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
	      var el = _step19.value;

	      if (el instanceof Node || el === null) {
	        if (!~list.indexOf(el)) list.push(el);
	      } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
	        var _iteratorNormalCompletion20 = true;
	        var _didIteratorError20 = false;
	        var _iteratorError20 = undefined;

	        try {
	          for (var _iterator20 = el[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
	            var el2 = _step20.value;
	            list.push(el2);
	          }
	        } catch (err) {
	          _didIteratorError20 = true;
	          _iteratorError20 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion20 && _iterator20.return) {
	              _iterator20.return();
	            }
	          } finally {
	            if (_didIteratorError20) {
	              throw _iteratorError20;
	            }
	          }
	        }
	      } else {
	        arr.get = NL.get;
	        arr.set = NL.set;
	        arr.call = NL.call;
	        arr.owner = owner;
	        return arr;
	      }
	    }
	  } catch (err) {
	    _didIteratorError19 = true;
	    _iteratorError19 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion19 && _iterator19.return) {
	        _iterator19.return();
	      }
	    } finally {
	      if (_didIteratorError19) {
	        throw _iteratorError19;
	      }
	    }
	  }

	  return new NodeList([list, owner]);
	}

	Object.getOwnPropertyNames(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && Symbol.iterator) {
	  NL[Symbol.iterator] = NL.values = ArrayProto[Symbol.iterator];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this3 = this,
	      _arguments = arguments;

	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion21 = true;
	      var _didIteratorError21 = false;
	      var _iteratorError21 = undefined;

	      try {
	        for (var _iterator21 = NL[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
	          var el = _step21.value;

	          if (el && el[prop] instanceof Function) {
	            el = el[prop].apply(el, _arguments);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError21 = true;
	        _iteratorError21 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion21 && _iterator21.return) {
	            _iterator21.return();
	          }
	        } finally {
	          if (_didIteratorError21) {
	            throw _iteratorError21;
	          }
	        }
	      }

	      return returnThis ? _this3 : flatten(arr, _this3);
	    };
	  } else {
	    Object.defineProperty(NL, prop, {
	      get: function get() {
	        var arr = [];
	        var _iteratorNormalCompletion22 = true;
	        var _didIteratorError22 = false;
	        var _iteratorError22 = undefined;

	        try {
	          for (var _iterator22 = this[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
	            var el = _step22.value;

	            if (el !== null) {
	              el = el[prop];
	            }
	            arr.push(el);
	          }
	        } catch (err) {
	          _didIteratorError22 = true;
	          _iteratorError22 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion22 && _iterator22.return) {
	              _iterator22.return();
	            }
	          } finally {
	            if (_didIteratorError22) {
	              throw _iteratorError22;
	            }
	          }
	        }

	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        var _iteratorNormalCompletion23 = true;
	        var _didIteratorError23 = false;
	        var _iteratorError23 = undefined;

	        try {
	          for (var _iterator23 = this[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
	            var el = _step23.value;

	            if (el && prop in el) {
	              el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError23 = true;
	          _iteratorError23 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion23 && _iterator23.return) {
	              _iterator23.return();
	            }
	          } finally {
	            if (_didIteratorError23) {
	              throw _iteratorError23;
	            }
	          }
	        }
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  return new NodeList(arguments);
	}
	window.NL = NodeListJS;

	exports.default = NodeListJS;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//获取元素除边框以外的高度和宽度
	function widthAndHeight(ele) {
		var computedStyle = document.defaultView.getComputedStyle(ele, null),
		    left = computedStyle.borderLeftWidth,
		    right = computedStyle.borderRightWidth,
		    top = computedStyle.borderTopWidth,
		    bottom = computedStyle.borderBottomWidth,
		    width = computedStyle.width,
		    height = computedStyle.height,
		    overflow = computedStyle.overflow;

		var surfixH = computedStyle.boxSizing === 'border-box' ? parseFloat(left) + parseFloat(right) : 0,
		    surfixV = computedStyle.boxSizing === 'border-box' ? parseFloat(top) + parseFloat(bottom) : 0;

		return {
			width: parseFloat(width) - surfixH,
			height: parseFloat(height) - surfixV,
			overflow: overflow
		};
	}

	exports.widthAndHeight = widthAndHeight;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function getComputedStyle(ele) {
		var computedStyle = document.defaultView.getComputedStyle(ele, null);

		return computedStyle;
	}

	exports.getComputedStyle = getComputedStyle;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.imgProp = undefined;

	var _createAndSet = __webpack_require__(7);

	function imgProp($wraper, srcP, data) {
		var img = new Image();

		img.src = data.src;

		$wraper.style.backgroundImage = 'url(' + srcP + ')';
		$wraper.classList.add('puzzle-img-wraper');

		//创建标题,描述
		var title = (0, _createAndSet.createAndSet)({}, 'title', data.title),
		    desc = (0, _createAndSet.createAndSet)({}, 'desc', data.desc);
		//插入标题
		$wraper.appendChild(title);
		$wraper.appendChild(desc);

		if (this._classSpace.imgWraper !== '') {
			$wraper.classList.add(this._classSpace.imgWraper);
		}

		img.onload = function () {
			$wraper.style.backgroundImage = 'url(' + data.src + ')';
		};
	}
	exports.imgProp = imgProp;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * 创建新的DIV，设置相应属性，添加class
	 * @param  {Object} obj 样式设置对象
	 * @param  {String} cla className
	 * @return {HTMLElement}     
	 */
	function createAndSet(obj) {
		var cla = arguments.length <= 1 || arguments[1] === undefined ? 'img_wraper' : arguments[1];
		var data = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

		var image_wraper = document.createElement('div');

		image_wraper.classList.add(cla);
		image_wraper.innerHTML = data;

		if (obj) {
			for (var str in obj) {
				image_wraper.style[str] = obj[str];
			}
		}

		return image_wraper;
	}

	exports.createAndSet = createAndSet;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Waterfall = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _layout = __webpack_require__(2);

	var _createAndSet = __webpack_require__(7);

	var _waterfall_image_prop = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * 初始化生成列对象数组
	 * @param  {number} colNum - 列数
	 * @return {Object[]} 所有列对象的数组
	 */
	function colMap(colNum) {
		var result = [];
		for (var i = 0; i < colNum; i++) {
			result.push({ cur: 0, el: null });
		}
		return result;
	}
	/** 
	 * 瀑布流布局类
	 * @extends Layout
	 */

	var Waterfall = function (_Layout) {
		_inherits(Waterfall, _Layout);

		/**
	  * @param {Object} obj - 配置对象
	  * @param {string} obj.gutter - 图片的间隙大小
	  * @param {number} obj.colNum - 列数
	  */
		function Waterfall(obj) {
			_classCallCheck(this, Waterfall);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Waterfall).call(this, obj));

			_this._colNum = obj.colNum || 4;
			_this._gutter = obj.gutter || '10px';

			_this._colMap = colMap(_this._colNum);
			return _this;
		}
		/** 渲染动作 */


		_createClass(Waterfall, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				_get(Object.getPrototypeOf(Waterfall.prototype), 'render', this).call(this);
				//计算每个wraper的宽度
				var perWidth = (this.$parent._innerW - (this._colNum + 1) * parseFloat(this._gutter)) / this._colNum;

				//创建列，并插入dom
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this._colMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						item.el = (0, _createAndSet.createAndSet)({ width: perWidth + 'px', marginLeft: this._gutter }, 'waterfall-col');
						this.$el.appendChild(item.el);
					}

					//遍历pics
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				this._pics.forEach(function (item, index) {
					(0, _waterfall_image_prop.imgProp)(item, _this2, perWidth);
				});
			}
			/**
	   * 设置图片间隙
	   * @param {String} gutter
	   */

		}, {
			key: 'setGutter',
			value: function setGutter() {
				var gutter = arguments.length <= 0 || arguments[0] === undefined ? '10px' : arguments[0];


				if (typeof gutter !== 'string') throw new TypeError('the setGutter requires a string like 15px');else if (!/^\d+px$/.test(gutter)) throw new TypeError('the setGutter requires a string like 15px');

				this._gutter = parseFloat(gutter) <= 0 ? '10px' : gutter;
			}
			/**
	   * 设置布局的列数
	   * @param {Number} colNum
	   */

		}, {
			key: 'setColNum',
			value: function setColNum() {
				var colNum = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];

				if (typeof colNum !== 'number') throw new TypeError('the setColNum() requires a number');
				colNum = colNum <= 0 ? 4 : colNum;
				this._colNum = colNum;
				this._colMap = colMap(colNum);
			}
		}]);

		return Waterfall;
	}(_layout.Layout);

	exports.Waterfall = Waterfall;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.imgProp = undefined;

	var _findShortest = __webpack_require__(10);

	var _createAndSet = __webpack_require__(7);

	function imgProp(data, info, perW) {
		var img = new Image();

		img.src = data.src;

		img.style.width = '100%';
		//创建wraper,标题,描述
		var $wraper = (0, _createAndSet.createAndSet)({ width: perW + 'px', marginBottom: info._gutter }, 'waterfall-img-wraper'),
		    title = (0, _createAndSet.createAndSet)({}, 'title', data.title),
		    desc = (0, _createAndSet.createAndSet)({}, 'desc', data.desc);

		//插入标题
		$wraper.appendChild(title);
		$wraper.appendChild(desc);

		if (info._classSpace.imgWraper !== '') {
			$wraper.classList.add(info._classSpace.imgWraper);
		}

		info._wrapers.push($wraper);
		img.onload = function () {
			//寻找最短的一列
			var result = (0, _findShortest.findShortest)(info._colMap);

			$wraper.appendChild(this);

			result.el.appendChild($wraper);
			result.cur = result.el.offsetHeight;
		};
		return img;
	}

	exports.imgProp = imgProp;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//寻找最短的一列
	function findShortest(map) {
		var result = map[0];
		map.forEach(function (item, index) {
			result = result.cur > item.cur ? item : result;
		});
		return result;
	}

	exports.findShortest = findShortest;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Barrel = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _layout = __webpack_require__(2);

	var _barrelImageProp = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * 木桶布局类
	 * @extends Layout
	 */
	var Barrel = function (_Layout) {
		_inherits(Barrel, _Layout);

		/**
	  * @param  {Object}	obj - 配置对象
	  * @param {Number} obj.min 一行中最少图片数
	  * @param {Number} obj.max 一行中最多图片数
	  * @param {String} obj.avgH 每一行理想的高度
	  * @param {String} obj.gutter 图片之间的间隙距离
	  */
		function Barrel(obj) {
			_classCallCheck(this, Barrel);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Barrel).call(this, obj));

			_this._gutter = obj.gutter || '10px';
			_this._min = obj.min || 3;
			_this._max = obj.max || 5;
			_this._avgH = obj.avgH || 100;

			_this.$parent._innerW -= 30;

			var self = _this;

			_this._renderState = {
				num: 0,
				scale: 0,
				height: 0,
				stack: [],
				setHeight: function setHeight() {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = this.stack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;

							item.style.height = this.height + 'px';
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				},
				clean: function clean() {
					this.num = 0;
					this.scale = 0;
					this.height = 0;
					this.stack = [];
				},
				add: function add(scale, $wraper) {
					this.num++;
					this.scale += scale;
					this.height = (self.$parent._innerW - parseFloat(self._gutter) * (this.num + 1)) / this.scale;
					this.stack.push($wraper);
				}
			};
			_this.$el.className = 'barrel';
			return _this;
		}
		/** 渲染动作 */


		_createClass(Barrel, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				_get(Object.getPrototypeOf(Barrel.prototype), 'render', this).call(this);
				//每个图片具体的动作
				this._pics.forEach(function (item, index) {
					(0, _barrelImageProp.imgProp)(item, _this2);
				});
			}
			/**
	   * 设置图片间隙
	   * @param {String} gutter 图片之间的间隙大小
	   */

		}, {
			key: 'setGutter',
			value: function setGutter() {
				var gutter = arguments.length <= 0 || arguments[0] === undefined ? "10px" : arguments[0];

				if (typeof gutter !== 'string') throw new TypeError('the setGutter requires a string like 15px');else if (!/^\d+px$/.test(gutter)) throw new TypeError('the setGutter requires a string like 15px');

				this._gutter = parseFloat(gutter) <= 0 ? '10px' : gutter;
			}
			/**
	   * 设置一行图片的数量范围
	   * @param {Number} min 一行最少图片数 
	   * @param {Number} max 一行最多图片数
	   */

		}, {
			key: 'setColNums',
			value: function setColNums() {
				var min = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
				var max = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

				if (typeof min !== 'number' || typeof max !== 'number') throw new TypeError('the setColNums() arguments must be number');
				if (min > max) throw new Error('please check out your min and max . min less than max');
				this._min = min;
				this._max = max;
			}
		}]);

		return Barrel;
	}(_layout.Layout);

	exports.Barrel = Barrel;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.imgProp = undefined;

	var _createAndSet = __webpack_require__(7);

	function imgProp(data, info) {
		var img = new Image(),
		    gutter = info._gutter,
		    min = info._min,
		    max = info._max,
		    minH = info._minH,
		    maxH = info._maxH,
		    renderState = info._renderState,
		    parentW = info.$parent._innerW;

		img.src = data.src;

		var $wraper = (0, _createAndSet.createAndSet)({ marginLeft: gutter, marginBottom: gutter }, 'barrel-img-wraper'),
		    title = (0, _createAndSet.createAndSet)({}, 'title', data.title),
		    desc = (0, _createAndSet.createAndSet)({}, 'desc', data.desc);

		//插入标题
		$wraper.appendChild(title);
		$wraper.appendChild(desc);

		if (info._classSpace.imgWraper !== '') {
			$wraper.classList.add(info._classSpace.imgWraper);
		}

		info._wrapers.push($wraper);

		img.onload = function () {
			var num = renderState.num,
			    scale = this.width / this.height;

			this.style.height = '100%';

			$wraper.appendChild(this);

			if (num < min && num > 0) {
				notEnough(scale, $wraper);
			} else if (num === max) {
				Enough(scale, $wraper);
			} else if (num < max && num >= min) {
				choose(scale, $wraper);
			} else if (num === 0) {
				newLine(scale, $wraper);
			}
			info.$el.appendChild($wraper);
		};
		//情况2
		function notEnough(scale, $wraper) {
			//对renderState的添加操作
			renderState.add(scale, $wraper);
			//对当前renderState执行setHeight
			renderState.setHeight();
		}
		//情况3
		function Enough(scale, wraper) {
			//新的一行
			newLine(scale, wraper);
		}
		//情况4
		function choose(scale, wraper) {

			var testH = (parentW - parseFloat(gutter) * (renderState.num + 1)) / (renderState.scale + scale),
			    standard = Math.abs(testH - info._avgH) - Math.abs(renderState.height - info._avgH);

			if (standard > 0) {
				Enough(scale, wraper);
			} else {
				notEnough(scale, wraper);
			}
		}
		//情况5
		function newLine(scale, $wraper) {
			//对renderState执行清空操作
			renderState.clean();
			//对renderState执行添加操作
			renderState.add(scale, $wraper);
			//对renderState执行setHeight操作
			renderState.setHeight();
		}
	}
	exports.imgProp = imgProp;

/***/ }
/******/ ]);