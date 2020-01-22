import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../authService/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    //@UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
