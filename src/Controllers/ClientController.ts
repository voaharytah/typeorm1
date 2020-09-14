import { Request, Response } from "express";

import {
  ErrorResponseDto,
  SuccessResponseDto,
} from "@data/DataTransfertObject/ResponseDto";
import { ClientValidator } from "@common/Validator/ClientValidator";
import Container from "typedi";
import { ClientSAImpl } from "@services/ServiceApplicatif/ClientSA/ClientSAImpl";

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
      clientSaved.idClient &&
        resp.status(200).send(new SuccessResponseDto({ result: clientSaved }));
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }
}
