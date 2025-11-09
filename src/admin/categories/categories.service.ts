import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/schemas/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoriesModel: Model<Category>,
  ) {}

  async getAll(
    page: string,
    limit: string,
    search: string,
  ): Promise<{
    total: number;
    page: number;
    limit: number;
    pages: number;
    data: Partial<Category>[];
  }> {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 10;

    let filter: any = { deleted: { $ne: true } };

    if (search && search !== '')
      filter = {
        deleted: { $ne: true },
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { code: { $regex: search, $options: 'i' } },
        ],
      };

    const total = await this.categoriesModel.countDocuments(filter);
    const data = await this.categoriesModel
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();
    const pages = Math.ceil(total / limitNumber);
    return { data, total, page: pageNumber, limit: limitNumber, pages };
  }

  async getOne(id: string): Promise<Partial<Category>> {
    return this.categoriesModel.findById(id).exec();
  }

  async create(body: Partial<Category>): Promise<any> {
    return this.categoriesModel.create(body);
  }

  async update(id: string, body: Partial<Category>): Promise<any> {
    return this.categoriesModel.findByIdAndUpdate(id, body).exec();
  }

  async delete(id: string): Promise<any> {
    return this.categoriesModel.findByIdAndUpdate(id, { deleted: true }).exec();
  }
}
