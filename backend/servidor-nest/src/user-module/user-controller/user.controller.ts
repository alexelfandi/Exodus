import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/authService/auth.service';

@Controller('user')
export class UserController {

    constructor(private readonly authService: AuthService) {}

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
}
