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
var CommandeSMImpl_1 = require("../../ServiceMetier/CommandeSM/CommandeSMImpl");
var FactureDtoFactory_1 = require("../../../Contrainte/Factory/FactureDtoFactory");
var ClientSMImpl_1 = require("../../ServiceMetier/ClientSM/ClientSMImpl");
var ProduitSMImpl_1 = require("./../../ServiceMetier/ProduitSM/ProduitSMImpl");
var CommandeFactory_1 = require("../../../Contrainte/Factory/CommandeFactory");
var CommandeSAImpl = /** @class */ (function () {
    function CommandeSAImpl() {
        this.commandeSM = typedi_1.Container.get(CommandeSMImpl_1.CommandeSMImpl);
        this.clientSM = typedi_1.Container.get(ClientSMImpl_1.ClientSMImpl);
        this.produitSM = typedi_1.Container.get(ProduitSMImpl_1.ProduitSMImpl);
        this.factureDtoFactory = typedi_1.Container.get(FactureDtoFactory_1.FactureDtoFactory);
        this.commandeFactory = typedi_1.Container.get(CommandeFactory_1.CommandeFactory);
    }
    CommandeSAImpl.prototype.addCommande = function (commandeDto) {
        return __awaiter(this, void 0, void 0, function () {
            var clientDo, productIds, produits, commandeData, commande;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientSM.findClient(commandeDto.idClient)];
                    case 1:
                        clientDo = _a.sent();
                        productIds = commandeDto.lignes.map(function (l) { return l.idProduit; });
                        return [4 /*yield*/, this.produitSM.findProduits(productIds)];
                    case 2:
                        produits = _a.sent();
                        commandeData = this.commandeFactory.createCommandeDo(clientDo, produits, commandeDto);
                        if (!(commandeData.commandeDo.ligneCommande.length !== 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.commandeSM.addCommande(commandeData.commandeDo)];
                    case 3:
                        commande = _a.sent();
                        return [4 /*yield*/, this.produitSM.addOrUpdateProduit(commande.ligneCommande.map(function (l) { return l.produit; }))];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, { commande: commande, stockEpuise: commandeData.stockEpuise }];
                    case 5: return [2 /*return*/, { stockEpuise: commandeData.stockEpuise, commande: null }];
                }
            });
        });
    };
    CommandeSAImpl.prototype.deleteCommande = function (criteria) {
        return this.commandeSM.deleteCommande(criteria);
    };
    CommandeSAImpl.prototype.createFacture = function (idCommande) {
        return __awaiter(this, void 0, void 0, function () {
            var factureData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commandeSM.createFacture(idCommande)];
                    case 1:
                        factureData = _a.sent();
                        return [2 /*return*/, this.factureDtoFactory.createFactureDto(factureData)];
                }
            });
        });
    };
    CommandeSAImpl.prototype.getCommandeByClient = function (idClient) {
        throw new Error("Method not implemented.");
    };
    CommandeSAImpl = __decorate([
        typedi_1.Service()
    ], CommandeSAImpl);
    return CommandeSAImpl;
}());
exports.CommandeSAImpl = CommandeSAImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlQXBwbGljYXRpZi9Db21tYW5kZVNBL0NvbW1hbmRlU0FJbXBsLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9TZXJ2aWNlL1NlcnZpY2VBcHBsaWNhdGlmL0NvbW1hbmRlU0EvQ29tbWFuZGVTQUltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlDQUE0QztBQUM1QyxnRkFBK0U7QUFDL0UsbUZBQWtGO0FBRWxGLDBFQUF5RTtBQUN6RSwrRUFBOEU7QUFHOUUsK0VBQThFO0FBSTlFO0lBREE7UUFHSSxlQUFVLEdBQW1CLGtCQUFTLENBQUMsR0FBRyxDQUFDLCtCQUFjLENBQUMsQ0FBQztRQUMzRCxhQUFRLEdBQWlCLGtCQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsQ0FBQztRQUNyRCxjQUFTLEdBQWtCLGtCQUFTLENBQUMsR0FBRyxDQUFDLDZCQUFhLENBQUMsQ0FBQztRQUN4RCxzQkFBaUIsR0FBc0Isa0JBQVMsQ0FBQyxHQUFHLENBQUMscUNBQWlCLENBQUMsQ0FBQztRQUN4RSxvQkFBZSxHQUFvQixrQkFBUyxDQUFDLEdBQUcsQ0FBQyxpQ0FBZSxDQUFDLENBQUM7SUE0QnRFLENBQUM7SUExQlMsb0NBQVcsR0FBakIsVUFBa0IsV0FBZ0I7Ozs7OzRCQUNQLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQXZFLFFBQVEsR0FBVyxTQUFvRDt3QkFDdkUsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBWCxDQUFXLENBQUMsQ0FBQzt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFuRSxRQUFRLEdBQWMsU0FBNkM7d0JBQ25FLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7NkJBQ3RGLENBQUEsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQSxFQUFsRCx3QkFBa0Q7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQXJFLFFBQVEsR0FBRyxTQUEwRDt3QkFDekUscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLENBQUMsRUFBQTs7d0JBQW5GLFNBQW1GLENBQUM7d0JBQ3BGLHNCQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBQzs0QkFFM0Qsc0JBQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUM7Ozs7S0FFeEU7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsUUFBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVLLHNDQUFhLEdBQW5CLFVBQW9CLFVBQWtCOzs7Ozs0QkFDaEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUE3RCxXQUFXLEdBQUcsU0FBK0M7d0JBQ2pFLHNCQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBQzs7OztLQUMvRDtJQUVELDRDQUFtQixHQUFuQixVQUFvQixRQUFnQjtRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQWpDUSxjQUFjO1FBRDFCLGdCQUFPLEVBQUU7T0FDRyxjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kZVNBQWNpIH0gZnJvbSBcIi4vQ29tbWFuZGVTQUFjaVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlLCBDb250YWluZXIgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IENvbW1hbmRlU01JbXBsIH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VNZXRpZXIvQ29tbWFuZGVTTS9Db21tYW5kZVNNSW1wbFwiO1xyXG5pbXBvcnQgeyBGYWN0dXJlRHRvRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL0NvbnRyYWludGUvRmFjdG9yeS9GYWN0dXJlRHRvRmFjdG9yeSc7XHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi8uLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9DbGllbnRcIjtcclxuaW1wb3J0IHsgQ2xpZW50U01JbXBsIH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VNZXRpZXIvQ2xpZW50U00vQ2xpZW50U01JbXBsXCI7XHJcbmltcG9ydCB7IFByb2R1aXRTTUltcGwgfSBmcm9tICcuLy4uLy4uL1NlcnZpY2VNZXRpZXIvUHJvZHVpdFNNL1Byb2R1aXRTTUltcGwnO1xyXG5pbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSBcIi4uLy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L1Byb2R1aXRcIjtcclxuaW1wb3J0IHsgQ29tbWFuZGUgfSBmcm9tIFwiLi4vLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvQ29tbWFuZGVcIjtcclxuaW1wb3J0IHsgQ29tbWFuZGVGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL0NvbnRyYWludGUvRmFjdG9yeS9Db21tYW5kZUZhY3RvcnlcIjtcclxuaW1wb3J0IHsgTGlnbmVDb21tYW5kZSB9IGZyb20gJy4vLi4vLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvTGlnbmVDb21tYW5kZSc7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kZVNBSW1wbCBpbXBsZW1lbnRzIENvbW1hbmRlU0FBY2kge1xyXG5cclxuICAgIGNvbW1hbmRlU006IENvbW1hbmRlU01JbXBsID0gQ29udGFpbmVyLmdldChDb21tYW5kZVNNSW1wbCk7XHJcbiAgICBjbGllbnRTTTogQ2xpZW50U01JbXBsID0gQ29udGFpbmVyLmdldChDbGllbnRTTUltcGwpO1xyXG4gICAgcHJvZHVpdFNNOiBQcm9kdWl0U01JbXBsID0gQ29udGFpbmVyLmdldChQcm9kdWl0U01JbXBsKTtcclxuICAgIGZhY3R1cmVEdG9GYWN0b3J5OiBGYWN0dXJlRHRvRmFjdG9yeSA9IENvbnRhaW5lci5nZXQoRmFjdHVyZUR0b0ZhY3RvcnkpO1xyXG4gICAgY29tbWFuZGVGYWN0b3J5OiBDb21tYW5kZUZhY3RvcnkgPSBDb250YWluZXIuZ2V0KENvbW1hbmRlRmFjdG9yeSk7XHJcblxyXG4gICAgYXN5bmMgYWRkQ29tbWFuZGUoY29tbWFuZGVEdG86IGFueSkge1xyXG4gICAgICAgIGxldCBjbGllbnREbzogQ2xpZW50ID0gYXdhaXQgdGhpcy5jbGllbnRTTS5maW5kQ2xpZW50KGNvbW1hbmRlRHRvLmlkQ2xpZW50KTtcclxuICAgICAgICBsZXQgcHJvZHVjdElkcyA9IGNvbW1hbmRlRHRvLmxpZ25lcy5tYXAobCA9PiBsLmlkUHJvZHVpdCk7XHJcbiAgICAgICAgbGV0IHByb2R1aXRzOiBQcm9kdWl0W10gPSBhd2FpdCB0aGlzLnByb2R1aXRTTS5maW5kUHJvZHVpdHMocHJvZHVjdElkcyk7XHJcbiAgICAgICAgbGV0IGNvbW1hbmRlRGF0YSA9IHRoaXMuY29tbWFuZGVGYWN0b3J5LmNyZWF0ZUNvbW1hbmRlRG8oY2xpZW50RG8sIHByb2R1aXRzLCBjb21tYW5kZUR0byk7XHJcbiAgICAgICAgaWYgKGNvbW1hbmRlRGF0YS5jb21tYW5kZURvLmxpZ25lQ29tbWFuZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kZSA9IGF3YWl0IHRoaXMuY29tbWFuZGVTTS5hZGRDb21tYW5kZShjb21tYW5kZURhdGEuY29tbWFuZGVEbyk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvZHVpdFNNLmFkZE9yVXBkYXRlUHJvZHVpdChjb21tYW5kZS5saWduZUNvbW1hbmRlLm1hcChsID0+IGwucHJvZHVpdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBjb21tYW5kZSwgc3RvY2tFcHVpc2U6IGNvbW1hbmRlRGF0YS5zdG9ja0VwdWlzZSB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0b2NrRXB1aXNlOiBjb21tYW5kZURhdGEuc3RvY2tFcHVpc2UsIGNvbW1hbmRlOiBudWxsIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbW1hbmRlKGNyaXRlcmlhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kZVNNLmRlbGV0ZUNvbW1hbmRlKGNyaXRlcmlhKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGVGYWN0dXJlKGlkQ29tbWFuZGU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBmYWN0dXJlRGF0YSA9IGF3YWl0IHRoaXMuY29tbWFuZGVTTS5jcmVhdGVGYWN0dXJlKGlkQ29tbWFuZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhY3R1cmVEdG9GYWN0b3J5LmNyZWF0ZUZhY3R1cmVEdG8oZmFjdHVyZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1hbmRlQnlDbGllbnQoaWRDbGllbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59Il19