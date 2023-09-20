<template>
    <div>
      <h1>Stock Data</h1>
      <div class='stockData'>
        <input v-model='symbol' placeholder='Enter Stock Ticker Symbol'/>
        <select v-model='period'>
            <option>1d</option>
            <option>5d</option>
            <option>1wk</option>
            <option>1mo</option>
            <option>3mo</option>
            <option>1y</option>
            <option>5y</option>
            <option>max</option>

        </select>
        <button @click='retrieveStockData'>Get Stock Data</button>
        <div v-if='isLoading'>Loading...</div>
        <div v-if='error'>{{ error }}</div>
        <div v-if='errorMessage'>{{ errorMessage }}</div>

        <stock-data-plotter :stockData='data' :key='data' />
      </div>
    </div>

</template>
  
  <script>
  import { fetchStockData } from '../service/api.js'
  import StockDataPlotter from './Plotter/StockDataPlotter.vue'

  export default {
    components: {
      StockDataPlotter
    },
    data() {
      return {
        data: null,
        isLoading: null,
        error: null,
        symbol:'',
        period:'5d',
        errorMessage:''
      }
    },
    methods: {
        async retrieveStockData() {
            this.isLoading = true
            this.error = null
            this.data = null
            this.errorMessage = ''
            const { symbol, period } = this
            var response = null

            try {
                response = await fetchStockData(symbol, period)
                this.data = response
            } catch (error) {
                console.log(error)
                this.error = `An error occured when fetching stock data for ${symbol} over ${period}`
            } finally {
                if (!this.data) {
                  this.errorMessage = `No stock market data for ${symbol} over ${period}`
                }
                this.isLoading = false
            }
        }
    }
  }
  </script>
  