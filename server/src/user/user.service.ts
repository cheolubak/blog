import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserRegisterModel } from '../models/user-register.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async registerUser(registerModel: UserRegisterModel) {
    await this.usersRepository.save(
      new User(
        registerModel.userId,
        registerModel.email,
        registerModel.nickname,
        registerModel.social,
      ),
    );
  }
}
