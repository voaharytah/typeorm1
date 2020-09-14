import { User } from "@data/DomainObject/User";

export interface UserSAAci {
  login(user: User);
  createUser(user: User);
}
