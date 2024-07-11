import { Module } from '@nestjs/common';
import PageModule from './Pages/Page/Page.module';
import { CommanderModule } from './Commander/Commander.module';

@Module({
  providers: [PageModule, CommanderModule],
})
export class AppModule {}
