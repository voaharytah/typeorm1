import { Commande } from "@data/DomainObject/Commande";

export interface CommandeSMAci {
  getCommandeByClient(idClient: number);
  createFacture(idCommande: number);
  deleteCommande(criteria: any);
  addCommande(commandeDo: Commande);
}
