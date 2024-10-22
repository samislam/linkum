import { IsOptional } from 'class-validator'
import { CreateLinkDto } from './create-link.dto'
import { OptionalizeClass } from '@/utils/optionalize-class'

export class UpdateLinkDto extends OptionalizeClass(CreateLinkDto) {
  @IsOptional()
  label?: string

  @IsOptional()
  originalUrl?: string
}
