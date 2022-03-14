<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/list-products">Listado de artículos</router-link>
    <router-link to="/views-products">Vista de productos</router-link>
    <router-link to="/cart">Cesta</router-link>
    <router-link to="/pay">Pago</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
