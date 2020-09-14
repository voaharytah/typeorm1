import { Client } from "../DomainObject/Client";

export interface ClientDoFactoryAci {
  createClientDo(clientData: any);
}

export class ClientDoFactory implements ClientDoFactoryAci {
  createClientDo(clientData: any) {
    let client = new Client();
    client.name = clientData.name;
    client.address = clientData.address;
    return client;
  }
}
