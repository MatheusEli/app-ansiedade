(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sobre/sobre.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/sobre/sobre.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title><strong>Sobre</strong></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-text>\r\n    <h2>Motivação</h2>\r\n  </ion-text>\r\n\r\n  <ion-text color=\"danger\" class = \"ion-margin-bottom\">\r\n    <p>\r\n      Um App criado por 5 estudantes com o intuito de ter um local onde os usuarios com\r\n      diagnostico de ansiedade possam interagir com médicos e outras pessoas.\r\n      As pessoas precisam de um sistema que consiga \r\n      Auxiliar no tratamento de Ansiedade, na vida social e no relaxamento. \r\n    </p>\r\n  </ion-text>\r\n\r\n<!--   <ion-row class = \"ion-margin-bottom\">\r\n    <ion-col *ngFor = \"let i of [1,2,3,4,5]\">\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img [src]=\"'https://randomuser.me/api/portraits/men/'+i+'.jpg'\" alt=\"men\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <ion-row class = \"ion-margin-bottom\">\r\n    <ion-col>\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img src=\"./assets/img/daniel.jpg\" alt=\"daniel\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img src=\"./assets/img/gabriel.jpg\" alt=\"gabriel\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img src=\"./assets/img/matheus.jpg\" alt=\"matheus\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img src=\"./assets/img/victor.jpg\" alt=\"victor\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-avatar class = \"user-avatar\">\r\n        <img src=\"./assets/img/zhou.jpg\" alt=\"zhou\">\r\n      </ion-avatar>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-card class = \"ion-no-margin\">\r\n    <img class = \"imagem-card\" src=\"https://www.delas.pt/files/2020/03/iStock-521815364-1200x675.jpg\" />\r\n    <ion-card-content>\r\n      Segundo levantamento da OMS (2016) cerca de 33% da População mundial \r\n      sofre de ansiedade e o Brasil foi considerado o segundo \r\n      Maior país de pessoas ansiosas em 2019.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-text>\r\n    <h2>Funcionalidades do App</h2>\r\n  </ion-text>\r\n\r\n  <ion-text color=\"danger\">\r\n    <p>\r\n      O sistema conta com as funcionalidades pensadas \r\n      para pessoas como você que quer se prevenir e cuidar da Ansiedade, \r\n      como o Fórum um local onde se pode socializar e conversar com várias\r\n      pessoas incluindo noticias referente a súde e bem-estar. \r\n    </p>\r\n  </ion-text>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/sobre/sobre-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/sobre/sobre-routing.module.ts ***!
  \****************************************************/
/*! exports provided: SobrePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageRoutingModule", function() { return SobrePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sobre.page */ "./src/app/home/sobre/sobre.page.ts");




const routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_3__["SobrePage"]
    }
];
let SobrePageRoutingModule = class SobrePageRoutingModule {
};
SobrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SobrePageRoutingModule);



/***/ }),

/***/ "./src/app/home/sobre/sobre.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/sobre/sobre.module.ts ***!
  \********************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre-routing.module */ "./src/app/home/sobre/sobre-routing.module.ts");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre.page */ "./src/app/home/sobre/sobre.page.ts");







let SobrePageModule = class SobrePageModule {
};
SobrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__["SobrePageRoutingModule"]
        ],
        declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]]
    })
], SobrePageModule);



/***/ }),

/***/ "./src/app/home/sobre/sobre.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/sobre/sobre.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagem-card {\n  width: 100%;\n  height: 15em;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zb2JyZS9zb2JyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc29icmUvc29icmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbS1jYXJke1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/sobre/sobre.page.ts":
/*!******************************************!*\
  !*** ./src/app/home/sobre/sobre.page.ts ***!
  \******************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SobrePage = class SobrePage {
    constructor() { }
    ngOnInit() {
    }
};
SobrePage.ctorParameters = () => [];
SobrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sobre',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sobre.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sobre/sobre.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sobre.page.scss */ "./src/app/home/sobre/sobre.page.scss")).default]
    })
], SobrePage);



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module-es2015.js.map