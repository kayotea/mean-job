webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newentry_newentry_component__ = __webpack_require__("../../../../../src/app/newentry/newentry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__companyinfo_companyinfo_component__ = __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: "homepage", component: __WEBPACK_IMPORTED_MODULE_4__newentry_newentry_component__["a" /* NewentryComponent */] },
    { path: "information", component: __WEBPACK_IMPORTED_MODULE_5__companyinfo_companyinfo_component__["a" /* CompanyinfoComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__newentry_newentry_component__ = __webpack_require__("../../../../../src/app/newentry/newentry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__companyinfo_companyinfo_component__ = __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Importing @agm/core for Google mpas

// Importing components







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__newentry_newentry_component__["a" /* NewentryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__companyinfo_companyinfo_component__["a" /* CompanyinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__registration_registration_component__["a" /* RegistrationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB4kOD9AMomNP4OswtJNFTkgQtJleJSNV8' // <-- Using my API Key
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nagm-map {\n    height: 500px;\n    width: 800px;\n}\n.googlemaps {\n    /*margin: 0 auto 0 auto;*/\n    margin-top: 10px;\n    width: 800px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.nav {\n    margin-top: 10px;\n}\np, a {\n    display: block;\n    margin-left: 15px;\n}\n.container {\n    margin-bottom: 30px;\n}\n.displaycompany {\n    display: inline-block;\n    margin-left: 200px;\n    height: 300px;\n    width: 320px;\n    padding: 20px;\n}\n.visit {\n    float: right;\n    display: inline-block;\n    margin-right: 200px;\n    height: 300px;\n    width: 320px;\n    padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\">\n  <!--Nav bar to search compnanies-->\n  <div class=\"nav\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <form class=\"navbar-form navbar-left\" role=\"search\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Comapany!\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </nav>      \n  </div>\n\n  <!--Display Google Maps-->\n  <div class=\"googlemaps\"> \n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n\n  <!--Display Comapny details-->\n  <div class=\"displaycompany\">\n    <h2>Apple Inc</h2>\n    <p>Added on</p>\n    <div class=\"contact\">\n      <h3>Contact Person</h3>\n      <a href=\"http://linkedin\">linkedin of Contact</a>\n      <p>Email of contact</p>\n      <p>Phone Number</p>\n    </div>\n  </div>\n\n  <!--Office visit-->\n  <div class=\"visit\">\n    <h2>Visiting Onsite?</h2>\n    <p>Address here</p>\n    <p> WEATER API here</p>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyinfoComponent = (function () {
    function CompanyinfoComponent() {
        this.lat = 37.780337;
        this.lng = -122.403408;
    }
    //   map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 8
    // });
    CompanyinfoComponent.prototype.ngOnInit = function () {
    };
    return CompanyinfoComponent;
}());
CompanyinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-companyinfo',
        template: __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CompanyinfoComponent);

//# sourceMappingURL=companyinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n#mytable {\n    width: 100%;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-bottom: 50px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\"> \n  <table id=\"mytable\" class=\"table table-striped table-hover \">\n    <tr>\n      <th>Company Name</th>\n      <th>Date Added</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n    <tr class=\"success\">\n      <td><a [routerLink]=\"['/information']\"> Apple </a></td>\n      <td>March 22, 2017</td>\n      <td>Interviewed</td>\n      <td>Waiting for my background check</td>\n    </tr>\n  </table>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //CRUD! talk to back end:
    /* USERS */
    //add user to db
    HttpService.prototype.addUser = function (user) {
        console.log('reached http/addUser - ', user);
        return this._http.post('/new_user', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find user by id - as url param
    HttpService.prototype.findUser = function (id) {
        console.log('reached http/findUser()');
        console.log('/user/' + id);
        return this._http.get('/user/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    /* COMPANIES */
    //add new company to db
    HttpService.prototype.addCompany = function (company) {
        console.log('reached http/addCompany - ', company);
        return this._http.post('/new_company', company)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find all companies
    HttpService.prototype.findAllCompanies = function () {
        console.log('reached http/findAllCompanies()');
        console.log('/companies');
        return this._http.get('/companies/')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find company by id - as url param
    HttpService.prototype.findCompany = function (id) {
        console.log('reached http/findCompany()');
        console.log('/company/' + id);
        return this._http.get('/company/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1 {\n    margin-bottom: 50px;\n}\n.form-horizontal {\n    background-color: mintcream;\n    padding: 25px;\n    border-radius: 25px;\n}\n.red {\n    color: red;\n    font-size: 14px;\n\n}\n.linktoregister {\n    margin-top: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\" style=\"text-align:center\">\n  <h1>Welcome to our App!</h1>\n  <div class=\"loginform\">\n    <form class=\"form-horizontal\" #myform=\"ngForm\">\n      <fieldset>\n        <legend>Login Here</legend>\n      \n        <!--Username-->\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-lg-2 control-label\">Email:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"your@email.com\"\n            required\n            [(ngModel)]=\"userLogging.email\"\n            #email=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"email.errors && ( email.touched || myform.submitted )\">\n              <p *ngIf=\"email.errors.required\">Email is required</p>\n            </div>\n        </div> \n\n        <!--Password-->\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Please enter your password\"\n            required\n            [(ngModel)]=\"userLogging.password\"\n            #password=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.errors && ( password.touched || myform.submitted )\">\n              <p *ngIf=\"password.errors.required\">Password is required</p>\n            </div>\n        </div> \n          <button type=\"submit\" class=\"btn btn-success\">Login</button>   \n\n          <!--If user is not registered-->\n          <div class=\"linktoregister\">\n            <h4>Not registered?</h4>\n            <h5>Register \n            <a [routerLink]=\"['/register']\">here</a>\n            </h5>\n          </div> \n      </fieldset>\n    </form>\n  </div>\n</div>  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
        this.userLogging = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-horizontal, newentrycomponent {\n    display: inline-block;\n    margin-top: 50px;\n    width: 75%;\n}\n\n.rightside {\n    display: inline-block;\n    margin-top: 20px;\n    float: right;\n}\na {\n    display: block;\n    margin-top: 5px;\n}\n.dashboardcomponent {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n<div class=\"container\">\n\n  <div class=\"header\">\n    <h2>Welcome, User!</h2>\n  </div>\n\n  <div class=\"newentrycomponent\">\n    <!--From to add new Entry-->\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add new job Entry</legend>\n\n        <!--Company name-->\n        <div class=\"form-group\">\n          <label for=\"company\" class=\"col-lg-2 control-label\">Company:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"company\" class=\"form-control\" placeholder=\"Agency, Employer, etc.\">     \n          </div> \n        </div>\n        <!--Position Applied-->\n        <div class=\"form-group\">\n          <label for=\"role\" class=\"col-lg-2 control-label\">Position:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"role\" class=\"form-control\" placeholder=\"ex: Software Enginner\">     \n          </div> \n        </div>        \n        <!--Link URL-->\n        <div class=\"form-group\">\n          <label for=\"link\" class=\"col-lg-2 control-label\">Link:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"link\" class=\"form-control\" placeholder=\"www.job.com\">     \n          </div> \n        </div>    \n        <!--Address of the company-->\n        <div class=\"form-group\">\n          <label for=\"street\" class=\"col-lg-2 control-label\">Street</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"street\" class=\"form-control\" placeholder=\"ex: 400 Main Ave.\">\n          </div> \n        </div> \n              <!--Suite-->\n        <div class=\"form-group\">\n          <label for=\"Suite\" class=\"col-lg-2 control-label\">Office Suite:</label>\n          <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"suite\" class=\"form-control\" placeholder=\"Suite #\">\n          </div>\n        </div>\n              <!--City-->\n        <div class=\"form-group\">\n          <label for=\"city\" class=\"col-lg-2 control-label\">City:</label>\n          <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"city\" class=\"form-control\" placeholder=\"City\">\n          </div>\n        </div>        \n              <!--Zip Code-->\n        <div class=\"form-group\">\n          <label for=\"zip\" class=\"col-lg-2 control-label\">Zip Code:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"number\" name=\"zip\" class=\"form-control\" placeholder=\"Zip code\">\n          </div>\n        </div>\n              <!--Choose State-->\n        <div class=\"form-group\">\n          <label for=\"state\" class=\"col-lg-2 control-label\">State:</label>\n            <div class=\"col-lg-10\">\n              <select name=\"state\">\n                <option value=\"AL\">Alabama</option>\n                <option value=\"AK\">Alaska</option>\n                <option value=\"AZ\">Arizona</option>\n                <option value=\"AR\">Arkansas</option>\n                <option value=\"CA\">California</option>\n                <option value=\"CO\">Colorado</option>\n                <option value=\"CT\">Connecticut</option>\n                <option value=\"DE\">Delaware</option>\n                <option value=\"FL\">Florida</option>\n                <option value=\"GA\">Georgia</option>\n                <option value=\"HI\">Hawaii</option>\n                <option value=\"ID\">Idaho</option>\n                <option value=\"IL\">Illinois</option>\n                <option value=\"IN\">Indiana</option>\n                <option value=\"IA\">Iowa</option>\n                <option value=\"KS\">Kansas</option>\n                <option value=\"KY\">Kentucky</option>\n                <option value=\"LA\">Louisiana</option>\n                <option value=\"ME\">Maine</option>\n                <option value=\"MD\">Maryland</option>\n                <option value=\"MA\">Massachusetts</option>\n                <option value=\"MI\">Michigan</option>\n                <option value=\"MN\">Minnesota</option>\n                <option value=\"MS\">Mississippi</option>\n                <option value=\"MO\">Missouri</option>\n                <option value=\"MT\">Montana</option>\n                <option value=\"NE\">Nebraska</option>\n                <option value=\"NV\">Nevada</option>\n                <option value=\"NH\">New Hampshire</option>\n                <option value=\"NJ\">New Jersey</option>\n                <option value=\"NM\">New Mexico</option>\n                <option value=\"NY\">New York</option>\n                <option value=\"NC\">North Carolina</option>\n                <option value=\"ND\">North Dakota</option>\n                <option value=\"OH\">Ohio</option>\n                <option value=\"OK\">Oklahoma</option>\n                <option value=\"OR\">Oregon</option>\n                <option value=\"PA\">Pennsylvania</option>\n                <option value=\"RI\">Rhode Island</option>\n                <option value=\"SC\">South Carolina</option>\n                <option value=\"SD\">South Dakota</option>\n                <option value=\"TN\">Tennessee</option>\n                <option value=\"TX\">Texas</option>\n                <option value=\"UT\">Utah</option>\n                <option value=\"VT\">Vermont</option>\n                <option value=\"VA\">Virginia</option>\n                <option value=\"WA\">Washington</option>\n                <option value=\"WV\">West Virginia</option>\n                <option value=\"WI\">Wisconsin</option>\n                <option value=\"WY\">Wyoming</option>\n              </select> \n             </div> \n        </div>\n              <!--Submit Button-->\n        <div class=\"form-group\" style=\"text-align:center;\">\n          <button type=\"submit\" class=\"btn btn-primary\" style=\"text-align:center\">Submit</button>\n        </div>\n      </fieldset>\n    </form>\n    <!--End Form-->\n    <div class=\"rightside\">\n      <h2>Job Search</h2>\n        <a href=\"http://www.linkedin.com\">LinkedIn</a>\n        <a href=\"http://www.indeed.com\">Indeed</a>\n        <a href=\"http://www.monster.com\">Monster</a>\n    </div>\n  </div>\n  <!--Nesting Dashboard Component Here-->\n  <div class=\"dashboardcomponent\">\n    <app-dashboard></app-dashboard>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewentryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewentryComponent = (function () {
    function NewentryComponent() {
    }
    NewentryComponent.prototype.ngOnInit = function () {
    };
    return NewentryComponent;
}());
NewentryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newentry',
        template: __webpack_require__("../../../../../src/app/newentry/newentry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newentry/newentry.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewentryComponent);

//# sourceMappingURL=newentry.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-horizontal {\n    margin-top: 50px;\n    background-color: lavender;\n    padding: 25px;\n    border-radius: 25px;  \n    \n}\nbutton {\n    margin-top: 20px;  \n}\n.red {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"registration\">\n    <form class=\"form-horizontal\" #myform=\"ngForm\" (submit)=\"submitRegForm(myform)\">\n      <fieldset>\n        <legend>Registration</legend>\n        <!--First Name-->\n        <div class=\"form-group\">\n          <label for=\"fname\" class=\"col-lg-2 control-label\">First Name:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"fname\" class=\"form-control\" placeholder=\"Your first name\"\n            required\n            [(ngModel)]=\"newuser.firstname\"\n            #fname=\"ngModel\">     \n          </div >\n            <div class=\"red\" *ngIf=\"fname.errors && (fname.touched || myform.submitted)\">\n              <p *ngIf=\"fname.errors.required\">This field must not be blank</p>\n            </div>\n        </div>\n\n        <!--Last Name-->\n        <div class=\"form-group\">\n          <label for=\"lname\" class=\"col-lg-2 control-label\">Last Name:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\"  class=\"form-control\" name=\"lname\" placeholder=\"Your last name\"\n            required\n            [(ngModel)]=\"newuser.lastname\"\n            #lname=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"lname.errors && (lname.touched || myform.submitted)\">\n              <p *ngIf=\"lname.errors.required\">This field must not be blank</p>\n            </div>\n        </div>\n\n        <!--Email-->\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-lg-2 control-label\">Email:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"your@email.com\"\n            required\n            pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n            [(ngModel)]=\"newuser.email\"\n            #email=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"email.errors && (email.touched || myform.submitted)\">\n              <p *ngIf=\"email.errors.required\">This field must not be blank</p>\n              <p *ngIf=\"email.errors.pattern\">Please enter a valid email address</p>\n            </div>\n        </div>     \n\n        <!--Password -->\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Must be between 8-12 characters\"\n            required\n            minlength=\"8\"\n            maxlength=\"12\"\n            [(ngModel)]=\"newuser.password\"\n            #password=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.errors && (password.touched || myform.submitted)\">\n              <p *ngIf=\"password.errors.required\">This field must not be blank</p>\n              <p *ngIf=\"password.errors.minlength || password.errors.maxlength\">Password should be between 8-12 characters</p>\n            </div>\n        </div>\n\n        <!--Confirm Password -->\n        <div class=\"form-group\">\n          <label for=\"confirmpw\" class=\"col-lg-2 control-label\">Confirm Password:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" placeholder=\"Passwords must match\"\n            [(ngModel)]=\"newuser.confirmpassword\"\n            #confirmpassword=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.value !== confirmpassword.value && myform.submitted\">\n              <p>Password are not matching!</p>\n            </div>\n        </div>\n\n        <h4> Already Registered?</h4>\n        <h5>\n          <a [routerLink]=\"['/']\"> Go Back</a>\n        </h5>\n        <button class=\"btn btn-primary\">Register!</button>      \n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(_router) {
        this._router = _router;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    RegistrationComponent.prototype.submitRegForm = function (form) {
        console.log("Subitted:", this.newuser);
        this._router.navigate(['/homepage']);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RegistrationComponent);

var _a;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(firstname, lastname, email, password, confirmpassword) {
        if (firstname === void 0) { firstname = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (confirmpassword === void 0) { confirmpassword = ""; }
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map