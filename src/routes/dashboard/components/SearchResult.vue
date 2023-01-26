<template>
  <div class="search-result">
   <div class="wrapper">
    <div class="top flex-align">
        <div>
            <h4 v-if="user?.role == 'Clerk'">
                <span v-if="isSearching">Search Results for "{{ query }}"</span>
                <span v-else>Recent Search</span>
            </h4>
            <h4 v-else>
                <span v-if="isSearching">Search Results for "{{ query }}"</span>
                <span v-else>Patient List in queue</span>
            </h4>
            <h6 class="colored-text">Search Query: Last viewed</h6>
        </div>

        <button class="btn btn-lg" @click="$emit('showModal')" v-if="user?.role == 'Clerk'">Add New Patient</button>
    </div>

    <div class="results">
        <div class="head flex-align colored-text">
            <div class="label label1">S/N</div>
            <div class="label">Patient ID</div>
            <div class="label">Names</div>
            <div class="label">Gender</div>
            <div class="label">Telephone Number</div>
            <div class="label">Payment Category</div>
        </div>
        <router-link 
        v-for="patient in patients" 
        :key="patient.id" 
        :to="user?.role == 'Nurse' ? `/patient/${patient.patientId}`: '#'" 
        class="value flex-align">
            <div class="label1">{{patient?.id }}</div>
            <div>{{ patient?.patientId  }}</div>
            <div style="text-transform: capitalize;">{{ patient?.firstName }} {{ patient?.middleName }} {{ patient?.lastName }}</div>
            <div>{{ patient?.gender }}</div>
            <div>{{ patient?.phoneNumber }}</div>
            <div>{{ patient?.paymentCategory }}</div>
        </router-link>
    </div>
   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['patients', 'isSearching', 'query'],
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    data() {
        return {
            clerk: true
        }
    }
}
</script>

<style scoped>
    .search-result {
        display: grid;
        place-items: center;
        margin-top: 2rem;
    }

    .wrapper {
        width: 80%;
    }

    .wrapper h4 {
        color: #707070;
        font-weight: 600;
    }

    .wrapper h6 {
        font-size: 13px;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .top button {
        background-color: #5cb6ae;
        padding: 15px 30px;
        font-size: 15px;
        color:  #fff;
    }

    .head, .value {
        padding: 0 30px;
    }

    .head > div, .value > div {
        flex: 1;
        padding: 20px;
        font-size: 14px;
        display: flex;
        justify-content: left;
    }
    .label1 {
        flex: 0.5 !important;
    }

    .head {
        background-color: #ebebeb;
        margin-bottom: 10px;
        font-weight: 700;
    }

    .value {
        background-color: #fff;
        margin-bottom: 10px;
        color: #898888;
        font-weight: 600;
    }

    .value:hover {
        border: 1px solid #58aba4;
        color: #478984;
        border-radius: 10px;
        box-shadow: 0px 5px 20px 0px #65c4be56;
    }

    .results a {
        text-decoration: none;
    }
</style>