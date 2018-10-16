import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Produit } from "../../Donnees/DomainObject/Produit";
import { ProduitRepositoryAci } from "./ProduitRepositoryAci";

@Service()
@EntityRepository(Produit)
export class ProduitRepositoryImpl extends Repository<Produit> implements ProduitRepositoryAci {
   

    addOrUpdateProduit(produitDo: Produit[]) {
        return this.save(produitDo);
    }

    findProduits(idProduits: number[]) {
        return this.findByIds(idProduits);
    }

    getProduit(criteria: any) {
        return this.findOne(criteria);
    }

    deleteProduit(criteria: any) {
        return this.delete(criteria);
    }

    mostOrderedProduct(searchParams: any) {
        return this.createQueryBuilder("produit")
            .select("COUNT(ligneCommande.produit.idProduit)", "nbCommande")
            .addSelect("produit.idProduit")
            .addSelect("produit.libelle")          
            .leftJoin("produit.ligneCommande", "ligneCommande")
            .groupBy("produit.idProduit")
            .orderBy("COUNT(ligneCommande.produit.idProduit)", "DESC")
            .offset(searchParams.offset)
            .limit(searchParams.size)
            .getRawMany();
    }


    getproduits(searchParams: any) {
        return this.createQueryBuilder("produit")
            .where(searchParams.criteria)
            .skip(searchParams.offset)
            .take(searchParams.size)
            .getMany();
    }

}