import { EventEmitter } from '../EventEmitter';
import type { Observer, Stock } from '../types';

const getRandomNo = (limit) => Math.floor(Math.random() * limit);

export class StockForecast implements Observer<Stock> {
    constructor() {
        EventEmitter.subscribe<Stock>('STOCK_MARKET_UPDATE', this);
    }

    update({ name, rate }: Stock) {
        console.log(`Stock Forecast:: Name ${name} Rate Forecast: ${rate + 10 - getRandomNo(10)}`);
    }
}
