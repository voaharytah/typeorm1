import Container from "typedi";
import { CommandeController } from "../../../Controllers/CommandeController";
import { RouteFactory } from "../../../Data/Factory/RouteFactory";

const routeFactory = Container.get(RouteFactory);
export const commandeRoute = [
  routeFactory.createGetRoute(
    "/api/commande/facture/:idCommande",
    "createFacture",
    CommandeController
  ),
  routeFactory.createPostRoute(
    "/api/commande/deleteCommande",
    "deleteCommande",
    CommandeController
  ),
  routeFactory.createPostRoute("/api/commande/add", "addCommande"),
];
