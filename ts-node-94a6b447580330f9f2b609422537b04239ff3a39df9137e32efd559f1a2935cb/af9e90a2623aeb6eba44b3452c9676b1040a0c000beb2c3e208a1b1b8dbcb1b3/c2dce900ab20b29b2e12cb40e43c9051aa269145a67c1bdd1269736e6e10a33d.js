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
var ProduitValidator = /** @class */ (function (_super) {
    __extends(ProduitValidator, _super);
    function ProduitValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProduitValidator.prototype.stockEpuise = function (produit, qteCommande) {
        if (produit.qte < qteCommande) {
            return produit;
        }
        return false;
    };
    ProduitValidator = __decorate([
        typedi_1.Service()
    ], ProduitValidator);
    return ProduitValidator;
}(GenericValidator_1.GenericValidator));
exports.ProduitValidator = ProduitValidator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvUHJvZHVpdFZhbGlkYXRvci50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvUHJvZHVpdFZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsaUNBQWlDO0FBS2pDO0lBQXNDLG9DQUFnQjtJQUF0RDs7SUFPQSxDQUFDO0lBTkcsc0NBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsV0FBbUI7UUFDN0MsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQU5RLGdCQUFnQjtRQUQ1QixnQkFBTyxFQUFFO09BQ0csZ0JBQWdCLENBTzVCO0lBQUQsdUJBQUM7Q0FBQSxBQVBELENBQXNDLG1DQUFnQixHQU9yRDtBQVBZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNWYWxpZGF0b3IgfSBmcm9tIFwiLi9HZW5lcmljVmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IFByb2R1aXQgfSBmcm9tIFwiLi4vLi4vRG9ubmVlcy9Eb21haW5PYmplY3QvUHJvZHVpdFwiO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlRHRvIH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9SZXNwb25zZUR0b1wiO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVpdFZhbGlkYXRvciBleHRlbmRzIEdlbmVyaWNWYWxpZGF0b3Ige1xyXG4gICAgc3RvY2tFcHVpc2UocHJvZHVpdDogUHJvZHVpdCwgcXRlQ29tbWFuZGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHByb2R1aXQucXRlIDwgcXRlQ29tbWFuZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2R1aXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==