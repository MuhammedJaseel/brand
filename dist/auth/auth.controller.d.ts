import { AuthService } from './auth.service';
import { AdminLoginDto, AdminLoginResDto, VerifyAdminDto, VerifyAdminResDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    adminVerify(body: VerifyAdminDto): Promise<VerifyAdminResDto>;
    adminLogin(body: AdminLoginDto): Promise<AdminLoginResDto>;
}
