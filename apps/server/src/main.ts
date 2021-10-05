import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { from } from 'rxjs';
import { AppModule } from './app/app.module';
import { Configurator } from './app/shared/utils';

from(NestFactory.create<NestExpressApplication>(AppModule)).subscribe(app =>
  new Configurator(app).run(),
);
