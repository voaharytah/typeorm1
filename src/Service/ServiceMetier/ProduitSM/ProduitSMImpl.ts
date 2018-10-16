import { Service, Container } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ProduitRepositoryImpl } from "../../../Repository/ProduitRepository/ProduitRepositoryImpl";
import { ProduitSMAci } from "./ProduitSMAci";
import { Produit } from "../../../Donnees/DomainObject/Produit";

@Service()
export class ProduitSMImpl implements ProduitSMAci {
  
    @InjectRepository()
    produitRespository: ProduitRepositoryImpl = Container.get(ProduitRepositoryImpl);

    addOrUpdateProduit(produitDo: Produit[]) {
        return this.produitRespository.addOrUpdateProduit(produitDo);
    }

    findProduits(idProduits: number[]) {
        return this.produitRespository.findProduits(idProduits);
    }

    async deleteProduit(criteria: any) {     
        return this.produitRespository.deleteProduit(criteria);
    }

    mostOrderedProduct(searchParams: any) {
        return this.produitRespository.mostOrderedProduct(searchParams);
    }

}