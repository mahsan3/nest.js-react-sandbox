import { Module } from '@nestjs/common';
import { PrimeMedianController } from './prime-median.controller';
import { PrimeMedianService } from './prime-median.service';

@Module({
  controllers: [PrimeMedianController],
  providers: [PrimeMedianService]
})
export class PrimeMedianModule {}
