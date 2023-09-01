import api_config from "./api_config";

const url = api_config["url"]

export async function fetchStockData(symbol, period) {

    const response = await fetch(`${url}/get_data/${symbol}/${period}`)

    if (!response.ok) {
        throw new Error(`Request to fetch ${symbol} over ${period} failed`);
    }

    const data = await response.json();

    return data;

    
}