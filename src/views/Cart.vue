<template>
<div id="cart">
  <h1>CARRITO DE COMPRA</h1>
  <div class="container-product">
    <table>
      <thead>
        <tr class="title-table">
          <th>ARTÍCULO</th>
          <th>CANTIDAD</th>
          <th>PRECIO UNITARIO</th>
          <th>PRECIO TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in this.localStorageArray" :key="product">
          <td><img :src="product.image" alt=""></td>
          <td>{{product.pedido.quantify}}</td>
          <td>{{product.prices}} €</td>
          <td>{{product.prices * product.pedido.quantify}} €</td>
        </tr>
      </tbody>
    </table>
  </div>
    <ButtonBase @click="goPay" textBotton='Realizar pedido'/>
</div>
</template>

<script>
import ButtonBase from '../components/ButtonBase.vue'
export default {
  name: 'Cart',
  data () {
    return {
      localStorageArray: []
    }
  },
  components: {
    ButtonBase
  },
  methods: {
    checkLocalStorage () {
      if (localStorage.getItem('cart') != null) {
        this.localStorageArray = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(this.localStorageArray))
      }
    },

    goPay () {
      this.$router.push({ name: 'Pay' })
    }
  },

  created () {
    this.checkLocalStorage()
  }
}

</script>

<style scoped>
#cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.container-product{
  display: flex;
  justify-content: center;
}

.title-table{
  background: #e8edf1;

}

th{
  padding: 1em;
  border: none;
}

table img {
  width: 200px;
}

tbody{
  text-align: center;
}

@media screen and (max-width: 550px ) {
table{
  width: 50%;
  margin-bottom: 1em;
}

th{
  padding: 5px;
  font-size: 12px;
}

table img {
  width: 60px;
}

}
</style>
