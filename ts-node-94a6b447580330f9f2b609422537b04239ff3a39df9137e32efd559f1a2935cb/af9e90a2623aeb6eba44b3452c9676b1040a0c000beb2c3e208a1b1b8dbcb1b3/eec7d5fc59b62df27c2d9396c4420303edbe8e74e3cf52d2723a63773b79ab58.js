"use strict";
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
var ResponseDto_1 = require("../Donnees/DataTransfertObject/ResponseDto");
var ProduitSAImpl_1 = require("../Service/ServiceApplicatif/ProduitSA/ProduitSAImpl");
var Logger_1 = require("../Commun/Logging/Logger");
var ProduitController = /** @class */ (function () {
    function ProduitController() {
        this.produitSA = typedi_1.Container.get(ProduitSAImpl_1.produitSAImpl);
        this.logger = typedi_1.Container.get(Logger_1.Logger);
    }
    ProduitController.prototype.deleteProduit = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                try {
                    res = this.produitSA.deleteProduit(req.body);
                    resp.status(200).send(res);
                }
                catch (e) {
                    this.onError(req, resp, e);
                }
                return [2 /*return*/];
            });
        });
    };
    ProduitController.prototype.mostOrderedProduct = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.produitSA.mostOrderedProduct(req.body)];
                    case 1:
                        result = _a.sent();
                        resp.status(200).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.onError(req, resp, e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProduitController.prototype.onError = function (req, resp, e) {
        this.logger.error('ws: %s', req.originalUrl, ' data : ' + JSON.stringify(req.body));
        resp.status(500).send(new ResponseDto_1.ErrorResponseDto(e.toString(), true));
    };
    return ProduitController;
}());
exports.ProduitController = ProduitController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvSW5mcmFzdHJ1Y3R1cmUvUHJvZHVpdENvbnRyb2xsZXIudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL0luZnJhc3RydWN0dXJlL1Byb2R1aXRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQ0FBbUM7QUFFbkMsMEVBQThFO0FBQzlFLHNGQUFxRjtBQUNyRixtREFBa0Q7QUFJbEQ7SUFBQTtRQUNJLGNBQVMsR0FBa0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO1FBQ3hELFdBQU0sR0FBVyxrQkFBUyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQXdCM0MsQ0FBQztJQXRCUyx5Q0FBYSxHQUFuQixVQUFvQixHQUFZLEVBQUUsSUFBYzs7OztnQkFDNUMsSUFBSSxDQUFDO29CQUNHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDOzs7O0tBQ0o7SUFFSyw4Q0FBa0IsR0FBeEIsVUFBeUIsR0FBWSxFQUFFLElBQWM7Ozs7Ozs7d0JBRTlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBMUQsTUFBTSxHQUFHLFNBQWlEO3dCQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozt3QkFFOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFbEM7SUFFTyxtQ0FBTyxHQUFmLFVBQWdCLEdBQVksRUFBRSxJQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3R5cGVkaSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlLCBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2VEdG8gfSBmcm9tICcuLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvUmVzcG9uc2VEdG8nO1xyXG5pbXBvcnQgeyBwcm9kdWl0U0FJbXBsIH0gZnJvbSAnLi4vU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Qcm9kdWl0U0EvUHJvZHVpdFNBSW1wbCc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL0NvbW11bi9Mb2dnaW5nL0xvZ2dlcic7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWl0Q29udHJvbGxlciB7XHJcbiAgICBwcm9kdWl0U0E6IHByb2R1aXRTQUltcGwgPSBDb250YWluZXIuZ2V0KHByb2R1aXRTQUltcGwpO1xyXG4gICAgbG9nZ2VyOiBMb2dnZXIgPSBDb250YWluZXIuZ2V0KExvZ2dlcik7XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlUHJvZHVpdChyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZHVpdFNBLmRlbGV0ZVByb2R1aXQocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICByZXNwLnN0YXR1cygyMDApLnNlbmQocmVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihyZXEsIHJlc3AsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBtb3N0T3JkZXJlZFByb2R1Y3QocmVxOiBSZXF1ZXN0LCByZXNwOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvZHVpdFNBLm1vc3RPcmRlcmVkUHJvZHVjdChyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIHJlc3Auc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yKHJlcSwgcmVzcCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25FcnJvcihyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlLCBlKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ3dzOiAlcycsIHJlcS5vcmlnaW5hbFVybCwgJyBkYXRhIDogJyArIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XHJcbiAgICAgICAgcmVzcC5zdGF0dXMoNTAwKS5zZW5kKG5ldyBFcnJvclJlc3BvbnNlRHRvKGUudG9TdHJpbmcoKSwgdHJ1ZSkpO1xyXG4gICAgfVxyXG59Il19