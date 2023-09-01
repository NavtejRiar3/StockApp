import yfinance as yf
import json

def get_stock_data(symbol, period):
    try:
        interval_config = read_config()
        stock_data = yf.download(tickers=symbol, period=period, interval=interval_config[period])
        
        if not stock_data.empty:
            return {'symbol': symbol, 'data': stock_data.to_json()}
        
        else:
            return {'error': f'Stock data for {symbol} is empty'}
        
    except Exception as e:
        print(e)
        return {'error': f'Error fetching stock data for {symbol}'}
    

def read_config():
    with open("./ServerConfig/interval_config.json", "r") as f:
        interval_config = json.load(f)
        
        return interval_config
