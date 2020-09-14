import { Service, Container } from "typedi";
import { ClientSAAci } from "./ClientSAAci";
import { ClientSMImpl } from "../../ServiceMetier/ClientSM/ClientSMImpl";
import { ClientsTotalAmountDto } from "@data/DataTransfertObject/ClientsTotalAmountDto";
import { Client } from "@data/DomainObject/Client";
import { ClientDoFactory } from "@data/Factory/ClientDoFactory";
import { ClientDtoFactory } from "@data/Factory/ClientDtoFactory";

@Service()
export class ClientSAImpl implements ClientSAAci {
  clientSM: ClientSMImpl = Container.get(ClientSMImpl);
  clientDtoFactory: ClientDtoFactory = Container.get(ClientDtoFactory);
  clientDoFactory: ClientDoFactory = Container.get(ClientDoFactory);

  saveData(clientData: any) {
    let client: Client = this.clientDoFactory.createClientDo(clientData);
    return this.clientSM.saveClient(client);
  }

  getClients(searchParams: any) {
    return this.clientSM.getClients(searchParams);
  }

  async clientsTotalAmount(searchParams: any): Promise<ClientsTotalAmountDto> {
    let clientsCa = await this.clientSM.clientsTotalAmount(searchParams);
    return this.clientDtoFactory.createClientsTotaleAmountDto(clientsCa);
  }

  clientTotalAmount(idClient: number) {
    return this.clientSM.clientTotalAmount(idClient);
  }
}
