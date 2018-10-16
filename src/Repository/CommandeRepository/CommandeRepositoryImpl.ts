import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Commande } from '../../Donnees/DomainObject/Commande';
import { CommandeRepositoryAci } from "./CommandeRepositoryAci";


@Service()
@EntityRepository(Commande)
export class CommandeRepositoryImpl extends Repository<Commande> implements CommandeRepositoryAci {

    addCommande(commandeDo: Commande) {
        return this.save(commandeDo);
    }

    deleteCommande(criteria: any) {
        return this.delete(criteria);
    }

    getCommandeByClient(idClient: number) {
        return this.createQueryBuilder("commande")
            .where("commande.client.idClient = :idClient", { idClient })
            .getMany();
    }

    createFacture(idCommande: number) {
        return this.createQueryBuilder("commande")
            .innerJoinAndSelect("commande.client", "client")
            .innerJoinAndSelect("commande.ligneCommande", "ligneCommande")
            .innerJoinAndSelect("ligneCommande.produit", "produit")
            .where("commande.idCommande = :idCommande", { idCommande })
            .getOne();
    }


}