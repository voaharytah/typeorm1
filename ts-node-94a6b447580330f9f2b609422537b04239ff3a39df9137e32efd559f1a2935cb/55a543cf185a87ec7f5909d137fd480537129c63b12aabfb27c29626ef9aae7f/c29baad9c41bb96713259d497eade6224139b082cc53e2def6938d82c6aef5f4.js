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
var ClientDtoFactory_1 = require("../../../Contrainte/Factory/ClientDtoFactory");
var ClientSMImpl_1 = require("../../ServiceMetier/ClientSM/ClientSMImpl");
var ClientDoFactory_1 = require("../../../Contrainte/Factory/ClientDoFactory");
var ClientSAImpl = /** @class */ (function () {
    function ClientSAImpl() {
        this.clientSM = typedi_1.Container.get(ClientSMImpl_1.ClientSMImpl);
        this.clientDtoFactory = typedi_1.Container.get(ClientDtoFactory_1.ClientDtoFactory);
        this.clientDoFactory = typedi_1.Container.get(ClientDoFactory_1.ClientDoFactory);
    }
    ClientSAImpl.prototype.saveData = function (clientData) {
        var client = this.clientDoFactory.createClientDo(clientData);
        return this.clientSM.saveClient(client);
    };
    ClientSAImpl.prototype.getClients = function (searchParams) {
        return this.clientSM.getClients(searchParams);
    };
    ClientSAImpl.prototype.clientsTotalAmount = function (searchParams) {
        return __awaiter(this, void 0, void 0, function () {
            var clientsCa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientSM.clientsTotalAmount(searchParams)];
                    case 1:
                        clientsCa = _a.sent();
                        return [2 /*return*/, this.clientDtoFactory.createClientsTotaleAmountDto(clientsCa)];
                }
            });
        });
    };
    ClientSAImpl.prototype.clientTotalAmount = function (idClient) {
        return this.clientSM.clientTotalAmount(idClient);
    };
    ClientSAImpl = __decorate([
        typedi_1.Service()
    ], ClientSAImpl);
    return ClientSAImpl;
}());
exports.ClientSAImpl = ClientSAImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9DbGllbnRTQS9DbGllbnRTQUltcGwudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL1NlcnZpY2UvU2VydmljZUFwcGxpY2F0aWYvQ2xpZW50U0EvQ2xpZW50U0FJbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEM7QUFFNUMsaUZBQWdGO0FBQ2hGLDBFQUF5RTtBQUN6RSwrRUFBOEU7QUFNOUU7SUFEQTtRQUdJLGFBQVEsR0FBaUIsa0JBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxDQUFDO1FBQ3JELHFCQUFnQixHQUFxQixrQkFBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3JFLG9CQUFlLEdBQW9CLGtCQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFlLENBQUMsQ0FBQztJQW1CdEUsQ0FBQztJQWpCRywrQkFBUSxHQUFSLFVBQVMsVUFBZTtRQUNwQixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxZQUFpQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVLLHlDQUFrQixHQUF4QixVQUF5QixZQUFpQjs7Ozs7NEJBQ3RCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUFoRSxTQUFTLEdBQUcsU0FBb0Q7d0JBQ3BFLHNCQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsRUFBQzs7OztLQUN4RTtJQUVELHdDQUFpQixHQUFqQixVQUFrQixRQUFnQjtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBdEJRLFlBQVk7UUFEeEIsZ0JBQU8sRUFBRTtPQUNHLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2UsIENvbnRhaW5lciB9IGZyb20gXCJ0eXBlZGlcIjtcclxuaW1wb3J0IHsgQ2xpZW50U0FBY2kgfSBmcm9tIFwiLi9DbGllbnRTQUFjaVwiO1xyXG5pbXBvcnQgeyBDbGllbnREdG9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL0NvbnRyYWludGUvRmFjdG9yeS9DbGllbnREdG9GYWN0b3J5XCI7XHJcbmltcG9ydCB7IENsaWVudFNNSW1wbCB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlTWV0aWVyL0NsaWVudFNNL0NsaWVudFNNSW1wbFwiO1xyXG5pbXBvcnQgeyBDbGllbnREb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vQ29udHJhaW50ZS9GYWN0b3J5L0NsaWVudERvRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvQ2xpZW50XCI7XHJcbmltcG9ydCB7IENsaWVudHNUb3RhbEFtb3VudER0byB9IGZyb20gXCIuLi8uLi8uLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvQ2xpZW50c1RvdGFsQW1vdW50RHRvXCI7XHJcblxyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50U0FJbXBsIGltcGxlbWVudHMgQ2xpZW50U0FBY2kge1xyXG5cclxuICAgIGNsaWVudFNNOiBDbGllbnRTTUltcGwgPSBDb250YWluZXIuZ2V0KENsaWVudFNNSW1wbCk7XHJcbiAgICBjbGllbnREdG9GYWN0b3J5OiBDbGllbnREdG9GYWN0b3J5ID0gQ29udGFpbmVyLmdldChDbGllbnREdG9GYWN0b3J5KTtcclxuICAgIGNsaWVudERvRmFjdG9yeTogQ2xpZW50RG9GYWN0b3J5ID0gQ29udGFpbmVyLmdldChDbGllbnREb0ZhY3RvcnkpO1xyXG5cclxuICAgIHNhdmVEYXRhKGNsaWVudERhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBjbGllbnQ6IENsaWVudCA9IHRoaXMuY2xpZW50RG9GYWN0b3J5LmNyZWF0ZUNsaWVudERvKGNsaWVudERhdGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudFNNLnNhdmVDbGllbnQoY2xpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnRzKHNlYXJjaFBhcmFtczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50U00uZ2V0Q2xpZW50cyhzZWFyY2hQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNsaWVudHNUb3RhbEFtb3VudChzZWFyY2hQYXJhbXM6IGFueSk6IFByb21pc2U8Q2xpZW50c1RvdGFsQW1vdW50RHRvPiB7XHJcbiAgICAgICAgbGV0IGNsaWVudHNDYSA9IGF3YWl0IHRoaXMuY2xpZW50U00uY2xpZW50c1RvdGFsQW1vdW50KHNlYXJjaFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RHRvRmFjdG9yeS5jcmVhdGVDbGllbnRzVG90YWxlQW1vdW50RHRvKGNsaWVudHNDYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpZW50VG90YWxBbW91bnQoaWRDbGllbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudFNNLmNsaWVudFRvdGFsQW1vdW50KGlkQ2xpZW50KTtcclxuICAgIH1cclxufSJdfQ==