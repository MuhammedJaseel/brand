import { JwtService } from '@nestjs/jwt';
import { AdminLoginDto, AdminLoginResDto, VerifyAdminDto, VerifyAdminResDto } from './auth.dto';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    private readonly USER_SECRET;
    private readonly ADMIN_SECRET;
    private readonly ADMIN_EMAIL;
    _generateOTP(): string;
    adminVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    adminLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
    userVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    userLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
}
