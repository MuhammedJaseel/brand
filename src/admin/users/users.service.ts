import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAll(
    page: string,
    limit: string,
    search: string,
  ): Promise<{
    total: number;
    page: number;
    limit: number;
    pages: number;
    data: Partial<User>[];
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

    const total = await this.userModel.countDocuments(filter);
    const data = await this.userModel
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();
    const pages = Math.ceil(total / limitNumber);
    return { data, total, page: pageNumber, limit: limitNumber, pages };
  }
}
