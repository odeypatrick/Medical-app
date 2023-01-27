<template>
  <div class="details">
    <div class="tabs d-flex justify-content-between align-items-center">
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
    .details {
        background-color: #fff;
        border-radius: 10px;
    }
    .tabs {
        gap: 0.5em;
        background-color: #ebebeb;
        height: 80px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        align-items: flex-end;
    }

    .tabs > div {
        width: 100%;
    }

    .info {
        padding: 20px;
    }
</style>