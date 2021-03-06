import { Injectable } from '@nestjs/common';
import { TestMeRepository } from './testme.repository';
import { TestMeDto } from './testme.dto';

@Injectable()
export class AppService {
  constructor(
    private testMeRepository: TestMeRepository
  ) {}

  async get(catalogNumber: number): Promise<TestMeDto> {
    const arrangement = await this.testMeRepository.get(catalogNumber);
    const dto = new TestMeDto();
    dto.catalogNumber = arrangement.catalogNumber;
    dto.image = arrangement.image;
    dto.minimumPrice = arrangement.minimumPrice;
    return dto;
  }
}
