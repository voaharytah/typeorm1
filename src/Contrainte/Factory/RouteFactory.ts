import { Service } from "typedi";

export interface RouteFactoryAci {
    createGetRoute(route: string, action: string, controller: any);
    createPostRoute(route: string, action: string, controller: any);
    createPutRoute(route: string, action: string, controller: any);
    createDeleteRoute(route: string, action: string, controller: any);
}

@Service()
export class RouteFactory implements RouteFactoryAci {

    createGetRoute(route: string, action: string, controller?: any) {
        return this.createRoute("get", route, action, controller);
    }

    createPostRoute(route: string, action: string, controller?: any) {
        return this.createRoute("post", route, action, controller);
    }

    createPutRoute(route: string, action: string, controller?: any) {
        return this.createRoute("put", route, action, controller);
    }

    createDeleteRoute(route: string, action: string, controller?: any) {
        return this.createRoute("delete", route, action, controller);
    }

    private createRoute(method: string, route: string, action: string, controller?: any) {
        return {
            method: method,
            route,
            action,
            controller
        }
    }
}