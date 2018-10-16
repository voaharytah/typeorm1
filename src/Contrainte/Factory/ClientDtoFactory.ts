import { ClientTotalAmountDto, ClientsTotalAmountDto } from "../../Donnees/DataTransfertObject/ClientsTotalAmountDto";

export interface ClientDtoFactoryAci {
    createClientsTotaleAmountDto(clients: any);
}

export class ClientDtoFactory implements ClientDtoFactoryAci {
   
    createClientsTotaleAmountDto(clients) {
        const clientsCa: ClientTotalAmountDto[] = clients.map(c => new ClientTotalAmountDto(c, c.ca));
        return new ClientsTotalAmountDto(clientsCa);
    }

}