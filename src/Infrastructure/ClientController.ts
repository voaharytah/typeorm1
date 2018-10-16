import { Request } from 'express';
import { Response } from 'express';
import { Container } from 'typedi';
import { ErrorResponseDto, SuccessResponseDto } from '../Donnees/DataTransfertObject/ResponseDto';
import { ClientSAImpl } from '../Service/ServiceApplicatif/ClientSA/ClientSAImpl';
import { ClientValidator } from '../Contrainte/Validator/ClientValidator';

export class ClientController {

    clientSA: ClientSAImpl = Container.get(ClientSAImpl);
    clientValidator: ClientValidator = Container.get(ClientValidator);

    async clientsTotalAmount(req: Request, resp: Response) {
        try {           
            let clientsCaDto = await this.clientSA.clientsTotalAmount(req.body);
            resp.status(200).send(clientsCaDto);
        } catch (e) {
            resp.status(500).send(new ErrorResponseDto(e.toString(), true));
        }
    }

    async saveClient(req: Request, resp: Response) {
        try {
            this.clientValidator.requiredValidator(req.body);
            let clientSaved = await this.clientSA.saveData(req.body);
            clientSaved.idClient && resp.status(200).send(new SuccessResponseDto({ result: clientSaved}));
        } catch (e) {
            resp.status(500).send(new ErrorResponseDto(e.toString(), true));
        }
    }

}