import { User } from "../../../Donnees/DomainObject/User";

export interface UserSMAci {
    login(user: User);
    createUser(user: User);
}