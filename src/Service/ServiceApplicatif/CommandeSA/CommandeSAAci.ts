export interface CommandeSAAci {
    createFacture(idCommande: number);
    getCommandeByClient(idClient: number);
    deleteCommande(criteria: any)
}