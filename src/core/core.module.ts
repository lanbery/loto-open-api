import { Global, Module } from '@nestjs/common';

import { RedisService } from './cache/redis/redis.service';
import { RedisFactory } from './cache/redis/redis-client.factory';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { ToolsService } from './export.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, UserProfileEntity } from './entities';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserProfileEntity])],
  providers: [
    AuthService,
    RedisFactory,
    RedisService,
    ToolsService,
    UserService,
  ],
  exports: [RedisService, UserService],
})
export class CoreModule {}
