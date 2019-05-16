<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard/home">Home</router-link> |
      <router-link to="/dashboard/about">About</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
