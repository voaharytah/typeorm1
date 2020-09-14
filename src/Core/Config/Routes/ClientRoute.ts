import { ClientController } from "@controllers/ClientController";
import { RouteFactory } from "@data/Factory/RouteFactory";
import Container from "typedi";

const routeFactory = Container.get(RouteFactory);
export const clientRoute = [
  routeFactory.createPostRoute(
    "/api/client/ca",
    "clientsTotalAmount",
    ClientController
  ),
  routeFactory.createPostRoute(
    "/api/client/add",
    "saveClient",
    ClientController
  ),
];
