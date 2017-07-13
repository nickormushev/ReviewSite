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

/***/ "../../../../../src/app/Code/code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#LoginTable {\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n    margin-top: 6%;\r\n    width: 1000px;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    background-color: #D04E33;\r\n\r\n    \r\n}\r\n#LoginTable tr td {\r\n    width: 600px;\r\n    padding-bottom: 3%;\r\n}\r\ni {\r\n    vertical-align: middle;\r\n}\r\n.LoginInfo{\r\n    height:30px;\r\n    width:250px;\r\n}\r\n    button:focus{\r\n    outline: 0;\r\n}\r\n\r\n    label {\r\n    font-size: 20px;\r\n    padding-right: 2%;\r\n    \r\n}\r\n    #SubmitSign{\r\n        text-align: center;\r\n        font-size: 20px;\r\n}\r\n.Text {\r\n    float: left;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    margin-left: 5%;\r\n}\r\nheader {\r\n    margin-top: 5%;\r\n}\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 30%;\r\n    text-decoration: none;\r\n    border:none;\r\n    border-radius: 0px;\r\n    \r\n}\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n#Delete:hover {\r\n    background: #ba3306;\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Code/code.component.html":
/***/ (function(module, exports) {

module.exports = "<table id=\"LoginTable\" align=\"center\">\n  <tr>\n    <td>\n      <div class=\"Text\">\n        <h2>Forgotten password?</h2>\n        <br> Please enter your email address in the field to the right. Afterwards you will recieve a message containing a\n        code. Then enter that code in the other field and you will be redirected.\n      </div>\n    </td>\n    <td>\n      <header>\n        <tr>\n          <td ><i class=\"fa fa-users fa-5x\" aria-hidden=\"true\"></i></td>\n        </tr>\n      </header>\n      <main>\n        <form (ngSubmit)=\"onSubmit(fMail)\" #fMail=\"ngForm\">\n\n          <tr>\n            <td>\n              <label><i class=\"fa fa-envelope-o fa-lg\" aria-hidden=\"true\"></i></label>\n              <input type=\"email\" name=\"EMail\" class=\"LoginInfo\" placeholder = \"Email\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\"><input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Send Email\">\n              <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\"></td>\n          </tr>\n        </form>\n        <form (ngSubmit)=\"SubmitCode(f)\" #f=\"ngForm\">\n\n          <tr>\n            <td><label><i class=\"fa fa-unlock-alt fa-2x\" aria-hidden=\"true\"></i></label>\n              <input type=\"Text\"  name=\"Code\" placeholder=\"Code\" class=\"LoginInfo\" ngModel required></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\"><input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Send Code\">\n              <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\"></td>\n          </tr>\n        </form>\n      </main>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/Code/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_user_model__ = __webpack_require__("../../../../../src/app/_Model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CodeComponent = (function () {
    function CodeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.user = new __WEBPACK_IMPORTED_MODULE_0__Model_user_model__["a" /* User */]();
    }
    CodeComponent.prototype.ngOnInit = function () {
    };
    CodeComponent.prototype.onSubmit = function (fMail) {
        this.userService.mail(fMail.value.EMail).subscribe();
    };
    CodeComponent.prototype.SubmitCode = function (f) {
        var _this = this;
        this.userService.checkCode(f.value).takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.user = result;
            _this.user.ChangePassword = true;
            localStorage.setItem("currentUser", JSON.stringify(_this.user));
            _this.router.navigate(["/password"]);
        });
    };
    CodeComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return CodeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CodeComponent.prototype, "f", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])("fMail"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _b || Object)
], CodeComponent.prototype, "fMail", void 0);
CodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* Component */])({
        selector: "app-code",
        template: __webpack_require__("../../../../../src/app/Code/code.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Code/code.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CodeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=code.component.js.map

/***/ }),

/***/ "../../../../../src/app/Config/Ip.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerIp; });
var ServerIp = "https://reviews-app-niki.herokuapp.com";
// 
//# sourceMappingURL=Ip.config.js.map

/***/ }),

/***/ "../../../../../src/app/Login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#LoginTable {\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n    margin-top: 6%;\r\n    width: 600px;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    background-color: #D04E33;\r\n    \r\n}\r\n#LoginTable td {\r\n    width: 600px;\r\n    padding-bottom: 3%;\r\n}\r\ni {\r\n    vertical-align: middle;\r\n    \r\n}\r\n.LoginInfo{\r\n    height:30px;\r\n    width:250px;\r\n}\r\n    button:focus{\r\n    outline: 0;\r\n}\r\n\r\n    label {\r\n    font-size: 20px;\r\n    padding-right: 2%;\r\n    \r\n}\r\n\r\n    #SubmitSign{\r\n        text-align: center;\r\n        font-size: 20px;\r\n}\r\n.ForgottenPass{\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.ForgottenPass:focus{\r\n    outline: 0;\r\n}\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 30%;\r\n    text-decoration: none;\r\n    border:none;\r\n}\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n#Delete:hover {\r\n  background: #ba3306;\r\n  text-decoration: none;\r\n}\r\n@media screen and (max-width: 620px) {\r\n #LoginTable {\r\n     width: 100%;\r\n     margin-top: 10%;\r\n }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n  <table id=\"LoginTable\" align=\"center\">\n    <header>\n      <tr>\n        <td>\n          <h2>Please enter your profile's information</h2>\n        </td>\n      </tr>\n      <tr>\n        <td><i class=\"fa fa-users fa-5x\" aria-hidden=\"true\"></i></td>\n      </tr>\n    </header>\n    <main>\n      <tr>\n        <td><label for=\"Username\"><i class=\"fa fa-user fa-2x \" aria-hidden=\"true\"></i></label>\n          <input type=\"Text\" id=\"Username\" name=\"Username\" placeholder=\"Username\" class=\"LoginInfo\" ngModel required></td>\n      </tr>\n      <tr>\n        <td><label for=\"Password\"><i class=\"fa fa-unlock-alt fa-2x\" aria-hidden=\"true\"></i></label>\n          <input type=\"Password\" id=\"Password\" name=\"Password\" placeholder=\"Password\" class=\"LoginInfo\" ngModel required></td>\n      </tr>\n    </main>\n    <footer>\n      <tr>\n        <td colspan=\"2\"><input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Login\">\n          <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\"></td>\n      </tr>\n        <tr>\n        <td>\n          <a class=\"ForgottenPass\" routerLink = \"/code\">Forgot your password?</a>\n        </td>\n      </tr>\n    </footer>\n  </table>\n\n</form>\n<div [hidden]=\"WrongLoginInfo\" id=\"SubmitSign\"> You have entered a wrong username or password! </div>"

/***/ }),

/***/ "../../../../../src/app/Login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
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
    function LoginComponent(authenticationService, router, route) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.WrongLoginInfo = true;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.Logout();
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.loading = true;
        this.authenticationService.Login(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) { _this.router.navigate([_this.returnUrl]); }, function (error) {
            var body = error._body;
            if (body === "Username or password is incorrect") {
                _this.WrongLoginInfo = false;
                setTimeout(function () { _this.WrongLoginInfo = true; }, 4000);
                return;
            }
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "f", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-login",
        template: __webpack_require__("../../../../../src/app/Login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Services_auth_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_auth_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Navigation/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SearchInput{\r\n    width: 70%;\r\n    height: 40%;\r\n    padding-top: 4px;\r\n    float: right;\r\n}\r\n.SearchButton {\r\n    background: none;\r\n    border:none;\r\n    height: 50%;\r\n    width: 50px; \r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n\r\n.DropDownUlDisabled{\r\n    display: none;\r\n}\r\n.DropDownUlEnabled li {\r\n    display: block;  \r\n    text-align: center;  \r\n    margin-top: 3%;\r\n    padding: 2% 0px;\r\n    \r\n}\r\n.DropDownUlEnabled {\r\n    display: block;\r\n}\r\n.DropDownUlEnabled li:hover {\r\n    background-color: #353C3E;\r\n} \r\n\r\n#SearchForm{\r\n    padding-top: 1%;\r\n    margin-top: .5%;\r\n    margin-right: 10%;\r\n    right: 0;\r\n    float:right;\r\n    width:280px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    border: 1px solid #EEEEEE;\r\n    background-color: #1C2021;\r\n    height: 50px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n#Bars {\r\n    display: none;\r\n}\r\n.navHeader{\r\n    cursor:initial;\r\n}\r\nnav #MainUl .FloatRight{\r\n    margin-left:10%;\r\n}\r\nnav {\r\n    width: 100%;\r\n    background-color: #1C2021;\r\n    top:0px;\r\n    position: fixed;\r\n    z-index:101;\r\n\r\n}\r\n\r\n.fa-search {\r\ncolor: #EEEEEE;\r\n}\r\n.fa-times {\r\ncolor: #EEEEEE;    \r\n}\r\nul {\r\n    margin:0px;\r\n    padding: 0px;\r\n}\r\nli.navHeader {\r\n    background-color: #D04E33;\r\n    padding: 11px 75px;\r\n    text-align: center;\r\n}\r\nli.Home {\r\n    border: none;\r\n}\r\nli {\r\n    display: inline-block;\r\n    color: #EEEEEE;\r\n    font-size: 25px;    \r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n}\r\nli:focus{\r\n  outline:0;\r\n}\r\nbutton:focus{\r\n    outline: 0;\r\n}\r\n\r\n@media screen and (max-width: 1344px) {\r\n    #Bars, #SearchLi {\r\n        float: right;\r\n        margin-top: 1.5%;\r\n    }\r\n    #Bars {\r\n        display: inline;\r\n        margin-right: 10px;\r\n    }\r\n    #SearchLi {\r\n        margin-top: 2%;\r\n    }\r\n    #MainUl li:not(.navHeader):not(#SearchLi):not(#Bars) {\r\n        display: none;\r\n    }\r\n\r\n}\r\n@media screen and (min-width: 1886px) {\r\n    li {\r\n        padding: 0px 1.8%;\r\n    }\r\n}\r\n@media screen and (max-width: 1885px) {\r\n    li {\r\n        padding: 0 1.4% ;\r\n    }\r\n}\r\n@media screen and (max-width: 1675px) {\r\n    li {\r\n        padding: 0px 1%;\r\n    }\r\n}\r\n@media screen and (max-width: 1510px) {\r\n    li {\r\n        padding: 0px 0.5%;\r\n    }\r\n}\r\n@media screen and (max-width: 433px) {\r\n\r\n    .navHeader {\r\n        width: 30%;\r\n        text-align: center;\r\n        float: left !important;\r\n        padding-left: 10px !important;\r\n        \r\n    }\r\n    #SearchForm {\r\n        margin-top: 17%;\r\n    }\r\n    .DropDownUlEnabled {\r\n            margin-top: 25%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Navigation/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <ul id = \"MainUl\">\r\n        <li class=\"navHeader\"><img src=\"../../assets/images/GGReviewsLogo4.png\" alt=\"GGReviews\"></li>\r\n        <li class=\"Home\" routerLink=\"/home\" routerLinkActive=\"active-link\">Home</li>\r\n        <li routerLink=\"/games\">Gaming</li>\r\n        <li routerLink=\"/movies\">Movies</li>\r\n        <li routerLink=\"/music\">Music</li>\r\n        <li routerLink=\"/books\">Books</li>\r\n        <li class=\"FloatRight\" *ngIf = \"!LogedIn\"  routerLink=\"/login\">Login <i class=\"fa fa-sign-in \" aria-hidden=\"true\"></i></li>\r\n        <li *ngIf = \"!LogedIn\" routerLink=\"/register\" >Register</li>\r\n        <li class=\"FloatRight\" *ngIf = \"LogedIn\" routerLink = \"/profile/info\">{{Username}}</li>        \r\n        <li *ngIf = \"LogedIn\" routerLink = \"/write\">Write Review</li>                \r\n        <li *ngIf = \"LogedIn\" (click) = \"onLogout()\">Logout</li>        \r\n        <li id = \"Bars\" (click) = \"DropDown()\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></li>        \r\n        <li id = \"SearchLi\">\r\n            <button type=\"button\" class=\"SearchButton\" value=\"\" (click)=\"ShowSearch()\">\r\n                    <i [ngClass]=\"CurrentClass\" aria-hidden=\"true\">\r\n                    </i>\r\n                    </button>\r\n        </li>\r\n    </ul>\r\n\r\n<ul  [ngClass] = \"DropDownUl\" (window:resize)=\"onResize($event)\">       \r\n        <li class=\"Home\" routerLink=\"/home\" (click) = \"NavClick()\" routerLinkActive=\"active-link\">Home</li>\r\n        <li routerLink=\"/games\" (click) = \"NavClick()\">Gaming</li>\r\n        <li routerLink=\"/movies\" (click) = \"NavClick()\">Movies</li>\r\n        <li routerLink=\"/music\" (click) = \"NavClick()\">Music</li>\r\n        <li routerLink=\"/books\" (click) = \"NavClick()\">Books</li>\r\n        <li class=\"FloatRight\" *ngIf = \"!LogedIn\"  routerLink=\"/login\" (click) = \"NavClick()\">Login <i class=\"fa fa-sign-in \" aria-hidden=\"true\"></i></li>\r\n        <li *ngIf = \"!LogedIn\" routerLink=\"/register\" (click) = \"NavClick()\">Register</li>\r\n        <li class=\"FloatRight\" *ngIf = \"LogedIn\" routerLink = \"/profile/info\" (click) = \"NavClick()\">{{Username}}</li>        \r\n        <li *ngIf = \"LogedIn\" routerLink = \"/write\" (click) = \"NavClick()\">Write Review</li>                \r\n        <li *ngIf = \"LogedIn\" (click) = \"onLogout()\">Logout</li>        \r\n</ul>\r\n    <form (ngSubmit)=\"onSearch(f)\" #f=\"ngForm\" id=\"SearchForm\" [style.display]=\"FrameDisplay\">\r\n    <button type=\"submit\" class=\"SearchButton\" value=\"\">\r\n                    <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\">\r\n                    </i>\r\n        </button>\r\n    <input type=\"text\" name=\"Search\" class=\"SearchInput\" placeholder=\"Search\" ngModel>\r\n</form>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/Navigation/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavComponent = (function () {
    function NavComponent(auth, router, userService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.userService = userService;
        this.DropDownUl = "DropDownUlDisabled";
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        auth.getLoggedInName
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (name) { return _this.onLogin(name); });
        userService.getChangeName
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (name) { return _this.onLogin(name); });
        this.FrameDisplay = "none";
        this.CurrentClass = "fa fa-search fa-2x";
        this.returnUrl = "/";
    }
    NavComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            this.LogedIn = true;
            this.Username = currentUser.Username;
        }
    };
    NavComponent.prototype.onLogin = function (name) {
        if (name) {
            this.Username = name;
            this.LogedIn = true;
        }
        else {
            this.LogedIn = false;
        }
    };
    NavComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth > 1344) {
            this.DropDownUl = "DropDownUlDisabled";
        }
    };
    NavComponent.prototype.onSearch = function (f) {
        this.router.navigate(["search"], { queryParams: { id: f.value.Search, page: 1 } });
    };
    NavComponent.prototype.ShowSearch = function () {
        if (this.FrameDisplay === "none") {
            this.FrameDisplay = "";
            this.CurrentClass = "fa fa-times fa-2x";
        }
        else {
            this.FrameDisplay = "none";
            this.CurrentClass = "fa fa-search fa-2x";
        }
    };
    NavComponent.prototype.DropDown = function () {
        if (this.DropDownUl === "DropDownUlDisabled") {
            this.DropDownUl = "DropDownUlEnabled";
        }
        else {
            this.DropDownUl = "DropDownUlDisabled";
        }
    };
    NavComponent.prototype.onLogout = function () {
        this.DropDownUl = "DropDownUlDisabled";
        this.auth.Logout();
        this.router.navigate([this.returnUrl]);
    };
    NavComponent.prototype.NavClick = function () {
        this.DropDownUl = "DropDownUlDisabled";
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], NavComponent.prototype, "f", void 0);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-nav",
        template: __webpack_require__("../../../../../src/app/Navigation/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Navigation/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Services_auth_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_auth_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], NavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style: none;\r\n}\r\nul li {\r\n    background-color: #1C2021;\r\n    margin-bottom: 2%;\r\n    width: 60%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    padding-bottom: 1%;\r\n    border-radius: 3px;\r\n}\r\n\r\nli:focus {\r\n    outline: 0;\r\n}\r\n\r\n @media screen and (max-width: 1366px) {\r\n    #ProfileNavUl li {\r\n        display: inline-block;\r\n        width: 16%;\r\n        padding-bottom: 0.5%;\r\n        padding-top: 0.5%;\r\n    }\r\n    #ProfileNavUl{\r\n        padding-left:0px;\r\n        \r\n    }\r\n    \r\n }\r\n  @media screen and (max-width: 500px) {\r\n    #ProfileNavUl{\r\n        font-size: 12.5px;\r\n    }\r\n    \r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id = \"ProfileNavUl\">\n  <li routerLink=\"/profile/info\">Personal Info</li>\n  <li routerLink=\"/profile/reviews\">Your reviews</li>\n  <li routerLink=\"/profile/stress\">Stress!!!</li>\n  <li routerLink=\"/profile/users\" *ngIf = \"Admin()\">Users!</li>\n  <li routerLink=\"/profile/adminReviews\" *ngIf = \"Admin()\">Reviews!</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileNavComponent = (function () {
    function ProfileNavComponent() {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ProfileNavComponent.prototype.ngOnInit = function () {
    };
    ProfileNavComponent.prototype.Admin = function () {
        var token = __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(this.user.token);
        if (token.admin) {
            return true;
        }
        return false;
    };
    return ProfileNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], ProfileNavComponent.prototype, "UsernameExists", void 0);
ProfileNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-profile-nav",
        template: __webpack_require__("../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileNavComponent);

//# sourceMappingURL=profile-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/PartialComponents/preview-table/preview-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buttonContainer {\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\nbutton:focus {\r\n    outline: 0;\r\n}\r\n\r\n#buttonContainer > button {\r\n    border: none;\r\n    background: black;\r\n    color: white;\r\n    cursor: hand;\r\n    cursor: pointer;\r\n}\r\n\r\n#displayer {\r\n    background-color: #D04E33;\r\n    width: 65%;\r\n    margin-top: 0px;\r\n    margin-bottom: 100px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n}\r\n\r\n#imageContainer {\r\n    margin: 0px;\r\n    position: relative;\r\n}\r\n\r\n#ScoreCircle {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    font-size: 70px;\r\n    line-height: 150px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    background: linear-gradient(to right, #c02425, #f0cb35);\r\n    vertical-align: middle;\r\n    float: left;\r\n    margin-right: 30px;\r\n    margin-left: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.Author{\r\n    margin-left: 16%;\r\n    margin-bottom: 2%;\r\n    font-size: 20px;      \r\n}\r\n\r\n.PreText{\r\n    white-space: pre-wrap;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 21px;      \r\n    text-align: left;\r\n}\r\n\r\nheader {\r\n    position: absolute;\r\n    bottom: 3px; \r\n    background-color:rgba(28,32,33,0.7);\r\n    overflow: hidden;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding: 10px;\r\n    box-sizing: border-box;    \r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n:host-context(#AdminReviews) #Edit {\r\n      display: none;\r\n}\r\n\r\n:host-context(#HiddenReview ) #Review  {\r\n    display: none;  \r\n}\r\n\r\n:host-context(.MyReviews ) #Review  {\r\n    display: none;\r\n}\r\n\r\n:host-context(.MyReviews ) #displayer  {\r\n    margin-left: 24%;\r\n}\r\n\r\n:host-context(.MyReviews) #buttonContainer { \r\n    display: block;   \r\n}\r\n\r\n:host-context(.Reviews) #displayer {\r\n    margin-left: 17%;\r\n}\r\n\r\n:host-context(#shower){\r\n    margin-left: 35%;\r\n    width: 63%;\r\n}\r\n\r\n:host-context(#shower) #displayer {\r\n    width: 100%;\r\n    margin-right: 3%;\r\n    margin-top: 0%;\r\n}\r\n\r\n@media screen and (max-width: 1366px) {\r\n    header {\r\n        position: relative;\r\n        background-color: #1C2021;\r\n        bottom: 5px;\r\n    }   \r\n\r\n    :host-context(.MyReviews) #displayer {\r\n        margin-left: 0.5%;\r\n        margin-right: 0.5%;\r\n        width: 100%;\r\n    }\r\n\r\n    :host-context(.Reviews) #displayer {\r\n        margin-left: 3%;\r\n        width: 94%;\r\n    }\r\n\r\n    :host-context(#shower) { \r\n        margin-left: 3%;\r\n        width: 94%;\r\n    }\r\n\r\n    :host-context(#shower) #displayer {\r\n        width: 100%;\r\n        margin-right: 3%;\r\n        margin-top: 5%;\r\n        margin-left: 0%;\r\n    }\r\n\r\n    .mainHandler {\r\n            margin: 0px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 825px) {\r\n    #displayer {\r\n     width: 100% !important;\r\n     margin-left: 0px !important;\r\n     padding: 0px;\r\n }\r\n    h1 {\r\n        font-size: 20px\r\n    }\r\n    .Author {\r\n        font-size:  14px;\r\n\r\n    }\r\n    .PreText {\r\n        font-size: 14px;\r\n    }   \r\n\r\n    #ScoreCircle {\r\n        width: 100px;\r\n        height: 100px;\r\n        font-size: 50px;        \r\n        line-height: 100px;\r\n        \r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/PartialComponents/preview-table/preview-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"displayer\" class=\"mainHandler\">\n  <figure id=\"imageContainer\">\n    <div id=\"buttonContainer\">\n      <button type=\"button\" (click) = \"Delete(review._id)\"><i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i></button>\n      <button type=\"button\" id = \"Edit\" [routerLink]=\"['/write', review._id]\"><i class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i></button>\n    </div>\n    <img [src]=\"review.imgUrl\" alt=\"Enter a valid imgUrl\">\n    <header class=\"header-sub-container\">\n      <div id=\"ScoreCircle\">{{review.score}}</div>\n      <div id=\"ScoreCircleRight\">\n        <h1>{{review.headline}}</h1>\n        <div class=\"Author\">By {{review.author}} {{review.date | date}}</div>\n      </div>\n    </header>\n  </figure>\n  <br class=\"newLine\">\n\n  <figure>\n    <pre class = \"PreText\" [innerText]=\"AddParagraph(review.hook)\"></pre>\n  </figure>\n  <br class=\"newLine\">\n\n  <figure id = \"Review\">\n    <pre class = \"PreText\" [innerText]=\"AddParagraph(review.review)\"></pre>\n  </figure>\n  <br class=\"newLine\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/PartialComponents/preview-table/preview-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_review_model__ = __webpack_require__("../../../../../src/app/_Model/review.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_user_model__ = __webpack_require__("../../../../../src/app/_Model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreviewTableComponent = (function () {
    function PreviewTableComponent(reviewService) {
        this.reviewService = reviewService;
        this.ReviewsChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["s" /* EventEmitter */]();
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    PreviewTableComponent.prototype.ngOnInit = function () {
    };
    PreviewTableComponent.prototype.Delete = function (id) {
        var _this = this;
        this.reviewService.delete(id)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            _this.ReviewsChange.emit();
        });
    };
    PreviewTableComponent.prototype.AddParagraph = function (reviewtext) {
        return reviewtext;
    };
    PreviewTableComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return PreviewTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Model_review_model__["a" /* Review */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Model_review_model__["a" /* Review */]) === "function" && _a || Object)
], PreviewTableComponent.prototype, "review", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Model_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Model_user_model__["a" /* User */]) === "function" && _b || Object)
], PreviewTableComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], PreviewTableComponent.prototype, "ReviewsChange", void 0);
PreviewTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* Component */])({
        selector: "app-preview-table",
        template: __webpack_require__("../../../../../src/app/PartialComponents/preview-table/preview-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/PartialComponents/preview-table/preview-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */]) === "function" && _d || Object])
], PreviewTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=preview-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/Password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#LoginTable {\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n    margin-top: 6%;\r\n    width: 600px;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    background-color: #D04E33;\r\n    \r\n}\r\n\r\n#LoginTable tr td {\r\n    width: 600px;\r\n    padding-bottom: 3%;\r\n}\r\n\r\ni {\r\n    vertical-align: middle; \r\n}\r\n\r\n.Label {\r\n    text-align: right;\r\n}\r\n\r\n.LoginInfo{\r\n    height:30px;\r\n    width:250px;\r\n}\r\n\r\nbutton:focus{\r\n    outline: 0;\r\n}\r\n\r\nlabel {\r\n    font-size: 20px;\r\n    padding-right: 2%;\r\n\r\n}\r\n\r\n\r\n#SubmitSign{\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\nform { \r\n    text-align: center;\r\n}\r\n\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 33%;\r\n    text-decoration: none;\r\n    border:none;\r\n    border-radius: 0px;\r\n    \r\n}\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n#Delete:hover {\r\n    background: #ba3306;\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n  <table id=\"LoginTable\" align=\"center\">\n    <header>\n      <tr>\n        <td>\n          <h2>Please enter your new password bellow!</h2>\n        </td>\n      </tr>\n      <tr>\n        <td><i class=\"fa fa-unlock-alt fa-5x\" aria-hidden=\"true\"></i></td>\n      </tr>\n    </header>\n    <main>\n      <tr>\n        <td>\n          <input type=\"Password\" id=\"Password\" name=\"Password\" placeholder=\"Password\" class=\"LoginInfo\" ngModel required></td>\n      </tr>\n      <tr>\n        <td>\n          <input type=\"Password\" id=\"RepeatPassword\" name=\"RepeatPassword\" placeholder=\"Repeat Password\" class=\"LoginInfo\" ngModel required></td>\n      </tr>\n\n    </main>\n    <footer>\n      <tr>\n        <td colspan=\"2\"><input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Change\">\n          <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\"></td>\n      </tr>\n    </footer>\n  </table>\n</form>\n<div [hidden]=\"passwordsEqual\" id=\"SubmitSign\"> Your passwords are not Equal! </div>\n"

/***/ }),

/***/ "../../../../../src/app/Password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordComponent = (function () {
    function PasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.passwordsEqual = true;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.value.Password !== f.value.RepeatPassword) {
            this.passwordsEqual = false;
            setTimeout(function () { _this.passwordsEqual = true; }, 4000);
            return;
        }
        this.user.Password = f.value.Password;
        this.userService.update(this.user)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            localStorage.removeItem("CurrentUser");
            _this.router.navigate(["/login"]);
        });
    };
    PasswordComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-password",
        template: __webpack_require__("../../../../../src/app/Password/password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Password/password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PasswordComponent);

var _a, _b;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 6%;\r\n    font-size: 20px;\r\n    margin-right: 60px;\r\n}\r\n.InfoDiv{\r\n    float: left;\r\n    padding-left: 10%;\r\n    margin-right: 1%;\r\n    width: 21%;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\nul li {\r\n    width: 100%;\r\n    margin-left: 3%;\r\n    \r\n}\r\nli:focus {\r\n    outline: 0;\r\n}\r\n#ReviewsUl{\r\n    margin-left: 10%;\r\n}\r\n#moreIcon{\r\n    background-color: #1C2021;\r\n    text-align: center;\r\n    width: 20%;\r\n    margin-left: 47%;\r\n    cursor: pointer;\r\n    margin-bottom: 2%;\r\n        height: 40px;\r\n    \r\n}\r\n @media screen and (max-width: 1366px) {\r\n    .InfoDiv {\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    }\r\n     #moreIcon{\r\n        margin-right: 45%;\r\n    }\r\n    ul li {\r\n        margin-bottom: 3%;\r\n        float: right;\r\n        margin-right: 5%;\r\n    }\r\n   \r\n }\r\n  @media screen and (max-width: 825px) {\r\n ul {\r\n     width: 100% !important;\r\n     margin-left: 0px !important;\r\n     padding: 0px;\r\n }\r\n ul li {\r\n     width: 100%;\r\n }\r\nfigure {\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left:4.9%;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<figure class=\"container\">\n  <div class=\"InfoDiv\">\n    <h1>Reviews</h1>\n    Remove the reviews that disagree with the site policy. <br>\n    <app-profile-nav></app-profile-nav>\n  </div>\n  <ul id=\"ReviewsUl\">\n    <li *ngFor=\"let article of articles\">    \n      <app-preview-table class=\"MyReviews\" [user] = \"user\" [review]=\"article\" (ReviewsChange)=\"MyInit()\" id = \"AdminReviews\"></app-preview-table>\n    </li>\n    <li id = \"moreIcon\"><i class=\"fa fa-chevron-down fa-2x\" (click) = \"More()\" aria-hidden=\"true\"></i></li>\n  </ul>\n</figure>"

/***/ }),

/***/ "../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAdminReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileAdminReviewsComponent = (function () {
    function ProfileAdminReviewsComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
        this.page = "1";
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ProfileAdminReviewsComponent.prototype.ngOnInit = function () {
        this.MyInit();
    };
    ProfileAdminReviewsComponent.prototype.More = function () {
        var _this = this;
        this.page = (+this.page + 1).toString();
        this.reviewService.getById("/home/" + this.page)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            var articles = result;
            _this.articles.push.apply(_this.articles, articles);
        });
    };
    ProfileAdminReviewsComponent.prototype.MyInit = function () {
        var _this = this;
        this.reviewService.getById("/home/1")
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.articles = result;
        });
    };
    ProfileAdminReviewsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ProfileAdminReviewsComponent;
}());
ProfileAdminReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-profile-admin-reviews",
        template: __webpack_require__("../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_review_service__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileAdminReviewsComponent);

var _a, _b;
//# sourceMappingURL=profile-admin-reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/Profile-users/profile-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 6%;\r\n    font-size: 20px;\r\n}\r\n.InfoDiv{\r\n    float: left;\r\n    padding-left: 10%;\r\n    margin-right: 1%;\r\n    width: 21%;    \r\n}\r\nli {\r\n    display: inline-block;\r\n    background-color:#D04E33;\r\n    margin-right: 2%;\r\n    margin-bottom: 5%;\r\n    text-align: center;\r\n    width: 20%;\r\n    height: 150px;\r\n    overflow:  hidden;\r\n    text-overflow: ellipsis;\r\n}\r\nul {\r\nmargin-left: 30%;   \r\n}\r\n.UserIcon {\r\n    margin-top: 4%;\r\n}\r\n.delete {\r\n    position: absolute;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    \r\n}\r\n.fa-times {\r\n    cursor: pointer;\r\n}\r\n @media screen and (max-width: 1366px) {\r\n    .InfoDiv {\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    }\r\n    li {\r\n        margin-top: 3%;\r\n        width: 23%;\r\n        margin-bottom: 3%;\r\n        float: left;  \r\n    }\r\n    ul {\r\n        margin-left: 0%;\r\n    }\r\n }\r\n @media screen and (max-width: 600px) {\r\n    .delete {\r\n    position: absolute;\r\n    margin-left: 3px;\r\n    margin-top: 3px;  \r\n}\r\n li {\r\n     height:  100px;\r\n }\r\n }\r\n  @media screen and (max-width: 340px) {\r\n    .delete {\r\n    position: absolute;\r\n    margin-left: 0px;\r\n    margin-top: 0px;  \r\n    }\r\n    .UserIcon {\r\n    margin-left: 10px;\r\n}\r\nli {\r\n    padding-right: 10px;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Profile-users/profile-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"InfoDiv\">\n    <h1>Users!</h1>\n    Only admins can access this page and ban users! <br>\n    <app-profile-nav></app-profile-nav>\n  </div>\n  \n  <ul (window:resize)=\"onResize($event)\">\n    <li *ngFor=\"let user of users\" >\n      <div class = \"delete\">\n        <i [ngClass] = \"ExClass\" aria-hidden=\"true\" (click) = \"Delete(user._id)\"></i>\n      </div>\n     <div class = \"UserIcon\"><i [ngClass] = \"UserIconClass\" aria-hidden=\"true\"></i></div> \n      {{user.Username}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Profile-users/profile-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileUsersComponent = (function () {
    function ProfileUsersComponent(userService) {
        this.userService = userService;
        this.ExClass = "fa fa-times fa-2x";
    }
    ProfileUsersComponent.prototype.ngOnInit = function () {
        this.MyInit();
        this.InitialWidth();
    };
    ProfileUsersComponent.prototype.Delete = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function (result) {
            _this.MyInit();
            return;
        });
    };
    ProfileUsersComponent.prototype.MyInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (result) {
            _this.users = result;
        });
    };
    ProfileUsersComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 600) {
            this.ExClass = "fa fa-times fa-lg";
            this.UserIconClass = "fa fa-user fa-3x";
        }
        else {
            this.ExClass = "fa fa-times fa-2x";
            this.UserIconClass = "fa fa-user fa-5x";
        }
    };
    ProfileUsersComponent.prototype.InitialWidth = function () {
        if (document.documentElement.clientWidth < 600) {
            this.ExClass = "fa fa-times fa-lg";
            this.UserIconClass = "fa fa-user fa-3x";
        }
        else {
            this.ExClass = "fa fa-times fa-2x";
            this.UserIconClass = "fa fa-user fa-5x";
        }
    };
    return ProfileUsersComponent;
}());
ProfileUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-profile-users",
        template: __webpack_require__("../../../../../src/app/Profile-users/profile-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Profile-users/profile-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileUsersComponent);

var _a;
// fa fa-user fa-5x
// fa fa-times fa-2x
//# sourceMappingURL=profile-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/Profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#UsernameFig {\r\n     border-top: none;\r\n }\r\n\r\n.BirthdayInputs{\r\n    height:30px;\r\n    width:25%;\r\n    display: inline-block;\r\n    margin-left: 4%;\r\n    margin-bottom: 10%;\r\n    margin-top: 7%; \r\n}\r\n\r\n.container {\r\n    margin-top: 6%;\r\n    font-size: 20px;\r\n}\r\n\r\n.ellipses {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 50%;\r\n}\r\n\r\n.fog {\r\n    position:fixed;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    display:block;\r\n    background-color: rgba(28,32,33,0.8);\r\n    z-index: 102;\r\n}\r\n\r\n.InfoDiv{\r\n    float: left;\r\n    padding-left: 10%;\r\n    margin-right: 1%;\r\n    width: 21%;\r\n}\r\n\r\n .overlay {\r\n    position: fixed;\r\n    top:30%;\r\n    left:35%;\r\n    height:25%;\r\n    background-color:#D04E33;\r\n    border:1px solid #EEEEEE;\r\n    z-index:103;\r\n    box-sizing:border-box;\r\n    padding:40px 40px;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    width: 30%;\r\n    \r\n }\r\n\r\n.Submit{\r\n    border-collapse: collapse;\r\n    color: #EEEEEE;\r\n    height:30px;\r\n    vertical-align: middle;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.SubmitSign{\r\n    font-size: 23px;\r\n}\r\n\r\n.TableContainer {\r\n    background-color: #D04E33;\r\n    margin-right: 20%;\r\n    border-collapse: collapse;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n    margin-bottom: 5%;\r\n    width: 45%;\r\n    float:right;\r\n}\r\n\r\n.TableContainer > figure { \r\n    display: -webkit-box; \r\n    display: -ms-flexbox; \r\n    display: flex;\r\n    padding: 6%;\r\n    border-top: 1px solid #EEEEEE;   \r\n    margin: 0;\r\n}\r\n\r\nform {\r\n    text-align: center;\r\n}\r\n\r\nfigure > div {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\ni {\r\n     cursor: pointer;\r\n     float: right;\r\n}\r\n\r\n#Gender select {\r\n    color: black;\r\n}\r\n\r\nselect, input{\r\n  font-size:18px;\r\n  display:block;\r\n  width:70%;\r\n  border:none;\r\n  color: #EEEEEE;\r\n  border-bottom: 1px solid #EEEEEE;\r\n  background: transparent;\r\n  margin-left: 14%;\r\n  margin-top: 5%;\r\n  \r\n}\r\n\r\nselect, input:focus{ \r\n    outline:none; \r\n}\r\n\r\n::-webkit-input-placeholder { \r\n  color: #EEEEEE;\r\n}\r\n\r\n @media screen and (max-width: 1366px) {\r\n    .InfoDiv {\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    margin-left: 0%;\r\n    }\r\n    .TableContainer {\r\n        margin-top: 3%;\r\n        width: 80%;\r\n        margin-bottom: 3%;\r\n        margin-right: 10%;\r\n        margin-left: 10%;   \r\n    }\r\n }\r\n  @media screen and (max-width: 500px) {\r\n    .TableContainer{\r\n        width: 100%;\r\n        margin-right: 0px;\r\n    }\r\n    \r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <figure class=\"InfoDiv\">\n    <h1>Your personal info</h1>\n    Here you can manage this basic information: your username, email, password and others. <br>\n    <div [hidden]=\"UsernameExists\" class=\"SubmitSign\"> Ther is an account with that username! </div>\n    <app-profile-nav></app-profile-nav>\n  </figure>\n\n  <div class = \"TableContainer\">\n    <figure id=\"UsernameFig\">\n      <div>Username</div>\n      <div>{{user.Username}}</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" (click)=\"Change('Username')\" aria-hidden=\"true\"></i></div>\n    </figure>\n    <figure>\n      <div>Password</div>\n      <div>Change password</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" aria-hidden=\"true\" (click)=\"ChangePassword()\" (click)=\"Change('Password')\"></i></div>\n    </figure>\n    <figure>\n      <div>EMail</div>\n      <div class = \"ellipses\">{{user.EMail}}</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" (click)=\"Change('EMail')\" aria-hidden=\"true\"></i></div>\n    </figure>\n    <figure>\n      <div>Birthdate</div>\n      <div>{{user.Birthdate | date}}</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" aria-hidden=\"true\" (click)=\"Change('Birthdate')\"></i></div>\n    </figure>\n    <figure>\n      <div>Gender</div>\n      <div>{{user.Gender}}</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" (click)=\"Change('Gender')\" aria-hidden=\"true\"></i></div>\n    </figure>\n    <figure>\n      <div>Delete</div>\n      <div>Delete profile</div>\n      <div><i class=\"fa fa-arrow-right fa-lg\" (click)=\"Delete()\" aria-hidden=\"true\"></i></div>\n    </figure>\n  </div>\n\n  <div class=\"fog\" (click)=\"Close()\" *ngIf = \"HiddenFlag\"></div>\n  <div class=\"overlay\" *ngIf = \"HiddenFlag\">\n    <form *ngIf=\"ViewCheck('Username')\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      Change Username. <br> It should be 3-8 letters.\n      <input type=\"text\" name=\"Username\" class=\"BigInputs\" minlength=\"3\" maxlength=\"8\" maxautofocus ngModel required>\n      <br>\n      <input type=\"submit\" class=\"Submit\" value=\"Submit\">\n    </form>\n\n    <form *ngIf=\"ViewCheck('EMail')\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      Change E-Mail\n      <input type=\"email\" name=\"EMail\" class=\"BigInputs\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n      <br>\n      <input type=\"submit\" class=\"Submit\" value=\"Submit\">\n    </form>\n\n    <form *ngIf=\"ViewCheck('Birthdate')\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\"> Change Birthdate. <br>\n      <input type=\"number\" min=\"1\" max=\"31\" name=\"Day\" class=\"BirthdayInputs\" size=\"1\" placeholder=\"Day\" required ngModel>\n      <input type=\"number\" min=\"1\" max=\"12\" name=\"Month\" class=\"BirthdayInputs\" size=\"1\" placeholder=\"Month\" required ngModel>\n      <input type=\"number\" min=\"1950\" max=\"2017\" name=\"Year\" class=\"BirthdayInputs\" placeholder=\"Year\" size=\"2\" required ngModel>\n      <br>\n      <input type=\"submit\" class=\"Submit\" value=\"Submit\">\n    </form>\n    <form *ngIf=\"ViewCheck('Password')\" (ngSubmit)=\"onPasswordChange(f)\" #f=\"ngForm\"> Verification Email sent. Please enter the code from it bellow. <br>\n      <input type=\"text\" name=\"Code\" class=\"BigInputs\" ngModel required>\n      <br>\n      <input type=\"submit\" class=\"Submit\" value=\"Submit\">\n    </form>\n\n    <form *ngIf=\"ViewCheck('Gender')\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" id=\"Gender\">\n      Gender\n      <select name=\"Gender\" required ngModel>\n            <option *ngFor = \"let gender of Genders\"  [value] = \"gender\">{{gender}}</option>\n        </select>\n      <br>\n      <input type=\"submit\" class=\"Submit\" value=\"Submit\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(router, auth, userService) {
        this.router = router;
        this.auth = auth;
        this.userService = userService;
        this.Genders = ["Male", "Female", "Other"];
        this.HiddenFlag = false;
        this.UpdateFlag = true;
        this.UsernameExists = true;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.user);
    }
    ProfileComponent.prototype.Close = function () {
        this.HiddenFlag = false;
    };
    ProfileComponent.prototype.ChangePassword = function () {
        this.userService.mail(this.user.EMail)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) { }, function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.Change = function (id) {
        this.HiddenFlag = true;
        this.id = id;
    };
    ProfileComponent.prototype.Delete = function () {
        var _this = this;
        this.userService.delete(this.user._id).subscribe(function (result) {
            _this.auth.Logout();
            _this.router.navigate(["/"]);
        });
    };
    ProfileComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        var updatedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.id === "Username") {
            updatedUser.Username = f.value.Username;
        }
        else if (this.id === "EMail") {
            updatedUser.EMail = f.value.EMail;
        }
        else if (this.id === "Birthdate") {
            var date = new Date(f.value.Year, (+f.value.Month - 1), f.value.Day);
            updatedUser.Birthdate = date;
        }
        else {
            updatedUser.Gender = f.value.Gender;
        }
        return this.userService.update(updatedUser)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.UpdateFlag = false;
            setTimeout(_this.UpdateFlag = true, 4000);
            _this.user = JSON.parse(localStorage.getItem("currentUser"));
            _this.Close();
            return result;
        }, function (error) {
            var body = error._body;
            _this.Close();
            if (body === "There is an account with this username") {
                _this.UsernameExists = false;
                setTimeout(function () { _this.UsernameExists = true; }, 4000);
            }
        });
    };
    ProfileComponent.prototype.onPasswordChange = function (f) {
        var _this = this;
        this.userService.checkCode(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            var user = _this.user;
            user.ChangePassword = true;
            localStorage.setItem("currentUser", JSON.stringify(user));
            _this.router.navigate(["/password"]);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    };
    ProfileComponent.prototype.ViewCheck = function (id) {
        if (id === this.id) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "f", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* Component */])({
        selector: "app-profile",
        template: __webpack_require__("../../../../../src/app/Profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Profile/profile.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__Services_auth_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_auth_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/Register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#RegisterTable{\r\n    width: 600px;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    background-color: #D04E33;\r\n    font-size: 20px;\r\n    margin-top: 6%;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n}\r\n#HeaderTable{\r\n    border: none;\r\n    border-collapse: collapse;\r\n    \r\n}\r\n#HeaderTable tr td {\r\n    padding-bottom: 4%;    \r\n}\r\n\r\n.RightName{\r\n    text-align: right;\r\n    font-weight: bold;\r\n    padding-right: 2%;\r\n}\r\n    #RegisterTable tr td {\r\n    width: 600px;\r\n    height: 50px;\r\n    \r\n}\r\n\r\n.BigInputs {\r\n    height:30px;\r\n    width:250px;\r\n}\r\n\r\n.BirthdayInputs{\r\n    height:30px;\r\n    width:50px;\r\n}\r\n\r\nselect {\r\n    height:30px;\r\n    width:250px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#Birthdate{\r\n    font-size: 16px;\r\n}\r\n    input {\r\n    border-radius: 4px;\r\n}\r\n    .ng-invalid:not(form):not(.BirthdayInputs)  {\r\n  border-left: 5px solid #a94442;\r\n}\r\n    .SubmitSign{\r\n        text-align: center;\r\n        font-size: 20px;\r\n}\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 33%;\r\n    text-decoration: none;\r\n    border:none;\r\n    border-radius: 0px;\r\n    \r\n}\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n#Delete:hover {\r\n    background: #ba3306;\r\n    text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 620px) {\r\n #RegisterTable {\r\n     width: 100%;\r\n     margin-top: 10%;\r\n }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    <table id=\"RegisterTable\" border=\"1px\" align=\"center\">\n        <header>\n            <tr>\n                <td>\n                    <table id=\"HeaderTable\" align=\"center\">\n                        <tr>\n                            <td id=\"header\">\n                                <h2>Please create your account</h2>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td id=\"headerIcon\"><i class=\"fa fa-users fa-5x\" aria-hidden=\"true\"></i></td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </header>\n        <main>\n            <tr>\n                <td class=\"RightName\">Username*</td>\n                <td><input [ngClass]=\"BorderClass\" type=\"text\" name=\"Username\" class=\"BigInputs\" minlength=\"3\" maxlength=\"8\"\n                        maxautofocus ngModel required>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"RightName\">Password*</td>\n                <td><input [ngClass]=\"BorderClass\" type=\"password\" name=\"Password\" class=\"BigInputs\" minlength=\"5\" ngModel required></td>\n\n            </tr>\n            <tr>\n                <td class=\"RightName\">Repeat Password*</td>\n                <td><input [ngClass]=\"BorderClass\" type=\"password\" name=\"RepeatPassword\" class=\"BigInputs\" validateEqual=\"password\"\n                        minlength=\"5\" ngModel required></td>\n            </tr>\n            <tr>\n                <td class=\"RightName\">E-Mail*</td>\n                <td><input [ngClass]=\"BorderClass\" type=\"email\" name=\"EMail\" class=\"BigInputs\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"></td>\n            </tr>\n            <tr>\n                <td class=\"RightName\">Birthdate</td>\n                <td id=\"Birthdate\">\n                    Day <input type=\"number\" min=\"1\" max=\"31\" name=\"Day\" class=\"BirthdayInputs\" size=\"1\" ngModel> Month\n                    <input type=\"number\" min=\"1\" max=\"12\" name=\"Month\" class=\"BirthdayInputs\" size=\"1\" ngModel> Year(4 digit)\n                    <input type=\"number\" min=\"1950\" max=\"2017\" name=\"Year\" class=\"BirthdayInputs\" size=\"2\" ngModel>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"RightName\">Gender</td>\n                <td>\n                    <select name=\"Gender\" ngModel>\n                        <option *ngFor = \"let gender of Genders\" [value] = \"gender\">{{gender}}</option>\n                    </select>\n                </td>\n            </tr>\n        </main>\n        <footer>\n            <tr>\n                <td colspan=\"2\" class=\"colgreen\">\n                    <input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Create account\">\n                    <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear text\">\n                </td>\n            </tr>\n        </footer>\n    </table>\n</form>\n<div [hidden]=\"passwordsEqual\" class=\"SubmitSign\"> Your passwords are not Equal! </div>\n<div [hidden]=\"UsernameExists\" class=\"SubmitSign\"> Someone already has an account with that username! </div>\n<div [hidden]=\"EmailExists\" class=\"SubmitSign\"> There is an account with this email! </div>\n<div [hidden]=\"!submitted\" class=\"SubmitSign\"> Submitted! You can login now. </div>\n<div [hidden]=\"YearsFlag\" class=\"SubmitSign\"> The Day, Month or Year is invalid! Please check your inputs. </div>\n"

/***/ }),

/***/ "../../../../../src/app/Register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.passwordsEqual = true;
        this.UsernameExists = true;
        this.EmailExists = true;
        this.submitted = false;
        this.Genders = ["Male", "Female", "Other"];
        this.BorderClass = "";
        this.leaveFlag = true;
        this.YearsFlag = true;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        if (f.value.Password !== f.value.RepeatPassword) {
            this.passwordsEqual = false;
            setTimeout(function () { _this.passwordsEqual = true; }, 4000);
            return;
        }
        if (f.value.Day || f.value.Year || f.value.Month) {
            if (f.value.Day < 1 || f.value.Day > 31 || f.value.Year < 1950 || f.value.Year > 2017 || f.value.Month < 1 || f.value.Month > 12) {
                this.YearsFlag = false;
                setTimeout(function () { _this.YearsFlag = true; }, 4000);
                return;
            }
        }
        this.userService.create(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.leaveFlag = false;
            _this.submitted = true;
            setTimeout(function () { _this.submitted = false; }, 4000);
            return;
        }, function (error) {
            var body = error._body;
            if (body === "There is an account with this username") {
                _this.submitted = false;
                _this.UsernameExists = false;
                setTimeout(function () { _this.UsernameExists = true; }, 4000);
            }
            else if (body === "There is an account with this email") {
                _this.submitted = false;
                _this.EmailExists = false;
                setTimeout(function () { _this.EmailExists = true; }, 4000);
            }
        });
    };
    RegisterComponent.prototype.hasChanges = function () {
        if (this.f.dirty && this.leaveFlag) {
            return true;
        }
        this.leaveFlag = true;
        return false;
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "f", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-register",
        template: __webpack_require__("../../../../../src/app/Register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Register/register.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/Review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    #container {\r\n        margin-top: 5%;\r\n        text-align: center;\r\n}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n <app-preview-table *ngIf = \"article\" [review] = \"article\" class = \"Reviews\"></app-preview-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewComponent = (function () {
    function ReviewComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewService.getById(this.router.url)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.article = result;
        });
    };
    ReviewComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-review",
        template: __webpack_require__("../../../../../src/app/Review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ReviewComponent);

var _a, _b;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/Reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n    margin-top: 5%;\r\n    text-align: center;\r\n}\r\n#PageUl li{\r\n    display: inline-block;\r\n}\r\n#PageUl {\r\n    margin-bottom:  10px;\r\n}\r\nbutton {\r\n    background: none;\r\n    background-color: #1C2021;    \r\n    border:none;\r\n    height: 30px;\r\n    width: 50px; \r\n    cursor: pointer;\r\n    color: #EEEEEE;\r\n}\r\n\r\nli:focus{\r\n    outline: 0;\r\n}\r\nbutton:focus {\r\n    outline: 0;\r\n}\r\n#PageCounter {\r\n    background-color: #D04E33;    \r\n    width: 100px; \r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n@media screen and (max-width: 825px) {\r\n ul {\r\n     width: 100%;\r\n     margin: 0px;\r\n     padding: 0px;\r\n }\r\n\r\n #PageUl li {\r\n     width: 20px;\r\n     margin-right: 20px;\r\n     \r\n }\r\n #PageUl li:first-child {\r\n     width: 15%;\r\n }\r\n}\r\n@media screen and (max-width: 825px) {\r\n ul {\r\n     width: 100%;\r\n     margin: 0px;\r\n     padding: 0px;\r\n }\r\n\r\n #PageUl li {\r\n     width: 20px;\r\n     margin-right: 20px;\r\n     \r\n }\r\n #PageUl li:first-child {\r\n     width: 15%;\r\n }\r\n}\r\n@media screen and (max-width: 1366px) {\r\n ul {\r\n     width: 100%;\r\n     margin: 0px;\r\n     padding: 0px;\r\n }\r\n}\r\n@media screen and (max-width: 530px) {\r\n #PageUl li {\r\n     width: 15px;\r\n     margin-right: 15px;\r\n }\r\n #PageUl li:first-child {\r\n     width: 15%;\r\n     margin-right: 40px;\r\n }\r\n}\r\n@media screen and (max-width: 425px) {\r\n #PageUl li button{\r\n     width: 24px;\r\n }\r\n  #PageUl li {\r\n     width: 10px;\r\n     margin-right: 10px;\r\n }\r\n #PageUl li:first-child button {\r\n     width: 100px;\r\n     margin-right: 40px;\r\n }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <ul>\n    <li *ngFor=\"let article of articles\" [routerLink] = \"['/review', article._id]\">\n      <app-preview-table class = \"Reviews\" id = \"HiddenReview\" [review] = \"article\"></app-preview-table>\n    </li>\n  </ul>\n\n  <ul id=\"PageUl\">\n    <li><button type=\"button\" id=\"PageCounter\">Page {{currentPage}} of 10</button></li>\n    <li *ngFor=\"let page of pages\">\n      <button type=\"button\" (click)=\"Routing(page)\">{{page}}</button>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_search_service__ = __webpack_require__("../../../../../src/app/Services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewsComponent = (function () {
    function ReviewsComponent(searchService, reviewService, router, route, element) {
        var _this = this;
        this.searchService = searchService;
        this.reviewService = reviewService;
        this.router = router;
        this.element = element;
        this.pages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.currentPage = "1";
        this.id = null;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        route.params.forEach(function (params) {
            _this.myInit(params.id);
        });
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        if (+this.router.url.substring(this.router.url.lastIndexOf("/") + 1)) {
            this.currentPage = this.router.url.substring(this.router.url.lastIndexOf("/") + 1);
        }
    };
    ReviewsComponent.prototype.myInit = function (id) {
        var _this = this;
        this.reviewService.getById(this.router.url)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.element.nativeElement.scrollIntoView();
            _this.articles = result;
        });
    };
    ReviewsComponent.prototype.Routing = function (PageId) {
        var url = this.router.url;
        var substring = this.router.url.substring(0, this.router.url.lastIndexOf("/"));
        this.currentPage = PageId;
        if (substring) {
            url = substring;
        }
        this.router.navigate([url, PageId])
            .catch(function (error) { return console.log(error); });
    };
    ReviewsComponent.prototype.AddParagraph = function (reviewtext) {
        return reviewtext;
    };
    ReviewsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-reviews",
        template: __webpack_require__("../../../../../src/app/Reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object])
], ReviewsComponent);

var _a, _b, _c, _d, _e;
// [routerLink]="['./Books', 1]" This is a link to a page with an id
// [routerLink]="['Books']" [queryParams]="{ id: 1 }"
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/Search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n    margin-top: 5%;\r\n    text-align: center;\r\n}\r\n#PageCounter {\r\n    background-color: #D04E33;    \r\n    width: 100px; \r\n}\r\n\r\n#PageUl li{\r\n    display: inline-block;\r\n}\r\n\r\nbutton {\r\n    background: none;\r\n    background-color: #1C2021;    \r\n    border:none;\r\n    height: 30px;\r\n    width: 50px; \r\n    cursor: pointer;\r\n    color: #EEEEEE;\r\n}\r\n\r\nbutton:focus {\r\n    outline: 0;\r\n}\r\n\r\nli:focus{\r\n    outline: 0;\r\n}\r\n\r\n#NothingFound{\r\n    font-size: 30px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n@media screen and (max-width: 825px) {\r\n ul {\r\n     width: 100%;\r\n     margin: 0px;\r\n     padding: 0px;\r\n }\r\n\r\n #PageUl li {\r\n     width: 20px;\r\n     margin-right: 20px;\r\n     \r\n }\r\n #PageUl li:first-child {\r\n     width: 15%;\r\n }\r\n}\r\n@media screen and (max-width: 1366px) {\r\n ul {\r\n     width: 100%;\r\n     margin: 0px;\r\n     padding: 0px;\r\n }\r\n}\r\n@media screen and (max-width: 530px) {\r\n #PageUl li {\r\n     width: 15px;\r\n     margin-right: 15px;\r\n }\r\n #PageUl li:first-child {\r\n     width: 15%;\r\n     margin-right: 40px;\r\n }\r\n}\r\n@media screen and (max-width: 425px) {\r\n #PageUl li button{\r\n     width: 24px;\r\n }\r\n  #PageUl li {\r\n     width: 10px;\r\n     margin-right: 10px;\r\n }\r\n #PageUl li:first-child button {\r\n     width: 100px;\r\n     margin-right: 40px;\r\n }\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <ul>\n    <li *ngIf = \"NothingFlag\" id = \"NothingFound\">Nothing was found</li>\n    <li *ngFor=\"let article of articles\" [routerLink] = \"['/review', article._id]\">\n      <app-preview-table class = \"Reviews\" [review] = \"article\" id = \"HiddenReview\"></app-preview-table>\n    </li>\n  </ul>\n\n  <ul id=\"PageUl\">\n    <li><button type=\"button\" id=\"PageCounter\">Page {{currentPage}} of 10</button></li>\n    <li *ngFor=\"let page of pages\">\n      <button type=\"button\" (click)=\"Routing(page)\">{{page}}</button>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_search_service__ = __webpack_require__("../../../../../src/app/Services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(searchService, reviewService, router, route, element) {
        var _this = this;
        this.searchService = searchService;
        this.reviewService = reviewService;
        this.router = router;
        this.element = element;
        this.pages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.currentPage = "1";
        this.id = null;
        this.NothingFlag = false;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        route.queryParams.subscribe(function (params) {
            _this.myInit(params.id, params.page);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.myInit = function (id, page) {
        var _this = this;
        this.id = id;
        this.searchService.getElementsByID(id + "/" + page).subscribe(function (result) {
            if (!result[0]) {
                _this.NothingFlag = true;
            }
            else {
                _this.NothingFlag = false;
            }
            ;
            _this.articles = result;
            _this.element.nativeElement.scrollIntoView();
        }, function (err) {
            if (err._body === "Not Found") {
                _this.router.navigate(["asds"]);
            }
        });
    };
    SearchComponent.prototype.Routing = function (PageId) {
        this.router.navigate(["search"], { queryParams: { id: this.id, page: PageId } });
    };
    SearchComponent.prototype.AddParagraph = function (reviewtext) {
        return reviewtext;
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-search",
        template: __webpack_require__("../../../../../src/app/Search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/Services/PassGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PassGuardService = (function () {
    function PassGuardService(http, router) {
        this.http = http;
        this.router = router;
        this.apiLink = "";
    }
    PassGuardService.prototype.canActivate = function (route, state) {
        var User = JSON.parse(localStorage.getItem("currentUser"));
        if (User.ChangePassword === true) {
            User.ChangePassword = false;
            return true;
        }
        this.router.navigate(["/profile"], { queryParams: { returnUrl: state.url } });
    };
    return PassGuardService;
}());
PassGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PassGuardService);

var _a, _b;
//# sourceMappingURL=PassGuard.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/admin-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminGuardService = (function () {
    function AdminGuardService(http, router) {
        this.http = http;
        this.router = router;
    }
    AdminGuardService.prototype.canActivate = function (route, state) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        if (this.user) {
            this.token = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(this.user.token);
            if (this.token.admin) {
                return true;
            }
        }
        this.router.navigate(["/home"]);
    };
    return AdminGuardService;
}());
AdminGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuardService);

var _a, _b;
//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Config_Ip_config__ = __webpack_require__("../../../../../src/app/Config/Ip.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.getLoggedInName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.apiLink = "";
    }
    AuthenticationService.prototype.Login = function (Value) {
        var _this = this;
        this.apiLink = __WEBPACK_IMPORTED_MODULE_4__Config_Ip_config__["a" /* ServerIp */] + "/api/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            url: this.apiLink,
            headers: headers,
        });
        return this.http.post(this.apiLink, JSON.stringify(Value), options).map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                _this.getLoggedInName.emit(user.Username);
            }
            else {
                _this.getLoggedInName.emit("");
            }
            ;
            return user;
        });
    };
    AuthenticationService.prototype.Logout = function () {
        this.getLoggedInName.emit(false);
        localStorage.removeItem("currentUser");
    };
    return AuthenticationService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], AuthenticationService.prototype, "getLoggedInName", void 0);
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/authGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(http, router) {
        this.http = http;
        this.router = router;
        this.apiLink = "";
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("currentUser")) {
            return true;
        }
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=authGuard.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/canDeactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeactivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfirmDeactivateGuard = (function () {
    function ConfirmDeactivateGuard() {
    }
    ConfirmDeactivateGuard.prototype.canDeactivate = function (target) {
        if (target.hasChanges()) {
            return window.confirm("If you leave this page all information will be lost!");
        }
        return true;
    };
    return ConfirmDeactivateGuard;
}());
ConfirmDeactivateGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ConfirmDeactivateGuard);

//# sourceMappingURL=canDeactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/dog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__ = __webpack_require__("../../../../../src/app/Config/Ip.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/Services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DogService = (function () {
    function DogService(http, JWT) {
        this.http = http;
        this.JWT = JWT;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__["a" /* ServerIp */];
    }
    DogService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/dogs", this.JWT.jwt()).map(function (response) {
            return response.json();
        });
    };
    DogService.prototype.create = function (dog) {
        return this.http.post(this.apiUrl + "/api/dogs/add", dog, this.JWT.jwt()).map(function (response) { return response.json(); });
    };
    return DogService;
}());
DogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */]) === "function" && _b || Object])
], DogService);

var _a, _b;
//# sourceMappingURL=dog.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWTService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JWTService = (function () {
    function JWTService() {
    }
    JWTService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ "Authorization": "Bearer " + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return JWTService;
}());
JWTService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JWTService);

//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__ = __webpack_require__("../../../../../src/app/Config/Ip.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/Services/jwt.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = (function () {
    function ReviewService(http, JWT) {
        this.http = http;
        this.JWT = JWT;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__["a" /* ServerIp */];
    }
    ReviewService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/review", this.JWT.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService.prototype.getById = function (_id) {
        return this.http.get(this.apiUrl + "/api" + _id, this.JWT.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService.prototype.create = function (review) {
        return this.http.post(this.apiUrl + "/api/review/add", review, this.JWT.jwt());
    };
    ReviewService.prototype.update = function (review) {
        return this.http.put(this.apiUrl + "/api/review/" + review._id, review, this.JWT.jwt());
    };
    ReviewService.prototype.delete = function (_id) {
        return this.http.delete(this.apiUrl + "/api/delete/review/" + _id, this.JWT.jwt());
    };
    return ReviewService;
}());
ReviewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */]) === "function" && _b || Object])
], ReviewService);

var _a, _b;
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Config_Ip_config__ = __webpack_require__("../../../../../src/app/Config/Ip.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt_service__ = __webpack_require__("../../../../../src/app/Services/jwt.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = (function () {
    function SearchService(http, JWT) {
        this.http = http;
        this.JWT = JWT;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__Config_Ip_config__["a" /* ServerIp */];
    }
    SearchService.prototype.getElementsByID = function (_id) {
        return this.http.get(this.apiUrl + "/api/search/" + _id, this.JWT.jwt()).map(function (response) {
            return response.json();
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JWTService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JWTService */]) === "function" && _b || Object])
], SearchService);

var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__ = __webpack_require__("../../../../../src/app/Config/Ip.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/Services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, JWT) {
        this.http = http;
        this.JWT = JWT;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__Config_Ip_config__["a" /* ServerIp */];
        this.getChangeName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/users", this.JWT.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.apiUrl + "/api/users/" + _id, this.JWT.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiUrl + "/api/users/register", user);
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.http.put(this.apiUrl + "/api/users/" + user._id, user, this.JWT.jwt()).map(function (response) {
            localStorage.setItem("currentUser", JSON.stringify(response.json()));
            _this.getChangeName.emit(user.Username);
            return user;
        });
    };
    UserService.prototype.updatePass = function (_id, Password) {
        return this.http.put(this.apiUrl + "/api/users/" + _id, Password, this.JWT.jwt()).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.checkCode = function (Code) {
        return this.http.post(this.apiUrl + "/api/code", Code, this.JWT.jwt()).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.mail = function (EMail) {
        return this.http.post(this.apiUrl + "/api/mail", { EMail: EMail }, this.JWT.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.apiUrl + "/api/delete/users/" + _id, this.JWT.jwt());
    };
    return UserService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], UserService.prototype, "getChangeName", void 0);
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JWTService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/Update-review/update-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buttonsContainer {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n\r\n#Delete:hover {\r\n  background: #ba3306;\r\n  text-decoration: none;\r\n}\r\n\r\n#ErrorSign{\r\n    font-size: 25px;\r\n    margin-left: 21%;\r\n    margin-top: 1%;\r\n}\r\n\r\n#hook {\r\n    height: 100px;\r\n    min-height: 50px;\r\n}\r\n\r\n#review {\r\n    height: 300px;\r\n    min-height: 50px;\r\n}\r\n\r\n#WriteReviewComponent {\r\n    width: 30%;\r\n    height: 720px;\r\n    background-color: #D04E33;\r\n    margin-top: 0px;\r\n    margin-left: 3%;\r\n    position: fixed;\r\n    padding-left: 10px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n}\r\n\r\n#AuthorContainer, #imageURLContainer {\r\n    width: 66%;\r\n    float: right;\r\n}\r\n\r\n#buttonsContainer, .fullRow, .fullRow > * {\r\n    width: 98%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#ScoreContainer, #typeContainer {\r\n    width: 23%;\r\n    min-width: 70px;\r\n}\r\n\r\n#starterFrom {\r\n    margin-top: 7%;\r\n}\r\n\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 49%;\r\n    text-decoration: none;\r\n}\r\n\r\n.LabelStyle {\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.mainHandler {\r\n    display: inline-block;\r\n}\r\n\r\n.SubmitSign {\r\n    font-size: 25px;\r\n    margin-left: 40%;\r\n    margin-top: 2%;   \r\n}\r\n\r\nfigure {\r\n    margin: 5px;\r\n    display: inline-block;\r\n}\r\n\r\nfigure > input {\r\n    border: 0px;\r\n}\r\n\r\ntextarea {\r\n   resize: none;\r\n}\r\n\r\ninput, select {\r\n    height: 30px;\r\n}\r\n\r\n@media screen and (max-width: 1366px) {\r\n    #WriteReviewComponent {\r\n        position: relative;\r\n        width: 93%;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Update-review/update-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"starterFrom\"></div>\n<div id=\"WriteReviewComponent\" class=\"mainHandler\">\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    <figure id=\"typeContainer\">\n      <div class=\"LabelStyle\">Type</div>\n        <select name=\"type\" class=\"BigInputs\" id=\"Type\" [(ngModel)]=\"defaultValue\" class=\"fullRow\">\n          <option *ngFor = \"let type of types\" [value] = \"type\">{{type}}</option>\n        </select>\n    </figure>\n    <figure id=\"imageURLContainer\"  class=\"fullRow\">\n      <div class=\"LabelStyle\">ImgUrl</div>\n            <input type=\"text\" name=\"imgUrl\" class=\"BigInputs\" [(ngModel)]=\"review.imgUrl\" required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow\">\n       <div class=\"LabelStyle\">Headline</div><input type=\"text\" name=\"headline\" class=\"BigInputs\" id=\"Headline\" [(ngModel)]=\"review.headline\"\n            required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow expanded\">\n      <div class=\"LabelStyle\">Hook</div>\n      <textarea type=\"text\" name=\"hook\" class=\"BigInputs\" id=\"hook\" [(ngModel)]=\"review.hook\" wrap=\"hard\"\n        required></textarea>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow expanded\">\n      <div class=\"LabelStyle\">Review</div>\n      <textarea type=\"text\" name=\"review\" class=\"BigInputs\" id=\"review\" [(ngModel)]=\"review.review\" wrap=\"hard\"\n        required></textarea>\n    </figure>\n    <br class=\"newRow\">\n\n\n    <figure  id = \"ScoreContainer\">\n      <div class=\"LabelStyle\">Score</div><input id=\"score\" #score (keyup)=\"ScoreChecker(score.value)\" type=\"number\"\n        min=\"1\" max=\"100\" name=\"score\" class=\"fullRow\" [(ngModel)]=\"review.score\" required>\n    </figure>\n    <figure id = \"AuthorContainer\">\n      <div class=\"LabelStyle\">Author</div> <input type=\"text\" name=\"author\" class=\"fullRow\" [(ngModel)]=\"review.author\"\n        required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure id=\"buttonsContainer\">\n        <input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Update!\">\n        <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\">\n    </figure>\n\n    <div [hidden]=\"PublishFlag\" class=\"SubmitSign\"> Updated! </div>\n    <div [hidden]=\"ErrorFlag\" id=\"ErrorSign\"> There was some kind of error! </div>\n  </form>\n</div>\n\n<app-preview-table [review]=\"review\" class=\"mainHandler\" id=\"shower\"></app-preview-table>"

/***/ }),

/***/ "../../../../../src/app/Update-review/update-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_review_model__ = __webpack_require__("../../../../../src/app/_Model/review.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateReviewComponent = (function () {
    function UpdateReviewComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
        this.review = new __WEBPACK_IMPORTED_MODULE_3__Model_review_model__["a" /* Review */]();
        this.PublishFlag = true;
        this.ErrorFlag = true;
        this.defaultValue = "Game";
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.getById(this.router.url.substring(this.router.url.lastIndexOf("/") + 1));
        this.types = ["Game", "Movie", "Music", "Book"];
    }
    UpdateReviewComponent.prototype.ngOnInit = function () {
    };
    UpdateReviewComponent.prototype.getById = function (id) {
        var _this = this;
        this.reviewService.getById("/review/" + id)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (response) {
            _this.review.review = response.review;
            _this.review.hook = response.hook;
            _this.review.author = response.author;
            _this.review.imgUrl = response.imgUrl;
            _this.review.score = response.score;
            _this.review.headline = response.headline;
            _this.review._id = response._id;
            return;
        }, function (error) {
            var body = error._body;
            _this.ErrorFlag = false;
            setTimeout(function () { _this.ErrorFlag = true; }, 4000);
        });
    };
    UpdateReviewComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        f.value.userId = this.user._id;
        f.value.id = this.review._id;
        this.reviewService.update(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (response) {
            _this.PublishFlag = false;
            setTimeout(function () { _this.PublishFlag = true; }, 4000);
        }, function (error) {
            var body = error._body;
            _this.ErrorFlag = false;
            setTimeout(function () { _this.ErrorFlag = true; }, 4000);
        });
    };
    UpdateReviewComponent.prototype.ScoreChecker = function (score) {
        if (score > 100) {
            this.review.score = "100";
        }
        else if (score < 0) {
            this.review.score = "0";
        }
        ;
    };
    UpdateReviewComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return UpdateReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], UpdateReviewComponent.prototype, "f", void 0);
UpdateReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-update-review",
        template: __webpack_require__("../../../../../src/app/Update-review/update-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Update-review/update-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UpdateReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=update-review.component.js.map

/***/ }),

/***/ "../../../../../src/app/WriteReview/write.review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buttonsContainer {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n#Delete {\r\n    background:  #D04E33;\r\n\r\n}\r\n\r\n#Delete:hover {\r\n  background: #ba3306;\r\n  text-decoration: none;\r\n}\r\n\r\n#ErrorSign{\r\n    font-size: 25px;\r\n    margin-left: 21%;\r\n    margin-top: 1%;\r\n}\r\n\r\n#hook {\r\n    height: 100px;\r\n    min-height: 50px;\r\n}\r\n\r\n#review {\r\n    height: 300px;\r\n    min-height: 50px;\r\n}\r\n\r\n#WriteReviewComponent {\r\n    width: 30%;\r\n    height: 720px;\r\n    background-color: #D04E33;\r\n    margin-top: 0px;\r\n    margin-left: 3%;\r\n    position: fixed;\r\n    padding-left: 10px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n}\r\n\r\n#AuthorContainer, #imageURLContainer {\r\n    width: 66%;\r\n    float: right;\r\n}\r\n\r\n#buttonsContainer, .fullRow, .fullRow > * {\r\n    width: 98%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#ScoreContainer, #typeContainer {\r\n    width: 23%;\r\n    min-width: 70px;\r\n}\r\n\r\n#starterFrom {\r\n    margin-top: 7%;\r\n}\r\n\r\n#Submit {\r\n    background: #049372;\r\n}\r\n#Submit:hover {\r\n  background: #0a700a;\r\n  text-decoration: none;\r\n}\r\n\r\n.InputButton {\r\n    box-shadow: 0px 1px 3px #000000;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #EEEEEE;\r\n    font-size: 20px;\r\n    padding: 0px 20px 10px 20px;\r\n    width: 49%;\r\n    text-decoration: none;\r\n}\r\n\r\n.LabelStyle {\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.mainHandler {\r\n    display: inline-block;\r\n}\r\n\r\n.SubmitSign {\r\n    font-size: 25px;\r\n    margin-left: 40%;\r\n    margin-top: 2%;   \r\n}\r\n\r\nfigure {\r\n    margin: 5px;\r\n    display: inline-block;\r\n}\r\n\r\nfigure > input {\r\n    border: 0px;\r\n}\r\n\r\ntextarea {\r\n   resize: none;\r\n}\r\n\r\ninput, select {\r\n    height: 30px;\r\n}\r\n\r\n@media screen and (max-width: 1366px) {\r\n    #WriteReviewComponent {\r\n        position: relative;\r\n        width: 93%;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/WriteReview/write.review.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"starterFrom\"></div>\n<div id=\"WriteReviewComponent\" class=\"mainHandler\">\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    <figure id=\"typeContainer\">\n      <div class=\"LabelStyle\">Type</div>\n        <select name=\"type\" class=\"BigInputs\" id=\"Type\" [(ngModel)]=\"defaultValue\" class=\"fullRow\">\n          <option *ngFor = \"let type of types\" [value] = \"type\">{{type}}</option>\n        </select>\n    </figure>\n    <figure id=\"imageURLContainer\"  class=\"fullRow\">\n      <div class=\"LabelStyle\">ImgUrl</div>\n            <input type=\"text\" name=\"imgUrl\" class=\"BigInputs\" [(ngModel)]=\"review.imgUrl\" required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow\">\n       <div class=\"LabelStyle\">Headline</div><input type=\"text\" name=\"headline\" class=\"BigInputs\" id=\"Headline\" [(ngModel)]=\"review.headline\"\n            required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow expanded\">\n      <div class=\"LabelStyle\">Hook</div>\n      <textarea type=\"text\" name=\"hook\" class=\"BigInputs\" id=\"hook\" [(ngModel)]=\"review.hook\" wrap=\"hard\"\n        required></textarea>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure class=\"fullRow expanded\">\n      <div class=\"LabelStyle\">Review</div>\n      <textarea type=\"text\" name=\"review\" class=\"BigInputs\" id=\"review\" [(ngModel)]=\"review.review\" wrap=\"hard\"\n        required></textarea>\n    </figure>\n    <br class=\"newRow\">\n    \n    <figure  id = \"ScoreContainer\">\n      <div class=\"LabelStyle\">Score</div><input id=\"score\" #score (keyup)=\"ScoreChecker(score.value)\" type=\"number\"\n        min=\"1\" max=\"100\" name=\"score\" class=\"fullRow\" [(ngModel)]=\"review.score\" required>\n    </figure>\n    <figure id = \"AuthorContainer\">\n      <div class=\"LabelStyle\">Author</div> <input type=\"text\" name=\"author\" class=\"fullRow\" [(ngModel)]=\"review.author\"\n        required>\n    </figure>\n    <br class=\"newRow\">\n\n    <figure id=\"buttonsContainer\">\n        <input type=\"submit\" id=\"Submit\" class=\"InputButton\" value=\"Publish!\">\n        <input type=\"reset\" id=\"Delete\" class=\"InputButton\" value=\"Clear\">\n    </figure>\n\n    <div [hidden]=\"PublishFlag\" class=\"SubmitSign\"> Published! </div>\n    <div [hidden]=\"ErrorFlag\" id=\"ErrorSign\"> There was some kind of error! </div>\n  </form>\n</div>\n\n<app-preview-table [review]=\"review\" class=\"mainHandler\" id=\"shower\"></app-preview-table>"

/***/ }),

/***/ "../../../../../src/app/WriteReview/write.review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_review_model__ = __webpack_require__("../../../../../src/app/_Model/review.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WriteReviewComponent = (function () {
    function WriteReviewComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
        this.review = new __WEBPACK_IMPORTED_MODULE_3__Model_review_model__["a" /* Review */]();
        this.PublishFlag = true;
        this.ErrorFlag = true;
        this.defaultValue = "Game";
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.review.review = "The Review";
        this.review.hook =
            "This is a short summary of the story that is intended to convince the reader to check your review out. It should be just one paragraph";
        this.review.author = "Write your name here please!";
        this.review.imgUrl = "../../../assets/images/ReviewImage.png";
        this.review.score = "10";
        this.review.headline = "This will be your title and the circle to the left is the score!";
        this.types = ["Game", "Movie", "Music", "Book"];
    }
    WriteReviewComponent.prototype.ngOnInit = function () {
    };
    WriteReviewComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        f.value.userId = this.user._id;
        this.reviewService.create(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (response) {
            _this.PublishFlag = false;
            setTimeout(function () { _this.PublishFlag = true; }, 4000);
        }, function (error) {
            var body = error._body;
            _this.ErrorFlag = false;
            setTimeout(function () { _this.ErrorFlag = true; }, 4000);
        });
    };
    WriteReviewComponent.prototype.ScoreChecker = function (score) {
        if (score > 100) {
            this.review.score = "100";
        }
        else if (score < 0) {
            this.review.score = "0";
        }
        ;
    };
    WriteReviewComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return WriteReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WriteReviewComponent.prototype, "f", void 0);
WriteReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-write-review",
        template: __webpack_require__("../../../../../src/app/WriteReview/write.review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/WriteReview/write.review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WriteReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=write.review.component.js.map

/***/ }),

/***/ "../../../../../src/app/_Model/review.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = (function () {
    function Review() {
    }
    return Review;
}());

//# sourceMappingURL=review.model.js.map

/***/ }),

/***/ "../../../../../src/app/_Model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

;
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.item {\r\n  margin-top: auto\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap\">\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer class = \"item\"></app-footer>\n</div>"

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-root",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Navigation_nav_component__ = __webpack_require__("../../../../../src/app/Navigation/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Reviews_reviews_component__ = __webpack_require__("../../../../../src/app/Reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_search_service__ = __webpack_require__("../../../../../src/app/Services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_canDeactivate_service__ = __webpack_require__("../../../../../src/app/Services/canDeactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_authGuard_service__ = __webpack_require__("../../../../../src/app/Services/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_jwt_service__ = __webpack_require__("../../../../../src/app/Services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_PassGuard_service__ = __webpack_require__("../../../../../src/app/Services/PassGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_dog_service__ = __webpack_require__("../../../../../src/app/Services/dog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_admin_guard_service__ = __webpack_require__("../../../../../src/app/Services/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Register_register_component__ = __webpack_require__("../../../../../src/app/Register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__WriteReview_write_review_component__ = __webpack_require__("../../../../../src/app/WriteReview/write.review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Profile_profile_component__ = __webpack_require__("../../../../../src/app/Profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__child_routing__ = __webpack_require__("../../../../../src/app/child.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Review_review_component__ = __webpack_require__("../../../../../src/app/Review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__PartialComponents_preview_table_preview_table_component__ = __webpack_require__("../../../../../src/app/PartialComponents/preview-table/preview-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Password_password_component__ = __webpack_require__("../../../../../src/app/Password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__PartialComponents_Profile_nav_profile_nav_component__ = __webpack_require__("../../../../../src/app/PartialComponents/Profile-nav/profile-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__profile_reviews_Profile_reviews_component__ = __webpack_require__("../../../../../src/app/profile-reviews/Profile-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__profile_stress_Profile_stress_component__ = __webpack_require__("../../../../../src/app/profile-stress/Profile-stress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Update_review_update_review_component__ = __webpack_require__("../../../../../src/app/Update-review/update-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Profile_users_profile_users_component__ = __webpack_require__("../../../../../src/app/Profile-users/profile-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Code_code_component__ = __webpack_require__("../../../../../src/app/Code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Search_search_component__ = __webpack_require__("../../../../../src/app/Search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Profile_admin_reviews_profile_admin_reviews_component__ = __webpack_require__("../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Navigation_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__Login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_23__Register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__WriteReview_write_review_component__["a" /* WriteReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_27__Review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__PartialComponents_preview_table_preview_table_component__["a" /* PreviewTableComponent */],
            __WEBPACK_IMPORTED_MODULE_29__Password_password_component__["a" /* PasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_30__PartialComponents_Profile_nav_profile_nav_component__["a" /* ProfileNavComponent */],
            __WEBPACK_IMPORTED_MODULE_31__profile_reviews_Profile_reviews_component__["a" /* ProfileReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__profile_stress_Profile_stress_component__["a" /* ProfileStressComponent */],
            __WEBPACK_IMPORTED_MODULE_33__Update_review_update_review_component__["a" /* UpdateReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__Profile_users_profile_users_component__["a" /* ProfileUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_35__Code_code_component__["a" /* CodeComponent */],
            __WEBPACK_IMPORTED_MODULE_36__Search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_37__Profile_admin_reviews_profile_admin_reviews_component__["a" /* ProfileAdminReviewsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* appRoute */]),
            __WEBPACK_IMPORTED_MODULE_26__child_routing__["a" /* ChildRoutesModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__Services_auth_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_12__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__Services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_14__Services_canDeactivate_service__["a" /* ConfirmDeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_15__Services_authGuard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_16__Services_jwt_service__["a" /* JWTService */],
            __WEBPACK_IMPORTED_MODULE_17__Services_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_18__Services_PassGuard_service__["a" /* PassGuardService */],
            __WEBPACK_IMPORTED_MODULE_19__Services_dog_service__["a" /* DogService */],
            __WEBPACK_IMPORTED_MODULE_20__Services_admin_guard_service__["a" /* AdminGuardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Register_register_component__ = __webpack_require__("../../../../../src/app/Register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Review_review_component__ = __webpack_require__("../../../../../src/app/Review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Password_password_component__ = __webpack_require__("../../../../../src/app/Password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Code_code_component__ = __webpack_require__("../../../../../src/app/Code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_PassGuard_service__ = __webpack_require__("../../../../../src/app/Services/PassGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_canDeactivate_service__ = __webpack_require__("../../../../../src/app/Services/canDeactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoute; });








var appRoute = [
    { path: "review/:id", component: __WEBPACK_IMPORTED_MODULE_3__Review_review_component__["a" /* ReviewComponent */], pathMatch: "full" },
    { path: "password", component: __WEBPACK_IMPORTED_MODULE_4__Password_password_component__["a" /* PasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__Services_PassGuard_service__["a" /* PassGuardService */]], pathMatch: "full" },
    { path: "code", component: __WEBPACK_IMPORTED_MODULE_5__Code_code_component__["a" /* CodeComponent */], pathMatch: "full" },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_2__Register_register_component__["a" /* RegisterComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__Services_canDeactivate_service__["a" /* ConfirmDeactivateGuard */]], pathMatch: "full" },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_1__Login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_0__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/child.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__ = __webpack_require__("../../../../../src/app/Reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_reviews_Profile_reviews_component__ = __webpack_require__("../../../../../src/app/profile-reviews/Profile-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_stress_Profile_stress_component__ = __webpack_require__("../../../../../src/app/profile-stress/Profile-stress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Profile_users_profile_users_component__ = __webpack_require__("../../../../../src/app/Profile-users/profile-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Profile_profile_component__ = __webpack_require__("../../../../../src/app/Profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Update_review_update_review_component__ = __webpack_require__("../../../../../src/app/Update-review/update-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WriteReview_write_review_component__ = __webpack_require__("../../../../../src/app/WriteReview/write.review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Search_search_component__ = __webpack_require__("../../../../../src/app/Search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Profile_admin_reviews_profile_admin_reviews_component__ = __webpack_require__("../../../../../src/app/Profile-admin-reviews/profile-admin-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__ = __webpack_require__("../../../../../src/app/Services/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_admin_guard_service__ = __webpack_require__("../../../../../src/app/Services/admin-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ChildRoutes = [
    {
        path: "home",
        children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            },
            {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            }
        ]
    },
    {
        path: "games", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            },
            {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            }
        ]
    },
    {
        path: "movies", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "music", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "books", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_2__Reviews_reviews_component__["a" /* ReviewsComponent */],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "profile", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_6__Profile_profile_component__["a" /* ProfileComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]],
            }, {
                path: "info",
                component: __WEBPACK_IMPORTED_MODULE_6__Profile_profile_component__["a" /* ProfileComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]],
            }, {
                path: "reviews",
                component: __WEBPACK_IMPORTED_MODULE_3__profile_reviews_Profile_reviews_component__["a" /* ProfileReviewsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]],
            }, {
                path: "stress",
                component: __WEBPACK_IMPORTED_MODULE_4__profile_stress_Profile_stress_component__["a" /* ProfileStressComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]],
            }, {
                path: "users",
                component: __WEBPACK_IMPORTED_MODULE_5__Profile_users_profile_users_component__["a" /* ProfileUsersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_12__Services_admin_guard_service__["a" /* AdminGuardService */]],
            }, {
                path: "adminReviews",
                component: __WEBPACK_IMPORTED_MODULE_10__Profile_admin_reviews_profile_admin_reviews_component__["a" /* ProfileAdminReviewsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_12__Services_admin_guard_service__["a" /* AdminGuardService */]],
            }
        ]
    }, {
        path: "write", children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_8__WriteReview_write_review_component__["a" /* WriteReviewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]]
            },
            {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_7__Update_review_update_review_component__["a" /* UpdateReviewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__Services_authGuard_service__["a" /* AuthGuardService */]]
            }
        ]
    }, {
        path: "search",
        children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_9__Search_search_component__["a" /* SearchComponent */],
            },
            {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_9__Search_search_component__["a" /* SearchComponent */],
            }
        ]
    },
];
var ChildRoutesModule = (function () {
    function ChildRoutesModule() {
    }
    return ChildRoutesModule;
}());
ChildRoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(ChildRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ChildRoutesModule);

//# sourceMappingURL=child.routing.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    background-color: #1C2021;\r\n    text-align: center;\r\n    padding-right: 12%;\r\n    padding-left: 4%;\r\n    box-sizing: border-box;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\nfooter .FooterText {\r\n    display: none;\r\n    width: 10px;\r\n}\r\n\r\nfooter .Social:focus {\r\n  outline: none;\r\n}\r\n\r\nfooter .Top {\r\n    font-size: 20px;\r\n    color: #EEEEEE;\r\n    cursor: pointer;\r\n}\r\n\r\nfooter .fa-facebook-official {\r\n    color:#3b5998;\r\n}\r\n\r\nfooter .fa-twitter-square{\r\n    color:#4099FF;\r\n}\r\n\r\nfooter .fa-youtube-play{\r\n    color:#c4302b;\r\n}\r\n\r\n.Icon { \r\n    margin-top: 20%;\r\n    cursor: pointer;\r\n    display: inline-block; \r\n}\r\n\r\nIcons, .TextDiv {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id = \"Footer\">\n    <div class=\"TextDiv\">\n        <p class=\"Top\" (click)=\"toggleState()\">About us</p>\n        <p [ngClass]=\"FooterText\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti omnis tenetur amet odio ab id </p>\n    </div>\n    <div class=\"TextDiv\">\n        <p class=\"Top\" (click)=\"toggleState()\">Contacts</p>\n        <p [ngClass]=\"FooterText\">E-mail: email@gmail.com</p>\n    </div>\n    <div class=\"TextDiv\">\n        <p class=\"Top\" (click)=\"toggleState()\">Address</p>\n        <p [ngClass]=\"FooterText\">Somewhere in space and time</p>\n    </div>\n    <div class = \"Icons\">\n    <div class=\"Icon\">\n        <a href=\"http://www.facebook.com/\">\n        <i class=\"fa fa-facebook-official fa-2x\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n    <div class=\"Icon\">\n        <a href=\"http://www.twitter.com/\">\n        <i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n    <div class=\"Icon\">\n        <a href=\"http://www.youtube.com/\">\n        <i class=\"fa fa-youtube-play fa-2x\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.FooterText = "FooterText";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.toggleState = function () {
        if (this.FooterText === "FooterText") {
            this.FooterText = "";
        }
        else {
            this.FooterText = "FooterText";
        }
        ;
        setTimeout(function () { return window.scrollBy(0, 100); }, 100);
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-footer",
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#NotFound{\r\n    background-color: #D04E33;\r\n    margin-left: 32%;\r\n    text-align: center;\r\n    width: 800px;\r\n    font-size: 20px;\r\n    margin-top: 5%;\r\n\r\n}\r\n#Header{\r\n    font-size: 40px;\r\n    padding-top: 1%;\r\n    \r\n}\r\ni {\r\n    text-align: left;\r\n}\r\nli {\r\n    font-size: 150%;\r\n    list-style-type: none;\r\n    padding-right: 3%;\r\n    padding-bottom: 1%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"NotFound\">\n    <h1 id = \"Header\">The page was not found or you are unauthorized to access it!</h1>\n    <i class=\"fa fa-frown-o fa-5x\" aria-hidden=\"true\"></i>\n    <ul>\n        <li>You can try to:</li>\n        <li>Go back to the home page!</li>\n        <li>Register and Login </li>        \n        <li>Use the search bar!</li>\n        <li>Use the navigation</li>\n    </ul>\n</div>\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-not-found",
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-reviews/Profile-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_review_service__ = __webpack_require__("../../../../../src/app/Services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileReviewsComponent = (function () {
    function ProfileReviewsComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
        this.page = "1";
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ProfileReviewsComponent.prototype.ngOnInit = function () {
        this.MyInit();
    };
    ProfileReviewsComponent.prototype.More = function () {
        var _this = this;
        this.page = (+this.page + 1).toString();
        this.reviewService.getById(this.router.url + "/" + this.user._id + "/" + this.page)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            var articles = result;
            _this.articles.push.apply(_this.articles, articles);
        });
    };
    ProfileReviewsComponent.prototype.MyInit = function () {
        var _this = this;
        this.reviewService.getById(this.router.url + "/" + this.user._id + "/1")
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.articles = result;
        });
    };
    ProfileReviewsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ProfileReviewsComponent;
}());
ProfileReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-profile-reviews",
        template: __webpack_require__("../../../../../src/app/profile-reviews/profile-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-reviews/profile-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_review_service__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileReviewsComponent);

var _a, _b;
//# sourceMappingURL=Profile-reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-reviews/profile-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 6%;\r\n    font-size: 20px;\r\n    margin-right: 60px;\r\n}\r\n.InfoDiv{\r\n    float: left;\r\n    padding-left: 10%;\r\n    margin-right: 1%;\r\n    width: 21%;\r\n}\r\nul {\r\n    list-style: none;\r\n}\r\nul li {\r\n    width: 100%;\r\n    margin-left: 3%;\r\n    \r\n}\r\nli:focus {\r\n    outline: 0;\r\n}\r\n#ReviewsUl{\r\n    margin-left: 10%;\r\n}\r\n#moreIcon{\r\n    background-color: #1C2021;\r\n    text-align: center;\r\n    width: 20%;\r\n    margin-left: 47%;\r\n    cursor: pointer;\r\n    margin-bottom: 2%;\r\n        height: 40px;\r\n    \r\n}\r\n @media screen and (max-width: 1366px) {\r\n    .InfoDiv {\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    }\r\n     #moreIcon{\r\n        margin-right: 45%;\r\n    }\r\n    ul li {\r\n        margin-bottom: 3%;\r\n        float: right;\r\n        margin-right: 5%;\r\n    }\r\n   \r\n }\r\n @media screen and (max-width: 825px) {\r\n ul {\r\n     width: 100% !important;\r\n     margin-left: 0px !important;\r\n     padding: 0px;\r\n }\r\n ul li {\r\n     width: 100%;\r\n }\r\nfigure {\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left:4.9%;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-reviews/profile-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<figure class=\"container\">\n  <div class=\"InfoDiv\">\n    <h1>Your reviews</h1>\n    Edit or remove the reviews you have written! Or just look at them i don't know. <br>\n    <app-profile-nav></app-profile-nav>\n  </div>\n  <ul id=\"ReviewsUl\">\n    <li *ngFor=\"let article of articles\">    \n      <app-preview-table class=\"MyReviews\" [user] = \"user\" [review]=\"article\" (ReviewsChange)=\"MyInit()\"></app-preview-table>\n    </li>\n    <li id = \"moreIcon\"><i class=\"fa fa-chevron-down fa-2x\" (click) = \"More()\" aria-hidden=\"true\"></i></li>\n  </ul>\n</figure>"

/***/ }),

/***/ "../../../../../src/app/profile-stress/Profile-stress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_dog_service__ = __webpack_require__("../../../../../src/app/Services/dog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileStressComponent = (function () {
    function ProfileStressComponent(dogService) {
        this.dogService = dogService;
        this.currentDog = 0;
        this.flag = true;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.images = ["https://images4.alphacoders.com/227/thumb-1920-22714.jpg"];
        this.image = this.images[this.currentDog];
    }
    ProfileStressComponent.prototype.ngOnInit = function () {
        this.GetAll();
        this.Interval();
    };
    ProfileStressComponent.prototype.Click = function (id) {
        if (id === "Left") {
            this.currentDog--;
        }
        else {
            this.currentDog++;
        }
        if (this.currentDog === -1) {
            this.currentDog = this.images.length - 1;
        }
        else if (this.currentDog > this.images.length - 1) {
            this.currentDog = 0;
        }
        clearInterval(this.interval);
        this.Interval();
        this.image = this.images[this.currentDog];
    };
    ProfileStressComponent.prototype.Interval = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.currentDog++;
            if (_this.currentDog > _this.images.length - 1) {
                _this.currentDog = 0;
            }
            _this.image = _this.images[_this.currentDog];
        }, 5000);
    };
    ProfileStressComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        this.dogService.create(f.value)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (result) {
            _this.GetAll();
        });
    };
    ProfileStressComponent.prototype.GetAll = function () {
        var _this = this;
        this.dogService.getAll()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (results) {
            clearInterval(_this.interval);
            _this.Interval();
            var i = 0;
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                if (result.imgUrl === _this.images[i]) {
                    i++;
                    continue;
                }
                _this.images.push(result.imgUrl);
                i++;
            }
            if (_this.flag) {
                _this.flag = false;
                _this.currentDog = 0;
                _this.image = _this.images[0];
            }
            else {
                _this.currentDog = _this.images.length - 1;
                _this.image = _this.images[_this.images.length - 1];
            }
        });
    };
    ProfileStressComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ProfileStressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])("f"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileStressComponent.prototype, "f", void 0);
ProfileStressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: "app-profile-stress",
        template: __webpack_require__("../../../../../src/app/profile-stress/profile-stress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-stress/profile-stress.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__Services_dog_service__["a" /* DogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_dog_service__["a" /* DogService */]) === "function" && _b || Object])
], ProfileStressComponent);

var _a, _b;
//# sourceMappingURL=Profile-stress.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-stress/profile-stress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 6%;\r\n    font-size: 20px;\r\n}\r\n.InfoDiv{\r\n    float: left;\r\n    padding-left: 10%;\r\n    margin-right: 1%;\r\n    width: 21%;\r\n}\r\nimg{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.imgContainer {\r\n    width: 58%;\r\n    height: 700px;\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 10%;\r\n}\r\nbutton:focus {\r\n    outline: 0;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    background: none;\r\n    border: none;\r\n    height: 100%;\r\n    color: #EEEEEE;\r\n    border-collapse: collapse;\r\n    background-color: #1C2021;\r\n    font-weight: bolder;\r\n}\r\n input{\r\n  font-size:18px;\r\n  display:block;\r\n  width:100%;\r\n  border:none;\r\n  color: #EEEEEE;\r\n  border-bottom: 1px solid #EEEEEE;\r\n  background: transparent;  \r\n  margin-top: 5%;\r\n}\r\n input[type=submit] {\r\n  font-size:18px;\r\n  width:70%;\r\n  border:none;\r\n  margin-left: 14%;\r\n  margin-top: 5%;\r\n  cursor: pointer;\r\n}\r\n  input:focus{ outline:none; }\r\n\r\nform {\r\n    text-align: center;\r\n    width: 70%;\r\n}\r\n.AddedText{\r\n    font-size: 25px;\r\n\r\n}\r\n @media screen and (max-width: 1366px) {\r\n    .InfoDiv {\r\n    width: 100%;\r\n    margin-right: 0%;\r\n    }\r\n    .imgContainer {\r\n        margin-top: 3%;\r\n        width: 80%;\r\n        margin-bottom: 3%;\r\n        float: right;\r\n        margin-right: 10%;\r\n        margin-left: 10%;   \r\n    }\r\n    .DogInput{\r\n        margin-left: 7%;\r\n    }\r\n }\r\n@media screen and (max-width: 780px) {\r\n    .imgContainer {\r\n        height: 400px;\r\n    }\r\n }\r\n@media screen and (max-width: 450px) {\r\n    .imgContainer {\r\n        height:227px;\r\n    }\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-stress/profile-stress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"InfoDiv\">\n    <h1>Stress!!!!!!!!!</h1>\n    If you are feeling stressed out this is the place to be. Look at some puppies! <br>\n    <app-profile-nav class = \"DogsInlineBlock\"></app-profile-nav>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class = \"DogInput\">\n      Add doggo <input type=\"text\" name=\"imgUrl\" maxautofocus ngModel required>\n      <input type=\"Submit\">\n    </form>\n\n  </div>\n  <div class = \"imgContainer\">\n  <button type=\"button\" id = \"LeftButton\" (click)=\"Click('Left')\"><i class=\"fa fa-chevron-left fa-2x\" aria-hidden=\"true\"></i></button>\n  <img [src]=\"image\" alt=\"dog\"><button type=\"button\" (click)=\"Click('Right')\"><i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i></button>\n  </div>\n</div>"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
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