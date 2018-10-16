"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var ProduitFactory_1 = require("../../../Contrainte/Factory/ProduitFactory");
var ProduitSMImpl_1 = require("../../ServiceMetier/ProduitSM/ProduitSMImpl");
var produitSAImpl = /** @class */ (function () {
    function produitSAImpl() {
        this.produitSM = typedi_1.Container.get(ProduitSMImpl_1.ProduitSMImpl);
        this.produitFactory = typedi_1.Container.get(ProduitFactory_1.ProduitFactory);
    }
    produitSAImpl.prototype.deleteProduit = function (criteria) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.produitSM.deleteProduit(criteria)];
            });
        });
    };
    produitSAImpl.prototype.mostOrderedProduct = function (searchParams) {
        return __awaiter(this, void 0, void 0, function () {
            var resultDo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.produitSM.mostOrderedProduct(searchParams)];
                    case 1:
                        resultDo = _a.sent();
                        return [2 /*return*/, this.produitFactory.mostOrderedProductDto(resultDo)];
                }
            });
        });
    };
    produitSAImpl = __decorate([
        typedi_1.Service()
    ], produitSAImpl);
    return produitSAImpl;
}());
exports.produitSAImpl = produitSAImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Qcm9kdWl0U0EvUHJvZHVpdFNBSW1wbC50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Qcm9kdWl0U0EvUHJvZHVpdFNBSW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRDO0FBQzVDLDZFQUE0RTtBQUM1RSw2RUFBNEU7QUFTNUU7SUFEQTtRQUdJLGNBQVMsR0FBa0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO1FBQ3hELG1CQUFjLEdBQW1CLGtCQUFTLENBQUMsR0FBRyxDQUFDLCtCQUFjLENBQUMsQ0FBQztJQVduRSxDQUFDO0lBVFMscUNBQWEsR0FBbkIsVUFBb0IsUUFBYTs7O2dCQUM3QixzQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQzs7O0tBQ2pEO0lBRUssMENBQWtCLEdBQXhCLFVBQXlCLFlBQWlCOzs7Ozs0QkFDckIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQWhFLFFBQVEsR0FBRyxTQUFxRDt3QkFDdEUsc0JBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBQzs7OztLQUM5RDtJQVpRLGFBQWE7UUFEekIsZ0JBQU8sRUFBRTtPQUNHLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZSwgQ29udGFpbmVyIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5pbXBvcnQgeyBQcm9kdWl0RmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL0NvbnRyYWludGUvRmFjdG9yeS9Qcm9kdWl0RmFjdG9yeSc7XHJcbmltcG9ydCB7IFByb2R1aXRTTUltcGwgfSBmcm9tIFwiLi4vLi4vU2VydmljZU1ldGllci9Qcm9kdWl0U00vUHJvZHVpdFNNSW1wbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwcm9kdWl0U0FhY2kge1xyXG4gICAgbW9zdE9yZGVyZWRQcm9kdWN0KHNlYXJjaFBhcmFtczogYW55KTtcclxuICAgIGRlbGV0ZVByb2R1aXQoY3JpdGVyaWE6IGFueSk7XHJcbn1cclxuXHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBwcm9kdWl0U0FJbXBsIGltcGxlbWVudHMgcHJvZHVpdFNBYWNpIHtcclxuICAgXHJcbiAgICBwcm9kdWl0U006IFByb2R1aXRTTUltcGwgPSBDb250YWluZXIuZ2V0KFByb2R1aXRTTUltcGwpO1xyXG4gICAgcHJvZHVpdEZhY3Rvcnk6IFByb2R1aXRGYWN0b3J5ID0gQ29udGFpbmVyLmdldChQcm9kdWl0RmFjdG9yeSk7XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlUHJvZHVpdChjcml0ZXJpYTogYW55KSB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0U00uZGVsZXRlUHJvZHVpdChjcml0ZXJpYSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbW9zdE9yZGVyZWRQcm9kdWN0KHNlYXJjaFBhcmFtczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0RG8gPSBhd2FpdCB0aGlzLnByb2R1aXRTTS5tb3N0T3JkZXJlZFByb2R1Y3Qoc2VhcmNoUGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0RmFjdG9yeS5tb3N0T3JkZXJlZFByb2R1Y3REdG8ocmVzdWx0RG8pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==