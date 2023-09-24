<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>

  </router-view>
</template>

<script>



export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: sans-serif, 'Montseratt';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

ul {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0;
  font-size: large;
}

li {
  list-style: none;
  padding: 7px;
  border: 1px solid black;
  border-radius: 7px;

}

li a {
  text-decoration: none;
  color: black;
}

</style>
