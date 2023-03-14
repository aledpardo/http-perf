import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fetch')
  getFetch(): Promise<any> {
    return this.appService.getFetch();
  }

  @Get('/keep-alive')
  getKeepAlive(): Promise<any> {
    return this.appService.getKeepAlive();
  }
}
