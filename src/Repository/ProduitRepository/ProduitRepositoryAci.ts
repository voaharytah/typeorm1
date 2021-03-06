import { Produit } from "@data/DomainObject/Produit";

export interface ProduitRepositoryAci {
  getproduits(seachParameters: any);
  findProduits(idProduits: number[]);
  addOrUpdateProduit(produitDo: Produit[]);
}
