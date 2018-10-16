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
var Client_1 = require("../../Donnees/DomainObject/Client");
var ClientRepositoryImpl = /** @class */ (function (_super) {
    __extends(ClientRepositoryImpl, _super);
    function ClientRepositoryImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientRepositoryImpl.prototype.findClient = function (idClient) {
        return this.findOne(idClient);
    };
    ClientRepositoryImpl.prototype.saveClient = function (client) {
        return this.save(client);
    };
    ClientRepositoryImpl.prototype.getClients = function (searchParams) {
        return this.createQueryBuilder("client")
            .where(searchParams.criteria)
            .skip(searchParams.offset)
            .take(searchParams.size)
            .getMany();
    };
    ClientRepositoryImpl.prototype.clientsTotalAmount = function (searchParams) {
        return this.createQueryBuilder("client")
            .select("SUM(ligneCommande.qte * produit.pu)", "ca")
            .addSelect("client")
            .innerJoin("client.commandes", "commande")
            .innerJoin("commande.ligneCommande", "ligneCommande")
            .innerJoin("ligneCommande.produit", "produit")
            .groupBy("client.idClient")
            .offset(searchParams.offset)
            .limit(searchParams.size)
            .getRawMany();
    };
    ClientRepositoryImpl.prototype.clientTotalAmount = function (idClient) {
        return this.createQueryBuilder("client")
            .select("SUM(ligneCommande.qte * produit.pu)", "sum")
            .innerJoin("client.commandes", "commande")
            .innerJoin("commande.ligneCommande", "ligneCommande")
            .innerJoin("ligneCommande.produit", "produit")
            .where("client.idClient = :idClient", { idClient: idClient })
            .getRawOne();
    };
    ClientRepositoryImpl = __decorate([
        typedi_1.Service(),
        typeorm_1.EntityRepository(Client_1.Client)
    ], ClientRepositoryImpl);
    return ClientRepositoryImpl;
}(typeorm_1.Repository));
exports.ClientRepositoryImpl = ClientRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9DbGllbnRSZXBvc2l0b3J5L0NsaWVudFJlcG9zaXRvcnlJbXBsLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9SZXBvc2l0b3J5L0NsaWVudFJlcG9zaXRvcnkvQ2xpZW50UmVwb3NpdG9yeUltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLG1DQUF1RDtBQUN2RCw0REFBMkQ7QUFNM0Q7SUFBMEMsd0NBQWtCO0lBQTVEOztJQXlDQSxDQUFDO0lBdkNHLHlDQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLE1BQWM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxZQUFpQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQzthQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaURBQWtCLEdBQWxCLFVBQW1CLFlBQWlCO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUM7YUFDbkQsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNuQixTQUFTLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLENBQUM7YUFDcEQsU0FBUyxDQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQzthQUM3QyxPQUFPLENBQUMsaUJBQWlCLENBQUM7YUFDMUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDeEIsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdEQUFpQixHQUFqQixVQUFrQixRQUFnQjtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUNuQyxNQUFNLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDO2FBQ3BELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUM7YUFDekMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLGVBQWUsQ0FBQzthQUNwRCxTQUFTLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxDQUFDO2FBQzdDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFDLFFBQVEsVUFBQSxFQUFDLENBQUM7YUFDaEQsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZDUSxvQkFBb0I7UUFGaEMsZ0JBQU8sRUFBRTtRQUNULDBCQUFnQixDQUFDLGVBQU0sQ0FBQztPQUNaLG9CQUFvQixDQXlDaEM7SUFBRCwyQkFBQztDQUFBLEFBekNELENBQTBDLG9CQUFVLEdBeUNuRDtBQXpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NsaWVudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRSZXBvc2l0b3J5QWNpIH0gZnJvbSBcIi4vQ2xpZW50UmVwb3NpdG9yeUFjaVwiO1xyXG5cclxuXHJcbkBTZXJ2aWNlKClcclxuQEVudGl0eVJlcG9zaXRvcnkoQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50UmVwb3NpdG9yeUltcGwgZXh0ZW5kcyBSZXBvc2l0b3J5PENsaWVudD4gaW1wbGVtZW50cyBDbGllbnRSZXBvc2l0b3J5QWNpIHtcclxuXHJcbiAgICBmaW5kQ2xpZW50KGlkQ2xpZW50OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kT25lKGlkQ2xpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ2xpZW50KGNsaWVudDogQ2xpZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZShjbGllbnQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0Q2xpZW50cyhzZWFyY2hQYXJhbXM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcImNsaWVudFwiKVxyXG4gICAgICAgICAgICAud2hlcmUoc2VhcmNoUGFyYW1zLmNyaXRlcmlhKVxyXG4gICAgICAgICAgICAuc2tpcChzZWFyY2hQYXJhbXMub2Zmc2V0KVxyXG4gICAgICAgICAgICAudGFrZShzZWFyY2hQYXJhbXMuc2l6ZSlcclxuICAgICAgICAgICAgLmdldE1hbnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRzVG90YWxBbW91bnQoc2VhcmNoUGFyYW1zOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJjbGllbnRcIilcclxuICAgICAgICAgICAgLnNlbGVjdChcIlNVTShsaWduZUNvbW1hbmRlLnF0ZSAqIHByb2R1aXQucHUpXCIsIFwiY2FcIilcclxuICAgICAgICAgICAgLmFkZFNlbGVjdChcImNsaWVudFwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luKFwiY2xpZW50LmNvbW1hbmRlc1wiLCBcImNvbW1hbmRlXCIpXHJcbiAgICAgICAgICAgIC5pbm5lckpvaW4oXCJjb21tYW5kZS5saWduZUNvbW1hbmRlXCIsIFwibGlnbmVDb21tYW5kZVwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luKFwibGlnbmVDb21tYW5kZS5wcm9kdWl0XCIsIFwicHJvZHVpdFwiKVxyXG4gICAgICAgICAgICAuZ3JvdXBCeShcImNsaWVudC5pZENsaWVudFwiKVxyXG4gICAgICAgICAgICAub2Zmc2V0KHNlYXJjaFBhcmFtcy5vZmZzZXQpXHJcbiAgICAgICAgICAgIC5saW1pdChzZWFyY2hQYXJhbXMuc2l6ZSlcclxuICAgICAgICAgICAgLmdldFJhd01hbnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRUb3RhbEFtb3VudChpZENsaWVudDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUXVlcnlCdWlsZGVyKFwiY2xpZW50XCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoXCJTVU0obGlnbmVDb21tYW5kZS5xdGUgKiBwcm9kdWl0LnB1KVwiLCBcInN1bVwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luKFwiY2xpZW50LmNvbW1hbmRlc1wiLCBcImNvbW1hbmRlXCIpXHJcbiAgICAgICAgICAgIC5pbm5lckpvaW4oXCJjb21tYW5kZS5saWduZUNvbW1hbmRlXCIsIFwibGlnbmVDb21tYW5kZVwiKVxyXG4gICAgICAgICAgICAuaW5uZXJKb2luKFwibGlnbmVDb21tYW5kZS5wcm9kdWl0XCIsIFwicHJvZHVpdFwiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJjbGllbnQuaWRDbGllbnQgPSA6aWRDbGllbnRcIiwge2lkQ2xpZW50fSlcclxuICAgICAgICAgICAgLmdldFJhd09uZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==