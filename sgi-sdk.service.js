"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.URLS = exports.SgiSDK = void 0;
var app_utility_1 = require("@trinix/app-utility");
var app_error_const_1 = require("./app.error.const");
var http_utility_1 = require("./http.utility");
var centre_model_1 = require("./models/centre.model");
var SgiSDK = /** @class */ (function (_super) {
    __extends(SgiSDK, _super);
    function SgiSDK() {
        var _this = _super.call(this) || this;
        _this.htpUtility = new http_utility_1.HttpUtility();
        console.log('HttpService injected:', _this.htpUtility.httpService);
        return _this;
    }
    SgiSDK.instance = function () {
        if (SgiSDK._instance == null)
            SgiSDK._instance = new SgiSDK();
        return SgiSDK._instance;
    };
    SgiSDK.prototype.getCentre = function (code, username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, params, result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        obj = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            centre: code,
                            username: username,
                            token: token
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_GET_CENTRE, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                            if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                                obj = centre_model_1.CentreModel.fromEntity(result.response);
                            }
                            else {
                                throw new app_utility_1.ValueDataException(this.error().errorDescription);
                            }
                        }
                        else {
                            this.error().errorCode = app_utility_1.ErrorResponseStatus.KO;
                            this.error().errorDescription = "le Système SGI ne repond pas";
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        if (ex_1 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_1.message;
                        }
                        else {
                            console.log(ex_1);
                            this.error().errorDescription = app_error_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    SgiSDK.prototype.getCentres = function (username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var list, params, result, _i, _a, snapshot, obj, ex_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.error().clear();
                        list = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_GET_LIST_CENTRES, params)];
                    case 2:
                        result = _b.sent();
                        this.error().errorCode = result.error.errorCode;
                        this.error().errorDescription = result.error.errorDescription;
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.KO)
                            throw new app_utility_1.ValueDataException(this.error().errorDescription);
                        list = [];
                        for (_i = 0, _a = result.response; _i < _a.length; _i++) {
                            snapshot = _a[_i];
                            obj = centre_model_1.CentreModel.fromEntity(snapshot);
                            list.push(obj);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _b.sent();
                        this.error().clear();
                        if (ex_2 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_2.message;
                        }
                        else {
                            console.log(ex_2);
                            this.error().errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, list];
                }
            });
        });
    };
    SgiSDK._instance = null;
    return SgiSDK;
}(app_utility_1.IService));
exports.SgiSDK = SgiSDK;
var URLS;
(function (URLS) {
    URLS["CONST_GET_CENTRE"] = "/sgi/api/configuration/centre/get";
    URLS["CONST_GET_LIST_CENTRES"] = "/sgi/api/configuration/centre/list";
})(URLS = exports.URLS || (exports.URLS = {}));
