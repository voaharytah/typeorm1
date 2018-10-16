import { MostOrderedProductDto } from "../../Donnees/DataTransfertObject/ProduitDto";
import { Service } from "typedi";


export interface ProduitFactoryAci {
    mostOrderedProductDto(produits: any)
}

@Service()
export class ProduitFactory implements ProduitFactoryAci {
    mostOrderedProductDto(produits: any) {
        const mostOrderedProductDto = produits.map(p =>
            new MostOrderedProductDto(p.produit_idProduit, p.produit_libelle, p.nbCommande));
        return mostOrderedProductDto;
    }
}