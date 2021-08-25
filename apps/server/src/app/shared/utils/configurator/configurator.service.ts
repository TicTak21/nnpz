import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { join } from 'path';
import { from, Observable } from 'rxjs';
import { PizzaEntity } from '../../../modules/pizza/entities/pizza.entity';
import { ToppingEntity } from '../../../modules/topping/entities/topping.entity';

/**
 * Class that configures app. Works like `Builder`.
 */
export class Configurator {
  private readonly configService: ConfigService;
  public readonly port: number;

  /**
   * Creates an app.
   * @param {NestExpressApplication} app - Nest application.
   */
  constructor(private readonly app: NestExpressApplication) {
    this.configService = app.get(ConfigService);

    // reusable variables(port, host, etc.)

    this.port = this.configService.get('SERVER_PORT');
  }

  /**
   * Since NestJS handles Observables automatically, there is no need to subscribe to returned stream.
   *
   * @example
   * new Configurator(app).run();
   *
   * @returns Observable<void>
   */
  run(): Observable<void> {
    this.addStaticAssets().addViews().addSwagger().addMiddlewares();

    return from(this.app.listen(this.port, () => this.logListen()));
  }

  private addSwagger(): this {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Nest Pizza API')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, swaggerConfig, {
      extraModels: [PizzaEntity, ToppingEntity],
    });
    SwaggerModule.setup('swagger', this.app, document);

    return this;
  }

  private addMiddlewares() {
    this.app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: [`'self'`],
            styleSrc: [`'self'`, `'unsafe-inline'`, 'cdn.jsdelivr.net', 'fonts.googleapis.com'],
            fontSrc: [`'self'`, 'fonts.gstatic.com'],
            imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
            scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
          },
        },
      }),
    );

    return this;
  }

  private addViews(): this {
    this.app.setBaseViewsDir(join(__dirname, 'assets/views'));
    this.app.setViewEngine('pug');

    return this;
  }

  private addStaticAssets(): this {
    this.app.useStaticAssets(join(__dirname, 'assets'));

    return this;
  }

  private logListen() {
    Logger.log('Listening at http://localhost:' + this.port);
  }
}
