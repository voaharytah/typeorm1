"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var ProduitRepositoryImpl_1 = require("../../../Repository/ProduitRepository/ProduitRepositoryImpl");
var ProduitSMImpl = /** @class */ (function () {
    function ProduitSMImpl() {
        this.produitRespository = typedi_1.Container.get(ProduitRepositoryImpl_1.ProduitRepositoryImpl);
    }
    ProduitSMImpl.prototype.addOrUpdateProduit = function (produitDo) {
        return this.produitRespository.addOrUpdateProduit(produitDo);
    };
    ProduitSMImpl.prototype.findProduits = function (idProduits) {
        return this.produitRespository.findProduits(idProduits);
    };
    ProduitSMImpl.prototype.deleteProduit = function (criteria) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.produitRespository.deleteProduit(criteria)];
            });
        });
    };
    ProduitSMImpl.prototype.mostOrderedProduct = function (searchParams) {
        return this.produitRespository.mostOrderedProduct(searchParams);
    };
    __decorate([
        typeorm_typedi_extensions_1.InjectRepository(),
        __metadata("design:type", ProduitRepositoryImpl_1.ProduitRepositoryImpl)
    ], ProduitSMImpl.prototype, "produitRespository", void 0);
    ProduitSMImpl = __decorate([
        typedi_1.Service()
    ], ProduitSMImpl);
    return ProduitSMImpl;
}());
exports.ProduitSMImpl = ProduitSMImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlTWV0aWVyL1Byb2R1aXRTTS9Qcm9kdWl0U01JbXBsLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9TZXJ2aWNlL1NlcnZpY2VNZXRpZXIvUHJvZHVpdFNNL1Byb2R1aXRTTUltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE0QztBQUM1Qyx1RUFBNkQ7QUFDN0QscUdBQW9HO0FBS3BHO0lBREE7UUFJSSx1QkFBa0IsR0FBMEIsa0JBQVMsQ0FBQyxHQUFHLENBQUMsNkNBQXFCLENBQUMsQ0FBQztJQWtCckYsQ0FBQztJQWhCRywwQ0FBa0IsR0FBbEIsVUFBbUIsU0FBb0I7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLFVBQW9CO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFSyxxQ0FBYSxHQUFuQixVQUFvQixRQUFhOzs7Z0JBQzdCLHNCQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUM7OztLQUMxRDtJQUVELDBDQUFrQixHQUFsQixVQUFtQixZQUFpQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFoQkQ7UUFEQyw0Q0FBZ0IsRUFBRTtrQ0FDQyw2Q0FBcUI7NkRBQXdDO0lBSHhFLGFBQWE7UUFEekIsZ0JBQU8sRUFBRTtPQUNHLGFBQWEsQ0FxQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2UsIENvbnRhaW5lciB9IGZyb20gXCJ0eXBlZGlcIjtcclxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtLXR5cGVkaS1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IFByb2R1aXRSZXBvc2l0b3J5SW1wbCB9IGZyb20gXCIuLi8uLi8uLi9SZXBvc2l0b3J5L1Byb2R1aXRSZXBvc2l0b3J5L1Byb2R1aXRSZXBvc2l0b3J5SW1wbFwiO1xyXG5pbXBvcnQgeyBQcm9kdWl0U01BY2kgfSBmcm9tIFwiLi9Qcm9kdWl0U01BY2lcIjtcclxuaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gXCIuLi8uLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9Qcm9kdWl0XCI7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWl0U01JbXBsIGltcGxlbWVudHMgUHJvZHVpdFNNQWNpIHtcclxuICBcclxuICAgIEBJbmplY3RSZXBvc2l0b3J5KClcclxuICAgIHByb2R1aXRSZXNwb3NpdG9yeTogUHJvZHVpdFJlcG9zaXRvcnlJbXBsID0gQ29udGFpbmVyLmdldChQcm9kdWl0UmVwb3NpdG9yeUltcGwpO1xyXG5cclxuICAgIGFkZE9yVXBkYXRlUHJvZHVpdChwcm9kdWl0RG86IFByb2R1aXRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1aXRSZXNwb3NpdG9yeS5hZGRPclVwZGF0ZVByb2R1aXQocHJvZHVpdERvKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUHJvZHVpdHMoaWRQcm9kdWl0czogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0UmVzcG9zaXRvcnkuZmluZFByb2R1aXRzKGlkUHJvZHVpdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZVByb2R1aXQoY3JpdGVyaWE6IGFueSkgeyAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVpdFJlc3Bvc2l0b3J5LmRlbGV0ZVByb2R1aXQoY3JpdGVyaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vc3RPcmRlcmVkUHJvZHVjdChzZWFyY2hQYXJhbXM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1aXRSZXNwb3NpdG9yeS5tb3N0T3JkZXJlZFByb2R1Y3Qoc2VhcmNoUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbn0iXX0=