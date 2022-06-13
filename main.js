(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_interview_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/interview/base/base.component */ "./src/app/pages/interview/base/base.component.ts");
/* harmony import */ var _pages_interview_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/interview/secondary/secondary.component */ "./src/app/pages/interview/secondary/secondary.component.ts");
/* harmony import */ var _pages_interview_vue_vue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/interview/vue/vue.component */ "./src/app/pages/interview/vue/vue.component.ts");
/* harmony import */ var _pages_interview_webpack_webpack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/interview/webpack/webpack.component */ "./src/app/pages/interview/webpack/webpack.component.ts");
/* harmony import */ var _pages_interview_react_react_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/interview/react/react.component */ "./src/app/pages/interview/react/react.component.ts");
/* harmony import */ var _pages_interview_cyber_security_cyber_security_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/interview/cyber-security/cyber-security.component */ "./src/app/pages/interview/cyber-security/cyber-security.component.ts");
/* harmony import */ var _pages_Rust_rust_base_rust_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Rust/rust-base/rust-base.component */ "./src/app/pages/Rust/rust-base/rust-base.component.ts");
/* harmony import */ var _pages_Rust_rust_secondary_rust_secondary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Rust/rust-secondary/rust-secondary.component */ "./src/app/pages/Rust/rust-secondary/rust-secondary.component.ts");












const routes = [
    { path: 'interview',
        children: [
            { path: 'base', component: _pages_interview_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] },
            { path: 'secondary', component: _pages_interview_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryComponent"] },
            { path: 'vue', component: _pages_interview_vue_vue_component__WEBPACK_IMPORTED_MODULE_4__["VueComponent"] },
            { path: 'webpack', component: _pages_interview_webpack_webpack_component__WEBPACK_IMPORTED_MODULE_5__["WebpackComponent"] },
            { path: 'react', component: _pages_interview_react_react_component__WEBPACK_IMPORTED_MODULE_6__["ReactComponent"] },
            { path: 'cybersecurity', component: _pages_interview_cyber_security_cyber_security_component__WEBPACK_IMPORTED_MODULE_7__["CyberSecurityComponent"] },
            { path: '**', redirectTo: 'base', }
        ]
    },
    { path: 'rust',
        children: [
            { path: 'base', component: _pages_Rust_rust_base_rust_base_component__WEBPACK_IMPORTED_MODULE_8__["RustBaseComponent"] },
            { path: 'secondary', component: _pages_Rust_rust_secondary_rust_secondary_component__WEBPACK_IMPORTED_MODULE_9__["RustSecondaryComponent"] },
            { path: '**', redirectTo: 'base', }
        ]
    },
    { path: '**', redirectTo: 'interview' } //返回匹配
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aside/aside.component */ "./src/app/components/aside/aside.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */", "div[_ngcontent-%COMP%]{\n        width: 100vw;\n        height: 100vh;\n    }\n    main[_ngcontent-%COMP%]{\n        display: flex;\n        height: calc(100% - 60px)\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aside/aside.component */ "./src/app/components/aside/aside.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pages_interview_base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/interview/base/base.component */ "./src/app/pages/interview/base/base.component.ts");
/* harmony import */ var _pages_interview_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/interview/secondary/secondary.component */ "./src/app/pages/interview/secondary/secondary.component.ts");
/* harmony import */ var _pages_Rust_rust_base_rust_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Rust/rust-base/rust-base.component */ "./src/app/pages/Rust/rust-base/rust-base.component.ts");
/* harmony import */ var _pages_Rust_rust_secondary_rust_secondary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Rust/rust-secondary/rust-secondary.component */ "./src/app/pages/Rust/rust-secondary/rust-secondary.component.ts");
/* harmony import */ var _pages_interview_vue_vue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/interview/vue/vue.component */ "./src/app/pages/interview/vue/vue.component.ts");
/* harmony import */ var _pages_interview_cyber_security_cyber_security_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/interview/cyber-security/cyber-security.component */ "./src/app/pages/interview/cyber-security/cyber-security.component.ts");
/* harmony import */ var _pages_interview_webpack_webpack_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/interview/webpack/webpack.component */ "./src/app/pages/interview/webpack/webpack.component.ts");
/* harmony import */ var _pages_interview_react_react_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/interview/react/react.component */ "./src/app/pages/interview/react/react.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _pages_interview_base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"],
        _pages_interview_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_8__["SecondaryComponent"],
        _pages_Rust_rust_base_rust_base_component__WEBPACK_IMPORTED_MODULE_9__["RustBaseComponent"],
        _pages_Rust_rust_secondary_rust_secondary_component__WEBPACK_IMPORTED_MODULE_10__["RustSecondaryComponent"],
        _pages_interview_vue_vue_component__WEBPACK_IMPORTED_MODULE_11__["VueComponent"],
        _pages_interview_cyber_security_cyber_security_component__WEBPACK_IMPORTED_MODULE_12__["CyberSecurityComponent"],
        _pages_interview_webpack_webpack_component__WEBPACK_IMPORTED_MODULE_13__["WebpackComponent"],
        _pages_interview_react_react_component__WEBPACK_IMPORTED_MODULE_14__["ReactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _pages_interview_base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"],
                    _pages_interview_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_8__["SecondaryComponent"],
                    _pages_Rust_rust_base_rust_base_component__WEBPACK_IMPORTED_MODULE_9__["RustBaseComponent"],
                    _pages_Rust_rust_secondary_rust_secondary_component__WEBPACK_IMPORTED_MODULE_10__["RustSecondaryComponent"],
                    _pages_interview_vue_vue_component__WEBPACK_IMPORTED_MODULE_11__["VueComponent"],
                    _pages_interview_cyber_security_cyber_security_component__WEBPACK_IMPORTED_MODULE_12__["CyberSecurityComponent"],
                    _pages_interview_webpack_webpack_component__WEBPACK_IMPORTED_MODULE_13__["WebpackComponent"],
                    _pages_interview_react_react_component__WEBPACK_IMPORTED_MODULE_14__["ReactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/aside/aside.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/aside/aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_meun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/meun.service */ "./src/app/service/meun.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { active: a0 }; };
function AsideComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.data.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.meun.url.indexOf(item_r1.path) != 0 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.path, " ");
} }
class AsideComponent {
    constructor(route, router, meun) {
        this.route = route;
        this.router = router;
        this.meun = meun;
    }
    ngOnInit() {
        this.router.events.pipe(//监听路由代码
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((res) => {
            this.meun.getMenu();
        });
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_meun_service__WEBPACK_IMPORTED_MODULE_3__["MeunService"])); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 2, vars: 1, consts: [["class", "menu", 4, "ngFor", "ngForOf"], [1, "menu"], [3, "routerLink", "ngClass"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideComponent_div_1_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meun.asideMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50Lmxlc3MifQ== */", "aside[_ngcontent-%COMP%]{\n        width: 200px;\n    }\n    .menu[_ngcontent-%COMP%]{\n        width: 200px;\n        height: 40px;\n        margin:  5px 0;\n    }\n    a[_ngcontent-%COMP%]{\n        line-height: 40px;\n    }\n    .active[_ngcontent-%COMP%]{\n        background-color: yellowgreen;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_meun_service__WEBPACK_IMPORTED_MODULE_3__["MeunService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_meun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/meun.service */ "./src/app/service/meun.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { active: a0 }; };
function HeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.router.url.indexOf(item_r1.path) != 0 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.path, " ");
} }
class HeaderComponent {
    constructor(route, router, meun) {
        this.route = route;
        this.router = router;
        this.meun = meun;
        this.menuArr = [];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_meun_service__WEBPACK_IMPORTED_MODULE_2__["MeunService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 1, consts: [[1, "logo"], [1, "menu"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], [3, "routerLink", "ngClass"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meun.topMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJ9 */", "header[_ngcontent-%COMP%]{\n        height: 60px;\n        display: flex;\n        line-height: 60px;\n    }\n    .logo[_ngcontent-%COMP%]{\n        width: 200px;\n    }\n    .menu[_ngcontent-%COMP%]{\n        flex: 1;\n        display: flex;\n    }\n    .menu-item[_ngcontent-%COMP%]{\n        padding: 10px;\n        line-height: 40px;\n    }\n    .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n    .active[_ngcontent-%COMP%]{\n        background-color: yellowgreen;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_meun_service__WEBPACK_IMPORTED_MODULE_2__["MeunService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/Rust/rust-base/rust-base.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/Rust/rust-base/rust-base.component.ts ***!
  \*************************************************************/
/*! exports provided: RustBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RustBaseComponent", function() { return RustBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RustBaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
RustBaseComponent.ɵfac = function RustBaseComponent_Factory(t) { return new (t || RustBaseComponent)(); };
RustBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RustBaseComponent, selectors: [["app-rust-base"]], decls: 2, vars: 0, template: function RustBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rust-base works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1J1c3QvcnVzdC1iYXNlL3J1c3QtYmFzZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RustBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rust-base',
                templateUrl: './rust-base.component.html',
                styleUrls: ['./rust-base.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/Rust/rust-secondary/rust-secondary.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Rust/rust-secondary/rust-secondary.component.ts ***!
  \***********************************************************************/
/*! exports provided: RustSecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RustSecondaryComponent", function() { return RustSecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RustSecondaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
RustSecondaryComponent.ɵfac = function RustSecondaryComponent_Factory(t) { return new (t || RustSecondaryComponent)(); };
RustSecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RustSecondaryComponent, selectors: [["app-rust-secondary"]], decls: 2, vars: 0, template: function RustSecondaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rust-secondary works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1J1c3QvcnVzdC1zZWNvbmRhcnkvcnVzdC1zZWNvbmRhcnkuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RustSecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rust-secondary',
                templateUrl: './rust-secondary.component.html',
                styleUrls: ['./rust-secondary.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/base/base.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/interview/base/base.component.ts ***!
  \********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 253, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "js\u7684\u6570\u636E\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ES5\u76845\u79CD\uFF1ANull\uFF0Cundefined\uFF0CBoolean\uFF0CNumber\uFF0CString");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ES6\u65B0\u589E\uFF1ASymbol\u8868\u793A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ES10\u65B0\u589E\uFF1ABigInt \u8868\u793A\u4EFB\u610F\u5927\u7684\u6574\u6570\uFF0C\u89E3\u51B3\u6574\u6570\u6EA2\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u5F15\u7528\u6570\u636E\u7C7B\u578B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Object\u3001Array\u3001 function\u3001Date\u3001RegExp\u3001\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6570\u636E\u7C7B\u578B\u5B58\u50A8\u4EE5\u53CA\u5806\u6808\u5185\u5B58\u662F\u4EC0\u4E48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u6808 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5B58\u8D2E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u5F15\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u5360\u636E\u7A7A\u95F4\u5C0F\uFF0C\u5927\u5C0F\u56FA\u5B9A\uFF0C\u5C5E\u4E8E\u88AB\u9891\u7E41\u4F7F\u7528\u7684\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u5806 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u5B58\u50A8\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u7684\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u6570\u636E\u7C7B\u578B\u5224\u65AD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "typeof \u57FA\u672C\u6570\u636E\u7C7B\u578B\u5224\u65AD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "instanceof \u53EA\u80FD\u6B63\u786E\u5224\u65AD\u5F15\u7528\u6570\u636E\u7C7B\u578B \u5224\u65AD\u5728\u5176\u539F\u578B\u94FE\u4E2D\u80FD\u5426\u627E\u5230\u8BE5\u7C7B\u578B\u7684\u539F\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "constructor \u5982\u679C\u6539\u53D8\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u6307\u5411 \u5224\u65AD\u5C31\u4F1A\u51FA\u9519");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Object.prototype.toString.call() \u4F7F\u7528 Object \u5BF9\u8C61\u7684\u539F\u578B\u65B9\u6CD5 toString \u6765\u5224\u65AD\u6570\u636E\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "js\u6570\u636E\u7C7B\u578B\u8F6C\u6362");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u8F6C\u6362\u4E3A\u6570\u5B57\uFF08\u8C03\u7528Number(),parseInt(),parseFloat()\u65B9\u6CD5\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF08\u8C03\u7528.toString()\u6216String()\u65B9\u6CD5\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF08\u8C03\u7528Boolean()\u65B9\u6CD5\uFF09 \u8FD8\u6709\u9690\u5F0F\u8F6C\u6362 \u6CE8\u610F\uFF1Anull\u3001undefined\u6CA1\u6709.toString\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u6587\u6863\u548C\u6D4F\u89C8\u5668\u7A97\u53E3\u4E2D\u53D1\u751F\u7684\u7279\u5B9A\u7684\u4EA4\u4E92\u77AC\u95F4\uFF0C\u4E8B\u4EF6\u5C31\u53D1\u751F\u4E86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u4E8B\u4EF6\u6355\u83B7 \u4ECE\u4E8B\u4EF6\u53D1\u751F\u7684\u9876\u70B9\u5F00\u59CB\uFF0C\u9010\u7EA7\u5F80\u4E0B\u67E5\u627E\uFF0C\u4E00\u76F4\u5230\u76EE\u6807\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u4E8B\u4EF6 \u76EE\u6807\u9636\u6BB5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u4E8B\u4EF6\u5192\u6CE1 \u4E8B\u4EF6\u4ECE\u76EE\u6807\u8282\u70B9\u9010\u7EA7\u5411\u4E0A\u4F20\u9012\uFF0C\u76F4\u5230\u6839\u8282\u70B9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Javascript \u7684\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u4F5C\u7528\u57DF\uFF1A \u4F5C\u7528\u57DF\u662F\u5B9A\u4E49\u53D8\u91CF\u7684\u533A\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u5168\u5C40\u4F5C\u7528\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u51FD\u6570\u4F5C\u7528\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u5757\u7EA7\u4F5C\u7528\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u4F5C\u7528\u57DF\u94FE \u53D8\u91CF\u5148\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u5BFB\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u5C31\u9010\u7EA7\u5411\u4E0A\u5BFB\u627E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u5EF6\u957F\u4F5C\u7528\u57DF\u94FE with Error \u95ED\u5305");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u53D8\u91CF\u63D0\u5347 \u8282\u7701\u5185\u5B58\u5F00\u9500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u9632\u6296\u8282\u6D41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u9632\u6296\uFF1A\u53EA\u89E6\u53D1\u6700\u540E\u4E00\u6B21\uFF0C\u6BCF\u6B21\u6E05\u9664\u4E4B\u524D\u7684\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u8282\u6D41\uFF1A\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u53EA\u53D1\u751F\u4E00\u6B21\uFF0C\u4F7F\u7528\u8282\u6D41\u9600\uFF0C\u89E6\u53D1\u4E4B\u540E\u6253\u5F00\u8282\u6D41\u9600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u5BF9\u8C61\u548C\u9762\u5411\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u5BF9\u8C61\uFF1A\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u96C6\u5408\u53EB\u505A\u5BF9\u8C61\uFF08\u4E07\u7269\u7686\u5BF9\u8C61\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u9762\u5411\u5BF9\u8C61\uFF1A\u5C01\u88C5\uFF0C\u7EE7\u627F\uFF0C\u591A\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "new Object\u3001\u5B57\u9762\u91CF\u3001\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "new Object\u3001\u5B57\u9762\u91CF\u3001 \u5C11\u91CF\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u5927\u91CF\u4F7F\u7528 \u5EFA\u8BAE\u4F7F\u7528 class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u6DF1\u62F7\u8D1D\uFF0C\u6D45\u62F7\u8D1D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u6DF1\u62F7\u8D1D \u590D\u5236\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u6D45\u62F7\u8D1D \u590D\u5236\u5F15\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "JSON.parse(JSON.stringify())");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Jquery.extend() ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "cloneDeep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u9012\u5F52\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u5B57\u7B26\u4E32\u5B58\u50A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u5B58\u4E8E\u5806\u5185\u5B58\u4E2D\uFF0C\u6307\u9488\u5B58\u4E8E\u6808\u5185\u5B58\u4E2D\uFF0C\u4E14\u76F8\u540C\u7684\u5B57\u7B26\u4E32\u6307\u5411\u540C\u4E00\u4E2A\u5806\u5185\u5B58\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u65B0\u589E\u6216\u8005\u4FEE\u6539\u5B57\u7B26\u4E32\u540E\uFF0C\u5982\u679C\u662F\u4E00\u4E2A\u4E4B\u524D\u4E0D\u5B58\u5728\u7684\u5B57\u7B26\u4E32\uFF0C\u5219\u65B0\u5F00\u8F9F\u5185\u5B58\u7A7A\u95F4\uFF0C\u5982\u679C\u662F\u5DF2\u6709\u7684\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528\u5DF2\u6709\u7684\u5185\u5B58\u7A7A\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u51FD\u6570\u58F0\u660E function name ()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u51FD\u6570\u8868\u8FBE\u5F0F func = function ()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "func = new Function(\"\u53C2\u65701\",\"\u53C2\u65702\",...,\"\u53C2\u6570n\",\"\u51FD\u6570\u4F53\");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u7ACB\u5373\u6267\u884C\u51FD\u6570 func=(function(n1,n2))()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u51FD\u6570\u58F0\u660E\u4F1A\u5C06\u90A3\u4E2A\u51FD\u6570\u63D0\u5347\u5230\u6700\u524D\u9762\uFF0C\u6210\u4E3A\u5168\u5C40\u51FD\u6570\u3002funcname()\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u51FD\u6570\u8868\u8FBE\u5F0F\u4E0D\u7528\uFF0C\u53EF\u4EE5\u7528\u4F5C\u533F\u540D\u51FD\u6570 \u53D8\u91CF()\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u51FD\u6570\u7684length \u6CA1\u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u7684\u4E2A\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u7ACB\u5373\u6267\u884C\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u7ACB\u5373\u6267\u884C\u51FD\u6570\u4F1A\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E9B\u4E34\u65F6\u53D8\u91CF\u6216\u8005\u5C40\u90E8\u53D8\u91CF\uFF0C\u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u4EE3\u7801\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u4E0D\u5F97\u4E0D\u6267\u884C\u4E00\u4E9B\u8BBE\u7F6E\u5DE5\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u6240\u6709\u7684\u8FD9\u4E9B\u5DE5\u4F5C\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21\uFF0C\u6BD4\u5982\u53EA\u9700\u8981\u663E\u793A\u4E00\u4E2A\u65F6\u95F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u9700\u8981\u4E00\u4E9B\u4E34\u65F6\u7684\u53D8\u91CF\uFF0C\u4F46\u662F\u521D\u59CB\u5316\u8FC7\u7A0B\u7ED3\u675F\u4E4B\u540E\uFF0C\u5C31\u518D\u4E5F\u4E0D\u4F1A\u88AB\u7528\u5230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "arguments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u51FD\u6570\u53C2\u6570\u7EC4\u6210\u7684arrayLike\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u7BAD\u5934\u51FD\u6570\u4F7F\u7528 args \u5269\u4F59\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "this\u6307\u5411\u7684\u95EE\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u5728\u5168\u5C40\u7684\u73AF\u5883\u4E0Bthis\u662F\u6307\u5411window\uFF0C \u4E25\u683C\u6A21\u5F0F\u4E0Bthis\u4F1A\u6307\u5411 undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u5728\u5BF9\u8C61\u91CC\u8C03\u7528\u7684this\uFF0C\u6307\u5411\u8C03\u7528\u51FD\u6570\u7684\u90A3\u4E2A\u5BF9\u8C61\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u5728\u6784\u9020\u51FD\u6570\u4EE5\u53CA\u7C7B\u4E2D\u7684this\uFF0C\u6784\u9020\u51FD\u6570\u914D\u5408 new \u4F7F\u7528, \u800C new \u5173\u952E\u5B57\u4F1A\u5C06\u6784\u9020\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6784\u9020\u51FD\u6570\u4E2D\u7684 this \u6307\u5411 \u5F53\u524D\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u65B9\u6CD5\u4E2D\u7684this\u8C01\u8C03\u7528\u5C31\u6307\u5411\u8C01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u7BAD\u5934\u51FD\u6570\u7684this\u5728\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u4F1A\u7EE7\u627F\u4E0A\u4E0B\u6587\u7684this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u51FD\u6570\u5F0F\u7F16\u7A0B\u542B\u4E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u7EC4\u5408\u7EAF\u51FD\u6570\u907F\u514D\u5171\u4EAB\u72B6\u6001\u3001\u53EF\u53D8\u4F5C\u7528\u548C\u526F\u4F5C\u7528\u6765\u6784\u5EFA\u8F6F\u4EF6\u7684\u8FC7\u7A0B\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u4F7F\u7528\u51FD\u6570\u6765\u62BD\u8C61\u4F5C\u7528\u5728\u6570\u636E\u4E4B\u4E0A\u7684\u63A7\u5236\u6D41\u548C\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5728\u7CFB\u7EDF\u4E2D\u6D88\u9664\u526F\u4F5C\u7528\u5E76\u51CF\u5C11\u5BF9\u72B6\u6001\u7684\u6539\u53D8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u7EAF\u51FD\u6570\uFF0C\u4E0D\u6539\u53D8\u53C2\u6570\uFF0C\u4E0D\u6539\u53D8\u73AF\u5883\uFF0C\u6BCF\u6B21\u8C03\u7528\u8FD4\u56DE\u503C\u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u95ED\u5305");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u95ED\u5305\u7684\u6982\u5FF5\u5C31\u662F\uFF1A\u53EA\u6709\u6743\u5229\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u95ED\u5305\u53EF\u4EE5\u91CD\u7528\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E14\u53D8\u91CF\u4E0D\u4F1A\u88AB\u6C61\u67D3\uFF0C\u5EF6\u957F\u53D8\u91CF\u751F\u547D\u5468\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u7F3A\u70B9\uFF0C\u5185\u5B58\u6D88\u8017\u5927\uFF0C\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u4F7F\u7528\u573A\u666F \u521B\u5EFA\u79C1\u6709\u53D8\u91CF \u51FD\u6570\u67EF\u91CC\u5316 \u6A21\u5757\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u51FD\u6570\u67EF\u91CC\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570 \u95ED\u5305");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u5EF6\u8FDF\u8BA1\u7B97\u3001\u53C2\u6570\u590D\u7528\u3001\u52A8\u6001\u751F\u6210\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u95ED\u5305\u7684\u4E00\u79CD\u5E94\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u4EC0\u4E48\u662F\u9AD8\u9636\u51FD\u6570\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u51FD\u6570\u7684\u53C2\u6570 \u6216\u8005\u8FD4\u56DE\u503C\u662F\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u5F00\u8F9F\u5185\u5B58\u7A7A\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u521B\u5EFA\u7A7A\u5BF9\u8C61\uFF0C\u6784\u9020\u51FD\u6570\u7684this\u6307\u5411\u7A7A\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u65B0\u5BF9\u8C61\u6267\u884C\u539F\u578B\u8FDE\u63A5\uFF0C\u6DFB\u52A0\u539F\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u5224\u65AD\u662F\u5426\u6709\u8FD4\u56DE\u503C\uFF0C\u6CA1\u6709\u8FD4\u56DEthis\uFF0C\u6709\u8FD4\u56DE\u6784\u9020\u51FD\u6570\u7684\u8FD4\u56DE\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u5783\u573E\u56DE\u6536");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u81EA\u52A8\u5185\u5B58\u7BA1\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u5F15\u7528\u8BA1\u6570 \u5FAA\u73AF\u5F15\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u6807\u8BB0\u626B\u9664\u7B97\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\u5185\u5B58\u6CC4\u9732 \u95ED\u5305 Dom \u8BA1\u65F6\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "js\u6267\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u5355\u7EBF\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\u540C\u6B65\u4EFB\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u5B8F\u4EFB\u52A1 \u5B9A\u65F6\u5668 ajax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u5FAE\u4EFB\u52A1 promise process.nextTick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u5148\u6267\u884C\u540C\u6B65\u4EFB\u52A1 \u5F02\u6B65\u4EFB\u52A1\u5148\u6267\u884C\u5FAE\u4EFB\u52A1\u518D\u6267\u884C\u5B8F\u4EFB\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\u5EF6\u8FDF\u52A0\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "js\u653E\u5728\u5E95\u90E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "defer\u5C5E\u6027 \u52A0\u8F7D\u5B8C\u518D\u6267\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "async \u52A0\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\u76D1\u542Cdom load\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "location\u3001lnavigator\u3001history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "location \u5BF9\u8C61\u5B58\u50A8\u4E86\u5F53\u524D\u6587\u6863\u4F4D\u7F6E\uFF08URL\uFF09\u76F8\u5173\u7684\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "history \u5B58\u50A8\u4E86\u7528\u6237\uFF08\u5728\u6D4F\u89C8\u5668\u7A97\u53E3\u4E2D\uFF09 \u8BBF\u95EE\u8FC7\u7684 URL\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "navigator`\u5BF9\u8C61\u5305\u542B\u6709\u5173\u6D4F\u89C8\u5668\u7684\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy9iYXNlL2Jhc2UuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base',
                templateUrl: './base.component.html',
                styleUrls: ['./base.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/cyber-security/cyber-security.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/interview/cyber-security/cyber-security.component.ts ***!
  \****************************************************************************/
/*! exports provided: CyberSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberSecurityComponent", function() { return CyberSecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CyberSecurityComponent {
    constructor() { }
    ngOnInit() {
    }
}
CyberSecurityComponent.ɵfac = function CyberSecurityComponent_Factory(t) { return new (t || CyberSecurityComponent)(); };
CyberSecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CyberSecurityComponent, selectors: [["app-cyber-security"]], decls: 41, vars: 0, template: function CyberSecurityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "iframe\u5F15\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u5224\u65ADlocation.href \u662F\u5426\u662F top.location.href \u4E0D\u662F\u5F3A\u5236\u8DF3\u8F6C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CSRF / XSRF\uFF08\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u6D89\u53CA\u5230\u6570\u636E\u4FEE\u6539\u64CD\u4F5C\u4E25\u683C\u4F7F\u7528 post \u8BF7\u6C42\u800C\u4E0D\u662F get \u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HTTP \u534F\u8BAE\u4E2D\u4F7F\u7528 Referer \u5C5E\u6027\u6765\u786E\u5B9A\u8BF7\u6C42\u6765\u6E90\u8FDB\u884C\u8FC7\u6EE4\uFF08\u7981\u6B62\u5916\u57DF\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u8BF7\u6C42\u5730\u5740\u6DFB\u52A0 token \uFF0C\u4F7F\u9ED1\u5BA2\u65E0\u6CD5\u4F2A\u9020\u7528\u6237\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HTTP \u5934\u81EA\u5B9A\u4E49\u5C5E\u6027\u9A8C\u8BC1\uFF08\u7C7B\u4F3C\u4E0A\u4E00\u6761\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u663E\u793A\u9A8C\u8BC1\u65B9\u5F0F\uFF1A\u6DFB\u52A0\u9A8C\u8BC1\u7801\u3001\u5BC6\u7801\u7B49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "XSS/CSS\uFF08\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u89E3\u6790js\u4EE3\u7801\u5E76\u6267\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u6301\u4E45\u578BXSS\uFF1A\u5C06\u811A\u672C\u690D\u5165\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6BCF\u4E2A\u8BBF\u95EE\u7684\u7528\u6237\u90FD\u4F1A\u6267\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u975E\u6301\u4E45\u578BXSS\uFF1A\u5BF9\u4E2A\u4F53\u7528\u6237\u67D0url\u7684\u53C2\u6570\u8FDB\u884C\u653B\u51FB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u73B0\u4EE3\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u90FD\u81EA\u5E26 XSS \u7B5B\u9009\u5668\uFF0Cvue / react \u7B49\u6210\u719F\u6846\u67B6\u4E5F\u5BF9 XSS \u8FDB\u884C\u4E00\u4E9B\u9632\u62A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ClickJacking\uFF08\u70B9\u51FB\u52AB\u6301\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u4E00\u822C\u4F1A\u5229\u7528\u900F\u660E iframe \u8986\u76D6\u539F\u7F51\u9875\u8BF1\u5BFC\u7528\u6237\u8FDB\u884C\u67D0\u4E9B\u64CD\u4F5C\u8FBE\u6210\u76EE\u7684\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u5728HTTP\u6295\u4E2D\u52A0\u5165 X-FRAME-OPTIONS \u5C5E\u6027\uFF0C\u6B64\u5C5E\u6027\u63A7\u5236\u9875\u9762\u662F\u5426\u53EF\u88AB\u5D4C\u5165 iframe \u4E2D\u3010DENY\uFF1A\u4E0D\u80FD\u88AB\u6240\u6709\u7F51\u7AD9\u5D4C\u5957\u6216\u52A0\u8F7D\uFF1BSAMEORIGIN\uFF1A\u53EA\u80FD\u88AB\u540C\u57DF\u7F51\u7AD9\u5D4C\u5957\u6216\u52A0\u8F7D\uFF1BALLOW-FROM URL\uFF1A\u53EF\u4EE5\u88AB\u6307\u5B9A\u7F51\u7AD9\u5D4C\u5957\u6216\u52A0\u8F7D\u3002\u3011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u5224\u65AD\u5F53\u524D\u7F51\u9875\u662F\u5426\u88AB iframe \u5D4C\u5957\uFF08\u8BE6\u60C5\u5728\u7B2C\u4E00\u6761 firame \u4E2D\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy9jeWJlci1zZWN1cml0eS9jeWJlci1zZWN1cml0eS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CyberSecurityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cyber-security',
                templateUrl: './cyber-security.component.html',
                styleUrls: ['./cyber-security.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/react/react.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/interview/react/react.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ReactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReactComponent.ɵfac = function ReactComponent_Factory(t) { return new (t || ReactComponent)(); };
ReactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReactComponent, selectors: [["app-react"]], decls: 66, vars: 0, template: function ReactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "React\u7684\u4E25\u683C\u6A21\u5F0F\u5982\u4F55\u4F7F\u7528\uFF0C\u6709\u4EC0\u4E48\u7528\u5904\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u8BC6\u522B\u4E0D\u5B89\u5168\u7684\u751F\u547D\u5468\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5173\u4E8E\u4F7F\u7528\u8FC7\u65F6\u5B57\u7B26\u4E32 ref API \u7684\u8B66\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u5173\u4E8E\u4F7F\u7528\u5E9F\u5F03\u7684 findDOMNode \u65B9\u6CD5\u7684\u8B66\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u68C0\u6D4B\u610F\u5916\u7684\u526F\u4F5C\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u68C0\u6D4B\u8FC7\u65F6\u7684 context API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "React.Children.map\u548Cjs\u7684map\u6709\u4EC0\u4E48\u533A\u522B\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " JavaScript\u4E2D\u7684map\u4E0D\u4F1A\u5BF9\u4E3Anull\u6216\u8005undefined\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u800CReact.Children.map\u4E2D\u7684map\u53EF\u4EE5\u5904\u7406React.Children\u4E3Anull\u6216\u8005undefined\u7684\u60C5\u51B5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u9AD8\u9636\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u88C5\u9970\u6A21\u5F0F \u4E0D\u6539\u53D8\u88C5\u9970\u5BF9\u8C61\u672C\u8EAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570 \u8FD4\u56DE\u5305\u8F6C\u540E\u7684\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u5C5E\u6027\u7A7F\u900F props \u4E5F\u5FC5\u987B\u4F20\u4E0B\u53BB \u4E0D\u7136\u4F1A\u6709\u5C5E\u6027\u7F3A\u5931");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "render\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u903B\u8F91\u7EC4\u4EF6\u63A5\u53D7\u53C2\u6570 \u8FD4\u56DE\u5904\u7406\u540E\u7684\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u4F7F\u7528\u7684\u5730\u65B9\u63D0\u4F9B\u5E03\u5C40 \u5E76\u63A5\u53D7\u8FD4\u56DE\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "hook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u903B\u8F91\u76F4\u63A5\u62FF\u6765\u590D\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u4E3A\u4EC0\u4E48\u8C03\u7528 setState \u800C\u4E0D\u662F\u76F4\u63A5\u6539\u53D8 state\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u4FEE\u6539state\u5E76\u4E0D\u80FD\u89E6\u53D1\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u591A\u6B21\u8FDE\u7EED\u8C03\u7528setState \u4F1A\u5408\u5E76\u6210\u4E00\u6B21\u72B6\u6001\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u4F9D\u8D56\u53D8\u5316\u540E\u7684\u503C\u9700\u8981\u5728setState\u4E2D\u4F20\u5165\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u4E0D\u53EF\u53D8\u5BF9\u8C61\u7684\u4FEE\u6539\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u4E0D\u7528\u62C5\u5FC3\u539F\u5BF9\u8C61\u5728\u4E0D\u5C0F\u5FC3\u7684\u60C5\u51B5\u4E0B\u4FEE\u6539\u5BFC\u81F4\u7684\u9519\u8BEF\uFF0C\u65B9\u4FBF\u7A0B\u5E8F\u7684\u7BA1\u7406\u548C\u8C03\u8BD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u5728\u7EC4\u4EF6\u7684shouldComponentUpdate\u65B9\u6CD5\u4E2D\u4EC5\u9700\u8981\u6BD4\u8F83\u524D\u540E\u4E24\u6B21\u72B6\u6001\u5BF9\u8C61\u7684\u5F15\u7528\u5C31\u53EF\u4EE5\u5224\u65AD\u72B6\u6001\u662F\u5426\u771F\u7684\u6539\u53D8\uFF0C\u4ECE\u800C\u907F\u514D\u4E0D\u5FC5\u8981\u7684render\u8C03\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u63A7\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u53D7\u63A7\u7EC4\u4EF6 \u4E3A\u6BCF\u4E2A\u72B6\u6001\u7F16\u5199\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u975E\u63A7\u7EC4\u4EF6 \u4E0D\u9700\u8981\u6BCF\u4E2A\u72B6\u6001\u7F16\u5199\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "React-Router\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "hash \u76D1\u542C\u8DEF\u7531\u53D8\u5316 \u5339\u914D\u5BF9\u5E94\u7684component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "history ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy9yZWFjdC9yZWFjdC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-react',
                templateUrl: './react.component.html',
                styleUrls: ['./react.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/secondary/secondary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/interview/secondary/secondary.component.ts ***!
  \******************************************************************/
/*! exports provided: SecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponent", function() { return SecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecondaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondaryComponent.ɵfac = function SecondaryComponent_Factory(t) { return new (t || SecondaryComponent)(); };
SecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryComponent, selectors: [["app-secondary"]], decls: 124, vars: 0, template: function SecondaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ES6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF(let,const)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u63D0\u4F9B\u4E86\u5B9A\u4E49\u7C7B\u7684\u8BED\u6CD5\u7CD6(class)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u65B0\u589E\u4E86\u4E00\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B(Symbol)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u65B0\u589E\u4E86\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u51FD\u6570\u53C2\u6570\u5141\u8BB8\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5F15\u5165\u4E86 rest \u53C2\u6570\uFF0C\u65B0\u589E\u4E86\u7BAD\u5934\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u65B0\u589E\u4E86\u6A21\u5757\u5316(import/export)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u65B0\u589E\u4E86 Set \u548C Map \u6570\u636E\u7ED3\u6784");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u539F\u751F\u63D0\u4F9B Proxy \u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210 Proxy \u5B9E\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u65B0\u589E\u4E86\u751F\u6210\u5668(Generator)\u548C\u904D\u5386\u5668(Iterator)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "require\u4E0Eimport\u7684\u533A\u522B\u548C\u4F7F\u7528(CommonJS\u89C4\u8303\u548Ces6\u89C4\u8303)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "import ES\u89C4\u8303 export\u591A\u6B21\u5BFC\u51FA export default\u4EC5\u6709\u4E00\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "require exports\u5C5E\u6027\u662F\u5BF9\u5916\u63A5\u53E3\u52A0\u8F7D\u65F6 \u5B9E\u5728\u8BBF\u95EEmodule.exports\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "require\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0Cimport\u662F\u7F16\u8BD1\u65F6\u52A0\u8F7D\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0C\u5168\u90E8\u52A0\u8F7D\uFF0C\u7528\u7684\u65F6\u5019\u627E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u7F16\u8BD1\u65F6\u52A0\u8F7D\u00B7\uFF0C\u7528\u90A3\u4E9B\u52A0\u8F7D\u90A3\u4E9B\uFF0C\u8FD8\u80FD\u63D0\u524D\u62A5\u9519");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "require\u53EF\u4EE5\u5199\u5728\u4EE3\u7801\u7684\u4EFB\u610F\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "import\u53EA\u80FD\u5199\u5728\u6587\u4EF6\u7684\u6700\u9876\u7AEF\u4E14\u4E0D\u53EF\u5728\u6761\u4EF6\u8BED\u53E5\u6216\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u4F7F\u7528\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "require\u901A\u8FC7module.exports\u5BFC\u51FA\u7684\u503C\u5C31\u4E0D\u80FD\u518D\u53D8\u5316\uFF0Cimport\u901A\u8FC7export\u5BFC\u51FA\u7684\u503C\u53EF\u4EE5\u6539\u53D8\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "require\u901A\u8FC7module.exports\u5BFC\u51FA\u7684\u662Fexports\u5BF9\u8C61\uFF0Cimport\u901A\u8FC7export\u5BFC\u51FA\u662F\u6307\u5B9A\u8F93\u51FA\u7684\u4EE3\u7801\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "require\u8FD0\u884C\u65F6\u624D\u5F15\u5165\u6A21\u5757\u7684\u5C5E\u6027\u6240\u4EE5\u6027\u80FD\u76F8\u5BF9\u8F83\u4F4E\uFF0Cimport\u7F16\u8BD1\u65F6\u5F15\u5165\u6A21\u5757\u7684\u5C5E\u6027\u6240\u6240\u4EE5\u6027\u80FD\u7A0D\u9AD8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u7BAD\u5934\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u7BAD\u5934\u51FD\u6570\u662F\u533F\u540D\u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u80FD\u4F7F\u7528new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u7BAD\u5934\u51FD\u6570\u4E0D\u7ED1\u5B9Aarguments,\u53D6\u800C\u4EE3\u4E4B\u7528rest\u53C2\u6570\u2026\u89E3\u51B3\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u7BAD\u5934\u51FD\u6570\u901A\u8FC7call()\u6216apply()\u8C03\u7528\u4E00\u4E2A\u51FD\u6570,\u53EA\u4F20\u5165\u4E86\u4E00\u4E2A\u53C2\u6570,\u5BF9this\u5E76\u6CA1\u6709\u5F71\u54CD\uFF0C\u4E0D\u6539\u53D8this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u7BAD\u5934\u51FD\u6570\u6CA1\u6709prototype(\u539F\u578B)\uFF0C\u6240\u4EE5\u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u5199\u6CD5\u7B80\u6D01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\uFF0Call\u3001reject\u3001resolve\u3001race ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u53EF\u4EE5\u5C06\u5F02\u6B65\u64CD\u4F5C\u961F\u5217\u5316\uFF0C\u6309\u7167\u671F\u671B\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u8FD4\u56DE\u7B26\u5408\u9884\u671F\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u5728\u5BF9\u8C61\u4E4B\u95F4\u4F20\u9012\u548C\u64CD\u4F5C promise\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5904\u7406\u961F\u5217");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "promise \u6709\u4E09\u4E2A\u72B6\u6001\uFF1Apending[\u5F85\u5B9A]\u521D\u59CB\u72B6\u6001\uFF0Cfulfilled[\u5B9E\u73B0]\u64CD\u4F5C\u6210\u529F\uFF0Crejected[\u88AB\u5426\u51B3]\u64CD\u4F5C\u5931\u8D25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Promise.all \u56DE\u8C03\u6DFB\u52A0\u6355\u83B7\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u4E2A\u90FD\u4F1A\u6267\u884C all \u987A\u5E8F\u53D1\u8D77\uFF0C\u5F02\u6B65\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Promise.rece \u8FD4\u56DE\u7B2C\u4E00\u5B8C\u6210\u7684\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "async\u3001await");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "async \u51FD\u6570\u8FD4\u56DEpromise\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "awiat \u89E3\u6790promise\u6210\u529F\u7684\u5BF9\u8C61 \u5931\u8D25await\u540E\u9762\u7684\u5C31\u4E0D\u4F1A\u5728\u6267\u884C\u4E86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "for...in \u8FED\u4EE3\u548C for...of \u6709\u4EC0\u4E48\u533A\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u5BF9\u8C61for...in,\u6570\u7EC4for...of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "for\u00B7\u00B7\u00B7in\u4F1A\u904D\u5386\u51FA\u6765\u7684\u4E3A\u5BF9\u8C61\u7684key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "for...of \u4FBF\u5229\u5BF9\u8C61\u4F1A\u62A5\u9519");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Generator \uFF0CIterator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Generator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "function* \u5B9A\u4E49\u751F\u6210\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u751F\u6210\u5668\u51FD\u6570\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u4EE3\u7801\uFF0C\u4F1A\u8FD4\u56DEGenerator \u7684\u8FED\u4EE3\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u4F7F\u7528next()\u8BBF\u95EE \u9047\u5230yield\u505C\u6B62");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "yield \u76F8\u5F53\u4E8E\u51FD\u6570\u7684\u8FD4\u56DE\u503C \u8FD4\u56DE\u4E24\u4E2A\u5C5E\u6027 value, done done == true \u8FED\u4EE3\u7ED3\u675F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Iterator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u901A\u8FC7\u81EA\u52A8\u8C03\u7528next\u51FD\u6570\u8BBF\u95EE\u4E0B\u4E00\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "js\u6784\u9020\u51FD\u6570\u7684\u9759\u6001\u6210\u5458\u548C\u5B9E\u4F8B\u6210\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u9759\u6001\u6210\u5458 \u6784\u9020\u51FD\u6570\u672C\u8EAB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6784\u9020\u51FD\u6570\u7684this\u4E0A\u76F4\u63A5\u6DFB\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u5B9E\u4F8B\u6210\u5458 \u5B9E\u4F8B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Set\uFF0CMap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Set \u4E0D\u91CD\u590D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Map key\u53EF\u4EE5\u662F\u4EFB\u610F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "proxy \u548C reflect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Proxy \u5BF9\u8C61\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u4EE3\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0\u57FA\u672C\u64CD\u4F5C\u7684\u62E6\u622A\u548C\u81EA\u5B9A\u4E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Reflect \u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u5BF9\u8C61\uFF0C\u5B83\u63D0\u4F9B\u62E6\u622A JavaScript \u64CD\u4F5C\u7684\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy9zZWNvbmRhcnkvc2Vjb25kYXJ5LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary',
                templateUrl: './secondary.component.html',
                styleUrls: ['./secondary.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/vue/vue.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/interview/vue/vue.component.ts ***!
  \******************************************************/
/*! exports provided: VueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueComponent", function() { return VueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VueComponent {
    constructor() { }
    ngOnInit() {
    }
}
VueComponent.ɵfac = function VueComponent_Factory(t) { return new (t || VueComponent)(); };
VueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VueComponent, selectors: [["app-vue"]], decls: 203, vars: 0, template: function VueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MVC MVVM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MVC Model View Controller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Model\uFF08\u6A21\u578B\uFF09\uFF1A\u662F\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7528\u4E8E\u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u6570\u636E\u903B\u8F91\u7684\u90E8\u5206\u3002\u901A\u5E38\u6A21\u578B\u5BF9\u8C61\u8D1F\u8D23\u5728\u6570\u636E\u5E93\u4E2D\u5B58\u53D6\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View\uFF08\u89C6\u56FE\uFF09\uFF1A\u662F\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5904\u7406\u6570\u636E\u663E\u793A\u7684\u90E8\u5206\u3002\u901A\u5E38\u89C6\u56FE\u662F\u4F9D\u636E\u6A21\u578B\u6570\u636E\u521B\u5EFA\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Controller\uFF08\u63A7\u5236\u5668\uFF09\uFF1A\u662F\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5904\u7406\u7528\u6237\u4EA4\u4E92\u7684\u90E8\u5206\u3002\u901A\u5E38\u63A7\u5236\u5668\u8D1F\u8D23\u4ECE\u89C6\u56FE\u8BFB\u53D6\u6570\u636E\uFF0C\u63A7\u5236\u7528\u6237\u8F93\u5165\uFF0C\u5E76\u5411\u6A21\u578B\u53D1\u9001\u6570\u636E,\u4E5F\u53EF\u4EE5\u5C06Model\u7684\u6570\u636E\u7528View\u663E\u793A\u51FA\u6765");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u4F18\u70B9\u4F4E\u8026\u5408\u65B9\u4FBF\u7EF4\u62A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " MVVM Model-View-ViewModel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "vm ViewModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Model\u53D8\u5316 ViewModel \u901A\u77E5View\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View\u53D8\u5316 ViewModel \u901A\u77E5Model\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6570\u636E\u548C\u8BD5\u56FE\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Vue\u5E95\u5C42\u5B9E\u73B0\u539F\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " vue2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Object.defineProperty()\u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684setter\u548Cgetter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u6570\u7EC4\u52AB\u6301\u539F\u578B\u4E0A\u7684\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u65B0\u589E\u5C5E\u6027\u65E0\u6CD5\u52AB\u6301\u5230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u7ED9\u6BCF\u4E2A\u7EC4\u4EF6\u6DFB\u52A0watcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " vue3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Proxy \u4EE3\u7406\u6570\u636E \u548C Reflect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u539F\u7406 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u52AB\u6301\u6570\u636E \u6DFB\u52A0get set\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "get\u6536\u96C6\u4F9D\u8D56 \u7F16\u8BD1\u6A21\u677F\u7684\u65F6\u5019\u89E6\u53D1get v2\u6DFB\u52A0dep v3\u6DFB\u52A0track ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "set \u89E6\u53D1\u66F4\u65B0 \u66F4\u65B0\u6570\u636E\u65F6 v2\u89E6\u53D1notice v3trigger \u6D3E\u53D1\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u865A\u62DFDom Diff\u7B97\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u865A\u62DFDom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u672C\u8D28\u662Fjs\u5BF9\u8C61 \u6811\u72B6\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Diff\u7B97\u6CD5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u540C\u7EA7\u6BD4\u8F83");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " key\u7684\u4F5C\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Diff\u64CD\u4F5C\u53EF\u4EE5\u66F4\u52A0\u5FEB\u901F;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Diff\u64CD\u4F5C\u53EF\u4EE5\u66F4\u52A0\u51C6\u786E;(\u907F\u514D\u6E32\u67D3\u9519\u8BEF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u81EA\u5B9A\u4E49\u6307\u4EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "bind \u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u6307\u4EE4\u7B2C\u4E00\u6B21\u7ED1\u5B9A\u5230\u5143\u7D20\u65F6\u8C03\u7528\u3002\u5728\u8FD9\u91CC\u53EF\u4EE5\u8FDB\u884C\u4E00\u6B21\u6027\u7684\u521D\u59CB\u5316\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "inserted\uFF1A\u88AB\u7ED1\u5B9A\u5143\u7D20\u63D2\u5165\u7236\u8282\u70B9\u65F6\u8C03\u7528 (\u4EC5\u4FDD\u8BC1\u7236\u8282\u70B9\u5B58\u5728\uFF0C\u4F46\u4E0D\u4E00\u5B9A\u5DF2\u88AB\u63D2\u5165\u6587\u6863\u4E2D)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "update\uFF1A\u6240\u5728\u7EC4\u4EF6\u7684 VNode \u66F4\u65B0\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "componentUpdated\uFF1A\u6307\u4EE4\u6240\u5728\u7EC4\u4EF6\u7684 VNode \u53CA\u5176\u5B50 VNode \u5168\u90E8\u66F4\u65B0\u540E\u8C03\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "unbind\uFF1A\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u6307\u4EE4\u4E0E\u5143\u7D20\u89E3\u7ED1\u65F6\u8C03\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "ele\uFF1A\u5143\u7D20\uFF0Cbinding\uFF1A\u7ED1\u5B9A\u7684\u5BF9\u8C61\u4F20\u9012\u7684\u53C2\u6570\uFF0Cvnode\uFF0CprevVnode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "vue3 \u4F7F\u7528 Directive Hooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u7C7B\u4F3C\u7EC4\u4EF6\u518Dcreated \u63A5\u53D7\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u8DE8\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u57DF\u540D\uFF0C\u534F\u8BAE\uFF0C\u7AEF\u53E3\u53F7\u4E00\u4E2A\u4E0D\u5B8C\u5168\u76F8\u540C\u5C31\u4F1A\u8DE8\u57DF\uFF0C\u662F\u6D4F\u89C8\u5668\u884C\u4E3A\uFF0C\u540C\u6E90\u7B56\u7565 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "JSONP \u5229\u7528 dom\u5143\u7D20\u7684src\u5C5E\u6027 \u53EA\u652F\u6301get \u67E5\u8BE2\u65F6\u6307\u5B9Acallback \u901A\u8FC7callback\u83B7\u53D6\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "CROS \u670D\u52A1\u5668\u8BBE\u7F6EAccess-Control-Allow-Origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "webpack\u672C\u5730\u4EE3\u7406 devServer\u4E2D\u7684proxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Nginx\u53CD\u5411\u4EE3\u7406 \u524D\u7AEF\u8BF7\u6C42\u6570\u636E\uFF0C\u670D\u52A1\u5668\u8F6C\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "assets\u548Cstatic\u7684\u533A\u522B\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "asset \u4F1A\u88AB\u7F16\u8BD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "static \u4E0D\u4F1A\u88AB\u6253\u5305\u7F16\u8BD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u8F93\u5165url \u5230\u6E32\u67D3\u9875\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u8F93\u5165\u5408\u6CD5url\u4F1A\u8BBF\u95EEurl \u5426\u5219\u9ED8\u8BA4\u641C\u7D22\u5F15\u64CE\u5408\u6210\u5408\u6CD5url\u8BBF\u95EE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u67E5\u627E\u7F13\u5B58 \u5148\u53BB\u672C\u5730\u7F13\u5B58\u67E5\u627E\uFF0C\u6709\u5C31\u62E6\u622A\u6C42\u60C5\uFF0C\u8FD4\u56DE\u7F13\u5B58\u8D44\u6E90\uFF0C\u6CA1\u6709\u53D1\u9001\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "DNS\u89E3\u6790 DNS \u67E5\u627E\u6570\u636E\u7F13\u5B58\u670D\u52A1\u4E2D\u662F\u5426\u7F13\u5B58\u8FC7\u5F53\u524D\u57DF\u540D\u4FE1\u606F\uFF0C\u6709\u5219\u76F4\u63A5\u8FD4\u56DE\uFF1B\u5426\u5219\uFF0C\u4F1A\u8FDB\u884C DNS \u89E3\u6790\u8FD4\u56DE\u57DF\u540D\u5BF9\u5E94\u7684 IP \u548C\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u7AEF\u53E3\u53F7\uFF0Chttp \u9ED8\u8BA4 80 \u7AEF\u53E3\uFF0Chttps \u9ED8\u8BA4 443\u3002\u5982\u679C\u662F https \u8BF7\u6C42\uFF0C\u8FD8\u9700\u8981\u5EFA\u7ACB TLS \u8FDE\u63A5\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u5EFA\u7ACBTCP\u8FDE\u63A5 \u4E09\u6B21\u63E1\u624B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u53D1\u9001\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u9875\u9762\u6E32\u67D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u6D4F\u89C8\u5668\u5C06\u83B7\u53D6\u7684HTML\u6587\u6863\u89E3\u6790\u6210DOM\u6811");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u5904\u7406CSS\u6807\u8BB0\uFF0C\u6784\u6210\u5C42\u53E0\u6837\u5F0F\u8868\u6A21\u578BCSSOM(CSS Object Model)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u5C06DOM\u548CCSSOM\u5408\u5E76\u4E3A\u6E32\u67D3\u6811(rendering tree)\uFF0C\u4EE3\u8868\u4E00\u7CFB\u5217\u5C06\u88AB\u6E32\u67D3\u7684\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u6E32\u67D3\u6811\u7684\u6BCF\u4E2A\u5143\u7D20\u5305\u542B\u7684\u5185\u5BB9\u90FD\u662F\u8BA1\u7B97\u8FC7\u7684\uFF0C\u5B83\u88AB\u79F0\u4E4B\u4E3A\u5E03\u5C40layout\u3002\u6D4F\u89C8\u5668\u4F7F\u7528\u4E00\u79CD\u6D41\u5F0F\u5904\u7406\u7684\u65B9\u6CD5\uFF0C\u53EA\u9700\u8981\u4E00\u6B21\u7ED8\u5236\u64CD\u4F5C\u5C31\u53EF\u4EE5\u5E03\u5C40\u6240\u6709\u7684\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u5C06\u6E32\u67D3\u6811\u7684\u5404\u4E2A\u8282\u70B9\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\uFF0C\u8FD9\u4E00\u6B65\u88AB\u79F0\u4E3A\u7ED8\u5236painting\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u65AD\u5F00 TCP \u8FDE\u63A5\uFF1A\u56DB\u6B21\u6325\u624B Connection: keep-alive \u4F1A\u4E00\u76F4\u8FDE\u63A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Http\u548CHttps\u533A\u522B\uFF08\u9AD8\u9891\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "HTTP \u6807\u51C6\u7AEF\u53E3\u662F80 \uFF0C\u800C HTTPS \u7684\u6807\u51C6\u7AEF\u53E3\u662F443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "HTTPS \u5BF9\u4F20\u8F93\u7684\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\uFF0C\u8BC1\u7684\u7F51\u7EDC\u534F\u8BAE\uFF0C\u5B89\u5168\u6027\u9AD8\u4E8EHTTP\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "HTTPS \u9700\u8981CA\u673A\u6784wosign\u7684\u9881\u53D1\u7684SSL\u8BC1\u4E66\uFF0C\u4E00\u822C\u514D\u8D39\u8BC1\u4E66\u5C11\uFF0C\u56E0\u800C\u9700\u8981\u4E00\u5B9A\u8D39\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "GET \u548C POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "GET\u5728\u6D4F\u89C8\u5668\u56DE\u9000\u4E0D\u4F1A\u518D\u6B21\u8BF7\u6C42\uFF0CPOST\u4F1A\u518D\u6B21\u63D0\u4EA4\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "GET\u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8\u7F13\u5B58\uFF0CPOST\u4E0D\u4F1A\uFF0C\u8981\u624B\u52A8\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "GET\u8BF7\u6C42\u53C2\u6570\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u91CC\uFF0CPOST\u4E2D\u7684\u53C2\u6570\u4E0D\u4F1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "GET\u8BF7\u6C42\u5728URL\u4E2D\u4F20\u9001\u7684\u53C2\u6570\u662F\u6709\u957F\u5EA6\u9650\u5236\u7684\uFF0C\u800CPOST\u6CA1\u6709\u9650\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "GET\u53C2\u6570\u901A\u8FC7URL\u4F20\u9012\uFF0CPOST\u653E\u5728Request body\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "GET\u53C2\u6570\u66B4\u9732\u5728\u5730\u5740\u680F\u4E0D\u5B89\u5168\uFF0CPOST\u653E\u5728\u62A5\u6587\u5185\u90E8\u66F4\u5B89\u5168");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "GET\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2\u4FE1\u606F\uFF0CPOST\u4E00\u822C\u7528\u4E8E\u63D0\u4EA4\u67D0\u79CD\u4FE1\u606F\u8FDB\u884C\u67D0\u4E9B\u4FEE\u6539\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "GET\u4EA7\u751F\u4E00\u4E2ATCP\u6570\u636E\u5305\uFF1BPOST\u4EA7\u751F\u4E24\u4E2ATCP\u6570\u636E\u5305 POST\u4F1A\u5148\u53D1\u9001\u8BF7\u6C42\u5934\uFF0C\u670D\u52A1\u5668\u54CD\u5E94\u4E86\u518D\u53D1\u9001\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u79C1\u5BC6\u6027\u7684\u4FE1\u606F\u8BF7\u6C42\u4F7F\u7528post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u67E5\u8BE2\u4FE1\u606F\u7528get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u4E09\u6B21\u63E1\u624B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u7B2C\u4E00\u6B21\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\u65F6\uFF0C\u5BA2\u6237\u7AEF\u53D1\u9001syn\u5305\u5230\u670D\u52A1\u5668\uFF0C\u7B49\u5F85\u670D\u52A1\u7AEF\u786E\u8BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u7B2C\u4E8C\u6B21\uFF1A\u670D\u52A1\u5668\u6536\u5230syn\u5305\uFF0C\u5FC5\u987B\u786E\u8BA4\u5BA2\u6237\u7684syn\uFF0C\u540C\u65F6\u4E5F\u53D1\u9001\u4E00\u4E2Asyn\u5305\uFF0C\u5373syn+ACK\u5305");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u7B2C\u4E09\u6B21\uFF1A\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u5668\u7684syn\u548Cack\u5305\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u786E\u8BA4\u5305ack\uFF0C\u53D1\u9001\u5B8C\u6BD5\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u8FDE\u63A5\u6210\u529F\uFF0C\u5B8C\u6210\u4E09\u6B21\u63E1\u624B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u56DB\u6B21\u6325\u624B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u7B2C\u4E00\u6B21\uFF1A\u6D4F\u89C8\u5668\u53D1\u9001\u5B8C\u6570\u636E\u540E\uFF0C\u53D1\u9001fin\u8BF7\u6C42\u65AD\u5F00\u8FDE\u63A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u7B2C\u4E8C\u6B21\uFF1A\u670D\u52A1\u5668\u53D1\u9001ack\u5230\u5BA2\u6237\u7AEF\uFF0C\u786E\u8BA4\u5BA2\u6237\u7AEF\u7684\u65AD\u5F00\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u7B2C\u4E09\u6B21\uFF1A\u670D\u52A1\u5668\u8BF7\u6C42\u65AD\u5F00fin\u7684\u8BF7\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u7B2C\u56DB\u6B21\uFF1A\u5BA2\u6237\u7AEF\u786E\u8BA4\u670D\u52A1\u5668\u7684\u65AD\u5F00ack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u7F13\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u5F3A\u5236\u7F13\u5B58 Cache-Control\u548CExpires \u63A7\u5236\u7F13\u5B58 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u534F\u5546\u7F13\u5B58Last-Modified/If-Modified-Since Etag/If-None-Match \u63A7\u5236\u7F13\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u534F\u5546\u7F13\u5B58\u7531\u670D\u52A1\u5668\u51B3\u5B9A\u662F\u5426\u53BB\u4F7F\u7528\u7F13\u5B58 \u4F7F\u7528\u7F13\u5B58\u8FD4\u56DE304\uFF0C\u91CD\u65B0\u8FD4\u56DE\u6570\u636E200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "memory cache \u5185\u5B58\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "disk cache \u78C1\u76D8\u91CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u56DE\u6D41\u548C\u91CD\u7ED8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u91CD\u7ED8\uFF1A\u5143\u7D20\u5916\u89C2\u6539\u53D8\uFF0C\u4E0D\u6539\u53D8\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u56DE\u6D41/\u91CD\u6392\uFF1A\u91CD\u65B0\u8BA1\u7B97\u5143\u7D20,\u91CD\u65B0\u751F\u6210\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u56DE\u6D41\u4E00\u5B9A\u4F1A\u89E6\u53D1\u91CD\u7ED8\uFF0C\u800C\u91CD\u7ED8\u4E0D\u4E00\u5B9A\u4F1A\u56DE\u6D41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy92dWUvdnVlLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vue',
                templateUrl: './vue.component.html',
                styleUrls: ['./vue.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/interview/webpack/webpack.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/interview/webpack/webpack.component.ts ***!
  \**************************************************************/
/*! exports provided: WebpackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpackComponent", function() { return WebpackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WebpackComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebpackComponent.ɵfac = function WebpackComponent_Factory(t) { return new (t || WebpackComponent)(); };
WebpackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebpackComponent, selectors: [["app-webpack"]], decls: 134, vars: 0, consts: [[1, "important"]], template: function WebpackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4EC0\u4E48\u662Fbundle,\u4EC0\u4E48\u662Fchunk\uFF0C\u4EC0\u4E48\u662Fmodule?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "bundle\u662F\u7531webpack\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chunk\u662F\u6307webpack\u5728\u8FDB\u884C\u6A21\u5757\u7684\u4F9D\u8D56\u5206\u6790\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u5206\u5272\u51FA\u6765\u7684\u4EE3\u7801\u5757");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "module\u662F\u5F00\u53D1\u4E2D\u7684\u5355\u4E2A\u6A21\u5757\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u4EC0\u4E48\u662FLoader?\u4EC0\u4E48\u662FPlugin?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "loader \u662F\u4F7Fwenbpack\u62E5\u6709\u52A0\u8F7D\u548C\u89E3\u6790\u975Ejs\u6587\u4EF6\u7684\u80FD\u529B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "loader \u518Dmodule.rules\u4E2D\u914D\u7F6E \u91CC\u9762\u63CF\u8FF0\u4E86\u5BF9\u4E8E\u4EC0\u4E48\u7C7B\u578B\u7684\u6587\u4EF6\uFF08test\uFF09\uFF0C\u4F7F\u7528\u4EC0\u4E48\u52A0\u8F7D(loader)\u548C\u4F7F\u7528\u7684\u53C2\u6570\uFF08options\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "plugin \u53EF\u4EE5\u6269\u5C55webpack\u7684\u529F\u80FD\uFF0C\u4F7F\u5F97webpack\u66F4\u52A0\u7075\u6D3B\u3002\u53EF\u4EE5\u5728\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\u901A\u8FC7webpack\u7684api\u6539\u53D8\u8F93\u51FA\u7684\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "plugin \u5728plugins\u4E2D\u5355\u72EC\u914D\u7F6E \u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u662F\u4E00\u4E2Aplugin\u7684\u5B9E\u4F8B\uFF0C\u53C2\u6570\u90FD\u901A\u8FC7\u6784\u9020\u51FD\u6570\u4F20\u5165\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Webpack\u7684\u6784\u5EFA\u6D41\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u521D\u59CB\u5316\u53C2\u6570 shell\u548Cconfig\u6587\u4EF6\u4E2D\u83B7\u53D6\u53C2\u6570\u5E76\u5408\u5E76");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u5F00\u59CB\u7F16\u8BD1 \u4F7F\u7528\u521D\u59CB\u5316\u53C2\u6570\u5F97\u5230\u521D\u59CBcomplier\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884Crun\u65B9\u6CD5\u5F00\u59CB\u7F16\u8BD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u786E\u5B9A\u5165\u53E3\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u7F16\u8BD1\u6A21\u5757 (Make) \u4ECE\u5165\u53E3\u6587\u4EF6\u89E6\u53D1\u8C03\u7528loader\u5BF9\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1\uFF0C\u627E\u5230\u6A21\u5757\u4F9D\u8D56\u8FDB\u884C\u5904\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u5B8C\u6210\u7F16\u8BD1\uFF0C\u5F97\u5230\u6BCF\u4E2A\u6A21\u5757\u88AB\u7F16\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u548C\u4F9D\u8D56\u5173\u7CFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u8F93\u51FA\u8D44\u6E90 (Seal)\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684chunk\uFF0C\u5728\u628A\u6BCF\u4E2Achunk\u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u8F7D\u5230\u8F93\u51FA\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u8F93\u51FA\u5B8C\u6210 \u786E\u5B9A\u51FA\u53E3\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u5185\u5BB9\u5199\u5230\u7CFB\u7EDF\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u5982\u4F55\u5229\u7528webpack\u6765\u4F18\u5316\u524D\u7AEF\u6027\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u63D0\u53D6\u516C\u5171\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u538B\u7F29\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "cnd\u52A0\u901F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u6811\u6447 \u5220\u9664\u6B7B\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u4F7F\u7528loader\u7684\u65F6\u5019\uFF0C\u4F7F\u7528exclude\u6392\u9664node_modules\u4E2D\u7684\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "CommonsChunkPlugin\u63D0\u53D6\u516C\u5171\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u901A\u8FC7externals\u914D\u7F6E\u6765\u63D0\u53D6\u5E38\u7528\u5E93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u4F7F\u7528Tree-shaking\u548CScope Hoisting\u6765\u5254\u9664\u591A\u4F59\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "webpack-dev-server\u548Chttp\u670D\u52A1\u5668\u5982nginx\u6709\u4EC0\u4E48\u533A\u522B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "webpack-dev-server\u4F7F\u7528\u5185\u5B58\u6765\u5B58\u50A8webpack\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u6253\u5305\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u6A21\u5757\u70ED\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u4ED6\u6BD4\u4F20\u7EDF\u7684http\u670D\u52A1\u5BF9\u5F00\u53D1\u66F4\u52A0\u7B80\u5355\u9AD8\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u6A21\u5757\u70ED\u66F4\u65B0 \u4E0D\u9700\u8981\u81EA\u5DF1\u66F4\u65B0\u9875\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u957F\u7F13\u5B58\u4F18\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u7ED9\u6253\u5305\u6587\u4EF6\u8D77\u540D\u5B57\uFF0C\u5206\u79BB\u7ECF\u5E38\u66F4\u65B0\u7684\u4EE3\u7801\u548C\u6846\u67B6\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "NameModulesPlugin \u6216 HashedModuleIdsPlugin \u4F7F\u518D\u6B21\u6253\u5305\u6587\u4EF6\u540D\u4E0D\u53D8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u5E38\u89C1\u7684Lodaer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "babel-loader js\u517C\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "css-loader\uFF0Cstyle-loader \u628Acss\u4EE3\u7801\u6CE8\u5165\u5230js\u4EE3\u7801\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "source-map-loader \u65B9\u4FBF\u8C03\u8BD5\u5F00\u53D1\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "postcss-loader \u5904\u7406\u517C\u5BB9css autoprefixer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u5E38\u7528\u7684Plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "html-webpack-plugin \u7B80\u5316 html \u6587\u4EF6\u521B\u5EFA \u6839\u636E\u6A21\u677F\u521B\u5EFA\u6253\u5305\u7684html\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "optimize-css-assets-webpack-plugin \u538B\u7F29css");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "mini-css-extract-plugin \u5206\u79BB\u6837\u5F0F\u6587\u4EF6\uFF0Ccss\u6587\u4EF6\u63D0\u53D6\uFF0C\u652F\u6301\u6309\u9700\u52A0\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "clean-webpack-plugin \u6E05\u7406\u6253\u5305\u76EE\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "webpack-bundle-analyzer \u5206\u6790\u5305\u7BA1\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "webpack-merge \u5206\u79BBconfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u662F\u5426\u5199\u8FC7Loader\u548CPlugin\uFF1F\u63CF\u8FF0\u4E00\u4E0B\u7F16\u5199loader\u6216plugin\u7684\u601D\u8DEF\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "loader \u53EA\u505A\u8F6C\u4E49\u5DE5\u4F5C \u6BCF\u4E2Aloader\u62FF\u5230\u6E90\u6587\u4EF6\u5185\u5BB9\u901A\u8FC7\u8FD4\u56DE\u503C\u8F93\u51FA \u4E5F\u53EF\u4EE5\u4F7F\u7528this.callback()\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "loader \u672C\u8D28\u662F\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Plugin webpack \u5728\u8FD0\u884C\u751F\u547D\u5468\u671F\u4F1A\u5E7F\u64AD\u4E8B\u4EF6 Plugin\u76D1\u542C\u4E8B\u4EF6 \u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7webpack\u63D0\u4F9B\u7684api\u6539\u53D8\u8F93\u51FA\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Plugin \u57FA\u4E8E\u4E8B\u4EF6\u6D41\u6846\u67B6Tapable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "consturctor \u83B7\u53D6\u53C2\u6570\uFF0Capply()\u5F97\u5230compiler\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "webpack5\u81EA\u5E26\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "asset \u5904\u7406\u56FE\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Tree-shaking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Tree-shaking \u57FA\u4E8EES module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Make \u9636\u6BB5\uFF0C\u6536\u96C6\u6A21\u5757\u5BFC\u51FA\u53D8\u91CF\u5E76\u8BB0\u5F55\u5230\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u56FE ModuleGraph \u53D8\u91CF\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Seal \u9636\u6BB5\uFF0C\u904D\u5386 ModuleGraph \u6807\u8BB0\u6A21\u5757\u5BFC\u51FA\u53D8\u91CF\u6709\u6CA1\u6709\u88AB\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u751F\u6210\u4EA7\u7269\u65F6\uFF0C\u82E5\u53D8\u91CF\u6CA1\u6709\u88AB\u5176\u5B83\u6A21\u5757\u4F7F\u7528\u5219\u5220\u9664\u5BF9\u5E94\u7684\u5BFC\u51FA\u8BED\u53E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmlldy93ZWJwYWNrL3dlYnBhY2suY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebpackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-webpack',
                templateUrl: './webpack.component.html',
                styleUrls: ['./webpack.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/meun.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/meun.service.ts ***!
  \*****************************************/
/*! exports provided: MeunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeunService", function() { return MeunService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MeunService {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.topMenu = [];
        this.asideMenu = [];
    }
    getMenu() {
        let baseurl = "";
        this.topMenu = JSON.parse(JSON.stringify(this.router.config));
        this.topMenu.pop();
        this.url = this.router.url;
        this.asideMenu = this.topMenu.filter(item => this.router.url.indexOf(item.path) != -1);
        baseurl = this.asideMenu[0].path;
        this.asideMenu = this.asideMenu[0].children;
        this.asideMenu.pop();
        this.asideMenu.forEach(item => item.data = { path: baseurl + "/" + item.path });
    }
}
MeunService.ɵfac = function MeunService_Factory(t) { return new (t || MeunService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MeunService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeunService, factory: MeunService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeunService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Learn\Angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
