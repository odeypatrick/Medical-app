<template>
  <div class="details">
    <div class="tabs flex-align">
        <div v-for="(tab, index) in tabs" :key="index" @click="page = index">
            <Tab :value="tab" :active="page === index ? true : false"/>
        </div>
    </div>
    <div class="info">
        <TabDetails v-on:showModal="addVitals = true" :vitals="vitals"/>
        <AddVitals v-on:close-modal="addVitals = false" v-show="addVitals" />
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import TabDetails from './TabDetails.vue';
import AddVitals from './AddVitals.vue';

export default {
    props: ['vitals'],
    components: {
        Tab,
        TabDetails,
        AddVitals
    },
    data(){
        return {
            page: 0,
            addVitals: false,
            tabs: [
                "Patient Vitals",
                "Appointments",
                "Visit History",
                "Comments & Notes",
                "Attachments"
            ]
        }
    }
}
</script>

<style scoped>
    .tabs {
        gap: 0.5em;
    }

    .tabs > div {
        width: 100%;
    }

    .info {
        padding: 20px;
    }
</style>