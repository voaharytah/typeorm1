import { ErrorResponseDto } from "../../Donnees/DataTransfertObject/ResponseDto";

export class GenericValidator {
    requiredField = [];

    requiredValidator(data: any) {
        let notFound = [];
        this.requiredField.forEach(field => !data[field] && notFound.push(field));
        if(notFound.length !== 0) {
            throw new ErrorResponseDto(this.createNotFoundMessage(notFound), notFound.length !== 0);
        } 
    }

    private createNotFoundMessage(notFound) {
        return notFound.length !== 0 ? notFound.length > 1 ?
            "Les champs " + notFound.join(',') + " sont obligatoires" : "Le champ " + notFound.join(',') + " est obligatoire" : "";
    }
}