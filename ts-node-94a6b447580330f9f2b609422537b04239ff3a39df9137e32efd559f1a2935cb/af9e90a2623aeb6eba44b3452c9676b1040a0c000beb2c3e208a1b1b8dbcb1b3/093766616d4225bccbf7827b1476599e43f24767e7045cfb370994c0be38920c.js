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
var Commande_1 = require("../../Donnees/DomainObject/Commande");
var CommandeRepositoryImpl = /** @class */ (function (_super) {
    __extends(CommandeRepositoryImpl, _super);
    function CommandeRepositoryImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandeRepositoryImpl.prototype.addCommande = function (commandeDo) {
        return this.save(commandeDo);
    };
    CommandeRepositoryImpl.prototype.deleteCommande = function (criteria) {
        return this.delete(criteria);
    };
    CommandeRepositoryImpl.prototype.getCommandeByClient = function (idClient) {
        return this.createQueryBuilder("commande")
            .where("commande.client.idClient = :idClient", { idClient: idClient })
            .getMany();
    };
    CommandeRepositoryImpl.prototype.createFacture = function (idCommande) {
        return this.createQueryBuilder("commande")
            .innerJoinAndSelect("commande.client", "client")
            .innerJoinAndSelect("commande.ligneCommande", "ligneCommande")
            .innerJoinAndSelect("ligneCommande.produit", "produit")
            .where("commande.idCommande = :idCommande", { idCommande: idCommande })
            .getOne();
    };
    CommandeRepositoryImpl = __decorate([
        typedi_1.Service(),
        typeorm_1.EntityRepository(Commande_1.Commande)
    ], CommandeRepositoryImpl);
    return CommandeRepositoryImpl;
}(typeorm_1.Repository));
exports.CommandeRepositoryImpl = CommandeRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9Db21tYW5kZVJlcG9zaXRvcnkvQ29tbWFuZGVSZXBvc2l0b3J5SW1wbC50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9Db21tYW5kZVJlcG9zaXRvcnkvQ29tbWFuZGVSZXBvc2l0b3J5SW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsbUNBQXVEO0FBQ3ZELGdFQUErRDtBQU0vRDtJQUE0QywwQ0FBb0I7SUFBaEU7O0lBMEJBLENBQUM7SUF4QkcsNENBQVcsR0FBWCxVQUFZLFVBQW9CO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsUUFBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0RBQW1CLEdBQW5CLFVBQW9CLFFBQWdCO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDO2FBQ3JDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7YUFDM0QsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzthQUNyQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUM7YUFDL0Msa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxDQUFDO2FBQzdELGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQzthQUN0RCxLQUFLLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDO2FBQzFELE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUF2QlEsc0JBQXNCO1FBRmxDLGdCQUFPLEVBQUU7UUFDVCwwQkFBZ0IsQ0FBQyxtQkFBUSxDQUFDO09BQ2Qsc0JBQXNCLENBMEJsQztJQUFELDZCQUFDO0NBQUEsQUExQkQsQ0FBNEMsb0JBQVUsR0EwQnJEO0FBMUJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnksIFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kZSB9IGZyb20gJy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NvbW1hbmRlJztcclxuaW1wb3J0IHsgQ29tbWFuZGVSZXBvc2l0b3J5QWNpIH0gZnJvbSBcIi4vQ29tbWFuZGVSZXBvc2l0b3J5QWNpXCI7XHJcblxyXG5cclxuQFNlcnZpY2UoKVxyXG5ARW50aXR5UmVwb3NpdG9yeShDb21tYW5kZSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRlUmVwb3NpdG9yeUltcGwgZXh0ZW5kcyBSZXBvc2l0b3J5PENvbW1hbmRlPiBpbXBsZW1lbnRzIENvbW1hbmRlUmVwb3NpdG9yeUFjaSB7XHJcblxyXG4gICAgYWRkQ29tbWFuZGUoY29tbWFuZGVEbzogQ29tbWFuZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zYXZlKGNvbW1hbmRlRG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbW1hbmRlKGNyaXRlcmlhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoY3JpdGVyaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1hbmRlQnlDbGllbnQoaWRDbGllbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcImNvbW1hbmRlXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcImNvbW1hbmRlLmNsaWVudC5pZENsaWVudCA9IDppZENsaWVudFwiLCB7IGlkQ2xpZW50IH0pXHJcbiAgICAgICAgICAgIC5nZXRNYW55KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmFjdHVyZShpZENvbW1hbmRlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJjb21tYW5kZVwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luQW5kU2VsZWN0KFwiY29tbWFuZGUuY2xpZW50XCIsIFwiY2xpZW50XCIpXHJcbiAgICAgICAgICAgIC5pbm5lckpvaW5BbmRTZWxlY3QoXCJjb21tYW5kZS5saWduZUNvbW1hbmRlXCIsIFwibGlnbmVDb21tYW5kZVwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luQW5kU2VsZWN0KFwibGlnbmVDb21tYW5kZS5wcm9kdWl0XCIsIFwicHJvZHVpdFwiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJjb21tYW5kZS5pZENvbW1hbmRlID0gOmlkQ29tbWFuZGVcIiwgeyBpZENvbW1hbmRlIH0pXHJcbiAgICAgICAgICAgIC5nZXRPbmUoKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19