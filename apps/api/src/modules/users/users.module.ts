import { Module } from '@nestjs/common'
import { UserEntity } from './user.entity'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  controllers: [],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UsersModule {}
