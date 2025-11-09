import {
  Injectable,
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtService } from '@nestjs/jwt';
import { NextFunction } from 'express';
import { SalesController } from './sales/sales.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { SalesService } from './sales/sales.service';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Brand,
  BrandSchema,
  Category,
  CategorySchema,
  Product,
  ProductSchema,
} from 'src/schemas/products.schema';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { BrandsController } from './brands/brands.controller';
import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { BrandsService } from './brands/brands.service';
import { User, UserSchema } from 'src/schemas/users.schema';

@Module({
  controllers: [
    AdminController,
    AdminsController,
    SalesController,
    UsersController,
    ProductsController,
    CategoriesController,
    BrandsController,
  ],
  providers: [
    AdminService,
    AdminsService,
    SalesService,
    UsersService,
    ProductsService,
    CategoriesService,
    BrandsService,
    JwtService,
  ],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Brand.name, schema: BrandSchema },
      { name: Category.name, schema: CategorySchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
})
export class AdminModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AmminMiddleware).forRoutes('api/admin');
  }
}

@Injectable()
class AmminMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  private readonly ADMIN_SECRET =
    process.env.ADMIN_JWT_SECRET || 'default_admin_secret';

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const secret = this.ADMIN_SECRET;
      const token = req.headers['authorization'];
      this.jwtService.verify(token, { secret });
      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
