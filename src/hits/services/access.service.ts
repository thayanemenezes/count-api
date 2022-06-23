import { Injectable, InternalServerErrorException } from '@nestjs/common';

import countapi from 'countapi-js';

@Injectable()
export class AccessService {
  constructor() {}

  async create(): Promise<any> {
    try {
      const setAccess = countapi
        .set('ton.com.br', 'test', 42)
        .then((result) => {
          console.log(result.value);
        });
      return setAccess;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async find(site: string): Promise<any> {
    const getAccess = await countapi.get(site, 'visits').then((result) => {
      console.log(result);
      return result;
    });
    return getAccess;
  }
}
