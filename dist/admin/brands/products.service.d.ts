import { Product } from 'src/schemas/products.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    getAll(page: string, limit: string, search: string): Promise<{
        total: number;
        page: number;
        limit: number;
        pages: number;
        data: Partial<Product>[];
    }>;
    getOne(id: string): Promise<Partial<Product>>;
    create(body: Partial<Product>): Promise<any>;
    update(id: string, body: Partial<Product>): Promise<any>;
    delete(id: string): Promise<any>;
}
