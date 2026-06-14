import { Injectable } from '@nestjs/common';
@Injectable()
export class TrafficViolationService {
  private rows = [{ id: 1, vehicleId: 1, driverId: 1, violationType: 'Speeding', violationDate: '2026-06-01', location: '沪渝高速上海段', description: '超速20%', fineAmount: 200, pointsDeducted: 3, status: 'Resolved', handledBy: '张经理', handledDate: '2026-06-05', remark: '已缴纳罚款' }];
  findAll() { return this.rows; }
  findOne(id: number) { return this.rows.find((item: any) => item.id === id); }
  create(payload: any) { const row = { ...payload, id: this.rows.length + 1 }; this.rows.push(row); return row; }
}
