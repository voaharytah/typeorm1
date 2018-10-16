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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Commande_1 = require("./Commande");
var Produit_1 = require("./Produit");
var LigneCommande = /** @class */ (function () {
    function LigneCommande() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], LigneCommande.prototype, "idLignecommande", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Commande_1.Commande; }, function (commande) { return commande.ligneCommande; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Commande_1.Commande)
    ], LigneCommande.prototype, "commande", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Produit_1.Produit; }, function (produit) { return produit.ligneCommande; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Produit_1.Produit)
    ], LigneCommande.prototype, "produit", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], LigneCommande.prototype, "qte", void 0);
    LigneCommande = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], LigneCommande);
    return LigneCommande;
}());
exports.LigneCommande = LigneCommande;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvTGlnbmVDb21tYW5kZS50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvTGlnbmVDb21tYW5kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RTtBQUM1RSx1Q0FBc0M7QUFDdEMscUNBQW9DO0FBR3BDO0lBYUk7SUFFQSxDQUFDO0lBYkQ7UUFEQyxnQ0FBc0IsRUFBRTs7MERBQ0Q7SUFHeEI7UUFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsbUJBQVEsRUFBUixDQUFRLEVBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsYUFBYSxFQUF0QixDQUFzQixFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO2tDQUM3RSxtQkFBUTttREFBQztJQUduQjtRQURDLG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxpQkFBTyxFQUFQLENBQU8sRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxhQUFhLEVBQXJCLENBQXFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7a0NBQzNFLGlCQUFPO2tEQUFDO0lBR2pCO1FBREMsZ0JBQU0sRUFBRTs7OENBQ0c7SUFYSCxhQUFhO1FBRHpCLGdCQUFNLEVBQUU7O09BQ0ksYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBNYW55VG9PbmUsIEVudGl0eSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IENvbW1hbmRlIH0gZnJvbSBcIi4vQ29tbWFuZGVcIjtcclxuaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gJy4vUHJvZHVpdCc7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIExpZ25lQ29tbWFuZGUge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWRMaWduZWNvbW1hbmRlOiBudW1iZXI7XHJcblxyXG4gICAgQE1hbnlUb09uZSh0eXBlID0+IENvbW1hbmRlLCBjb21tYW5kZSA9PiBjb21tYW5kZS5saWduZUNvbW1hbmRlLCB7b25EZWxldGU6ICdDQVNDQURFJ30pXHJcbiAgICBjb21tYW5kZTogQ29tbWFuZGU7XHJcblxyXG4gICAgQE1hbnlUb09uZSh0eXBlID0+IFByb2R1aXQsIHByb2R1aXQgPT4gcHJvZHVpdC5saWduZUNvbW1hbmRlLCB7b25EZWxldGU6ICdDQVNDQURFJ30pXHJcbiAgICBwcm9kdWl0OiBQcm9kdWl0O1xyXG4gICAgXHJcbiAgICBAQ29sdW1uKClcclxuICAgIHF0ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59Il19