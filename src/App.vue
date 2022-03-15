<template>
<div v-if="isTablet === 'true'">

  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/list-products">Listado de artículos </router-link>
    <router-link to="/cart">Cesta </router-link>
    <router-link to="/pay">Pago</router-link>
  </div>
  <router-view/>
</div>
  <div v-else class="noTablet">
    <h1>El dispositivo no es compatible</h1>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'

export default {
  data () {
    return {
      isTablet: undefined,
      cookies: undefined
    }
  },
  methods: {
    checkScreen () {
      if (screen.width >= 700 && screen.width < 850) {
        const { cookies } = useCookies()
        this.cookies = cookies
        console.log(this.cookies)
        this.cookies.set('isDeviceTablet', 'true')
        this.isTablet = this.cookies.get('isDeviceTablet')
      }
    }
  },
  created () {
    this.checkScreen()
  }
}
</script>

<style>

html, body{
  margin: 0;
}

ul li{
 list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  background: #ffffff;
}

#nav {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #56595c;
  gap: 0.5em;
}

#nav a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
  padding:  0 1em;

}

#nav a.router-link-exact-active {
  background: #fe6900;
}

.noTablet{
  text-align: center;
}
</style>
