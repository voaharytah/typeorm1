import { Service } from "typedi";
import { MostOrderedProductDto } from "../DataTransfertObject/ProduitDto";

export interface ProduitFactoryAci {
  mostOrderedProductDto(produits: any);
}

@Service()
export class ProduitFactory implements ProduitFactoryAci {
  mostOrderedProductDto(produits: any) {
    const mostOrderedProductDto = produits.map(
      (p) =>
        new MostOrderedProductDto(
          p.produit_idProduit,
          p.produit_libelle,
          p.nbCommande
        )
    );
    return mostOrderedProductDto;
  }
}
