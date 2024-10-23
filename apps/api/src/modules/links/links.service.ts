import { nanoid } from 'nanoid'
import { Repository } from 'typeorm'
import { Role } from '@/types/constants'
import { LinkEntity } from './link.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateLinkDto } from './dtos/create-link.dto'
import { UpdateLinkDto } from './dtos/update-link.dto'
import { getRedirectionUri } from '@/utils/getRedirectionUri'
import { Injectable, NotFoundException } from '@nestjs/common'
import { DeleteByIdServiceReturnType } from '@/types/crud-interfaces'
import { UpdateByIdServiceReturnType } from '@/types/crud-interfaces'
import { CRUDService, FindServiceReturnType } from '@/types/crud-interfaces'
import { CreateServiceReturnType, FindByIdServiceReturnType } from '@/types/crud-interfaces'

interface Options {
  userId: string
  role: Role
}

export interface PopulatedLink extends LinkEntity {
  slugUri: string
  shortenSlugUri: string
}

@Injectable()
export class LinksService implements CRUDService<PopulatedLink> {
  constructor(@InjectRepository(LinkEntity) private readonly linkRepo: Repository<LinkEntity>) {}

  async find(options: Options): Promise<FindServiceReturnType<PopulatedLink>> {
    const { userId, role } = options
    const data = await this.linkRepo.find({ where: { creatorId: userId, creatorType: role } })
    const populatedData: PopulatedLink[] = data.map((entry) => this.populateLink(entry))
    return populatedData
  }

  async findById(id: string, options: Options): Promise<FindByIdServiceReturnType<PopulatedLink>> {
    const data = await this.linkRepo.findOne({
      where: { id, creatorId: options.userId, creatorType: options.role },
    })
    if (!data) throw new NotFoundException(`Link with id ${id} not found`)
    const populatedLink: PopulatedLink = this.populateLink(data)
    return populatedLink
  }

  async findBySlug(slug: string): Promise<PopulatedLink> {
    const data = await this.linkRepo.findOneBy({ shortSlug: slug })
    if (!data) throw new NotFoundException(`Link not found!`)
    const populatedLink: PopulatedLink = this.populateLink(data)
    return populatedLink
  }

  async create(
    payload: CreateLinkDto,
    options: Options
  ): Promise<CreateServiceReturnType<PopulatedLink>> {
    const instance = this.linkRepo.create({
      ...payload,
      shortSlug: nanoid(7),
      creatorId: options.userId,
      creatorType: options.role,
    })
    const createdItem = await this.linkRepo.save(instance)
    const populatedLink: PopulatedLink = this.populateLink(createdItem)
    return {
      createdItem: populatedLink,
      createdItemId: createdItem.id,
    }
  }

  async updateById(
    id: string,
    payload: UpdateLinkDto,
    options: Options
  ): Promise<UpdateByIdServiceReturnType<PopulatedLink>> {
    const previousEntry = await this.linkRepo.findOneBy({
      id,
      creatorId: options.userId,
      creatorType: options.role,
    })
    if (!previousEntry) throw new NotFoundException(`No link found with id ${id}`)
    const newEntry = await this.linkRepo.save({ ...previousEntry, ...payload })

    return {
      entryId: id,
      newEntry: this.populateLink(newEntry),
      previousEntry: this.populateLink(previousEntry),
    }
  }

  async deleteById(
    id: string,
    options: Options
  ): Promise<DeleteByIdServiceReturnType<PopulatedLink>> {
    const deletedItem = await this.linkRepo.findOne({
      where: {
        id, //
        creatorId: options.userId,
        creatorType: options.role,
      },
    })
    if (!deletedItem) throw new NotFoundException(`No link found with id ${id}`)
    await this.linkRepo.delete({ id })
    const populatedLink: PopulatedLink = this.populateLink(deletedItem)
    return { deletedItem: populatedLink, deletedItemId: id }
  }

  private populateLink(link: LinkEntity) {
    const populatedLink: PopulatedLink = {
      ...link,
      slugUri: getRedirectionUri(link.shortSlug),
      shortenSlugUri: getRedirectionUri(link.shortSlug, true),
    }
    return populatedLink
  }
}
