import { CreateUserDto } from '../infra/dtos/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { User } from '../infra/interfaces/user.interface';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createOrUpdateUser(createUserDto: CreateUserDto): Promise<void> {
    const { name } = createUserDto;
    const findedUser = await this.userModel.findOne({ name }).exec();
    if (findedUser) {
      await this.update(createUserDto);
    } else {
      await this.create(createUserDto);
    }
  }

  private async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOne(name: string): Promise<User> {
    const createdUser = await this.userModel.findOne({ name }).exec();
    if (!createdUser) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }
    return createdUser;
  }

  private async update(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ name: createUserDto.name }, { $set: createUserDto })
      .exec();
  }
}
