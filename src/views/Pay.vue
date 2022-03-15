<template>
  <div class="pay">
    <h1>Pago</h1>
    <div class="container-extract">
      <h2>El pago total es de {{this.costTotal}} €</h2>
      <ButtonBase textBotton="Pagar"></ButtonBase>
    </div>

  </div>

</template>

<script>
import ButtonBase from '../components/ButtonBase.vue'

export default {
  name: 'Pay',
  components: {
    ButtonBase
  },
  data () {
    return {
      localStorageArray: [],
      costTotal: 0
    }
  },
  methods: {
    checkLocalStorage () {
      if (localStorage.getItem('cart') != null) {
        this.localStorageArray = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', this.localStorageArray)
      }
      console.log(this.localStorageArray)
      this.sumCost()
    },

    sumCost () {
      this.localStorageArray.forEach(product => {
        this.costTotal += product.pedido.quantify * product.prices
      })
      console.log(this.costTotal)
    }
  },

  created () {
    this.checkLocalStorage()
  }
}

</script>

<style scoped>
.pay{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-extract{
  background: #e8edf1;
  width: 60%;
  text-align: center;
}
</style>
