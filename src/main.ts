import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gestion de Voiture')
    .setDescription('API pour la gestion des voitures')
    .setVersion('1.0')
    .addTag('Voiture')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const configService = app.get(ConfigService);
  const port = Number(configService.get<string>('PORT') ?? '3000');
  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
}
await bootstrap();
