(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title text-center>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"secondary\">\r\n\r\n  <div class=\"cloud-background\">\r\n\r\n    <div class=\"ion-text-center logo\">\r\n      <strong>A-care</strong>\r\n    </div>\r\n\r\n    <form (ngSubmit)=\"login()\" class=\"div_login\">\r\n      <ion-item class=\"input_login\">\r\n        <ion-label>E-mail:</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Digite seu e-mail...\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input_login\">\r\n        <ion-label>Senha:</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"senha\" placeholder=\"Digite sua senha...\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-button type=\"submit\" class=\"div_botao\">Entrar</ion-button>\r\n      <br>\r\n      <ion-label class=\"div_text\">Não possui conta?</ion-label>\r\n      <ion-button class=\"div_botao\" routerLink=\"/cadastro\">Cadastre-se</ion-button>\r\n\r\n    </form>\r\n    <div>\r\n      <p *ngIf=\"errorMessage.length > 0\" class=\"form-group\">\r\n        {{errorMessage}}</p>\r\n\r\n      <p *ngIf=\"error.message.length > 0\" class=\"form-group\">\r\n        {{error.message}} </p>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cloud-background {\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(240, 248, 255, 0.8) 0%, rgba(240, 248, 255, 0.8) 100%), url(\"https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2018/01/field-clouds-sky-earth-46160.jpg\") repeat 0 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 3em;\n}\n\n.div_login {\n  width: 70%;\n  margin: auto;\n  margin-top: 25%;\n}\n\n.input_login {\n  border-style: solid;\n  border-color: var(--ion-color-primary);\n  border-width: 1px;\n  border-radius: 20px;\n  margin-top: 8px;\n}\n\n.div_botao {\n  margin: 0 auto;\n  display: block;\n  width: 200px;\n  margin-top: 12px;\n}\n\n.logo {\n  font-size: 50px;\n  color: #483D8B;\n}\n\n.form-group {\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2em;\n  background-color: #6666;\n  text-align: center;\n  font-weight: bold;\n  padding: 1em;\n  border-radius: 25px;\n  transition: 0.3s;\n}\n\n.div_text {\n  margin: 0 auto;\n  display: block;\n  width: 140px;\n  margin-top: 12px;\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLDZOQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG91ZC1iYWNrZ3JvdW5ke1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjQwLCAyNDgsIDI1NSwgMC44KSAwJSxyZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuOCkgMTAwJSksIHVybChcImh0dHBzOi8vcDJkN3g4eDIuc3RhY2twYXRoY2RuLmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDEvZmllbGQtY2xvdWRzLXNreS1lYXJ0aC00NjE2MC5qcGdcIikgcmVwZWF0IDAgMDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxufVxyXG5cclxuLmRpdl9sb2dpbntcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0X2xvZ2lue1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpdl9ib3Rhb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAubG9nb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjNDgzRDhCO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICB9XHJcbiAgLmRpdl90ZXh0e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LoginPage = class LoginPage {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.email = "";
        this.password = "";
        this.errorMessage = ''; // validation error handle
        this.error = { name: '', message: '' }; // for firbase error handle
    }
    ngOnInit() {
    }
    clearErrorMessage() {
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    }
    login() {
        this.clearErrorMessage();
        if (this.validateForm(this.email, this.password)) {
            this.authservice.loginWithEmail(this.email, this.password)
                .then(() => {
                this.router.navigate(['/home']);
            }).catch(_error => {
                this.error = _error;
                this.router.navigate(['/login']);
            });
        }
    }
    validateForm(email, password) {
        if (email.length === 0) {
            this.errorMessage = "Por favor insira seu email";
            return false;
        }
        if (password.length === 0) {
            this.errorMessage = "Por favor insira sua senha";
            return false;
        }
        if (password.length < 6) {
            this.errorMessage = "Sua senha deve ter no mínimo 6 caracteres";
            return false;
        }
        this.errorMessage = '';
        return true;
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map