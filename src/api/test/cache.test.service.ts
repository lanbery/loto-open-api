import { Injectable } from '@nestjs/common';
import { RedisKeyHelper, RedisService } from 'src/core/cache';

@Injectable()
export class CacheTestService {
  constructor(private readonly redis: RedisService) {}

  async getCacheKey(subkey: string) {
    const key = RedisKeyHelper.buildBDCwxaiAccessTokenKey(subkey);
    return this.redis.getData(key);
  }

  async setCacheKey(subkey: string) {
    const key = RedisKeyHelper.buildBDCwxaiAccessTokenKey(subkey);
    const cache = {
      name: 'wx-main',
      appId: '38991877',
      apiKey: 'FkUy3bQYcqGhyIBVCGqzugks',
      apiSecret: 'iBOrlZ6A5Mpy2V2lYqo1CD65Ux5KPCWb',
    };

    const ret = await this.redis.setData(key, cache, 900);
    return ret;
  }
}
