"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var RouteFactory = /** @class */ (function () {
    function RouteFactory() {
    }
    RouteFactory.prototype.createGetRoute = function (route, action, controller) {
        return this.createRoute("get", route, action, controller);
    };
    RouteFactory.prototype.createPostRoute = function (route, action, controller) {
        return this.createRoute("post", route, action, controller);
    };
    RouteFactory.prototype.createPutRoute = function (route, action, controller) {
        return this.createRoute("put", route, action, controller);
    };
    RouteFactory.prototype.createDeleteRoute = function (route, action, controller) {
        return this.createRoute("delete", route, action, controller);
    };
    RouteFactory.prototype.createRoute = function (method, route, action, controller) {
        return {
            method: method,
            route: route,
            action: action,
            controller: controller
        };
    };
    RouteFactory = __decorate([
        typedi_1.Service()
    ], RouteFactory);
    return RouteFactory;
}());
exports.RouteFactory = RouteFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L1JvdXRlRmFjdG9yeS50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L1JvdXRlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGlDQUFpQztBQVVqQztJQUFBO0lBMEJBLENBQUM7SUF4QkcscUNBQWMsR0FBZCxVQUFlLEtBQWEsRUFBRSxNQUFjLEVBQUUsVUFBZTtRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsTUFBYyxFQUFFLFVBQWU7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsTUFBYyxFQUFFLFVBQWU7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHdDQUFpQixHQUFqQixVQUFrQixLQUFhLEVBQUUsTUFBYyxFQUFFLFVBQWU7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLFVBQWU7UUFDOUUsTUFBTSxDQUFDO1lBQ0gsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7WUFDTixVQUFVLFlBQUE7U0FDYixDQUFBO0lBQ0wsQ0FBQztJQXpCUSxZQUFZO1FBRHhCLGdCQUFPLEVBQUU7T0FDRyxZQUFZLENBMEJ4QjtJQUFELG1CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUZhY3RvcnlBY2kge1xyXG4gICAgY3JlYXRlR2V0Um91dGUocm91dGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGNvbnRyb2xsZXI6IGFueSk7XHJcbiAgICBjcmVhdGVQb3N0Um91dGUocm91dGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGNvbnRyb2xsZXI6IGFueSk7XHJcbiAgICBjcmVhdGVQdXRSb3V0ZShyb3V0ZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgY29udHJvbGxlcjogYW55KTtcclxuICAgIGNyZWF0ZURlbGV0ZVJvdXRlKHJvdXRlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBjb250cm9sbGVyOiBhbnkpO1xyXG59XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZUZhY3RvcnkgaW1wbGVtZW50cyBSb3V0ZUZhY3RvcnlBY2kge1xyXG5cclxuICAgIGNyZWF0ZUdldFJvdXRlKHJvdXRlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBjb250cm9sbGVyOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSb3V0ZShcImdldFwiLCByb3V0ZSwgYWN0aW9uLCBjb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3N0Um91dGUocm91dGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGNvbnRyb2xsZXI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJvdXRlKFwicG9zdFwiLCByb3V0ZSwgYWN0aW9uLCBjb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQdXRSb3V0ZShyb3V0ZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgY29udHJvbGxlcjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUm91dGUoXCJwdXRcIiwgcm91dGUsIGFjdGlvbiwgY29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGVsZXRlUm91dGUocm91dGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGNvbnRyb2xsZXI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJvdXRlKFwiZGVsZXRlXCIsIHJvdXRlLCBhY3Rpb24sIGNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm91dGUobWV0aG9kOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBjb250cm9sbGVyOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgcm91dGUsXHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgY29udHJvbGxlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==