import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      username: 'gilmar',
      email: 'gilmar@mail.com',
      password: '123456',
      fullname: 'Gilmar Oliveira',
      registerDate: new Date(),
    },
  ];

  public post(user): User {
    this.users.push(user);
    return user;
  }

  public getByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
