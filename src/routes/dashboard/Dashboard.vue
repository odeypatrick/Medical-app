<template>
  <div class="dashboard">
    <Search v-on:search-patients="searchPatients" :back="false"/>
    <SearchResult v-on:showModal="addPatient = true" :patients="patients" :isSearching="isSearching" :query="query"/>
    <NewPatient v-on:close-modal="addPatient = false" v-show="addPatient"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import SearchResult from './components/SearchResult.vue'
import NewPatient from './components/patient/NewPatient.vue';
import { mapGetters } from 'vuex'

export default {
    components: {
        Search,
        SearchResult,
        NewPatient  
    },
    computed: {
        ...mapGetters([
            'patients'
        ])
    },
    created(){
        this.$store.dispatch('getPatients')
    },
    methods: {
        searchPatients(search) {
            if (search) {
                this.$store.state.patient.patients = this.$store.state.patient.allPatients.filter((patient) =>
                    patient.patientId.toLowerCase().includes(search.toLowerCase())
                );
                this.query = search
                this.isSearching = true
            } else {
                this.$store.state.patient.patients = this.$store.state.patient.allPatients
                this.isSearching = false
            }
        }
    },
    data(){
        return {
            addPatient: false,
            isSearching: false,
            query: ""
        }
    }
}
</script>

<style scoped>
    .dashboard {
        height:  100vh;
    }
</style>