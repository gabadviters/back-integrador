import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { clearConfigCache } from 'prettier';
import { log } from 'console';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    
    return this.loginService.createJWT(createLoginDto);
  }

 @Get()
 findOne(@Query(("token") )token: string){
  return this.loginService.verifyToken(token)
 }
 
}
