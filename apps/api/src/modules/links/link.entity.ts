import { Role } from '@/types/constants'
import { from } from '@/utils/misc-utils'
import { numberToString } from '@/utils/transformers'
import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity('links')
export class LinkEntity {
  @Generated()
  @PrimaryColumn({ type: 'int', transformer: from(numberToString) })
  id!: string

  @Column({ length: 128 })
  label!: string

  @Column({ length: 1500 })
  originalUrl!: string

  @Column({ length: 32, unique: true })
  shortSlug!: string

  @Column()
  creatorId!: string // Can be a user ID or a guest identifier

  @Column({ type: 'enum', enum: ['user', 'guest'] })
  creatorType!: Role

  @CreateDateColumn({ type: 'timestamp' })
  createTime!: Date
}
