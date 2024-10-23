import { QueryFailedError } from 'typeorm'
import { BadRequestException } from '@nestjs/common'
import { ErrorClassifier } from '@/classes/error-classifier/error-classifier'
import { ErrorClassifierInterface } from '@/types/error-classifier-interface'

type DbErrors = 'ER_DUP_ENTRY'

interface DbErrorClassifierOptions {
  errorMessages: { [k in DbErrors]: string }
}

export class DbErrorClassifier
  extends ErrorClassifier<DbErrors>
  implements ErrorClassifierInterface
{
  constructor(public options: DbErrorClassifierOptions) {
    super({
      customErrorMessages: options.errorMessages,
      defaultErrorMessages: {
        ER_DUP_ENTRY: 'Entry already exists!',
      },
    })
  }

  classifier(err: QueryFailedError) {
    switch ((err as any).code as DbErrors) {
      case 'ER_DUP_ENTRY':
        throw new BadRequestException(this.errorMessages.ER_DUP_ENTRY)
      default:
        throw err
    }
  }
}
