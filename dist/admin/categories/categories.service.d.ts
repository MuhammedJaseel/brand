import { Category } from 'src/schemas/products.schema';
import { Model } from 'mongoose';
export declare class CategoriesService {
    private categoriesModel;
    constructor(categoriesModel: Model<Category>);
    getAll(page: string, limit: string, search: string): Promise<{
        total: number;
        page: number;
        limit: number;
        pages: number;
        data: Partial<Category>[];
    }>;
    getOne(id: string): Promise<Partial<Category>>;
    create(body: Partial<Category>): Promise<any>;
    update(id: string, body: Partial<Category>): Promise<any>;
    delete(id: string): Promise<any>;
}
