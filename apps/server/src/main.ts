import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { PizzaEntity } from './app/modules/pizza/entities/pizza.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('SERVER_PORT');

  app.useStaticAssets(join(__dirname, 'assets'));
  app.setBaseViewsDir(join(__dirname, 'assets/views'));
  app.setViewEngine('pug');

  const swaggerConfig = new DocumentBuilder().setTitle('Nest Pizza API').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, { extraModels: [PizzaEntity] });
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });
}

bootstrap();
