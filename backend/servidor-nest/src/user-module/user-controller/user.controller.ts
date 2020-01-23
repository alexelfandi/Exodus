import { Controller, UseGuards, Post, Request, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/authService/auth.service';
import { UserService } from '../user-service/user.service';
import { User } from '../user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly authService: AuthService, private readonly userService : UserService) {}

    //Servicio de autentificacion

    //@UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Body() body: User) {

        console.log("Hola");
        

      if (await this.authService.validateUser(body.username, body.password)) {
          let user = await this.userService.findByUsername(body.username);
          console.log(user);
          return this.authService.login(user);
      } else {
          return false;
      }
      
      
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    //Servicio de usuario

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }

    @Post()
    register(@Body() user : User):Promise<User> | undefined {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CONTROLLER");
        
        return this.userService.save(user);
    }

    @Get(':id')
    findById(@Param() id : number):Promise<User>{
        return this.userService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param()id:number,@Body()user : User):Promise<User>{
        let userEncontrado=await this.userService.findById(id);
        userEncontrado=user;
        return this.userService.save(userEncontrado);
    }

    @Delete(":id")
    async borrarPorId(@Param()id :number):Promise<User>{
        return this.userService.delete(id);
    }
}
