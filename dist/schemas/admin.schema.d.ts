export declare class Admin {
    name: string;
    email: string;
    phone: string;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, import("mongoose").Document<unknown, any, Admin, any, {}> & Admin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Admin>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Admin> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
