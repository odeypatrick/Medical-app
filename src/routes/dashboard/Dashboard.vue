<template>
  <div class="dashboard">
    <Search/>
    <SearchResult v-on:showModal="addPatient = true"/>
    <NewPatient v-on:close-modal="addPatient = false" v-show="addPatient"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import SearchResult from './components/SearchResult.vue'
import NewPatient from './components/patient/NewPatient.vue';

export default {
    components: {
        Search,
        SearchResult,
        NewPatient  
    },
    data(){
        return {
            addPatient: false
        }
    }
}
</script>

<style scoped>
    .dashboard {
        height:  100vh;
    }
</style>