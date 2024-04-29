import { Global, Module } from '@nestjs/common';
import { RedisService } from './cache/redis/redis.service';
import { RedisFactory } from './cache/redis/redis-client.factory';

@Global()
@Module({
  providers: [RedisFactory, RedisService],
  exports: [RedisService],
})
export class CoreModule {}
