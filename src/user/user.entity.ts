import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class User {
  id: number;

  @IsNotEmpty({ message: 'username is required.' })
  @IsString({ message: 'username must be string.' })
  username: string;

  @IsEmail({}, { message: 'email is not valid.' })
  email: string;

  @IsNotEmpty({ message: 'password is required.' })
  password: string;

  @IsNotEmpty({ message: 'fullname is required.' })
  fullname: string;
  registerDate: Date;
}
