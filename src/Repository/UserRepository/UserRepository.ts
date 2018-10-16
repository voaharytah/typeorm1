import { UserRepositoryAci } from "./UserRepositoryAci";
import { User } from "../../Donnees/DomainObject/User";
import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";


@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> implements UserRepositoryAci  {
    createUser(user: User) {
        return this.save(user);
    }

    login(user: User) {
        return this.createQueryBuilder("user")
        .select("user.login")
        .where("user.login =:login and user.password =:password", {login: user.login, password: user.password})
        .getOne();
    }
}