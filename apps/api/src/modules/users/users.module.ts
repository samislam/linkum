import { Module } from '@nestjs/common'
import { UserEntity } from './user.entity'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
