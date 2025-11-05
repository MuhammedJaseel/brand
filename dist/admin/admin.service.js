"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
let AdminService = class AdminService {
    getStat() {
        return {
            orders: { total: 0, last24h: 0, prev24h: 0 },
            customers: { total: 0, last24h: 0, prev24h: 0 },
            sales: { total: 0, last24h: 0, prev24h: 0 },
            visitors: { total: 0, last24h: 0, prev24h: 0 },
            enquires: { total: 0, last24h: 0, prev24h: 0 },
            products: { total: 0 },
            admins: { total: 1 },
            visits: { total: 100, last24h: 0, prev24h: 0 },
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)()
], AdminService);
//# sourceMappingURL=admin.service.js.map