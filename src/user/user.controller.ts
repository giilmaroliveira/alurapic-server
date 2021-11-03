import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':username')
  public getByUsername(@Param('username') username: string) {
    const user = this.userService.getByUsername(username);
    return user;
  }

  @Post()
  public post(@Body() user: User) {
    const userCreated = this.userService.post(user);
    return userCreated;
  }
}
