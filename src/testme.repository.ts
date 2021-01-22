import {
  NotFoundException, Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestMeEntity } from './testme.entity';

@Injectable()
export class TestMeRepository {
  protected _testmeEntity: TestMeEntity | undefined;

  constructor(
    @InjectRepository(TestMeEntity)
    protected testMeRepository: Repository<TestMeEntity>
  ) {}

  async get(catalog_number: number): Promise<TestMeEntity> {
    if (!this._testmeEntity) {
      this._testmeEntity = await this.testMeRepository.findOne({
        where: { catalogNumber: catalog_number }
      });
    }
    if (!this._testmeEntity) {
      throw new NotFoundException({
        message: `No Arrangment available for catalog: ${catalog_number}`
      });
    }
    return this._testmeEntity;
  }
}
