import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../users/user.entity'
import { AuthController } from './auth.controller'
import { UsersModule } from '@/modules/users/users.module'

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
