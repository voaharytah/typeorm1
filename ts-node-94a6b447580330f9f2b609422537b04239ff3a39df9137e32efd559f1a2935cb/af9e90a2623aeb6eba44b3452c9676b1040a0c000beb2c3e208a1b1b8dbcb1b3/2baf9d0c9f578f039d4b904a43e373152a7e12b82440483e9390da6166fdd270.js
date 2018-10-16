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
var ClientSAImpl_1 = require("../Service/ServiceApplicatif/ClientSA/ClientSAImpl");
var ClientValidator_1 = require("../Contrainte/Validator/ClientValidator");
var ClientController = /** @class */ (function () {
    function ClientController() {
        this.clientSA = typedi_1.Container.get(ClientSAImpl_1.ClientSAImpl);
        this.clientValidator = typedi_1.Container.get(ClientValidator_1.ClientValidator);
    }
    ClientController.prototype.clientsTotalAmount = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var clientsCaDto, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.clientSA.clientsTotalAmount(req.body)];
                    case 1:
                        clientsCaDto = _a.sent();
                        resp.status(200).send(clientsCaDto);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        resp.status(500).send(new ResponseDto_1.ErrorResponseDto(e_1.toString(), true));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientController.prototype.saveClient = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var clientSaved, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.clientValidator.requiredValidator(req.body);
                        return [4 /*yield*/, this.clientSA.saveData(req.body)];
                    case 1:
                        clientSaved = _a.sent();
                        clientSaved.idClient && resp.status(200).send(new ResponseDto_1.SuccessResponseDto({ result: clientSaved }));
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        resp.status(500).send(new ResponseDto_1.ErrorResponseDto(e_2.toString(), true));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ClientController;
}());
exports.ClientController = ClientController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvSW5mcmFzdHJ1Y3R1cmUvQ2xpZW50Q29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvSW5mcmFzdHJ1Y3R1cmUvQ2xpZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUNBQW1DO0FBQ25DLDBFQUFrRztBQUNsRyxtRkFBa0Y7QUFDbEYsMkVBQTBFO0FBRTFFO0lBQUE7UUFFSSxhQUFRLEdBQWlCLGtCQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsQ0FBQztRQUNyRCxvQkFBZSxHQUFvQixrQkFBUyxDQUFDLEdBQUcsQ0FBQyxpQ0FBZSxDQUFDLENBQUM7SUFxQnRFLENBQUM7SUFuQlMsNkNBQWtCLEdBQXhCLFVBQXlCLEdBQVksRUFBRSxJQUFjOzs7Ozs7O3dCQUUxQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQS9ELFlBQVksR0FBRyxTQUFnRDt3QkFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7d0JBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQWdCLENBQUMsR0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7OztLQUV2RTtJQUVLLHFDQUFVLEdBQWhCLFVBQWlCLEdBQVksRUFBRSxJQUFjOzs7Ozs7O3dCQUVyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBcEQsV0FBVyxHQUFHLFNBQXNDO3dCQUN4RCxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksZ0NBQWtCLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7O3dCQUU5RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFnQixDQUFDLEdBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFdkU7SUFFTCx1QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd0eXBlZGknO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlRHRvLCBTdWNjZXNzUmVzcG9uc2VEdG8gfSBmcm9tICcuLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvUmVzcG9uc2VEdG8nO1xyXG5pbXBvcnQgeyBDbGllbnRTQUltcGwgfSBmcm9tICcuLi9TZXJ2aWNlL1NlcnZpY2VBcHBsaWNhdGlmL0NsaWVudFNBL0NsaWVudFNBSW1wbCc7XHJcbmltcG9ydCB7IENsaWVudFZhbGlkYXRvciB9IGZyb20gJy4uL0NvbnRyYWludGUvVmFsaWRhdG9yL0NsaWVudFZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29udHJvbGxlciB7XHJcblxyXG4gICAgY2xpZW50U0E6IENsaWVudFNBSW1wbCA9IENvbnRhaW5lci5nZXQoQ2xpZW50U0FJbXBsKTtcclxuICAgIGNsaWVudFZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yID0gQ29udGFpbmVyLmdldChDbGllbnRWYWxpZGF0b3IpO1xyXG5cclxuICAgIGFzeW5jIGNsaWVudHNUb3RhbEFtb3VudChyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY2xpZW50c0NhRHRvID0gYXdhaXQgdGhpcy5jbGllbnRTQS5jbGllbnRzVG90YWxBbW91bnQocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICByZXNwLnN0YXR1cygyMDApLnNlbmQoY2xpZW50c0NhRHRvKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3Auc3RhdHVzKDUwMCkuc2VuZChuZXcgRXJyb3JSZXNwb25zZUR0byhlLnRvU3RyaW5nKCksIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2F2ZUNsaWVudChyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRWYWxpZGF0b3IucmVxdWlyZWRWYWxpZGF0b3IocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50U2F2ZWQgPSBhd2FpdCB0aGlzLmNsaWVudFNBLnNhdmVEYXRhKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgY2xpZW50U2F2ZWQuaWRDbGllbnQgJiYgcmVzcC5zdGF0dXMoMjAwKS5zZW5kKG5ldyBTdWNjZXNzUmVzcG9uc2VEdG8oeyByZXN1bHQ6IGNsaWVudFNhdmVkfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcC5zdGF0dXMoNTAwKS5zZW5kKG5ldyBFcnJvclJlc3BvbnNlRHRvKGUudG9TdHJpbmcoKSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=