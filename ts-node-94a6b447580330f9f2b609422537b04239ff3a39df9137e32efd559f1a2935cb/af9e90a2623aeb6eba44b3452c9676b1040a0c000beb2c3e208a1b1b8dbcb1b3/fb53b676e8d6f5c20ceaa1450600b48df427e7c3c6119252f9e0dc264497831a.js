"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var bodyParser = require("body-parser");
var AppRoutes_1 = require("./Contrainte/Config/Routes/AppRoutes");
var typedi_1 = require("typedi");
var JwtUtility_1 = require("./Commun/Token/JwtUtility");
var AppConfig_1 = require("./Contrainte/Config/AppConfig/AppConfig");
typeorm_1.useContainer(typedi_1.Container);
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        app = express();
        app.use(AppConfig_1.AppConfig.allowCrossDomain);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(new JwtUtility_1.JwtUtility().verifyToken);
        AppRoutes_1.Routes.forEach(function (route) {
            app[route.method](route.route, function (req, res, next) {
                var result = (new route.controller)[route.action](req, res, next)
                    .then(function () { return next; })
                    .catch(function (err) { return next(err); });
            });
        });
        app.listen(3000);
        console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQTZCQTs7QUE3QkEsNEJBQTBCO0FBQzFCLG1DQUF5RDtBQUN6RCxpQ0FBbUM7QUFDbkMsd0NBQTBDO0FBRTFDLGtFQUE4RDtBQUM5RCxpQ0FBbUM7QUFDbkMsd0RBQXVEO0FBQ3ZELHFFQUFvRTtBQUVwRSxzQkFBWSxDQUFDLGtCQUFTLENBQUMsQ0FBQTtBQUN2QiwwQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFNLFVBQVU7OztRQUU5QixHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEMsa0JBQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2YsR0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFjO2dCQUNoRixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUssS0FBSyxDQUFDLFVBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7cUJBQ3ZFLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztxQkFDaEIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEZBQTBGLENBQUMsQ0FBQzs7O0tBQzNHLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uLCB1c2VDb250YWluZXIgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCIuL0NvbnRyYWludGUvQ29uZmlnL1JvdXRlcy9BcHBSb3V0ZXNcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJ0eXBlZGlcIjtcbmltcG9ydCB7IEp3dFV0aWxpdHkgfSBmcm9tIFwiLi9Db21tdW4vVG9rZW4vSnd0VXRpbGl0eVwiO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi9Db250cmFpbnRlL0NvbmZpZy9BcHBDb25maWcvQXBwQ29uZmlnJztcblxudXNlQ29udGFpbmVyKENvbnRhaW5lcilcbmNyZWF0ZUNvbm5lY3Rpb24oKS50aGVuKGFzeW5jIGNvbm5lY3Rpb24gPT4ge1xuXG4gICAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICAgIGFwcC51c2UoQXBwQ29uZmlnLmFsbG93Q3Jvc3NEb21haW4pO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICAgIGFwcC51c2UobmV3IEp3dFV0aWxpdHkoKS52ZXJpZnlUb2tlbik7XG5cbiAgICBSb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICAgIChhcHAgYXMgYW55KVtyb3V0ZS5tZXRob2RdKHJvdXRlLnJvdXRlLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKG5ldyAocm91dGUuY29udHJvbGxlciBhcyBhbnkpKVtyb3V0ZS5hY3Rpb25dKHJlcSwgcmVzLCBuZXh0KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IG5leHQpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBuZXh0KGVycikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBhcHAubGlzdGVuKDMwMDApO1xuICAgIGNvbnNvbGUubG9nKFwiRXhwcmVzcyBzZXJ2ZXIgaGFzIHN0YXJ0ZWQgb24gcG9ydCAzMDAwLiBPcGVuIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VycyB0byBzZWUgcmVzdWx0c1wiKTtcbn0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4iXX0=