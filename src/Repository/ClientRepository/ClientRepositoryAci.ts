export interface ClientRepositoryAci {
    getClients(searchParams: any);
    clientsTotalAmount(searchParams: any);
    clientTotalAmount(idClient: number);
}