<template>
    <div class="dashboard">
      <Search :back="true"/>
      
      <div class="wrapper">
        <div class="d-flex justify-content-between mb-3 align-items-end">
            <div class="user-info">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem; color: #5c5c5c"></i>
                    </div>
                    <div>
                        <div class="name">{{ patient.patient?.firstName }} {{ patient.patient?.lastName }}</div> 
                        <div class="name-label d-flex justify-content-between align-items-center">
                            <small class="colored-text">First Name</small>
                            <small class="colored-text">Surname</small>
                        </div> 
                    </div>
                    <div class="age">
                        <small class="colored-text"><b>{{ patient.patient?.gender }} - {{ patient.patient?.age }} year(s)</b></small>
                    </div>
                </div>

                <div class="d-flex justify-content-start align-items-center">
                    <div>Patient ID: {{ patient.patient?.patientId }}</div> | <div>Outpatient</div>
                </div>
            </div>

            <button class="btn btn-lg" @click.prevent="" v-if="patient.vitals">Send to Doctor</button>
        </div>

        <Details :vitals="patient.vitals"/>
      </div>
    </div>
  </template>
  
<script lang="js">
  import Search from '@/components/Search.vue';
  import Details from './components/Details.vue';
  import { mapGetters } from 'vuex'
  
  export default {
      components: {
          Search,
          Details
      },
    computed: {
        ...mapGetters([
            'patient'
        ])
    },
      data(){
          return {
              addPatient: false,
          }
      },
      created(){
        this.$store.dispatch('getPatientInfo', this.$route.params.id)
      }
  }
  </script>
  
  <style scoped>
      .dashboard {
          height:  100vh;
      }
      .user-info > div:first-child {
        justify-content: flex-start;
        gap: 1rem;
        margin-bottom: 10px;
      }

      .user-info > div:last-child {
        justify-content: flex-start;
        gap: 1rem;
        font-size: 14px;
        margin-left: 3.5rem;
        font-weight: 600;
        color: #5c5c5c;
      }

      .wrapper {
        width: 80%;
        margin: 0 auto;
      }

      .name-label {
        width: 170px;
        font-size: 13px;
        font-style: italic;
        font-weight: 500;
      }

      .user-info .name {
        font-size: 1.5rem;
        font-weight: 600;
        color: #5c5c5c;
        border-bottom: 1px solid #b9b7b7;
      }

      button {
        background-color: #5cb6ae;
        padding: 15px 30px;
        font-size: 15px;
        color:  #fff;
    }

    .wrapper > .flex {
        align-items: end;
        margin-bottom: 10px;
    }
  </style>