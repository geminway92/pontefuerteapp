<template>
  <div class="home">
    <h1>Inicio</h1>
    <BannerComponent></BannerComponent>
  </div>
</template>

<script>
import BannerComponent from '../components/BannerComponent.vue'

export default {
  name: 'Home',
  components: {
    BannerComponent
  }
}
</script>
