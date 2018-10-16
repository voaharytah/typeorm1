import { User } from "../../Donnees/DomainObject/User";

export interface UserRepositoryAci {
    createUser(user: User);
    login(user: User);    
}