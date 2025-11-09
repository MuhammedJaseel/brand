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
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const products_schema_1 = require("../schemas/products.schema");
const products_service_1 = require("./products/products.service");
const products_controller_1 = require("./products/products.controller");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const users_schema_1 = require("../schemas/users.schema");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply(UserMiddleware).forRoutes('api/user');
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: products_schema_1.Product.name, schema: products_schema_1.ProductSchema },
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
            ]),
        ],
        controllers: [user_controller_1.UserController, products_controller_1.ProductsController],
        providers: [user_service_1.UserService, products_service_1.ProductsService, jwt_1.JwtService],
    })
], UserModule);
let UserMiddleware = class UserMiddleware {
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
UserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UserMiddleware);
//# sourceMappingURL=user.module.js.map