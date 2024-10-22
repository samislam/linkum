import { nanoid } from 'nanoid'
import { LoginDto } from './dtos/login.dto'
import { AuthService } from './auth.service'
import { SignupDto } from './dtos/signup.dto'
import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/guest-token')
  async guestToken() {
    const guestId = nanoid()
    const token = await this.authService.generateToken(guestId, 'guest')
    return { token, guestId }
  }

  @Post('/signup')
  async signup(@Body() body: SignupDto) {
    const createdUser = await this.authService.signup(body)
    const token = await this.authService.generateToken(createdUser.createdItemId, 'user')
    return {
      token,
      ...createdUser,
    }
  }

  @Post('/login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.compareUserPassword(body.password, body.email)
    if (!user) throw new UnauthorizedException('Incorrect email or password')
    const token = await this.authService.generateToken(user.id, 'user')
    return { token, user }
  }

  @Get('/whoami')
  async whoami() {
    // Implement logic to fetch the authenticated user's details
  }
}
