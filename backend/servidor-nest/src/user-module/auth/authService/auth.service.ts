import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user-module/user-service/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user-module/user.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    salt: string = "$2b$10$KaKbalAr94e4LIltsN3muea";
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

    validateUser(username: string, pass: string): Promise<User> {
      
      // Buscamos el usuario 
      return this.usersService.findByUsername(username);
    }

    login(user: User) {
      
        const payload = { username: user.username, sub: user.id, role: user.grupo };
        const userAMandar = {
          username: user.username,
          role: user.grupo,
          access_token: this.jwtService.sign(payload),
          expiresIN: "300s"
        }
        console.log(userAMandar)
        return userAMandar;
      }
}
