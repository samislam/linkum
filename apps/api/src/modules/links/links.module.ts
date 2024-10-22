import { Module } from '@nestjs/common'
import { LinkEntity } from './link.entity'
import { LinksService } from './links.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LinksController } from './links.controller'

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity])],
  providers: [LinksService],
  controllers: [LinksController],
  exports: [LinksService],
})
export class LinksModule {}
