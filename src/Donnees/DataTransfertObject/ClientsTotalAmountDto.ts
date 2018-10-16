import { Client } from "../../Donnees/DomainObject/Client";

export class ClientTotalAmountDto {
    constructor(
        public client: Client,
        public ca: number
    ){}
}

export class ClientsTotalAmountDto {
    constructor(
        public clientsCa:ClientTotalAmountDto[]
    ){}
}