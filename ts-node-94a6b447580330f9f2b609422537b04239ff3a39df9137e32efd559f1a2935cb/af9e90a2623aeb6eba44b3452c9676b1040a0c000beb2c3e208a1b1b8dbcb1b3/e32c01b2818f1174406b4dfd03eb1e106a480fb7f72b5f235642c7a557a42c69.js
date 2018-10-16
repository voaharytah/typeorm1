"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseDto_1 = require("../../Donnees/DataTransfertObject/ResponseDto");
var GenericValidator = /** @class */ (function () {
    function GenericValidator() {
        this.requiredField = [];
    }
    GenericValidator.prototype.requiredValidator = function (data) {
        var notFound = [];
        this.requiredField.forEach(function (field) { return !data[field] && notFound.push(field); });
        if (notFound.length !== 0) {
            throw new ResponseDto_1.ErrorResponseDto(this.createNotFoundMessage(notFound), notFound.length !== 0);
        }
    };
    GenericValidator.prototype.createNotFoundMessage = function (notFound) {
        return notFound.length !== 0 ? notFound.length > 1 ?
            "Les champs " + notFound.join(',') + " sont obligatoires" : "Le champ " + notFound.join(',') + " est obligatoire" : "";
    };
    return GenericValidator;
}());
exports.GenericValidator = GenericValidator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvR2VuZXJpY1ZhbGlkYXRvci50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9WYWxpZGF0b3IvR2VuZXJpY1ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZFQUFpRjtBQUVqRjtJQUFBO1FBQ0ksa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFjdkIsQ0FBQztJQVpHLDRDQUFpQixHQUFqQixVQUFrQixJQUFTO1FBQ3ZCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztRQUMxRSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLDhCQUFnQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVGLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0RBQXFCLEdBQTdCLFVBQThCLFFBQVE7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUM5QyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7SUFDL0gsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvclJlc3BvbnNlRHRvIH0gZnJvbSBcIi4uLy4uL0Rvbm5lZXMvRGF0YVRyYW5zZmVydE9iamVjdC9SZXNwb25zZUR0b1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlbmVyaWNWYWxpZGF0b3Ige1xyXG4gICAgcmVxdWlyZWRGaWVsZCA9IFtdO1xyXG5cclxuICAgIHJlcXVpcmVkVmFsaWRhdG9yKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBub3RGb3VuZCA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVxdWlyZWRGaWVsZC5mb3JFYWNoKGZpZWxkID0+ICFkYXRhW2ZpZWxkXSAmJiBub3RGb3VuZC5wdXNoKGZpZWxkKSk7XHJcbiAgICAgICAgaWYobm90Rm91bmQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvclJlc3BvbnNlRHRvKHRoaXMuY3JlYXRlTm90Rm91bmRNZXNzYWdlKG5vdEZvdW5kKSwgbm90Rm91bmQubGVuZ3RoICE9PSAwKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm90Rm91bmRNZXNzYWdlKG5vdEZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kLmxlbmd0aCAhPT0gMCA/IG5vdEZvdW5kLmxlbmd0aCA+IDEgP1xyXG4gICAgICAgICAgICBcIkxlcyBjaGFtcHMgXCIgKyBub3RGb3VuZC5qb2luKCcsJykgKyBcIiBzb250IG9ibGlnYXRvaXJlc1wiIDogXCJMZSBjaGFtcCBcIiArIG5vdEZvdW5kLmpvaW4oJywnKSArIFwiIGVzdCBvYmxpZ2F0b2lyZVwiIDogXCJcIjtcclxuICAgIH1cclxufSJdfQ==