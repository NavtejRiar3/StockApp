<template>
    <div>
      <h1>Stock Data</h1>
      <div class='stockData'>
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
        error: null
      }
    },
    methods: {
        async retrieveStockData() {
            this.isLoading = true
            this.error = null
            var symbol = 'aapl'
            var period = '5d'

            try {
                const response = await fetchStockData('aapl', '5d')

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
  