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

  @IsNotEmpty({ message: 'password is required.' })
  password: string;

  @IsNotEmpty({ message: 'fullname is required.' })
  fullname: string;
  registerDate: Date;
}
function IsUsernameAlreadyExistConstraint(arg0: { message: string }) {
  throw new Error('Function not implemented.');
}
