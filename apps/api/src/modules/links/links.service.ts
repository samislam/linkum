import { nanoid } from 'nanoid'
import { Repository } from 'typeorm'
import { LinkEntity } from './link.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateLinkDto } from './dtos/create-link.dto'
import { UpdateLinkDto } from './dtos/update-link.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { DeleteByIdServiceReturnType } from '@/types/crud-interfaces'
import { UpdateByIdServiceReturnType } from '@/types/crud-interfaces'
import { CRUDService, FindServiceReturnType } from '@/types/crud-interfaces'
import { CreateServiceReturnType, FindByIdServiceReturnType } from '@/types/crud-interfaces'

@Injectable()
export class LinksService implements CRUDService<LinkEntity> {
  constructor(@InjectRepository(LinkEntity) private readonly linkRepo: Repository<LinkEntity>) {}
  async find(): Promise<FindServiceReturnType<LinkEntity>> {
    const data = await this.linkRepo.find()
    return data
  }
  async findById(id: string): Promise<FindByIdServiceReturnType<LinkEntity>> {
    const data = await this.linkRepo.findOneBy({ id })
    if (!data) throw new NotFoundException(`Link with id ${id} not found`)
    return data
  }
  async findBySlug(slug: string) {
    const data = await this.linkRepo.findOneBy({ shortSlug: slug })
    if (!data) throw new NotFoundException(`Link not found!`)
    return data
  }
  async create(payload: CreateLinkDto): Promise<CreateServiceReturnType<LinkEntity>> {
    const instance = this.linkRepo.create({ ...payload, shortSlug: nanoid(7) })
    const createdItem = await this.linkRepo.save(instance)
    return {
      createdItem,
      createdItemId: createdItem.id,
    }
  }
  async updateById(
    id: string,
    payload: UpdateLinkDto
  ): Promise<UpdateByIdServiceReturnType<LinkEntity>> {
    const previousEntry = await this.linkRepo.findOneBy({ id })
    if (!previousEntry) throw new NotFoundException(`No link found with id ${id}`)
    const newEntry = await this.linkRepo.save({ ...previousEntry, ...payload })
    return { previousEntry, newEntry, entryId: id }
  }
  async deleteById(id: string): Promise<DeleteByIdServiceReturnType<LinkEntity>> {
    const deletedItem = await this.linkRepo.findOneBy({ id })
    if (!deletedItem) throw new NotFoundException(`No link found with id ${id}`)
    await this.linkRepo.delete({ id })
    return { deletedItem, deletedItemId: id }
  }
}
