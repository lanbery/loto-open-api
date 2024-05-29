import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictEntity } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class DictManagementService {
  protected logger = new Logger(DictManagementService.name);

  constructor(
    @InjectRepository(SysDictEntity)
    private readonly dictRepository: Repository<SysDictEntity>,
  ) {}

  async getById(id: number) {
    const entity = await this.dictRepository.findOne({
      where: { id },
      relations: {
        items: true,
      },
      order: {
        sortno: 'ASC',
      },
    });

    // await this.dictRepository.createQueryBuilder('dict').leftJoinAndSelect("dict.items","dict")

    return entity;
  }

  async getDictByCode(code: string) {
    if (!code?.length) throw new Error(`Code parameter illegal`);

    return await this.dictRepository.findOne({
      where: { code },
      relations: {
        items: true,
      },
      order: {
        sortno: 'ASC',
      },
    });
  }
}
