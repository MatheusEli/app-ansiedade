(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dicas-dicas-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dicas/dicas.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dicas/dicas.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeDicasDicasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title><strong>Dicas de Autotratamento</strong></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card>\r\n    <ion-card-header>\r\n    <ion-card-title>Pratique atividades físicas</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-img img src = \"https://www.hostdaloja.com.br/s/pfacil24/img/402018_09_10_16_42_12_caminhada_beneficios.jpg\"></ion-img>\r\n      <div class=\"card-text\">\r\n        A forma mais comum de controlar a ansiedade é a prática de exercícios. \r\n        Caminhar três vezes por semana, por pelo menos meia hora, já pode ajudar a lidar com a ansiedade.\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n    <ion-card-title>Relaxe antes de dormir</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-img img src = \"https://www.psicologoeterapia.com.br/wp-content/uploads/sonhos-parte-3-dicas-para-dormir-melhor-768x512.jpg\"></ion-img>\r\n      <div class=\"card-text\">\r\n        Evite ações que levam à agitação, preocupação e desgaste. Nem sempre podemos prever o que pode acontecer pouco antes de dormir, mas aquilo que depende de nós devemos fazer bem feito.      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n    <ion-card-title>Reduza seu estresse diário</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-img img src = \"https://www.vittude.com/blog/wp-content/uploads/2017/01/Estresse.jpg\"></ion-img>\r\n      <div class=\"card-text\">\r\n        A ioga oferece ao praticante a possibilidade de aprender a controlar sua mente e seu corpo. Este controle, que é obtido através de uma combinação de técnicas respiratórias, corporais e de meditação. Tem como resultados o aumento da flexibilidade, fortalecimento dos músculos, aumento de vitalidade e maior controle sobre o estresse.\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n    <ion-card-title>Experimente controlar a respiração</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-img img src = \"https://guiadafarmacia.com.br/wp-content/uploads/2020/07/shutterstock_1517688029.jpg\"></ion-img>\r\n      <div class=\"card-text\">\r\n        Para reduzir as reações do sistema nervoso autônomo, devemos fazer o controle da respiração. Isto pode ser feito compassando a respiração e inspirando lentamente pelo nariz, com a boca fechada.\r\n        Ao inspirar, deixar o abdômen expandir-se, ou seja, estufar a barriga e não o peito. Depois, expirar lentamente, expelindo o ar pela boca. Isto pode ser feito em qualquer lugar, a qualquer hora.      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n    \r\n\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/home/dicas/dicas-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/home/dicas/dicas-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: DicasPageRoutingModule */

    /***/
    function srcAppHomeDicasDicasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicasPageRoutingModule", function () {
        return DicasPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dicas.page */
      "./src/app/home/dicas/dicas.page.ts");

      var routes = [{
        path: '',
        component: _dicas_page__WEBPACK_IMPORTED_MODULE_3__["DicasPage"]
      }];

      var DicasPageRoutingModule = function DicasPageRoutingModule() {
        _classCallCheck(this, DicasPageRoutingModule);
      };

      DicasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DicasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/dicas/dicas.module.ts":
    /*!********************************************!*\
      !*** ./src/app/home/dicas/dicas.module.ts ***!
      \********************************************/

    /*! exports provided: DicasPageModule */

    /***/
    function srcAppHomeDicasDicasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicasPageModule", function () {
        return DicasPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dicas-routing.module */
      "./src/app/home/dicas/dicas-routing.module.ts");
      /* harmony import */


      var _dicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dicas.page */
      "./src/app/home/dicas/dicas.page.ts");

      var DicasPageModule = function DicasPageModule() {
        _classCallCheck(this, DicasPageModule);
      };

      DicasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DicasPageRoutingModule"]],
        declarations: [_dicas_page__WEBPACK_IMPORTED_MODULE_6__["DicasPage"]]
      })], DicasPageModule);
      /***/
    },

    /***/
    "./src/app/home/dicas/dicas.page.scss":
    /*!********************************************!*\
      !*** ./src/app/home/dicas/dicas.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeDicasDicasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-text {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kaWNhcy9kaWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RpY2FzL2RpY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/home/dicas/dicas.page.ts":
    /*!******************************************!*\
      !*** ./src/app/home/dicas/dicas.page.ts ***!
      \******************************************/

    /*! exports provided: DicasPage */

    /***/
    function srcAppHomeDicasDicasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicasPage", function () {
        return DicasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DicasPage = /*#__PURE__*/function () {
        function DicasPage() {
          _classCallCheck(this, DicasPage);
        }

        _createClass(DicasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DicasPage;
      }();

      DicasPage.ctorParameters = function () {
        return [];
      };

      DicasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dicas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dicas.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dicas/dicas.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dicas.page.scss */
        "./src/app/home/dicas/dicas.page.scss"))["default"]]
      })], DicasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dicas-dicas-module-es5.js.map