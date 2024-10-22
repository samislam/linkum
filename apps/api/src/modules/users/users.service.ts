import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'
import { DeleteByIdServiceReturnType } from '@/types/crud-interfaces'
import { CRUDService, FindServiceReturnType } from '@/types/crud-interfaces'
import { CreateServiceReturnType, FindByIdServiceReturnType } from '@/types/crud-interfaces'

@Injectable()
export class UsersService implements Omit<CRUDService<UserEntity>, 'updateById'> {
  constructor(@InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>) {}
  async find(): Promise<FindServiceReturnType<UserEntity>> {
    const data = await this.usersRepo.find()
    return data
  }
  async findById(id: string): Promise<FindByIdServiceReturnType<UserEntity>> {
    const data = await this.usersRepo.findOneBy({ id })
    if (!data) throw new NotFoundException(`User with id ${id} not found`)
    return data
  }
  async create(payload: object): Promise<CreateServiceReturnType<UserEntity>> {
    const instance = this.usersRepo.create({ ...payload })
    const createdItem = await this.usersRepo.save(instance)
    return {
      createdItem,
      createdItemId: createdItem.id,
    }
  }
  async deleteById(id: string): Promise<DeleteByIdServiceReturnType<UserEntity>> {
    const deletedItem = await this.usersRepo.findOneBy({ id })
    if (!deletedItem) throw new NotFoundException(`User with id ${id} not found`)
    await this.usersRepo.delete({ id })
    return { deletedItem, deletedItemId: id }
  }
}
