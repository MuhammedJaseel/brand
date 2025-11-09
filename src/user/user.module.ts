import {
  Injectable,
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Product, ProductSchema } from 'src/schemas/products.schema';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { NextFunction } from 'express';
import { User, UserSchema } from 'src/schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [UserController, ProductsController],
  providers: [UserService, ProductsService, JwtService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('api/user');
  }
}

@Injectable()
class UserMiddleware implements NestMiddleware {
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
