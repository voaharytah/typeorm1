import { RouteFactory } from "../../../Data/Factory/RouteFactory";
import { ProduitController } from "../../../Controllers/ProduitController";
import Container from "typedi";

const routeFactory: RouteFactory = Container.get(RouteFactory);
export const produitRoute = [
  routeFactory.createPostRoute(
    "/api/produit/mostOrderedProduct",
    "mostOrderedProduct",
    ProduitController
  ),
  routeFactory.createPostRoute(
    "/api/produit/deleteProduit",
    "deleteProduit",
    ProduitController
  ),
];
