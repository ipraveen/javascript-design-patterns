import { StockForecast } from './clients/StockForecast';
import { StockNow } from './clients/StockNow';
import { StockMarket } from './StockMarket';

const market = new StockMarket();

// Clients
new StockNow();
new StockForecast();

// App Logic
market.run();
