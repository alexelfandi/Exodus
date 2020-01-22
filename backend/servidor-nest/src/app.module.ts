import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { PublicacionModule } from './publicacion-module/publicacion.module';
import { MenuModule } from './menu-module/menu.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthController } from './user-module/auth/auth-controller/auth.controller';

@Module({
  imports: [UserModule, PublicacionModule, MenuModule,TypeOrmModule.forRoot()],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
