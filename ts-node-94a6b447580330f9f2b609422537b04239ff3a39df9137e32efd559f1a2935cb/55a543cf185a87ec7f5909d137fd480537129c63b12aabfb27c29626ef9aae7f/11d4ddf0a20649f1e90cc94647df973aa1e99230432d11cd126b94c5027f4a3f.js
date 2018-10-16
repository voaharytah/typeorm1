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
Object.defineProperty(exports, "__esModule", { value: true });
var migration1535985241691 = /** @class */ (function () {
    function migration1535985241691() {
    }
    migration1535985241691.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `client` ADD `updatetedAt` datetime NOT NULL")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `produit` CHANGE `pu` `pu` double NOT NULL")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `produit` CHANGE `qte` `qte` double NOT NULL")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    migration1535985241691.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `produit` CHANGE `qte` `qte` double(22) NOT NULL")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `produit` CHANGE `pu` `pu` double(22) NOT NULL")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `client` DROP COLUMN `updatetedAt`")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return migration1535985241691;
}());
exports.migration1535985241691 = migration1535985241691;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29udHJhaW50ZS9Db25maWcvTWlncmF0aW9uLzE1MzU5ODUyNDE2OTEtbWlncmF0aW9uLnRzIiwic291cmNlcyI6WyIvbWVkaWEvdm9haGFyeS9kYXRhL1JEL1NPVVJDRS9OT0RFL3R5cGVvcm0zL3NyYy9Db250cmFpbnRlL0NvbmZpZy9NaWdyYXRpb24vMTUzNTk4NTI0MTY5MS1taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUFjQSxDQUFDO0lBWmdCLG1DQUFFLEdBQWYsVUFBZ0IsV0FBd0I7Ozs7NEJBQ3BDLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsRUFBQTs7d0JBQW5GLFNBQW1GLENBQUM7d0JBQ3BGLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsRUFBQTs7d0JBQWpGLFNBQWlGLENBQUM7d0JBQ2xGLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsRUFBQTs7d0JBQW5GLFNBQW1GLENBQUM7Ozs7O0tBQ3ZGO0lBRVkscUNBQUksR0FBakIsVUFBa0IsV0FBd0I7Ozs7NEJBQ3RDLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsRUFBQTs7d0JBQXZGLFNBQXVGLENBQUM7d0JBQ3hGLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsNERBQTRELENBQUMsRUFBQTs7d0JBQXJGLFNBQXFGLENBQUM7d0JBQ3RGLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsRUFBQTs7d0JBQXpFLFNBQXlFLENBQUM7Ozs7O0tBQzdFO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWlncmF0aW9uSW50ZXJmYWNlLCBRdWVyeVJ1bm5lcn0gZnJvbSBcInR5cGVvcm1cIjtcblxuZXhwb3J0IGNsYXNzIG1pZ3JhdGlvbjE1MzU5ODUyNDE2OTEgaW1wbGVtZW50cyBNaWdyYXRpb25JbnRlcmZhY2Uge1xuXG4gICAgcHVibGljIGFzeW5jIHVwKHF1ZXJ5UnVubmVyOiBRdWVyeVJ1bm5lcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KFwiQUxURVIgVEFCTEUgYGNsaWVudGAgQUREIGB1cGRhdGV0ZWRBdGAgZGF0ZXRpbWUgTk9UIE5VTExcIik7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KFwiQUxURVIgVEFCTEUgYHByb2R1aXRgIENIQU5HRSBgcHVgIGBwdWAgZG91YmxlIE5PVCBOVUxMXCIpO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShcIkFMVEVSIFRBQkxFIGBwcm9kdWl0YCBDSEFOR0UgYHF0ZWAgYHF0ZWAgZG91YmxlIE5PVCBOVUxMXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkb3duKHF1ZXJ5UnVubmVyOiBRdWVyeVJ1bm5lcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KFwiQUxURVIgVEFCTEUgYHByb2R1aXRgIENIQU5HRSBgcXRlYCBgcXRlYCBkb3VibGUoMjIpIE5PVCBOVUxMXCIpO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShcIkFMVEVSIFRBQkxFIGBwcm9kdWl0YCBDSEFOR0UgYHB1YCBgcHVgIGRvdWJsZSgyMikgTk9UIE5VTExcIik7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KFwiQUxURVIgVEFCTEUgYGNsaWVudGAgRFJPUCBDT0xVTU4gYHVwZGF0ZXRlZEF0YFwiKTtcbiAgICB9XG5cbn1cbiJdfQ==