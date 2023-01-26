<template>
 <div>
  <AppHeader/>
  <div class="wraapper">
    <div class="side-bar">
      <SideNav/>
    </div>

    <div class="body">
      <router-view></router-view>
    </div>
  </div>
 </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import SideNav from './components/SideNav.vue'

export default {
  components: {
    SideNav,
    AppHeader
  },
  created(){
    this.$store.dispatch('autoLogin')
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5f5f5f;
  background-color: #bfc6c330;
  font-family: 'Montserrat', sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.colored-text {
  color: #478984;
}

.center-element {
  display: grid;
  place-items: center;
}

.flex-align {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.pointer {
  cursor: pointer;
}
</style>
