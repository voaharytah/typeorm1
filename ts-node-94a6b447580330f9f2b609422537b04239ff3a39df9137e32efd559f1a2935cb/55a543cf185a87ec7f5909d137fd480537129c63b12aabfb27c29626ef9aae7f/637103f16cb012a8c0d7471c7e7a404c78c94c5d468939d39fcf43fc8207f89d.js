"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require("md5");
var typedi_1 = require("typedi");
var ResponseDto_1 = require("../../Donnees/DataTransfertObject/ResponseDto");
var User_1 = require("../../Donnees/DomainObject/User");
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.prototype.createUserDo = function (userDto) {
        var user = new User_1.User();
        user.password = md5(userDto.password);
        user.login = userDto.login;
        return user;
    };
    UserFactory.prototype.createLoginDto = function (token) {
        return new ResponseDto_1.SuccessResponseDto({ token: token });
    };
    UserFactory = __decorate([
        typedi_1.Service()
    ], UserFactory);
    return UserFactory;
}());
exports.UserFactory = UserFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9GYWN0b3J5L1VzZXJGYWN0b3J5LnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db250cmFpbnRlL0ZhY3RvcnkvVXNlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx5QkFBMkI7QUFFM0IsaUNBQWlDO0FBQ2pDLDZFQUFtRjtBQUNuRix3REFBdUQ7QUFRdkQ7SUFBQTtJQVdBLENBQUM7SUFWRyxrQ0FBWSxHQUFaLFVBQWEsT0FBWTtRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEtBQWE7UUFDeEIsTUFBTSxDQUFDLElBQUksZ0NBQWtCLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQVZRLFdBQVc7UUFEdkIsZ0JBQU8sRUFBRTtPQUNHLFdBQVcsQ0FXdkI7SUFBRCxrQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbWQ1IGZyb20gXCJtZDVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IFN1Y2Nlc3NSZXNwb25zZUR0byB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvUmVzcG9uc2VEdG9cIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9Vc2VyXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyRmFjdG9yeUFjaSB7XHJcbiAgICBjcmVhdGVVc2VyRG8odXNlckR0bzogYW55KTtcclxufVxyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgVXNlckZhY3RvcnkgaW1wbGVtZW50cyBVc2VyRmFjdG9yeUFjaSB7XHJcbiAgICBjcmVhdGVVc2VyRG8odXNlckR0bzogYW55KSB7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHVzZXIucGFzc3dvcmQgPSBtZDUodXNlckR0by5wYXNzd29yZCk7XHJcbiAgICAgICAgdXNlci5sb2dpbiA9IHVzZXJEdG8ubG9naW47XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTG9naW5EdG8odG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3VjY2Vzc1Jlc3BvbnNlRHRvKHt0b2tlbn0pXHJcbiAgICB9XHJcbn0iXX0=