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
var Client_1 = require("./Client");
var LigneCommande_1 = require("./LigneCommande");
var Commande = /** @class */ (function () {
    function Commande() {
    }
    Commande.prototype.setDateCommande = function () {
        this.dateCommande = new Date();
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Commande.prototype, "idCommande", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Commande.prototype, "dateCommande", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Client_1.Client; }, function (client) { return client.commandes; }),
        __metadata("design:type", Client_1.Client)
    ], Commande.prototype, "client", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return LigneCommande_1.LigneCommande; }, function (ligneCommande) { return ligneCommande.commande; }, { cascade: true }),
        __metadata("design:type", Array)
    ], Commande.prototype, "ligneCommande", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Commande.prototype, "setDateCommande", null);
    Commande = __decorate([
        typeorm_1.Entity()
    ], Commande);
    return Commande;
}());
exports.Commande = Commande;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvQ29tbWFuZGUudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NvbW1hbmRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXFHO0FBQ3JHLG1DQUFrQztBQUNsQyxpREFBZ0Q7QUFHaEQ7SUFBQTtJQWlCQSxDQUFDO0lBSEcsa0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBZEQ7UUFEQyxnQ0FBc0IsRUFBRTs7Z0RBQ047SUFHbkI7UUFEQyxnQkFBTSxFQUFFO2tDQUNLLElBQUk7a0RBQUM7SUFHbkI7UUFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsZUFBTSxFQUFOLENBQU0sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLEVBQWhCLENBQWdCLENBQUM7a0NBQzlDLGVBQU07NENBQUM7SUFHZjtRQURDLG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSw2QkFBYSxFQUFiLENBQWEsRUFBRSxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxRQUFRLEVBQXRCLENBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUM5RDtJQUcvQjtRQURDLHNCQUFZLEVBQUU7Ozs7bURBR2Q7SUFoQlEsUUFBUTtRQURwQixnQkFBTSxFQUFFO09BQ0ksUUFBUSxDQWlCcEI7SUFBRCxlQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgTWFueVRvT25lLCBPbmVUb01hbnksIEJlZm9yZUluc2VydCB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuL0NsaWVudFwiO1xyXG5pbXBvcnQgeyBMaWduZUNvbW1hbmRlIH0gZnJvbSAnLi9MaWduZUNvbW1hbmRlJztcclxuXHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZGUge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWRDb21tYW5kZTogbnVtYmVyO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgZGF0ZUNvbW1hbmRlOiBEYXRlO1xyXG5cclxuICAgIEBNYW55VG9PbmUodHlwZSA9PiBDbGllbnQsIGNsaWVudCA9PiBjbGllbnQuY29tbWFuZGVzKVxyXG4gICAgY2xpZW50OiBDbGllbnQ7XHJcblxyXG4gICAgQE9uZVRvTWFueSh0eXBlID0+IExpZ25lQ29tbWFuZGUsIGxpZ25lQ29tbWFuZGUgPT4gbGlnbmVDb21tYW5kZS5jb21tYW5kZSwgeyBjYXNjYWRlOiB0cnVlIH0pXHJcbiAgICBsaWduZUNvbW1hbmRlOiBMaWduZUNvbW1hbmRlW107XHJcblxyXG4gICAgQEJlZm9yZUluc2VydCgpXHJcbiAgICBzZXREYXRlQ29tbWFuZGUoKXtcclxuICAgICAgICB0aGlzLmRhdGVDb21tYW5kZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbn0iXX0=