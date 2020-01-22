import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user-module/user-service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findByUsername(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
