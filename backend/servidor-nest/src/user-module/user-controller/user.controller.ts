import { Controller, UseGuards, Post, Request, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/authService/auth.service';
import { UserService } from '../user-service/user.service';
import { User } from '../user.entity';
import * as bcrypt from "bcrypt";

@Controller('user')
export class UserController {


    constructor(private readonly authService: AuthService, private readonly userService: UserService) { }

    //Servicio de autentificacion
    salt: string = "$2b$10$KaKbalAr94e4LIltsN3muea";
    //@UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Body() body: User) {


        console.log("Hola");
        let ret;
        let user =  await this.authService.validateUser(body.username, body.password);
        if (user == undefined) {
            // Usuario no encontrado
            console.log("Usuario no encontrado");
            return undefined;
            
          } else {
            // usuario encontrado
              console.log("usuarioEncotnroado");
              console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
              
              let epass = bcrypt.hashSync(body.password, this.salt);
              console.log(epass);
              console.log("password encriptada" + epass)
                console.log("password password" + user.password)
                let token;
                if (user.password === epass) {
                    console.log("validated")
                    token = this.authService.login(user);
                }
                
              return token;
            
  
          }
  





    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    //Servicio de usuario

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    register(@Body() user: User): Promise<User> | undefined {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CONTROLLER");

        return this.userService.save(user);
    }

    @Get(':id')
    findById(@Param() id: number): Promise<User> {
        return this.userService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param() id: number, @Body() user: User): Promise<User> {
        let userEncontrado = await this.userService.findById(id);
        userEncontrado = user;
        return this.userService.save(userEncontrado);
    }

    @Post('/delete')
    borrarPorId(@Param() id: number ): Promise<User> {
        
        console.log(id);
        console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
        
        
        let usuarioABorrar =  this.userService.findById(id);
        return this.userService.delete(10);
    }
}
