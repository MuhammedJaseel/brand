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
import { BrandsService } from './brands.service';

@Controller('api/admin/brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('search') search: string,
  ): Promise<any> {
    return this.brandsService.getAll(page, limit, search);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<any> {
    return this.brandsService.getOne(id);
  }

  @Post()
  create(@Body() body: any): Promise<any> {
    return this.brandsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.brandsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.brandsService.delete(id);
  }
}
