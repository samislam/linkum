import { Module } from '@nestjs/common'
import { LinksModule } from '../links/links.module'
import { RedirectionController } from './redirection.controller'

@Module({
  providers: [],
  imports: [LinksModule],
  controllers: [RedirectionController],
})
export class RedirectionModule {}
