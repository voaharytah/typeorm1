
import { Container } from 'typedi';
import { Response, Request } from 'express';
import { ErrorResponseDto } from '../Donnees/DataTransfertObject/ResponseDto';
import { produitSAImpl } from '../Service/ServiceApplicatif/ProduitSA/ProduitSAImpl';
import { Logger } from '../Commun/Logging/Logger';



export class ProduitController {
    produitSA: produitSAImpl = Container.get(produitSAImpl);
    logger: Logger = Container.get(Logger);

    async deleteProduit(req: Request, resp: Response) {
        try {
            let res = this.produitSA.deleteProduit(req.body);
            resp.status(200).send(res);
        } catch (e) {
            this.onError(req, resp, e);
        }
    }

    async mostOrderedProduct(req: Request, resp: Response) {
        try {
            const result = await this.produitSA.mostOrderedProduct(req.body);
            resp.status(200).send(result);
        } catch (e) {
            this.onError(req, resp, e);
        }
    }

    private onError(req: Request, resp: Response, e) {
        this.logger.error('ws: %s', req.originalUrl, ' data : ' + JSON.stringify(req.body));
        resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
}