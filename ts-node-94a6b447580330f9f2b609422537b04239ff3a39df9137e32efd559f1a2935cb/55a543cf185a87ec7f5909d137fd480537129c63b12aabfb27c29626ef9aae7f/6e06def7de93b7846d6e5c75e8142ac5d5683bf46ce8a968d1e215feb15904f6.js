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
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var CommandeRepositoryImpl_1 = require("../../../Repository/CommandeRepository/CommandeRepositoryImpl");
var typedi_1 = require("typedi");
var CommandeSMImpl = /** @class */ (function () {
    function CommandeSMImpl() {
    }
    CommandeSMImpl.prototype.deleteCommande = function (criteria) {
        return this.commandeRepository.deleteCommande(criteria);
    };
    CommandeSMImpl.prototype.addCommande = function (commandeDo) {
        return this.commandeRepository.addCommande(commandeDo);
    };
    CommandeSMImpl.prototype.getCommandeByClient = function (idClient) {
        throw new Error("Method not implemented.");
    };
    CommandeSMImpl.prototype.createFacture = function (idCommande) {
        return this.commandeRepository.createFacture(idCommande);
    };
    __decorate([
        typeorm_typedi_extensions_1.InjectRepository(),
        __metadata("design:type", CommandeRepositoryImpl_1.CommandeRepositoryImpl)
    ], CommandeSMImpl.prototype, "commandeRepository", void 0);
    CommandeSMImpl = __decorate([
        typedi_1.Service()
    ], CommandeSMImpl);
    return CommandeSMImpl;
}());
exports.CommandeSMImpl = CommandeSMImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvU2VydmljZS9TZXJ2aWNlTWV0aWVyL0NvbW1hbmRlU00vQ29tbWFuZGVTTUltcGwudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL1NlcnZpY2UvU2VydmljZU1ldGllci9Db21tYW5kZVNNL0NvbW1hbmRlU01JbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdUVBQTZEO0FBQzdELHdHQUF1RztBQUN2RyxpQ0FBaUM7QUFLakM7SUFBQTtJQXFCQSxDQUFDO0lBcEJHLHVDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFLRCxvQ0FBVyxHQUFYLFVBQVksVUFBb0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDRDQUFtQixHQUFuQixVQUFvQixRQUFnQjtRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBWkQ7UUFEQyw0Q0FBZ0IsRUFBRTtrQ0FDQywrQ0FBc0I7OERBQUM7SUFObEMsY0FBYztRQUQxQixnQkFBTyxFQUFFO09BQ0csY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZGVTTUFjaSB9IGZyb20gXCIuL0NvbW1hbmRlU01BY2lcIjtcclxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtLXR5cGVkaS1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IENvbW1hbmRlUmVwb3NpdG9yeUltcGwgfSBmcm9tIFwiLi4vLi4vLi4vUmVwb3NpdG9yeS9Db21tYW5kZVJlcG9zaXRvcnkvQ29tbWFuZGVSZXBvc2l0b3J5SW1wbFwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcInR5cGVkaVwiO1xyXG5pbXBvcnQgeyBydW5JblRoaXNDb250ZXh0IH0gZnJvbSBcInZtXCI7XHJcbmltcG9ydCB7IENvbW1hbmRlIH0gZnJvbSBcIi4uLy4uLy4uL0Rvbm5lZXMvRG9tYWluT2JqZWN0L0NvbW1hbmRlXCI7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kZVNNSW1wbCBpbXBsZW1lbnRzIENvbW1hbmRlU01BY2kge1xyXG4gICAgZGVsZXRlQ29tbWFuZGUoY3JpdGVyaWE6IGFueSkgeyAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRlUmVwb3NpdG9yeS5kZWxldGVDb21tYW5kZShjcml0ZXJpYSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEluamVjdFJlcG9zaXRvcnkoKVxyXG4gICAgY29tbWFuZGVSZXBvc2l0b3J5OiBDb21tYW5kZVJlcG9zaXRvcnlJbXBsO1xyXG5cclxuICAgIGFkZENvbW1hbmRlKGNvbW1hbmRlRG86IENvbW1hbmRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZGVSZXBvc2l0b3J5LmFkZENvbW1hbmRlKGNvbW1hbmRlRG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1hbmRlQnlDbGllbnQoaWRDbGllbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICBjcmVhdGVGYWN0dXJlKGlkQ29tbWFuZGU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRlUmVwb3NpdG9yeS5jcmVhdGVGYWN0dXJlKGlkQ29tbWFuZGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=