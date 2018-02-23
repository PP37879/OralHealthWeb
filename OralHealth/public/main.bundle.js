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

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pdf_pdf_component__ = __webpack_require__("./src/app/components/pdf/pdf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_excel_excel_component__ = __webpack_require__("./src/app/components/excel/excel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_import_import_component__ = __webpack_require__("./src/app/components/import/import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__("./src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_file_file_component__ = __webpack_require__("./src/app/components/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_insert_service__ = __webpack_require__("./src/app/services/insert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'import', component: __WEBPACK_IMPORTED_MODULE_11__components_import_import_component__["a" /* ImportComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'pdf', component: __WEBPACK_IMPORTED_MODULE_9__components_pdf_pdf_component__["a" /* PDFComponent */] },
    { path: 'excel', component: __WEBPACK_IMPORTED_MODULE_10__components_excel_excel_component__["a" /* ExcelComponent */] },
    { path: 'file', component: __WEBPACK_IMPORTED_MODULE_14__components_file_file_component__["a" /* FileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "<sheetjs></sheetjs>"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_pdf_pdf_component__["a" /* PDFComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_excel_excel_component__["a" /* ExcelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_import_import_component__["a" /* ImportComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_file_file_component__["a" /* FileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_insert_service__["a" /* InsertService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/excel/excel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\ninput, button , select{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n    font-size: 22px;\r\n}\r\n.form-control{\r\n    margin-bottom: 25px;\r\n    height: auto;\r\n}\r\n.pdf-form{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\n.checkbox{\r\n    text-align: left;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    -webkit-box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/excel/excel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdf-form\">\r\n  <div>\r\n    <label style=\"margin-top:25px\">วันที่ที่ต้องการ</label>\r\n    <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"วันเกิด\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"sel0\">โรงเรียน\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel0\">\r\n      <option>อนุบาลแห่งมหาวิทยาลัยธรรมศาสตร์</option>\r\n      <option>อนุบาลปทุมธานี</option>\r\n      <option>ประถมศึกษาแห่งมหาวิทยาลัยธรรมศาสตร์</option>\r\n    </select>\r\n\r\n    <label for=\"school\">ห้องเรียน\r\n    </label>\r\n    <select class=\"form-control\" id=\"school\">\r\n      <option>ป.2/1</option>\r\n      <option>ป.2/2</option>\r\n      <option>ป.2/3</option>\r\n    </select>\r\n\r\n    <label for=\"sel1\">รหัสประจำตัวผู้ป่วย / นักเรียน\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel1\">\r\n      <option>2301610001</option>\r\n      <option>2301610002</option>\r\n      <option>2301610003</option>\r\n    </select>\r\n\r\n    <label for=\"sel2\">ถึง\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel2\">\r\n      <option>2301610001</option>\r\n      <option>2301610002</option>\r\n      <option>2301610003</option>\r\n    </select>\r\n\r\n    <label for=\"ckeckbox\" style=\"margin-top:25px\">เลือกประเภทเอกสารที่ต้องการดาวน์โหลด</label>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;เอกสารผลการตรวจทั้งหมด</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;แผนภูมิรายงานผลสำหรับผู้ปกครอง ๖</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;แผนภูมิรายงานผลสำหรับครูประจำชั้น</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;แผนภูมิรายงานผลสำหรับผู้อำนวยการโรงเรียน</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;แผนภูมิรายงานผลสำหรับทันตแพทย์</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"forBtn\" style=\"margin-top:35px\">\r\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"chooseFile()\">ดาวน์โหลด</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/excel/excel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelComponent; });
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

var ExcelComponent = /** @class */ (function () {
    function ExcelComponent() {
    }
    ExcelComponent.prototype.ngOnInit = function () {
    };
    ExcelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-excel',
            template: __webpack_require__("./src/app/components/excel/excel.component.html"),
            styles: [__webpack_require__("./src/app/components/excel/excel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExcelComponent);
    return ExcelComponent;
}());



/***/ }),

/***/ "./src/app/components/file/file.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\ninput, button{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n    font-size: 24px;\r\n}\r\n.form-control{\r\n    margin-bottom: 35px;\r\n    padding: 10px;\r\n}\r\n.import-form , .desc{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 20px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\ninput#file.form-control{\r\n    height: auto;\r\n}\r\n.modal-body{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n  \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <img src=\"./app/success.png\" style=\"width:100px; height:100px;\">\r\n          <p>เพิ่มข้อมูลนักเรียน / ผู้ป่วยเรียบร้อย</p>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n\r\n<div class=\"desc\">เลือกไฟล์ที่ต้องการนำเข้าข้อมูล</div>\r\n<div class=\"desc\">ไฟล์ต้องมีสกุลไฟล์เป็น .xlsx เท่านั้น</div>\r\n<div class=\"import-form\">\r\n    <input type=\"file\" (change)=\"incomingfile($event)\" />\r\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"Upload()\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"importSubmit\" onclick=\"showModal()\">OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_insert_service__ = __webpack_require__("./src/app/services/insert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_student__ = __webpack_require__("./src/app/model/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__ = __webpack_require__("./node_modules/ts-xlsx/lib/main.browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileComponent = /** @class */ (function () {
    function FileComponent(int) {
        this.int = int;
        this.std = new __WEBPACK_IMPORTED_MODULE_2__model_student__["a" /* Student */]();
    }
    FileComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    FileComponent.prototype.Upload = function () {
        var _this = this;
        var columnSize;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
            // console.log(XLSX.utils.decode_range(worksheet['!ref']));
            var worksheetArray = new Array();
            var schName = new Array();
            worksheetArray = _this.sheet2arr(worksheet);
            // for (var i = 0; i < worksheetArray.length; i++) {
            //   console.log("LINE :" + i + " ");
            //   for (var j = 0; j < worksheetArray[i].length; j++) {
            //     console.log("COL : " + j + " " + worksheetArray[i][j]);
            //   }
            //   console.log("\n");
            // }
            for (var row = 1; row < worksheetArray.length; row++) {
                // console.log("LINE :" + i + " ");
                // for (var col = 0; col < worksheetArray[row].length; col++) {
                _this.school_name = worksheetArray[row][0];
                _this.school_addr = worksheetArray[row][1];
                _this.std_name = worksheetArray[row][2];
                _this.gender = worksheetArray[row][3];
                _this.dateOfBirth = worksheetArray[row][4];
                _this.std_addr = worksheetArray[row][5];
                _this.nation = worksheetArray[row][6];
                _this.religion = worksheetArray[row][7];
                _this.dad_name = worksheetArray[row][8];
                _this.mom_name = worksheetArray[row][9];
                _this.dad_status = worksheetArray[row][10];
                _this.mom_status = worksheetArray[row][11];
                _this.dad_job = worksheetArray[row][12];
                _this.mom_job = worksheetArray[row][13];
                _this.parent_name = worksheetArray[row][14];
                _this.parent_phone = worksheetArray[row][15];
                _this.parent_addr = worksheetArray[row][16];
                _this.teacher = worksheetArray[row][17];
                _this.master = worksheetArray[row][18];
                _this.decay_num = worksheetArray[row][19];
                console.log(_this.decay_num);
                _this.add();
                // }
            }
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    FileComponent.prototype.sheet2arr = function (sheet) {
        var result = [];
        var row;
        var rowNum;
        var colNum;
        var range = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].decode_range(sheet['!ref']);
        for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
            row = [];
            for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
                var nextCell = sheet[__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].encode_cell({ r: rowNum, c: colNum })];
                if (typeof nextCell === 'undefined') {
                    row.push(void 0);
                }
                else
                    row.push(nextCell.w);
                console.log(nextCell);
            }
            result.push(row);
            // console.log(result);
        }
        return result;
    };
    FileComponent.prototype.add = function () {
        this.std.school_name = this.school_name;
        this.std.school_addr = this.school_addr;
        this.std.std_name = this.std_name;
        this.std.gender = this.gender;
        this.std.dateOfBirth = this.dateOfBirth;
        this.std.std_addr = this.std_addr;
        this.std.nation = this.nation;
        this.std.religion = this.religion;
        this.std.dad_name = this.dad_name;
        this.std.mom_name = this.mom_name;
        this.std.dad_status = this.dad_status;
        this.std.mom_status = this.mom_status;
        this.std.dad_job = this.dad_job;
        this.std.mom_job = this.mom_job;
        this.std.parent_name = this.parent_name;
        this.std.parent_phone = this.parent_phone;
        this.std.parent_addr = this.parent_addr;
        this.std.teacher = this.teacher;
        this.std.master = this.master;
        this.std.decay_num = this.decay_num;
        this.int.ins(this.std).subscribe(function (response) {
            if (response == true) {
            }
            else {
            }
        });
    };
    FileComponent.prototype.ngOnInit = function () {
        // this.dataService.convertExcelToJson().subscribe(inputfile => {
        //   this.file = inputfile.file;
        //   console.log(this.file);
        // }, err => {
        //   console.log(err);
        //   return false;
        // });
    };
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-file',
            template: __webpack_require__("./src/app/components/file/file.component.html"),
            styles: [__webpack_require__("./src/app/components/file/file.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_insert_service__["a" /* InsertService */]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Exo:700|Oleo+Script|Ubuntu:700|Viga');\r\n.all{\r\n    text-align: center;\r\n}\r\nimg{\r\n    text-align: center;\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin: 25px;\r\n}\r\nbutton{\r\n    font-family: 'Viga', sans-serif;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n \r\n  <div class=\"logo\">\r\n    <img src=\"./app/logo.png\">\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/login']\">Login</button>\r\n  <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/register']\">Register</button>\r\n\r\n</div>"

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

/***/ "./src/app/components/import/import.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\ninput, button , select{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n    font-size: 22px;\r\n}\r\n.form-control{\r\n    margin-bottom: 25px;\r\n    height: auto;\r\n}\r\n.import-form{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\ninput[type=radio] {\r\n    border: 0px;\r\n    width: 25px;\r\n    height: 25px;\r\n    -webkit-box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n}\r\n.modal-body{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/import/import.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <img src=\"./app/success.png\" style=\"width:100px; height:100px;\">\r\n        <p>เพิ่มข้อมูลนักเรียน / ผู้ป่วยเรียบร้อย</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<form class=\"import\">\r\n  <div class=\"import-form\">\r\n    <div class=\"input\">\r\n      <h1 id=\"header\">เพิ่มข้อมูลผู้ป่วย / นักเรียน</h1>\r\n      <input type=\"text\" class=\"form-control\" id=\"school_name\" placeholder=\"ชื่อโรงเรียน\" [(ngModel)]=\"school_name\" name=\"schoolname\">\r\n      <input type=\"text\" class=\"form-control\" id=\"school_addr\" placeholder=\"ที่ตั้งของโรงเรียน\" [(ngModel)]=\"school_addr\" name=\"school_addr\">\r\n      <input type=\"text\" class=\"form-control\" id=\"std_name\" placeholder=\"ชื่อ-สกุลนักเรียน\" [(ngModel)]=\"std_name\" name=\"std_name\">\r\n      <label>เพศ</label>\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" id=\"male\" name=\"gender\" [(ngModel)]=\"gender\" value=\"male\">&nbsp;&nbsp;ชาย</label>\r\n      <label class=\"radio-inline\">\r\n        <input type=\"radio\" id=\"female\" name=\"gender\" [(ngModel)]=\"gender\" value=\"female\">&nbsp;&nbsp;หญิง</label>\r\n\r\n      <div>\r\n        <label style=\"margin-top:25px\">วันเกิด</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"birth\" placeholder=\"วันเกิด\" name=\"dateOfBirth\" [(ngModel)]=\"dateOfBirth\">\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" id=\"std_addr\" placeholder=\"ที่อยู่ของนักเรียน\" name=\"std_addr\" [(ngModel)]=\"std_addr\">\r\n      <input type=\"text\" class=\"form-control\" id=\"nation\" placeholder=\"สัญชาติ\" name=\"nation\" [(ngModel)]=\"nation\">\r\n      <input type=\"text\" class=\"form-control\" id=\"religion\" placeholder=\"ศาสนา\" name=\"religion\" [(ngModel)]=\"religion\">\r\n      <input type=\"text\" class=\"form-control\" id=\"dad_name\" placeholder=\"ชื่อ-สกุลบิดา\" name=\"dad_name\" [(ngModel)]=\"dad_name\">\r\n      <input type=\"text\" class=\"form-control\" id=\"mom_name\" placeholder=\"ชื่อ-สกุลมารดา\" name=\"mom_name\" [(ngModel)]=\"mom_name\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"sel1\">สถานภาพของบิดา\r\n        </label>\r\n        <select class=\"form-control\" id=\"sel1\" name=\"dad_status\" [(ngModel)]=\"dad_status\">\r\n          <option value=\"มีชีวิตอยู่\">มีชีวิตอยู่</option>\r\n          <option value=\"หย่าร้าง\">หย่าร้าง</option>\r\n          <option value=\"ถึงแก่กรรม\">ถึงแก่กรรม</option>\r\n        </select>\r\n\r\n        <label for=\"sel2\">สถานภาพของมารดา\r\n        </label>\r\n        <select class=\"form-control\" id=\"sel2\" name=\"mom_status\" [(ngModel)]=\"mom_status\"> \r\n          <option value=\"มีชีวิตอยู่\">มีชีวิตอยู่</option>\r\n          <option value=\"หย่าร้าง\">หย่าร้าง</option>\r\n          <option value=\"ถึงแก่กรรม\">ถึงแก่กรรม</option>\r\n        </select>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" id=\"dad_job\" placeholder=\"อาชีพของบิดา\" name=\"dad_job\" [(ngModel)]=\"dad_job\">\r\n      <input type=\"text\" class=\"form-control\" id=\"mom_job\" placeholder=\"อาชีพของมารดา\" name=\"mom_job\" [(ngModel)]=\"mom_job\">\r\n      <input type=\"text\" class=\"form-control\" id=\"parent_name\" placeholder=\"ชื่อ-สกุลผู้ปกครอง\" name=\"parent_name\" [(ngModel)]=\"parent_name\">\r\n      <input type=\"text\" class=\"form-control\" id=\"parent_phone\" placeholder=\"เบอร์โทรศัพท์ผู้ปกครอง\" name=\"parent_phone\" [(ngModel)]=\"parent_phone\">\r\n      <input type=\"text\" class=\"form-control\" id=\"parent_addr\" placeholder=\"ที่อยู่ของผู้ปกครอง\" name=\"parent_addr\" [(ngModel)]=\"parent_addr\">\r\n      <input type=\"text\" class=\"form-control\" id=\"teacher\" placeholder=\"ชื่อครูประจำชั้น\" name=\"teacher\" [(ngModel)]=\"teacher\">\r\n      <input type=\"text\" class=\"form-control\" id=\"master\" placeholder=\"ชื่อผู้อำนวยการของโรงเรียน\" name=\"master\" [(ngModel)]=\"master\">\r\n      <input type=\"number\" class=\"form-control\" id=\"decay_num\" placeholder=\"จำนวนฟันผุที่ตรวจพบในครั้งนี้\" name=\"decay_num\" [(ngModel)]=\"decay_num\">\r\n      <div class=\"forBtn\">\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"add()\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"importSubmit\" onclick=\"showModal()\">เสร็จสิ้น</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/import/import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_insert_service__ = __webpack_require__("./src/app/services/insert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_student__ = __webpack_require__("./src/app/model/student.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportComponent = /** @class */ (function () {
    function ImportComponent(int) {
        this.int = int;
        this.std = new __WEBPACK_IMPORTED_MODULE_2__model_student__["a" /* Student */]();
    }
    ImportComponent.prototype.add = function () {
        this.std.school_name = this.school_name;
        this.std.school_addr = this.school_addr;
        this.std.std_name = this.std_name;
        this.std.gender = this.gender;
        this.std.dateOfBirth = this.dateOfBirth;
        this.std.std_addr = this.std_addr;
        this.std.nation = this.nation;
        this.std.religion = this.religion;
        this.std.dad_name = this.dad_name;
        this.std.mom_name = this.mom_name;
        this.std.dad_status = this.dad_status;
        this.std.mom_status = this.mom_status;
        this.std.dad_job = this.dad_job;
        this.std.mom_job = this.mom_job;
        this.std.parent_name = this.parent_name;
        this.std.parent_phone = this.parent_phone;
        this.std.parent_addr = this.parent_addr;
        this.std.teacher = this.teacher;
        this.std.master = this.master;
        this.std.decay_num = this.decay_num;
        this.int.ins(this.std).subscribe(function (response) {
            if (response == true) {
            }
            else {
            }
        });
    };
    ImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-import',
            template: __webpack_require__("./src/app/components/import/import.component.html"),
            styles: [__webpack_require__("./src/app/components/import/import.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_insert_service__["a" /* InsertService */]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\n.login-form{\r\n    text-align: center;\r\n    font-family: 'Delius Unicase', cursive;\r\n    border: 0px solid black;\r\n    padding: 30px;\r\n    margin: auto;\r\n    width: 400px;\r\n    background-color: rgba(204, 204, 204, 0.6);\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n}\r\n.form-control{\r\n    margin-bottom: 35px;\r\n}\r\n#header{\r\n    margin-bottom: 35px;\r\n    font-size: 30px;\r\n    text-shadow: 2px 2px #0000006b;\r\n}\r\n.logo{\r\n    text-align: center;\r\n}\r\nimg{\r\n    margin-top: 25px;\r\n    max-width: 300px;\r\n    height: auto;\r\n}\r\nbutton , input{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"signin\">\r\n  <div class=\"logo\">\r\n    <img src=\"./app/logo.png\">\r\n  </div>\r\n  <div class=\"login-form\">\r\n    <div class=\"input\">\r\n    <h1 id=\"header\">LogIn</h1>\r\n\r\n      <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Username\">\r\n      <input type=\"password\" class=\"form-control\" id=\"pass\" placeholder=\"Password\">\r\n\r\n      <div class=\"forBtn\">\r\n        <button type=\"submit\" class=\"btn btn-success\" [routerLink]=\"['/menu']\" onclick=\"success()\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\nimg{\r\n    width: 75px;\r\n    height: 75px;\r\n    float: left;\r\n    margin-left: 25px;\r\n}\r\n.form-control{\r\n    overflow: auto;\r\n    height: auto;\r\n    padding: 15px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\nbutton{\r\n    max-width: 600px;\r\n    margin: 5px;\r\n    font-family: 'Mitr', cursive;\r\n    font-size: 50%;\r\n    text-align: center; \r\n    line-height: 75px; \r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808); \r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n}\r\n.btn{\r\n    font-size:3.3em;\r\n    display:block;\r\n    left:-60px;\r\n    margin-top:15px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn\">\r\n  <button type=\"button\" class=\"form-control\" [routerLink]=\"['/import']\">\r\n    <img src=\"./app/file.png\">เพิ่มข้อมูลผู้ป่วย / นักเรียน</button>\r\n</div>\r\n<div class=\"btn\">\r\n  <button type=\"button\" class=\"form-control\" [routerLink]=\"['/file']\">\r\n    <img src=\"./app/xlsx.png\">เพิ่มข้อมูลโดยนำเข้าไฟล์ Excel</button>\r\n</div>\r\n<div class=\"btn\">\r\n  <button type=\"button\" class=\"form-control\" [routerLink]=\"['/pdf']\">\r\n    <img src=\"./app/pdf.png\">ดาวน์โหลดเอกสารรายงาน PDF</button>\r\n</div>\r\n<div class=\"btn\">\r\n  <button type=\"button\" class=\"form-control\" [routerLink]=\"['/excel']\">\r\n    <img src=\"./app/xlsx.png\">ดาวน์โหลดเอกสารรายงาน Excel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
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
            template: __webpack_require__("./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Exo:700|Oleo+Script|Ubuntu:700');\r\na, .navbar-brand{\r\n    font-family: 'Amaranth', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    margin: auto;\r\n    color: black;\r\n}\r\nimg{\r\n    width: 70px;\r\n    height: 50px;\r\n    float: left;\r\n}\r\n.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{\r\n    color: blue;\r\n    background-color:rgba(255, 255, 26, 0.4);;\r\n}\r\n.navbar-default .navbar-nav>li>a{\r\n    color: black;\r\n}\r\n.navbar-default{\r\n    margin: 0px;\r\n    background-color:rgba(204, 204, 204, 0.6);\r\n}\r\n.container-fluid{\r\n    margin: 0;\r\n}\r\n.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand{\r\n    margin-left: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <img src=\"./app/logo.png\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Dental Care</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\" action=\"onNavLoad()\">\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a [routerLink]=\"['/']\">\r\n          Home</a>\r\n      </li>\r\n      <li [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/login']\">\r\n          Login</a>\r\n      </li>\r\n      <li [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/register']\">\r\n          Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pdf/pdf.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\ninput, button , select{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n    font-size: 22px;\r\n}\r\n.form-control{\r\n    margin-bottom: 25px;\r\n    height: auto;\r\n}\r\n.pdf-form{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n    font-size: 24px;\r\n}\r\n.checkbox{\r\n    text-align: left;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    -webkit-box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 0px 0px 0px rgba(128, 128, 128, 0.808);\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/pdf/pdf.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdf-form\">\r\n  <div>\r\n    <label style=\"margin-top:25px\">วันที่ที่ต้องการ</label>\r\n    <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"วันเกิด\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"sel0\">โรงเรียน\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel0\">\r\n      <option>อนุบาลแห่งมหาวิทยาลัยธรรมศาสตร์</option>\r\n      <option>อนุบาลปทุมธานี</option>\r\n      <option>ประถมศึกษาแห่งมหาวิทยาลัยธรรมศาสตร์</option>\r\n    </select>\r\n\r\n    <label for=\"sel1\">รหัสประจำตัวผู้ป่วย / นักเรียน\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel1\">\r\n      <option>2301610001</option>\r\n      <option>2301610002</option>\r\n      <option>2301610003</option>\r\n    </select>\r\n\r\n    <label for=\"sel2\">ถึง\r\n    </label>\r\n    <select class=\"form-control\" id=\"sel2\">\r\n      <option>2301610001</option>\r\n      <option>2301610002</option>\r\n      <option>2301610003</option>\r\n    </select>\r\n\r\n    <label for=\"ckeckbox\" style=\"margin-top:25px\">เลือกประเภทเอกสารที่ต้องการดาวน์โหลด</label>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;เอกสารรายงานผลสำหรับผู้ปกครอง</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;เอกสารรายงานผลสำหรับครูประจำชั้น</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;เอกสารรายงานผลสำหรับผู้อำนวยการโรงเรียน</label>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\">&nbsp;&nbsp;เอกสารรายงานผลสำหรับทันตแพทย์</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"forBtn\" style=\"margin-top:35px\">\r\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"chooseFile()\">ดาวน์โหลด</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pdf/pdf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDFComponent; });
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

var PDFComponent = /** @class */ (function () {
    function PDFComponent() {
    }
    PDFComponent.prototype.ngOnInit = function () {
    };
    PDFComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pdf',
            template: __webpack_require__("./src/app/components/pdf/pdf.component.html"),
            styles: [__webpack_require__("./src/app/components/pdf/pdf.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PDFComponent);
    return PDFComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Amaranth|Delius+Unicase:700|Exo:700|Londrina+Solid|Mitr|Oleo+Script|Ubuntu:700|Vast+Shadow|Viga');\r\ninput, button{\r\n    -webkit-box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n            box-shadow: 5px 5px 3px rgba(128, 128, 128, 0.808);\r\n    border: 1px solid black;\r\n    font-size: 24px;\r\n}\r\n.regis-form{\r\n    text-align: center;\r\n    font-family: 'Mitr', cursive;\r\n    padding: 30px;\r\n    margin: auto;\r\n    max-width: 600px;\r\n}\r\n.form-control{\r\n    margin-bottom: 35px;\r\n    padding: 20px;\r\n}\r\n#header{\r\n    margin-bottom: 25px;\r\n    font-size: 40px;\r\n    text-shadow: 2px 2px #0000006b;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"signup\">\r\n  <div class=\"regis-form\">\r\n    <div class=\"input\">\r\n      <h1 id=\"header\">Register</h1>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"ชื่อผู้ใช้ (Username)\">\r\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"รหัสผ่าน (Password)\">\r\n      <input type=\"password\" class=\"form-control\" id=\"cfpassword\" placeholder=\"ยืนยันรหัสผ่านอีกครั้ง (Confirm Password)\">\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"ชื่อ-สกุล\">\r\n      <input type=\"email\" class=\"form-control\" id=\"mail\" placeholder=\"E-Mail\">\r\n      <div class=\"forBtn\">\r\n        <button type=\"submit\" class=\"btn btn-success\" [routerLink]=\"['/login']\">Register</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/model/connect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
var Connect = /** @class */ (function () {
    function Connect() {
    }
    Connect.getHostUrl = function () {
        return this.hostUrl;
    };
    Connect.hostUrl = 'http://localhost/OralHealth_project';
    Connect.USER_TOKEN = 'user_token';
    return Connect;
}());



/***/ }),

/***/ "./src/app/model/student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/services/insert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_connect__ = __webpack_require__("./src/app/model/connect.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InsertService = /** @class */ (function () {
    function InsertService(http) {
        this.http = http;
    }
    InsertService.prototype.ins = function (user) {
        var _this = this;
        console.log(user);
        var url = __WEBPACK_IMPORTED_MODULE_6__model_connect__["a" /* Connect */].getHostUrl() + '/int.php';
        console.log(url);
        var header = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        return this.http.post(url, user, header).map(function (res) { return _this.parsein(res); }).catch(function (error) {
            console.log("error");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].of(false);
        });
        ;
    };
    InsertService.prototype.parsein = function (res) {
        var data = res.json();
        if (data.Error == "true") {
            return false;
        }
        else {
            console.log(data);
            return true;
        }
    };
    InsertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InsertService);
    return InsertService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map