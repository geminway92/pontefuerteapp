<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/list-products">Productos </router-link>
    <router-link to="/cart">Cesta </router-link>
    <router-link to="/pay">Pago</router-link>
  </div>
  <router-view/>

</template>
<script>

export default {
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
