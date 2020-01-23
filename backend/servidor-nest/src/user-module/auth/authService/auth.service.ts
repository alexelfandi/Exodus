import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user-module/user-service/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user-module/user.entity';
import * as bcrypt from "bcrypt";
import a = require('../../../../auth.json');

@Injectable()
export class AuthService {
    salt: string = "$2b$10$KaKbalAr94e4LIltsN3muea";
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {


      // Buscamos el usuario 
      await this.usersService.findByUsername(username).then((user)=>{
        
        if (user == undefined) {
          // Usuario no encontrado
          console.log("Usuario no encontrado");
          
        } else {
          // usuario encontrado


            console.log(this.salt)
            bcrypt.hash(pass, this.salt, (err, passwordEcrypted)=>{
              console.log(passwordEcrypted)
              console.log(user.password)
              if (user.password === passwordEcrypted) {
                console.log("Hombre Pepe! Cuanto tiempo!")
              }
              
            })
          

        }
        
      });
      
      
      

      
    }

    async login(user: User) {
      
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
