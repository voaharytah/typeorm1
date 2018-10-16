"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuccessResponseDto = /** @class */ (function () {
    function SuccessResponseDto(data, hasError) {
        this.data = data;
        this.hasError = hasError;
    }
    return SuccessResponseDto;
}());
exports.SuccessResponseDto = SuccessResponseDto;
var ErrorResponseDto = /** @class */ (function () {
    function ErrorResponseDto(errorMessage, hasError, code) {
        this.errorMessage = errorMessage;
        this.hasError = hasError;
        this.code = code;
    }
    ErrorResponseDto.prototype.toString = function () {
        return this.errorMessage;
    };
    return ErrorResponseDto;
}());
exports.ErrorResponseDto = ErrorResponseDto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvRG9ubmVlcy9EYXRhVHJhbnNmZXJ0T2JqZWN0L1Jlc3BvbnNlRHRvLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Eb25uZWVzL0RhdGFUcmFuc2ZlcnRPYmplY3QvUmVzcG9uc2VEdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLDRCQUNXLElBQVMsRUFDVCxRQUFrQjtRQURsQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7SUFDdEMseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGdEQUFrQjtBQU0vQjtJQUNJLDBCQUNXLFlBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLElBQWM7UUFGZCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQVU7SUFDdkIsQ0FBQztJQUVILG1DQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdWNjZXNzUmVzcG9uc2VEdG8ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRhdGE6IGFueSxcclxuICAgICAgICBwdWJsaWMgaGFzRXJyb3I/OiBib29sZWFuKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yUmVzcG9uc2VEdG8ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbiwgICAgICAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNvZGU/IDogbnVtYmVyXHJcbiAgICApe31cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2U7XHJcbiAgICB9XHJcbn0iXX0=