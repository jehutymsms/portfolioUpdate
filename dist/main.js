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

/***/ "./src/backgroundSection.js":
/*!**********************************!*\
  !*** ./src/backgroundSection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backgroundSection\": () => (/* binding */ backgroundSection)\n/* harmony export */ });\n/* harmony import */ var _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/earth.mp4 */ \"./src/video/earth.mp4\");\n\nconst backgroundSection =(() => {\n    const cacheDom = (() => {\n        let body = document.getElementsByTagName('body')\n        return { body: body };\n    })();\n    // Background Object List \n    const backgroundTextObject = {\n        backgroundTags: ['section', 'video'],\n        section: {\n            id: 'backgroundSection',\n        },\n        video: {\n            id: 'earth',\n            muted: true,\n            loop: true,\n            autoplay: true,\n            src: _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__,\n        },\n    };\n\n    //Return an object list of the elements\n    const backgroundElementList = (objectlist) => {\n        let list = {};\n        for (let i = 0; i < objectlist.backgroundTags.length; i++) {\n            let backgroundItem = objectlist[objectlist.backgroundTags[i]]\n                let element = newElement({\n                    tag: objectlist.backgroundTags[i],\n                    id: backgroundItem.id,\n                    muted: backgroundItem.muted,\n                    loop: backgroundItem.loop,\n                    autoplay: backgroundItem.autoplay,\n                    src: backgroundItem.src,\n                });\n\n            list[`${objectlist.backgroundTags[i]}`] = element;\n        };\n        return list;\n    };\n\n    // Main Background Section\n    const backgroundSection = () => {\n        let backgroundItems = backgroundElementList(backgroundTextObject),\n        section = backgroundItems.section,\n        video = backgroundItems.video\n\n        \n        section.appendChild(video);\n\n        render.bodyAppendChild(section);\n    };\n\n    // Function List\n    const newElement = (item) => {\n        let element = document.createElement(item.tag);\n\n        if (item.id) { element.id = item.id; };\n        if (item.muted) { element.muted = item.muted; };\n        if (item.loop) { element.loop = item.loop; };\n        if (item.autoplay) { element.autoplay = item.autoplay; };\n        if (item.src) { element.src = item.src; };\n        return element;\n    };\n\n    // Render to DOM\n    const render = (() => {\n        const bodyAppendChild = (element) =>{\n            cacheDom.body[0].appendChild(element);\n        };\n\n        return {bodyAppendChild: bodyAppendChild };\n    })();\n    \n    return {backgroundSection:backgroundSection}\n})()\n\n//# sourceURL=webpack://portfolio/./src/backgroundSection.js?");

/***/ }),

/***/ "./src/contactSection.js":
/*!*******************************!*\
  !*** ./src/contactSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactSection\": () => (/* binding */ contactSection)\n/* harmony export */ });\nconst contactSection = (() => {\n    const cacheDom = (() => {\n        let body = document.getElementsByTagName('body')\n        return { body: body };\n    })();\n\n    // Contact Object List \n    const contactTextObject = {\n        conntactTags: ['section', 'h1','h2','h3','a','footer'],\n        section: {\n            id: 'contact',\n            classId:'contact-section',\n        },\n        h1: {\n            htmlString: 'Contact Me',\n        },\n        h2: {\n            id: 'e-mail',\n            htmlString: 'E-mail: andrewhumphrieswork@outlook.com',\n        },\n        h3: {\n            id: 'github',\n        },\n        a: {\n            href: 'https://github.com/jehutymsms',\n            target: '_blank',\n            htmlString: 'GitHub Link',\n        },\n        footer: {\n            id: 'footer',\n            htmlString: 'Created by Andrew Humphries',\n        },\n    };\n\n    //Return an object list of the elements\n    const contactElementList = (objectlist) => {\n        let list = {};\n        for (let i = 0; i < objectlist.conntactTags.length; i++) {\n            let contactItem = objectlist[objectlist.conntactTags[i]]\n                let element = newElement({\n                    tag: objectlist.conntactTags[i],\n                    id: contactItem.id,\n                    classId: contactItem.classId,\n                    htmlString: contactItem.htmlString,\n                    href: contactItem.href,\n                    target: contactItem.target,\n                });\n\n            list[`${objectlist.conntactTags[i]}`] = element;\n        };\n        return list;\n    };\n\n    // Main Background Section\n    const contactSection = () => {\n        let contactItems = contactElementList(contactTextObject),\n        section = contactItems.section,\n        h1 = contactItems.h1,\n        h2 = contactItems.h2,\n        h3 = contactItems.h3,\n        a = contactItems.a,\n        footer = contactItems.footer,\n        elementList = [h1,h2,h3,footer]\n\n        h3.appendChild(a)\n\n        for(let i=0;i<elementList.length;i++){\n            section.appendChild(elementList[i])\n        }\n\n        render.bodyAppendChild(section);\n    };\n\n    // Function List\n    const newElement = (item) => {\n        let element = document.createElement(item.tag);\n\n        if (item.id) { element.id = item.id; };\n        if (item.classId) { element.classList = item.classId; };\n        if (item.href) { element.href = item.href; };\n        if (item.target) { element.target = item.target; };\n        if (item.htmlString) { element.innerHTML = item.htmlString; };\n        return element;\n    };\n\n    // Render to DOM\n    const render = (() => {\n        const bodyAppendChild = (element) =>{\n            cacheDom.body[0].appendChild(element);\n        };\n\n        return {bodyAppendChild: bodyAppendChild };\n    })();\n    return {contactSection:contactSection}\n})()\n\n//# sourceURL=webpack://portfolio/./src/contactSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _welcomeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomeSection */ \"./src/welcomeSection.js\");\n/* harmony import */ var _backgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundSection */ \"./src/backgroundSection.js\");\n/* harmony import */ var _contactSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactSection */ \"./src/contactSection.js\");\n\n\n\n\n\n\n\n\nconst newElement = (item) => {\n    let element = document.createElement(item.tag);\n    if (item.classId) { element.classList = item.classId; };\n    if (item.id) { element.id = item.id; };\n    if (item.htmlString) { element.innerHTML = item.htmlString; };\n    if (item.src){element.src = element.src;};\n    if (item.loop){element.loop = element.loop;};\n    if (item.autoplay ){element.autoplay  = element.autoplay ;};\n    if (item.alt ){element.alt  = element.alt ;};\n    if (item.href ){element.href  = element.href ;};\n    if (item.target){element.target  = element.target ;};\n    return element;\n}\n\n\n// backgroundSection.backgroundSection()\n// navBar.navBarSection()\n// welcomeSection.welcomeSection()\n// contactSection.contactSection()\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\nconst navBar = (() => {\n    const cacheDom = (() => {\n        let body = document.getElementsByTagName('body')\n        return { body: body };\n    })();\n\n    // Nav bar Object\n    const navText = {\n        navTitles: ['aboutPage', 'projectPage', 'contactPage'],\n        aboutPage: {\n            id: 'aboutPage',\n            text: 'About'\n        },\n        projectPage: {\n            id: 'projectPage',\n            text: 'Projects'\n        },\n        contactPage: {\n            id: 'contactPage',\n            text: 'Contact'\n        },\n    };\n\n    const navBarList = (objectlist) => {\n        let list = {};\n\n        for (let i = 0; i < objectlist.navTitles.length; i++) {\n            let navItem = objectlist[objectlist.navTitles[i]],\n                element = newElement({\n                    tag: 'div',\n                    id: navItem.id,\n                    htmlString: navItem.text,\n                });\n            list[`item${i}`] = element;\n        };\n        return list;\n    };\n\n    // Main Nav Bar\n    const navBarSection = () => {\n        let element = newElement({\n            tag: 'nav',\n            id: 'navbar',\n            classId: 'navbar',\n        }),\n            navItems = navBarList(navText);\n\n        for (let x = 0; x < Object.keys(navItems).length; x++) {\n            element.appendChild(navItems[`item${x}`]);\n        };\n\n        render.bodyAppendChild(element);\n    };\n\n    // Function List\n    const newElement = (item) => {\n        let element = document.createElement(item.tag);\n        if (item.classId) { element.classList = item.classId; };\n        if (item.id) { element.id = item.id; };\n        if (item.htmlString) { element.innerHTML = item.htmlString; };\n        return element;\n    };\n\n    // Render to DOM\n    const render = (() => {\n        const bodyAppendChild = (element) =>{\n            cacheDom.body[0].appendChild(element)\n        }\n\n        return { bodyAppendChild:bodyAppendChild };\n    })();\n\n    return { navBarSection: navBarSection };\n})();\n\n//# sourceURL=webpack://portfolio/./src/navBar.js?");

/***/ }),

/***/ "./src/welcomeSection.js":
/*!*******************************!*\
  !*** ./src/welcomeSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"welcomeSection\": () => (/* binding */ welcomeSection)\n/* harmony export */ });\nconst welcomeSection = (() => {\n    const cacheDom = (() => {\n        let body = document.getElementsByTagName('body')\n        return { body: body };\n    })();\n\n    // Welcome Object\n    const welcomeTextObject = {\n        welcomeTags: ['section', 'div', 'h1', 'p'],\n        section: {\n            id: 'welcome',\n            class: 'welcome-section'\n        },\n        div: {\n            class: 'about'\n        },\n        h1: {\n            htmlString: 'Andrew Humphries'\n        },\n        p: {\n            htmlString: 'Web Developer'\n        },\n    };\n\n    //Return an object list of the elements\n    const welcomeElementList = (objectlist) => {\n        let list = {};\n        for (let i = 0; i < objectlist.welcomeTags.length; i++) {\n            let welcomeItem = objectlist[objectlist.welcomeTags[i]]\n                let element = newElement({\n                    tag: objectlist.welcomeTags[i],\n                    id: welcomeItem.id,\n                    class: welcomeItem.class,\n                    htmlString: welcomeItem.htmlString,\n                });\n\n            list[`${objectlist.welcomeTags[i]}`] = element;\n        };\n        return list;\n    };\n\n    // Main Welcome Section\n    const welcomeSection = () => {\n        let welcomeItems = welcomeElementList(welcomeTextObject),\n        section = welcomeItems.section,\n        div = welcomeItems.div,\n        h1 = welcomeItems.h1,\n        p = welcomeItems.p\n\n        div.appendChild(h1)\n        div.appendChild(p)\n        section.appendChild(div)\n\n        render.bodyAppendChild(section);\n    };\n\n    // Function List\n    const newElement = (item) => {\n        let element = document.createElement(item.tag);\n\n        if (item.id) { element.id = item.id; };\n        if (item.class) { element.classList = item.class; };\n        if (item.htmlString) { element.innerHTML = item.htmlString; };\n        return element;\n    };\n\n    // Render to DOM\n    const render = (() => {\n        const bodyAppendChild = (element) =>{\n            cacheDom.body[0].appendChild(element)\n        }\n\n        return {bodyAppendChild: bodyAppendChild };\n    })();\n\n    return { welcomeSection: welcomeSection };\n})();\n\n//# sourceURL=webpack://portfolio/./src/welcomeSection.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!********************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --clr-primary-400:#3a7db0;\\n    --clr-primary-800:#000;\\n    --clr-neutral-100:#fff;\\n    \\n    --clr-gradient-400:linear-gradient(62deg, #3a3d40 0%, #181719 100%);\\n\\n    --ff-accent:'Roboto Condensed', sans-serif;\\n    --ff-primary:'Lato', sans-serif;\\n}\\n\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video{\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section{\\n\\tdisplay: block;\\n}\\n\\nhtml, body{\\n\\tline-height: 1;\\n    text-align: center;\\n    font-family: var(--ff-primary);\\n    background-image: var(--clr-gradient-400)\\n}\\n\\nbody{\\n    min-height: 100vh\\n  }\\n\\nnav{\\n    display: flex;\\n    position: fixed;\\n    top: 0;\\n    width: 100%;\\n    height: 10vh;\\n    background-color: var(--clr-primary-800);\\n    z-index: 1;\\n}\\n\\n\\nnav > div{\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin: auto;\\n    height: 100%;\\n    width: 100%;\\n    font-size: 1.8em;\\n    color:var(--clr-neutral-100);\\n}\\n\\nnav > div:hover{\\n\\n    color:var(--clr-primary-800);\\n    background-color:var(--clr-neutral-100);\\n}\\n\\n#backgroundSection{\\n    position: fixed;\\n    height: 100vh;\\n    z-index: 1;\\n}\\n\\n\\n#welcome{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative;\\n    font-size: 2.5em;\\n    height: 100vh;\\n    font-family: var(--ff-accent);\\n    color: var(--clr-neutral-100);\\n    z-index: 1;\\n}\\n\\n.about{\\n    background-color:black ;\\n    padding: 0.5em;\\n    border-radius: 0.5em;\\n    border: 0.1em dotted white;\\n    border-style: outset;\\n}\\n\\n\\n#earth{\\n    object-fit: cover;\\n    position: fixed;\\n    top: 0;\\n    bottom: 0;\\n    min-width: 100%;\\n    min-height: 100%;\\n}\\n\\n\\n#projects{\\n    position: relative;\\n    top: 6em;\\n    bottom: 6em;\\n    height: 100%;\\n    margin: auto;\\n    border: 3px solid green; \\n}\\n\\n#projectContainer{\\n    display: flex;\\n    flex-wrap: wrap;\\n    flex-direction: row;\\n    align-items: center;\\n    height: 100%;\\n    border: 3px solid red; \\n}\\n\\n#projectContainer > div{\\n    width: 50%;\\n    height: 50%;\\n    margin: 1em;\\n    background-color: white;\\n}\\n\\n.projectImage{\\n    width: 20em;\\n    height: 20em;\\n    margin:auto;\\n    \\n}\\n\\nimg{\\n    max-width:100%;\\n    max-height:100%;\\n}\\n\\n#contact{\\n    display: flex;\\n    flex-direction: column;\\n    position: relative;\\n    top: 4em;\\n    font-size: 2.5em;\\n    margin-left:auto;\\n    margin-right:auto;\\n    width: 80%;\\n    overflow-wrap: break-word;\\n    font-family: var(--ff-accent);\\n    color: var(--clr-neutral-100);\\n    z-index: 1;\\n}\\n\\n#contact >*{\\n    background-color:black ;\\n    padding: 0.5em;\\n    border-radius: 0.5em;\\n    border: 0.1em dotted white;\\n    border-style: outset;\\n}\\n\\n#contact > *{\\n    line-height: 1.5;\\n}\\n\\n#contact > h3 > a{\\n    color: var(--clr-neutral-100);\\n}\\n\\n#contact > h3 > a:hover{\\n    color:var(--clr-neutral-100);\\n    background-color:var(--clr-primary-400);\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/style.css?../../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/../../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/style.css?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!***************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*****************************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!**********************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/../../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/video/earth.mp4":
/*!*****************************!*\
  !*** ./src/video/earth.mp4 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41584ed51700d249bf73.mp4\";\n\n//# sourceURL=webpack://portfolio/./src/video/earth.mp4?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;