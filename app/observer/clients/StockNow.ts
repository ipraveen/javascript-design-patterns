import { EventEmitter } from '../EventEmitter';
import type { Observer, Stock } from '../types';

export class StockNow implements Observer<Stock> {
    constructor() {
        EventEmitter.subscribe<Stock>('STOCK_MARKET_UPDATE', this);
    }

    update({ name, rate }: Stock) {
        console.log(`Stock Now:: Name ${name} Rate: ${rate}`);
    }
}
