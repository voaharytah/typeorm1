"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var jwt = require('jsonwebtoken');
var typedi_1 = require("typedi");
var ResponseDto_1 = require("../../Donnees/DataTransfertObject/ResponseDto");
var typedi_2 = require("typedi");
var JwtUtility = /** @class */ (function () {
    function JwtUtility() {
        var _this = this;
        this.key = "secret";
        this.AuthorizationHeaderKey = "Authorization";
        this.tokenExpirireIn = '1h';
        this.verifyToken = function (req, resp, next) {
            try {
                if (req.originalUrl.indexOf('api') >= 0) {
                    req.get(_this.AuthorizationHeaderKey) && (jwt.verify(req.get(_this.AuthorizationHeaderKey), _this.key), next());
                    !req.get(_this.AuthorizationHeaderKey) && resp.status(401).send(new ResponseDto_1.ErrorResponseDto("Non authorisé", true));
                }
                else {
                    next();
                }
            }
            catch (e) {
                resp.status(401).send(new ResponseDto_1.ErrorResponseDto(e.toString(), true));
            }
        };
    }
    JwtUtility.prototype.decodeToken = function () {
        try {
            return jwt.decode(typedi_2.Container.get("token"));
        }
        catch (e) {
            throw e;
        }
    };
    JwtUtility.prototype.createToken = function (payload) {
        var token = jwt.sign(__assign({}, payload), this.key, { expiresIn: this.tokenExpirireIn });
        typedi_2.Container.set("token", token);
        return token;
    };
    JwtUtility = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [])
    ], JwtUtility);
    return JwtUtility;
}());
exports.JwtUtility = JwtUtility;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL3ZvYWhhcnkvZGF0YS9SRC9TT1VSQ0UvTk9ERS90eXBlb3JtMy9zcmMvQ29tbXVuL1Rva2VuL0p3dFV0aWxpdHkudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS92b2FoYXJ5L2RhdGEvUkQvU09VUkNFL05PREUvdHlwZW9ybTMvc3JjL0NvbW11bi9Ub2tlbi9Kd3RVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbEMsaUNBQWlDO0FBRWpDLDZFQUFpRjtBQUNqRixpQ0FBbUM7QUFHbkM7SUFLSTtRQUFBLGlCQUFpQjtRQUpqQixRQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ2YsMkJBQXNCLEdBQUcsZUFBZSxDQUFDO1FBQ3pDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBa0J2QixnQkFBVyxHQUFHLFVBQUMsR0FBWSxFQUFFLElBQWMsRUFBRSxJQUFJO1lBQzdDLElBQUksQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUM3RyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSw4QkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEgsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDWCxDQUFDO1lBQ0wsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSw4QkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRSxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBM0JlLENBQUM7SUFFakIsZ0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsQ0FBQztRQUNaLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLE9BQVk7UUFDcEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksY0FBTSxPQUFPLEdBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN0RixrQkFBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBbkJRLFVBQVU7UUFEdEIsZ0JBQU8sRUFBRTs7T0FDRyxVQUFVLENBaUN0QjtJQUFELGlCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwidHlwZWRpXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlLCBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2VEdG8gfSBmcm9tIFwiLi4vLi4vRG9ubmVlcy9EYXRhVHJhbnNmZXJ0T2JqZWN0L1Jlc3BvbnNlRHRvXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3R5cGVkaSc7XHJcblxyXG5AU2VydmljZSgpXHJcbmV4cG9ydCBjbGFzcyBKd3RVdGlsaXR5IHtcclxuICAgIGtleSA9IFwic2VjcmV0XCI7XHJcbiAgICBBdXRob3JpemF0aW9uSGVhZGVyS2V5ID0gXCJBdXRob3JpemF0aW9uXCI7XHJcbiAgICB0b2tlbkV4cGlyaXJlSW4gPSAnMWgnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgZGVjb2RlVG9rZW4oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGp3dC5kZWNvZGUoQ29udGFpbmVyLmdldChcInRva2VuXCIpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRva2VuKHBheWxvYWQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IC4uLnBheWxvYWQgfSwgdGhpcy5rZXksIHsgZXhwaXJlc0luOiB0aGlzLnRva2VuRXhwaXJpcmVJbiB9KTtcclxuICAgICAgICBDb250YWluZXIuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnlUb2tlbiA9IChyZXE6IFJlcXVlc3QsIHJlc3A6IFJlc3BvbnNlLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlcS5vcmlnaW5hbFVybC5pbmRleE9mKCdhcGknKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXEuZ2V0KHRoaXMuQXV0aG9yaXphdGlvbkhlYWRlcktleSkgJiYgKGp3dC52ZXJpZnkocmVxLmdldCh0aGlzLkF1dGhvcml6YXRpb25IZWFkZXJLZXkpLCB0aGlzLmtleSksIG5leHQoKSk7XHJcbiAgICAgICAgICAgICAgICAhcmVxLmdldCh0aGlzLkF1dGhvcml6YXRpb25IZWFkZXJLZXkpICYmIHJlc3Auc3RhdHVzKDQwMSkuc2VuZChuZXcgRXJyb3JSZXNwb25zZUR0byhcIk5vbiBhdXRob3Jpc8OpXCIsIHRydWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcC5zdGF0dXMoNDAxKS5zZW5kKG5ldyBFcnJvclJlc3BvbnNlRHRvKGUudG9TdHJpbmcoKSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==