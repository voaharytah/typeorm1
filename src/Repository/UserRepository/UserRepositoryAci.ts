import { User } from "@data/DomainObject/User";

export interface UserRepositoryAci {
  createUser(user: User);
  login(user: User);
}
