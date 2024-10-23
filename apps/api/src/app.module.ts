import typeorm from './server/typeorm'
import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './modules/auth/auth.module'
import { EnvironmentVars } from './types/environment-vars'
import { LinksModule } from './modules/links/links.module'
import { UsersModule } from './modules/users/users.module'
import environmentSchema from '@/server/environment-schema'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { RedirectionModule } from './modules/redirection/redirection.module'
import { JwtStrategyModule } from './modules/jwt-strategy/jwt-strategy.module'
import { CurrentUserInterceptor } from './interceptors/current-user/current-user.interceptor'
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
    AuthModule,
    LinksModule,
    UsersModule,
    RedirectionModule,
    JwtStrategyModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
  exports: [],
})
export class AppModule {}
