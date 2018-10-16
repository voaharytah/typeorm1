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
var CommandeSAImpl_1 = require("../Service/ServiceApplicatif/CommandeSA/CommandeSAImpl");
var typedi_1 = require("typedi");
var ResponseDto_1 = require("../Donnees/DataTransfertObject/ResponseDto");
var Logger_1 = require("../Commun/Logging/Logger");
var CommandeController = /** @class */ (function () {
    function CommandeController() {
        this.commandeSA = typedi_1.Container.get(CommandeSAImpl_1.CommandeSAImpl);
        this.logger = typedi_1.Container.get(Logger_1.Logger);
    }
    CommandeController.prototype.addCommande = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var commandeData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.commandeSA.addCommande(req.body)];
                    case 1:
                        commandeData = _a.sent();
                        resp.status(200).send(new ResponseDto_1.SuccessResponseDto({ result: commandeData }));
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
    CommandeController.prototype.deleteCommande = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.commandeSA.deleteCommande(req.body)];
                    case 1:
                        res = _a.sent();
                        resp.status(200).send(res);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.onError(req, resp, e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommandeController.prototype.createFacture = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var idCommande, factureDto, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        idCommande = req.params.idCommande;
                        return [4 /*yield*/, this.commandeSA.createFacture(idCommande)];
                    case 1:
                        factureDto = _a.sent();
                        resp.send(factureDto);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.onError(req, resp, e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommandeController.prototype.onError = function (req, resp, e) {
        this.logger.error('ws: %s', req.originalUrl, ' data : ' + JSON.stringify(req.body));
        resp.status(500).send(new ResponseDto_1.ErrorResponseDto(e.toString(), true));
    };
    return CommandeController;
}());
exports.CommandeController = CommandeController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvSW5mcmFzdHJ1Y3R1cmUvQ29tbWFuZGVDb250cm9sbGVyLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9JbmZyYXN0cnVjdHVyZS9Db21tYW5kZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlGQUF3RjtBQUN4RixpQ0FBbUM7QUFDbkMsMEVBQWtHO0FBQ2xHLG1EQUFrRDtBQUVsRDtJQUFBO1FBRUksZUFBVSxHQUFtQixrQkFBUyxDQUFDLEdBQUcsQ0FBQywrQkFBYyxDQUFDLENBQUM7UUFDM0QsV0FBTSxHQUFXLGtCQUFTLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBbUMzQyxDQUFDO0lBakNTLHdDQUFXLEdBQWpCLFVBQWtCLEdBQVksRUFBRSxJQUFjOzs7Ozs7O3dCQUVuQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUExRCxZQUFZLEdBQUcsU0FBMkM7d0JBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksZ0NBQWtCLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7O3dCQUV4RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUVsQztJQUVLLDJDQUFjLEdBQXBCLFVBQXFCLEdBQVksRUFBRSxJQUFjOzs7Ozs7O3dCQUUvQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFwRCxHQUFHLEdBQUcsU0FBOEM7d0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O3dCQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUVsQztJQUVLLDBDQUFhLEdBQW5CLFVBQW9CLEdBQVksRUFBRSxJQUFjOzs7Ozs7O3dCQUVsQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBNUQsVUFBVSxHQUFHLFNBQStDO3dCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O3dCQUV0QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUVsQztJQUVPLG9DQUFPLEdBQWYsVUFBZ0IsR0FBWSxFQUFFLElBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQWdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQXRDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb21tYW5kZVNBSW1wbCB9IGZyb20gJy4uL1NlcnZpY2UvU2VydmljZUFwcGxpY2F0aWYvQ29tbWFuZGVTQS9Db21tYW5kZVNBSW1wbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3R5cGVkaSc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2VEdG8sIFN1Y2Nlc3NSZXNwb25zZUR0byB9IGZyb20gJy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9SZXNwb25zZUR0byc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL0NvbW11bi9Mb2dnaW5nL0xvZ2dlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZGVDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb21tYW5kZVNBOiBDb21tYW5kZVNBSW1wbCA9IENvbnRhaW5lci5nZXQoQ29tbWFuZGVTQUltcGwpO1xyXG4gICAgbG9nZ2VyOiBMb2dnZXIgPSBDb250YWluZXIuZ2V0KExvZ2dlcik7XHJcblxyXG4gICAgYXN5bmMgYWRkQ29tbWFuZGUocmVxOiBSZXF1ZXN0LCByZXNwOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kZURhdGEgPSBhd2FpdCB0aGlzLmNvbW1hbmRlU0EuYWRkQ29tbWFuZGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICByZXNwLnN0YXR1cygyMDApLnNlbmQobmV3IFN1Y2Nlc3NSZXNwb25zZUR0byh7IHJlc3VsdDogY29tbWFuZGVEYXRhIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihyZXEsIHJlc3AsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGVDb21tYW5kZShyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuY29tbWFuZGVTQS5kZWxldGVDb21tYW5kZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIHJlc3Auc3RhdHVzKDIwMCkuc2VuZChyZXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yKHJlcSwgcmVzcCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZUZhY3R1cmUocmVxOiBSZXF1ZXN0LCByZXNwOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkQ29tbWFuZGUgPSByZXEucGFyYW1zLmlkQ29tbWFuZGU7XHJcbiAgICAgICAgICAgIGxldCBmYWN0dXJlRHRvID0gYXdhaXQgdGhpcy5jb21tYW5kZVNBLmNyZWF0ZUZhY3R1cmUoaWRDb21tYW5kZSk7XHJcbiAgICAgICAgICAgIHJlc3Auc2VuZChmYWN0dXJlRHRvKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihyZXEsIHJlc3AsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRXJyb3IocmVxOiBSZXF1ZXN0LCByZXNwOiBSZXNwb25zZSwgZSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCd3czogJXMnLCByZXEub3JpZ2luYWxVcmwsICcgZGF0YSA6ICcgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSkpO1xyXG4gICAgICAgIHJlc3Auc3RhdHVzKDUwMCkuc2VuZChuZXcgRXJyb3JSZXNwb25zZUR0byhlLnRvU3RyaW5nKCksIHRydWUpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=