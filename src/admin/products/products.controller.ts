import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/admin/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('search') search: string,
  ): Promise<any> {
    return this.productsService.getAll(page, limit, search);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<any> {
    return this.productsService.getOne(id);
  }

  @Post()
  create(@Body() body: any): Promise<any> {
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.productsService.delete(id);
  }
}
