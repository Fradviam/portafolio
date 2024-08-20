import { Stock } from "./stock"; 

export class Portafolio {
  constructor(private stocks: Stock[]) {}

  
  Profit(startDate: string, endDate: string): number {
    let startValue = 0;
    let endValue = 0;

    for (const stock of this.stocks) {
      startValue += stock.Price(startDate);
      endValue += stock.Price(endDate);
    }

    return endValue - startValue;
  }

  // Bonus 
  AnnualizedReturn(startDate: string, endDate: string): number {
    const startValue = this.stocks.reduce(
      (sum, stock) => sum + stock.Price(startDate),
      0
    );
    const endValue = this.stocks.reduce(
      (sum, stock) => sum + stock.Price(endDate),
      0
    );

    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24);
    const years = days / 365; 

    const annualizedReturn = Math.pow(endValue / startValue, 1 / years) - 1;

    return annualizedReturn * 100; 
  }


  getStocks():Stock []{
    return this.stocks;
  }
}
