import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Get('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
}
