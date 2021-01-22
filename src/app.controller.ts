import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestMeDto } from './testme.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get(':catalog_number')
  async get(@Param('catalog_number') catalogNumber: number): Promise<TestMeDto> {
    const response = await this.appService.get(catalogNumber);
    return response;
  }
}
