import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //инжектируем в конструктор сервис appService
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello nest Js'
  }
}


//создать новую сущность через консоль - nest generate controller products
//шорт кат - nest g co  products