import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UsePipes(StringToLowerCasePipe)
  // @Post()
  // create(@Body('title') title: string) {
  //   return `Movie: ${title}`
  // }

  // @UseGuards(AuthGuard)
  // @Get('@me')
  // getProfile(@UserAgent() userAgent: string) {
  //   return {
  //     id: 1,
  //     username: 'barba',
  //     email: 'barbashev@mail.ru',
  //     userAgent
  //   }
  // }
}
