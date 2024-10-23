import { omit } from 'lodash'
import { nanoid } from 'nanoid'
import { LoginDto } from './dtos/login.dto'
import { AuthService } from './auth.service'
import { SignupDto } from './dtos/signup.dto'
import { AppRequest } from '@/types/app-request'
import { AuthGuard } from '@/guards/auth/auth.guard'
import { Body, Controller, Get } from '@nestjs/common'
import { CurrentUser } from '@/decorators/current-user.decorator'
import { Post, UnauthorizedException, UseGuards } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/generate-guest-id')
  async generateGuestId() {
    const guestId = nanoid()
    const token = await this.authService.generateToken(guestId, 'guest')
    return { token, guestId }
  }

  @Post('/sign-up')
  async signup(@Body() body: SignupDto) {
    const createdUser = await this.authService.signup(body)
    const token = await this.authService.generateToken(createdUser.createdItemId, 'user')
    return { token, ...createdUser }
  }

  @Post('/login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.compareUserPassword(body.password, body.email)
    if (!user) throw new UnauthorizedException('Incorrect email or password')
    const token = await this.authService.generateToken(user.id, 'user')
    return { token, user }
  }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  async whoami(@CurrentUser() user: AppRequest): Promise<Omit<AppRequest, 'session'>> {
    return omit(user, 'session')
  }
}
