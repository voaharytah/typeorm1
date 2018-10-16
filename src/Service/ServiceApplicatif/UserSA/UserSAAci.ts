import { User } from "../../../Donnees/DomainObject/User";

export interface UserSAAci {
    login(user: User);
    createUser(user: User);
}