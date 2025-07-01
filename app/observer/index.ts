import { StockForecast } from './clients/StockForecast';
import { StockNow } from './clients/StockNow';
import { StockMarket } from './StockMarket';

const market = new StockMarket();

// Clients
const stockNow = new StockNow();
const forecast = new StockForecast();

// Observers
market.addObserver(stockNow);
market.addObserver(forecast);


// App Logic
market.run();
