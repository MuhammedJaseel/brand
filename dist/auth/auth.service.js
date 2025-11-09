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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("../schemas/users.schema");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.USER_SECRET = process.env.USER_JWT_SECRET || 'default_admin_secret';
        this.ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || 'default_admin_secret';
        this.ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'example@gmail.com';
    }
    _generateOTP() {
        return '123456';
    }
    async adminVerify(body) {
        if (body.email === this.ADMIN_EMAIL) {
            const otp = this._generateOTP();
            const secret = this.ADMIN_SECRET + otp;
            return {
                token: this.jwtService.sign({ email: body.email }, { secret, expiresIn: '5m' }),
            };
        }
        throw new common_1.NotFoundException('Not a valid admin');
    }
    async adminLogin(body) {
        var secret = this.ADMIN_SECRET + body.otp;
        try {
            this.jwtService.verify(body.token, { secret });
            secret = this.ADMIN_SECRET;
            return {
                token: this.jwtService.sign({}, { secret, expiresIn: '1d' }),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid or expired OTP');
        }
    }
    async userVerify(body) {
        const otp = this._generateOTP();
        const secret = this.USER_SECRET + otp;
        return {
            token: this.jwtService.sign({ email: body.email }, { secret, expiresIn: '5m' }),
        };
    }
    async userLogin(body) {
        var secret = this.USER_SECRET + body.otp;
        try {
            const decorder = this.jwtService.verify(body.token, { secret });
            console.log(decorder);
            let user = await this.userModel.findOne({ email: decorder.email });
            if (!user) {
                user = await this.userModel.create({
                    email: decorder.email,
                    name: 'Unnamed',
                });
            }
            secret = this.USER_SECRET;
            return {
                token: this.jwtService.sign({}, { secret, expiresIn: '1d' }),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid or expired OTP');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map