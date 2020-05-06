import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeMedianModule } from './prime-median/prime-median.module';

@Module({
  imports: [PrimeMedianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
