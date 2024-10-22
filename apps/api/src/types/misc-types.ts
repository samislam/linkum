import type { EntitySchema, MixedList } from 'typeorm'

export type AnyFunction = (...args: any[]) => any
export type AnyClass = new (...args: any[]) => any
export type EntitiesList = MixedList<string | (new (...args: any[]) => any) | EntitySchema<any>>
