export interface ClientSAAci {
  getClients(searchparams: any);
  clientsTotalAmount(searchParams: any);
  clientTotalAmount(idClient: number);
  saveData(clientData: any);
}
