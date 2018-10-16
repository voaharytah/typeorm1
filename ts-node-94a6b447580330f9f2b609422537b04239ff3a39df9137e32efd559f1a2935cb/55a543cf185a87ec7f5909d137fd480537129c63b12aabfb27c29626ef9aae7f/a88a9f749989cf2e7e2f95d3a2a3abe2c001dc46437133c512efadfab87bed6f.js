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
var GenericValidator_1 = require("./GenericValidator");
var typedi_1 = require("typedi");
var UserValidator = /** @class */ (function (_super) {
    __extends(UserValidator, _super);
    function UserValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requiredField = ['login', 'password'];
        return _this;
    }
    UserValidator = __decorate([
        typedi_1.Service()
    ], UserValidator);
    return UserValidator;
}(GenericValidator_1.GenericValidator));
exports.UserValidator = UserValidator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvVXNlclZhbGlkYXRvci50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvVXNlclZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsaUNBQWlDO0FBR2pDO0lBQW1DLGlDQUFnQjtJQURuRDtRQUFBLHFFQUdDO1FBREcsbUJBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzs7SUFDMUMsQ0FBQztJQUZZLGFBQWE7UUFEekIsZ0JBQU8sRUFBRTtPQUNHLGFBQWEsQ0FFekI7SUFBRCxvQkFBQztDQUFBLEFBRkQsQ0FBbUMsbUNBQWdCLEdBRWxEO0FBRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljVmFsaWRhdG9yIH0gZnJvbSBcIi4vR2VuZXJpY1ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgVXNlclZhbGlkYXRvciBleHRlbmRzIEdlbmVyaWNWYWxpZGF0b3Ige1xyXG4gICAgcmVxdWlyZWRGaWVsZCA9IFsnbG9naW4nLCAncGFzc3dvcmQnXTtcclxufSJdfQ==