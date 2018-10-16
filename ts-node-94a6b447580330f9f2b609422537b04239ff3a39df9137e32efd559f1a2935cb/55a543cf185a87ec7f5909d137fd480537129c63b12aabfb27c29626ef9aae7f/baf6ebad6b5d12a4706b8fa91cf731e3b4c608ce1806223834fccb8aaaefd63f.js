"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FactureDto_1 = require("../../Donnees/DataTransfertObject/FactureDto");
var ResponseDto_1 = require("../../Donnees/DataTransfertObject/ResponseDto");
var typedi_1 = require("typedi");
var FactureDtoFactory = /** @class */ (function () {
    function FactureDtoFactory() {
    }
    FactureDtoFactory.prototype.createFactureDto = function (factureData) {
        if (factureData) {
            var client = factureData.client;
            var ligneCommande = factureData.ligneCommande;
            var total = ligneCommande.map(function (l) { return l.produit.pu * l.qte; }).reduce(function (l, current) { return l + current; }, 0);
            var factureDto = new FactureDto_1.FactureDto(factureData.idCommande, factureData.dateCommande, client, ligneCommande, total);
            return new ResponseDto_1.SuccessResponseDto(factureDto);
        }
        else {
            return new ResponseDto_1.SuccessResponseDto({});
        }
    };
    FactureDtoFactory = __decorate([
        typedi_1.Service()
    ], FactureDtoFactory);
    return FactureDtoFactory;
}());
exports.FactureDtoFactory = FactureDtoFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L0ZhY3R1cmVEdG9GYWN0b3J5LnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db250cmFpbnRlL0ZhY3RvcnkvRmFjdHVyZUR0b0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyRUFBMEU7QUFHMUUsNkVBQXFHO0FBQ3JHLGlDQUFpQztBQU9qQztJQUFBO0lBa0JBLENBQUM7SUFoQkcsNENBQWdCLEdBQWhCLFVBQWlCLFdBQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzFDLElBQU0sYUFBYSxHQUFvQixXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ2pFLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFwQixDQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLENBQUMsR0FBRyxPQUFPLEVBQVgsQ0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FDN0IsV0FBVyxDQUFDLFVBQVUsRUFDdEIsV0FBVyxDQUFDLFlBQVksRUFDeEIsTUFBTSxFQUNOLGFBQWEsRUFDYixLQUFLLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJLGdDQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLGdDQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBakJRLGlCQUFpQjtRQUQ3QixnQkFBTyxFQUFFO09BQ0csaUJBQWlCLENBa0I3QjtJQUFELHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdHVyZUR0byB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvRmFjdHVyZUR0b1wiO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvQ2xpZW50XCI7XHJcbmltcG9ydCB7IExpZ25lQ29tbWFuZGUgfSBmcm9tICcuLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9MaWduZUNvbW1hbmRlJztcclxuaW1wb3J0IHsgU3VjY2Vzc1Jlc3BvbnNlRHRvLCBFcnJvclJlc3BvbnNlRHRvIH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9SZXNwb25zZUR0b1wiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWN0dXJlRHRvRmFjdG9yeUFjaSB7XHJcbiAgICBjcmVhdGVGYWN0dXJlRHRvKGZhY3R1cmVEYXRhOiBhbnkpOiBTdWNjZXNzUmVzcG9uc2VEdG87XHJcbn1cclxuXHJcbkBTZXJ2aWNlKClcclxuZXhwb3J0IGNsYXNzIEZhY3R1cmVEdG9GYWN0b3J5IGltcGxlbWVudHMgRmFjdHVyZUR0b0ZhY3RvcnlBY2kge1xyXG5cclxuICAgIGNyZWF0ZUZhY3R1cmVEdG8oZmFjdHVyZURhdGE6IGFueSk6IFN1Y2Nlc3NSZXNwb25zZUR0byB7XHJcbiAgICAgICAgaWYgKGZhY3R1cmVEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudDogQ2xpZW50ID0gZmFjdHVyZURhdGEuY2xpZW50O1xyXG4gICAgICAgICAgICBjb25zdCBsaWduZUNvbW1hbmRlOiBMaWduZUNvbW1hbmRlW10gPSBmYWN0dXJlRGF0YS5saWduZUNvbW1hbmRlO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGxpZ25lQ29tbWFuZGUubWFwKGwgPT4gbC5wcm9kdWl0LnB1ICogbC5xdGUpLnJlZHVjZSgobCwgY3VycmVudCkgPT4gbCArIGN1cnJlbnQsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBmYWN0dXJlRHRvID0gbmV3IEZhY3R1cmVEdG8oXHJcbiAgICAgICAgICAgICAgICBmYWN0dXJlRGF0YS5pZENvbW1hbmRlLFxyXG4gICAgICAgICAgICAgICAgZmFjdHVyZURhdGEuZGF0ZUNvbW1hbmRlLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgbGlnbmVDb21tYW5kZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWNjZXNzUmVzcG9uc2VEdG8oZmFjdHVyZUR0byk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWNjZXNzUmVzcG9uc2VEdG8oe30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==