import * as chalk from 'chalk'
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import { formatUrl } from './utils/formatUrl'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'
import { EnvironmentVars } from './types/environment-vars'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  const configService = app.get(ConfigService<EnvironmentVars, true>)
  const HOST = configService.get('HOST', { infer: true })
  const PORT = configService.get('PORT', { infer: true })
  await app.listen(PORT, HOST, () => {
    const url = formatUrl(HOST, PORT)
    console.log(`\nService listening on ${chalk.bold.underline(url)}\n`)
  })
}
bootstrap()
