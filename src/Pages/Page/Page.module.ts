import { Module } from '@nestjs/common';
import PageService from './Page.service';
import PageCotroller from './Page.controller';

@Module({
  /**
   * для импорта классов/моделей из различных баз данных через Sequelize.forRoot([], {connection.name});
   */
  imports: [],
  /**
   * for controller of endpoints
   */
  controllers: [PageCotroller],
  /**
   * функциональный класс
   */
  providers: [PageService],
})
export default class PageModule {}
