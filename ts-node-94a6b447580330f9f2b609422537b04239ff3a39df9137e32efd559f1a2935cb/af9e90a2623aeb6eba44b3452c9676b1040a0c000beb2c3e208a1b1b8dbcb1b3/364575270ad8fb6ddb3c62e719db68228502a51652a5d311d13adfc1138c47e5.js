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
var Commande_1 = require("./Commande");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.setCreatedDate = function () {
        this.createdAt = new Date();
    };
    Client.prototype.setUpdatedDate = function () {
        this.updatetedAt = new Date();
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Client.prototype, "idClient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "address", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Commande_1.Commande; }, function (commande) { return commande.client; }),
        __metadata("design:type", Array)
    ], Client.prototype, "commandes", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Client.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Client.prototype, "updatetedAt", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Client.prototype, "setCreatedDate", null);
    __decorate([
        typeorm_1.BeforeUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Client.prototype, "setUpdatedDate", null);
    Client = __decorate([
        typeorm_1.Entity()
    ], Client);
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9Eb21haW5PYmplY3QvQ2xpZW50LnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Eb25uZWVzL0RvbWFpbk9iamVjdC9DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBMEg7QUFDMUgsdUNBQXNDO0FBR3RDO0lBQUE7SUE2QkEsQ0FBQztJQVRHLCtCQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUdELCtCQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXpCRDtRQURDLGdDQUFzQixFQUFFOzs0Q0FDUjtJQUdqQjtRQURDLGdCQUFNLEVBQUU7O3dDQUNJO0lBR2I7UUFEQyxnQkFBTSxFQUFFOzsyQ0FDTztJQUdoQjtRQURDLG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxtQkFBUSxFQUFSLENBQVEsRUFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDOzs2Q0FDbkM7SUFHdEI7UUFEQyxnQkFBTSxFQUFFO2tDQUNFLElBQUk7NkNBQUM7SUFHaEI7UUFEQyxnQkFBTSxFQUFFO2tDQUNJLElBQUk7K0NBQUM7SUFHbEI7UUFEQyxzQkFBWSxFQUFFOzs7O2dEQUdkO0lBR0Q7UUFEQyxzQkFBWSxFQUFFOzs7O2dEQUdkO0lBM0JRLE1BQU07UUFEbEIsZ0JBQU0sRUFBRTtPQUNJLE1BQU0sQ0E2QmxCO0lBQUQsYUFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE9uZVRvTWFueSwgQ3JlYXRlRGF0ZUNvbHVtbiwgQmVmb3JlSW5zZXJ0LCBCZWZvcmVVcGRhdGUgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kZSB9IGZyb20gXCIuL0NvbW1hbmRlXCI7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIENsaWVudCB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBpZENsaWVudDogbnVtYmVyO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBAT25lVG9NYW55KHR5cGUgPT4gQ29tbWFuZGUsIGNvbW1hbmRlID0+IGNvbW1hbmRlLmNsaWVudClcclxuICAgIGNvbW1hbmRlczogQ29tbWFuZGVbXTtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIHVwZGF0ZXRlZEF0OiBEYXRlO1xyXG5cclxuICAgIEBCZWZvcmVJbnNlcnQoKVxyXG4gICAgc2V0Q3JlYXRlZERhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBCZWZvcmVVcGRhdGUoKVxyXG4gICAgc2V0VXBkYXRlZERhdGUoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGV0ZWRBdCA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcblxyXG59Il19