import { Types } from 'mongoose';
export declare class Order {
    userId: Types.ObjectId;
    amount: number;
    items: {
        productId: Types.ObjectId;
        count: number;
    }[];
    status: string;
    type: string;
    address: string;
    note: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, import("mongoose").Document<unknown, any, Order, any, {}> & Order & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Order>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Purchase {
    date: Date;
    amount: number;
    items: Types.ObjectId[];
    status: string;
    address: string;
    note: string;
}
export declare const UserSchema: import("mongoose").Schema<Purchase, import("mongoose").Model<Purchase, any, any, any, import("mongoose").Document<unknown, any, Purchase, any, {}> & Purchase & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Purchase, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Purchase>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Purchase> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
