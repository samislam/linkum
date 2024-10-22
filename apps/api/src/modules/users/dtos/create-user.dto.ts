import { UserEntity } from '../user.entity'
import { IsEmail, IsString, MaxLength } from 'class-validator'

export class CreateUserDto implements Partial<UserEntity> {
  @IsString()
  @MaxLength(255)
  name!: string

  @IsEmail()
  @MaxLength(255)
  email!: string

  @IsString()
  @MaxLength(64)
  password!: string
}
