import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.register(username, password);
  }
}