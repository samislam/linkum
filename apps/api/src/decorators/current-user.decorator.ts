import { AppRequest } from '@/types/app-request'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (data: never, ctx: ExecutionContext): AppRequest => {
    const request = ctx.switchToHttp().getRequest<AppRequest>()
    return {
      role: request.role,
      user: request.user,
      userId: request.userId,
      session: request.session,
    }
  }
)
