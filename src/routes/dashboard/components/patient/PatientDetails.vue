<template>
    <div class="dashboard">
      <Search/>
      
      <div class="wrapper">
        <div class="user-info">
            <div class="flex-align">
                <div>
                    <i class="fa fa-user-circle" style="font-size: 2.5rem; color: #5c5c5c"></i>
                </div>
                <div>
                    <div class="name">Fedelis Anokwu</div> 
                    <div class="name-label flex-align">
                        <small class="colored-text">First Name</small>
                        <small class="colored-text">Surname</small>
                    </div> 
                </div>
                <div class="age">
                    <small class="colored-text"><b>Male - 25 year(s)</b></small>
                </div>
            </div>

            <div class="flex-align">
                <div>Patient ID: 004699</div> | <div>Outpatient</div>
            </div>
        </div>

        <Details/>
      </div>
    </div>
  </template>
  
<script lang="js">
  import Search from '@/components/Search.vue';
  import Details from './components/Details.vue';
  
  export default {
      components: {
          Search,
          Details
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

      .user-info {
        padding: 1rem 0;
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
        font-size: 14px;
      }

      .user-info .name {
        font-size: 1.5rem;
        font-weight: 600;
        color: #5c5c5c;
      }
  </style>