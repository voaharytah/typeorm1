import { UserSAImpl } from "../Service/ServiceApplicatif/UserSA/UserSAImpl";
import { Container } from "typedi";
import { Request, Response } from 'express';
import { ErrorResponseDto, SuccessResponseDto } from "../Donnees/DataTransfertObject/ResponseDto";
import { UserValidator } from "../Contrainte/Validator/UserValidator";
import { User } from "../Donnees/DomainObject/User";


export class UserController {
    userSA: UserSAImpl = Container.get(UserSAImpl);
    userValidator: UserValidator = Container.get(UserValidator);

    async login(req: Request, resp: Response) {
        try {
            let loginResult = await this.userSA.login(req.body);
            resp.status(200).send(loginResult);
        } catch (e) {
            resp.status(500).send(new ErrorResponseDto(e.toString(), true));
        }
    }

    async createUser(req: Request, resp: Response) {
        try {
            this.userValidator.requiredValidator(req.body);
            let userAdded: User = await this.userSA.createUser(req.body);
            userAdded.idUser && resp.status(200).send(new SuccessResponseDto(userAdded));
        } catch (e) {
            resp.status(500).send(new ErrorResponseDto(e.toString(), true));
        }
    }
}