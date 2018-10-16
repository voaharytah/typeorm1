import { FactureDto } from "../../Donnees/DataTransfertObject/FactureDto";
import { Client } from "../../Donnees/DomainObject/Client";
import { LigneCommande } from '../../Donnees/DomainObject/LigneCommande';
import { SuccessResponseDto, ErrorResponseDto } from "../../Donnees/DataTransfertObject/ResponseDto";
import { Service } from "typedi";

export interface FactureDtoFactoryAci {
    createFactureDto(factureData: any): SuccessResponseDto;
}

@Service()
export class FactureDtoFactory implements FactureDtoFactoryAci {

    createFactureDto(factureData: any): SuccessResponseDto {
        if (factureData) {
            const client: Client = factureData.client;
            const ligneCommande: LigneCommande[] = factureData.ligneCommande;
            const total = ligneCommande.map(l => l.produit.pu * l.qte).reduce((l, current) => l + current, 0);
            const factureDto = new FactureDto(
                factureData.idCommande,
                factureData.dateCommande,
                client,
                ligneCommande,
                total);
            return new SuccessResponseDto(factureDto);
        } else {
            return new SuccessResponseDto({});
        }
    }
}