import { JwtService } from '@nestjs/jwt';
import { AdminLoginDto, AdminLoginResDto, VerifyAdminDto, VerifyAdminResDto } from './auth.dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    private readonly USER_SECRET;
    private readonly ADMIN_SECRET;
    private readonly ADMIN_EMAIL;
    _generateOTP(): string;
    adminVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    adminLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
}
