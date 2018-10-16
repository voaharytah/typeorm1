import { GenericValidator } from "./GenericValidator";
import { Service } from "typedi";
import { Produit } from "../../Donnees/DomainObject/Produit";
import { ErrorResponseDto } from "../../Donnees/DataTransfertObject/ResponseDto";

@Service()
export class ProduitValidator extends GenericValidator {
    stockEpuise(produit: Produit, qteCommande: number) {
        if(produit.qte < qteCommande) {
            return produit;
        }
        return false;
    }
}