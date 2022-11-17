import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserRegisterModel } from '../models/user-register.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  signUpUser(@Body() registerModel: UserRegisterModel) {
    return this.userService.registerUser(registerModel).then(() => {
      return 'success';
    });
  }
}
