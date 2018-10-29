webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_widgets_header_header_component__ = __webpack_require__("./src/app/components/widgets/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_widgets_footer_footer_component__ = __webpack_require__("./src/app/components/widgets/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_users_users_service__ = __webpack_require__("./src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_partners_partners_service__ = __webpack_require__("./src/app/services/partners/partners.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_categories_categories_service__ = __webpack_require__("./src/app/services/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_requests_requests_service__ = __webpack_require__("./src/app/services/requests/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_landing_landing_component__ = __webpack_require__("./src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_widgets_menu_menu_component__ = __webpack_require__("./src/app/components/admin/widgets/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_requests_requests_component__ = __webpack_require__("./src/app/components/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__ = __webpack_require__("./src/app/components/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_19__components_requests_requests_component__["a" /* RequestsComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__["a" /* SettingsComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_widgets_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_widgets_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_widgets_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_requests_requests_component__["a" /* RequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCi5s8s6hthogs8ch_fdtPLbOUFmZHGPso',
                    libraries: ['places'],
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_users_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_12__services_partners_partners_service__["a" /* PartnersService */],
                __WEBPACK_IMPORTED_MODULE_13__services_categories_categories_service__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_requests_requests_service__["a" /* RequestsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <!-- HEADER DESKTOP-->\n    <header class=\"header-pull d-none d-lg-block js-scroll-bar\">\n        <div class=\"header-pull__inner\">\n            <div class=\"logo\">\n                <a href=\"index1.html\">\n                    <img src=\"assets/images/icon/logo-black.png\" alt=\"Trudy\" />\n                </a>\n            </div>\n            <nav class=\"navbar-pull\">\n                <ul class=\"navbar-pull-list list-unstyled\">\n                    <li class=\"has-dropdown\">\n                        <a href=\"#\">Users</a>\n\n                        <ul class=\"navbar-pull__dropdown list-unstyled\">\n                            <li>\n                                <a href=\"index1.html\">Service Providers</a>\n                            </li>\n                            <li>\n                                <a href=\"index2.html\">Customers</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"social\">\n                <a href=\"#\">\n                    <i class=\"zmdi zmdi-facebook\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"zmdi zmdi-instagram\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"zmdi zmdi-twitter\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"zmdi zmdi-dribbble\"></i>\n                </a>\n            </div>\n        </div>\n    </header>\n    <!-- SEARCH MODAL-->\n    <div class=\"searchModal--right modal fade\" id=\"searchModal\" role=\"dialog\">\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\">\n            <i class=\"zmdi zmdi-close\"></i>\n        </button>\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <form id=\"searchModal__form\" method=\"POST\">\n                        <input id=\"searchModal__input\" type=\"text\" name=\"search\" placeholder=\"Search here...\" />\n                        <button id=\"searchModal__submit\" type=\"submit\">\n                            <i class=\"fa fa-search\"></i>\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- END SEARCH MODAL-->\n    <!-- END HEADER DESKTOP-->\n\n    <!-- HEADER MOBILE  -->\n    <header class=\"header-mobile d-block d-lg-none\">\n        <div class=\"header-mobile__bar\">\n            <div class=\"container-fluid clearfix\">\n                <a class=\"logo\" href=\"index1.html\">\n                    <img src=\"assets/images/icon/logo-black.png\" alt=\"Umber\" />\n                </a>\n                <button class=\"hamburger hamburger--slider float-right\" type=\"button\">\n                    <span class=\"hamburger-box\">\n                        <span class=\"hamburger-inner\"></span>\n                    </span>\n                </button>\n            </div>\n        </div>\n        <nav class=\"navbar-mobile\">\n            <div class=\"container-fluid\">\n                <ul class=\"navbar-pull-list list-unstyled\">\n                    <li class=\"has-dropdown\">\n                        <a href=\"#\">Users</a>\n\n                        <ul class=\"navbar-pull__dropdown list-unstyled\">\n                            <li>\n                                <a href=\"index1.html\">Service Providers</a>\n                            </li>\n                            <li>\n                                <a href=\"index2.html\">Customers</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n    <!-- END HEADER MOBILE-->\n\n    <!-- PAGE PULL-->\n    <div class=\"page-pull pt-5\">\n        <div class=\"recent-blog\">\n            <div class=\"recent-blog__title-wrap clearfix m-b-60\">\n                <h2 class=\"recent-blog__title float-right wow fadeInRight\" data-wow-delay=\".2s\">Service Providers</h2>\n            </div>\n        </div>\n        <div class=\"cuscard text-primary bg-white mb-3 float-left col-md-3 p-3 mb-5\">\n            <div class=\"card-icon col-md-3 float-left\"><i class=\"icon-truck\"></i></div>\n            <div class=\"col-md-8 float-right\">\n                <h5 class=\"card-title\">Transport</h5>\n                <p class=\"card-text\">No of service providers registered as plumbers </p>\n            </div>\n        </div>\n        <div class=\"cuscard text-primary bg-white mb-3 float-left col-md-3 p-3 mb-5\">\n            <div class=\"card-icon col-md-3 float-left\"><i class=\"icon-t-shirt\"></i></div>\n            <div class=\"col-md-8 float-right\">\n                <h5 class=\"card-title\">Laundry</h5>\n                <p class=\"card-text\">No of service providers for laundry </p>\n            </div>\n        </div>\n        <div class=\"cuscard text-primary bg-white mb-3 float-left col-md-3 p-3 mb-5\">\n            <div class=\"card-icon col-md-3 float-left\"><i class=\"icon-shop\"></i></div>\n            <div class=\"col-md-8 float-right\">\n                <h5 class=\"card-title\">Houskeeping</h5>\n                <p class=\"card-text\">No of service providers for laundry </p>\n            </div>\n        </div>\n        <div class=\"cuscard text-primary bg-white mb-3 float-left col-md-3 p-3 mb-5\">\n            <div class=\"card-icon col-md-3 float-left\"><i class=\"icon-tv\"></i></div>\n            <div class=\"col-md-8 float-right\">\n                <h5 class=\"card-title\">Electricians</h5>\n                <p class=\"card-text\">No of service providers for laundry </p>\n            </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-checkout pl-5 thinny\">\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Phone</th>\n                        <th>ID/Passport</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td class=\"\"><img src=\"assets/images/icon/freelancer-04.png\" class=\"circle\">\n                            <p><b>{{ user.name }}</b></p><span class=\"fas fa-map-marker-alt text-primary\"></span><span class=\"pl-2\">Syokimau</span></td>\n                        <td class=\"\"> {{ user.email }} </td>\n                        <td class=\"\"> {{ user.phone }} </td>\n                        <td class=\"\"> {{ user.idcard }} </td>\n                        <th>\n                            <span class=\"fa fa-eye text-primary\"></span>\n                            <span class=\"far fa-trash-alt ml-5 text-danger\"></span>\n                        </th>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <!--   <div class=\"payment\">\n                <form class=\"payment-form\" method=\"POST\">\n                    <div class=\"au-input-group au-input-checkbox\">\n                        <input type=\"checkbox\" checked>\n                        <span>check payment</span>\n                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>\n                    </div>\n                    <div class=\"au-input-group au-input-checkbox\">\n                        <input type=\"checkbox\">\n                        <span>paypal</span>\n                        <div class=\"paypal-intro\">\n                            <a href=\"#\">\n                                <img src=\"images/icon/paypal.jpg\" alt=\"PayPal\">\n                            </a>\n                            <span>\n                                <a href=\"#\">What is Paypal?</a>\n                            </span>\n                        </div>\n                    </div>\n                </form>\n                <button class=\"au-btn au-btn--dark au-btn--p40 m-t-50\" type=\"submit\">place order</button>\n            </div> -->\n    </div>\n    <!-- END PAGE PULL-->\n</div>"

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__ = __webpack_require__("./src/app/services/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .toPromise()
            .then(function (res) {
            _this.users = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/widgets/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/widgets/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/widgets/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/components/admin/widgets/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/widgets/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\" class=\"page-wrapper\">\n    <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n    <!-- HEADER DESKTOP-->\n    <app-header></app-header>\n    <div class=\"tr-home\">\n        <div class=\"intro-overlay\">\n            <div class=\"intro\">\n                <h2>Hire reliable and affordable proffessionals to handle your household chores.</h2>\n                <a routerLink=\"/login\">Request proffessionals</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"tr-services\">\n        <div class=\"title\">\n            <h2>Our <span>Services</span></h2>\n        </div>\n\n        <div class=\"services\">\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                    <g>\n                        <path style=\"fill:#78B9EB;\" d=\"M216.348,376h-176h-8l-8,96h32v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64\n                            h32l-8-96H216.348z\"/>\n                        <path style=\"fill:#78B9EB;\" d=\"M280.348,280l8,192h144l8-192H280.348z\"/>\n                    </g>\n                    <g>\n                        <path style=\"fill:#1E81CE;\" d=\"M224.348,368v-11.08L184.756,312h-32.408V0h-48v312H72.052l-39.704,45.048V368h-7.36l-9.336,112\n                            h225.392l-9.336-112H224.348z M136.348,16v8h-16v-8H136.348z M120.348,40h16v272h-16V40z M48.348,363.096L79.268,328h98.264\n                            l30.816,34.968V368h-160L48.348,363.096z M208.348,464v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56\n                            h-16v56h-8v-56h-16v56H33.044l6.664-80h177.28l6.664,80H208.348z\"/>\n                        <path style=\"fill:#1E81CE;\" d=\"M456.348,272v-56c-0.057-48.577-39.423-87.943-88-88h-16c-48.577,0.057-87.943,39.423-88,88v56h-8\n                            v16h16.32l8,192H440.02l8-192h16.328v-16H456.348z M280.348,216c0.044-39.746,32.254-71.956,72-72h16\n                            c39.746,0.044,71.956,32.254,72,72v56h-160V216z M424.676,464H296.02l-7.328-176h143.312L424.676,464z\"/>\n                        <path style=\"fill:#1E81CE;\" d=\"M400.348,304h16v16h-16V304z\"/>\n                        <path style=\"fill:#1E81CE;\" d=\"M400.348,328h16v16h-16V328z\"/>\n                        <path style=\"fill:#1E81CE;\" d=\"M376.348,304h16v16h-16V304z\"/>\n                    </g>\n\n                  </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>CLEANING</h3>\n                    <p>Get reliable cleaning proffessionals in your area withing seconds.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <path style=\"fill:#78B9EB;\" d=\"M148,8H52v80h96V8z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M428,88V8H148v80H428z M188,32c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16\n                              S179.163,32,188,32z\"/>\n                          <circle style=\"fill:#78B9EB;\" cx=\"244\" cy=\"256\" r=\"104\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M44,0v480h392V0H44z M420,80H156V16h264V80z M420,96v320H60V96H420z M140,16v64H60V16H140z M60,464\n                              v-32h360v32H60z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M76,40h16v16H76V40z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M108,40h16v16h-16V40z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M188,72c13.255,0,24-10.745,24-24s-10.745-24-24-24s-24,10.745-24,24S174.745,72,188,72z M188,40\n                              c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S183.582,40,188,40z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M228,40h144v16H228V40z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M388,40h16v16h-16V40z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M244,400c79.529,0,144-64.471,144-144s-64.471-144-144-144s-144,64.471-144,144\n                              C100.093,335.491,164.509,399.907,244,400z M244,128c70.692,0,128,57.308,128,128s-57.308,128-128,128s-128-57.308-128-128\n                              C116.084,185.342,173.342,128.084,244,128z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M244,368c61.856,0,112-50.144,112-112s-50.144-112-112-112s-112,50.144-112,112\n                              C132.066,317.828,182.172,367.934,244,368z M244,160c53.019,0,96,42.981,96,96s-42.981,96-96,96s-96-42.981-96-96\n                              C148.057,203.004,191.004,160.057,244,160z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M388,440h16v16h-16V440z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M356,440h16v16h-16V440z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M76,440h16v16H76V440z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M76,136h16v16H76V136z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M76,112h16v16H76V112z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M100,112h16v16h-16V112z\"/>\n                      </g>\n                      <g>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>LAUNDRY</h3>\n                    <p>Get your laundry done by Trudy proffessionals. Our laundry partners got you covered.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <path style=\"fill:#78B9EB;\" d=\"M376,199.872h-32h-32h-32h-32h-32h-32h-32v48h256v-48H376z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M72,279.872h336v144H72V279.872z\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M480,199.872h-8v-128H255.696L42.016,16.128l-4,15.488l154.288,40.256H8v128H0v64h32v200h416v-200\n                              h32V199.872z M456,87.872v112h-8v-40h-16v-32h-16v-14.176l-98.976-25.824L456,87.872z M416,143.872v16h-16v-16H416z M24,87.872\n                              h229.64L400,126.048v1.824h-16v32H32v40h-8V87.872z M16,247.872v-32h16v32H16z M432,447.872H48v-272h384V447.872z M464,247.872h-16\n                              v-32h16V247.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M96,255.872c17.673,0,32-14.327,32-32s-14.327-32-32-32s-32,14.327-32,32S78.327,255.872,96,255.872\n                              z M96,207.872c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S87.163,207.872,96,207.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M144,255.872h272v-64H144V255.872z M160,207.872h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8\n                              h16v-8h16v8h16v-8h16v8h16v-8h16v32H160V207.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M64,431.872h352v-160H64V431.872z M80,287.872h320v128H80V287.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M104,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M136,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M168,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M200,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M232,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M264,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M296,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M328,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M360,311.872h16v16h-16V311.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M104,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M136,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M168,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M200,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M232,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M264,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M296,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M328,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M360,343.872h16v16h-16V343.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M104,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M136,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M168,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M200,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M232,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M264,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M296,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M328,375.872h16v16h-16V375.872z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M360,375.872h16v16h-16V375.872z\"/>\n                      </g>\n                      <g>\n                      </g>\n                      <g>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>ELECTRICIANS</h3>\n                    <p>Connect with experienced electricians who ensure your house is nothing but a safe haven for your home.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <path style=\"fill:#78B9EB;\" d=\"M176,404c0,35.346,28.654,64,64,64s64-28.654,64-64V284H176V404z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M352,92v16h32V76c0-8.837-7.163-16-16-16h-96v32H352z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M128,60h-16c-8.837,0-16,7.163-16,16v32h32V92h80V60H128z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M256,28c0-8.837-7.163-16-16-16c-8.837,0-16,7.163-16,16v32h32V28z\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M280,164v-64h64v16h48V76c0-13.255-10.745-24-24-24H264V28c0-13.255-10.745-24-24-24\n                              c-13.255,0-24,10.745-24,24v24H112c-13.255,0-24,10.745-24,24v40h48v-16h64v64H0v56c0.044,39.746,32.254,71.956,72,72h96v112\n                              c0,39.764,32.236,72,72,72s72-32.236,72-72V292h96c39.746-0.044,71.956-32.254,72-72v-56H280z M280,68h88c4.418,0,8,3.582,8,8v24\n                              h-16V84h-80V68z M232,28c0-4.418,3.582-8,8-8s8,3.582,8,8v24h-16V28z M120,84v16h-16V76c0-4.418,3.582-8,8-8h88v16H120z M216,100\n                              V68h48v96h-48V100z M296,404c0,30.928-25.072,56-56,56s-56-25.072-56-56V292h112V404z M464,220c-0.04,30.911-25.089,55.96-56,56H72\n                              c-30.911-0.04-55.96-25.089-56-56v-40h448V220z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M360,132h16v16h-16V132z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M322.749,125.91l11.319-11.319l11.314,11.314l-11.319,11.319L322.749,125.91z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M390.627,125.9l11.314-11.314l11.319,11.319l-11.314,11.314L390.627,125.9z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M104,132h16v16h-16V132z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M134.623,125.937l11.314-11.314l11.319,11.319l-11.314,11.314L134.623,125.937z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M66.745,125.947l11.319-11.319l11.314,11.314L78.058,137.26L66.745,125.947z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M432,196h16v16h-16V196z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M432,220h16v16h-16V220z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M408,196h16v16h-16V196z\"/>\n                      </g>\n                      <g>\n                      </g>\n                      <g>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>PLUMBERS</h3>\n                    <p>Get your pipes fixed by a proffessional plumber in your area.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <path style=\"fill:#78B9EB;\" d=\"M8,200h16h176h80h176h16v-32H8V200z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M48,440h384v32H48V440z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M304,24c0-8.837-7.163-16-16-16h-96c-8.837,0-16,7.163-16,16v16h128V24z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M200,200h80v112h-80V200z\"/>\n                          <circle style=\"fill:#78B9EB;\" cx=\"240\" cy=\"376\" r=\"40\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M376,32h-64v-8c0-13.255-10.745-24-24-24h-96c-13.255,0-24,10.745-24,24v8h-64\n                              C46.59,32.066,0.066,78.59,0,136v72h16v216c0,13.255,10.745,24,24,24l0,0v32h400v-32c13.255,0,24-10.745,24-24l0,0V208h16v-72\n                              C479.934,78.59,433.41,32.066,376,32z M184,24c0-4.418,3.582-8,8-8h96c4.418,0,8,3.582,8,8v8H184V24z M424,464H56v-16h368V464z\n                                M448,424c0,4.418-3.582,8-8,8H40c-4.418,0-8-3.582-8-8V208h160v112h96V208h160V424z M208,208h64v96h-64V208z M464,192H16v-16h448\n                              V192z M16,160v-24c0.057-48.577,39.423-87.943,88-88h272c48.577,0.057,87.943,39.423,88,88v24H16z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M32,136h16c0.035-30.913,25.087-55.965,56-56V64C64.254,64.044,32.044,96.254,32,136z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M240,328c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                              C287.974,349.501,266.499,328.026,240,328z M240,408c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                              S257.673,408,240,408z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M224,224h32v16h-32V224z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M224,256h32v16h-32V256z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M392,224h16v16h-16V224z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M416,224h16v16h-16V224z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M416,248h16v16h-16V248z\"/>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>MECHANICS</h3>\n                    <p>Get your car service and fixes done at your convenience in your compound.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"80\" r=\"40\"/>\n                          <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"240\" r=\"40\"/>\n                          <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"400\" r=\"40\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M139.996,144h24v32h-24V144z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M139.996,304h24v32h-24V304z\"/>\n                          <circle style=\"fill:#78B9EB;\" cx=\"395.996\" cy=\"264\" r=\"24\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M123.996,32c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                              C171.97,53.501,150.495,32.026,123.996,32z M123.996,112c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                              S141.669,112,123.996,112z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M99.996,80h16v16h-16V80z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M131.996,80h16v16h-16V80z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M115.996,56h16v16h-16V56z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M123.996,192c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                              C171.97,213.501,150.495,192.026,123.996,192z M123.996,272c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                              S141.669,272,123.996,272z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M99.996,240h16v16h-16V240z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M131.996,240h16v16h-16V240z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M115.996,216h16v16h-16V216z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M123.996,352c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                              C171.97,373.501,150.495,352.026,123.996,352z M123.996,432c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                              S141.669,432,123.996,432z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M99.996,400h16v16h-16V400z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M131.996,400h16v16h-16V400z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M115.996,376h16v16h-16V376z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M75.996,184h96v-48h-96V184z M155.996,168h-8v-16h8V168z M91.996,152h40v16h-40V152z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M75.996,344h96v-48h-96V344z M155.996,328h-8v-16h8V328z M91.996,312h40v16h-40V312z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M403.996,233.136V96c0-22.091-17.909-40-40-40s-40,17.909-40,40v272c0,13.255-10.745,24-24,24h-16\n                              c-13.255,0-24-10.745-24-24V96c-0.024-19.001-13.389-35.373-32-39.2V32h-32V0h-144v480h144V96h32V73.472\n                              c9.555,3.378,15.958,12.394,16,22.528v272c0.026,22.08,17.92,39.974,40,40h16c22.08-0.026,39.974-17.92,40-40V96\n                              c0-13.255,10.745-24,24-24s24,10.745,24,24v137.136c-17.112,4.418-27.402,21.872-22.984,38.984s21.872,27.402,38.984,22.984\n                              s27.402-21.872,22.984-38.984C424.07,244.848,415.268,236.046,403.996,233.136z M179.996,464h-112V16h112V464z M211.996,80h-16V48\n                              h16V80z M395.996,280c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S404.833,280,395.996,280z\"/>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>REPAIRS</h3>\n                    <p>Restore your items to their original shape with our repair professionals.</p>\n                </div>\n            </div>\n            <div class=\"service\">\n                <div class=\"service-icon\">\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                      <g>\n                          <path style=\"fill:#78B9EB;\" d=\"M40,136h48v32H40V136z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M120,136h32v32h-32V136z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M32,312h32v32H32V312z\"/>\n                          <path style=\"fill:#78B9EB;\" d=\"M416,312h32v32h-32V312z\"/>\n                      </g>\n                      <g>\n                          <path style=\"fill:#1E81CE;\" d=\"M480,160H160v-32h-48v32H96v-32H32v32H0v160h24v32h48v-32h336v32h48v-32h24V160z M128,144h16v16h-16\n                              V144z M48,144h32v16H48V144z M56,336H40v-16h16V336z M440,336h-16v-16h16V336z M464,304H16V176h448V304z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M112,288h64v-96h-64V288z M128,272v-24h32v24H128z M160,208v24h-32v-24H160z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M256,192h-64v96h64V192z M240,208v24h-32v-24H240z M208,272v-24h32v24H208z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M368,192h-64v96h64V192z M352,208v24h-32v-24H352z M320,272v-24h32v24H320z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M448,192h-64v96h64V192z M432,208v24h-32v-24H432z M400,272v-24h32v24H400z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M272,208h16v16h-16V208z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M272,256h16v16h-16V256z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M32,200h48v16H32V200z\"/>\n                          <path style=\"fill:#1E81CE;\" d=\"M32,240h48v16H32V240z\"/>\n                      </g>\n                    </svg>\n                </div>\n                <div class=\"service-name\">\n                    <h3>OUTDOOR SERVICES</h3>\n                    <p>Get your lawn mowed and fences trimmed.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"tr-join\">\n        <div class=\"title\">\n            <h2>MAKE <span>Money</span> With us</h2>\n        </div>\n\n        <div class=\"join\">\n            <div class=\"steps\">\n                <h2>Get hired and make money with us.</h2>\n                <p>Join other proffessionals on trudy by registering as a partner. which says there’s nothing meaningful to return. It’s used similarly to void in Java and C. (A difference is that because every Scala expression must have some value</p>\n\n                <a routerLink=\"/login\">Join Us</a>\n            </div>\n            <div class=\"steps-image\"></div>\n        </div>\n    </div>\n\n    <div class=\"tr-para\">\n        <div class=\"para-over\">\n            <div class=\"testimonial\">\n                <div class=\"image\">\n                    <img src=\"assets/images/pro.jpg\" />\n                </div>\n                <div class=\"testimony\">\n                    <p><span>\"</span>Trudy proffessionals are very responsive and reliable. My house is very clean.<span>\"</span></p>\n                    <h4>Jane Doe</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- FOOTER-->\n    <app-footer></app-footer>\n    <!-- END FOOTER-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper loginbg text-white\">\n    <!-- APPLICATION HEADER-->\n    <app-header></app-header>\n    <!-- END APPLICATION HEADER-->\n\n    <!-- PROTECTED GALLERY-->\n    <section class=\"protected-gallery\">\n\n        <div class=\"protected-gallery-wrap\" id=\"startscreen\">\n            <!-- LOGIN COMPONENT -->\n            <app-login></app-login>\n            <!-- END LOGIN COMPONENT -->\n\n\n            <div id=\"triangle-down\"></div>\n            <div id=\"triangle-up\"></div>\n            <div id=\"menuContent\">\n                <ul>\n                    <li><a href=\".section1\">Menu 1</a></li>\n                    <li><a href=\".section2\">Menu 2</a></li>\n                    <li><a href=\".section3\">Menu 3</a></li>\n                </ul>\n                <div id=\"menuClose\">✕</div>\n            </div>\n\n            <!-- REGISTRATION COMPONENT -->\n            <app-register></app-register>\n            <!-- END REGISTRATION COMPONENT-->\n        </div>\n    </section>\n    <!-- END PROTECTED GALLERY-->\n\n    <!-- FOOTER-->\n    <app-footer></app-footer>\n    <!-- END FOOTER-->\n</div>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"title\">\n    <div class=\"container\">\n        <div class=\"protected-gallery__content textpart float-left col-lg-5 col-md-6 text-left\">\n            <h1 class=\"weight-slim text-uppercase\"><b>Hello <br>Welcome To Trudy</b> Your Space To Make Money!</h1>\n            <p>You Don't have a Trudy account yet? Click the sign up button below to sign up</p>\n            <div class=\"button-group mt-4\">\n                <a href=\"#\" class=\"au-btn au-btn--p50\">See More</a>\n                <button class=\"au-btn au-btn--p50\" id=\"button\">Sign Up</button>\n\n            </div>\n        </div>\n        <div class=\"protected-gallery__content float-right col-lg-5 col-md-6\">\n            <h3>Hello Welcome To Trudy!</h3>\n            <p class=\"mb-5 text-normal\">Please Enter your username & password below to continue</p>\n            <p class=\"mb-5 text-normal\">{{ error }}</p>\n            <form class=\"m-t-25\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n                <div class=\"col-lg-12 mb-5\">\n                    <input class=\"au-input\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Your username ...\">\n                </div>\n                <div class=\"col-lg-12\">\n                    <input class=\"au-input\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Your password ...\">\n                </div>\n                <button class=\"au-btn au-btn--dark au-btn--p50\" type=\"submit\">Continue Login</button>\n                <div class=\"col-lg-12 mt-5\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\n                    <label class=\"form-check-label\" for=\"inlineCheckbox2\">Remember me</label>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.user)
            .toPromise()
            .then(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            _this.router.navigate(['requests']);
        })
            .catch(function (err) {
            _this.error = err.email || err.password || err.error;
        });
    };
    LoginComponent.prototype.validateEntries = function (data) {
        var message;
        if (!data.email || !data.password) {
            message = 'email and password field is required';
            return message;
        }
        else {
            return true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-footer {\n    border-top: 1px solid #e7ecef;\n    background: #f8f8f8 !important;\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n\n        <form method=\"POST\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Book Pro</h5>\n                    <p class=\"float-left col-md-12\">Enter the Job description and time in the form below.</p>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                </div>\n                <div class=\"modal-footer\">\n\n                    <div class=\"col-md-12 float-left p-0\">\n                        <div class=\"form-group\">\n                            <label class=\"col-md-12 p-0\">Category *</label>\n                            <div class=\"col-md-12 p-0\">\n                                <select class=\"form-control form-control-line\" (change)=\"onChange($event)\" name=\"category\" required>\n                                  <option disabled=\"disabled\">Select Category</option>\n                                  <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label class=\"col-md-12 p-0\">Date *</label>\n                          <div class=\"col-md-12 p-0\">\n                              <input type=\"date\" class=\"form-control form-control-line\" name=\"date\" value=\"{{date}}\" (change)=\"onDateChange($event)\" required />\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-md-12 p-0\">Job Description *</label>\n                            <div class=\"col-md-12 p-0\">\n                                <textarea rows=\"5\" class=\"form-control form-control-line\" name=\"description\" value=\"{{description}}\" required></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" (click)=\"requestPro()\" class=\"au-btn au-btn--dark au-btn--p40 float-right\">Request Pro</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\" class=\"page-wrapper\">\n    <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n    <!-- HEADER DESKTOP-->\n    <app-header></app-header>\n\n    <!-- END HEADER MOBILE-->\n    <div class=\"container p-b-70\">\n        <!-- ============================================================== -->\n        <!-- Bread crumb and right sidebar toggle -->\n        <!-- ============================================================== -->\n        <div class=\"page-breadcrumb\">\n            <div class=\"row\">\n                <div class=\"col-5 align-self-center\">\n                    <h4 class=\"page-title\">My Profile</h4>\n                    <div class=\"d-flex align-items-center\">\n\n                    </div>\n                </div>\n                <div class=\"col-7 align-self-center\">\n                    <div class=\"d-flex no-block justify-content-end align-items-center\">\n                        <nav aria-label=\"breadcrumb\">\n                            <ol class=\"breadcrumb\">\n                                <li class=\"breadcrumb-item\">\n                                    <a routerLink=\"/requests\">back to providers</a>\n                                </li>\n                            </ol>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Bread crumb and right sidebar toggle -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"container-fluid\">\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n            <!-- Row -->\n            <div class=\"row\">\n                <!-- Column -->\n                <div class=\"col-lg-4 col-xlg-3 col-md-5\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <a *ngIf=\"currentUser\" href=\"\" rel=\"tooltip\" class=\"tooly\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit details\">\n                                <span class=\"icon-pencil\"></span>\n                            </a>\n                            <div class=\"m-t-30\">\n                                <img src=\"assets/images/pro.jpg\" class=\"rounded-circle\" width=\"100\" />\n                                <h4 class=\"card-title m-t-10\">{{user.name}}</h4>\n                                <p class=\"card-subtitle\">Errands Pro</p>\n                                <div class=\"row text-center justify-content-md-center ratestar\">\n                                    <a href=\"#\">\n                                        <span class=\"fa fa-star\"></span>\n                                    </a>\n                                    <a href=\"#\">\n                                        <span class=\"fa fa-star\"></span>\n                                    </a>\n                                    <a href=\"#\">\n                                        <span class=\"fa fa-star\"></span>\n                                    </a>\n                                    <a href=\"#\">\n                                        <span class=\"fa fa-star\"></span>\n                                    </a>\n                                    <a href=\"#\">\n                                        <span class=\"fa fa-star-o\"></span>\n                                    </a>\n                                </div>\n                                <button *ngIf=\"!currentUser\" class=\"btn au-btn m-t-20\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">Request Service</button>\n                            </div>\n                        </div>\n                        <div>\n                            <hr> </div>\n\n                        <div class=\"card-body\">\n                            <a *ngIf=\"currentUser\" href=\"\" rel=\"tooltip\" class=\"tooly\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit details\">\n                                <span class=\"icon-pencil\"></span>\n                            </a>\n                            <h6>Email address </h6>\n                            <p class=\"text-muted\">{{user.email}}</p>\n                            <h6 class=\"p-t-30 db\">Phone</h6>\n                            <p class=\"text-muted\">{{user.phone}}</p>\n\n                        </div>\n                        <hr>\n                        <div class=\"card-body\">\n                            <h6 class=\"font-medium m-t-30\">My Skills</h6>\n                            <a *ngIf=\"currentUser\" href=\"\" rel=\"tooltip\" class=\"tooly\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit details\">\n                                <span class=\"icon-pencil\"></span>\n                            </a>\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol lau\"></span>\n                                <h5 class=\"pull-left\">Laundry </h5>\n                            </div>\n\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol errands\"></span>\n                                <h5 class=\"pull-left\">Errands </h5>\n                            </div>\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol elect\"></span>\n                                <h5 class=\"pull-left\">Electrician </h5>\n                            </div>\n\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol cleaning\"></span>\n                                <h5 class=\"pull-left\">Errands </h5>\n                            </div>\n\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol plumbing\"></span>\n                                <h5 class=\"pull-left\">Laundry </h5>\n                            </div>\n\n                            <div class=\"col-12 m-t-30 skkll\">\n                                <span class=\"pull-left skillcol nanny\"></span>\n                                <h5 class=\"pull-left\">Errands </h5>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Column -->\n                <!-- Column -->\n                <div class=\"col-lg-8 col-xlg-9 col-md-7\">\n                    <div class=\"card\">\n                        <!-- Tabs -->\n                        <ul class=\"nav nav-pills custom-pills\" id=\"pills-tab\" role=\"tablist\">\n                            <li class=\"nav-item\" (click)=\"tab('profile')\">\n                                <a class=\"nav-link active\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#\" aria-controls=\"pills-profile\" aria-selected=\"false\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\" (click)=\"tab('timeline')\">\n                                <a class=\"nav-link \" id=\"pills-timeline-tab\" data-toggle=\"pill\" href=\"#\" aria-controls=\"pills-timeline\" aria-selected=\"true\">Activities</a>\n                            </li>\n                            <li *ngIf=\"currentUser\" class=\"nav-item\" (click)=\"tab('settings')\">\n                                <a class=\"nav-link\" id=\"pills-setting-tab\" data-toggle=\"pill\" href=\"#\" aria-controls=\"pills-setting\" aria-selected=\"false\">Setting</a>\n                            </li>\n                        </ul>\n                        <!-- Tabs -->\n                        <div class=\"tab-content\" id=\"pills-tabContent\">\n                            <div *ngIf=\"profile\" class=\"tab-pane fade show active\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n                                <div class=\"card-body\">\n                                    <a *ngIf=\"currentUser\" href=\"\" rel=\"tooltip\" class=\"tooly\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit details\">\n                                        <span class=\"icon-pencil\"></span>\n                                    </a>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3 col-xs-6 b-r\"> <strong>Full Name</strong>\n                                            <br>\n                                            <p class=\"text-muted\">{{ user.name }}</p>\n                                        </div>\n                                        <div class=\"col-md-3 col-xs-6 b-r\"> <strong>Mobile</strong>\n                                            <br>\n                                            <p class=\"text-muted\">{{ user.phone }}</p>\n                                        </div>\n                                        <div class=\"col-md-3 col-xs-6 b-r\"> <strong>Email</strong>\n                                            <br>\n                                            <p class=\"text-muted\">{{ user.email }}</p>\n                                        </div>\n                                        <div class=\"col-md-3 col-xs-6\"> <strong>Location</strong>\n                                            <br>\n                                            <p class=\"text-muted\">Naivasha</p>\n                                        </div>\n                                    </div>\n                                    <hr>\n                                    <h6 class=\"font-medium m-t-30\">About Me</h6>\n                                    <p class=\"m-t-30\">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus\n                                        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                                        to make a type specimen book. It has survived not only five centuries </p>\n                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                                    <div class=\"sociale col-12 p-0\">\n                                        <button class=\"btn btn-circle\"><i class=\"fab fa-facebook-f\"></i></button>\n                                        <button class=\"btn btn-circle\"><i class=\"fab fa-twitter\"></i></button>\n                                        <button class=\"btn btn-circle\"><i class=\"fab fa-youtube\"></i></button>\n                                    </div>\n                                    <div class=\"map-box\">\n                                        <hr>\n                                        <h6 class=\"p-t-30 db\">Location</h6>\n                                        <br/>\n                                        <!--The div element for the map -->\n                                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                                        </agm-map>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"timeline\" class=\"tab-pane show active\" role=\"tabpanel\" aria-labelledby=\"pills-timeline-tab\">\n                                <div class=\"card-body\">\n                                  <div class=\"sociale col-12 p-0\">\n                                          <div *ngFor=\"let request of requests\" class=\"profiletimeline m-t-0\">\n                                            <div class=\"sl-item col-md-12 p-0 float-left\">\n                                              <div class=\"card-body\">\n                                                    <div class=\"sl-left col-md-4 clientel\">\n                                                      <img src=\"assets/images/pro.jpg\" alt=\"user\" class=\"rounded-circle\"/>\n                                                      <h6 class=\"card-title m-t-10\">{{user.name}}</h6>\n                                                      <p class=\"card-subtitle\">Pro</p>\n                                                    </div>\n                                                    <div class=\"sl-left col-md-4 pror\">\n                                                      <img src=\"assets/images/client.jpg\" alt=\"user\" class=\"rounded-circle\"/>\n                                                      <h6 class=\"card-title m-t-10\">{{request.client_email}}</h6>\n                                                      <p class=\"card-subtitle\">Customer</p>\n                                                    </div>\n\n                                                    <div class=\"sl-right col-md-2\">\n                                                                <span class=\"badge badge-primary\">Complete</span>\n                                                                <span class=\"badge badge-primary\">PAID</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"like-comm col-md-12\">\n                                                        <a href=\"javascript:void(0)\" class=\"link m-r-10 float-right\">Cancel</a>\n                                                        <a href=\"javascript:void(0)\" class=\"link m-r-10 float-right\">Complete</a>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                          </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Column -->\n            </div>\n            <!-- Row -->\n            <!-- ============================================================== -->\n            <!-- End PAge Content -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- Right sidebar -->\n            <!-- ============================================================== -->\n            <!-- .right-sidebar -->\n            <!-- ============================================================== -->\n            <!-- End Right sidebar -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Container fluid  -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- footer -->\n        <!-- ============================================================== -->\n        <!--             <footer class=\"footer text-center\">\n                All Rights Reserved by AdminBite admin. Designed and Developed by\n                <a href=\"https://wrappixel.com\">WrapPixel</a>.\n            </footer> -->\n        <!-- ============================================================== -->\n        <!-- End footer -->\n        <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page wrapper  -->\n    <!-- ============================================================== -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("./src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_categories_categories_service__ = __webpack_require__("./src/app/services/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_requests_requests_service__ = __webpack_require__("./src/app/services/requests/requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, userService, mapsAPILoader, ngZone, categoriesService, requestsService) {
        this.route = route;
        this.userService = userService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.categoriesService = categoriesService;
        this.requestsService = requestsService;
        this.settings = false;
        this.currentUser = false;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.userService.getUserDetails(_this.id)
                .toPromise()
                .then(function (res) {
                _this.user = res;
                console.log({ user: _this.user });
                _this.loggedInUser = JSON.parse(localStorage.getItem('user'));
                _this.currentUser = (_this.user.id === _this.loggedInUser.id) ? true : false;
            })
                .catch(function (err) { return console.log(err); });
        });
        this.getCategories();
        this.getRequests();
        this.profile = true;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ['address'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log(JSON.stringify(place.geometry.location));
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    ProfileComponent.prototype.tab = function (state) {
        switch (state) {
            case 'profile':
                this.settings = false;
                this.timeline = false;
                this.profile = true;
                break;
            case 'settings':
                this.profile = false;
                this.timeline = false;
                this.settings = true;
                break;
            case 'timeline':
                this.profile = false;
                this.settings = false;
                this.timeline = true;
                break;
            default:
                this.settings = false;
                this.timeline = false;
                this.profile = true;
        }
    };
    /**
     * Get all Categories.
     *
     * @return {Array} - List of categories.
     */
    ProfileComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getAllCategories()
            .toPromise()
            .then(function (res) { return _this.categories = res; })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.getRequests = function () {
        var _this = this;
        this.requestsService.getAllRequests()
            .toPromise()
            .then(function (res) {
            _this.requests = res.filter(function (resp) { return resp.partner_id === _this.user.id; });
            console.table(_this.requests);
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Set select dropdown value.
     * @param event - select dropdown onchange event.
     */
    ProfileComponent.prototype.onChange = function (event) {
        this.category = event.target.value;
    };
    /**
     * Set date value.
     * @param event - set date event.
     */
    ProfileComponent.prototype.onDateChange = function (event) {
        this.date = event.target.value;
    };
    /**
     * request Pro Services
     */
    ProfileComponent.prototype.requestPro = function () {
        var request = {
            date: this.date,
            category_id: this.category,
            client_email: this.loggedInUser.email,
            partner_id: this.user.id
        };
        console.log(request);
        this.requestsService.requestPro(request)
            .toPromise()
            .then(function (res) {
            if (res) {
                window.location.reload();
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProfileComponent.prototype, "searchElement", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__services_categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_5__services_requests_requests_service__["a" /* RequestsService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<content>\n    <section class=\"section1 pt-5\">\n\n        <div class=\"protected-gallery__content ml-auto mr-auto mt-5 col-lg-5 col-md-6\">\n            <h3>Hello Welcome To Trudy!</h3>\n            <p class=\"mb-5 text-normal\">Create an account with us and start making money in a gif </p>\n\n            <p class=\"mb-5 text-normal\">{{ error }} </p>\n            <form class=\"m-t-25\" (ngSubmit)=\"onSubmit()\" #registrationForm=\"ngForm\">\n                <div class=\"col-lg-12 mb-5\">\n                    <input class=\"au-input\" type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Your Name ...\">\n                </div>\n\n                <div class=\"col-lg-12 mb-5\">\n                    <input class=\"au-input\" type=\"email\" name=\"id\" [(ngModel)]=\"user.email\" placeholder=\"Your Email ...\">\n                </div>\n\n                <div class=\"col-lg-12 mb-5\">\n                    <input class=\"au-input\" type=\"text\" name=\"phone\" [(ngModel)]=\"user.phone\" placeholder=\"Your phone number ...\">\n                </div>\n                <div class=\"col-lg-12 mb-5\">\n                    <input class=\"au-input\" type=\"text\" name=\"idcard\" [(ngModel)]=\"user.idcard\" placeholder=\"Your ID number ...\">\n                </div>\n                <div class=\"col-lg-12\">\n                    <input class=\"au-input\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Your password ...\">\n                </div>\n                <button class=\"au-btn au-btn--dark au-btn--p50\" type=\"submit\">Earn Money</button>\n                <a href=\"#\" class=\"pt-5\"><b>Have an account? Login</b></a>\n            </form>\n        </div>\n    </section>\n</content>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.register(this.user)
            .toPromise()
            .then(function (res) { return window.location.reload(); })
            .catch(function (err) {
            _this.error = err.email || err.phone || err.name;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/requests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper text-white \">\n    <!-- APPLICATION HEADER-->\n    <app-header></app-header>\n    <!-- END APPLICATION HEADER-->\n\n    <!-- CHECKOUT-->\n    <section class=\"checkout p-t-85\">\n        <div class=\"container\">\n\n            <div class=\"row request\">\n\n                <div class=\"col-lg-12 p-t-30 p-b-30\">\n                    <div class=\"col-md-5 wow fadeInUp float-left \" data-wow-delay=\".4s\" data-wow-duration=\"1s\">\n                        <div class=\"statistic__item\">\n                            <div class=\"col-md-2 float-left\">\n                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\" width=\"50px\" height=\"50px\">\n                                <g>\n                                    <path style=\"fill:#78B9EB;\" d=\"M176,404c0,35.346,28.654,64,64,64s64-28.654,64-64V284H176V404z\"/>\n                                    <path style=\"fill:#78B9EB;\" d=\"M352,92v16h32V76c0-8.837-7.163-16-16-16h-96v32H352z\"/>\n                                    <path style=\"fill:#78B9EB;\" d=\"M128,60h-16c-8.837,0-16,7.163-16,16v32h32V92h80V60H128z\"/>\n                                    <path style=\"fill:#78B9EB;\" d=\"M256,28c0-8.837-7.163-16-16-16c-8.837,0-16,7.163-16,16v32h32V28z\"/>\n                                </g>\n                                <g>\n                                    <path style=\"fill:#1E81CE;\" d=\"M280,164v-64h64v16h48V76c0-13.255-10.745-24-24-24H264V28c0-13.255-10.745-24-24-24\n                                        c-13.255,0-24,10.745-24,24v24H112c-13.255,0-24,10.745-24,24v40h48v-16h64v64H0v56c0.044,39.746,32.254,71.956,72,72h96v112\n                                        c0,39.764,32.236,72,72,72s72-32.236,72-72V292h96c39.746-0.044,71.956-32.254,72-72v-56H280z M280,68h88c4.418,0,8,3.582,8,8v24\n                                        h-16V84h-80V68z M232,28c0-4.418,3.582-8,8-8s8,3.582,8,8v24h-16V28z M120,84v16h-16V76c0-4.418,3.582-8,8-8h88v16H120z M216,100\n                                        V68h48v96h-48V100z M296,404c0,30.928-25.072,56-56,56s-56-25.072-56-56V292h112V404z M464,220c-0.04,30.911-25.089,55.96-56,56H72\n                                        c-30.911-0.04-55.96-25.089-56-56v-40h448V220z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M360,132h16v16h-16V132z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M322.749,125.91l11.319-11.319l11.314,11.314l-11.319,11.319L322.749,125.91z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M390.627,125.9l11.314-11.314l11.319,11.319l-11.314,11.314L390.627,125.9z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M104,132h16v16h-16V132z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M134.623,125.937l11.314-11.314l11.319,11.319l-11.314,11.314L134.623,125.937z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M66.745,125.947l11.319-11.319l11.314,11.314L78.058,137.26L66.745,125.947z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M432,196h16v16h-16V196z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M432,220h16v16h-16V220z\"/>\n                                    <path style=\"fill:#1E81CE;\" d=\"M408,196h16v16h-16V196z\"/>\n                                </g>\n                                </svg>\n                            </div>\n\n                            <div class=\"number-wrap col-md-10 float-left\">\n                                <h4 class=\"text-pink number js-counter-up\" data-counterup-time=\"1000\">{{availablePartners}}</h4>\n                                <h3 class=\"title\">Partners available</h3>\n                            </div>\n                        </div>\n                    </div>\n                    <form class=\"col-md-7 float-left\" #filterForm=\"ngForm\">\n                        <div class=\"col-md-6 float-left\">\n                            <div class=\"au-input-group\">\n                                <input type=\"text\" class=\"form-control form-control-line\" name=\"location\" id=\"autocomplete\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3 float-left\">\n                            <div class=\"au-input-group\">\n                                <select class=\"form-control\" (change)=\"onChange($event)\" id=\"exampleSelect1\">\n                                    <option disabled=\"disabled\">Select Category</option>\n                                    <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-3 float-left\">\n                            <button (click)=\"filterPatners()\" type=\"button\" class=\"mt-85 btn btn-primary\">Find Pro</button>\n                        </div>\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </section>\n    <!-- END CHECKOUT-->\n\n    <!-- SHOP-->\n    <section class=\"shop hytauto p-t-70 p-b-70 js-list-load\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div *ngFor=\"let partner of partners\" class=\"col-lg-4\">\n                    <div class=\"shop__item\">\n                        <div class=\"image\">\n                            <div class=\"bg-overlay bg-overlay--opa30\"></div>\n                            <div class=\"sale-tag\"><span class=\"icon-badge\"></span></div>\n                            <img src=\"assets/images/shop-01.jpg\" alt=\"young lucy\" />\n                            <div class=\"tool-box\">\n                                <a class=\"js-addcart\" routerLink=\"/profile/{{partner.user_id}}\">\n                                    Request Service\n                                </a>\n                                <a routerLink=\"/profile/{{partner.user_id}}\">\n                                    View Profile\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"content\">\n                            <h3>\n                                <a class=\"js-name\" routerLink=\"/profile/{{partner.user_id}}\">{{partner.partner_details.name}}</a>\n                            </h3>\n                            <span class=\"price\">{{partner.partner_details.category}}</span>\n                            <div class=\"star-rating\">\n                                <span><span class=\"fa fa-star\" data-rating=\"1\"></span><span class=\"badge badge-primary\">5</span></span>\n                                <input type=\"hidden\" name=\"whatever1\" class=\"rating-value\" value=\"2.56\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!--div class=\"see-more\">\n                <a class=\"au-btn au-btn--dark au-btn--p50 js-load-btn\" href=\"#\">see more</a>\n            </div-->\n        </div>\n    </section>\n    <!-- END SHOP-->\n    <!-- FOOTER-->\n    <app-footer></app-footer>\n    <!-- END FOOTER-->\n</div>\n\n\n\n\n<!-- map mddal-->\n\n<div class=\"mappia\">\n\n\n    <div class=\"about-us-2__intro\">\n        <div class=\"about-us-2__intro-inner\">\n            <h2 class=\"wow fadeInLeft\" data-wow-delay=\".5s\">Your</h2>\n            <h1 class=\"wow fadeInLeft\" data-wow-delay=\".2s\">Location</h1>\n\n            <div class=\"pac-card\" id=\"pac-card\">\n\n\n                <!--   <div id=\"pac-container\">\n            <input id=\"pac-input\" type=\"text\"\n                placeholder=\"Enter a location\">\n          </div> -->\n\n                <div id=\"map\"></div>\n                <div id=\"infowindow-content\">\n                    <img src=\"\" width=\"16\" height=\"16\" id=\"place-icon\">\n                    <span id=\"place-name\" class=\"title\"></span><br>\n                    <span id=\"place-address\"></span>\n                </div>\n            </div>\n            <a class=\"closey\" href=\"\" data-wow-delay=\".6s\"><span class=\"icon-close\"></span></a>\n            <a class=\"btn btn-primary\" href=\"\" data-wow-delay=\".6s\">Yes thats my location</a>\n        </div>\n    </div>\n</div>\n\n<!-- map mddal-->"

/***/ }),

/***/ "./src/app/components/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_partners_partners_service__ = __webpack_require__("./src/app/services/partners/partners.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_categories_service__ = __webpack_require__("./src/app/services/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(partnersService, categoriesService, mapsAPILoader, ngZone) {
        this.partnersService = partnersService;
        this.categoriesService = categoriesService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.partners = [];
        this.categories = [];
        this.query = {};
        this.filter = {};
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategories();
        this.partnersService.getAllPartners()
            .toPromise()
            .then(function (res) {
            _this.partners = res;
            _this.availablePartners = res.length;
            console.table(_this.partners);
        })
            .catch(function (err) { return console.log(err); });
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ['address'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log(JSON.stringify(place.geometry.location));
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    /**
     * Set select dropdown value.
     * @param event - select dropdown onchange event.
     */
    RequestsComponent.prototype.onChange = function (event) {
        this.category = event.target.value;
    };
    // Gets partners based on the filter.
    RequestsComponent.prototype.filterPatners = function () {
        var _this = this;
        var filter = {
            lat: this.lat,
            lng: this.lng,
            category: this.category,
        };
        this.partnersService.getFilteredPartners(filter)
            .toPromise()
            .then(function (res) {
            _this.partners = res;
            _this.availablePartners = res.length;
        })
            .catch(function (err) { return console.log(err); });
    };
    // get categories
    RequestsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getAllCategories()
            .toPromise()
            .then(function (res) { return _this.categories = res; })
            .catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RequestsComponent.prototype, "searchElement", void 0);
    RequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-requests',
            template: __webpack_require__("./src/app/components/requests/requests.component.html"),
            styles: [__webpack_require__("./src/app/components/requests/requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_partners_partners_service__["a" /* PartnersService */],
            __WEBPACK_IMPORTED_MODULE_2__services_categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\" class=\"page-wrapper\">\n    <app-header></app-header>\n    <div class=\"container p-b-70\">\n        <!-- ============================================================== -->\n        <!-- Bread crumb and right sidebar toggle -->\n        <!-- ============================================================== -->\n        <div class=\"page-breadcrumb\">\n            <div class=\"row\">\n                <div class=\"col-5 align-self-center\">\n                    <h4 class=\"page-title\">Profile Settings</h4>\n                    <div class=\"d-flex align-items-center\">\n\n                    </div>\n                </div>\n                <div class=\"col-7 align-self-center\">\n                    <div class=\"d-flex no-block justify-content-end align-items-center\">\n                        <nav aria-label=\"breadcrumb\">\n                            <ol class=\"breadcrumb\">\n                                <li class=\"breadcrumb-item\">\n                                    <a href=\"#\">My Account</a>\n                                </li>\n                            </ol>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Bread crumb and right sidebar toggle -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"container-fluid\">\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n            <!-- Row -->\n            <div class=\"row\">\n                <!-- Column -->\n                <div class=\"col-lg-8 col-xlg-9 col-md-8\">\n                    <div class=\"card\">\n                        <main role=\"main\" class=\"container\">\n                            <form class=\"formprof blur form-horizontal form-material\">\n                                <div class=\"align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow float-left col-md-12\">\n                                    <div class=\"text-right mt-3 pull-left col-md-5 p-0\">\n                                        <div class=\"col-md-2 float-left p-0\"> <img src=\"assets/images/pro.jpg\" class=\"rounded-circle\" width=\"\"></div>\n                                        <div class=\"col-md-8 float-left\">\n                                            <h6 class=\"mb-0 pull-left mt-1\">{{user.name}}</h6><br>\n                                        </div>\n                                    </div>\n                                    <div class=\"text-right pull-right p-0\">\n                                    </div>\n                                </div>\n\n                                <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n                                    <h6 class=\"border-bottom border-gray pb-2 mb-0\">ACCOUNT INFORMATION</h6>\n                                    <div class=\"media text-muted pt-3 \">\n\n                                        <div class=\"form-group col-md-6 p-l-0\">\n                                            <label class=\"col-md-12 p-l-0\">Full Name</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <input type=\"text\" placeholder=\"{{user.name}}\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-6 p-l-0\">\n                                            <label for=\"example-email\" class=\"col-md-12 p-l-0\">Email</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <input type=\"email\" placeholder=\"{{user.email}}\" class=\"form-control form-control-line\" name=\"example-email\" id=\" example-email\">\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"media text-muted pt-3\">\n                                        <div class=\"form-group col-md-6 p-l-0\">\n                                            <label class=\"col-md-12 p-l-0\">Password</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <input type=\"password\" value=\"password\" class=\"form-control form-control-line\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-6 p-l-0\">\n                                            <label class=\"col-md-12 p-l-0\">Phone No</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <input type=\"text\" placeholder=\"{{ user.phone }}\" class=\"form-control form-control-line\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n                                    <h6 class=\"border-bottom border-gray pb-2 mb-0\">BECOME A SERVICE PROVIDER</h6>\n                                    <div class=\"media text-muted pt-3 \">\n\n                                        <div class=\"form-group col-md-6 p-l-0\">\n                                            <label class=\"col-md-12 p-l-0\">Location</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <input type=\"text\" placeholder=\"{{partner.location}}\" class=\"form-control form-control-line\" name=\"location\" id=\"autocomplete\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-3 p-l-0\">\n                                            <label for=\"example-email\" class=\"col-md-12 p-l-0\">Category</label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <select class=\"form-control form-control-line\" (change)=\"onChange($event)\" name=\"category\">\n                                                      <option disabled=\"disabled\">Select Category</option>\n                                                      <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n                                                    </select>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group col-md-3 p-l-0\">\n                                            <label for=\"example-email\" class=\"col-md-12 p-l-0\"></label>\n                                            <div class=\"col-md-12 p-l-0\">\n                                                <button (click)=\"createOrUpdatePartner()\" class=\"btn\">Submit</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n                                    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Suggestions</h6>\n                                    <div class=\"media text-muted pt-3\">\n                                        <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\n                                        <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n                                            <div class=\"d-flex justify-content-between align-items-center w-100\">\n                                                <strong class=\"text-gray-dark\">Full Name</strong>\n                                                <a href=\"#\">Follow</a>\n                                            </div>\n                                            <span class=\"d-block\">@username</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"media text-muted pt-3\">\n                                        <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\n                                        <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n                                            <div class=\"d-flex justify-content-between align-items-center w-100\">\n                                                <strong class=\"text-gray-dark\">Full Name</strong>\n                                                <a href=\"#\">Follow</a>\n                                            </div>\n                                            <span class=\"d-block\">@username</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"media text-muted pt-3\">\n                                        <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\n                                        <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n                                            <div class=\"d-flex justify-content-between align-items-center w-100\">\n                                                <strong class=\"text-gray-dark\">Full Name</strong>\n                                                <a href=\"#\">Follow</a>\n                                            </div>\n                                            <span class=\"d-block\">@username</span>\n                                        </div>\n                                    </div>\n                                    <small class=\"d-block text-right mt-3\">\n                                  <a href=\"#\">All suggestions</a>\n                                </small>\n                                </div>\n                            </form>\n                        </main>\n                    </div>\n                </div>\n                <!-- Column -->\n            </div>\n            <!-- Row -->\n            <!-- ============================================================== -->\n            <!-- End PAge Content -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- Right sidebar -->\n            <!-- ============================================================== -->\n            <!-- .right-sidebar -->\n            <!-- ============================================================== -->\n            <!-- End Right sidebar -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Container fluid  -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- footer -->\n        <!-- ============================================================== -->\n        <!--             <footer class=\"footer text-center\">\n          All Rights Reserved by AdminBite admin. Designed and Developed by\n          <a href=\"https://wrappixel.com\">WrapPixel</a>.\n      </footer> -->\n        <!-- ============================================================== -->\n        <!-- End footer -->\n        <!-- ============================================================== -->\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categories_categories_service__ = __webpack_require__("./src/app/services/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_partners_partners_service__ = __webpack_require__("./src/app/services/partners/partners.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(categoriesService, partnerService, mapsAPILoader, ngZone) {
        this.categoriesService = categoriesService;
        this.partnerService = partnerService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.partnerDetails = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = localStorage.getItem('user');
        this.user = JSON.parse(currentUser);
        console.log(this.user);
        this.checkIsPartner(this.user.id);
        this.getCategories();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ['address'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.location = place.formatted_address;
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    /**
     * Get all Categories.
     *
     * @return {Array} - List of categories.
     */
    SettingsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getAllCategories()
            .toPromise()
            .then(function (res) { return _this.categories = res; })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Set select dropdown value.
     * @param event - select dropdown onchange event.
     */
    SettingsComponent.prototype.onChange = function (event) {
        this.category = event.target.value;
    };
    /**
     * Check if user is a partner and getDetails
     */
    SettingsComponent.prototype.checkIsPartner = function (id) {
        var _this = this;
        this.partnerService.getPatnerDetails(id)
            .toPromise()
            .then(function (res) {
            _this.partner = res;
            _this.isPartner = true;
            console.log(_this.partner);
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Create or update Partner.
     */
    SettingsComponent.prototype.createOrUpdatePartner = function () {
        var partner = {
            'user_id': this.user.id,
            'category': this.category,
            'lat': this.lat,
            'lng': this.lng,
            'location': this.location,
        };
        console.log(this.isPartner);
        this.isPartner ? this.updatePartner(partner) : this.createPartner(partner);
    };
    /**
     * Update existing partner details.
     *
     * @param partner - Partner Details
     */
    SettingsComponent.prototype.updatePartner = function (partner) {
        this.partnerService.updatePartnerDetails(partner, this.partner.id)
            .toPromise()
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Create new partner
     *
     * @param partner - Partner details
     */
    SettingsComponent.prototype.createPartner = function (partner) {
        console.log('create');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SettingsComponent.prototype, "searchElement", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_partners_partners_service__["a" /* PartnersService */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footer--dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"footer__logo\">\n                    <a href=\"#\" class=\"col-2\">\n                        <img src=\"/assets/images/icon/logo-white.png\" alt=\"Trudy\" />\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"footer__social\">\n                    <a href=\"#\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                    </a>\n                    <a href=\"#\">\n                        <i class=\"zmdi zmdi-instagram\"></i>\n                    </a>\n                    <a href=\"#\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                    </a>\n                    <a class=\"mr-0\" href=\"#\">\n                        <i class=\"zmdi zmdi-linkedin\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"footer__copyright\">© 2018 by uxcraft</div>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widgets/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/widgets/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HEADER DESKTOP-->\n<header class=\"header-desktop header-1 d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"section__content section__content--w1760\">\n            <div class=\"row header__content\">\n\n                <div class=\"col-md-1 logo-wrap\">\n                    <a  routerLink=\"/\" class=\"col-md-12\">\n                        <img src=\"assets/images/icon/logo-black.png\" alt=\"\" />\n                    </a>\n                </div>\n                <div class=\"col-md-9 ml-auto\">\n                    <nav class=\"nav-header col-md-9\">\n                        <ul class=\"list-unstyled list-inline\">\n                            <li class=\"list-inline-item has-mega\">\n                                <a href=\"#\">Services</a>\n                                <div class=\"mega-menu\">\n                                    <div class=\"row no-gutters\">\n                                        <div class=\"col-lg-6 mega-menu__col\">\n                                            <ul class=\"mega-menu__list list-unstyled\">\n\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M216.348,376h-176h-8l-8,96h32v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64\n                                                                  h32l-8-96H216.348z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M280.348,280l8,192h144l8-192H280.348z\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M224.348,368v-11.08L184.756,312h-32.408V0h-48v312H72.052l-39.704,45.048V368h-7.36l-9.336,112\n                                                                  h225.392l-9.336-112H224.348z M136.348,16v8h-16v-8H136.348z M120.348,40h16v272h-16V40z M48.348,363.096L79.268,328h98.264\n                                                                  l30.816,34.968V368h-160L48.348,363.096z M208.348,464v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56\n                                                                  h-16v56h-8v-56h-16v56H33.044l6.664-80h177.28l6.664,80H208.348z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M456.348,272v-56c-0.057-48.577-39.423-87.943-88-88h-16c-48.577,0.057-87.943,39.423-88,88v56h-8\n                                                                  v16h16.32l8,192H440.02l8-192h16.328v-16H456.348z M280.348,216c0.044-39.746,32.254-71.956,72-72h16\n                                                                  c39.746,0.044,71.956,32.254,72,72v56h-160V216z M424.676,464H296.02l-7.328-176h143.312L424.676,464z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M400.348,304h16v16h-16V304z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M400.348,328h16v16h-16V328z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M376.348,304h16v16h-16V304z\"/>\n                                                          </g>\n\n                                                          </svg>\n\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Cleaning</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M148,8H52v80h96V8z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M428,88V8H148v80H428z M188,32c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16\n                                                                  S179.163,32,188,32z\"/>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"244\" cy=\"256\" r=\"104\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M44,0v480h392V0H44z M420,80H156V16h264V80z M420,96v320H60V96H420z M140,16v64H60V16H140z M60,464\n                                                                  v-32h360v32H60z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M76,40h16v16H76V40z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M108,40h16v16h-16V40z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M188,72c13.255,0,24-10.745,24-24s-10.745-24-24-24s-24,10.745-24,24S174.745,72,188,72z M188,40\n                                                                  c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S183.582,40,188,40z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M228,40h144v16H228V40z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M388,40h16v16h-16V40z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M244,400c79.529,0,144-64.471,144-144s-64.471-144-144-144s-144,64.471-144,144\n                                                                  C100.093,335.491,164.509,399.907,244,400z M244,128c70.692,0,128,57.308,128,128s-57.308,128-128,128s-128-57.308-128-128\n                                                                  C116.084,185.342,173.342,128.084,244,128z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M244,368c61.856,0,112-50.144,112-112s-50.144-112-112-112s-112,50.144-112,112\n                                                                  C132.066,317.828,182.172,367.934,244,368z M244,160c53.019,0,96,42.981,96,96s-42.981,96-96,96s-96-42.981-96-96\n                                                                  C148.057,203.004,191.004,160.057,244,160z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M388,440h16v16h-16V440z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M356,440h16v16h-16V440z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M76,440h16v16H76V440z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M76,136h16v16H76V136z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M76,112h16v16H76V112z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M100,112h16v16h-16V112z\"/>\n                                                          </g>\n                                                          <g>\n                                                          </g>\n                                                          </svg>\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Laundry</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M376,199.872h-32h-32h-32h-32h-32h-32h-32v48h256v-48H376z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M72,279.872h336v144H72V279.872z\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M480,199.872h-8v-128H255.696L42.016,16.128l-4,15.488l154.288,40.256H8v128H0v64h32v200h416v-200\n                                                                  h32V199.872z M456,87.872v112h-8v-40h-16v-32h-16v-14.176l-98.976-25.824L456,87.872z M416,143.872v16h-16v-16H416z M24,87.872\n                                                                  h229.64L400,126.048v1.824h-16v32H32v40h-8V87.872z M16,247.872v-32h16v32H16z M432,447.872H48v-272h384V447.872z M464,247.872h-16\n                                                                  v-32h16V247.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M96,255.872c17.673,0,32-14.327,32-32s-14.327-32-32-32s-32,14.327-32,32S78.327,255.872,96,255.872\n                                                                  z M96,207.872c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S87.163,207.872,96,207.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M144,255.872h272v-64H144V255.872z M160,207.872h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8\n                                                                  h16v-8h16v8h16v-8h16v8h16v-8h16v32H160V207.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M64,431.872h352v-160H64V431.872z M80,287.872h320v128H80V287.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M104,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M136,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M168,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M200,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M232,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M264,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M296,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M328,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M360,311.872h16v16h-16V311.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M104,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M136,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M168,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M200,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M232,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M264,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M296,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M328,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M360,343.872h16v16h-16V343.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M104,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M136,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M168,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M200,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M232,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M264,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M296,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M328,375.872h16v16h-16V375.872z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M360,375.872h16v16h-16V375.872z\"/>\n                                                          </g>\n                                                          <g>\n                                                          </g>\n                                                          <g>\n                                                          </g>\n                                                          </svg>\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Electricians</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M176,404c0,35.346,28.654,64,64,64s64-28.654,64-64V284H176V404z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M352,92v16h32V76c0-8.837-7.163-16-16-16h-96v32H352z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M128,60h-16c-8.837,0-16,7.163-16,16v32h32V92h80V60H128z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M256,28c0-8.837-7.163-16-16-16c-8.837,0-16,7.163-16,16v32h32V28z\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M280,164v-64h64v16h48V76c0-13.255-10.745-24-24-24H264V28c0-13.255-10.745-24-24-24\n                                                                  c-13.255,0-24,10.745-24,24v24H112c-13.255,0-24,10.745-24,24v40h48v-16h64v64H0v56c0.044,39.746,32.254,71.956,72,72h96v112\n                                                                  c0,39.764,32.236,72,72,72s72-32.236,72-72V292h96c39.746-0.044,71.956-32.254,72-72v-56H280z M280,68h88c4.418,0,8,3.582,8,8v24\n                                                                  h-16V84h-80V68z M232,28c0-4.418,3.582-8,8-8s8,3.582,8,8v24h-16V28z M120,84v16h-16V76c0-4.418,3.582-8,8-8h88v16H120z M216,100\n                                                                  V68h48v96h-48V100z M296,404c0,30.928-25.072,56-56,56s-56-25.072-56-56V292h112V404z M464,220c-0.04,30.911-25.089,55.96-56,56H72\n                                                                  c-30.911-0.04-55.96-25.089-56-56v-40h448V220z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M360,132h16v16h-16V132z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M322.749,125.91l11.319-11.319l11.314,11.314l-11.319,11.319L322.749,125.91z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M390.627,125.9l11.314-11.314l11.319,11.319l-11.314,11.314L390.627,125.9z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M104,132h16v16h-16V132z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M134.623,125.937l11.314-11.314l11.319,11.319l-11.314,11.314L134.623,125.937z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M66.745,125.947l11.319-11.319l11.314,11.314L78.058,137.26L66.745,125.947z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M432,196h16v16h-16V196z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M432,220h16v16h-16V220z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M408,196h16v16h-16V196z\"/>\n                                                          </g>\n                                                          <g>\n                                                          </g>\n                                                          <g>\n                                                          </g>\n                                                          </svg>\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Plumbers</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-lg-6 mega-menu__col\">\n                                            <ul class=\"mega-menu__list list-unstyled\">\n\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M8,200h16h176h80h176h16v-32H8V200z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M48,440h384v32H48V440z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M304,24c0-8.837-7.163-16-16-16h-96c-8.837,0-16,7.163-16,16v16h128V24z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M200,200h80v112h-80V200z\"/>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"240\" cy=\"376\" r=\"40\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M376,32h-64v-8c0-13.255-10.745-24-24-24h-96c-13.255,0-24,10.745-24,24v8h-64\n                                                                  C46.59,32.066,0.066,78.59,0,136v72h16v216c0,13.255,10.745,24,24,24l0,0v32h400v-32c13.255,0,24-10.745,24-24l0,0V208h16v-72\n                                                                  C479.934,78.59,433.41,32.066,376,32z M184,24c0-4.418,3.582-8,8-8h96c4.418,0,8,3.582,8,8v8H184V24z M424,464H56v-16h368V464z\n                                                                   M448,424c0,4.418-3.582,8-8,8H40c-4.418,0-8-3.582-8-8V208h160v112h96V208h160V424z M208,208h64v96h-64V208z M464,192H16v-16h448\n                                                                  V192z M16,160v-24c0.057-48.577,39.423-87.943,88-88h272c48.577,0.057,87.943,39.423,88,88v24H16z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M32,136h16c0.035-30.913,25.087-55.965,56-56V64C64.254,64.044,32.044,96.254,32,136z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M240,328c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                                                  C287.974,349.501,266.499,328.026,240,328z M240,408c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                                                  S257.673,408,240,408z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M224,224h32v16h-32V224z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M224,256h32v16h-32V256z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M392,224h16v16h-16V224z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M416,224h16v16h-16V224z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M416,248h16v16h-16V248z\"/>\n                                                          </g>\n                                                          </svg>\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Mechanics</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"request.html\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"80\" r=\"40\"/>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"240\" r=\"40\"/>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"400\" r=\"40\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M139.996,144h24v32h-24V144z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M139.996,304h24v32h-24V304z\"/>\n                                                              <circle style=\"fill:#78B9EB;\" cx=\"395.996\" cy=\"264\" r=\"24\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M123.996,32c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                                                  C171.97,53.501,150.495,32.026,123.996,32z M123.996,112c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                                                  S141.669,112,123.996,112z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M99.996,80h16v16h-16V80z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M131.996,80h16v16h-16V80z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M115.996,56h16v16h-16V56z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M123.996,192c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                                                  C171.97,213.501,150.495,192.026,123.996,192z M123.996,272c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                                                  S141.669,272,123.996,272z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M99.996,240h16v16h-16V240z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M131.996,240h16v16h-16V240z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M115.996,216h16v16h-16V216z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M123.996,352c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                                                  C171.97,373.501,150.495,352.026,123.996,352z M123.996,432c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                                                  S141.669,432,123.996,432z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M99.996,400h16v16h-16V400z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M131.996,400h16v16h-16V400z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M115.996,376h16v16h-16V376z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M75.996,184h96v-48h-96V184z M155.996,168h-8v-16h8V168z M91.996,152h40v16h-40V152z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M75.996,344h96v-48h-96V344z M155.996,328h-8v-16h8V328z M91.996,312h40v16h-40V312z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M403.996,233.136V96c0-22.091-17.909-40-40-40s-40,17.909-40,40v272c0,13.255-10.745,24-24,24h-16\n                                                                  c-13.255,0-24-10.745-24-24V96c-0.024-19.001-13.389-35.373-32-39.2V32h-32V0h-144v480h144V96h32V73.472\n                                                                  c9.555,3.378,15.958,12.394,16,22.528v272c0.026,22.08,17.92,39.974,40,40h16c22.08-0.026,39.974-17.92,40-40V96\n                                                                  c0-13.255,10.745-24,24-24s24,10.745,24,24v137.136c-17.112,4.418-27.402,21.872-22.984,38.984s21.872,27.402,38.984,22.984\n                                                                  s27.402-21.872,22.984-38.984C424.07,244.848,415.268,236.046,403.996,233.136z M179.996,464h-112V16h112V464z M211.996,80h-16V48\n                                                                  h16V80z M395.996,280c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S404.833,280,395.996,280z\"/>\n                                                          </g>\n                                                          </svg>\n\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Repairs</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a routerLink=\"/requests\">\n                                                        <span class=\"col-2 float-left\">\n                                                          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                                               viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                                          <g>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M40,136h48v32H40V136z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M120,136h32v32h-32V136z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M32,312h32v32H32V312z\"/>\n                                                              <path style=\"fill:#78B9EB;\" d=\"M416,312h32v32h-32V312z\"/>\n                                                          </g>\n                                                          <g>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M480,160H160v-32h-48v32H96v-32H32v32H0v160h24v32h48v-32h336v32h48v-32h24V160z M128,144h16v16h-16\n                                                                  V144z M48,144h32v16H48V144z M56,336H40v-16h16V336z M440,336h-16v-16h16V336z M464,304H16V176h448V304z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M112,288h64v-96h-64V288z M128,272v-24h32v24H128z M160,208v24h-32v-24H160z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M256,192h-64v96h64V192z M240,208v24h-32v-24H240z M208,272v-24h32v24H208z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M368,192h-64v96h64V192z M352,208v24h-32v-24H352z M320,272v-24h32v24H320z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M448,192h-64v96h64V192z M432,208v24h-32v-24H432z M400,272v-24h32v24H400z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M272,208h16v16h-16V208z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M272,256h16v16h-16V256z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M32,200h48v16H32V200z\"/>\n                                                              <path style=\"fill:#1E81CE;\" d=\"M32,240h48v16H32V240z\"/>\n                                                          </g>\n                                                          </svg>\n                                                      </span>\n                                                        <span class=\"col-10 float-left\">\n                                                          <b href=\"\">Errands/Deliveries</b>\n                                                      </span>\n                                                    </a>\n                                                </li>\n                                                <li class=\"alle\">\n                                                    <a href=\"login.html\">\n                                                        <span class=\"col-10 float-left\">\n                                                          <b>View All Services</b>\n                                                        </span>\n                                                        <span class=\"icon-arrow-right2 flo\"></span>\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"!authenticated\" class=\"list-inline-item has-dropdown\">\n                                <a href=\"contact.html\">How it works</a>\n                            </li>\n                            <li *ngIf=\"authenticated\" class=\"list-inline-item has-dropdown\">\n                                <a routerLink=\"/profile/{{currentUser.id}}\">My Account</a>\n                            </li>\n                            <li *ngIf=\"authenticated\" class=\"list-inline-item has-dropdown\">\n                                <a routerLink=\"/settings\">Settings</a>\n                            </li>\n                            <li class=\"list-inline-item has-dropdown\">\n                                <a routerLink=\"/requests\">Request Pro</a>\n                            </li>\n\n                            <li *ngIf=\"!authenticated\" class=\"list-inline-item has-dropdown\">\n                                <a class=\"reqform\" routerLink=\"/login\">Make Money</a>\n                            </li>\n\n                            <li *ngIf=\"!authenticated\" class=\"list-inline-item has-dropdown\">\n                                <a routerLink=\"/login\">Login</a>\n                            </li>\n                        </ul>\n                    </nav>\n\n                    <div *ngIf=\"authenticated\" class=\"search-btn-wrap col-md-3 loggedin\">\n                        <div class=\"col-md-4\"> <img src=\"assets/images/pro.jpg\" class=\"rounded-circle\" width=\"\"></div>\n                        <h6 (click)=\"logout()\">{{currentUser.name}} <a routerLink=\"/login\" class=\"\">Sign Out</a></h6>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</header>\n<!-- SEARCH MODAL-->\n<div class=\"modal fade\" id=\"searchModal\" role=\"dialog\">\n    <button class=\"close\" type=\"button\" data-dismiss=\"modal\">\n      <i class=\"zmdi zmdi-close\"></i>\n  </button>\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mr-2\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle></svg>\n                    <strong>Album</strong>\n                </a>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- END SEARCH MODAL-->\n<!-- END HEADER DESKTOP-->\n\n<!-- HEADER MOBILE-->\n<header class=\"header-mobile d-block d-lg-none\">\n    <div class=\"header-mobile__bar\">\n        <div class=\"container-fluid clearfix\">\n            <a class=\"logo\" href=\"index.html\">\n                <img src=\"assets/images/icon/logo-black.png\" alt=\"Umber\" />\n            </a>\n            <button class=\"hamburger hamburger--slider float-right\" type=\"button\">\n              <span class=\"hamburger-box\">\n                  <span class=\"hamburger-inner\"></span>\n              </span>\n          </button>\n        </div>\n    </div>\n    <nav class=\"navbar-mobile\">\n        <div class=\"container-fluid\">\n            <ul class=\"navbar-mobile__list list-unstyled\">\n                <li class=\"has-dropdown\">\n                    <a href=\"#\">Services</a>\n                    <ul class=\"navbar-mobile__dropdown list-unstyled\">\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M216.348,376h-176h-8l-8,96h32v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64h24v-64v64\n                                          h32l-8-96H216.348z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M280.348,280l8,192h144l8-192H280.348z\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M224.348,368v-11.08L184.756,312h-32.408V0h-48v312H72.052l-39.704,45.048V368h-7.36l-9.336,112\n                                          h225.392l-9.336-112H224.348z M136.348,16v8h-16v-8H136.348z M120.348,40h16v272h-16V40z M48.348,363.096L79.268,328h98.264\n                                          l30.816,34.968V368h-160L48.348,363.096z M208.348,464v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56h-16v56h-8v-56\n                                          h-16v56h-8v-56h-16v56H33.044l6.664-80h177.28l6.664,80H208.348z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M456.348,272v-56c-0.057-48.577-39.423-87.943-88-88h-16c-48.577,0.057-87.943,39.423-88,88v56h-8\n                                          v16h16.32l8,192H440.02l8-192h16.328v-16H456.348z M280.348,216c0.044-39.746,32.254-71.956,72-72h16\n                                          c39.746,0.044,71.956,32.254,72,72v56h-160V216z M424.676,464H296.02l-7.328-176h143.312L424.676,464z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M400.348,304h16v16h-16V304z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M400.348,328h16v16h-16V328z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M376.348,304h16v16h-16V304z\"/>\n                                  </g>\n\n                                  </svg>\n\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Cleaning</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M148,8H52v80h96V8z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M428,88V8H148v80H428z M188,32c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16\n                                          S179.163,32,188,32z\"/>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"244\" cy=\"256\" r=\"104\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M44,0v480h392V0H44z M420,80H156V16h264V80z M420,96v320H60V96H420z M140,16v64H60V16H140z M60,464\n                                          v-32h360v32H60z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M76,40h16v16H76V40z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M108,40h16v16h-16V40z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M188,72c13.255,0,24-10.745,24-24s-10.745-24-24-24s-24,10.745-24,24S174.745,72,188,72z M188,40\n                                          c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S183.582,40,188,40z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M228,40h144v16H228V40z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M388,40h16v16h-16V40z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M244,400c79.529,0,144-64.471,144-144s-64.471-144-144-144s-144,64.471-144,144\n                                          C100.093,335.491,164.509,399.907,244,400z M244,128c70.692,0,128,57.308,128,128s-57.308,128-128,128s-128-57.308-128-128\n                                          C116.084,185.342,173.342,128.084,244,128z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M244,368c61.856,0,112-50.144,112-112s-50.144-112-112-112s-112,50.144-112,112\n                                          C132.066,317.828,182.172,367.934,244,368z M244,160c53.019,0,96,42.981,96,96s-42.981,96-96,96s-96-42.981-96-96\n                                          C148.057,203.004,191.004,160.057,244,160z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M388,440h16v16h-16V440z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M356,440h16v16h-16V440z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M76,440h16v16H76V440z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M76,136h16v16H76V136z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M76,112h16v16H76V112z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M100,112h16v16h-16V112z\"/>\n                                  </g>\n                                  <g>\n                                  </g>\n                                  </svg>\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Laundry</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M376,199.872h-32h-32h-32h-32h-32h-32h-32v48h256v-48H376z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M72,279.872h336v144H72V279.872z\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M480,199.872h-8v-128H255.696L42.016,16.128l-4,15.488l154.288,40.256H8v128H0v64h32v200h416v-200\n                                          h32V199.872z M456,87.872v112h-8v-40h-16v-32h-16v-14.176l-98.976-25.824L456,87.872z M416,143.872v16h-16v-16H416z M24,87.872\n                                          h229.64L400,126.048v1.824h-16v32H32v40h-8V87.872z M16,247.872v-32h16v32H16z M432,447.872H48v-272h384V447.872z M464,247.872h-16\n                                          v-32h16V247.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M96,255.872c17.673,0,32-14.327,32-32s-14.327-32-32-32s-32,14.327-32,32S78.327,255.872,96,255.872\n                                          z M96,207.872c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S87.163,207.872,96,207.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M144,255.872h272v-64H144V255.872z M160,207.872h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8\n                                          h16v-8h16v8h16v-8h16v8h16v-8h16v32H160V207.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M64,431.872h352v-160H64V431.872z M80,287.872h320v128H80V287.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M104,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M136,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M168,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M200,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M232,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M264,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M296,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M328,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M360,311.872h16v16h-16V311.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M104,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M136,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M168,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M200,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M232,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M264,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M296,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M328,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M360,343.872h16v16h-16V343.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M104,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M136,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M168,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M200,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M232,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M264,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M296,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M328,375.872h16v16h-16V375.872z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M360,375.872h16v16h-16V375.872z\"/>\n                                  </g>\n                                  <g>\n                                  </g>\n                                  <g>\n                                  </g>\n                                  </svg>\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Electricians</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M176,404c0,35.346,28.654,64,64,64s64-28.654,64-64V284H176V404z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M352,92v16h32V76c0-8.837-7.163-16-16-16h-96v32H352z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M128,60h-16c-8.837,0-16,7.163-16,16v32h32V92h80V60H128z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M256,28c0-8.837-7.163-16-16-16c-8.837,0-16,7.163-16,16v32h32V28z\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M280,164v-64h64v16h48V76c0-13.255-10.745-24-24-24H264V28c0-13.255-10.745-24-24-24\n                                          c-13.255,0-24,10.745-24,24v24H112c-13.255,0-24,10.745-24,24v40h48v-16h64v64H0v56c0.044,39.746,32.254,71.956,72,72h96v112\n                                          c0,39.764,32.236,72,72,72s72-32.236,72-72V292h96c39.746-0.044,71.956-32.254,72-72v-56H280z M280,68h88c4.418,0,8,3.582,8,8v24\n                                          h-16V84h-80V68z M232,28c0-4.418,3.582-8,8-8s8,3.582,8,8v24h-16V28z M120,84v16h-16V76c0-4.418,3.582-8,8-8h88v16H120z M216,100\n                                          V68h48v96h-48V100z M296,404c0,30.928-25.072,56-56,56s-56-25.072-56-56V292h112V404z M464,220c-0.04,30.911-25.089,55.96-56,56H72\n                                          c-30.911-0.04-55.96-25.089-56-56v-40h448V220z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M360,132h16v16h-16V132z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M322.749,125.91l11.319-11.319l11.314,11.314l-11.319,11.319L322.749,125.91z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M390.627,125.9l11.314-11.314l11.319,11.319l-11.314,11.314L390.627,125.9z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M104,132h16v16h-16V132z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M134.623,125.937l11.314-11.314l11.319,11.319l-11.314,11.314L134.623,125.937z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M66.745,125.947l11.319-11.319l11.314,11.314L78.058,137.26L66.745,125.947z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M432,196h16v16h-16V196z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M432,220h16v16h-16V220z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M408,196h16v16h-16V196z\"/>\n                                  </g>\n                                  <g>\n                                  </g>\n                                  <g>\n                                  </g>\n                                  </svg>\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Plumbers</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M8,200h16h176h80h176h16v-32H8V200z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M48,440h384v32H48V440z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M304,24c0-8.837-7.163-16-16-16h-96c-8.837,0-16,7.163-16,16v16h128V24z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M200,200h80v112h-80V200z\"/>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"240\" cy=\"376\" r=\"40\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M376,32h-64v-8c0-13.255-10.745-24-24-24h-96c-13.255,0-24,10.745-24,24v8h-64\n                                          C46.59,32.066,0.066,78.59,0,136v72h16v216c0,13.255,10.745,24,24,24l0,0v32h400v-32c13.255,0,24-10.745,24-24l0,0V208h16v-72\n                                          C479.934,78.59,433.41,32.066,376,32z M184,24c0-4.418,3.582-8,8-8h96c4.418,0,8,3.582,8,8v8H184V24z M424,464H56v-16h368V464z\n                                           M448,424c0,4.418-3.582,8-8,8H40c-4.418,0-8-3.582-8-8V208h160v112h96V208h160V424z M208,208h64v96h-64V208z M464,192H16v-16h448\n                                          V192z M16,160v-24c0.057-48.577,39.423-87.943,88-88h272c48.577,0.057,87.943,39.423,88,88v24H16z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M32,136h16c0.035-30.913,25.087-55.965,56-56V64C64.254,64.044,32.044,96.254,32,136z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M240,328c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                          C287.974,349.501,266.499,328.026,240,328z M240,408c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                          S257.673,408,240,408z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M224,224h32v16h-32V224z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M224,256h32v16h-32V256z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M392,224h16v16h-16V224z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M416,224h16v16h-16V224z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M416,248h16v16h-16V248z\"/>\n                                  </g>\n                                  </svg>\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Mechanics</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"80\" r=\"40\"/>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"240\" r=\"40\"/>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"123.996\" cy=\"400\" r=\"40\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M139.996,144h24v32h-24V144z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M139.996,304h24v32h-24V304z\"/>\n                                      <circle style=\"fill:#78B9EB;\" cx=\"395.996\" cy=\"264\" r=\"24\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M123.996,32c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                          C171.97,53.501,150.495,32.026,123.996,32z M123.996,112c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                          S141.669,112,123.996,112z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M99.996,80h16v16h-16V80z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M131.996,80h16v16h-16V80z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M115.996,56h16v16h-16V56z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M123.996,192c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                          C171.97,213.501,150.495,192.026,123.996,192z M123.996,272c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                          S141.669,272,123.996,272z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M99.996,240h16v16h-16V240z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M131.996,240h16v16h-16V240z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M115.996,216h16v16h-16V216z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M123.996,352c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48\n                                          C171.97,373.501,150.495,352.026,123.996,352z M123.996,432c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32\n                                          S141.669,432,123.996,432z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M99.996,400h16v16h-16V400z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M131.996,400h16v16h-16V400z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M115.996,376h16v16h-16V376z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M75.996,184h96v-48h-96V184z M155.996,168h-8v-16h8V168z M91.996,152h40v16h-40V152z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M75.996,344h96v-48h-96V344z M155.996,328h-8v-16h8V328z M91.996,312h40v16h-40V312z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M403.996,233.136V96c0-22.091-17.909-40-40-40s-40,17.909-40,40v272c0,13.255-10.745,24-24,24h-16\n                                          c-13.255,0-24-10.745-24-24V96c-0.024-19.001-13.389-35.373-32-39.2V32h-32V0h-144v480h144V96h32V73.472\n                                          c9.555,3.378,15.958,12.394,16,22.528v272c0.026,22.08,17.92,39.974,40,40h16c22.08-0.026,39.974-17.92,40-40V96\n                                          c0-13.255,10.745-24,24-24s24,10.745,24,24v137.136c-17.112,4.418-27.402,21.872-22.984,38.984s21.872,27.402,38.984,22.984\n                                          s27.402-21.872,22.984-38.984C424.07,244.848,415.268,236.046,403.996,233.136z M179.996,464h-112V16h112V464z M211.996,80h-16V48\n                                          h16V80z M395.996,280c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S404.833,280,395.996,280z\"/>\n                                  </g>\n                                  </svg>\n\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Repairs</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/requests\">\n                                <span class=\"col-2 float-left\">\n                                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                       viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\">\n                                  <g>\n                                      <path style=\"fill:#78B9EB;\" d=\"M40,136h48v32H40V136z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M120,136h32v32h-32V136z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M32,312h32v32H32V312z\"/>\n                                      <path style=\"fill:#78B9EB;\" d=\"M416,312h32v32h-32V312z\"/>\n                                  </g>\n                                  <g>\n                                      <path style=\"fill:#1E81CE;\" d=\"M480,160H160v-32h-48v32H96v-32H32v32H0v160h24v32h48v-32h336v32h48v-32h24V160z M128,144h16v16h-16\n                                          V144z M48,144h32v16H48V144z M56,336H40v-16h16V336z M440,336h-16v-16h16V336z M464,304H16V176h448V304z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M112,288h64v-96h-64V288z M128,272v-24h32v24H128z M160,208v24h-32v-24H160z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M256,192h-64v96h64V192z M240,208v24h-32v-24H240z M208,272v-24h32v24H208z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M368,192h-64v96h64V192z M352,208v24h-32v-24H352z M320,272v-24h32v24H320z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M448,192h-64v96h64V192z M432,208v24h-32v-24H432z M400,272v-24h32v24H400z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M272,208h16v16h-16V208z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M272,256h16v16h-16V256z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M32,200h48v16H32V200z\"/>\n                                      <path style=\"fill:#1E81CE;\" d=\"M32,240h48v16H32V240z\"/>\n                                  </g>\n                                  </svg>\n                              </span>\n                                <span class=\"col-10 float-left\">\n                                  <b href=\"\">Errands/Deliveries</b>\n                                  <p>Sed ut perspiciatis unde </p>\n                              </span>\n                            </a>\n                        </li>\n                        <li class=\"alle\">\n                            <a href=\"login.html\">\n                                <span class=\"col-10 float-left\">\n                                  <b>View All Services</b>\n                                  <p class=\"text-white\">Sed ut perspiciatis unde omnis</p>\n                              </span>\n                                <span class=\"icon-arrow-right2 flo\"></span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n\n                <li class=\"\">\n                    <a href=\"about.html\">About Us</a>\n                </li>\n                <li class=\"\">\n                    <a href=\"#\">How it works</a>\n                </li>\n                <li class=\"\">\n                    <a href=\"contact.html\">Contact</a>\n                </li>\n                <li class=\"proff\">\n                    <a href=\"login.html\">\n                      Login\n                  </a>\n                </li>\n                <li>\n                    <a routerLink=\"/requests\" class=\"reqform\">Request Pro</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>\n\n<!-- END HEADER MOBILE-->\n\n\n\n<!-- END HEADER MOBILE-->\n<!-- END HEADER MOBILE-->\n"

/***/ }),

/***/ "./src/app/components/widgets/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.authenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('user');
        this.currentUser = JSON.parse(user);
        this.authenticated = (!user) ? false : true;
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/widgets/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBaseUrl;
    }
    /**
     * Login a new user
     * @param userData - User data
     */
    AuthService.prototype.login = function (userData) {
        return this.http
            .post(this.apiBaseUrl + "/auth/login", userData)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Register a new user
     * @param userData - register a new user
     *
     * @return {Object}
     */
    AuthService.prototype.register = function (userData) {
        return this.http
            .post(this.apiBaseUrl + "/auth/register", userData)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Handle response from server.
     *
     * @param {Response} res - response object
     *
     * @returns {object} - response object
     *
     */
    AuthService.prototype.handleResponse = function (res) {
        var response = res;
        return response || {};
    };
    /**
     * Handle errors from server
     *
     * @param {Response} error http error
     *
     * @return {Observable} ErrorObservable
     */
    AuthService.prototype.handleError = function (error) {
        var message = error.error;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/categories/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBaseUrl;
    }
    /**
     * Get all categories.
     *
     * @return {Observable} - Available categories.
     */
    CategoriesService.prototype.getAllCategories = function () {
        return this.http.get(this.apiBaseUrl + "/categories")
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
   * Handle response from server.
   *
   * @param {Response} res - response object
   *
   * @returns {object} - response object
   *
   */
    CategoriesService.prototype.handleResponse = function (res) {
        var response = res;
        return response || {};
    };
    /**
     * Handle errors from server
     *
     * @param {Response} error http error
     *
     * @return {Observable} ErrorObservable
     */
    CategoriesService.prototype.handleError = function (error) {
        var message = error.error;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/partners/partners.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PartnersService = /** @class */ (function () {
    function PartnersService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBaseUrl;
        this.token = localStorage.getItem('token');
    }
    /**
     * Get all partners
     *
     * @returns {Observable} - Return list of users
     */
    PartnersService.prototype.getAllPartners = function () {
        return this.http.get(this.apiBaseUrl + "/partners")
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Get partner details
     *
     * @param {integer} id - User id
     *
     * @returns {Observable} - Partner details
     */
    PartnersService.prototype.getPatnerDetails = function (id) {
        return this.http.get(this.apiBaseUrl + "/partners/" + id)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Get filtered partners
     * @param filter - filter params
     * @returns {Observable} - List of filtered partners
     */
    PartnersService.prototype.getFilteredPartners = function (filter) {
        return this.http.post(this.apiBaseUrl + "/partners/filter", filter)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Update partner detials
     *
     * @param partner - partner details.
     * @param partnerId - Partner id.
     *
     * @returns {Observable}
     */
    PartnersService.prototype.updatePartnerDetails = function (partner, partnerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('token', this.token);
        return this.http.put(this.apiBaseUrl + "/partners/" + partnerId, partner, { headers: headers })
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Handle response from server.
     *
     * @param {Response} res - response object
     *
     * @returns {object} - response object
     *
     */
    PartnersService.prototype.handleResponse = function (res) {
        var response = res;
        return response || {};
    };
    /**
     * Handle errors from server
     *
     * @param {Response} error http error
     *
     * @return {Observable} ErrorObservable
     */
    PartnersService.prototype.handleError = function (error) {
        var message = error.error;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    PartnersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PartnersService);
    return PartnersService;
}());



/***/ }),

/***/ "./src/app/services/requests/requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsService = /** @class */ (function () {
    function RequestsService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBaseUrl;
    }
    /**
     * Request pro
     */
    RequestsService.prototype.requestPro = function (request) {
        return this.http.post(this.apiBaseUrl + "/requests", request)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Get All Requests
     */
    RequestsService.prototype.getAllRequests = function () {
        return this.http.get(this.apiBaseUrl + "/requests")
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Handle response from server.
     *
     * @param {Response} res - response object
     *
     * @returns {object} - response object
     *
     */
    RequestsService.prototype.handleResponse = function (res) {
        var response = res;
        return response || {};
    };
    /**
     * Handle errors from server
     *
     * @param {Response} error http error
     *
     * @return {Observable} ErrorObservable
     */
    RequestsService.prototype.handleError = function (error) {
        var message = error.error;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    RequestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./src/app/services/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBaseUrl;
    }
    /**
     * Get all users
     *
     * @returns {Observable} - Return list of users
     */
    UsersService.prototype.getAllUsers = function () {
        return this.http.get(this.apiBaseUrl + "/users")
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Get user details.
     *
     * @param id
     *
     * @return { Observable } - user details.
     */
    UsersService.prototype.getUserDetails = function (id) {
        return this.http.get(this.apiBaseUrl + "/users/" + id)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    /**
     * Handle response from server.
     *
     * @param {Response} res - response object
     *
     * @returns {object} - response object
     *
     */
    UsersService.prototype.handleResponse = function (res) {
        var response = res;
        return response || {};
    };
    /**
     * Handle errors from server
     *
     * @param {Response} error http error
     *
     * @return {Observable} ErrorObservable
     */
    UsersService.prototype.handleError = function (error) {
        var message = error.error;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/env.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:9000/api',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./src/env.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__env__["a"]; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.




/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map