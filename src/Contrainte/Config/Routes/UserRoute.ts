import { Container } from 'typedi';
import { RouteFactory } from "../../Factory/RouteFactory";
import { UserController } from "../../../Infrastructure/UserController";

const routeFactory = Container.get(RouteFactory);
export const userRoute = [
    routeFactory.createPostRoute("/user/login", "login", UserController),
    routeFactory.createPostRoute("/user/add", "createUser", UserController)
]; 