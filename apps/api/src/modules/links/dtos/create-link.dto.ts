import { LinkEntity } from '../link.entity'
import { IsString, IsUrl, Length } from 'class-validator'

export class CreateLinkDto implements Partial<LinkEntity> {
  @IsString()
  @Length(1, 128)
  label?: string

  @IsUrl()
  @Length(1, 1500)
  originalUrl!: string
}
