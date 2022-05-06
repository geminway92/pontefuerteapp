<template>
  <h1 class="title">Vista de productos</h1>
  <div class="container-view">
    <div class="container-image">
      <img :src="this.productCurrent.image" alt="">
    </div>

    <div class="container-info">
      <h1>{{this.productCurrent.nameProduct}}</h1>
      <div class="container-starts">
        <ul  v-for="valoration in this.productCurrent.valoration" :key="valoration">
          <li>
            <StartComponent/>
          </li>
        </ul>
      </div>

      <h3 >ENVÍO INMEDIATO</h3>
      <div class="container-details">

        <div class="container-grid">
          <div class="container-color">
            <label for="color">Color</label>
            <select v-model="this.productCurrent.pedido.color" name="color" id="color">
              <option value="negro">Negro</option>
              <option value="blanco">Blanco</option>
              <option value="verde">Verde</option>
            </select>
            </div>

            <div class="container-quantity">
              <label for="quantity">Cantidad</label>
              <input v-model="this.productCurrent.pedido.quantify" id="quantity" type="number" min="1" max="50">
            </div>
            <p>{{this.productCurrent.prices}} €</p>
        </div>
        <ButtonBase textBotton="Añadir al Carrito" class="buttonBase" @click="addCart"/>
        <ul class="especificacion">Especificaciones:
          <li>Alto: 210 cm</li>
          <li>Ancho: 60 cm</li>
          <li>Longitud: 127 cm</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StartComponent from '../components/StartComponent.vue'
import ButtonBase from '../components/ButtonBase.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ViewsProducts',
  data () {
    return {
      id: this.$route.params.id,
      products: [
        {
          nameProduct: 'Ski Maniak AirSki',
          image: '../assets/images/board.jpg',
          valoration: 5,
          prices: 100,
          pedido: {
            color: 'negro',
            quantify: 1
          }
        },
        {
          nameProduct: 'Maniak Runner',
          image: '../assets/images/pesa.jpg',
          valoration: 4,
          prices: 200,
          pedido: {
            color: 'negro',
            quantify: 1
          }
        },
        {
          nameProduct: 'Plataforma Airski',
          image: '../assets/images/soporte.jpg',
          valoration: 3,
          prices: 400,
          pedido: {
            color: 'negro',
            quantify: 1
          }
        }
      ],
      productCurrent: undefined,
      localStorageArray: []
    }
  },
  components: {
    StartComponent,
    ButtonBase
  },

  methods: {

    filterByID () {
      this.productCurrent = this.products.find(e => e.nameProduct === this.id)
    },

    addCart () {
      this.checkLocalStorage()
      this.localStorageArray.push(this.productCurrent)
      localStorage.setItem('cart', JSON.stringify(this.localStorageArray))
      Swal.fire({
        icon: 'success',
        title: 'Añadido a cesta',
        showConfirmButton: false,
        timer: 1500
      })
    },

    checkLocalStorage () {
      if (localStorage.getItem('cart') != null) {
        this.localStorageArray = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(this.localStorageArray))
      }
    }
  },

  created () {
    this.filterByID()
    this.checkLocalStorage()
  }
}

</script>

<style scoped>
.title{
  text-align: center;
}

option {
  font-size: 10px;
}
.container-view{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container-image{
  width: 45%;
  max-width: 450px;
}
.container-image img {
  width: 100%;
  padding-top: 1em;
}

.container-info{
  text-align: center;
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
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
}

.container-starts svg{
  width:20px;
  color: #ff6900;
}

.container-info h3{
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 1em;
  color: #04e286;
}

.container-details {
  background: #e8edf1;
  padding: 1em;
  margin-bottom: 1em;
}
.container-grid {
  display: grid;
  grid-template-columns: [x0] 1fr [x1] 1fr ;
  grid-template-rows: [y0] 1fr [y1]
}

.container-details p {
  font-size: 2em;
  font-weight: bold;
   grid-column: x0 / x2;
}

.container-color, .container-quantity{
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
}

.especificacion{
  padding: 0;
  text-align: center;
}

@media screen and (min-width: 630px) {
  .container-view{
  flex-direction: row;
  justify-content: space-around;
}
}
</style>
