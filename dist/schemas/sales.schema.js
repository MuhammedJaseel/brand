"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.Purchase = exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [
            {
                productId: { type: mongoose_2.Types.ObjectId, ref: 'Product', required: true },
                count: { type: Number, required: true },
            },
        ],
    }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: 'INIT',
        enum: ['INIT', 'ORDERED', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: 'DELIVERY',
        enum: ['PICKUP', 'DELIVERY'],
    }),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Order.prototype, "note", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
let Purchase = class Purchase {
};
exports.Purchase = Purchase;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Purchase.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Purchase.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Purchase.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: 'INIT',
        enum: ['INIT', 'ORDERED', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
    }),
    __metadata("design:type", String)
], Purchase.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Purchase.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Purchase.prototype, "note", void 0);
exports.Purchase = Purchase = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Purchase);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(Purchase);
//# sourceMappingURL=sales.schema.js.map