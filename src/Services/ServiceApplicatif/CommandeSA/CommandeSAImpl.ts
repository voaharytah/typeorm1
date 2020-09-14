import { CommandeSAAci } from "./CommandeSAAci";
import { Service, Container } from "typedi";
import { CommandeSMImpl } from "../../ServiceMetier/CommandeSM/CommandeSMImpl";
import { ClientSMImpl } from "../../ServiceMetier/ClientSM/ClientSMImpl";
import { ProduitSMImpl } from "../../ServiceMetier/ProduitSM/ProduitSMImpl";
import { FactureDtoFactory } from "@data/Factory/FactureDtoFactory";
import { CommandeFactory } from "@data/Factory/CommandeFactory";
import { Client } from "@data/DomainObject/Client";
import { Produit } from "@data/DomainObject/Produit";

@Service()
export class CommandeSAImpl implements CommandeSAAci {
  commandeSM: CommandeSMImpl = Container.get(CommandeSMImpl);
  clientSM: ClientSMImpl = Container.get(ClientSMImpl);
  produitSM: ProduitSMImpl = Container.get(ProduitSMImpl);
  factureDtoFactory: FactureDtoFactory = Container.get(FactureDtoFactory);
  commandeFactory: CommandeFactory = Container.get(CommandeFactory);

  async addCommande(commandeDto: any) {
    let clientDo: Client = await this.clientSM.findClient(commandeDto.idClient);
    let productIds = commandeDto.lignes.map((l) => l.idProduit);
    let produits: Produit[] = await this.produitSM.findProduits(productIds);
    let commandeData = this.commandeFactory.createCommandeDo(
      clientDo,
      produits,
      commandeDto
    );
    if (commandeData.commandeDo.ligneCommande.length !== 0) {
      let commande = await this.commandeSM.addCommande(commandeData.commandeDo);
      await this.produitSM.addOrUpdateProduit(
        commande.ligneCommande.map((l) => l.produit)
      );
      return { commande, stockEpuise: commandeData.stockEpuise };
    } else {
      return { stockEpuise: commandeData.stockEpuise, commande: null };
    }
  }

  deleteCommande(criteria: any) {
    return this.commandeSM.deleteCommande(criteria);
  }

  async createFacture(idCommande: number) {
    let factureData = await this.commandeSM.createFacture(idCommande);
    return this.factureDtoFactory.createFactureDto(factureData);
  }

  getCommandeByClient(idClient: number) {
    throw new Error("Method not implemented.");
  }
}
