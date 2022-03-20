/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backgroundSection.js":
/*!**********************************!*\
  !*** ./src/backgroundSection.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundSection": function() { return /* binding */ backgroundSection; }
/* harmony export */ });
/* harmony import */ var _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/earth.mp4 */ "./src/video/earth.mp4");

const backgroundSection = (() => {
  const cacheDom = (() => {
    let body = document.getElementsByTagName('body');
    return {
      body: body
    };
  })(); // Background Object List 


  const backgroundTextObject = {
    backgroundTags: ['section', 'video'],
    section: {
      id: 'backgroundSection'
    },
    video: {
      id: 'earth',
      muted: true,
      loop: true,
      autoplay: true,
      src: _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__
    }
  }; //Return an object list of the elements

  const backgroundElementList = objectlist => {
    let list = {};

    for (let i = 0; i < objectlist.backgroundTags.length; i++) {
      let backgroundItem = objectlist[objectlist.backgroundTags[i]];
      let element = newElement({
        tag: objectlist.backgroundTags[i],
        id: backgroundItem.id,
        muted: backgroundItem.muted,
        loop: backgroundItem.loop,
        autoplay: backgroundItem.autoplay,
        src: backgroundItem.src
      });
      list[`${objectlist.backgroundTags[i]}`] = element;
    }

    ;
    return list;
  }; // Main Background Section


  const backgroundSection = () => {
    let backgroundItems = backgroundElementList(backgroundTextObject),
        section = backgroundItems.section,
        video = backgroundItems.video;
    section.appendChild(video);
    render.bodyAppendChild(section);
  }; // Function List


  const newElement = item => {
    let element = document.createElement(item.tag);

    if (item.id) {
      element.id = item.id;
    }

    ;

    if (item.muted) {
      element.muted = item.muted;
    }

    ;

    if (item.loop) {
      element.loop = item.loop;
    }

    ;

    if (item.autoplay) {
      element.autoplay = item.autoplay;
    }

    ;

    if (item.src) {
      element.src = item.src;
    }

    ;
    return element;
  }; // Render to DOM


  const render = (() => {
    const bodyAppendChild = element => {
      cacheDom.body[0].appendChild(element);
    };

    return {
      bodyAppendChild: bodyAppendChild
    };
  })();

  return {
    backgroundSection: backgroundSection
  };
})();

/***/ }),

/***/ "./src/contactSection.js":
/*!*******************************!*\
  !*** ./src/contactSection.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactSection": function() { return /* binding */ contactSection; }
/* harmony export */ });
const contactSection = (() => {
  const cacheDom = (() => {
    let body = document.getElementsByTagName('body');
    return {
      body: body
    };
  })(); // Contact Object List 


  const contactTextObject = {
    conntactTags: ['section', 'h1', 'h2', 'h3', 'a', 'footer'],
    section: {
      id: 'contact',
      classId: 'contact-section'
    },
    h1: {
      htmlString: 'Contact Me'
    },
    h2: {
      id: 'e-mail',
      htmlString: 'E-mail: andrewhumphrieswork@outlook.com'
    },
    h3: {
      id: 'github'
    },
    a: {
      href: 'https://github.com/jehutymsms',
      target: '_blank',
      htmlString: 'GitHub Link'
    },
    footer: {
      id: 'footer',
      htmlString: 'Created by Andrew Humphries'
    }
  }; //Return an object list of the elements

  const contactElementList = objectlist => {
    let list = {};

    for (let i = 0; i < objectlist.conntactTags.length; i++) {
      let contactItem = objectlist[objectlist.conntactTags[i]];
      let element = newElement({
        tag: objectlist.conntactTags[i],
        id: contactItem.id,
        classId: contactItem.classId,
        htmlString: contactItem.htmlString,
        href: contactItem.href,
        target: contactItem.target
      });
      list[`${objectlist.conntactTags[i]}`] = element;
    }

    ;
    return list;
  }; // Main Background Section


  const contactSection = () => {
    let contactItems = contactElementList(contactTextObject),
        section = contactItems.section,
        h1 = contactItems.h1,
        h2 = contactItems.h2,
        h3 = contactItems.h3,
        a = contactItems.a,
        footer = contactItems.footer,
        elementList = [h1, h2, h3, footer];
    h3.appendChild(a);

    for (let i = 0; i < elementList.length; i++) {
      section.appendChild(elementList[i]);
    }

    render.bodyAppendChild(section);
  }; // Function List


  const newElement = item => {
    let element = document.createElement(item.tag);

    if (item.id) {
      element.id = item.id;
    }

    ;

    if (item.classId) {
      element.classList = item.classId;
    }

    ;

    if (item.href) {
      element.href = item.href;
    }

    ;

    if (item.target) {
      element.target = item.target;
    }

    ;

    if (item.htmlString) {
      element.innerHTML = item.htmlString;
    }

    ;
    return element;
  }; // Render to DOM


  const render = (() => {
    const bodyAppendChild = element => {
      cacheDom.body[0].appendChild(element);
    };

    return {
      bodyAppendChild: bodyAppendChild
    };
  })();

  return {
    contactSection: contactSection
  };
})();

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": function() { return /* binding */ navBar; }
/* harmony export */ });
const navBar = (() => {
  const cacheDom = (() => {
    let body = document.getElementsByTagName('body');
    return {
      body: body
    };
  })(); // Nav bar Object


  const navText = {
    navTitles: ['aboutPage', 'projectPage', 'contactPage'],
    aboutPage: {
      id: 'aboutPage',
      text: 'About'
    },
    projectPage: {
      id: 'projectPage',
      text: 'Projects'
    },
    contactPage: {
      id: 'contactPage',
      text: 'Contact'
    }
  };

  const navBarList = objectlist => {
    let list = {};

    for (let i = 0; i < objectlist.navTitles.length; i++) {
      let navItem = objectlist[objectlist.navTitles[i]],
          element = newElement({
        tag: 'div',
        id: navItem.id,
        htmlString: navItem.text
      });
      list[`item${i}`] = element;
    }

    ;
    return list;
  }; // Main Nav Bar


  const navBarSection = () => {
    let element = newElement({
      tag: 'nav',
      id: 'navbar',
      classId: 'navbar'
    }),
        navItems = navBarList(navText);

    for (let x = 0; x < Object.keys(navItems).length; x++) {
      element.appendChild(navItems[`item${x}`]);
    }

    ;
    render.bodyAppendChild(element);
  }; // Function List


  const newElement = item => {
    let element = document.createElement(item.tag);

    if (item.classId) {
      element.classList = item.classId;
    }

    ;

    if (item.id) {
      element.id = item.id;
    }

    ;

    if (item.htmlString) {
      element.innerHTML = item.htmlString;
    }

    ;
    return element;
  }; // Render to DOM


  const render = (() => {
    const bodyAppendChild = element => {
      cacheDom.body[0].appendChild(element);
    };

    return {
      bodyAppendChild: bodyAppendChild
    };
  })();

  return {
    navBarSection: navBarSection
  };
})();

/***/ }),

/***/ "./src/projectsSection.js":
/*!********************************!*\
  !*** ./src/projectsSection.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSection": function() { return /* binding */ projectSection; }
/* harmony export */ });
/* harmony import */ var _images_Statspreviewcardcomponent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Statspreviewcardcomponent.png */ "./src/images/Statspreviewcardcomponent.png");
/* harmony import */ var _images_odin_restaurant_page_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/odin-restaurant-page.png */ "./src/images/odin-restaurant-page.png");
/* harmony import */ var _images_RockPaperScissors_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/RockPaperScissors.png */ "./src/images/RockPaperScissors.png");
/* harmony import */ var _images_odin_library_page_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/odin-library-page.png */ "./src/images/odin-library-page.png");




const projectSection = (() => {
  const cacheDom = (() => {
    let body = document.getElementsByTagName('body');
    return {
      body: body
    };
  })(); // Project Object info


  const projectTextObject = {
    projects: ['project1', 'project2', 'project3', 'project4'],
    projectClass: ['projectImage', 'project-description'],
    projectTags: ['div', 'img', 'h2', 'a'],
    a: {
      target: '_blank',
      codeLinkText: 'Code Link >',
      livePreviewText: 'Live Preview'
    },
    project1: {
      id: 'project1',
      project1Image: {
        id: 'project1Image',
        img: {
          src: _images_Statspreviewcardcomponent_png__WEBPACK_IMPORTED_MODULE_0__,
          alt: 'Card Project'
        },
        div: {
          id: 'project1Description',
          h2: {
            text: 'Responsive WebPage',
            codeLink: {
              href: 'https://github.com/jehutymsms/Stat-Card-Page-Project'
            },
            livePreview: {
              href: 'https://jehutymsms.github.io/Stat-Card-Page-Project/'
            }
          }
        }
      }
    },
    project2: {
      id: 'project2',
      project2Image: {
        id: 'project2Image',
        img: {
          src: _images_RockPaperScissors_png__WEBPACK_IMPORTED_MODULE_2__,
          alt: 'rock paper scissors game image'
        },
        div: {
          id: 'project2Description',
          h2: {
            text: 'Rock Paper Scissors Game',
            codeLink: {
              href: 'https://github.com/jehutymsms/ROCKPAPERSCISSORS'
            },
            livePreview: {
              href: 'https://jehutymsms.github.io/ROCKPAPERSCISSORS/'
            }
          }
        }
      }
    },
    project3: {
      id: 'project3',
      project3Image: {
        id: 'project3Image',
        img: {
          src: _images_odin_library_page_png__WEBPACK_IMPORTED_MODULE_3__,
          alt: 'library app image preview'
        },
        div: {
          id: 'project3Description',
          h2: {
            text: 'Library Application',
            codeLink: {
              href: 'https://github.com/jehutymsms/Library-Odin-project'
            },
            livePreview: {
              href: 'https://jehutymsms.github.io/Library-Odin-project/'
            }
          }
        }
      }
    },
    project4: {
      id: 'project4',
      project4Image: {
        id: 'project4Image',
        img: {
          src: _images_odin_restaurant_page_png__WEBPACK_IMPORTED_MODULE_1__,
          alt: 'restaurant home page preview'
        },
        div: {
          id: 'project4Description',
          h2: {
            text: 'Restaurant Page',
            codeLink: {
              href: 'https://github.com/jehutymsms/odin-restaurant-page'
            },
            livePreview: {
              href: 'https://jehutymsms.github.io/odin-restaurant-page/'
            }
          }
        }
      }
    }
  }; // List of Description elements

  const descriptElementList = number => {
    let list = {};
    list.item0 = newElement({
      tag: Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div'])[1],
      htmlString: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'].text
    });

    for (let i = 1; i < Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2']).length; i++) {
      list[`item${i}`] = newElement({
        tag: projectTextObject.projectTags[3],
        href: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'][`${Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'])[i]}`].href,
        target: projectTextObject.a.target,
        htmlString: projectTextObject['a'][`${Object.keys(projectTextObject.a)[i]}`]
      });
    }

    return list;
  };

  const projectImageElements = number => {
    let list = {},
        descriptElements = descriptElementList(number);
    list.item1 = newElement({
      tag: projectTextObject.projectTags[1],
      src: projectTextObject[`project${number}`][`project${number}Image`]['img'].src,
      alt: projectTextObject[`project${number}`][`project${number}Image`]['img'].alt
    });
    list.item2 = newElement({
      tag: projectTextObject.projectTags[0],
      id: projectTextObject[`project${number}`][`project${number}Image`]['div'].id,
      classId: projectTextObject.projectClass[1]
    });

    for (let x = 0; x < Object.keys(descriptElements).length; x++) {
      list.item2.appendChild(descriptElements[`item${x}`]);
    }

    ;
    return list;
  };

  const projectElements = number => {
    let elements = projectImageElements(number),
        projectElement = newElement({
      tag: projectTextObject.projectTags[0],
      id: projectTextObject[`project${number}`][`project${number}Image`].id,
      classId: projectTextObject.projectClass[0]
    });

    for (let x = 0; x < Object.keys(elements).length; x++) {
      projectElement.appendChild(elements[`item${x + 1}`]);
    }

    ;
    return projectElement;
  };

  const projectList = () => {
    let list = {},
        elements = [];

    for (let x = 0; x < projectTextObject.projects.length; x++) {
      elements.push(projectElements(x + 1));
    }

    for (let x = 0; x < projectTextObject.projects.length; x++) {
      list[`item${x}`] = newElement({
        tag: projectTextObject.projectTags[0],
        id: projectTextObject[`project${x + 1}`].id
      });
    }

    ;

    for (let x = 0; x < Object.keys(list).length; x++) {
      list[`item${x}`].appendChild(elements[x]);
    }

    ;
    return list;
  };

  const projectSection = () => {
    let list = projectList(),
        projectContainer = newElement({
      tag: 'div',
      id: 'projectContainer'
    }),
        projects = newElement({
      tag: 'section',
      id: 'projects',
      classId: 'projects-section'
    });

    for (let x = 0; x < Object.keys(list).length; x++) {
      projectContainer.appendChild(list[`item${x}`]);
    }

    ;
    projects.appendChild(projectContainer);
    render.bodyAppendChild(projects);
  }; // Element Creation


  const newElement = item => {
    let element = document.createElement(item.tag);

    if (item.classId) {
      element.classList = item.classId;
    }

    ;

    if (item.id) {
      element.id = item.id;
    }

    ;

    if (item.htmlString) {
      element.innerHTML = item.htmlString;
    }

    ;

    if (item.href) {
      element.href = item.href;
    }

    ;

    if (item.target) {
      element.target = item.target;
    }

    ;

    if (item.src) {
      element.src = item.src;
    }

    ;

    if (item.alt) {
      element.alt = item.alt;
    }

    ;
    return element;
  }; // Render to DOM


  const render = (() => {
    const bodyAppendChild = element => {
      cacheDom.body[0].appendChild(element);
    };

    return {
      bodyAppendChild: bodyAppendChild
    };
  })();

  return {
    projectSection: projectSection
  };
})();

/***/ }),

/***/ "./src/welcomeSection.js":
/*!*******************************!*\
  !*** ./src/welcomeSection.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcomeSection": function() { return /* binding */ welcomeSection; }
/* harmony export */ });
const welcomeSection = (() => {
  const cacheDom = (() => {
    let body = document.getElementsByTagName('body');
    return {
      body: body
    };
  })(); // Welcome Object info


  const welcomeTextObject = {
    welcomeTags: ['section', 'div', 'h1', 'p'],
    section: {
      id: 'welcome',
      class: 'welcome-section'
    },
    div: {
      class: 'about'
    },
    h1: {
      htmlString: 'Andrew Humphries'
    },
    p: {
      htmlString: 'Web Developer'
    }
  }; //Return an object list of the elements

  const welcomeElementList = objectlist => {
    let list = {};

    for (let i = 0; i < objectlist.welcomeTags.length; i++) {
      let welcomeItem = objectlist[objectlist.welcomeTags[i]];
      let element = newElement({
        tag: objectlist.welcomeTags[i],
        id: welcomeItem.id,
        class: welcomeItem.class,
        htmlString: welcomeItem.htmlString
      });
      list[`${objectlist.welcomeTags[i]}`] = element;
    }

    ;
    return list;
  }; // Main Welcome Section


  const welcomeSection = () => {
    let welcomeItems = welcomeElementList(welcomeTextObject),
        section = welcomeItems.section,
        div = welcomeItems.div,
        h1 = welcomeItems.h1,
        p = welcomeItems.p;
    div.appendChild(h1);
    div.appendChild(p);
    section.appendChild(div);
    render.bodyAppendChild(section);
  }; // Function List


  const newElement = item => {
    let element = document.createElement(item.tag);

    if (item.id) {
      element.id = item.id;
    }

    ;

    if (item.class) {
      element.classList = item.class;
    }

    ;

    if (item.htmlString) {
      element.innerHTML = item.htmlString;
    }

    ;
    return element;
  }; // Render to DOM


  const render = (() => {
    const bodyAppendChild = element => {
      cacheDom.body[0].appendChild(element);
    };

    return {
      bodyAppendChild: bodyAppendChild
    };
  })();

  return {
    welcomeSection: welcomeSection
  };
})();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/RockPaperScissors.png":
/*!******************************************!*\
  !*** ./src/images/RockPaperScissors.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0fac27878b948919d48.png";

/***/ }),

/***/ "./src/images/Statspreviewcardcomponent.png":
/*!**************************************************!*\
  !*** ./src/images/Statspreviewcardcomponent.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1270b44260b65aee209d.png";

/***/ }),

/***/ "./src/images/odin-library-page.png":
/*!******************************************!*\
  !*** ./src/images/odin-library-page.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "618d8c116d544db21d10.png";

/***/ }),

/***/ "./src/images/odin-restaurant-page.png":
/*!*********************************************!*\
  !*** ./src/images/odin-restaurant-page.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea9f7fe68823005288df.png";

/***/ }),

/***/ "./src/video/earth.mp4":
/*!*****************************!*\
  !*** ./src/video/earth.mp4 ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41584ed51700d249bf73.mp4";

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");
/* harmony import */ var _welcomeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomeSection */ "./src/welcomeSection.js");
/* harmony import */ var _backgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundSection */ "./src/backgroundSection.js");
/* harmony import */ var _contactSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactSection */ "./src/contactSection.js");
/* harmony import */ var _projectsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsSection */ "./src/projectsSection.js");







const main = (() => {
  _backgroundSection__WEBPACK_IMPORTED_MODULE_3__.backgroundSection.backgroundSection();
  _navBar__WEBPACK_IMPORTED_MODULE_1__.navBar.navBarSection();
  _welcomeSection__WEBPACK_IMPORTED_MODULE_2__.welcomeSection.welcomeSection();

  const cacheDom = (() => {
    let body = document.getElementsByTagName('body'),
        navBar = document.getElementById('navbar'),
        aboutPage = document.getElementById('aboutPage'),
        projectPage = document.getElementById('projectPage'),
        contactPage = document.getElementById('contactPage');
    return {
      body: body,
      navBar: navBar,
      aboutPage: aboutPage,
      projectPage: projectPage,
      contactPage: contactPage
    };
  })();

  const bindEvents = () => {
    cacheDom.aboutPage.addEventListener('click', function () {
      removeCurAddNew(_welcomeSection__WEBPACK_IMPORTED_MODULE_2__.welcomeSection.welcomeSection);
    });
    cacheDom.projectPage.addEventListener('click', function () {
      removeCurAddNew(_projectsSection__WEBPACK_IMPORTED_MODULE_5__.projectSection.projectSection);
    });
    cacheDom.contactPage.addEventListener('click', function () {
      removeCurAddNew(_contactSection__WEBPACK_IMPORTED_MODULE_4__.contactSection.contactSection);
    });
  };

  const render = (() => {
    const removePrev = () => {
      cacheDom.body[0].lastElementChild.remove();
    };

    return {
      removePrev: removePrev
    };
  })(); // Function list


  const removeCurAddNew = New => {
    render.removePrev();
    New();
  };

  bindEvents();
})();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0csSUFBQUEsUUFBUSxDQUFDaUQsU0FBVCxDQUFtQjJELGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxZQUFZO0FBQ3JEQyxNQUFBQSxlQUFlLENBQUNaLDBFQUFELENBQWY7QUFDSCxLQUZEO0FBR0FqRyxJQUFBQSxRQUFRLENBQUNtRCxXQUFULENBQXFCeUQsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQVk7QUFDdkRDLE1BQUFBLGVBQWUsQ0FBQzdDLDJFQUFELENBQWY7QUFDSCxLQUZEO0FBR0FoRSxJQUFBQSxRQUFRLENBQUNvRCxXQUFULENBQXFCd0QsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQVk7QUFDdkRDLE1BQUFBLGVBQWUsQ0FBQ2pGLDBFQUFELENBQWY7QUFDSCxLQUZEO0FBR0gsR0FWRDs7QUFZQSxRQUFNSixNQUFNLEdBQUcsQ0FBQyxNQUFNO0FBQ2xCLFVBQU1zRixVQUFVLEdBQUcsTUFBTTtBQUNyQjlHLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQWQsRUFBaUI4RyxnQkFBakIsQ0FBa0NDLE1BQWxDO0FBQ0gsS0FGRDs7QUFHQSxXQUFPO0FBQUVGLE1BQUFBLFVBQVUsRUFBRUE7QUFBZCxLQUFQO0FBQ0gsR0FMYyxHQUFmLENBN0JnQixDQW9DaEI7OztBQUNBLFFBQU1ELGVBQWUsR0FBSUksR0FBRCxJQUFTO0FBQzdCekYsSUFBQUEsTUFBTSxDQUFDc0YsVUFBUDtBQUNBRyxJQUFBQSxHQUFHO0FBQ04sR0FIRDs7QUFLQU4sRUFBQUEsVUFBVTtBQUdiLENBN0NZLEdBQWIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYWNrZ3JvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29udGFjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL25hdkJhci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcHJvamVjdHNTZWN0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy93ZWxjb21lU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuc2Nzcz8yZTg4Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhcnRoIGZyb20gJy4vdmlkZW8vZWFydGgubXA0JztcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kU2VjdGlvbiA9KCgpID0+IHtcbiAgICBjb25zdCBjYWNoZURvbSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVxuICAgICAgICByZXR1cm4geyBib2R5OiBib2R5IH07XG4gICAgfSkoKTtcbiAgICAvLyBCYWNrZ3JvdW5kIE9iamVjdCBMaXN0IFxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0T2JqZWN0ID0ge1xuICAgICAgICBiYWNrZ3JvdW5kVGFnczogWydzZWN0aW9uJywgJ3ZpZGVvJ10sXG4gICAgICAgIHNlY3Rpb246IHtcbiAgICAgICAgICAgIGlkOiAnYmFja2dyb3VuZFNlY3Rpb24nLFxuICAgICAgICB9LFxuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgaWQ6ICdlYXJ0aCcsXG4gICAgICAgICAgICBtdXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogZWFydGgsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vUmV0dXJuIGFuIG9iamVjdCBsaXN0IG9mIHRoZSBlbGVtZW50c1xuICAgIGNvbnN0IGJhY2tncm91bmRFbGVtZW50TGlzdCA9IChvYmplY3RsaXN0KSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0bGlzdC5iYWNrZ3JvdW5kVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJhY2tncm91bmRJdGVtID0gb2JqZWN0bGlzdFtvYmplY3RsaXN0LmJhY2tncm91bmRUYWdzW2ldXVxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gbmV3RWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogb2JqZWN0bGlzdC5iYWNrZ3JvdW5kVGFnc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGJhY2tncm91bmRJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBtdXRlZDogYmFja2dyb3VuZEl0ZW0ubXV0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGJhY2tncm91bmRJdGVtLmxvb3AsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBiYWNrZ3JvdW5kSXRlbS5hdXRvcGxheSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBiYWNrZ3JvdW5kSXRlbS5zcmMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpc3RbYCR7b2JqZWN0bGlzdC5iYWNrZ3JvdW5kVGFnc1tpXX1gXSA9IGVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICAvLyBNYWluIEJhY2tncm91bmQgU2VjdGlvblxuICAgIGNvbnN0IGJhY2tncm91bmRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgYmFja2dyb3VuZEl0ZW1zID0gYmFja2dyb3VuZEVsZW1lbnRMaXN0KGJhY2tncm91bmRUZXh0T2JqZWN0KSxcbiAgICAgICAgc2VjdGlvbiA9IGJhY2tncm91bmRJdGVtcy5zZWN0aW9uLFxuICAgICAgICB2aWRlbyA9IGJhY2tncm91bmRJdGVtcy52aWRlb1xuXG4gICAgICAgIFxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHZpZGVvKTtcblxuICAgICAgICByZW5kZXIuYm9keUFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiBMaXN0XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdGVtLnRhZyk7XG5cbiAgICAgICAgaWYgKGl0ZW0uaWQpIHsgZWxlbWVudC5pZCA9IGl0ZW0uaWQ7IH07XG4gICAgICAgIGlmIChpdGVtLm11dGVkKSB7IGVsZW1lbnQubXV0ZWQgPSBpdGVtLm11dGVkOyB9O1xuICAgICAgICBpZiAoaXRlbS5sb29wKSB7IGVsZW1lbnQubG9vcCA9IGl0ZW0ubG9vcDsgfTtcbiAgICAgICAgaWYgKGl0ZW0uYXV0b3BsYXkpIHsgZWxlbWVudC5hdXRvcGxheSA9IGl0ZW0uYXV0b3BsYXk7IH07XG4gICAgICAgIGlmIChpdGVtLnNyYykgeyBlbGVtZW50LnNyYyA9IGl0ZW0uc3JjOyB9O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmVuZGVyIHRvIERPTVxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlBcHBlbmRDaGlsZCA9IChlbGVtZW50KSA9PntcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtib2R5QXBwZW5kQ2hpbGQ6IGJvZHlBcHBlbmRDaGlsZCB9O1xuICAgIH0pKCk7XG4gICAgXG4gICAgcmV0dXJuIHtiYWNrZ3JvdW5kU2VjdGlvbjpiYWNrZ3JvdW5kU2VjdGlvbn1cbn0pKCkiLCJleHBvcnQgY29uc3QgY29udGFjdFNlY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHkgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gQ29udGFjdCBPYmplY3QgTGlzdCBcbiAgICBjb25zdCBjb250YWN0VGV4dE9iamVjdCA9IHtcbiAgICAgICAgY29ubnRhY3RUYWdzOiBbJ3NlY3Rpb24nLCAnaDEnLCdoMicsJ2gzJywnYScsJ2Zvb3RlciddLFxuICAgICAgICBzZWN0aW9uOiB7XG4gICAgICAgICAgICBpZDogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgY2xhc3NJZDonY29udGFjdC1zZWN0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgaDE6IHtcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdDb250YWN0IE1lJyxcbiAgICAgICAgfSxcbiAgICAgICAgaDI6IHtcbiAgICAgICAgICAgIGlkOiAnZS1tYWlsJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdFLW1haWw6IGFuZHJld2h1bXBocmllc3dvcmtAb3V0bG9vay5jb20nLFxuICAgICAgICB9LFxuICAgICAgICBoMzoge1xuICAgICAgICAgICAgaWQ6ICdnaXRodWInLFxuICAgICAgICB9LFxuICAgICAgICBhOiB7XG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2plaHV0eW1zbXMnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdHaXRIdWIgTGluaycsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgaWQ6ICdmb290ZXInLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0NyZWF0ZWQgYnkgQW5kcmV3IEh1bXBocmllcycsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vUmV0dXJuIGFuIG9iamVjdCBsaXN0IG9mIHRoZSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRhY3RFbGVtZW50TGlzdCA9IChvYmplY3RsaXN0KSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0bGlzdC5jb25udGFjdFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb250YWN0SXRlbSA9IG9iamVjdGxpc3Rbb2JqZWN0bGlzdC5jb25udGFjdFRhZ3NbaV1dXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXdFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBvYmplY3RsaXN0LmNvbm50YWN0VGFnc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbnRhY3RJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0lkOiBjb250YWN0SXRlbS5jbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiBjb250YWN0SXRlbS5odG1sU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBjb250YWN0SXRlbS5ocmVmLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNvbnRhY3RJdGVtLnRhcmdldCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlzdFtgJHtvYmplY3RsaXN0LmNvbm50YWN0VGFnc1tpXX1gXSA9IGVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICAvLyBNYWluIEJhY2tncm91bmQgU2VjdGlvblxuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFjdEl0ZW1zID0gY29udGFjdEVsZW1lbnRMaXN0KGNvbnRhY3RUZXh0T2JqZWN0KSxcbiAgICAgICAgc2VjdGlvbiA9IGNvbnRhY3RJdGVtcy5zZWN0aW9uLFxuICAgICAgICBoMSA9IGNvbnRhY3RJdGVtcy5oMSxcbiAgICAgICAgaDIgPSBjb250YWN0SXRlbXMuaDIsXG4gICAgICAgIGgzID0gY29udGFjdEl0ZW1zLmgzLFxuICAgICAgICBhID0gY29udGFjdEl0ZW1zLmEsXG4gICAgICAgIGZvb3RlciA9IGNvbnRhY3RJdGVtcy5mb290ZXIsXG4gICAgICAgIGVsZW1lbnRMaXN0ID0gW2gxLGgyLGgzLGZvb3Rlcl1cblxuICAgICAgICBoMy5hcHBlbmRDaGlsZChhKVxuXG4gICAgICAgIGZvcihsZXQgaT0wO2k8ZWxlbWVudExpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnRMaXN0W2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyLmJvZHlBcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gTGlzdFxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbS50YWcpO1xuXG4gICAgICAgIGlmIChpdGVtLmlkKSB7IGVsZW1lbnQuaWQgPSBpdGVtLmlkOyB9O1xuICAgICAgICBpZiAoaXRlbS5jbGFzc0lkKSB7IGVsZW1lbnQuY2xhc3NMaXN0ID0gaXRlbS5jbGFzc0lkOyB9O1xuICAgICAgICBpZiAoaXRlbS5ocmVmKSB7IGVsZW1lbnQuaHJlZiA9IGl0ZW0uaHJlZjsgfTtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0KSB7IGVsZW1lbnQudGFyZ2V0ID0gaXRlbS50YXJnZXQ7IH07XG4gICAgICAgIGlmIChpdGVtLmh0bWxTdHJpbmcpIHsgZWxlbWVudC5pbm5lckhUTUwgPSBpdGVtLmh0bWxTdHJpbmc7IH07XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBSZW5kZXIgdG8gRE9NXG4gICAgY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keUFwcGVuZENoaWxkID0gKGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgY2FjaGVEb20uYm9keVswXS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge2JvZHlBcHBlbmRDaGlsZDogYm9keUFwcGVuZENoaWxkIH07XG4gICAgfSkoKTtcbiAgICByZXR1cm4ge2NvbnRhY3RTZWN0aW9uOmNvbnRhY3RTZWN0aW9ufVxufSkoKSIsImV4cG9ydCBjb25zdCBuYXZCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHkgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gTmF2IGJhciBPYmplY3RcbiAgICBjb25zdCBuYXZUZXh0ID0ge1xuICAgICAgICBuYXZUaXRsZXM6IFsnYWJvdXRQYWdlJywgJ3Byb2plY3RQYWdlJywgJ2NvbnRhY3RQYWdlJ10sXG4gICAgICAgIGFib3V0UGFnZToge1xuICAgICAgICAgICAgaWQ6ICdhYm91dFBhZ2UnLFxuICAgICAgICAgICAgdGV4dDogJ0Fib3V0J1xuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0UGFnZToge1xuICAgICAgICAgICAgaWQ6ICdwcm9qZWN0UGFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnUHJvamVjdHMnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3RQYWdlOiB7XG4gICAgICAgICAgICBpZDogJ2NvbnRhY3RQYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICdDb250YWN0J1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBuYXZCYXJMaXN0ID0gKG9iamVjdGxpc3QpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdGxpc3QubmF2VGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmF2SXRlbSA9IG9iamVjdGxpc3Rbb2JqZWN0bGlzdC5uYXZUaXRsZXNbaV1dLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBuZXdFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5hdkl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6IG5hdkl0ZW0udGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RbYGl0ZW0ke2l9YF0gPSBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLy8gTWFpbiBOYXYgQmFyXG4gICAgY29uc3QgbmF2QmFyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXdFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ25hdicsXG4gICAgICAgICAgICBpZDogJ25hdmJhcicsXG4gICAgICAgICAgICBjbGFzc0lkOiAnbmF2YmFyJyxcbiAgICAgICAgfSksXG4gICAgICAgICAgICBuYXZJdGVtcyA9IG5hdkJhckxpc3QobmF2VGV4dCk7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBPYmplY3Qua2V5cyhuYXZJdGVtcykubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2SXRlbXNbYGl0ZW0ke3h9YF0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlbmRlci5ib2R5QXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIExpc3RcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0udGFnKTtcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NJZCkgeyBlbGVtZW50LmNsYXNzTGlzdCA9IGl0ZW0uY2xhc3NJZDsgfTtcbiAgICAgICAgaWYgKGl0ZW0uaWQpIHsgZWxlbWVudC5pZCA9IGl0ZW0uaWQ7IH07XG4gICAgICAgIGlmIChpdGVtLmh0bWxTdHJpbmcpIHsgZWxlbWVudC5pbm5lckhUTUwgPSBpdGVtLmh0bWxTdHJpbmc7IH07XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBSZW5kZXIgdG8gRE9NXG4gICAgY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keUFwcGVuZENoaWxkID0gKGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgY2FjaGVEb20uYm9keVswXS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgYm9keUFwcGVuZENoaWxkOmJvZHlBcHBlbmRDaGlsZCB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBuYXZCYXJTZWN0aW9uOiBuYXZCYXJTZWN0aW9uIH07XG59KSgpOyIsImltcG9ydCBzdGF0Q2FyZCBmcm9tICcuL2ltYWdlcy9TdGF0c3ByZXZpZXdjYXJkY29tcG9uZW50LnBuZyc7XG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tICcuL2ltYWdlcy9vZGluLXJlc3RhdXJhbnQtcGFnZS5wbmcnO1xuaW1wb3J0IHJvY2tQYXBlclNjaXNzb3JzIGZyb20gJy4vaW1hZ2VzL1JvY2tQYXBlclNjaXNzb3JzLnBuZyc7XG5pbXBvcnQgbGlicmFyeSBmcm9tICcuL2ltYWdlcy9vZGluLWxpYnJhcnktcGFnZS5wbmcnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFNlY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHkgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gUHJvamVjdCBPYmplY3QgaW5mb1xuICAgIGNvbnN0IHByb2plY3RUZXh0T2JqZWN0ID0ge1xuICAgICAgICBwcm9qZWN0czogWydwcm9qZWN0MScsICdwcm9qZWN0MicsICdwcm9qZWN0MycsICdwcm9qZWN0NCddLFxuICAgICAgICBwcm9qZWN0Q2xhc3M6IFsncHJvamVjdEltYWdlJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nXSxcbiAgICAgICAgcHJvamVjdFRhZ3M6IFsnZGl2JywgJ2ltZycsICdoMicsICdhJ10sXG4gICAgICAgIGE6IHtcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICBjb2RlTGlua1RleHQ6ICdDb2RlIExpbmsgPicsXG4gICAgICAgICAgICBsaXZlUHJldmlld1RleHQ6ICdMaXZlIFByZXZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0MToge1xuICAgICAgICAgICAgaWQ6ICdwcm9qZWN0MScsXG4gICAgICAgICAgICBwcm9qZWN0MUltYWdlOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdwcm9qZWN0MUltYWdlJyxcbiAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBzdGF0Q2FyZCxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAnQ2FyZCBQcm9qZWN0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpdjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3Byb2plY3QxRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBoMjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jlc3BvbnNpdmUgV2ViUGFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlTGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vamVodXR5bXNtcy9TdGF0LUNhcmQtUGFnZS1Qcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXZlUHJldmlldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2plaHV0eW1zbXMuZ2l0aHViLmlvL1N0YXQtQ2FyZC1QYWdlLVByb2plY3QvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3QyOiB7XG4gICAgICAgICAgICBpZDogJ3Byb2plY3QyJyxcbiAgICAgICAgICAgIHByb2plY3QySW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3Byb2plY3QySW1hZ2UnLFxuICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHJvY2tQYXBlclNjaXNzb3JzLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICdyb2NrIHBhcGVyIHNjaXNzb3JzIGdhbWUgaW1hZ2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGl2OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAncHJvamVjdDJEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGgyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUm9jayBQYXBlciBTY2lzc29ycyBHYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVMaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWh1dHltc21zL1JPQ0tQQVBFUlNDSVNTT1JTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXZlUHJldmlldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2plaHV0eW1zbXMuZ2l0aHViLmlvL1JPQ0tQQVBFUlNDSVNTT1JTLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0Mzoge1xuICAgICAgICAgICAgaWQ6ICdwcm9qZWN0MycsXG4gICAgICAgICAgICBwcm9qZWN0M0ltYWdlOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdwcm9qZWN0M0ltYWdlJyxcbiAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBsaWJyYXJ5LFxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICdsaWJyYXJ5IGFwcCBpbWFnZSBwcmV2aWV3JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpdjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3Byb2plY3QzRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBoMjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xpYnJhcnkgQXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZUxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2plaHV0eW1zbXMvTGlicmFyeS1PZGluLXByb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpdmVQcmV2aWV3OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vamVodXR5bXNtcy5naXRodWIuaW8vTGlicmFyeS1PZGluLXByb2plY3QvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3Q0OiB7XG4gICAgICAgICAgICBpZDogJ3Byb2plY3Q0JyxcbiAgICAgICAgICAgIHByb2plY3Q0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3Byb2plY3Q0SW1hZ2UnLFxuICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlc3RhdXJhbnQsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJ3Jlc3RhdXJhbnQgaG9tZSBwYWdlIHByZXZpZXcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGl2OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAncHJvamVjdDREZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGgyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmFudCBQYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVMaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWh1dHltc21zL29kaW4tcmVzdGF1cmFudC1wYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXZlUHJldmlldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2plaHV0eW1zbXMuZ2l0aHViLmlvL29kaW4tcmVzdGF1cmFudC1wYWdlLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvLyBMaXN0IG9mIERlc2NyaXB0aW9uIGVsZW1lbnRzXG4gICAgY29uc3QgZGVzY3JpcHRFbGVtZW50TGlzdCA9IChudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7fTtcblxuICAgICAgICBsaXN0Lml0ZW0wID0gbmV3RWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IE9iamVjdC5rZXlzKHByb2plY3RUZXh0T2JqZWN0W2Bwcm9qZWN0JHtudW1iZXJ9YF1bYHByb2plY3Qke251bWJlcn1JbWFnZWBdWydkaXYnXSlbMV0sXG4gICAgICAgICAgICBodG1sU3RyaW5nOiBwcm9qZWN0VGV4dE9iamVjdFtgcHJvamVjdCR7bnVtYmVyfWBdW2Bwcm9qZWN0JHtudW1iZXJ9SW1hZ2VgXVsnZGl2J11bJ2gyJ10udGV4dCxcbiAgICAgICAgfSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBPYmplY3Qua2V5cyhwcm9qZWN0VGV4dE9iamVjdFtgcHJvamVjdCR7bnVtYmVyfWBdW2Bwcm9qZWN0JHtudW1iZXJ9SW1hZ2VgXVsnZGl2J11bJ2gyJ10pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2BpdGVtJHtpfWBdID0gbmV3RWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiBwcm9qZWN0VGV4dE9iamVjdC5wcm9qZWN0VGFnc1szXSxcbiAgICAgICAgICAgICAgICBocmVmOiBwcm9qZWN0VGV4dE9iamVjdFtgcHJvamVjdCR7bnVtYmVyfWBdW2Bwcm9qZWN0JHtudW1iZXJ9SW1hZ2VgXVsnZGl2J11bJ2gyJ11bYCR7T2JqZWN0LmtleXMocHJvamVjdFRleHRPYmplY3RbYHByb2plY3Qke251bWJlcn1gXVtgcHJvamVjdCR7bnVtYmVyfUltYWdlYF1bJ2RpdiddWydoMiddKVtpXX1gXS5ocmVmLFxuICAgICAgICAgICAgICAgIHRhcmdldDogcHJvamVjdFRleHRPYmplY3QuYS50YXJnZXQsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogcHJvamVjdFRleHRPYmplY3RbJ2EnXVtgJHtPYmplY3Qua2V5cyhwcm9qZWN0VGV4dE9iamVjdC5hKVtpXX1gXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0SW1hZ2VFbGVtZW50cyA9IChudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7fSxcbiAgICAgICAgICAgIGRlc2NyaXB0RWxlbWVudHMgPSBkZXNjcmlwdEVsZW1lbnRMaXN0KG51bWJlcik7XG5cbiAgICAgICAgbGlzdC5pdGVtMSA9IG5ld0VsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiBwcm9qZWN0VGV4dE9iamVjdC5wcm9qZWN0VGFnc1sxXSxcbiAgICAgICAgICAgIHNyYzogcHJvamVjdFRleHRPYmplY3RbYHByb2plY3Qke251bWJlcn1gXVtgcHJvamVjdCR7bnVtYmVyfUltYWdlYF1bJ2ltZyddLnNyYyxcbiAgICAgICAgICAgIGFsdDogcHJvamVjdFRleHRPYmplY3RbYHByb2plY3Qke251bWJlcn1gXVtgcHJvamVjdCR7bnVtYmVyfUltYWdlYF1bJ2ltZyddLmFsdCxcbiAgICAgICAgfSlcblxuICAgICAgICBsaXN0Lml0ZW0yID0gbmV3RWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IHByb2plY3RUZXh0T2JqZWN0LnByb2plY3RUYWdzWzBdLFxuICAgICAgICAgICAgaWQ6IHByb2plY3RUZXh0T2JqZWN0W2Bwcm9qZWN0JHtudW1iZXJ9YF1bYHByb2plY3Qke251bWJlcn1JbWFnZWBdWydkaXYnXS5pZCxcbiAgICAgICAgICAgIGNsYXNzSWQ6IHByb2plY3RUZXh0T2JqZWN0LnByb2plY3RDbGFzc1sxXSxcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE9iamVjdC5rZXlzKGRlc2NyaXB0RWxlbWVudHMpLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBsaXN0Lml0ZW0yLmFwcGVuZENoaWxkKGRlc2NyaXB0RWxlbWVudHNbYGl0ZW0ke3h9YF0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gKG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBwcm9qZWN0SW1hZ2VFbGVtZW50cyhudW1iZXIpLFxuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQgPSBuZXdFbGVtZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6IHByb2plY3RUZXh0T2JqZWN0LnByb2plY3RUYWdzWzBdLFxuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0VGV4dE9iamVjdFtgcHJvamVjdCR7bnVtYmVyfWBdW2Bwcm9qZWN0JHtudW1iZXJ9SW1hZ2VgXS5pZCxcbiAgICAgICAgICAgICAgICBjbGFzc0lkOiBwcm9qZWN0VGV4dE9iamVjdC5wcm9qZWN0Q2xhc3NbMF0sXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgT2JqZWN0LmtleXMoZWxlbWVudHMpLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50c1tgaXRlbSR7eCArIDF9YF0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJvamVjdEVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7fSxcbiAgICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0VGV4dE9iamVjdC5wcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChwcm9qZWN0RWxlbWVudHMoeCArIDEpKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0VGV4dE9iamVjdC5wcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGlzdFtgaXRlbSR7eH1gXSA9IG5ld0VsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogcHJvamVjdFRleHRPYmplY3QucHJvamVjdFRhZ3NbMF0sXG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RUZXh0T2JqZWN0W2Bwcm9qZWN0JHt4ICsgMX1gXS5pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBPYmplY3Qua2V5cyhsaXN0KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGlzdFtgaXRlbSR7eH1gXS5hcHBlbmRDaGlsZChlbGVtZW50c1t4XSlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IHByb2plY3RMaXN0KCksXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyID0gbmV3RWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBpZDogJ3Byb2plY3RDb250YWluZXInLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm9qZWN0cyA9IG5ld0VsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGlkOiAncHJvamVjdHMnLFxuICAgICAgICAgICAgICAgIGNsYXNzSWQ6ICdwcm9qZWN0cy1zZWN0aW9uJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBPYmplY3Qua2V5cyhsaXN0KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0W2BpdGVtJHt4fWBdKVxuICAgICAgICB9O1xuXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG5cbiAgICAgICAgcmVuZGVyLmJvZHlBcHBlbmRDaGlsZChwcm9qZWN0cylcbiAgICB9XG5cbiAgICAvLyBFbGVtZW50IENyZWF0aW9uXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdGVtLnRhZyk7XG4gICAgICAgIGlmIChpdGVtLmNsYXNzSWQpIHsgZWxlbWVudC5jbGFzc0xpc3QgPSBpdGVtLmNsYXNzSWQ7IH07XG4gICAgICAgIGlmIChpdGVtLmlkKSB7IGVsZW1lbnQuaWQgPSBpdGVtLmlkOyB9O1xuICAgICAgICBpZiAoaXRlbS5odG1sU3RyaW5nKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbS5odG1sU3RyaW5nOyB9O1xuICAgICAgICBpZiAoaXRlbS5ocmVmKSB7IGVsZW1lbnQuaHJlZiA9IGl0ZW0uaHJlZjsgfTtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0KSB7IGVsZW1lbnQudGFyZ2V0ID0gaXRlbS50YXJnZXQ7IH07XG4gICAgICAgIGlmIChpdGVtLnNyYykgeyBlbGVtZW50LnNyYyA9IGl0ZW0uc3JjOyB9O1xuICAgICAgICBpZiAoaXRlbS5hbHQpIHsgZWxlbWVudC5hbHQgPSBpdGVtLmFsdDsgfTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIFJlbmRlciB0byBET01cbiAgICBjb25zdCByZW5kZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5QXBwZW5kQ2hpbGQgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY2FjaGVEb20uYm9keVswXS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgYm9keUFwcGVuZENoaWxkOiBib2R5QXBwZW5kQ2hpbGQgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdFNlY3Rpb246IHByb2plY3RTZWN0aW9uIH1cbn0pKCkiLCJleHBvcnQgY29uc3Qgd2VsY29tZVNlY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHkgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gV2VsY29tZSBPYmplY3QgaW5mb1xuICAgIGNvbnN0IHdlbGNvbWVUZXh0T2JqZWN0ID0ge1xuICAgICAgICB3ZWxjb21lVGFnczogWydzZWN0aW9uJywgJ2RpdicsICdoMScsICdwJ10sXG4gICAgICAgIHNlY3Rpb246IHtcbiAgICAgICAgICAgIGlkOiAnd2VsY29tZScsXG4gICAgICAgICAgICBjbGFzczogJ3dlbGNvbWUtc2VjdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgICBjbGFzczogJ2Fib3V0J1xuICAgICAgICB9LFxuICAgICAgICBoMToge1xuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0FuZHJldyBIdW1waHJpZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHA6IHtcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdXZWIgRGV2ZWxvcGVyJ1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvL1JldHVybiBhbiBvYmplY3QgbGlzdCBvZiB0aGUgZWxlbWVudHNcbiAgICBjb25zdCB3ZWxjb21lRWxlbWVudExpc3QgPSAob2JqZWN0bGlzdCkgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdGxpc3Qud2VsY29tZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3ZWxjb21lSXRlbSA9IG9iamVjdGxpc3Rbb2JqZWN0bGlzdC53ZWxjb21lVGFnc1tpXV1cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IG5ld0VsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6IG9iamVjdGxpc3Qud2VsY29tZVRhZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3ZWxjb21lSXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHdlbGNvbWVJdGVtLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiB3ZWxjb21lSXRlbS5odG1sU3RyaW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaXN0W2Ake29iamVjdGxpc3Qud2VsY29tZVRhZ3NbaV19YF0gPSBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLy8gTWFpbiBXZWxjb21lIFNlY3Rpb25cbiAgICBjb25zdCB3ZWxjb21lU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHdlbGNvbWVJdGVtcyA9IHdlbGNvbWVFbGVtZW50TGlzdCh3ZWxjb21lVGV4dE9iamVjdCksXG4gICAgICAgIHNlY3Rpb24gPSB3ZWxjb21lSXRlbXMuc2VjdGlvbixcbiAgICAgICAgZGl2ID0gd2VsY29tZUl0ZW1zLmRpdixcbiAgICAgICAgaDEgPSB3ZWxjb21lSXRlbXMuaDEsXG4gICAgICAgIHAgPSB3ZWxjb21lSXRlbXMucFxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMSlcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICAgIHJlbmRlci5ib2R5QXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIExpc3RcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0udGFnKTtcblxuICAgICAgICBpZiAoaXRlbS5pZCkgeyBlbGVtZW50LmlkID0gaXRlbS5pZDsgfTtcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3MpIHsgZWxlbWVudC5jbGFzc0xpc3QgPSBpdGVtLmNsYXNzOyB9O1xuICAgICAgICBpZiAoaXRlbS5odG1sU3RyaW5nKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbS5odG1sU3RyaW5nOyB9O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmVuZGVyIHRvIERPTVxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlBcHBlbmRDaGlsZCA9IChlbGVtZW50KSA9PntcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Ym9keUFwcGVuZENoaWxkOiBib2R5QXBwZW5kQ2hpbGQgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgd2VsY29tZVNlY3Rpb246IHdlbGNvbWVTZWN0aW9uIH07XG59KSgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBuYXZCYXIgfSBmcm9tICcuL25hdkJhcic7XG5pbXBvcnQgeyB3ZWxjb21lU2VjdGlvbiB9IGZyb20gJy4vd2VsY29tZVNlY3Rpb24nO1xuaW1wb3J0IHsgYmFja2dyb3VuZFNlY3Rpb24gfSBmcm9tICcuL2JhY2tncm91bmRTZWN0aW9uJztcbmltcG9ydCB7IGNvbnRhY3RTZWN0aW9uIH0gZnJvbSAnLi9jb250YWN0U2VjdGlvbic7XG5pbXBvcnQgeyBwcm9qZWN0U2VjdGlvbiB9IGZyb20gJy4vcHJvamVjdHNTZWN0aW9uJztcblxuY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gICAgYmFja2dyb3VuZFNlY3Rpb24uYmFja2dyb3VuZFNlY3Rpb24oKTtcbiAgICBuYXZCYXIubmF2QmFyU2VjdGlvbigpO1xuICAgIHdlbGNvbWVTZWN0aW9uLndlbGNvbWVTZWN0aW9uKClcblxuXG4gICAgY29uc3QgY2FjaGVEb20gPSAoKCkgPT4ge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JyksXG4gICAgICAgICAgICBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyksXG4gICAgICAgICAgICBhYm91dFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRQYWdlJyksXG4gICAgICAgICAgICBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UGFnZScpLFxuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdFBhZ2UnKTtcblxuICAgICAgICByZXR1cm4geyBib2R5OiBib2R5LCBuYXZCYXI6IG5hdkJhciwgYWJvdXRQYWdlOiBhYm91dFBhZ2UsIHByb2plY3RQYWdlOiBwcm9qZWN0UGFnZSwgY29udGFjdFBhZ2U6IGNvbnRhY3RQYWdlIH07XG4gICAgfSkoKTtcbiAgICBcblxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNhY2hlRG9tLmFib3V0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlbW92ZUN1ckFkZE5ldyh3ZWxjb21lU2VjdGlvbi53ZWxjb21lU2VjdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIGNhY2hlRG9tLnByb2plY3RQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtb3ZlQ3VyQWRkTmV3KHByb2plY3RTZWN0aW9uLnByb2plY3RTZWN0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgY2FjaGVEb20uY29udGFjdFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZW1vdmVDdXJBZGROZXcoY29udGFjdFNlY3Rpb24uY29udGFjdFNlY3Rpb24pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYWNoZURvbS5ib2R5WzBdLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmVtb3ZlUHJldjogcmVtb3ZlUHJldiB9O1xuICAgIH0pKClcblxuICAgIC8vIEZ1bmN0aW9uIGxpc3RcbiAgICBjb25zdCByZW1vdmVDdXJBZGROZXcgPSAoTmV3KSA9PiB7XG4gICAgICAgIHJlbmRlci5yZW1vdmVQcmV2KCk7XG4gICAgICAgIE5ldygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKTtcbiAgICBcblxufSkoKTtcbiJdLCJuYW1lcyI6WyJlYXJ0aCIsImJhY2tncm91bmRTZWN0aW9uIiwiY2FjaGVEb20iLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImJhY2tncm91bmRUZXh0T2JqZWN0IiwiYmFja2dyb3VuZFRhZ3MiLCJzZWN0aW9uIiwiaWQiLCJ2aWRlbyIsIm11dGVkIiwibG9vcCIsImF1dG9wbGF5Iiwic3JjIiwiYmFja2dyb3VuZEVsZW1lbnRMaXN0Iiwib2JqZWN0bGlzdCIsImxpc3QiLCJpIiwibGVuZ3RoIiwiYmFja2dyb3VuZEl0ZW0iLCJlbGVtZW50IiwibmV3RWxlbWVudCIsInRhZyIsImJhY2tncm91bmRJdGVtcyIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiYm9keUFwcGVuZENoaWxkIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWN0U2VjdGlvbiIsImNvbnRhY3RUZXh0T2JqZWN0IiwiY29ubnRhY3RUYWdzIiwiY2xhc3NJZCIsImgxIiwiaHRtbFN0cmluZyIsImgyIiwiaDMiLCJhIiwiaHJlZiIsInRhcmdldCIsImZvb3RlciIsImNvbnRhY3RFbGVtZW50TGlzdCIsImNvbnRhY3RJdGVtIiwiY29udGFjdEl0ZW1zIiwiZWxlbWVudExpc3QiLCJjbGFzc0xpc3QiLCJpbm5lckhUTUwiLCJuYXZCYXIiLCJuYXZUZXh0IiwibmF2VGl0bGVzIiwiYWJvdXRQYWdlIiwidGV4dCIsInByb2plY3RQYWdlIiwiY29udGFjdFBhZ2UiLCJuYXZCYXJMaXN0IiwibmF2SXRlbSIsIm5hdkJhclNlY3Rpb24iLCJuYXZJdGVtcyIsIngiLCJPYmplY3QiLCJrZXlzIiwic3RhdENhcmQiLCJyZXN0YXVyYW50Iiwicm9ja1BhcGVyU2Npc3NvcnMiLCJsaWJyYXJ5IiwicHJvamVjdFNlY3Rpb24iLCJwcm9qZWN0VGV4dE9iamVjdCIsInByb2plY3RzIiwicHJvamVjdENsYXNzIiwicHJvamVjdFRhZ3MiLCJjb2RlTGlua1RleHQiLCJsaXZlUHJldmlld1RleHQiLCJwcm9qZWN0MSIsInByb2plY3QxSW1hZ2UiLCJpbWciLCJhbHQiLCJkaXYiLCJjb2RlTGluayIsImxpdmVQcmV2aWV3IiwicHJvamVjdDIiLCJwcm9qZWN0MkltYWdlIiwicHJvamVjdDMiLCJwcm9qZWN0M0ltYWdlIiwicHJvamVjdDQiLCJwcm9qZWN0NEltYWdlIiwiZGVzY3JpcHRFbGVtZW50TGlzdCIsIm51bWJlciIsIml0ZW0wIiwicHJvamVjdEltYWdlRWxlbWVudHMiLCJkZXNjcmlwdEVsZW1lbnRzIiwiaXRlbTEiLCJpdGVtMiIsInByb2plY3RFbGVtZW50cyIsImVsZW1lbnRzIiwicHJvamVjdEVsZW1lbnQiLCJwcm9qZWN0TGlzdCIsInB1c2giLCJwcm9qZWN0Q29udGFpbmVyIiwid2VsY29tZVNlY3Rpb24iLCJ3ZWxjb21lVGV4dE9iamVjdCIsIndlbGNvbWVUYWdzIiwiY2xhc3MiLCJwIiwid2VsY29tZUVsZW1lbnRMaXN0Iiwid2VsY29tZUl0ZW0iLCJ3ZWxjb21lSXRlbXMiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJiaW5kRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUN1ckFkZE5ldyIsInJlbW92ZVByZXYiLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlIiwiTmV3Il0sInNvdXJjZVJvb3QiOiIifQ==