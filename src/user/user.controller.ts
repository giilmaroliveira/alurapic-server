import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private userService = new UserService();

  @Post()
  public post(@Body() user) {
    const userCreated = this.userService.post(user);
    return userCreated;
  }
}
