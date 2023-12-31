import { HealthCheckService } from '@services/health-check.service';
import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('healt-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}
  @ApiTags('Health Check')
  @Get()
  getHealth() {
    return this.healthCheckService.getHealthCheck();
  }
}
