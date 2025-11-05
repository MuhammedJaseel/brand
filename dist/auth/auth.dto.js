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
exports.AdminLoginResDto = exports.VerifyAdminResDto = exports.AdminLoginDto = exports.VerifyAdminDto = exports.UserOtpReqDto = exports.UserRegReqDto = exports.UserLoginReqDto = void 0;
const class_validator_1 = require("class-validator");
class UserLoginReqDto {
}
exports.UserLoginReqDto = UserLoginReqDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEthereumAddress)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserLoginReqDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserLoginReqDto.prototype, "sign", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserLoginReqDto.prototype, "msg", void 0);
class UserRegReqDto {
}
exports.UserRegReqDto = UserRegReqDto;
__decorate([
    (0, class_validator_1.IsEthereumAddress)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegReqDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegReqDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegReqDto.prototype, "email", void 0);
class UserOtpReqDto {
}
exports.UserOtpReqDto = UserOtpReqDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserOtpReqDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserOtpReqDto.prototype, "otp", void 0);
class VerifyAdminDto {
}
exports.VerifyAdminDto = VerifyAdminDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyAdminDto.prototype, "email", void 0);
class AdminLoginDto {
}
exports.AdminLoginDto = AdminLoginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AdminLoginDto.prototype, "otp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AdminLoginDto.prototype, "token", void 0);
class VerifyAdminResDto {
}
exports.VerifyAdminResDto = VerifyAdminResDto;
class AdminLoginResDto {
}
exports.AdminLoginResDto = AdminLoginResDto;
//# sourceMappingURL=auth.dto.js.map