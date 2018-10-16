"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9Db25maWcvQXBwQ29uZmlnL0FwcENvbmZpZy50cyIsInNvdXJjZXMiOlsiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9Db25maWcvQXBwQ29uZmlnL0FwcENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQUE7SUFPQSxDQUFDO0lBTlUsMEJBQWdCLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQUk7UUFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQTtJQUNMLGdCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnIHtcclxuICAgIHN0YXRpYyBhbGxvd0Nyb3NzRG9tYWluID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dCkgPT4ge1xyXG4gICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUFVULFBPU1QsREVMRVRFJyk7XHJcbiAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9XHJcbn0iXX0=