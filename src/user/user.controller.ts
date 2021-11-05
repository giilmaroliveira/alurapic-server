import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
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
  public post(@Body() user: User): NestResponse {
    const userCreated = this.userService.post(user);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        Location: `/users/${userCreated.username}`,
      })
      .withBody(userCreated)
      .build();
  }
}
