import { HealthCheckService } from '@services/health-check.service';
import { HealthCheckController } from '@controllers/health-check/health-check.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealtCheckModule {}
