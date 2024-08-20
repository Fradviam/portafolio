import { Injectable, Logger } from '@nestjs/common';
import { Stock } from 'src/models/stock';
import { Portafolio } from 'src/models/portafolio'; 

@Injectable()
export class PortafolioService {
  private portafolio: Portafolio;
  private readonly logger = new Logger(PortafolioService.name);

  constructor() {
    // Initialize Stock objects with prices
    const stockA = new Stock({
      '2023-01-01': 1009,
      '2024-01-01': 1205,
    });

    const stockB = new Stock({
      '2023-01-01': 2001,
      '2024-01-01': 1802,
    });

    this.portafolio = new Portafolio([stockA, stockB]);


    this.logger.log('Portafolio initialized with stocks:', this.portafolio.getStocks());
  }

  getProfit(startDate: string, endDate: string): number {
    return this.portafolio.Profit(startDate, endDate);
  }

  getAnnualizedReturn(startDate: string, endDate: string): number {
    return this.portafolio.AnnualizedReturn(startDate, endDate);
  }

  getPrice(stockIndex: number, date: string): number {
    const stocks = this.portafolio.getStocks();
    if (stockIndex < 0 || stockIndex >= stocks.length) {
      this.logger.error(`Invalid stock index: ${stockIndex}`);
      throw new Error('Stock index does not appear in our records.');
    }

    const stock = stocks[stockIndex];
    this.logger.log(`Getting price for stock at index ${stockIndex} on ${date}`);
    return stock.Price(date);
  }
}
