import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { PublicacionModule } from './publicacion-module/publicacion.module';
import { MenuModule } from './menu-module/menu.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactoModule } from './contacto-module/contacto.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, PublicacionModule, MenuModule,TypeOrmModule.forRoot(), ContactoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
