import { User } from "@data/DomainObject/User";

export interface UserSMAci {
  login(user: User);
  createUser(user: User);
}
