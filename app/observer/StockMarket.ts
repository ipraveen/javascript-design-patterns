import type { Observer, Stock } from './types';

const data = [
    {
        name: 'GOOG',
        rates: [101, 102, 103, 104, 105],
    },
];

export class StockMarket {
    private observers: Observer<Stock>[] = [];

    public addObserver(observer: Observer<Stock>) {
        this.observers.push(observer);
    }

    public run() {
        let idx = 0;
        const [{ name, rates }] = data;

        const ref = setInterval(() => {
            const rate = rates[idx];
            console.log('Publishing: ', { name, rate });
            this.observers.forEach((observer) => {
                observer.update({ name, rate });
            });

            idx++;
            if (idx === 5) {
                clearInterval(ref);
            }
        }, 1000);
    }
}
