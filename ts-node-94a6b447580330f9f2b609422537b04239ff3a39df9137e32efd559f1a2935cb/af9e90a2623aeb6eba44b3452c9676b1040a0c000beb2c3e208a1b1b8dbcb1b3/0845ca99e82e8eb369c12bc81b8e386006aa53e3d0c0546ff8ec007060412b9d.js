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
var UserSAImpl_1 = require("../Service/ServiceApplicatif/UserSA/UserSAImpl");
var typedi_1 = require("typedi");
var ResponseDto_1 = require("../Donnees/DataTransfertObject/ResponseDto");
var UserValidator_1 = require("../Contrainte/Validator/UserValidator");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userSA = typedi_1.Container.get(UserSAImpl_1.UserSAImpl);
        this.userValidator = typedi_1.Container.get(UserValidator_1.UserValidator);
    }
    UserController.prototype.login = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var loginResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userSA.login(req.body)];
                    case 1:
                        loginResult = _a.sent();
                        resp.status(200).send(loginResult);
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
    UserController.prototype.createUser = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var userAdded, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.userValidator.requiredValidator(req.body);
                        return [4 /*yield*/, this.userSA.createUser(req.body)];
                    case 1:
                        userAdded = _a.sent();
                        userAdded.idUser && resp.status(200).send(new ResponseDto_1.SuccessResponseDto(userAdded));
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
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvSW5mcmFzdHJ1Y3R1cmUvVXNlckNvbnRyb2xsZXIudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL0luZnJhc3RydWN0dXJlL1VzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNEU7QUFDNUUsaUNBQW1DO0FBRW5DLDBFQUFrRztBQUNsRyx1RUFBc0U7QUFJdEU7SUFBQTtRQUNJLFdBQU0sR0FBZSxrQkFBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLENBQUM7UUFDL0Msa0JBQWEsR0FBa0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO0lBb0JoRSxDQUFDO0lBbEJTLDhCQUFLLEdBQVgsVUFBWSxHQUFZLEVBQUUsSUFBYzs7Ozs7Ozt3QkFFZCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUEvQyxXQUFXLEdBQUcsU0FBaUM7d0JBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O3dCQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFnQixDQUFDLEdBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFdkU7SUFFSyxtQ0FBVSxHQUFoQixVQUFpQixHQUFZLEVBQUUsSUFBYzs7Ozs7Ozt3QkFFckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXhELFNBQVMsR0FBUyxTQUFzQzt3QkFDNUQsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLGdDQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7d0JBRTdFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQWdCLENBQUMsR0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7OztLQUV2RTtJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTQUltcGwgfSBmcm9tIFwiLi4vU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Vc2VyU0EvVXNlclNBSW1wbFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2VEdG8sIFN1Y2Nlc3NSZXNwb25zZUR0byB9IGZyb20gXCIuLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvUmVzcG9uc2VEdG9cIjtcclxuaW1wb3J0IHsgVXNlclZhbGlkYXRvciB9IGZyb20gXCIuLi9Db250cmFpbnRlL1ZhbGlkYXRvci9Vc2VyVmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvVXNlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XHJcbiAgICB1c2VyU0E6IFVzZXJTQUltcGwgPSBDb250YWluZXIuZ2V0KFVzZXJTQUltcGwpO1xyXG4gICAgdXNlclZhbGlkYXRvcjogVXNlclZhbGlkYXRvciA9IENvbnRhaW5lci5nZXQoVXNlclZhbGlkYXRvcik7XHJcblxyXG4gICAgYXN5bmMgbG9naW4ocmVxOiBSZXF1ZXN0LCByZXNwOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBsb2dpblJlc3VsdCA9IGF3YWl0IHRoaXMudXNlclNBLmxvZ2luKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgcmVzcC5zdGF0dXMoMjAwKS5zZW5kKGxvZ2luUmVzdWx0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3Auc3RhdHVzKDUwMCkuc2VuZChuZXcgRXJyb3JSZXNwb25zZUR0byhlLnRvU3RyaW5nKCksIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlVXNlcihyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy51c2VyVmFsaWRhdG9yLnJlcXVpcmVkVmFsaWRhdG9yKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgbGV0IHVzZXJBZGRlZDogVXNlciA9IGF3YWl0IHRoaXMudXNlclNBLmNyZWF0ZVVzZXIocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICB1c2VyQWRkZWQuaWRVc2VyICYmIHJlc3Auc3RhdHVzKDIwMCkuc2VuZChuZXcgU3VjY2Vzc1Jlc3BvbnNlRHRvKHVzZXJBZGRlZCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcC5zdGF0dXMoNTAwKS5zZW5kKG5ldyBFcnJvclJlc3BvbnNlRHRvKGUudG9TdHJpbmcoKSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==