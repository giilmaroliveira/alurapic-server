import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('users')
export class UserController {
  private users = [];

  @Post()
  public post(@Body() user) {
    this.users.push(user);
    return user;
  }
}
