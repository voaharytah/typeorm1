import { GenericValidator } from "./GenericValidator";
import { Service } from "typedi";

@Service()
export class UserValidator extends GenericValidator {
    requiredField = ['login', 'password'];
}