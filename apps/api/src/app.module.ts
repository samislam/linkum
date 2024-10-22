import typeorm from './server/typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvironmentVars } from './types/environment-vars'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LinksModule } from './modules/links/links.module';
import environmentSchema from '@/server/environment-schema'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}.local`,
      validationSchema: environmentSchema,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVars>) => config.getOrThrow('_TYPEORM_ENV'),
    }),
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
