import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user-module/user-service/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user-module/user.entity';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findByUsername(username);
      console.log(user);
      
      if (user && user.password === pass) {
        return user;
      }
      return false;
    }

    async login(user: User) {
      console.log(user);
      
        const payload = { username: user.username, sub: user.id, role: user.grupo };
        const userAMandar = {
          username: user.username,
          role: user.grupo,
          access_token: this.jwtService.sign(payload),
          expiresIN: "300s"
        }
        return userAMandar;
      }
}
