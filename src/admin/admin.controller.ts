import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller("api/admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("statistics")
  getHello(): any {
    return this.adminService.getStat();
  }
}
