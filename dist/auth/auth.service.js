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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService) {
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
            return { token: this.jwtService.sign({}, { secret, expiresIn: '5m' }) };
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map