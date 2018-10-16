import { CommandeController } from "../../../Infrastructure/CommandeController";
import { RouteFactory } from "../../Factory/RouteFactory";
import { Container } from "typedi";

const routeFactory = Container.get(RouteFactory);
let commandeRoute_ = [
    routeFactory.createGetRoute("/api/commande/facture/:idCommande", "createFacture"),
    routeFactory.createPostRoute("/api/commande/deleteCommande", "deleteCommande"),
    routeFactory.createPostRoute("/api/commande/add", "addCommande")
];

export const commandeRoute = commandeRoute_.map(r => r.controller = CommandeController);

