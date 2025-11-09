import { Brand } from 'src/schemas/products.schema';
import { Model } from 'mongoose';
export declare class BrandsService {
    private brandModel;
    constructor(brandModel: Model<Brand>);
    getAll(page: string, limit: string, search: string): Promise<{
        total: number;
        page: number;
        limit: number;
        pages: number;
        data: Partial<Brand>[];
    }>;
    getOne(id: string): Promise<Partial<Brand>>;
    create(body: Partial<Brand>): Promise<any>;
    update(id: string, body: Partial<Brand>): Promise<any>;
    delete(id: string): Promise<any>;
}
