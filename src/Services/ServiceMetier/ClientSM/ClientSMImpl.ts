import { ClientSMAci } from "./ClientSMAci";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Client } from "@data/DomainObject/Client";
import { ClientRepositoryImpl } from "@repository/ClientRepository/ClientRepositoryImpl";

@Service()
export class ClientSMImpl implements ClientSMAci {
  @InjectRepository()
  clientRepository: ClientRepositoryImpl;

  findClient(idClient: number) {
    return this.clientRepository.findClient(idClient);
  }

  saveClient(client: Client) {
    return this.clientRepository.saveClient(client);
  }

  getClients(searchParams: any) {
    return this.clientRepository.getClients(searchParams);
  }

  clientsTotalAmount(searchParams: any) {
    return this.clientRepository.clientsTotalAmount(searchParams);
  }

  clientTotalAmount(idClient: number) {
    return this.clientRepository.clientTotalAmount(idClient);
  }
}
