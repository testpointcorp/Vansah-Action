/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 264:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 353:
/***/ ((module) => {

module.exports = eval("require")("axios");


/***/ }),

/***/ 399:
/***/ ((module) => {

module.exports = eval("require")("form-data");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(264); //ES5
const axios = (__nccwpck_require__(353)["default"]);
const FormData = __nccwpck_require__(399);
const fs = __nccwpck_require__(147);

const vansahConnectToken = core.getInput('vansahConnectToken');
const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');

const apiUrl = "https://vtrunk.vansahnode.app";
const nodeApiVersion = "v1";


let bodyFormData = new FormData();
bodyFormData.append('testFormat', testFormat);
bodyFormData.append('testPaths', fs.createReadStream(testPaths));



axios({
    method: "post",
    url: apiUrl+"/api/"+nodeApiVersion+"/testCase/import/XML",
    data: bodyFormData,
    headers: { "Authorization": vansahConnectToken , "Content-Type": "multipart/form-data" },
  })
  .then(function (response) {
    core.setOutput(response.data.message);
  })
  .catch(function (error) {
    core.setFailed(error.response.data.message);
    
  });
})();

module.exports = __webpack_exports__;
/******/ })()
;