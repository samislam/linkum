import { omit } from 'lodash'
import { UserEntity } from './user.entity'
import { Catch } from 'catch-decorator-ts'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryFailedError, Repository } from 'typeorm'
import { CreateUserDto } from './dtos/create-user.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { DbErrorClassifier } from '@/classes/db-error-classifier'
import { DeleteByIdServiceReturnType } from '@/types/crud-interfaces'
import { CRUDService, FindServiceReturnType } from '@/types/crud-interfaces'
import { CreateServiceReturnType, FindByIdServiceReturnType } from '@/types/crud-interfaces'

@Injectable()
export class UsersService
  extends DbErrorClassifier
  implements Omit<CRUDService<UserEntity>, 'updateById'>
{
  constructor(@InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>) {
    super({ errorMessages: { duplicateErrMsg: 'Email already exists!' } })
  }

  async find(): Promise<FindServiceReturnType<UserEntity>> {
    const data = await this.usersRepo.find()
    return data
  }
  async findById(id: string): Promise<FindByIdServiceReturnType<UserEntity>> {
    const data = await this.usersRepo.findOneBy({ id })
    if (!data) throw new NotFoundException(`User with id ${id} not found`)
    return data
  }
  @Catch(QueryFailedError, (err: QueryFailedError, ctx: UsersService) => ctx.dbErrorClassifier(err))
  async create(payload: CreateUserDto): Promise<CreateServiceReturnType<UserEntity>> {
    const instance = this.usersRepo.create(payload)
    const createdItem = omit(await this.usersRepo.save(instance), 'password')
    return {
      createdItem: createdItem as UserEntity, // quick solution to follow up with the pattern
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
