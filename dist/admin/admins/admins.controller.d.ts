import { AdminsService } from './admins.service';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    getHello(): string;
}
