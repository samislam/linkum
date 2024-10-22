import { from } from '@/utils/misc-utils'
import { numberToString } from '@/utils/transformers'
import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @Generated()
  @PrimaryColumn({ type: 'int', transformer: from(numberToString) })
  id!: string

  @Column({ length: 255 })
  name!: string

  @Column({ length: 255, unique: true })
  email!: string

  @Column({ length: 255 })
  passwordHash!: string

  @CreateDateColumn({ type: 'timestamp' })
  createTime!: Date
}
