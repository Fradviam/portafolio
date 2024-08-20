import { Controller, Get, Query } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PortafolioService } from './portafolio.service'; 

@ApiTags('Portafolio')
@Controller('portafolio')
export class PortafolioController {
  constructor(private readonly portfolioService: PortafolioService) {}


  @Get()
  @ApiProperty()
  @ApiResponse({
    status:200, description: 'Welcome to Fintual Portafolio API'
  })
  welcome(){
    return `Welcome to Fradviam's Portafolio designed for Fintual `
  }

  @Get('profit')

  getProfit(@Query('start') start: string, @Query('end') end: string): number {
    return this.portfolioService.getProfit(start, end);
  }

  @Get('annualized-return')
  getAnnualizedReturn(
    @Query('start') start: string,
    @Query('end') end: string,
  ): number {

    return this.portfolioService.getAnnualizedReturn(start, end);
    
  }

  @Get('price')
  getPrice(@Query('stockIndex') stockIndex: number, @Query('date') date: string): number {
    return this.portfolioService.getPrice(stockIndex, date);
  }
}
