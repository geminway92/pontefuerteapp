<template>
  <div class="pay">
    <h1>Pago</h1>
    <div class="container-extract">
      <h2>El pago total es de {{this.costTotal}} €</h2>
      <ButtonBase textBotton="Pagar" :disabled="this.costTotal <= 0" @click="pay"></ButtonBase>
    </div>

  </div>

</template>

<script>
import ButtonBase from '../components/ButtonBase.vue'
import Swal from 'sweetalert2'

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
      this.sumCost()
    },

    sumCost () {
      this.localStorageArray.forEach(product => {
        this.costTotal += product.pedido.quantify * product.prices
      })
    },

    pay () {
      Swal.fire({
        title: '¿Estás seguro de hacer la compra?',
        showDenyButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra realizada', '', 'success')
          this.resetCars()
        }
      })
    },

    resetCars () {
      localStorage.setItem('cart', JSON.stringify([]))
      this.costTotal = 0
    }
  },

  created () {
    this.checkLocalStorage()
  }
}

</script>

<style scoped>
button{
  margin-bottom: 1em;
}

button:disabled{
  background: #fe9a52;
}
.pay{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-extract{
  background: #e8edf1;
  padding: 1em;
  text-align: center;
}
</style>
