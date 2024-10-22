import { EntitiesList } from '@/types/misc-types'
import { LinkEntity } from '@/modules/links/link.entity'
import { UserEntity } from '@/modules/users/user.entity'

const typeOrmEntities: EntitiesList = [
  LinkEntity, //
  UserEntity,
]
export default typeOrmEntities
