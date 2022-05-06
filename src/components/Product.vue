<template>
  <div v-if="product" class="container-product" @click="getProduct">
    <div class="product">
    <h2>{{product.nameProduct}}</h2>
      <img :src="product.image" alt="">
      <div class="container-starts">
        <ul >
          <li v-for="valoration in product.valoration" :key="valoration">
            <StartComponent/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StartComponent from '../components/StartComponent.vue'

export default {
  props: {
    product: {
      type: Object
    }
  },
  components: {
    StartComponent
  },

  methods: {
    getProduct () {
      this.$router.push({ name: 'ViewsProducts', params: { id: this.product.nameProduct } })
    }
  }
}

</script>

<style scoped>

.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img{
  width: 40%;
}

.container-starts{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width:100%
}

.container-starts ul {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 0;
}

.container-starts svg{
  width:20px;
  color: #ff6900;
}

</style>
