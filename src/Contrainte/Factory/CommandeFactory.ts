import Container, { Service } from "../../../node_modules/typedi";
import { Client } from "../../Donnees/DomainObject/Client";
import { Produit } from "../../Donnees/DomainObject/Produit";
import { Commande } from "../../Donnees/DomainObject/Commande";
import { LigneCommande } from './../../Donnees/DomainObject/LigneCommande';
import { ProduitValidator } from './../Validator/ProduitValidator';

@Service()
export class CommandeFactory {
    
    produitValidator: ProduitValidator = Container.get(ProduitValidator);

    createCommandeDo(client: Client, produits: Produit[], commandeDto: any) {
        let stockEpuise = [];
        let commandeDo = new Commande();
        commandeDo.client = client;
        commandeDo.ligneCommande = produits.map(p => {
            return this.createLigneCommande(p, commandeDto, stockEpuise);
        }).filter(l => l !== undefined);
        return { commandeDo, stockEpuise };
    }

    private createLigneCommande(p: Produit, commandeDto: any, stockEpuise: Produit[]) {
        let ligne = new LigneCommande();
        ligne.produit = p;
        ligne.qte = commandeDto.lignes.find(l => l.idProduit === p.idProduit).qte;
        let isEpuise = this.produitValidator.stockEpuise(p, ligne.qte);
        if (!isEpuise) {
            ligne.produit.qte = ligne.produit.qte - ligne.qte;
            return ligne;
        } else {
            stockEpuise.push(isEpuise);
        }
    }
}