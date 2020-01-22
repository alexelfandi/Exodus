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
    async login(@Body() req) {
      console.log("LLegue");
      return this.authService.login(req.user);
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
    create(@Body() user : User):Promise<User>{
        return this.userService.save(user);
    }

    @Get(':id')
    findById(@Param() id : number):Promise<User>{
        return this.userService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param()id:number,@Body()user : User):Promise<User>{
        let userEncontrado=await this.userService.findById(id);
        
        userEncontrado.username=user.username;
        userEncontrado.password=user.password;
        userEncontrado.email=user.email;
        userEncontrado.grupo=user.grupo;
        userEncontrado.avatar=user.avatar;
        return this.userService.save(userEncontrado);
    }

    @Delete(":id")
    async borrarPorId(@Param()id :number):Promise<User>{
        return this.userService.delete(id);
    }
}
