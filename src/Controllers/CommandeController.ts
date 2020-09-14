import { Request } from "express";
import { Response } from "express";
import { CommandeSAImpl } from "../Services/ServiceApplicatif/CommandeSA/CommandeSAImpl";
import {
  ErrorResponseDto,
  SuccessResponseDto,
} from "../Data/DataTransfertObject/ResponseDto";
import { Logger } from "../Common/Logging/Logger";
import Container from "typedi";

export class CommandeController {
  commandeSA: CommandeSAImpl = Container.get(CommandeSAImpl);
  logger: Logger = Container.get(Logger);

  async addCommande(req: Request, resp: Response) {
    try {
      let commandeData = await this.commandeSA.addCommande(req.body);
      resp.status(200).send(new SuccessResponseDto({ result: commandeData }));
    } catch (e) {
      this.onError(req, resp, e);
    }
  }

  async deleteCommande(req: Request, resp: Response) {
    try {
      let res = await this.commandeSA.deleteCommande(req.body);
      resp.status(200).send(res);
    } catch (e) {
      this.onError(req, resp, e);
    }
  }

  async createFacture(req: Request, resp: Response) {
    try {
      const idCommande = req.params.idCommande;
      let factureDto = await this.commandeSA.createFacture(idCommande);
      resp.send(factureDto);
    } catch (e) {
      this.onError(req, resp, e);
    }
  }

  private onError(req: Request, resp: Response, e) {
    this.logger.error(
      "ws: %s",
      req.originalUrl,
      " data : " + JSON.stringify(req.body)
    );
    resp.status(500).send(new ErrorResponseDto(e.toString(), true));
  }
}
