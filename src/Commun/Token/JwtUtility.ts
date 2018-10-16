var jwt = require('jsonwebtoken');
import { Service } from "typedi";
import { Response, Request } from 'express';
import { ErrorResponseDto } from "../../Donnees/DataTransfertObject/ResponseDto";
import { Container } from 'typedi';

@Service()
export class JwtUtility {
    key = "secret";
    AuthorizationHeaderKey = "Authorization";
    tokenExpirireIn = '1h';

    constructor() { }

    decodeToken() {
        try {
            return jwt.decode(Container.get("token"));
        } catch (e) {
            throw e;
        }
    }

    createToken(payload: any): string {
        const token = jwt.sign({ ...payload }, this.key, { expiresIn: this.tokenExpirireIn });
        Container.set("token", token);
        return token;
    }

    verifyToken = (req: Request, resp: Response, next) => {
        try {
            if (req.originalUrl.indexOf('api') >= 0) {
                req.get(this.AuthorizationHeaderKey) && (jwt.verify(req.get(this.AuthorizationHeaderKey), this.key), next());
                !req.get(this.AuthorizationHeaderKey) && resp.status(401).send(new ErrorResponseDto("Non authorisé", true));
            } else {
                next();
            }
        } catch (e) {
            resp.status(401).send(new ErrorResponseDto(e.toString(), true));
        }
    }
}