import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { UserAlreadyExistsError } from 'src/repository/users/usersRepository.errors';
import { InvalidCredentialsError } from './auth.errors';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(200)
  async signIn(@Body() signInDto: SignInDto) {
    try {
      await this.authService.signIn(signInDto);
    } catch (e) {
      if (e instanceof InvalidCredentialsError) {
        throw new UnauthorizedException(e.message);
      }
      throw e;
    }
  }

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.authService.signUp(signUpDto);
    } catch (e) {
      if (e instanceof UserAlreadyExistsError) {
        throw new ConflictException(e.message);
      }
      throw e;
    }
  }
}
