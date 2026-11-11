import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { VoitureModule } from './voiture/voiture.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    VoitureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
