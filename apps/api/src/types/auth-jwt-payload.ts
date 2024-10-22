import { Role } from './constants'

export interface AuthJwtPayload {
  userId: string
  role: Role
}
