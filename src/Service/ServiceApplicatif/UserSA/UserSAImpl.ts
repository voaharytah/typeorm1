import { UserSAAci } from "./UserSAAci";
import { User } from "../../../Donnees/DomainObject/User";
import { UserFactory } from "../../../Contrainte/Factory/UserFactory";
import { Container, Service } from 'typedi';
import { UserSMImpl } from "../../ServiceMetier/UserSM/UserSMImpl";
import { JwtUtility } from '../../../Commun/Token/JwtUtility';
import { ErrorResponseDto } from "../../../Donnees/DataTransfertObject/ResponseDto";

@Service()
export class UserSAImpl implements UserSAAci {
    userFactory: UserFactory = Container.get(UserFactory);
    userSM: UserSMImpl  = Container.get(UserSMImpl);
    jwtUtility: JwtUtility = Container.get(JwtUtility);

    async login(userDto: any) {
        let user = await this.userSM.login(this.userFactory.createUserDo(userDto));
        if (user) {
            return this.userFactory.createLoginDto(this.jwtUtility.createToken(user));
        } else {
            throw new ErrorResponseDto("Non authorisé", true, 401);
        }
    }

    createUser(userDto: any) {
        let userDo: User = this.userFactory.createUserDo(userDto);
        return this.userSM.createUser(userDo);
    }
}