import { Service } from "typedi";
import { GenericValidator } from "./GenericValidator";

@Service()
export class ClientValidator extends GenericValidator {
  requiredField = ["name", "address"];
}
