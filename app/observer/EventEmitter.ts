import { Observer } from './types';

class EventEmitterCore {
    private subscribers = new Map<string, Observer<unknown>[]>();

    public subscribe<T>(topic: string, observer: Observer<T>) {
        console.log(`Subscribing to Topic: ${topic}`);

        if (this.subscribers.has(topic)) {
            // After First time.
            return this.subscribers.get(topic).push(observer);
        }

        // First Time
        this.subscribers.set(topic, [observer]);
    }

    public publish<T>(topic: string, data: T) {
        console.log(`Publishing to Topic: ${topic} data: ${JSON.stringify(data)}`);

        if (this.subscribers.has(topic)) {
            this.subscribers.get(topic).forEach((observer) => observer.update(data));
        }
    }
}

export const EventEmitter = new EventEmitterCore();
