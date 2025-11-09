import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Brand {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  code: string;

  @Prop({ type: String })
  desc: string;

  @Prop({ required: true, type: String })
  img: string;

  @Prop({ required: true, type: Boolean, default: false })
  deleted: string;
}
export const BrandSchema = SchemaFactory.createForClass(Brand);

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  code: string;

  @Prop({ type: String })
  desc: string;

  @Prop({ required: true, type: String })
  img: string;

  @Prop({ required: true, type: Boolean, default: false })
  deleted: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: Types.ObjectId, ref: 'Brand', default: '' })
  brand: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category', default: '' })
  category: Types.ObjectId;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  code: string;

  @Prop({ type: String })
  desc: string;

  @Prop({ required: true, type: String })
  img: string;

  @Prop({ required: true, type: Number })
  stock: number;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  sPrice: number;

  @Prop({ required: true, type: Boolean, default: false })
  deleted: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
