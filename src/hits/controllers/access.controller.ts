import { ApiResponse } from '@nestjs/swagger';

import { AccessService } from './../services/access.service';
import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('access')
export class AccessController {
  constructor(private accessService: AccessService) {}

  @Get('create')
  @ApiResponse({
    status: 200,
    description: 'Ok. the request was successfully completed.',
  })
  async findAccess(@Query('site') site: string): Promise<any> {
    return await this.accessService.find(site);
  }

  @Post('get')
  @ApiResponse({
    status: 200,
    description: 'Ok. the request was successfully completed.',
  })
  async createAccess() {
    return await this.accessService.create();
  }
}
