<template>
    <div>
      <h1>Stock Data</h1>
      <div class='stockData'>
        <input v-model="symbol" placeholder="Enter Stock Ticker Symbol"/>
        <select v-model="period">
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
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <div v-if="data">
            {{ data }}
        </div>
      </div>
    </div>

  </template>
  
  <script>
  import { fetchStockData } from '../service/api.js'

  export default {
    components: {
    },
    data() {
      return {
        data: null,
        isLoading: null,
        error: null,
        symbol:'',
        period:''
      }
    },
    methods: {
        async retrieveStockData() {
            this.isLoading = true
            this.error = null
            this.data = null
            const { symbol, period } = this

            try {
                const response = await fetchStockData(symbol, period)

                this.data = response.data
            } catch (error) {
                console.log(error)
                this.error = `An error occured when fetching stock data for ${symbol} over ${period}`
            } finally {
                this.isLoading = false
            }
        }
    }
  }
  </script>
  