import { Module } from '@nestjs/common';
import { MockModule } from './test/mock.module';
import { RouterModule } from '@nestjs/core';
import { LotoModuleRoutes } from './module.routes';

@Module({
  imports: [
    RouterModule.register([
      {
        path: LotoModuleRoutes.mock.modulePath,
        module: MockModule,
      },
    ]),
    MockModule,
  ],
})
export class ApiModule {}
