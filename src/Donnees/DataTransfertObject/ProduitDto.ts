export class MostOrderedProductDto {
    constructor(
        public idProduit: number,
        public libelle: string,
        public nbCommande: number
    ) { }
}