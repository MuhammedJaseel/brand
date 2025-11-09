import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
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
    data: Partial<Product>[];
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
          { desc: { $regex: search, $options: 'i' } },
        ],
      };

    const total = await this.productModel.countDocuments(filter);
    const data = await this.productModel
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();
    const pages = Math.ceil(total / limitNumber);
    return { data, total, page: pageNumber, limit: limitNumber, pages };
  }

  async getOne(id: string): Promise<Partial<Product>> {
    return this.productModel.findById(id).exec();
  }

  async create(body: Partial<Product>): Promise<any> {
    return this.productModel.create(body);
  }

  async update(id: string, body: Partial<Product>): Promise<any> {
    return this.productModel.findByIdAndUpdate(id, body).exec();
  }

  async delete(id: string): Promise<any> {
    return this.productModel.findByIdAndUpdate(id, { deleted: true }).exec();
  }
}
