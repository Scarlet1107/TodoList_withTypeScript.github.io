/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App = (__webpack_require__(/*! ../src/App */ \"./src/App.tsx\")[\"default\"]); // Reactのメインコンポーネントのパスを指定\n\nconst app = express();\napp.get('/', (req, res) => {\n  const app = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(App, null));\n  res.send(\"<html><body>\".concat(app, \"</body></html>\"));\n});\nconst PORT = process.env.PORT || 9000;\napp.listen(PORT, () => {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://todolist_typescript/./server/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction App() {\n  const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const handleChange = e => {\n    console.log(e.target.value);\n    setInputValue(e.target.value);\n  };\n  const handleSubmit = e => {\n    e.preventDefault();\n    if (!inputValue) return;\n    const newTodo = {\n      inputValue: inputValue,\n      id: todos.length,\n      checked: false\n    };\n    setTodos([...todos, newTodo]);\n    setInputValue(\"\");\n  };\n  const handleEdit = (id, inputValue) => {\n    const newTodos = todos.map(todo => {\n      if (todo.id === id) {\n        todo.inputValue = inputValue;\n      }\n      return todo;\n    });\n    setTodos(newTodos);\n  };\n  const handleChecked = (id, checked) => {\n    const newTodos = todos.map(todo => {\n      if (todo.id === id) {\n        todo.checked = !checked;\n      }\n      return todo;\n    });\n    setTodos(newTodos);\n  };\n  const handleDelete = id => {\n    const newTodos = todos.filter(todo => todo.id !== id);\n    setTodos(newTodos);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"text-4xl font-bold flex justify-center mt-12\"\n  }, \"Todo\\u30EA\\u30B9\\u30C8 with TypeScript ver 1.0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: e => handleSubmit(e),\n    className: \"flex justify-center mt-5 mb-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\",\n    type: \"text\",\n    value: inputValue,\n    onChange: e => handleChange(e),\n    placeholder: \"\\u30BF\\u30B9\\u30AF\\u3092\\u8FFD\\u52A0\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"submit\",\n    value: \"作成\",\n    className: \"ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"mt-5 space-y-4\"\n  }, todos.map(todo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: todo.id,\n    className: \"flex justify-center space-x-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\",\n    type: \"text\",\n    onChange: e => handleEdit(todo.id, e.target.value),\n    value: todo.inputValue,\n    disabled: todo.checked\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    onChange: () => handleChecked(todo.id, todo.checked),\n    className: \"form-checkbox h-5 w-5 text-blue-600\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => handleDelete(todo.id),\n    className: \"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\"\n  }, \"\\u6D88\")))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todolist_typescript/./src/App.tsx?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://todolist_typescript/./src/App.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;