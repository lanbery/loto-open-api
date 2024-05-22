import { Module } from '@nestjs/common';
import { RegionController } from './controller/region.controller';

@Module({
  imports: [],
  controllers: [RegionController],
  providers: [],
})
export class CommModule {}
