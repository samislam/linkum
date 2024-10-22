import * as bcrypt from 'bcrypt'
import { from } from '@/utils/misc-utils'
import { numberToString } from '@/utils/transformers'
import { Entity, Generated, PrimaryColumn } from 'typeorm'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @Generated()
  @PrimaryColumn({ type: 'int', transformer: from(numberToString) })
  id!: string

  @Column({ length: 255 })
  name!: string

  @Column({ length: 255, unique: true })
  email!: string

  @Column({ name: 'passwordHash', length: 255, select: false })
  password!: string

  @CreateDateColumn({ type: 'timestamp' })
  createTime!: Date

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const saltRounds = 10
      this.password = await bcrypt.hash(this.password, saltRounds)
    }
  }
}
