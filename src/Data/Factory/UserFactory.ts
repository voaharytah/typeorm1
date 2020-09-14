import * as md5 from "md5";
import { Service } from "typedi";

import { SuccessResponseDto } from "../DataTransfertObject/ResponseDto";
import { User } from "../DomainObject/User";

export interface UserFactoryAci {
  createUserDo(userDto: any);
}

@Service()
export class UserFactory implements UserFactoryAci {
  createUserDo(userDto: any) {
    let user = new User();
    user.password = md5(userDto.password);
    user.login = userDto.login;
    return user;
  }

  createLoginDto(token: string) {
    return new SuccessResponseDto({ token });
  }
}
