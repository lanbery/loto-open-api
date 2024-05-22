import { Injectable, Logger } from '@nestjs/common';
import { FanwenAPIClientFactory } from '../client/client.factory';

import { IFanwenToken, IfwCityTree } from '../interface';
import { RedisService } from 'src/core/cache';
import { BizCodeEnum, BizException } from 'src/exception';
import { RegionConvertService } from 'src/core';

@Injectable()
export class FanwenAPIService {
  protected logger = new Logger(FanwenAPIService.name);

  constructor(
    private readonly cli: FanwenAPIClientFactory,
    private readonly redis: RedisService,
    private readonly regionConvertService: RegionConvertService,
  ) {}

  async getCitytree() {
    const sync = await this.getCtiyTreeSyncStatus();
    if (sync)
      throw BizException.createError(
        BizCodeEnum.API_LIMIT,
        `当前已存在同步任务请勿重复操作`,
      );
    const url = await this.cli.getCityTreeUrl();
    const resp = await this.cli.get<Array<IfwCityTree>>(url);
    if (resp?.length) {
      this.setCityTreeSyncData(resp);
    }

    return resp;
  }

  async syncRegionFromCache() {
    const caches = await this.getCityTreeCaches();
    return await this.regionConvertService.syncCityTreeUpdate(caches);
  }

  private async getCityTreeCaches(): Promise<Array<IfwCityTree>> {
    const key = this.cli.getCityTreeSyncKey();
    const data = await this.redis.getData<Array<IfwCityTree>>(key);

    return data ?? [];
  }

  connectToken(): Promise<IFanwenToken | never> {
    return this.cli.connectToken();
  }

  async getCtiyTreeSyncStatus(): Promise<boolean> {
    const key = this.cli.getCityTreeSyncKey();
    return this.redis.hasKey(key);
  }

  setCityTreeSyncData(data: Array<IfwCityTree>) {
    if (!data) return;
    const key = this.cli.getCityTreeSyncKey();
    this.redis.setData(key, data, 3600 * 24);
  }
}
