"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var UserRepository_1 = require("../../../Repository/UserRepository/UserRepository");
var UserSMImpl = /** @class */ (function () {
    function UserSMImpl() {
    }
    UserSMImpl.prototype.login = function (user) {
        return this.userRepository.login(user);
    };
    UserSMImpl.prototype.createUser = function (user) {
        return this.userRepository.createUser(user);
    };
    __decorate([
        typeorm_typedi_extensions_1.InjectRepository(),
        __metadata("design:type", UserRepository_1.UserRepository)
    ], UserSMImpl.prototype, "userRepository", void 0);
    UserSMImpl = __decorate([
        typedi_1.Service()
    ], UserSMImpl);
    return UserSMImpl;
}());
exports.UserSMImpl = UserSMImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlTWV0aWVyL1VzZXJTTS9Vc2VyU01JbXBsLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9TZXJ2aWNlL1NlcnZpY2VNZXRpZXIvVXNlclNNL1VzZXJTTUltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxpQ0FBaUM7QUFDakMsdUVBQTZEO0FBQzdELG9GQUFtRjtBQUduRjtJQUFBO0lBWUEsQ0FBQztJQVBHLDBCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsSUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVJEO1FBREMsNENBQWdCLEVBQUU7a0NBQ0gsK0JBQWM7c0RBQUM7SUFIdEIsVUFBVTtRQUR0QixnQkFBTyxFQUFFO09BQ0csVUFBVSxDQVl0QjtJQUFELGlCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU01BY2kgfSBmcm9tIFwiLi9Vc2VyU01BY2lcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi9Eb25uZWVzL0RvbWFpbk9iamVjdC9Vc2VyXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybS10eXBlZGktZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL1JlcG9zaXRvcnkvVXNlclJlcG9zaXRvcnkvVXNlclJlcG9zaXRvcnknO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNNSW1wbCBpbXBsZW1lbnRzIFVzZXJTTUFjaSB7XHJcblxyXG4gICAgQEluamVjdFJlcG9zaXRvcnkoKVxyXG4gICAgdXNlclJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5O1xyXG5cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5sb2dpbih1c2VyKTsgXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlVXNlcih1c2VyKTtcclxuICAgIH1cclxufSJdfQ==