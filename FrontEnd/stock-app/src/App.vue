<template>
  <StockData />
</template>

<script>

import StockData from './components/StockData.vue'

export default {
  name: 'App',
  components: {
    StockData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
