import { UnauthorizedException } from '@nestjs/common'
import { ErrorClassifier } from '@/classes/error-classifier/error-classifier'
import { ErrorClassifierInterface } from '@/types/error-classifier-interface'

type JwtErrors = 'JsonWebTokenError' | 'TokenExpiredError'

export class JwtErrorClassifier
  extends ErrorClassifier<JwtErrors>
  implements ErrorClassifierInterface
{
  constructor() {
    super({
      defaultErrorMessages: {
        JsonWebTokenError: 'Invalid token. Please log in again!',
        TokenExpiredError: 'Your token has expired! Please log in again.',
      },
    })
  }

  classifier(err: any) {
    switch (err.name as JwtErrors) {
      case 'JsonWebTokenError':
        throw new UnauthorizedException(this.errorMessages.JsonWebTokenError)
      case 'TokenExpiredError':
        throw new UnauthorizedException(this.errorMessages.TokenExpiredError)
      default:
        throw err
    }
  }
}
