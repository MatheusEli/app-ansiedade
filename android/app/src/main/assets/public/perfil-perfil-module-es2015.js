(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/perfil/perfil.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/perfil/perfil.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title><strong>Perfil</strong></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"top-div\">\r\n    <ion-avatar id=\"perfil-avatar\">\r\n      <img [src]=\"imagemUsuario\t||\t'../../assets/no-image.jpg'\">\r\n    </ion-avatar>\r\n  </div>\r\n\r\n  <div id=\"bottom-div\">\r\n    <div class=\"user-data\">Nome de Usuário: {{nomeUsuario}}</div>\r\n    <div class=\"user-data\">E-mail: {{emailUsuario}}</div>\r\n    <div class=\"user-data\">Idade: {{idadeUsuario}}</div>\r\n    <div class=\"user-data\">Sexo: {{sexoUsuario}}</div>\r\n\r\n    <div class=\"user-data ion-text-center\">\r\n      <ion-button class=\"logout botao-sair\" color=\"vermelho\" (click)=\"sair()\"> Desconectar\r\n        <ion-icon name=\"log-out-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/perfil/perfil-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/perfil/perfil-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/home/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/home/perfil/perfil.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/perfil/perfil.module.ts ***!
  \**********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/home/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/home/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/home/perfil/perfil.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/perfil/perfil.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logout {\n  color: #e60f0f;\n}\n\n#top-div {\n  width: 100%;\n  height: 40%;\n  background-color: #eceff3;\n}\n\n#bottom-div {\n  width: 100%;\n  height: 300px;\n  background-color: white;\n  padding: 30px;\n}\n\n#perfil-avatar {\n  width: 130px;\n  height: 130px;\n  margin: auto;\n  line-height: 380px;\n}\n\n.user-data {\n  height: 25%;\n  border-bottom: solid 1px #d3d3d9;\n  background-color: white;\n  padding: 10px;\n}\n\nion-fab {\n  position: relative;\n  top: 20px;\n  right: 50px;\n}\n\n.botao-sair {\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRztFQUNDLGNBQUE7QUFDSjs7QUFFRztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ047O0FBRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUVJO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ047O0FBRUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ047O0FBQ0k7RUFDRSxZQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9ob21lL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLmxvZ291dCB7XHJcbiAgICBjb2xvcjogI2U2MGYwZjtcclxuICAgfVxyXG5cclxuICAgI3RvcC1kaXZ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2JvdHRvbS1kaXZ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3BlcmZpbC1hdmF0YXJ7XHJcbiAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51c2VyLWRhdGF7XHJcbiAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2QzZDNkOTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1mYWJ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICByaWdodDogNTBweDtcclxuICAgIH0gXHJcbiAgICAuYm90YW8tc2FpcntcclxuICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/home/perfil/perfil.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/perfil/perfil.page.ts ***!
  \********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");





let PerfilPage = class PerfilPage {
    constructor(router, userService, auth) {
        this.router = router;
        this.userService = userService;
        this.auth = auth;
        this.nomeUsuario = " ";
        this.profissaoUsuario = " ";
        this.sexoUsuario = " ";
        this.idadeUsuario = 0;
        this.emailUsuario = " ";
    }
    ngOnInit() {
        this.usuarios$ = this.userService.list();
        this.usuarios$.subscribe(val => val.map(user => {
            if (user.email == this.auth.currentUserName) {
                this.usuarioLogado = user;
                this.nomeUsuario = this.usuarioLogado.nome;
                this.profissaoUsuario = this.usuarioLogado.profissao;
                this.sexoUsuario = this.usuarioLogado.sexo;
                this.idadeUsuario = this.usuarioLogado.idade;
                this.emailUsuario = this.usuarioLogado.email;
                this.imagemUsuario = this.usuarioLogado.foto;
            }
        }));
    }
    sair() {
        this.auth.singout();
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/home/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map