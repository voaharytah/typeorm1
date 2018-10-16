"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../Donnees/DomainObject/User");
var typedi_1 = require("typedi");
var typeorm_1 = require("typeorm");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRepository.prototype.createUser = function (user) {
        return this.save(user);
    };
    UserRepository.prototype.login = function (user) {
        return this.createQueryBuilder("user")
            .select("user.login")
            .where("user.login =:login and user.password =:password", { login: user.login, password: user.password })
            .getOne();
    };
    UserRepository = __decorate([
        typedi_1.Service(),
        typeorm_1.EntityRepository(User_1.User)
    ], UserRepository);
    return UserRepository;
}(typeorm_1.Repository));
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvUmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBdUQ7QUFDdkQsaUNBQWlDO0FBQ2pDLG1DQUF1RDtBQUt2RDtJQUFvQyxrQ0FBZ0I7SUFBcEQ7O0lBV0EsQ0FBQztJQVZHLG1DQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQ3JDLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDcEIsS0FBSyxDQUFDLGlEQUFpRCxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUN0RyxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFWUSxjQUFjO1FBRjFCLGdCQUFPLEVBQUU7UUFDVCwwQkFBZ0IsQ0FBQyxXQUFJLENBQUM7T0FDVixjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELENBQW9DLG9CQUFVLEdBVzdDO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyUmVwb3NpdG9yeUFjaSB9IGZyb20gXCIuL1VzZXJSZXBvc2l0b3J5QWNpXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvVXNlclwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcblxyXG5AU2VydmljZSgpXHJcbkBFbnRpdHlSZXBvc2l0b3J5KFVzZXIpXHJcbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIFJlcG9zaXRvcnk8VXNlcj4gaW1wbGVtZW50cyBVc2VyUmVwb3NpdG9yeUFjaSAge1xyXG4gICAgY3JlYXRlVXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZSh1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUXVlcnlCdWlsZGVyKFwidXNlclwiKVxyXG4gICAgICAgIC5zZWxlY3QoXCJ1c2VyLmxvZ2luXCIpXHJcbiAgICAgICAgLndoZXJlKFwidXNlci5sb2dpbiA9OmxvZ2luIGFuZCB1c2VyLnBhc3N3b3JkID06cGFzc3dvcmRcIiwge2xvZ2luOiB1c2VyLmxvZ2luLCBwYXNzd29yZDogdXNlci5wYXNzd29yZH0pXHJcbiAgICAgICAgLmdldE9uZSgpO1xyXG4gICAgfVxyXG59Il19