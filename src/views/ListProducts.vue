<template>
  <h1>Productos</h1>
  <div class="container-product">
    <Product v-for="product in products" :key="product.name" :product="product"/>
  </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'ListProducts',
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
          nameProduct: 'Ski Maniak AirSki',
          image: '../assets/images/board.jpg',
          valoration: 5
        },
        {
          nameProduct: 'Maniak Runner',
          image: '../assets/images/pesa.jpg',
          valoration: 4
        },
        {
          nameProduct: 'Plataforma Airski',
          image: '../assets/images/soporte.jpg',
          valoration: 3
        }
      ]
    }
  }
}
</script>

<style scoped>

  h1{
    text-align: center;
  }

  .container-product {
  display: flex;
  flex-direction: column;
  cursor:pointer;
}

@media screen and ( min-width: 1050px ) {
  .container-product {
    flex-direction: row;
  }
}
</style>
