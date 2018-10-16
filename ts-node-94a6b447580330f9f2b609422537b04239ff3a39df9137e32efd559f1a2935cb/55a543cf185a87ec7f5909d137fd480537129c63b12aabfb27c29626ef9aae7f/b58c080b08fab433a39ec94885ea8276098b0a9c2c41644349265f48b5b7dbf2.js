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
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "idUser", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "login", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvVXNlci50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFpRTtBQUdqRTtJQUFBO0lBV0EsQ0FBQztJQVJHO1FBREMsZ0NBQXNCLEVBQUU7O3dDQUNWO0lBR2Y7UUFEQyxnQkFBTSxFQUFFOzt1Q0FDSztJQUdkO1FBREMsZ0JBQU0sRUFBRTs7MENBQ1E7SUFUUixJQUFJO1FBRGhCLGdCQUFNLEVBQUU7T0FDSSxJQUFJLENBV2hCO0lBQUQsV0FBQztDQUFBLEFBWEQsSUFXQztBQVhZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZFVzZXI6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIGxvZ2luOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG59XG4iXX0=