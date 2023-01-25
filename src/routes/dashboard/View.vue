<template>
  <div class="view">
    <SideNav></SideNav>
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
export default {
  components: {
      SideNav
  },
  created(){
  
  }
}
</script>

<style scoped>
</style>