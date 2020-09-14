import { Client } from "@data/DomainObject/Client";

export interface ClientSMAci {
  getClients(searchparams: any);
  clientsTotalAmount(searchParams: any);
  clientTotalAmount(idClient: number);
  saveClient(client: Client);
}
