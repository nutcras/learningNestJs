import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('province')
  getProvince(@Res() res: Response): void {
    res.status(200).json(this.appService.getProvince());
  }
}
