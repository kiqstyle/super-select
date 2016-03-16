(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["SuperSelect"] = factory(require("React"), require("ReactDOM"));
	else
		root["SuperSelect"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var css = __webpack_require__(1);
	module.exports = __webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./SuperSelect.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./SuperSelect.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".super-select-container {\n  position: relative;\n  display: inline-block;\n  font-weight: 100;\n  text-transform: none; }\n\n.super-select-container + .super-select-container {\n  margin-left: 20px; }\n\n.super-select-content {\n  position: absolute;\n  background: white;\n  z-index: 100;\n  margin-top: -6px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.08);\n  min-width: 300px; }\n\n.super-select-options-search-container {\n  background: #f2f2f2;\n  padding: 15px 10px; }\n\n.super-select-actions {\n  margin: 0;\n  padding: 0;\n  background: #fafafa; }\n  .super-select-actions .super-select-action {\n    list-style: none;\n    color: #4B93BF;\n    padding: 3px 10px;\n    cursor: pointer;\n    display: block;\n    margin: 0; }\n    .super-select-actions .super-select-action .icon {\n      margin-right: 10px;\n      color: black;\n      color: silver; }\n    .super-select-actions .super-select-action:hover {\n      color: #326a8c; }\n      .super-select-actions .super-select-action:hover .icon {\n        color: black; }\n\n.super-select-options-list {\n  padding: 0;\n  margin: 0;\n  max-height: 300px;\n  overflow: auto; }\n\n.super-select-options-list-item {\n  list-style: none;\n  padding: 0; }\n  .super-select-options-list-item label {\n    display: block;\n    padding: 5px 10px;\n    cursor: pointer;\n    margin: 0;\n    transition: all ease-in .1s;\n    text-transform: none; }\n    .super-select-options-list-item label input[type=\"checkbox\"] {\n      margin-right: 5px;\n      vertical-align: middle; }\n  .super-select-options-list-item.not-found {\n    padding: 10px;\n    color: #999; }\n\n.super-select-options-list-item label:hover,\n.super-select-options-list-item.hover label {\n  background: #b5eaed; }\n\n.super-select-button {\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  cursor: pointer; }\n  .super-select-button:hover, .super-select-button.open {\n    border: 1px solid #ccc;\n    background: #fefefe; }\n  .super-select-button:after {\n    font-family: 'Glyphicons Halflings';\n    content: \"\\E252\";\n    opacity: .4;\n    font-size: 11px;\n    margin-left: 5px; }\n  .super-select-button.open:after {\n    content: \"\\E253\"; }\n\n.super-select-button-label-value {\n  font-weight: bold;\n  text-transform: none; }\n  .super-select-button-label-value:after {\n    content: \", \"; }\n  .super-select-button-label-value:last-child:after {\n    content: \"\"; }\n  .super-select-button-label-value:nth-last-child(2):after {\n    content: \" e \"; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(6);
	var ReactDOM = __webpack_require__(7);
	var Fuse = __webpack_require__(8);

	var SuperSelect = React.createClass({
	    displayName: "SuperSelect",

	    getDefaultProps: function getDefaultProps() {
	        "use strict";

	        return {
	            label: "",
	            selecteds: [],
	            multiple: true,
	            valueLink: false,
	            options: [],
	            groups: []
	        };
	    },

	    getInitialState: function getInitialState() {
	        "use strict";

	        return {
	            open: false,
	            pseudoHover: null,
	            q: ""
	        };
	    },

	    getOptions: function getOptions() {
	        "use strict";

	        var options = this.props.options || [];
	        var q = this.state.q;
	        var fuse = new Fuse(options, {
	            keys: ["name"],
	            threshold: 0.4
	        });

	        if (!q.length) {
	            return options;
	        }

	        return fuse.search(q);
	    },

	    getValue: function getValue() {
	        "use strict";

	        return this.props.valueLink.value || [];
	    },

	    buildbutton: function buildbutton() {
	        "use strict";

	        var className = "super-select-button" + (this.state.open ? " open" : "");
	        var text = [];
	        text.push(React.createElement(
	            "span",
	            { className: "super-select-button-label" },
	            this.props.label
	        ));
	        if (this.getValue().length) {
	            text.push(": ");

	            if (this.getValue().length === this.getOptions().length) {
	                text.push(React.createElement(
	                    "span",
	                    { className: "super-select-button-label-value" },
	                    "todos"
	                ));
	            } else {
	                this.getValue().map(function (item) {
	                    text.push(React.createElement(
	                        "span",
	                        { className: "super-select-button-label-value" },
	                        item.name
	                    ));
	                });
	            }
	        }

	        return React.createElement(
	            "label",
	            { className: "super-select-button " + (this.state.open ? "open" : ""),
	                onClick: this.open
	            },
	            text
	        );
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        "use strict";

	        if (this.state.open) {
	            this.refs.q.focus();
	        }
	    },

	    open: function open() {
	        "use strict";

	        this.setState({ open: !this.state.open });
	    },

	    isChecked: function isChecked(item, returnIndex) {
	        "use strict";

	        var index = false;
	        var found = this.getValue().filter(function (option, i) {
	            if (item.id === option.id) {
	                index = i;
	                return true;
	            }
	        }).length > 0;

	        return returnIndex ? index : found;
	    },

	    handleChange: function handleChange(item) {
	        "use strict";

	        var value = this.getValue();
	        var current = this.isChecked(item, true);
	        if (current !== false) {
	            value.splice(current, 1);
	        } else {
	            value.push(item);
	        }

	        this.props.valueLink.requestChange(value);
	    },

	    clean: function clean() {
	        "use strict";

	        this.props.valueLink.requestChange([]);
	    },

	    selectAll: function selectAll() {
	        "use strict";

	        this.props.valueLink.requestChange(this.getOptions());
	    },

	    handleChangeQ: function handleChangeQ(event) {
	        "use strict";

	        this.setState({
	            q: event.target.value,
	            pseudoHover: null
	        });
	    },

	    handleNavigationKeys: function handleNavigationKeys(e) {
	        "use strict";

	        var currentPosition = this.state.pseudoHover;
	        var isEnter = e.key === "Enter";

	        if (isEnter && !isNaN(currentPosition)) {
	            this.handleChange(this.getOptions()[currentPosition]);
	        }

	        switch (e.key) {
	            case "ArrowUp":
	                currentPosition = !currentPosition ? 0 : currentPosition - 1;
	                break;
	            case "ArrowDown":
	                currentPosition = currentPosition + 1 === this.getOptions().length ? currentPosition : currentPosition + 1;
	                break;
	        }

	        this.setState({
	            pseudoHover: currentPosition
	        });
	    },

	    buildOptions: function buildOptions() {
	        "use strict";

	        var self = this;
	        if (this.state.open) {
	            return React.createElement(
	                "div",
	                { className: "super-select-options-container",
	                    onKeyUp: this.handleNavigationKeys
	                },
	                React.createElement(
	                    "div",
	                    { className: "super-select-options-search-container" },
	                    React.createElement("input", {
	                        type: "search",
	                        value: this.state.q,
	                        onChange: this.handleChangeQ,
	                        placeholder: "Digite para filtrar opção...",
	                        ref: "q"
	                    })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "super-select-actions" },
	                    React.createElement(
	                        "span",
	                        { className: "super-select-action", onClick: this.selectAll },
	                        "Selecionar todos"
	                    ),
	                    React.createElement(
	                        "span",
	                        { className: "super-select-action", onClick: this.clean },
	                        "Limpar seleção"
	                    )
	                ),
	                React.createElement(
	                    "ul",
	                    { className: "super-select-options-list" },
	                    function () {
	                        var options = self.getOptions();
	                        if (!options.length) {
	                            return React.createElement(
	                                "li",
	                                { className: "super-select-options-list-item not-found" },
	                                "Nada encontrado :/"
	                            );
	                        }

	                        return options.map(function (item, index) {
	                            var className = "super-select-options-list-item";
	                            if (index === self.state.pseudoHover) {
	                                className += " hover";
	                            }
	                            return React.createElement(
	                                "li",
	                                { key: index, className: className },
	                                React.createElement(
	                                    "label",
	                                    null,
	                                    React.createElement("input", {
	                                        type: "checkbox",
	                                        checked: self.isChecked(item),
	                                        onChange: self.handleChange.bind(null, item)
	                                    }),
	                                    item.name
	                                )
	                            );
	                        });
	                    }()
	                )
	            );
	        }
	    },

	    render: function render() {
	        "use strict";

	        return React.createElement(
	            "div",
	            { className: "super-select-container" },
	            this.buildbutton(),
	            this.buildOptions()
	        );
	    }
	});

	module.exports = SuperSelect;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Fuse - Lightweight fuzzy-search
	 *
	 * Copyright (c) 2012 Kirollos Risk <kirollos@gmail.com>.
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	(function(global) {

	  /**
	   * Adapted from "Diff, Match and Patch", by Google
	   *
	   *   http://code.google.com/p/google-diff-match-patch/
	   *
	   * Modified by: Kirollos Risk <kirollos@gmail.com>
	   * -----------------------------------------------
	   * Details: the algorithm and structure was modified to allow the creation of
	   * <Searcher> instances with a <search> method which does the actual
	   * bitap search. The <pattern> (the string that is searched for) is only defined
	   * once per instance and thus it eliminates redundant re-creation when searching
	   * over a list of strings.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License");
	   * you may not use this file except in compliance with the License.
	   */
	  var BitapSearcher = function(pattern, options) {
	    options = options || {};
	    this.options = options;
	    this.options.location = options.location || BitapSearcher.defaultOptions.location;
	    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance;
	    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold;
	    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength;

	    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
	    this.patternLen = pattern.length;

	    if (this.patternLen > this.options.maxPatternLength) {
	      throw new Error('Pattern length is too long');
	    }

	    this.matchmask = 1 << (this.patternLen - 1);
	    this.patternAlphabet = this._calculatePatternAlphabet();
	  };

	  BitapSearcher.defaultOptions = {
	    // Approximately where in the text is the pattern expected to be found?
	    location: 0,

	    // Determines how close the match must be to the fuzzy location (specified above).
	    // An exact letter match which is 'distance' characters away from the fuzzy location
	    // would score as a complete mismatch. A distance of '0' requires the match be at
	    // the exact location specified, a threshold of '1000' would require a perfect match
	    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    distance: 100,

	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	    // (of both letters and location), a threshold of '1.0' would match anything.
	    threshold: 0.6,

	    // Machine word size
	    maxPatternLength: 32
	  };

	  /**
	   * Initialize the alphabet for the Bitap algorithm.
	   * @return {Object} Hash of character locations.
	   * @private
	   */
	  BitapSearcher.prototype._calculatePatternAlphabet = function() {
	    var mask = {},
	      i = 0;

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] = 0;
	    }

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1);
	    }

	    return mask;
	  };

	  /**
	   * Compute and return the score for a match with `e` errors and `x` location.
	   * @param {number} errors Number of errors in match.
	   * @param {number} location Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  BitapSearcher.prototype._bitapScore = function(errors, location) {
	    var accuracy = errors / this.patternLen,
	      proximity = Math.abs(this.options.location - location);

	    if (!this.options.distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy;
	    }
	    return accuracy + (proximity / this.options.distance);
	  };

	  /**
	   * Compute and return the result of the search
	   * @param {String} text The text to search in
	   * @return {Object} Literal containing:
	   *                          {Boolean} isMatch Whether the text is a match or not
	   *                          {Decimal} score Overall score for the match
	   * @public
	   */
	  BitapSearcher.prototype.search = function(text) {
	    text = this.options.caseSensitive ? text : text.toLowerCase();

	    if (this.pattern === text) {
	      // Exact match
	      return {
	        isMatch: true,
	        score: 0
	      };
	    }

	    var i, j,
	      // Set starting location at beginning text and initialize the alphabet.
	      textLen = text.length,
	      LOCATION = this.options.location,
	      // Highest score beyond which we give up.
	      THRESHOLD = this.options.threshold,
	      // Is there a nearby exact match? (speedup)
	      bestLoc = text.indexOf(this.pattern, LOCATION),
	      binMin, binMid,
	      binMax = this.patternLen + textLen,
	      start, finish,
	      bitArr, lastBitArr,
	      charMatch,
	      score = 1,
	      locations = [];

	    if (bestLoc != -1) {
	      THRESHOLD = Math.min(this._bitapScore(0, bestLoc), THRESHOLD);
	      // What about in the other direction? (speedup)
	      bestLoc = text.lastIndexOf(this.pattern, LOCATION + this.patternLen);

	      if (bestLoc != -1) {
	        THRESHOLD = Math.min(this._bitapScore(0, bestLoc), THRESHOLD);
	      }
	    }

	    bestLoc = -1;

	    for (i = 0; i < this.patternLen; i++) {
	      // Scan for the best match; each iteration allows for one more error.
	      // Run a binary search to determine how far from 'MATCH_LOCATION' we can stray at this
	      // error level.
	      binMin = 0;
	      binMid = binMax;
	      while (binMin < binMid) {
	        if (this._bitapScore(i, LOCATION + binMid) <= THRESHOLD) {
	          binMin = binMid;
	        } else {
	          binMax = binMid;
	        }
	        binMid = Math.floor((binMax - binMin) / 2 + binMin);
	      }

	      // Use the result from this iteration as the maximum for the next.
	      binMax = binMid;
	      start = Math.max(1, LOCATION - binMid + 1);
	      finish = Math.min(LOCATION + binMid, textLen) + this.patternLen;

	      // Initialize the bit array
	      bitArr = Array(finish + 2);

	      bitArr[finish + 1] = (1 << i) - 1;

	      for (j = finish; j >= start; j--) {
	        // The alphabet <patternAlphabet> is a sparse hash, so the following line generates warnings.
	        charMatch = this.patternAlphabet[text.charAt(j - 1)];

	        if (i === 0) {
	          // First pass: exact match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;
	        } else {
	          // Subsequent passes: fuzzy match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch | (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1];
	        }
	        if (bitArr[j] & this.matchmask) {
	          score = this._bitapScore(i, j - 1);
	          // This match will almost certainly be better than any existing match.
	          // But check anyway.
	          if (score <= THRESHOLD) {
	            // Told you so.
	            THRESHOLD = score;
	            bestLoc = j - 1;
	            locations.push(bestLoc);

	            if (bestLoc > LOCATION) {
	              // When passing loc, don't exceed our current distance from loc.
	              start = Math.max(1, 2 * LOCATION - bestLoc);
	            } else {
	              // Already passed loc, downhill from here on in.
	              break;
	            }
	          }
	        }
	      }

	      // No hope for a (better) match at greater error levels.
	      if (this._bitapScore(i + 1, LOCATION) > THRESHOLD) {
	        break;
	      }
	      lastBitArr = bitArr;
	    }

	    return {
	      isMatch: bestLoc >= 0,
	      score: score
	    };
	  };

	  var deepValueHelper = function(obj, path, list) {
	    var firstSegment, remaining, dotIndex;

	    if (!path) {
	      // If there's no path left, we've gotten to the object we care about.
	      list.push(obj);
	    } else {
	      dotIndex = path.indexOf('.');
	      if (dotIndex !== -1) {
	        firstSegment = path.slice(0, dotIndex);
	        remaining = path.slice(dotIndex + 1);
	      } else {
	        firstSegment = path;
	      }

	      var value = obj[firstSegment];
	      if (value) {
	        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
	          list.push(value);
	        } else if (Utils.isArray(value)) {
	          // Search each item in the array.
	          for (var i = 0, len = value.length; i < len; i++) {
	            deepValueHelper(value[i], remaining, list);
	          }
	        } else if (remaining) {
	          // An object. Recurse further.
	          deepValueHelper(value, remaining, list);
	        }
	      }
	    }

	    return list;
	  };

	  var Utils = {
	    /**
	     * Traverse an object
	     * @param {Object} obj The object to traverse
	     * @param {String} path A . separated path to a key in the object. Example 'Data.Object.Somevalue'
	     * @return {Object}
	     */
	    deepValue: function(obj, path) {
	      return deepValueHelper(obj, path, []);
	    },
	    isArray: function(obj) {
	      return Object.prototype.toString.call(obj) === '[object Array]';
	    }
	  };

	  /**
	   * @param {Array} list
	   * @param {Object} options
	   * @public
	   */
	  function Fuse(list, options) {
	    this.list = list;
	    this.options = options = options || {};

	    var i, len, key, keys;
	    // Add boolean type options
	    for (i = 0, keys = ['sort', 'shouldSort'], len = keys.length; i < len; i++) {
	      key = keys[i];
	      this.options[key] = key in options ? options[key] : Fuse.defaultOptions[key];
	    }
	    // Add all other options
	    for (i = 0, keys = ['searchFn', 'sortFn', 'keys', 'getFn', 'include'], len = keys.length; i < len; i++) {
	      key = keys[i];
	      this.options[key] = options[key] || Fuse.defaultOptions[key];
	    }
	  };

	  Fuse.defaultOptions = {
	    id: null,

	    caseSensitive: false,

	    // A list of values to be passed from the searcher to the result set.
	    // If include is set to ['score', 'highlight'], each result
	    //   in the list will be of the form: `{ item: ..., score: ..., highlight: ... }`
	    include: [],

	    // Whether to sort the result list, by score
	    shouldSort: true,

	    // The search function to use
	    // Note that the default search function ([[Function]]) must conform to the following API:
	    //
	    //  @param pattern The pattern string to search
	    //  @param options The search option
	    //  [[Function]].constructor = function(pattern, options)
	    //
	    //  @param text: the string to search in for the pattern
	    //  @return Object in the form of:
	    //    - isMatch: boolean
	    //    - score: Int
	    //  [[Function]].prototype.search = function(text)
	    searchFn: BitapSearcher,

	    // Default sort function
	    sortFn: function(a, b) {
	      return a.score - b.score;
	    },

	    // Default get function
	    getFn: Utils.deepValue,

	    keys: []
	  };

	  /**
	   * Sets a new list for Fuse to match against.
	   * @param {Array} list
	   * @return {Array} The newly set list
	   * @public
	   */
	  Fuse.prototype.set = function(list) {
	    this.list = list;

	    return list;
	  };

	  /**
	   * Searches for all the items whose keys (fuzzy) match the pattern.
	   * @param {String} pattern The pattern string to fuzzy search on.
	   * @return {Array} A list of all serch matches.
	   * @public
	   */
	  Fuse.prototype.search = function(pattern) {
	    var searcher = new(this.options.searchFn)(pattern, this.options),
	      j, item,
	      list = this.list,
	      dataLen = list.length,
	      options = this.options,
	      searchKeys = this.options.keys,
	      searchKeysLen = searchKeys.length,
	      bitapResult,
	      rawResults = [],
	      resultMap = {},
	      existingResult,
	      results = [];

	    /**
	     * Calls <Searcher::search> for bitap analysis. Builds the raw result list.
	     * @param {String} text The pattern string to fuzzy search on.
	     * @param {String|Number} entity If the <data> is an Array, then entity will be an index,
	     *                            otherwise it's the item object.
	     * @param {Number} index
	     * @private
	     */
	    var analyzeText = function(text, entity, index) {
	      // Check if the text can be searched
	      if (text === undefined || text === null) {
	        return;
	      }

	      if (typeof text === 'string') {

	        // Get the result
	        bitapResult = searcher.search(text);

	        // If a match is found, add the item to <rawResults>, including its score
	        if (bitapResult.isMatch) {

	          // Check if the item already exists in our results
	          existingResult = resultMap[index];
	          if (existingResult) {
	            // Use the lowest score
	            existingResult.score = Math.min(existingResult.score, bitapResult.score);
	          } else {
	            // Add it to the raw result list
	            resultMap[index] = {
	              item: entity,
	              score: bitapResult.score
	            };
	            rawResults.push(resultMap[index]);
	          }
	        }
	      } else if (Utils.isArray(text)) {
	        for (var i = 0; i < text.length; i++) {
	          analyzeText(text[i], entity, index);
	        }
	      }
	    };

	    // Check the first item in the list, if it's a string, then we assume
	    // that every item in the list is also a string, and thus it's a flattened array.
	    if (typeof list[0] === 'string') {
	      // Iterate over every item
	      for (var i = 0; i < dataLen; i++) {
	        analyzeText(list[i], i, i);
	      }
	    } else {
	      // Otherwise, the first item is an Object (hopefully), and thus the searching
	      // is done on the values of the keys of each item.

	      // Iterate over every item
	      for (var i = 0; i < dataLen; i++) {
	        item = list[i];
	        // Iterate over every key
	        for (j = 0; j < searchKeysLen; j++) {
	          analyzeText(options.getFn(item, searchKeys[j]), item, i);
	        }
	      }
	    }

	    if (options.shouldSort) {
	      rawResults.sort(options.sortFn);
	    }

	    // Helper function, here for speed-up, which replaces the item with its value,
	    // if the options specifies it,
	    var replaceValue = options.id ? function(i) {
	      rawResults[i].item = options.getFn(rawResults[i].item, options.id)[0];
	    } : function() {
	      return; // no-op
	    };

	    // Helper function, here for speed-up, which returns the
	    // item formatted based on the options.
	    var getItem = function(i) {
	      var resultItem;

	      if(options.include.length > 0) // If `include` has values, put the item under result.item
	      {
	        resultItem = {
	          item: rawResults[i].item,
	        };

	        // Then include the includes
	        for(var j = 0; j < options.include.length; j++)
	        {
	          var includeVal = options.include[j];
	          resultItem[includeVal] = rawResults[i][includeVal];
	        }
	      }
	      else
	      {
	        resultItem = rawResults[i].item;
	      }

	      return resultItem;
	    };

	    // From the results, push into a new array only the item identifier (if specified)
	    // of the entire item.  This is because we don't want to return the <rawResults>,
	    // since it contains other metadata;
	    for (var i = 0, len = rawResults.length; i < len; i++) {
	      replaceValue(i);
	      results.push(getItem(i));
	    }

	    return results;
	  };

	  // Export to Common JS Loader
	  if (true) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Fuse;
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(function() {
	      return Fuse;
	    });
	  } else {
	    // Browser globals (root is window)
	    global.Fuse = Fuse;
	  }

	})(this);


/***/ }
/******/ ])
});
;