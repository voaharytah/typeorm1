"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var typeorm_1 = require("typeorm");
var Produit_1 = require("../../Donnees/DomainObject/Produit");
var ProduitRepositoryImpl = /** @class */ (function (_super) {
    __extends(ProduitRepositoryImpl, _super);
    function ProduitRepositoryImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProduitRepositoryImpl.prototype.addOrUpdateProduit = function (produitDo) {
        return this.save(produitDo);
    };
    ProduitRepositoryImpl.prototype.findProduits = function (idProduits) {
        return this.findByIds(idProduits);
    };
    ProduitRepositoryImpl.prototype.getProduit = function (criteria) {
        return this.findOne(criteria);
    };
    ProduitRepositoryImpl.prototype.deleteProduit = function (criteria) {
        return this.delete(criteria);
    };
    ProduitRepositoryImpl.prototype.mostOrderedProduct = function (searchParams) {
        return this.createQueryBuilder("produit")
            .select("COUNT(ligneCommande.produit.idProduit)", "nbCommande")
            .addSelect("produit.idProduit")
            .addSelect("produit.libelle")
            .leftJoin("produit.ligneCommande", "ligneCommande")
            .groupBy("produit.idProduit")
            .orderBy("COUNT(ligneCommande.produit.idProduit)", "DESC")
            .offset(searchParams.offset)
            .limit(searchParams.size)
            .getRawMany();
    };
    ProduitRepositoryImpl.prototype.getproduits = function (searchParams) {
        return this.createQueryBuilder("produit")
            .where(searchParams.criteria)
            .skip(searchParams.offset)
            .take(searchParams.size)
            .getMany();
    };
    ProduitRepositoryImpl = __decorate([
        typedi_1.Service(),
        typeorm_1.EntityRepository(Produit_1.Produit)
    ], ProduitRepositoryImpl);
    return ProduitRepositoryImpl;
}(typeorm_1.Repository));
exports.ProduitRepositoryImpl = ProduitRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9Qcm9kdWl0UmVwb3NpdG9yeS9Qcm9kdWl0UmVwb3NpdG9yeUltcGwudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL1JlcG9zaXRvcnkvUHJvZHVpdFJlcG9zaXRvcnkvUHJvZHVpdFJlcG9zaXRvcnlJbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxtQ0FBdUQ7QUFDdkQsOERBQTZEO0FBSzdEO0lBQTJDLHlDQUFtQjtJQUE5RDs7SUF5Q0EsQ0FBQztJQXRDRyxrREFBa0IsR0FBbEIsVUFBbUIsU0FBb0I7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxVQUFvQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLFFBQWE7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxRQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrREFBa0IsR0FBbEIsVUFBbUIsWUFBaUI7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDcEMsTUFBTSxDQUFDLHdDQUF3QyxFQUFFLFlBQVksQ0FBQzthQUM5RCxTQUFTLENBQUMsbUJBQW1CLENBQUM7YUFDOUIsU0FBUyxDQUFDLGlCQUFpQixDQUFDO2FBQzVCLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxlQUFlLENBQUM7YUFDbEQsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2FBQzVCLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxNQUFNLENBQUM7YUFDekQsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDeEIsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUdELDJDQUFXLEdBQVgsVUFBWSxZQUFpQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzthQUNwQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQzthQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBdkNRLHFCQUFxQjtRQUZqQyxnQkFBTyxFQUFFO1FBQ1QsMEJBQWdCLENBQUMsaUJBQU8sQ0FBQztPQUNiLHFCQUFxQixDQXlDakM7SUFBRCw0QkFBQztDQUFBLEFBekNELENBQTJDLG9CQUFVLEdBeUNwRDtBQXpDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9Qcm9kdWl0XCI7XHJcbmltcG9ydCB7IFByb2R1aXRSZXBvc2l0b3J5QWNpIH0gZnJvbSBcIi4vUHJvZHVpdFJlcG9zaXRvcnlBY2lcIjtcclxuXHJcbkBTZXJ2aWNlKClcclxuQEVudGl0eVJlcG9zaXRvcnkoUHJvZHVpdClcclxuZXhwb3J0IGNsYXNzIFByb2R1aXRSZXBvc2l0b3J5SW1wbCBleHRlbmRzIFJlcG9zaXRvcnk8UHJvZHVpdD4gaW1wbGVtZW50cyBQcm9kdWl0UmVwb3NpdG9yeUFjaSB7XHJcbiAgIFxyXG5cclxuICAgIGFkZE9yVXBkYXRlUHJvZHVpdChwcm9kdWl0RG86IFByb2R1aXRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhdmUocHJvZHVpdERvKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUHJvZHVpdHMoaWRQcm9kdWl0czogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kQnlJZHMoaWRQcm9kdWl0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVpdChjcml0ZXJpYTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZE9uZShjcml0ZXJpYSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvZHVpdChjcml0ZXJpYTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGNyaXRlcmlhKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3N0T3JkZXJlZFByb2R1Y3Qoc2VhcmNoUGFyYW1zOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJwcm9kdWl0XCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoXCJDT1VOVChsaWduZUNvbW1hbmRlLnByb2R1aXQuaWRQcm9kdWl0KVwiLCBcIm5iQ29tbWFuZGVcIilcclxuICAgICAgICAgICAgLmFkZFNlbGVjdChcInByb2R1aXQuaWRQcm9kdWl0XCIpXHJcbiAgICAgICAgICAgIC5hZGRTZWxlY3QoXCJwcm9kdWl0LmxpYmVsbGVcIikgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sZWZ0Sm9pbihcInByb2R1aXQubGlnbmVDb21tYW5kZVwiLCBcImxpZ25lQ29tbWFuZGVcIilcclxuICAgICAgICAgICAgLmdyb3VwQnkoXCJwcm9kdWl0LmlkUHJvZHVpdFwiKVxyXG4gICAgICAgICAgICAub3JkZXJCeShcIkNPVU5UKGxpZ25lQ29tbWFuZGUucHJvZHVpdC5pZFByb2R1aXQpXCIsIFwiREVTQ1wiKVxyXG4gICAgICAgICAgICAub2Zmc2V0KHNlYXJjaFBhcmFtcy5vZmZzZXQpXHJcbiAgICAgICAgICAgIC5saW1pdChzZWFyY2hQYXJhbXMuc2l6ZSlcclxuICAgICAgICAgICAgLmdldFJhd01hbnkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0cHJvZHVpdHMoc2VhcmNoUGFyYW1zOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJwcm9kdWl0XCIpXHJcbiAgICAgICAgICAgIC53aGVyZShzZWFyY2hQYXJhbXMuY3JpdGVyaWEpXHJcbiAgICAgICAgICAgIC5za2lwKHNlYXJjaFBhcmFtcy5vZmZzZXQpXHJcbiAgICAgICAgICAgIC50YWtlKHNlYXJjaFBhcmFtcy5zaXplKVxyXG4gICAgICAgICAgICAuZ2V0TWFueSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==