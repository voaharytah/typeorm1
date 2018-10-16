"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var typedi_1 = require("../../../node_modules/typedi");
var Logger = /** @class */ (function () {
    function Logger() {
        this.logger = winston.createLogger({
            format: winston.format.combine(winston.format.splat(), winston.format.colorize(), winston.format.timestamp(), winston.format.printf(function (info) { return info.timestamp + " " + info.level + ": " + info.message; })),
            transports: [
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'info.log', level: 'info' })
            ]
        });
    }
    Logger.prototype.error = function (message) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        this.logger.error(message, meta);
    };
    Logger.prototype.info = function (message) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        this.logger.info(message, meta);
    };
    Logger = __decorate([
        typedi_1.Service()
    ], Logger);
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29tbXVuL0xvZ2dpbmcvTG9nZ2VyLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db21tdW4vTG9nZ2luZy9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpQ0FBbUM7QUFDbkMsdURBQXVEO0FBR3ZEO0lBREE7UUFFSSxXQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUMxQixNQUFNLEVBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUcsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsS0FBSyxVQUFLLElBQUksQ0FBQyxPQUFTLEVBQWxELENBQWtELENBQUMsQ0FDcEY7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUN0RSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDdkU7U0FDSixDQUFDLENBQUM7SUFTUCxDQUFDO0lBUEcsc0JBQUssR0FBTCxVQUFNLE9BQWU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxPQUFlO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFwQlEsTUFBTTtRQURsQixnQkFBTyxFQUFFO09BQ0csTUFBTSxDQXFCbEI7SUFBRCxhQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGVkaSc7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xyXG4gICAgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoeyAgXHJcbiAgICAgICAgZm9ybWF0IDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksICAgICAgXHJcbiAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IGAke2luZm8udGltZXN0YW1wfSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdHJhbnNwb3J0czogW1xyXG4gICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBmaWxlbmFtZTogJ2Vycm9yLmxvZycsIGxldmVsOiAnZXJyb3InIH0pLFxyXG4gICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBmaWxlbmFtZTogJ2luZm8ubG9nJywgbGV2ZWw6ICdpbmZvJyB9KVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgLi4ubWV0YTogYW55W10pIHtcclxuICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKG1lc3NhZ2UsIG1ldGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCAuLi5tZXRhOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8obWVzc2FnZSwgbWV0YSk7XHJcbiAgICB9XHJcbn0iXX0=