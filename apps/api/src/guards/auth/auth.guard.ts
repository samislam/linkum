import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'
import { Catch } from 'catch-decorator-ts'
import { ConfigService } from '@nestjs/config'
import { EnvironmentVars } from '@/types/environment-vars'
import { JwtErrorClassifier } from '@/classes/jwt-error-classifier/jwt-error-classifier'
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class AuthGuard extends JwtErrorClassifier implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<EnvironmentVars, true>
  ) {
    super()
  }

  @Catch(Error, (err, ctx: AuthGuard) => ctx.classifier(err))
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) throw new UnauthorizedException("You're not authenticated, please login again!")
    const payload = await this.jwtService.verifyAsync(token, {
      secret: this.configService.get('JWT_SECRET'),
    })
    request['session'] = payload // 💡 assigning the payload to the request object here to allow access it in route handlers
    return true
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers['authorization']?.split(' ') ?? []
    return type === 'Bearer' ? token : null
  }
}
