import { UserSMAci } from "./UserSMAci";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "@data/DomainObject/User";
import { UserRepository } from "@repository/UserRepository/UserRepository";

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
