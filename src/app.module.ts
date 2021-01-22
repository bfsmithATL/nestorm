import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CommonModule } from './_common/common.module';
import { TestMeEntity } from './testme.entity';
import { AppConfigService } from './_common/services/app-config.service';
import { AppService } from './app.service';
import { TestMeRepo } from './testme.repo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      useFactory: (appConfigService: AppConfigService) => ({
        ...appConfigService.database,
        entities: [TestMeEntity]
      }),
      inject: [AppConfigService]
    }),
    CommonModule
  ],
  providers: [AppService, TestMeRepo],
  controllers: [AppController]
})
export class AppModule { }
