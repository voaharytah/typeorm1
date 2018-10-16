import { Client } from "../../Donnees/DomainObject/Client";
import { LigneCommande } from "../../Donnees/DomainObject/LigneCommande";

export class FactureDto {
    constructor(
        public idCommande: number,
        public dateCommande: Date,
        public client: Client,
        public ligneCommande: LigneCommande[],
        public total: number
    ){}
}