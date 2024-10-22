import { Response } from 'express'
import { LinksService } from '@/modules/links/links.service'
import { Controller, Get, Param, Res } from '@nestjs/common'

@Controller(['redirect', 'r'])
export class RedirectionController {
  constructor(private readonly linksService: LinksService) {}
  @Get(':slugId')
  async redirectRoute(@Param('slugId') slugId: string, @Res() res: Response) {
    const linkData = await this.linksService.findBySlug(slugId)
    return res.redirect(linkData.originalUrl)
  }
}
