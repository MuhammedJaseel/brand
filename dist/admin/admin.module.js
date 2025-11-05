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
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const jwt_1 = require("@nestjs/jwt");
const sales_controller_1 = require("./sales/sales.controller");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const sales_service_1 = require("./sales/sales.service");
const admins_controller_1 = require("./admins/admins.controller");
const admins_service_1 = require("./admins/admins.service");
let AdminModule = class AdminModule {
    configure(consumer) {
        consumer.apply(AmminMiddleware).forRoutes('admin');
    }
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            admin_controller_1.AdminController,
            admins_controller_1.AdminsController,
            sales_controller_1.SalesController,
            users_controller_1.UsersController,
        ],
        providers: [
            admin_service_1.AdminService,
            admins_service_1.AdminsService,
            sales_service_1.SalesService,
            users_service_1.UsersService,
            jwt_1.JwtService,
        ],
    })
], AdminModule);
let AmminMiddleware = class AmminMiddleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || 'default_admin_secret';
    }
    use(req, res, next) {
        try {
            const secret = this.ADMIN_SECRET;
            const token = req.headers['authorization'];
            this.jwtService.verify(token, { secret });
            next();
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
};
AmminMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AmminMiddleware);
//# sourceMappingURL=admin.module.js.map