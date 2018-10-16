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
var ClientRepositoryImpl_1 = require("../../../Repository/ClientRepository/ClientRepositoryImpl");
var ClientSMImpl = /** @class */ (function () {
    function ClientSMImpl() {
    }
    ClientSMImpl.prototype.findClient = function (idClient) {
        return this.clientRepository.findClient(idClient);
    };
    ClientSMImpl.prototype.saveClient = function (client) {
        return this.clientRepository.saveClient(client);
    };
    ClientSMImpl.prototype.getClients = function (searchParams) {
        return this.clientRepository.getClients(searchParams);
    };
    ClientSMImpl.prototype.clientsTotalAmount = function (searchParams) {
        return this.clientRepository.clientsTotalAmount(searchParams);
    };
    ClientSMImpl.prototype.clientTotalAmount = function (idClient) {
        return this.clientRepository.clientTotalAmount(idClient);
    };
    __decorate([
        typeorm_typedi_extensions_1.InjectRepository(),
        __metadata("design:type", ClientRepositoryImpl_1.ClientRepositoryImpl)
    ], ClientSMImpl.prototype, "clientRepository", void 0);
    ClientSMImpl = __decorate([
        typedi_1.Service()
    ], ClientSMImpl);
    return ClientSMImpl;
}());
exports.ClientSMImpl = ClientSMImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlTWV0aWVyL0NsaWVudFNNL0NsaWVudFNNSW1wbC50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlTWV0aWVyL0NsaWVudFNNL0NsaWVudFNNSW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGlDQUFpQztBQUNqQyx1RUFBNkQ7QUFDN0Qsa0dBQWlHO0FBSWpHO0lBQUE7SUEwQkEsQ0FBQztJQXJCRyxpQ0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsWUFBaUI7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixZQUFpQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsUUFBZ0I7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBcEJEO1FBREMsNENBQWdCLEVBQUU7a0NBQ0QsMkNBQW9COzBEQUFDO0lBSDlCLFlBQVk7UUFEeEIsZ0JBQU8sRUFBRTtPQUNHLFlBQVksQ0EwQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudFNNQWNpIH0gZnJvbSBcIi4vQ2xpZW50U01BY2lcIjtcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ0eXBlZGlcIjtcclxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtLXR5cGVkaS1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IENsaWVudFJlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi4vLi4vLi4vUmVwb3NpdG9yeS9DbGllbnRSZXBvc2l0b3J5L0NsaWVudFJlcG9zaXRvcnlJbXBsJztcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NsaWVudFwiO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50U01JbXBsIGltcGxlbWVudHMgQ2xpZW50U01BY2kge1xyXG5cclxuICAgIEBJbmplY3RSZXBvc2l0b3J5KClcclxuICAgIGNsaWVudFJlcG9zaXRvcnk6IENsaWVudFJlcG9zaXRvcnlJbXBsO1xyXG5cclxuICAgIGZpbmRDbGllbnQoaWRDbGllbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudFJlcG9zaXRvcnkuZmluZENsaWVudChpZENsaWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUNsaWVudChjbGllbnQ6IENsaWVudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudFJlcG9zaXRvcnkuc2F2ZUNsaWVudChjbGllbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsaWVudHMoc2VhcmNoUGFyYW1zOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRSZXBvc2l0b3J5LmdldENsaWVudHMoc2VhcmNoUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRzVG90YWxBbW91bnQoc2VhcmNoUGFyYW1zOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRSZXBvc2l0b3J5LmNsaWVudHNUb3RhbEFtb3VudChzZWFyY2hQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWVudFRvdGFsQW1vdW50KGlkQ2xpZW50OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRSZXBvc2l0b3J5LmNsaWVudFRvdGFsQW1vdW50KGlkQ2xpZW50KTtcclxuICAgIH1cclxuXHJcblxyXG59Il19