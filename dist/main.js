/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/js/projects.js\");\nconst shortBio = document.querySelector(\".intro>p\");\r\nconst projectList = document.querySelector(\".project-list\");\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n\tshortBio.style.opacity = 1;\r\n});\r\n\r\n_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((project) => {\r\n\tconst projectDiv = document.createElement(\"div\");\r\n\tprojectDiv.classList.add(\"project-div\");\r\n\tprojectDiv.classList.add(project.className);\r\n\tconst projectContent = document.createElement(\"div\");\r\n\tprojectContent.classList.add(\"project-content\");\r\n\r\n\tconst projectName = document.createElement(\"h3\");\r\n\tprojectName.classList.add(\"project-name\");\r\n\tprojectName.textContent = project.name;\r\n\tprojectContent.appendChild(projectName);\r\n\r\n\tconst projectDesc = document.createElement(\"p\");\r\n\tprojectDesc.classList.add(\"project-desc\");\r\n\tprojectDesc.textContent = project.desc;\r\n\tprojectContent.appendChild(projectDesc);\r\n\r\n\tconst linkDiv = document.createElement(\"div\");\r\n\tlinkDiv.classList.add(\"link-div\");\r\n\r\n\tconst githubLink = document.createElement(\"a\");\r\n\tconst githubDiv = document.createElement(\"div\");\r\n\tgithubDiv.classList.add(\"github-div\");\r\n\tgithubLink.classList.add(\"github-link\");\r\n\tgithubLink.setAttribute(\"title\", \"Github Repo\");\r\n\tgithubLink.setAttribute(\"href\", project.ghLink);\r\n\tgithubLink.setAttribute(\"target\", \"_blank\");\r\n\r\n\tgithubLink.appendChild(githubDiv);\r\n\r\n\tif (project.demoLink) {\r\n\t\tconst demoLink = document.createElement(\"a\");\r\n\t\tconst demoDiv = document.createElement(\"div\");\r\n\t\tdemoDiv.classList.add(\"demo-div\");\r\n\t\tdemoLink.classList.add(\"demo-link\");\r\n\t\tdemoLink.setAttribute(\"href\", project.demoLink);\r\n\t\tdemoLink.setAttribute(\"title\", \"Live Demo\");\r\n\t\tdemoLink.setAttribute(\"target\", \"_blank\");\r\n\t\tdemoLink.appendChild(demoDiv);\r\n\t\tlinkDiv.appendChild(demoLink);\r\n\t}\r\n\r\n\tlinkDiv.appendChild(githubLink);\r\n\r\n\tprojectDiv.appendChild(projectContent);\r\n\tprojectContent.appendChild(linkDiv);\r\n\tprojectList.appendChild(projectDiv);\r\n});\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/UI.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/UI.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/js/projects.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/index.js?");

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = [\r\n\t{\r\n\t\tname: \"To-Do-List\",\r\n\t\tclassName: \"todo\",\r\n\t\tdesc: \"A project and task manager to keep track of our busy lives\",\r\n\t\tghLink: \"https://github.com/irao12/to-do-list\",\r\n\t\tdemoLink: \"https://irao12.github.io/to-do-list/\",\r\n\t},\r\n\t{\r\n\t\tname: \"Show Me the Sunny\",\r\n\t\tclassName: \"weather\",\r\n\t\tdesc: \"A web app to show the current weather of a location\",\r\n\t\tghLink: \"https://github.com/irao12/weather-app/\",\r\n\t\tdemoLink: \"https://irao12.github.io/weather-app/\",\r\n\t},\r\n\t{\r\n\t\tname: \"Etch-a-Sketch\",\r\n\t\tclassName: \"etch\",\r\n\t\tdesc: \"A web app to have fun and draw anything you like on the etch-a-sketch\",\r\n\t\tghLink: \"https://github.com/irao12/etch-a-sketch/\",\r\n\t\tdemoLink: \"https://irao12.github.io/etch-a-sketch/\",\r\n\t},\r\n\t{\r\n\t\tname: \"Caesar Cipher Solver\",\r\n\t\tclassName: \"caesar\",\r\n\t\tdesc: \"A program that deciphers caesar ciphers with the help of literature\",\r\n\t\tghLink: \"https://github.com/irao12/caesar-cipher-solver\",\r\n\t},\r\n\t{\r\n\t\tname: \"Connect Four\",\r\n\t\tclassName: \"connect-four\",\r\n\t\tdesc: \"The classic game of connect four created with Python and PyGame\",\r\n\t\tghLink: \"https://github.com/irao12/connect_four\",\r\n\t},\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/projects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;