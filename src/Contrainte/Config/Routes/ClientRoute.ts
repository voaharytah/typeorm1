import { ClientController } from "../../../Infrastructure/ClientController";
import { Container } from 'typedi';
import { RouteFactory } from "../../Factory/RouteFactory";

const routeFactory = Container.get(RouteFactory);
export const clientRoute = [
    routeFactory.createPostRoute("/api/client/ca", "clientsTotalAmount", ClientController),
    routeFactory.createPostRoute("/api/client/add", "saveClient", ClientController)
];