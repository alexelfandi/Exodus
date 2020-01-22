import { Module } from '@nestjs/common';
import { AuthService } from './authService/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserService } from '../user-service/user.service';
import { AuthController } from './auth-controller/auth.controller';
// import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt',}),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    })
    ],
  providers: [AuthService, LocalStrategy, UserService, JwtService],
  controllers: [AuthController],
  exports: [AuthModule, AuthService]
})
export class AuthModule {}
