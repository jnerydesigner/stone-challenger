import { CustumerService } from '@application/services/custumer.service';
import { CustumerController } from '@controllers/custumer/custumer.controller';
import { Module } from '@nestjs/common';
import { DataModule } from './data.module';

@Module({
  imports: [DataModule],
  controllers: [CustumerController],
  providers: [CustumerService],
})
export class CustumerModule {}
