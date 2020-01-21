import { Module, Controller } from '@nestjs/common';
import { MenuService } from './menu-service/menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuController } from './menu-controller/menu.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Menu])],
  providers: [MenuService],
  controllers:[MenuController]
})
export class MenuModule {}
