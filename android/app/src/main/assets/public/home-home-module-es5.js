(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header> <!--Ola mundo!-->\r\n  <!--Orlando 51-->\r\n  <ion-toolbar color = \"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"menuApp\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-label>A-Care</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-menu contentId=\"nome-do-conteudo\" menuId=\"menuApp\" side=\"start\" type=\"overlay\">\r\n  <ion-header>\r\n    <ion-toolbar color = \"tertiary\">\r\n      <ion-title>A-Care</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n  <ion-item button routerLink=\"/home/perfil\">\r\n    <ion-label>Perfil</ion-label>\r\n  </ion-item>\r\n    <ion-item button routerLink=\"/home/forum\">\r\n      <ion-label>Fórum</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/home/treino-resp\">\r\n      <ion-label>Treino de Respiração</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/home/ajudamedica\">\r\n      <ion-label>Ajuda Médica</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/home/dicas\">\r\n      <ion-label>Dicas de Autotratamento</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/home/sobre\">\r\n      <ion-label>Sobre o App</ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item slot=\"\" (click) = \"sair()\" class=\"vermelho\">Desconectar<ion-icon style = \"padding: .2em;\" name=\"log-out-outline\" color=\"vermelho\"></ion-icon></ion-item>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-content>\r\n  <ion-router-outlet id=\"nome-do-conteudo\"></ion-router-outlet>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [{
          path: 'sobre',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | sobre-sobre-module */
            "sobre-sobre-module").then(__webpack_require__.bind(null,
            /*! ./sobre/sobre.module */
            "./src/app/home/sobre/sobre.module.ts")).then(function (m) {
              return m.SobrePageModule;
            });
          }
        }, {
          path: 'forum',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | forum-forum-module */
            [__webpack_require__.e("default~cadastro-cadastro-module~forum-forum-module~perfil-perfil-module"), __webpack_require__.e("forum-forum-module")]).then(__webpack_require__.bind(null,
            /*! ./forum/forum.module */
            "./src/app/home/forum/forum.module.ts")).then(function (m) {
              return m.ForumPageModule;
            });
          }
        }, {
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | forum-forum-module */
            [__webpack_require__.e("default~cadastro-cadastro-module~forum-forum-module~perfil-perfil-module"), __webpack_require__.e("forum-forum-module")]).then(__webpack_require__.bind(null,
            /*! ./forum/forum.module */
            "./src/app/home/forum/forum.module.ts")).then(function (m) {
              return m.ForumPageModule;
            });
          }
        }, {
          path: 'perfil',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | perfil-perfil-module */
            [__webpack_require__.e("default~cadastro-cadastro-module~forum-forum-module~perfil-perfil-module"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null,
            /*! ./perfil/perfil.module */
            "./src/app/home/perfil/perfil.module.ts")).then(function (m) {
              return m.PerfilPageModule;
            });
          }
        }, {
          path: 'treino-resp',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | treino-resp-treino-resp-module */
            "treino-resp-treino-resp-module").then(__webpack_require__.bind(null,
            /*! ./treino-resp/treino-resp.module */
            "./src/app/home/treino-resp/treino-resp.module.ts")).then(function (m) {
              return m.TreinoRespPageModule;
            });
          }
        }, {
          path: 'ajudamedica',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | ajudamedica-ajudamedica-module */
            "ajudamedica-ajudamedica-module").then(__webpack_require__.bind(null,
            /*! ./ajudamedica/ajudamedica.module */
            "./src/app/home/ajudamedica/ajudamedica.module.ts")).then(function (m) {
              return m.AjudamedicaPageModule;
            });
          }
        }, {
          path: 'dicas',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dicas-dicas-module */
            "dicas-dicas-module").then(__webpack_require__.bind(null,
            /*! ./dicas/dicas.module */
            "./src/app/home/dicas/dicas.module.ts")).then(function (m) {
              return m.DicasPageModule;
            });
          }
        }]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vermelho {\n  color: #e60f0f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVybWVsaG97XHJcbiAgICBjb2xvcjogI2U2MGYwZjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(authServ, router) {
          _classCallCheck(this, HomePage);

          this.authServ = authServ;
          this.router = router;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.authServ.authUser();
          }
        }, {
          key: "sair",
          value: function sair() {
            this.authServ.singout();
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map