import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/admin/users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('search') search: string,
  ): Promise<any> {
    return this.service.getAll(page, limit, search);
  }
}
