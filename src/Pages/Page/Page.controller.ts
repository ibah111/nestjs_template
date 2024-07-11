import { Controller } from '@nestjs/common';
import PageService from './Page.service';
import { PageInput } from './Page.input';

@Controller()
export default class PageCotroller {
  // eslint-disable-next-line prettier/prettier
  constructor(private pageService: PageService) {}

  functionMethod(body: PageInput) {
    return this.pageService.helloWorld(body);
  }
}
