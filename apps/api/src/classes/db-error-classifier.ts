import mergeObj from 'mergerobjects'
import { QueryFailedError } from 'typeorm'
import { BadRequestException } from '@nestjs/common'

export interface DbErrorClassifierProps {
  errorMessages?: Partial<DbErrorClassifierErrorMessages>
}

export interface DbErrorClassifierErrorMessages {
  duplicateErrMsg: string
}

export class DbErrorClassifier {
  constructor(public props?: DbErrorClassifierProps) {
    this.errorMessages = mergeObj(this.errorMessages, props?.errorMessages ?? {})
  }

  dbErrorClassifier(err: QueryFailedError) {
    switch ((err as any).code) {
      case 'ER_DUP_ENTRY':
        throw new BadRequestException(this.errorMessages.duplicateErrMsg)
      default:
        throw err
    }
  }

  private errorMessages: DbErrorClassifierErrorMessages = {
    duplicateErrMsg: 'Entry already exists!',
  }
}
