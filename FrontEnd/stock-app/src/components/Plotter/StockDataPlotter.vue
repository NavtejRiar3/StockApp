<template>
  <div>
    <div ref='stockDataPlot'></div>
  </div>
</template>

<script>
   import Plotly from 'plotly.js-dist';
   import { lineGraphSetup, candleStickSetup, layoutConfig } from './GraphConfigs.js'

   export default {
      props: ['stockData'],

      data() {
         return {
            stockDataValues: [],
         };
      },
      mounted() {
         this.plotCandlestickChart();
      },
      methods: {

         plotCandlestickChart() {
            if (this.stockData) {
               this.stockDataTraces = [
                  candleStickSetup(this.stockData),
                  lineGraphSetup(this.stockData)
               ]

               Plotly.newPlot(this.$refs.stockDataPlot, this.stockDataTraces, layoutConfig);
            }
         },
      },
   };
</script>
