import { GenericValidator } from "./GenericValidator";
import { Produit } from "../../Data/DomainObject/Produit";
import { ErrorResponseDto } from "../../Data/DataTransfertObject/ResponseDto";
import { Service } from "typedi";

@Service()
export class ProduitValidator extends GenericValidator {
  stockEpuise(produit: Produit, qteCommande: number) {
    if (produit.qte < qteCommande) {
      return produit;
    }
    return false;
  }
}
