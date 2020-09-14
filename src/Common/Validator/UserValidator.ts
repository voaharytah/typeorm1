import { Service } from "typedi";
import { GenericValidator } from "./GenericValidator";

@Service()
export class UserValidator extends GenericValidator {
  requiredField = ["login", "password"];
}
