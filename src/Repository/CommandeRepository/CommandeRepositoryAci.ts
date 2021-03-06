import { Commande } from "@data/DomainObject/Commande";

export interface CommandeRepositoryAci {
  getCommandeByClient(idClient: number);
  createFacture(idCommande: number);
  addCommande(commandeDo: Commande);
}
