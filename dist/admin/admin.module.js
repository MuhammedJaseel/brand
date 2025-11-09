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
const mongoose_1 = require("@nestjs/mongoose");
const products_schema_1 = require("../schemas/products.schema");
const products_controller_1 = require("./products/products.controller");
const categories_controller_1 = require("./categories/categories.controller");
const brands_controller_1 = require("./brands/brands.controller");
const products_service_1 = require("./products/products.service");
const categories_service_1 = require("./categories/categories.service");
const brands_service_1 = require("./brands/brands.service");
const users_schema_1 = require("../schemas/users.schema");
let AdminModule = class AdminModule {
    configure(consumer) {
        consumer.apply(AmminMiddleware).forRoutes('api/admin');
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
            products_controller_1.ProductsController,
            categories_controller_1.CategoriesController,
            brands_controller_1.BrandsController,
        ],
        providers: [
            admin_service_1.AdminService,
            admins_service_1.AdminsService,
            sales_service_1.SalesService,
            users_service_1.UsersService,
            products_service_1.ProductsService,
            categories_service_1.CategoriesService,
            brands_service_1.BrandsService,
            jwt_1.JwtService,
        ],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: products_schema_1.Product.name, schema: products_schema_1.ProductSchema },
                { name: products_schema_1.Brand.name, schema: products_schema_1.BrandSchema },
                { name: products_schema_1.Category.name, schema: products_schema_1.CategorySchema },
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
            ]),
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