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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timer\">\n  <countdown [config]=\"{leftTime: time_duration}\"></countdown>\n</div>\n<div class=\"btn_start\">\n  <button *ngIf=\"!isStart\" (click)=\"startClick()\">Start</button>\n  <button *ngIf=\"isStart\" (click)=\"endClick()\">End</button>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.board = new Array(4);
        this.t1 = performance.now();
        this.clicks = 0;
        this.oldzx = -1;
        this.oldzy = -1;
        this.time_duration = 0;
        this.isStart = false;
        this.start();
    }
    startClick() {
        this.time_duration = 300;
        this.isStart = true;
    }
    endClick() {
        this.time_duration = 0;
        this.isStart = false;
        this.restart();
        this.clicks = 0;
        this.clickCounter.innerHTML = "Clicks: " + this.clicks;
    }
    createBoard() {
        for (var i = 0; i < 4; i++) {
            this.board[i] = new Array(4);
        }
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                this.board[i][j] = (i + j * 4) + 1;
            }
        }
        this.zx = 3;
        this.zy = 3;
        this.board[this.zx][this.zy] = 16;
    }
    createBtns() {
        var b, d = document.createElement("div");
        d.className += "board";
        document.body.appendChild(d);
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                b = document.createElement("button");
                b.id = "btn" + (i + j * 4);
                b.i = i;
                b.j = j;
                b.addEventListener("click", (evt) => this.btnHandle(evt), false);
                b.appendChild(document.createTextNode(""));
                d.appendChild(b);
            }
        }
        this.clickCounter = document.createElement("p");
        this.clickCounter.className += "txt";
        document.body.appendChild(this.clickCounter);
    }
    start() {
        this.createBtns();
        this.createBoard();
        this.restart();
    }
    restart() {
        this.shuffle();
        let clicks = 0;
        this.updateBtns();
    }
    checkFinished() {
        var a = 0;
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                if (this.board[i][j] < a)
                    return false;
                a = this.board[i][j];
            }
        }
        return true;
    }
    getPossibles() {
        var ii, jj, cx = [-1, 0, 1, 0], cy = [0, -1, 0, 1];
        this.possibles = [];
        for (var i = 0; i < 4; i++) {
            ii = this.zx + cx[i];
            jj = this.zy + cy[i];
            if (ii < 0 || ii > 3 || jj < 0 || jj > 3)
                continue;
            this.possibles.push({ x: ii, y: jj });
        }
    }
    updateBtns() {
        var b, v, id;
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                id = "btn" + (i + j * 4);
                b = document.getElementById(id);
                v = this.board[i][j];
                if (v < 16) {
                    b.innerHTML = ("" + v);
                    b.className = "button";
                }
                else {
                    b.innerHTML = ("");
                    b.className = "empty";
                }
            }
        }
        this.clickCounter.innerHTML = "Clicks: " + this.clicks;
    }
    btnHandle(e) {
        this.getPossibles();
        var c = e.target.i, r = e.target.j, p = -1;
        for (var i = 0; i < this.possibles.length; i++) {
            if (this.possibles[i].x == c && this.possibles[i].y == r) {
                p = i;
                break;
            }
        }
        if (p > -1) {
            this.clicks = this.clicks + 1;
            var t = this.possibles[p];
            this.board[this.zx][this.zy] = this.board[t.x][t.y];
            this.zx = t.x;
            this.zy = t.y;
            this.board[this.zx][this.zy] = 16;
            this.updateBtns();
            if (this.checkFinished()) {
                setTimeout(function () {
                    alert("WELL DONE!");
                    this.restart();
                }, 1);
            }
        }
    }
    shuffle() {
        var v = 0, t;
        do {
            this.getPossibles();
            while (true) {
                t = this.possibles[Math.floor(Math.random() * this.possibles.length)];
                console.log(t.x, this.oldzx, t.y, this.oldzy);
                if (t.x != this.oldzx || t.y != this.oldzy)
                    break;
            }
            this.oldzx = this.zx;
            this.oldzy = this.zy;
            this.board[this.zx][this.zy] = this.board[t.x][t.y];
            this.zx = t.x;
            this.zy = t.y;
            this.board[this.zx][this.zy] = 16;
        } while (++v < 200);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\matrix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map