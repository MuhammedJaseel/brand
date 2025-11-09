import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from 'src/schemas/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async getAll(
    page: string,
    limit: string,
    search: string,
  ): Promise<{
    total: number;
    page: number;
    limit: number;
    pages: number;
    data: Partial<Brand>[];
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

    const total = await this.brandModel.countDocuments(filter);
    const data = await this.brandModel
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();
    const pages = Math.ceil(total / limitNumber);
    return { data, total, page: pageNumber, limit: limitNumber, pages };
  }

  async getOne(id: string): Promise<Partial<Brand>> {
    return this.brandModel.findById(id).exec();
  }

  async create(body: Partial<Brand>): Promise<any> {
    return this.brandModel.create(body);
  }

  async update(id: string, body: Partial<Brand>): Promise<any> {
    return this.brandModel.findByIdAndUpdate(id, body).exec();
  }

  async delete(id: string): Promise<any> {
    return this.brandModel.findByIdAndUpdate(id, { deleted: true }).exec();
  }
}
