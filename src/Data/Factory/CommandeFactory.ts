import { Client } from "../DomainObject/Client";
import { Produit } from "../DomainObject/Produit";
import { Commande } from "../DomainObject/Commande";
import { LigneCommande } from "../DomainObject/LigneCommande";
import { ProduitValidator } from "../../Common/Validator/ProduitValidator";
import Container, { Service } from "typedi";

@Service()
export class CommandeFactory {
  produitValidator: ProduitValidator = Container.get(ProduitValidator);

  createCommandeDo(client: Client, produits: Produit[], commandeDto: any) {
    let stockEpuise = [];
    let commandeDo = new Commande();
    commandeDo.client = client;
    commandeDo.ligneCommande = produits
      .map((p) => {
        return this.createLigneCommande(p, commandeDto, stockEpuise);
      })
      .filter((l) => l !== undefined);
    return { commandeDo, stockEpuise };
  }

  private createLigneCommande(
    p: Produit,
    commandeDto: any,
    stockEpuise: Produit[]
  ) {
    let ligne = new LigneCommande();
    ligne.produit = p;
    ligne.qte = commandeDto.lignes.find((l) => l.idProduit === p.idProduit).qte;
    let isEpuise = this.produitValidator.stockEpuise(p, ligne.qte);
    if (!isEpuise) {
      ligne.produit.qte = ligne.produit.qte - ligne.qte;
      return ligne;
    } else {
      stockEpuise.push(isEpuise);
    }
  }
}
