import { Produit } from "../../../Donnees/DomainObject/Produit";

export interface ProduitSMAci {
    mostOrderedProduct(searchParams: any);
    deleteProduit(criteria: any);
    findProduits(idProduits: number[]);
    addOrUpdateProduit(produitDo: Produit[]);
}