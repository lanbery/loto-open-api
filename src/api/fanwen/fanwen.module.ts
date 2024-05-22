import { Module } from '@nestjs/common';
import { FanwenAPIService } from './service/fanwen.api.service';
import { CityTreeController } from './controller/city.tree.controller';
import { FanwenAPIClientFactory } from './client/client.factory';

@Module({
  imports: [],
  controllers: [CityTreeController],
  providers: [FanwenAPIService, FanwenAPIClientFactory],
  exports: [FanwenAPIService],
})
export class FanwenModule {}
