import { Client } from "../../../Donnees/DomainObject/Client";

export interface ClientSAAci {
    getClients(searchparams: any);
    clientsTotalAmount(searchParams: any);
    clientTotalAmount(idClient: number);
    saveData(clientData: any)
}