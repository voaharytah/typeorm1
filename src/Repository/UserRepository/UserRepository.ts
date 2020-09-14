import { UserRepositoryAci } from "./UserRepositoryAci";
import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { User } from "@data/DomainObject/User";

@Service()
@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements UserRepositoryAci {
  createUser(user: User) {
    return this.save(user);
  }

  login(user: User) {
    return this.createQueryBuilder("user")
      .select("user.login")
      .where("user.login =:login and user.password =:password", {
        login: user.login,
        password: user.password,
      })
      .getOne();
  }
}
