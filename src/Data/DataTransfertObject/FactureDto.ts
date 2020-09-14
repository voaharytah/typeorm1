import { Client } from "../DomainObject/Client";
import { LigneCommande } from "../DomainObject/LigneCommande";

export class FactureDto {
  constructor(
    public idCommande: number,
    public dateCommande: Date,
    public client: Client,
    public ligneCommande: LigneCommande[],
    public total: number
  ) {}
}
