<template>
  <div class="carousel">
    <div id="imagen">
    <ChevronLeft id="retroceder" @click="retrocederFoto"/>
      <img :src="carrusel" alt="">
    <ChevronRight id="avanzar" @click="pasarFoto"/>
    </div>
</div>

</template>

<script>
import ChevronLeft from '../components/ChevronLeft.vue'
import ChevronRight from '../components/ChevronRight.vue'

export default {
  data () {
    return {
      imagenes: ['../assets/images/board.jpg', '../assets/images/pesa.jpg', '../assets/images/soporte.jpg'],
      posicionActual: 0,
      carrusel: null
    }
  },
  components: {
    ChevronLeft,
    ChevronRight
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
  max-width: 100%;
  margin: 0 auto;
  display: flex;
}

#imagen{
  width: 100%;
  background: #dedede;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#imagen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#retroceder, #avanzar{
  border: none;
  height: 40px;
}

</style>
