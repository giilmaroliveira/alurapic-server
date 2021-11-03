import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  public post(user) {
    this.users.push(user);
    return user;
  }
}
