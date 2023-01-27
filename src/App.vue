<template>
 <div>
  <AppHeader/>
  <div class="wraapper">
    <div class="side-bar">
      <SideNav/>
    </div>

    <div class="body">
      <router-view></router-view>
      <div class="d-flex justify-content-between align-items-center" 
      :class="$store.state.auth.generalMessage.type == 0 ? 'error-display' : 'success-display'"
      v-if="$store.state.auth.generalMessage"
      >
        <span class="text">{{ $store.state.auth.generalMessage.text }}</span>
        <span class="close-btn" @click="$store.state.auth.generalMessage =  ''">
          <i class="pi pi-times"></i>
        </span>
      </div>

      <div class="emergency d-flex justify-content-between align-items-center" :style="{width: alertWidth}">
        <div class="icon pointer" @click="showMessage = true">
          <i class="pi pi-sun" style="font-size: 1.5rem"></i>
        </div>

        <div class="text"  v-if="showMessage">
          <div>Emergency patient?</div>
          <div><small>Proceed for medical care</small></div>
        </div>

        <div class="cancel pointer" @click="showMessage = false" v-if="showMessage">
          <i class="pi pi-times"></i>
        </div>
      </div>
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
  },
  data(){
    return {
      showMessage: false
    }
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

.body {
  position: relative;
}

.colored-text {
  color: #478984;
}

.center-element {
  display: grid;
  place-items: center;
}

.pointer {
  cursor: pointer;
}

.emergency  {
  right: 0;
  position: absolute;
  top: 3rem;
  background-color: #971414;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  padding: 10px 8px;
  gap: 0.8em;
  transition: 0.5s ease-in;
}

.emergency > div {
  font-size: 13px;
}

.text > div:first-child {
  margin-bottom: -5px;
  font-weight: 600;
}

.text > div {
  font-weight: 500;
  text-decoration: underline;
}

.error-display {
    position: fixed;
    top: 60px;
    left: 40%;
    right: 40%;
    background-color: #FF9494;
    font-size: 15px;
    color: #fff;
    padding: 5px;
    font-weight: 500;
  }

  .error-display .text, 
  .error-display .close-btn,
  .success-display .text,
  .success-display .close-btn
  {
    padding: 10px;
    font-weight: 600;
  }

  .error-display .close-btn,
  .success-display .close-btn {
    cursor: pointer;
  }

  .success-display {
    position: fixed;
    width: 300px;
    top: 60px;
    left: 40%;
    background-color: #5cb6ae;
    font-size: 15px;
    color: #fff;
    padding: 5px;
    font-weight: 500;
  }
</style>
