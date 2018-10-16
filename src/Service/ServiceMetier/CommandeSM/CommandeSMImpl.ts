import { CommandeSMAci } from "./CommandeSMAci";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CommandeRepositoryImpl } from "../../../Repository/CommandeRepository/CommandeRepositoryImpl";
import { Service } from "typedi";
import { runInThisContext } from "vm";
import { Commande } from "../../../Donnees/DomainObject/Commande";

@Service()
export class CommandeSMImpl implements CommandeSMAci {
    deleteCommande(criteria: any) {      
        return this.commandeRepository.deleteCommande(criteria);
    }

    @InjectRepository()
    commandeRepository: CommandeRepositoryImpl;

    addCommande(commandeDo: Commande) {
        return this.commandeRepository.addCommande(commandeDo);
    }

    getCommandeByClient(idClient: number) {
        throw new Error("Method not implemented.");
    }   
    
    createFacture(idCommande: number) {
        return this.commandeRepository.createFacture(idCommande);
    }


}