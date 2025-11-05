import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getStat(): any {
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
}
