import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LotoModuleRoutes } from '../module.routes';
import { CacheTestService } from './cache.test.service';

@ApiTags(`${LotoModuleRoutes.mock.name} Cache 缓存`)
@Controller()
export class CacheTestController {
  constructor(private readonly service: CacheTestService) {}

  @ApiOperation({ summary: 'redis Get test' })
  @Get('get_by_key')
  getCacheByKey(@Query() queryDto: { appid: string }) {
    const { appid } = queryDto;
    return this.service.getCacheKey(appid);
  }

  @Put('set_cache')
  @HttpCode(HttpStatus.OK)
  setMockCache(@Body() dto: { appid: string }) {
    const { appid } = dto;
    return this.service.setCacheKey(appid);
  }
}
