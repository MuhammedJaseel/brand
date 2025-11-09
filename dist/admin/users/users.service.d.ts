import { User } from 'src/schemas/users.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getAll(page: string, limit: string, search: string): Promise<{
        total: number;
        page: number;
        limit: number;
        pages: number;
        data: Partial<User>[];
    }>;
}
