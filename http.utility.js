"use strict";
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
exports.HttpUtility = void 0;
var axios_1 = require("@nestjs/axios");
var app_utility_1 = require("@trinix/app-utility");
var dotenv = require("dotenv");
var app_error_const_1 = require("./app.error.const");
var HttpUtility = /** @class */ (function () {
    function HttpUtility() {
        this.httpService = new axios_1.HttpService();
        this._HOST = "";
        this._APPKEY = "";
        this._APPMAIL = "";
        try {
            dotenv.config();
            this._HOST = process.env.SGI_HOST || "";
            this._APPKEY = process.env.SGI_TOKEN || "";
            this._APPMAIL = process.env.SGI_USERNAME || "";
            console.log("SGI SDK is initialized to host : " + this._HOST);
        }
        catch (ex) {
            console.log(ex);
        }
    }
    /*init(httpService: HttpService) {
        if (this.httpService == null) {
            this.httpService = httpService;
            console.log('HttpService injected:', httpService);
        }
    }*/
    HttpUtility.prototype.doPost = function (url, params) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.appKey = this._APPKEY;
                        ;
                        params.appMail = this._APPMAIL;
                        console.log("SGI SDK doPost (params) : " + JSON.stringify(params));
                        obj = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params.appKey = this._APPKEY;
                        params.appMail = this._APPMAIL;
                        app_utility_1.AppUtilityControl.controlValueString(this._HOST, "Configurez le host de JennySys");
                        console.log("[SGI SDK] url ==> " + this._HOST + url);
                        return [4 /*yield*/, this.httpService.post(this._HOST + url, params, {
                                auth: {
                                    username: this._APPMAIL,
                                    password: this._APPKEY
                                }
                            }).toPromise()];
                    case 2:
                        result = _a.sent();
                        obj = result.data;
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        obj = new app_utility_1.HttpDataResponse();
                        if (ex_1 instanceof app_utility_1.ValueDataException) {
                            obj.error.errorDescription = ex_1.message;
                        }
                        else {
                            console.log(ex_1);
                            obj.error = new app_utility_1.ErrorResponse(app_utility_1.ErrorResponseStatus.KO, app_error_const_1.AppErrorConst.ERR_HTTP_UNKNOW);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    return HttpUtility;
}());
exports.HttpUtility = HttpUtility;
