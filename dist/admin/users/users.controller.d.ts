import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    getAll(page: string, limit: string, search: string): Promise<any>;
}
