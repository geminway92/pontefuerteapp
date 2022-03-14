<template>
  <div class="carousel">
    <button id="retroceder" @click="retrocederFoto">Retroceder</button>
    <div id="imagen">
      <img :src="carrusel" alt="">
    </div>
    <button id="avanzar" @click="pasarFoto">Avanzar</button>
</div>

</template>

<script>
export default {
  data () {
    return {
      imagenes: ['../assets/images/board.jpg', '../assets/images/pesa.jpg', '../assets/images/soporte.jpg'],
      posicionActual: 0,
      carrusel: null
    }
  },

  methods: {
    pasarFoto () {
      if (this.posicionActual >= this.imagenes.length - 1) {
        this.posicionActual = 0
      } else {
        this.posicionActual++
      }
      this.carrusel = this.imagenes[this.posicionActual]
    },

    retrocederFoto () {
      if (this.posicionActual <= 0) {
        this.posicionActual = this.imagenes.length - 1
      } else {
        this.posicionActual--
      }
      this.carrusel = this.imagenes[this.posicionActual]
    }
  },

  created () {
    setInterval(() => {
      this.pasarFoto()
    }, 2000)
    this.carrusel = this.imagenes[this.posicionActual]
  }
}
</script>

<style scoped>

.carousel {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}

#imagen{
  width: 100%;
  height: 400px;
  background-size: cover;
}
#imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
