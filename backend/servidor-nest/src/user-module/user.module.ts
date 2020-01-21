import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { UserService } from './user-service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers:[UserService],
  controllers:[UserController]
})
export class UserModule {}
