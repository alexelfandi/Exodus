import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { PublicacionModule } from './publicacion-module/publicacion.module';
import { MenuModule } from './menu-module/menu.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactoModule } from './contacto-module/contacto.module';
import { ConfigModule } from '@nestjs/config';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [UserModule,
    PublicacionModule, 
    MenuModule,
    TypeOrmModule.forRoot(), 
    ContactoModule,
    MailerModule.forRoot({
      transport: 'smtps://alexelfandi60@gmail.com:pass@smtp.domain.com',
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
