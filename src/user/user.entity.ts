import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUsernameAlreadyExist } from './is-username-already-exists';

export class User {
  id: number;

  @IsNotEmpty({ message: 'username is required.' })
  @IsString({ message: 'username must be string.' })
  @IsUsernameAlreadyExist({ message: 'username already exist' })
  username: string;

  @IsEmail({}, { message: 'email is not valid.' })
  email: string;

  // @Expose({ name: 'senha' }) change property name for request/response
  @Exclude({ toPlainOnly: true })
  @IsNotEmpty({ message: 'password is required.' })
  password: string;

  @IsNotEmpty({ message: 'fullname is required.' })
  fullname: string;
  registerDate: Date;
}
