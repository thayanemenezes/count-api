import { User } from '../infra/interfaces/user.interface';
import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../infra/dtos/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiResponse({
    status: 200,
    description: 'Ok. the request was successfully completed.',
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createOrUpdateUser(createUserDto);
  }

  @Get('get')
  @ApiResponse({
    status: 200,
    description: 'Ok. the request was successfully completed.',
  })
  async findOneUser(@Query('name') name: string): Promise<User> {
    return await this.userService.findOne(name);
  }
}
