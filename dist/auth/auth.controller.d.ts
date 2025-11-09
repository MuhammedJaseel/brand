import { AuthService } from './auth.service';
import { AdminLoginDto, AdminLoginResDto, VerifyAdminDto, VerifyAdminResDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    userVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    userLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
    adminVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    adminLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
}
