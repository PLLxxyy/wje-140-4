import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrafficViolationService } from '../services/trafficViolation.service';
@Controller('traffic-violations')
export class TrafficViolationController {
  constructor(private readonly service: TrafficViolationService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.service.findOne(Number(id)); }
  @Post() create(@Body() payload: any) { return this.service.create(payload); }
}
