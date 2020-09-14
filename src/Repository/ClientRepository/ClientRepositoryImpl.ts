import { Client } from "@data/DomainObject/Client";
import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { ClientRepositoryAci } from "./ClientRepositoryAci";

@Service()
@EntityRepository(Client)
export class ClientRepositoryImpl
  extends Repository<Client>
  implements ClientRepositoryAci {
  findClient(idClient: number) {
    return this.findOne(idClient);
  }

  saveClient(client: Client) {
    return this.save(client);
  }

  getClients(searchParams: any) {
    return this.createQueryBuilder("client")
      .where(searchParams.criteria)
      .skip(searchParams.offset)
      .take(searchParams.size)
      .getMany();
  }

  clientsTotalAmount(searchParams: any) {
    return this.createQueryBuilder("client")
      .select("SUM(ligneCommande.qte * produit.pu)", "ca")
      .addSelect("client")
      .innerJoin("client.commandes", "commande")
      .innerJoin("commande.ligneCommande", "ligneCommande")
      .innerJoin("ligneCommande.produit", "produit")
      .groupBy("client.idClient")
      .offset(searchParams.offset)
      .limit(searchParams.size)
      .getRawMany();
  }

  clientTotalAmount(idClient: number) {
    return this.createQueryBuilder("client")
      .select("SUM(ligneCommande.qte * produit.pu)", "sum")
      .innerJoin("client.commandes", "commande")
      .innerJoin("commande.ligneCommande", "ligneCommande")
      .innerJoin("ligneCommande.produit", "produit")
      .where("client.idClient = :idClient", { idClient })
      .getRawOne();
  }
}
