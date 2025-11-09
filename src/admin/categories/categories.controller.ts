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
import { CategoriesService } from './categories.service';

@Controller('api/admin/categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('search') search: string,
  ): Promise<any> {
    return this.service.getAll(page, limit, search);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<any> {
    return this.service.getOne(id);
  }

  @Post()
  create(@Body() body: any): Promise<any> {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
