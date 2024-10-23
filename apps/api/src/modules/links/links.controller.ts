import { LinkEntity } from './link.entity'
import { LinksService } from './links.service'
import { AppRequest } from '@/types/app-request'
import { AuthGuard } from '@/guards/auth/auth.guard'
import { CreateLinkDto } from './dtos/create-link.dto'
import { UpdateLinkDto } from './dtos/update-link.dto'
import { CRUDController } from '@/types/crud-interfaces'
import { Body, Controller, UseGuards } from '@nestjs/common'
import { Get, Post, Param, Patch, Delete } from '@nestjs/common'
import { CurrentUser } from '@/decorators/current-user.decorator'
import { DeleteByIdResponse, FindResponse } from '@/types/response-templates'
import { UpdateByIdResponse, FindByIdResponse, CreateResponse } from '@/types/response-templates'

@Controller('links')
@UseGuards(AuthGuard)
export class LinksController implements CRUDController<LinkEntity> {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async findRoute(@CurrentUser() user: AppRequest): Promise<FindResponse<LinkEntity>> {
    const data = await this.linksService.find({ userId: user.userId, role: user.role })
    return { data }
  }

  @Get(':linkId')
  async findByIdRoute(
    @Param('linkId') id: string,
    @CurrentUser() user: AppRequest
  ): Promise<FindByIdResponse<LinkEntity>> {
    const data = await this.linksService.findById(id, {
      userId: user.userId,
      role: user.role,
    })
    return { data: data! }
  }

  @Post()
  async createRoute(
    @Body() body: CreateLinkDto,
    @CurrentUser() user: AppRequest
  ): Promise<CreateResponse<LinkEntity>> {
    const createdItem = await this.linksService.create(body, {
      userId: user.userId,
      role: user.role,
    })
    return createdItem
  }

  @Patch(':linkId')
  async updateByIdRoute(
    @Param('linkId') id: string,
    @Body() body: UpdateLinkDto,
    @CurrentUser() user: AppRequest
  ): Promise<UpdateByIdResponse<LinkEntity>> {
    const updatedItem = await this.linksService.updateById(id, body, {
      userId: user.userId,
      role: user.role,
    })
    return updatedItem
  }

  @Delete(':linkId')
  async deleteByIdRoute(
    @Param('linkId') id: string,
    @CurrentUser() user: AppRequest
  ): Promise<DeleteByIdResponse<LinkEntity>> {
    const deletedItem = await this.linksService.deleteById(id, {
      userId: user.userId,
      role: user.role,
    })
    return deletedItem
  }
}
