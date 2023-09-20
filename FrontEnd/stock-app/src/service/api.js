import api_config from "./api_config";

const url = api_config["url"]

export async function fetchStockData(symbol, period) {

    const response = await fetch(`${url}/get_data/${symbol}/${period}`)

    if (!response.ok) {
        throw new Error(`Request to fetch ${symbol} over ${period} failed`);
    }

    const data = await response.json();
    const formattedStockData = formatData(data)

    return formattedStockData

    
}

function formatData(data) {
    if (!('Open' in data) || !('High' in data) || !('Low' in data)
        || !('Adj Close' in data)) {

        return {}
    }
    const timestamps = convertIntTimestampToString(Object.keys(data['Open']))
    return {
        timestamps: timestamps,
        open: Object.values(data['Open']),
        high: Object.values(data['High']),
        low: Object.values(data['Low']),
        adjustedClose: Object.values(data["Adj Close"]),
    }
}

function convertIntTimestampToString(timestamps) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
    const stringTimestamps = timestamps.map((timestamp) => {
        const date = new Date(parseInt(timestamp))

        return date.toLocaleDateString(undefined, options)
    })

    return stringTimestamps
}