import { Injectable } from '@nestjs/common';
import { Message } from '@i6820/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
