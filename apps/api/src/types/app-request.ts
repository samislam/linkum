import { Role } from './constants'
import { AuthJwtPayload } from './auth-jwt-payload'
import { UserEntity } from '@/modules/users/user.entity'

export interface AppRequest {
  session?: AuthJwtPayload
  user?: UserEntity
  userId: string
  role: Role
}
