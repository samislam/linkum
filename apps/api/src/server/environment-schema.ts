import * as Joi from 'joi'
import { EnvironmentVars } from '@/types/environment-vars'

export default Joi.object<EnvironmentVars>({
  HOST: Joi.string().default('localhost'),
  PORT: Joi.number().port().default(3001),
  JWT_EXPIRY: Joi.string().default('30d'),
  JWT_SECRET: Joi.string().min(12).max(255).required(),
  // # Database authentication
  DATABASE_NAME: Joi.string().default('linkum'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().port().default(3306),
  DATABASE_USERNAME: Joi.string().default('linkum'),
  DATABASE_PASSWORD: Joi.string().default('linkum123'),
})
