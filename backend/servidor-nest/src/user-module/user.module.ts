import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { UserService } from './user-service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([User]), AuthModule],
  providers:[UserService],
  controllers:[UserController],
  exports: [UserModule]
})
export class UserModule {}
