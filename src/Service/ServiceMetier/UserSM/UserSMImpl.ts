import { UserSMAci } from "./UserSMAci";
import { User } from "../../../Donnees/DomainObject/User";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from '../../../Repository/UserRepository/UserRepository';

@Service()
export class UserSMImpl implements UserSMAci {

    @InjectRepository()
    userRepository: UserRepository;

    login(user: User) {
        return this.userRepository.login(user); 
    }

    createUser(user: User) {
        return this.userRepository.createUser(user);
    }
}