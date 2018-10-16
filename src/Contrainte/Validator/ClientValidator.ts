import { GenericValidator } from './GenericValidator';
import { Service } from 'typedi';

@Service()
export class ClientValidator extends GenericValidator {
    requiredField = ["name", "address"];
}