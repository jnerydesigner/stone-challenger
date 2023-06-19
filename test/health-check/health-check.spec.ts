import { HealthCheckService } from '@application/services/health-check.service';
import { HealthCheckController } from '@controllers/health-check/health-check.controller';
import { Test } from '@nestjs/testing';

describe('AppController (unit)', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();

    controller = moduleRef.get<HealthCheckController>(HealthCheckController);
  });
  describe('check', () => {
    it('should return "OK"', () => {
      const { message } = controller.getHealth();
      expect(message).toBe('ok');
    });
  });
});
