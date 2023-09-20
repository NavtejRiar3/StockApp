export const lineGraphSetup = (stockData) => {
   return stockData ? {
      x: stockData['timestamps'],
      y: stockData['adjustedClose'],
      
      type: 'scatter',
      mode: 'lines',
      line: {color: 'blue'},
      name: 'Price Line Plot'
   } : {}
}

export const candleStickSetup = (stockData) => {
   return stockData ? {
      x: stockData['timestamps'],
      open: stockData['open'],
      high: stockData['high'],
      low: stockData['low'],
      close: stockData['adjustedClose'],

      type: 'candlestick',
      decreasing: {line: {color: 'red'}},
      increasing: {line: {color: 'green'}},
      name: 'Candle Stick Plot'
   } : {}
}

export const layoutConfig = {
   xaxis: {
      rangeslider: {
         visible: false,
      },
      dtick: 10
   },
   height: '100%'
}