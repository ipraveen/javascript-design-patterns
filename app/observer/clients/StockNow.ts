import type { Observer, Stock } from '../types';

export class StockNow implements Observer<Stock> {
    update({ name, rate }: Stock) {
        console.log(`Stock Now:: Name ${name} Rate: ${rate}`);
    }
}
