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
var LigneCommande_1 = require("./LigneCommande");
var Produit = /** @class */ (function () {
    function Produit(_libelle, _pu) {
        this.libelle = _libelle;
        this.pu = _pu;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Produit.prototype, "idProduit", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Produit.prototype, "libelle", void 0);
    __decorate([
        typeorm_1.Column("double"),
        __metadata("design:type", Number)
    ], Produit.prototype, "pu", void 0);
    __decorate([
        typeorm_1.Column("double"),
        __metadata("design:type", Number)
    ], Produit.prototype, "qte", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return LigneCommande_1.LigneCommande; }, function (lignecommande) { return lignecommande.produit; }, { cascade: true }),
        __metadata("design:type", Array)
    ], Produit.prototype, "ligneCommande", void 0);
    Produit = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [String, Number])
    ], Produit);
    return Produit;
}());
exports.Produit = Produit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvUHJvZHVpdC50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvUHJvZHVpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RTtBQUM1RSxpREFBZ0Q7QUFHaEQ7SUFnQkksaUJBQVksUUFBZ0IsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFqQkQ7UUFEQyxnQ0FBc0IsRUFBRTs7OENBQ1A7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDTztJQUdoQjtRQURDLGdCQUFNLENBQUMsUUFBUSxDQUFDOzt1Q0FDTjtJQUdYO1FBREMsZ0JBQU0sQ0FBQyxRQUFRLENBQUM7O3dDQUNMO0lBR1o7UUFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsNkJBQWEsRUFBYixDQUFhLEVBQUUsVUFBQSxhQUFhLElBQUksT0FBQSxhQUFhLENBQUMsT0FBTyxFQUFyQixDQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztrREFDN0Q7SUFkdEIsT0FBTztRQURuQixnQkFBTSxFQUFFOztPQUNJLE9BQU8sQ0FvQm5CO0lBQUQsY0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIE9uZVRvTWFueSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IExpZ25lQ29tbWFuZGUgfSBmcm9tICcuL0xpZ25lQ29tbWFuZGUnO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWl0IHtcclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIGlkUHJvZHVpdDogbnVtYmVyO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgbGliZWxsZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oXCJkb3VibGVcIilcclxuICAgIHB1OiBudW1iZXI7XHJcblxyXG4gICAgQENvbHVtbihcImRvdWJsZVwiKVxyXG4gICAgcXRlOiBudW1iZXI7XHJcblxyXG4gICAgQE9uZVRvTWFueSh0eXBlID0+IExpZ25lQ29tbWFuZGUsIGxpZ25lY29tbWFuZGUgPT4gbGlnbmVjb21tYW5kZS5wcm9kdWl0LCB7IGNhc2NhZGU6IHRydWUgfSlcclxuICAgIGxpZ25lQ29tbWFuZGU6IExpZ25lQ29tbWFuZGVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfbGliZWxsZTogc3RyaW5nLCBfcHU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGliZWxsZSA9IF9saWJlbGxlO1xyXG4gICAgICAgIHRoaXMucHUgPSBfcHU7XHJcbiAgICB9XHJcbn0iXX0=