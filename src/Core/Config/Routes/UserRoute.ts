import { RouteFactory } from "../../../Data/Factory/RouteFactory";
import { UserController } from "../../../Controllers/UserController";
import Container from "typedi";

const routeFactory = Container.get(RouteFactory);
export const userRoute = [
  routeFactory.createPostRoute("/user/login", "login", UserController),
  routeFactory.createPostRoute("/user/add", "createUser", UserController),
];
