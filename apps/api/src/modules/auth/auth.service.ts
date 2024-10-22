import { omit } from 'lodash'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { Role } from '@/types/constants'
import { Injectable } from '@nestjs/common'
import { SignupDto } from './dtos/signup.dto'
import { getColumns } from '@/utils/misc-utils'
import { UserEntity } from '../users/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { AuthJwtPayload } from '@/types/auth-jwt-payload'
import { UsersService } from '@/modules/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  async signup(payload: SignupDto) {
    const createdUser = await this.usersService.create(payload)
    return createdUser
  }

  async compareUserPassword(
    candidatePassword: string,
    userEmail: string
  ): Promise<null | UserEntity> {
    const candidateUser = await this.usersRepo.findOne({
      where: { email: userEmail },
      select: getColumns(this.usersRepo).names, // to select all the columns
    })
    if (!candidateUser) return null
    const isCorrect = await bcrypt.compare(candidatePassword, candidateUser.password)
    if (!isCorrect) return null
    else return omit(candidateUser, 'password') as UserEntity // quick fix to follow up with the pattern
  }

  async generateToken(userId: string, role: Role) {
    return await this.jwtService.signAsync({ userId, role } satisfies AuthJwtPayload)
  }
}
