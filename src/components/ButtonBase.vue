<template>
  <button>{{textBotton}}</button>
</template>

<script>
export default {
  props: {
    textBotton: {
      type: String
    }
  }
}
</script>

<style>
  button{
    background: #ff6900;
    padding: 1em;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }
</style>
