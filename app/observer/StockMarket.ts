import { EventEmitter } from './EventEmitter';
import type { Stock } from './types';

const data = [
    {
        name: 'GOOG',
        rates: [101, 102, 103, 104, 105],
    },
];

export class StockMarket {
    public run() {
        let idx = 0;
        const [{ name, rates }] = data;

        const ref = setInterval(() => {
            const rate = rates[idx];
            EventEmitter.publish<Stock>('STOCK_MARKET_UPDATE', { name, rate });

            idx++;
            if (idx === 5) {
                clearInterval(ref);
            }
        }, 1000);
    }
}
