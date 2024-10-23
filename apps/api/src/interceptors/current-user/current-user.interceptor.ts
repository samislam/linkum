import { AppRequest } from '@/types/app-request'
import { UsersService } from '@/modules/users/users.service'
import { NestInterceptor, ExecutionContext } from '@nestjs/common'
import { CallHandler, Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<AppRequest>()
    const { userId, role } = request.session || {}

    if (role === 'user' && userId) {
      const user = await this.usersService.findById(userId)
      if (!user) throw new UnauthorizedException('This user no longer exists!')
      request['user'] = user // 💡 assigning the payload to the request object here to allow access it in route handlers
    } else if (role === 'guest' && userId) {
      request.role = role
      request.userId = userId
    }

    return next.handle()
  }
}
