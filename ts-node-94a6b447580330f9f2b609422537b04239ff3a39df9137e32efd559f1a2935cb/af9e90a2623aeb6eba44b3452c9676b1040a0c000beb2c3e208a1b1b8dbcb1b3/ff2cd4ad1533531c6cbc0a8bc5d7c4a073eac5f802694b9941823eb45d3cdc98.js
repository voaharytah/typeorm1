"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("../../../node_modules/typedi");
var Commande_1 = require("../../Donnees/DomainObject/Commande");
var LigneCommande_1 = require("./../../Donnees/DomainObject/LigneCommande");
var ProduitValidator_1 = require("./../Validator/ProduitValidator");
var CommandeFactory = /** @class */ (function () {
    function CommandeFactory() {
        this.produitValidator = typedi_1.default.get(ProduitValidator_1.ProduitValidator);
    }
    CommandeFactory.prototype.createCommandeDo = function (client, produits, commandeDto) {
        var _this = this;
        var stockEpuise = [];
        var commandeDo = new Commande_1.Commande();
        commandeDo.client = client;
        commandeDo.ligneCommande = produits.map(function (p) {
            return _this.createLigneCommande(p, commandeDto, stockEpuise);
        }).filter(function (l) { return l !== undefined; });
        return { commandeDo: commandeDo, stockEpuise: stockEpuise };
    };
    CommandeFactory.prototype.createLigneCommande = function (p, commandeDto, stockEpuise) {
        var ligne = new LigneCommande_1.LigneCommande();
        ligne.produit = p;
        ligne.qte = commandeDto.lignes.find(function (l) { return l.idProduit === p.idProduit; }).qte;
        var isEpuise = this.produitValidator.stockEpuise(p, ligne.qte);
        if (!isEpuise) {
            ligne.produit.qte = ligne.produit.qte - ligne.qte;
            return ligne;
        }
        else {
            stockEpuise.push(isEpuise);
        }
    };
    CommandeFactory = __decorate([
        typedi_1.Service()
    ], CommandeFactory);
    return CommandeFactory;
}());
exports.CommandeFactory = CommandeFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L0NvbW1hbmRlRmFjdG9yeS50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L0NvbW1hbmRlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVEQUFrRTtBQUdsRSxnRUFBK0Q7QUFDL0QsNEVBQTJFO0FBQzNFLG9FQUFtRTtBQUduRTtJQURBO1FBR0kscUJBQWdCLEdBQXFCLGdCQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLENBQUM7SUF3QnpFLENBQUM7SUF0QkcsMENBQWdCLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxRQUFtQixFQUFFLFdBQWdCO1FBQXRFLGlCQVFDO1FBUEcsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ2hDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDckMsTUFBTSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxTQUFTLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sNkNBQW1CLEdBQTNCLFVBQTRCLENBQVUsRUFBRSxXQUFnQixFQUFFLFdBQXNCO1FBQzVFLElBQUksS0FBSyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBekJRLGVBQWU7UUFEM0IsZ0JBQU8sRUFBRTtPQUNHLGVBQWUsQ0EwQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIsIHsgU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwZWRpXCI7XHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9DbGllbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9Qcm9kdWl0XCI7XHJcbmltcG9ydCB7IENvbW1hbmRlIH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NvbW1hbmRlXCI7XHJcbmltcG9ydCB7IExpZ25lQ29tbWFuZGUgfSBmcm9tICcuLy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0xpZ25lQ29tbWFuZGUnO1xyXG5pbXBvcnQgeyBQcm9kdWl0VmFsaWRhdG9yIH0gZnJvbSAnLi8uLi9WYWxpZGF0b3IvUHJvZHVpdFZhbGlkYXRvcic7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kZUZhY3Rvcnkge1xyXG4gICAgXHJcbiAgICBwcm9kdWl0VmFsaWRhdG9yOiBQcm9kdWl0VmFsaWRhdG9yID0gQ29udGFpbmVyLmdldChQcm9kdWl0VmFsaWRhdG9yKTtcclxuXHJcbiAgICBjcmVhdGVDb21tYW5kZURvKGNsaWVudDogQ2xpZW50LCBwcm9kdWl0czogUHJvZHVpdFtdLCBjb21tYW5kZUR0bzogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0b2NrRXB1aXNlID0gW107XHJcbiAgICAgICAgbGV0IGNvbW1hbmRlRG8gPSBuZXcgQ29tbWFuZGUoKTtcclxuICAgICAgICBjb21tYW5kZURvLmNsaWVudCA9IGNsaWVudDtcclxuICAgICAgICBjb21tYW5kZURvLmxpZ25lQ29tbWFuZGUgPSBwcm9kdWl0cy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxpZ25lQ29tbWFuZGUocCwgY29tbWFuZGVEdG8sIHN0b2NrRXB1aXNlKTtcclxuICAgICAgICB9KS5maWx0ZXIobCA9PiBsICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIHJldHVybiB7IGNvbW1hbmRlRG8sIHN0b2NrRXB1aXNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVMaWduZUNvbW1hbmRlKHA6IFByb2R1aXQsIGNvbW1hbmRlRHRvOiBhbnksIHN0b2NrRXB1aXNlOiBQcm9kdWl0W10pIHtcclxuICAgICAgICBsZXQgbGlnbmUgPSBuZXcgTGlnbmVDb21tYW5kZSgpO1xyXG4gICAgICAgIGxpZ25lLnByb2R1aXQgPSBwO1xyXG4gICAgICAgIGxpZ25lLnF0ZSA9IGNvbW1hbmRlRHRvLmxpZ25lcy5maW5kKGwgPT4gbC5pZFByb2R1aXQgPT09IHAuaWRQcm9kdWl0KS5xdGU7XHJcbiAgICAgICAgbGV0IGlzRXB1aXNlID0gdGhpcy5wcm9kdWl0VmFsaWRhdG9yLnN0b2NrRXB1aXNlKHAsIGxpZ25lLnF0ZSk7XHJcbiAgICAgICAgaWYgKCFpc0VwdWlzZSkge1xyXG4gICAgICAgICAgICBsaWduZS5wcm9kdWl0LnF0ZSA9IGxpZ25lLnByb2R1aXQucXRlIC0gbGlnbmUucXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlnbmU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RvY2tFcHVpc2UucHVzaChpc0VwdWlzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19