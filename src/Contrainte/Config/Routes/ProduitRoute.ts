import { RouteFactory } from "../../Factory/RouteFactory";
import { Container } from 'typedi';
import { ProduitController } from "../../../Infrastructure/ProduitController";

const routeFactory: RouteFactory = Container.get(RouteFactory);
export const produitRoute = [
    routeFactory.createPostRoute("/api/produit/mostOrderedProduct", "mostOrderedProduct", ProduitController),
    routeFactory.createPostRoute("/api/produit/deleteProduit", "deleteProduit", ProduitController)
]