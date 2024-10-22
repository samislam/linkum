import { ValueTransformer } from 'typeorm'

/**
 * Since TypeORM requires the value transformer to include both the `to` & the `from` callbacks,
 * this funciton is used as a shorthand for ignoring the `to` callback.
 */
export const from = <R = any, V = any>(fromFn: (val: V) => R): ValueTransformer => ({
  to: (val: any) => val,
  from: fromFn,
})
