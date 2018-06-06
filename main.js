(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colorRed{\r\n    color:red;\r\n}\r\n.colorGreen{\r\n    color:green;\r\n}\r\n.colorBlue{\r\n    color:blue;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n                <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['features']\">Feature</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['pricing']\">Pricing</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['posts']\">Posts</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['upload']\">Upload</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <p>\n                    <input type=\"checkbox\" name=\"\" id=\"\" [(ngModel)]=\"show\"/> Show / Hide\n                </p>\n                <h1 class=\"display-4\" appHighLighter=\"white\" *appMyNgIf=\"show\">{{ title | capitalize }}</h1>\n                <h2>Current Date : {{ dt | date:'medium' }}</h2>\n                <h3>Price : {{ price | currency:'USD':true }}</h3>\n                <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n                <hr class=\"my-4\">\n                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n                <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"col-md-4\">\n            <app-sidebar></app-sidebar>\n        </div>\n    </div>\n</div>    \n<div class=\"container-fluid bg-light\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <span class=\"navbar-text\">\n                    &copy; Copyright 2018 | All right reserved.\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'welcome to my first website!';
        this.show = 1;
        this.dt = new Date();
        this.price = 10000;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/components/features/features.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/components/pricing/pricing.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_fetchdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/fetchdata.service */ "./src/app/services/fetchdata.service.ts");
/* harmony import */ var _services_postsdata_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/postsdata.service */ "./src/app/services/postsdata.service.ts");
/* harmony import */ var _directives_high_lighter_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/high-lighter.directive */ "./src/app/directives/high-lighter.directive.ts");
/* harmony import */ var _directives_my_ng_if_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/my-ng-if.directive */ "./src/app/directives/my-ng-if.directive.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/capitalize.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/file-upload.service */ "./src/app/services/file-upload.service.ts");
/* harmony import */ var _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ "./src/app/components/upload-file/upload-file.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: "features",
        component: _components_features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"]
    },
    {
        path: "pricing",
        component: _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__["PricingComponent"]
    },
    {
        path: "posts",
        component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]
    },
    {
        path: "posts/:id",
        component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
    },
    {
        path: "upload",
        component: _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_18__["UploadFileComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"],
                _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__["PricingComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _directives_high_lighter_directive__WEBPACK_IMPORTED_MODULE_13__["HighLighterDirective"],
                _directives_my_ng_if_directive__WEBPACK_IMPORTED_MODULE_14__["MyNgIfDirective"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_15__["CapitalizePipe"],
                _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_18__["UploadFileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            providers: [_services_fetchdata_service__WEBPACK_IMPORTED_MODULE_11__["FetchdataService"], _services_postsdata_service__WEBPACK_IMPORTED_MODULE_12__["PostsdataService"], _services_file_upload_service__WEBPACK_IMPORTED_MODULE_17__["FileUploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capitalize.pipe.ts":
/*!************************************!*\
  !*** ./src/app/capitalize.pipe.ts ***!
  \************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        var val = value.split(' ');
        for (var i = 0; i < val.length; i++) {
            var piece = val[i];
            var j = piece.charAt(0).toUpperCase();
            val[i] = j + val[i].substr(1).toLowerCase();
        }
        return val.join(' ');
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/components/features/features.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/features/features.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/features/features.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/features/features.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                    Collapsible Group Item #1\n                </button>\n            </h5>\n        </div>\n\n        <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingTwo\">\n            <h5 class=\"mb-0\">\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                    Collapsible Group Item #2\n                </button>\n            </h5>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingThree\">\n            <h5 class=\"mb-0\">\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                    Collapsible Group Item #3\n                </button>\n            </h5>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/features/features.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/features/features.component.ts ***!
  \***********************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/components/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/components/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: "\n        <form action=\"action_page.php\">\n            <div class=\"container\">\n              <label for=\"uname\"><b>Username</b></label>\n              <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n              <label for=\"psw\"><b>Password</b></label>\n              <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n              <button type=\"submit\">Login</button>\n              <label>\n                <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n              </label>\n            </div>\n            <div class=\"container\" style=\"background-color:#f1f1f1\">\n              <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n              <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n            </div>\n        </form>\n    ",
            styles: ["\n        /* Bordered form */\n        form {\n            border: 3px solid #f1f1f1;\n        }\n\n        /* Full-width inputs */\n        input[type=text], input[type=password] {\n            width: 100%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: inline-block;\n            border: 1px solid #ccc;\n            box-sizing: border-box;\n        }\n\n        /* Set a style for all buttons */\n        button {\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: 8px 0;\n            border: none;\n            cursor: pointer;\n            width: 100%;\n        }\n\n        /* Add a hover effect for buttons */\n        button:hover {\n            opacity: 0.8;\n        }\n\n        /* Extra style for the cancel button (red) */\n        .cancelbtn {\n            width: auto;\n            padding: 10px 18px;\n            background-color: #f44336;\n        }\n\n        /* Add padding to containers */\n        .container {\n            padding: 16px;\n        }\n\n        /* The \"Forgot password\" text */\n        span.psw {\n            float: right;\n            padding-top: 16px;\n        }\n    "]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n    <div class=\"card-body d-flex flex-column align-items-start\">\n        <h3 class=\"mb-0\">{{ post.title }}</h3>\n        <div class=\"mb-1 text-muted\">June 01 Saturday 2018</div>\n        <p class=\"card-text mb-auto\">{{ post.body }}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card flex-md-row mb-4 box-shadow h-md-250\" *ngFor=\"let post of posts[0]\">\n    <div class=\"card-body d-flex flex-column align-items-start\">\n        <h3 class=\"mb-0\">\n            <a class=\"text-dark\" [routerLink]=\"[post.id]\">{{ post.title }}</a>\n        </h3>\n        <div class=\"mb-1 text-muted\">June 01 Saturday 2018</div>\n        <p class=\"card-text mb-auto\">{{ post.body }}</p>\n        <a  [routerLink]=\"[post.id]\">Continue reading</a>\n    </div>\n</div>\n<button (click)=\"sendData()\">Save Data</button>"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_postsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/postsdata.service */ "./src/app/services/postsdata.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(_postData, _http) {
        this._postData = _postData;
        this._http = _http;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.posts = this._postData._data;
    };
    PostsComponent.prototype.sendData = function () {
        this._http.post('https://jsonplaceholder.typicode.com/posts', {
            'title': 'This is test swapnil title',
            'body': 'This is test swapnil body'
        })
            .subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); }, function () { return console.log('data save success...'); });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_postsdata_service__WEBPACK_IMPORTED_MODULE_1__["PostsdataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/pricing/pricing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Create three columns of equal width */\r\n\r\n.columns {\r\n    float: left;\r\n    width: 33.3%;\r\n    padding: 8px;\r\n}\r\n\r\n/* Style the list */\r\n\r\n.price {\r\n    list-style-type: none;\r\n    border: 1px solid #eee;\r\n    margin: 0;\r\n    padding: 0;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* Add shadows on hover */\r\n\r\n.price:hover {\r\n    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)\r\n}\r\n\r\n/* Pricing header */\r\n\r\n.price .header {\r\n    background-color: #111;\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n\r\n/* List items */\r\n\r\n.price li {\r\n    border-bottom: 1px solid #eee;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n/* Grey list item */\r\n\r\n.price .grey {\r\n    background-color: #eee;\r\n    font-size: 20px;\r\n}\r\n\r\n/* The \"Sign Up\" button */\r\n\r\n.button {\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    color: white;\r\n    padding: 10px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n}\r\n\r\n/* Change the width of the three columns to 100% \r\n(to stack horizontally on small screens) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .columns {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\" *ngFor=\"let r of result\">\n  <ul class=\"price\">\n    <li class=\"header\">{{ r.plan }}</li>\n    <li class=\"grey\">{{ r.price }}</li>\n    <li>{{ r.storage }}</li>\n    <li>{{ r.emails }}</li>\n    <li>{{ r.domains }}</li>\n    <li>{{ r.bandwidth }}</li>\n    <li class=\"grey\"><a href=\"#\" class=\"button\">Sign Up</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.ts ***!
  \*********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetchdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetchdata.service */ "./src/app/services/fetchdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingComponent = /** @class */ (function () {
    function PricingComponent(_fetchData) {
        this._fetchData = _fetchData;
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.result = this._fetchData.data;
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/components/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/components/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetchdata_service__WEBPACK_IMPORTED_MODULE_1__["FetchdataService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item active\">Cras justo odio</li>\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n  <li class=\"list-group-item\">Morbi leo risus</li>\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n  <li class=\"list-group-item\">Vestibulum at eros</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"margin-top:20px\">\n    <input type=\"file\" name=\"fileToUpload\" id=\"fileToUpload\"/>\n    <input type=\"button\" value=\"Upload File\" (click)=\"uploadFile()\"/>\n</form>\n<p>{{ errorMsg }}</p>"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file-upload.service */ "./src/app/services/file-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(_el, fileToUpload) {
        this._el = _el;
        this.fileToUpload = fileToUpload;
    }
    UploadFileComponent.prototype.uploadFile = function () {
        var _this = this;
        var frmData = new FormData(this._el.nativeElement.querySelector('form'));
        this.fileToUpload.uploadFile(frmData)
            .subscribe(function (data) { return console.log(data); }, function (err) {
            console.log(err.error.text);
            _this.errorMsg = err.error.text;
        });
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/app/components/upload-file/upload-file.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_file_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/directives/high-lighter.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/high-lighter.directive.ts ***!
  \******************************************************/
/*! exports provided: HighLighterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighLighterDirective", function() { return HighLighterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighLighterDirective = /** @class */ (function () {
    function HighLighterDirective(el) {
        this.el = el;
    }
    HighLighterDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighLighter;
    };
    HighLighterDirective.prototype.onmouseenter = function () {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.el.nativeElement.style.color = 'green';
    };
    HighLighterDirective.prototype.mouseleave = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighLighter;
        this.el.nativeElement.style.color = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HighLighterDirective.prototype, "appHighLighter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighLighterDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighLighterDirective.prototype, "mouseleave", null);
    HighLighterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighLighter]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighLighterDirective);
    return HighLighterDirective;
}());



/***/ }),

/***/ "./src/app/directives/my-ng-if.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/my-ng-if.directive.ts ***!
  \**************************************************/
/*! exports provided: MyNgIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgIfDirective", function() { return MyNgIfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNgIfDirective = /** @class */ (function () {
    function MyNgIfDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
    MyNgIfDirective.prototype.ngOnInit = function () { };
    Object.defineProperty(MyNgIfDirective.prototype, "appMyNgIf", {
        set: function (isBoolean) {
            if (isBoolean) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainerRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MyNgIfDirective.prototype, "appMyNgIf", null);
    MyNgIfDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMyNgIf]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], MyNgIfDirective);
    return MyNgIfDirective;
}());



/***/ }),

/***/ "./src/app/services/fetchdata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/fetchdata.service.ts ***!
  \***********************************************/
/*! exports provided: FetchdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchdataService", function() { return FetchdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FetchdataService = /** @class */ (function () {
    function FetchdataService() {
        this.data = [
            {
                id: 1,
                plan: 'Basic',
                price: '$ 9.99 / year',
                storage: '10GB Storage',
                emails: '10 Emails',
                domains: '10 Domains',
                bandwidth: '1GB Bandwidth'
            },
            {
                id: 2,
                plan: 'Pro',
                price: '$ 24.99 / year',
                storage: '25GB Storage',
                emails: '25 Emails',
                domains: '25 Domains',
                bandwidth: '2GB Bandwidth'
            },
            {
                id: 3,
                plan: 'Premium',
                price: '$ 49.99 / year',
                storage: '50GB Storage',
                emails: '50 Emails',
                domains: '50 Domains',
                bandwidth: '5GB Bandwidth'
            },
        ];
    }
    FetchdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FetchdataService);
    return FetchdataService;
}());



/***/ }),

/***/ "./src/app/services/file-upload.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/file-upload.service.ts ***!
  \*************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadService = /** @class */ (function () {
    function FileUploadService(_http) {
        this._http = _http;
    }
    FileUploadService.prototype.uploadFile = function (frmData) {
        return this._http.post('http://localhost/angular4/php/fileupload.php', frmData);
    };
    FileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/app/services/postsdata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/postsdata.service.ts ***!
  \***********************************************/
/*! exports provided: PostsdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsdataService", function() { return PostsdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsdataService = /** @class */ (function () {
    function PostsdataService(_http) {
        //fetch("https://jsonplaceholder.typicode.com/posts")
        //.then((res) => res.json())
        //.then((data) => this.data.push(data))
        //.catch((err) => console.log(err)) 
        var _this = this;
        this._http = _http;
        this._data = [];
        _http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(function (result) { return _this._data.push(result); }, function (err) { return console.log(err); }, function () { return console.log('fetching data done...'); });
    }
    PostsdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsdataService);
    return PostsdataService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular4\Ang5App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map