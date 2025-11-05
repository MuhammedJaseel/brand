export declare class UserLoginReqDto {
    address: string;
    sign: string;
    msg: string;
}
export interface UserLoginResDto {
    registerd: boolean;
    token?: string;
}
export declare class UserRegReqDto {
    address: string;
    name: string;
    email: string;
}
export interface UserRegResDto {
    token: string;
}
export declare class UserOtpReqDto {
    token: string;
    otp: string;
}
export interface UserOtpResDto {
    token: string;
}
export declare class VerifyAdminDto {
    email: string;
}
export declare class AdminLoginDto {
    otp: string;
    token: string;
}
export declare class VerifyAdminResDto {
    token: string;
}
export declare class AdminLoginResDto {
    token: string;
}
