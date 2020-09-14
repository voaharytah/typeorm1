import { Response } from "express";
import { Request } from "express";
import { UserSAImpl } from "../Services/ServiceApplicatif/UserSA/UserSAImpl";
import {
  ErrorResponseDto,
  SuccessResponseDto,
} from "../Data/DataTransfertObject/ResponseDto";
import { UserValidator } from "../Common/Validator/UserValidator";
import { User } from "../Data/DomainObject/User";
import Container from "typedi";

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
      userAdded.idUser &&
        resp.status(200).send(new SuccessResponseDto(userAdded));
    } catch (e) {
      resp.status(500).send(new ErrorResponseDto(e.toString(), true));
    }
  }
}
