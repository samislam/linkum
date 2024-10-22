import { LinkEntity } from './link.entity'
import { LinksService } from './links.service'
import { Body, Controller } from '@nestjs/common'
import { CreateLinkDto } from './dtos/create-link.dto'
import { UpdateLinkDto } from './dtos/update-link.dto'
import { CRUDController } from '@/types/crud-interfaces'
import { Get, Post, Param, Patch, Delete } from '@nestjs/common'
import { DeleteByIdResponse, FindResponse } from '@/types/response-templates'
import { UpdateByIdResponse, FindByIdResponse, CreateResponse } from '@/types/response-templates'

@Controller('links')
export class LinksController implements CRUDController<LinkEntity> {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async findRoute(): Promise<FindResponse<LinkEntity>> {
    const data = await this.linksService.find()
    return { data }
  }

  @Get(':linkId')
  async findByIdRoute(@Param('linkId') id: string): Promise<FindByIdResponse<LinkEntity>> {
    const data = await this.linksService.findById(id)
    return { data: data! }
  }

  @Post()
  async createRoute(@Body() body: CreateLinkDto): Promise<CreateResponse<LinkEntity>> {
    const createdItem = await this.linksService.create(body)
    return createdItem
  }

  @Patch(':linkId')
  async updateByIdRoute(
    @Param('linkId') id: string,
    body: UpdateLinkDto
  ): Promise<UpdateByIdResponse<LinkEntity>> {
    const updatedItem = await this.linksService.updateById(id, body)
    return updatedItem
  }

  @Delete(':linkId')
  async deleteByIdRoute(@Param('linkId') id: string): Promise<DeleteByIdResponse<LinkEntity>> {
    const deletedItem = await this.linksService.deleteById(id)
    return deletedItem
  }
}
