export class Stock {
    constructor(private prices: { [date: string]: number }) {}
  

    Price(date: string): number {
      return this.prices[date];
    }
  }
  