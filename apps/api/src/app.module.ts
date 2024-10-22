import typeorm from './server/typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvironmentVars } from './types/environment-vars'
import { LinksModule } from './modules/links/links.module'
import { UsersModule } from './modules/users/users.module'
import environmentSchema from '@/server/environment-schema'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { RedirectionModule } from './modules/redirection/redirection.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
      validationSchema: environmentSchema,
      envFilePath: `.env.${process.env.NODE_ENV}.local`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVars>) => config.getOrThrow('_TYPEORM_ENV'),
    }),
    LinksModule,
    RedirectionModule,
    UsersModule,
  ],
})
export class AppModule {}
