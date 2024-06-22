
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/application/services/auth.service';
import { UserService } from 'src/application/services/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private readonly userService: UserService) {};

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      return { status: 'error', message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.register(username, password);
  }
}
