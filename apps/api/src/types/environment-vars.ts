import { DataSourceOptions } from 'typeorm'

interface UserEnvironmentVars {
  /** Service host @default "localhost" @example "192.168.1.118" */
  HOST: string
  /** Service port @default 3001 @example 5000 */
  PORT: number
  // -----------DATABASE------------
  /**
   * The database host @default "localhost"
   *
   * @example
   *   - "localhost"
   *   - "94.77.145.221
   */
  DATABASE_HOST: string
  /** The database port @default 3306 */
  DATABASE_PORT: number
  /** The database name @default "linkum" */
  DATABASE_NAME: string
  /**
   * Database user to access the database with. The user should have all the permissions on the
   * {DATABASE_NAME} database
   *
   * @default 'linkum'
   */
  DATABASE_USERNAME: string
  /** Database password @default "linkum123" */
  DATABASE_PASSWORD: string
  /**
   * This variable is used to hash the token of the clients when they login to the system, you can
   * set any arbitary value on this variable, but please make it very long, with symbols and number,
   * mix of capital and small letters. You don't have to memorize this secret, since it's arbirty
   * and you'll not be asked to enter it again anywhere else. Also it's always going to stay in this
   * file. You can use any online strong password generator to set a strong password
   *
   * @example
   *   - "_w1N(md3b0y6^,><UBaUJJ8["
   *   - "]0dIha%8}:eYJl8f/$49f0Sxb"&r^NCLMX4icKP{QefeYc`,"
   *   - "SworEgAuTHErC"
   *   - "mySecret123" (this one is weak, don't use it!!)
   */
  JWT_SECRET: string
  /**
   * Expiry of client tokens on the system, a token expiration means that the client will have to
   * login again.
   *
   * Set in seconds, or see: https://github.com/vercel/ms for other valid options
   *
   * @example
   *   - 15d (15 days)
   *   - 24h (24 hours)
   *   - 1y (1 year)
   *
   * @default '30d'
   */
  JWT_EXPIRY: string
}
interface PrivateEnvironmentVars {
  _TYPEORM_ENV: DataSourceOptions
}

export interface EnvironmentVars extends UserEnvironmentVars, PrivateEnvironmentVars {}
