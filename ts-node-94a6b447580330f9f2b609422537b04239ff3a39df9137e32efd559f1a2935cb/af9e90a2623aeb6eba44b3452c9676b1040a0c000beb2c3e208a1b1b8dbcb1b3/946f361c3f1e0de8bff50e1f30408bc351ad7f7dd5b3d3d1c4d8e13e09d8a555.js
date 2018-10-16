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
var UserFactory_1 = require("../../../Contrainte/Factory/UserFactory");
var typedi_1 = require("typedi");
var UserSMImpl_1 = require("../../ServiceMetier/UserSM/UserSMImpl");
var JwtUtility_1 = require("../../../Commun/Token/JwtUtility");
var ResponseDto_1 = require("../../../Donnees/DataTransfertObject/ResponseDto");
var UserSAImpl = /** @class */ (function () {
    function UserSAImpl() {
        this.userFactory = typedi_1.Container.get(UserFactory_1.UserFactory);
        this.userSM = typedi_1.Container.get(UserSMImpl_1.UserSMImpl);
        this.jwtUtility = typedi_1.Container.get(JwtUtility_1.JwtUtility);
    }
    UserSAImpl.prototype.login = function (userDto) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userSM.login(this.userFactory.createUserDo(userDto))];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, this.userFactory.createLoginDto(this.jwtUtility.createToken(user))];
                        }
                        else {
                            throw new ResponseDto_1.ErrorResponseDto("Non authorisé", true, 401);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSAImpl.prototype.createUser = function (userDto) {
        var userDo = this.userFactory.createUserDo(userDto);
        return this.userSM.createUser(userDo);
    };
    UserSAImpl = __decorate([
        typedi_1.Service()
    ], UserSAImpl);
    return UserSAImpl;
}());
exports.UserSAImpl = UserSAImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Vc2VyU0EvVXNlclNBSW1wbC50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Vc2VyU0EvVXNlclNBSW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdUVBQXNFO0FBQ3RFLGlDQUE0QztBQUM1QyxvRUFBbUU7QUFDbkUsK0RBQThEO0FBQzlELGdGQUFvRjtBQUdwRjtJQURBO1FBRUksZ0JBQVcsR0FBZ0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMseUJBQVcsQ0FBQyxDQUFDO1FBQ3RELFdBQU0sR0FBZ0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQVUsQ0FBQyxDQUFDO1FBQ2hELGVBQVUsR0FBZSxrQkFBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLENBQUM7SUFldkQsQ0FBQztJQWJTLDBCQUFLLEdBQVgsVUFBWSxPQUFZOzs7Ozs0QkFDVCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFBOzt3QkFBdEUsSUFBSSxHQUFHLFNBQStEO3dCQUMxRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNQLE1BQU0sZ0JBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQzt3QkFDOUUsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixNQUFNLElBQUksOEJBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDM0QsQ0FBQzs7Ozs7S0FDSjtJQUVELCtCQUFVLEdBQVYsVUFBVyxPQUFZO1FBQ25CLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBakJRLFVBQVU7UUFEdEIsZ0JBQU8sRUFBRTtPQUNHLFVBQVUsQ0FrQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTQUFjaSB9IGZyb20gXCIuL1VzZXJTQUFjaVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L1VzZXJcIjtcclxuaW1wb3J0IHsgVXNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vQ29udHJhaW50ZS9GYWN0b3J5L1VzZXJGYWN0b3J5XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgU2VydmljZSB9IGZyb20gJ3R5cGVkaSc7XHJcbmltcG9ydCB7IFVzZXJTTUltcGwgfSBmcm9tIFwiLi4vLi4vU2VydmljZU1ldGllci9Vc2VyU00vVXNlclNNSW1wbFwiO1xyXG5pbXBvcnQgeyBKd3RVdGlsaXR5IH0gZnJvbSAnLi4vLi4vLi4vQ29tbXVuL1Rva2VuL0p3dFV0aWxpdHknO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlRHRvIH0gZnJvbSBcIi4uLy4uLy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9SZXNwb25zZUR0b1wiO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNBSW1wbCBpbXBsZW1lbnRzIFVzZXJTQUFjaSB7XHJcbiAgICB1c2VyRmFjdG9yeTogVXNlckZhY3RvcnkgPSBDb250YWluZXIuZ2V0KFVzZXJGYWN0b3J5KTtcclxuICAgIHVzZXJTTTogVXNlclNNSW1wbCAgPSBDb250YWluZXIuZ2V0KFVzZXJTTUltcGwpO1xyXG4gICAgand0VXRpbGl0eTogSnd0VXRpbGl0eSA9IENvbnRhaW5lci5nZXQoSnd0VXRpbGl0eSk7XHJcblxyXG4gICAgYXN5bmMgbG9naW4odXNlckR0bzogYW55KSB7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTTS5sb2dpbih0aGlzLnVzZXJGYWN0b3J5LmNyZWF0ZVVzZXJEbyh1c2VyRHRvKSk7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckZhY3RvcnkuY3JlYXRlTG9naW5EdG8odGhpcy5qd3RVdGlsaXR5LmNyZWF0ZVRva2VuKHVzZXIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JSZXNwb25zZUR0byhcIk5vbiBhdXRob3Jpc8OpXCIsIHRydWUsIDQwMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVVzZXIodXNlckR0bzogYW55KSB7XHJcbiAgICAgICAgbGV0IHVzZXJEbzogVXNlciA9IHRoaXMudXNlckZhY3RvcnkuY3JlYXRlVXNlckRvKHVzZXJEdG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTTS5jcmVhdGVVc2VyKHVzZXJEbyk7XHJcbiAgICB9XHJcbn0iXX0=