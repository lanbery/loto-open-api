import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import yamlConfiguration, {
  TypeormConfigService,
  configValidationSchema,
} from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { BceModule } from './sdk/bce/bce.module';
import { WxaiModule } from './sdk/wxai/wxai.module';

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
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
    CoreModule,
    ApiModule,
    BceModule,
    WxaiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
