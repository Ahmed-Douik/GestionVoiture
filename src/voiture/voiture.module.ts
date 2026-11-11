import { Module } from '@nestjs/common';
import { VoitureService } from './voiture.service.js';
import { VoitureController } from './voiture.controller.js';

@Module({
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}
