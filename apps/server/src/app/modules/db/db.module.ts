import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgConnectionService } from './services/pg-connection/pg-connection.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: PgConnectionService })],
})
export class DbModule {}
