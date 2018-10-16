"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProduitDto_1 = require("../../Donnees/DataTransfertObject/ProduitDto");
var typedi_1 = require("typedi");
var ProduitFactory = /** @class */ (function () {
    function ProduitFactory() {
    }
    ProduitFactory.prototype.mostOrderedProductDto = function (produits) {
        var mostOrderedProductDto = produits.map(function (p) { return new ProduitDto_1.MostOrderedProductDto(p.produit_idProduit, p.produit_libelle, p.nbCommande); });
        return mostOrderedProductDto;
    };
    ProduitFactory = __decorate([
        typedi_1.Service()
    ], ProduitFactory);
    return ProduitFactory;
}());
exports.ProduitFactory = ProduitFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L1Byb2R1aXRGYWN0b3J5LnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db250cmFpbnRlL0ZhY3RvcnkvUHJvZHVpdEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyRUFBcUY7QUFDckYsaUNBQWlDO0FBUWpDO0lBQUE7SUFLQSxDQUFDO0lBSkcsOENBQXFCLEdBQXJCLFVBQXNCLFFBQWE7UUFDL0IsSUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxrQ0FBcUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQS9FLENBQStFLENBQUMsQ0FBQztRQUNqSSxNQUFNLENBQUMscUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUpRLGNBQWM7UUFEMUIsZ0JBQU8sRUFBRTtPQUNHLGNBQWMsQ0FLMUI7SUFBRCxxQkFBQztDQUFBLEFBTEQsSUFLQztBQUxZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9zdE9yZGVyZWRQcm9kdWN0RHRvIH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9Qcm9kdWl0RHRvXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWl0RmFjdG9yeUFjaSB7XHJcbiAgICBtb3N0T3JkZXJlZFByb2R1Y3REdG8ocHJvZHVpdHM6IGFueSlcclxufVxyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVpdEZhY3RvcnkgaW1wbGVtZW50cyBQcm9kdWl0RmFjdG9yeUFjaSB7XHJcbiAgICBtb3N0T3JkZXJlZFByb2R1Y3REdG8ocHJvZHVpdHM6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG1vc3RPcmRlcmVkUHJvZHVjdER0byA9IHByb2R1aXRzLm1hcChwID0+IG5ldyBNb3N0T3JkZXJlZFByb2R1Y3REdG8ocC5wcm9kdWl0X2lkUHJvZHVpdCwgcC5wcm9kdWl0X2xpYmVsbGUsIHAubmJDb21tYW5kZSkpO1xyXG4gICAgICAgIHJldHVybiBtb3N0T3JkZXJlZFByb2R1Y3REdG87XHJcbiAgICB9XHJcbn0iXX0=