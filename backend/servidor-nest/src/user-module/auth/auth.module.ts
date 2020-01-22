import { Module } from '@nestjs/common';
import { AuthService } from './authService/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserService } from '../user-service/user.service';
// import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt',  }),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    })
    ],
  providers: [AuthService, LocalStrategy, UserService],
  exports: [AuthService]
})
export class AuthModule {}
