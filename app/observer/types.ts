export interface Observer<T> {
    update(data: T): void;
}

export interface Stock {
    name: string;
    rate: number;
}
