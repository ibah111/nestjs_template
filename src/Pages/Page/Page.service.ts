import { Injectable } from '@nestjs/common';
import { PageInput } from './Page.input';

@Injectable()
export default class PageService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  helloWorld(body: PageInput) {
    console.log(`Hello world ${body.text}`);
  }
}
