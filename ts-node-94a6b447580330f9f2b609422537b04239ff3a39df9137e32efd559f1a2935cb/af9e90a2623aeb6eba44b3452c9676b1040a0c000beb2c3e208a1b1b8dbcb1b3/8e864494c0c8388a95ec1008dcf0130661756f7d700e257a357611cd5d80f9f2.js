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
var ClientValidator = /** @class */ (function (_super) {
    __extends(ClientValidator, _super);
    function ClientValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requiredField = ["name", "address"];
        return _this;
    }
    ClientValidator = __decorate([
        typedi_1.Service()
    ], ClientValidator);
    return ClientValidator;
}(GenericValidator_1.GenericValidator));
exports.ClientValidator = ClientValidator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvQ2xpZW50VmFsaWRhdG9yLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db250cmFpbnRlL1ZhbGlkYXRvci9DbGllbnRWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELGlDQUFpQztBQUdqQztJQUFxQyxtQ0FBZ0I7SUFEckQ7UUFBQSxxRUFHQztRQURHLG1CQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7O0lBQ3hDLENBQUM7SUFGWSxlQUFlO1FBRDNCLGdCQUFPLEVBQUU7T0FDRyxlQUFlLENBRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUZELENBQXFDLG1DQUFnQixHQUVwRDtBQUZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY1ZhbGlkYXRvciB9IGZyb20gJy4vR2VuZXJpY1ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICd0eXBlZGknO1xyXG5cclxuQFNlcnZpY2UoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50VmFsaWRhdG9yIGV4dGVuZHMgR2VuZXJpY1ZhbGlkYXRvciB7XHJcbiAgICByZXF1aXJlZEZpZWxkID0gW1wibmFtZVwiLCBcImFkZHJlc3NcIl07XHJcbn0iXX0=