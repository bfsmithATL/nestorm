import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './services/app-config.service';

@Module({
  imports: [
  ],
  providers: [
    ConfigService,
    AppConfigService
  ],
  exports: [
    ConfigService,
    AppConfigService
  ]
})
export class CommonModule {}
