import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import yamlConfiguration, { configValidationSchema } from './config';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      isGlobal: true,
      validationSchema: configValidationSchema,
      load: [yamlConfiguration],
      validationOptions: {
        allowUnknow: true,
        abortEarly: true,
      },
    }),
    CoreModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
