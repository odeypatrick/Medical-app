<template>
    <div class="new-patient center-element" v-if="show" @click="closeModal">
      <div class="modal-content" id="modal-content">
        <div class="close-btn" @click="closeModal">
            &times;
        </div>
        
        <div class="top flex">
            <div>
                <h4>Vital Details</h4>
            </div>
        </div>

        <div class="form">
            <div class="form-area">
                <form @submit.prevent="addVitals">
                    <div class="form-group">
                        <label class="colored-text">Temperature</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.temperature">
                        </div>
                    </div>
                    <div class="form-group"> 
                        <label class="colored-text">Weight</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.weight">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">Height</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.height">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">Blood Pressure</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.bloodPressure">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">Pulse Rate</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.pulseRate">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">Body Mass Index</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" required v-model="formData.bmi">
                        </div>
                    </div>
                    <button class="btn">
                        Save Vitals
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios'

  export default {
    components: {
      
    }, 
    data(){
      return {
        classes: ['qrcode-page flex-center', 'close-btn flex-center', 'fa fa-times', 'close-btn'],
        show: true,
        formData: {
            temperature: "",
            weight: "",
            height: "",
            bloodPressure: "",
            pulseRate: "",
            bmi: ""
        }
      }
    },
    methods: {
      closeModal(e){
        if(this.classes.includes(e.target.className)){
            this.$emit('close-modal')
            // this.stage = 1;
        }
      },
      addVitals(){
        axios.post(`${this.$store.state.apiUrl}/patient/${this.$route.params.id}/vitals`, this.formData, {
            headers: {
                "Authorization": `Bearer ${this.$store.state.auth.token}`
            }
        })
        .then(async res => {
            if(res.data.code === 201) {
                await this.$store.dispatch('getPatientInfo', this.$route.params.id)
                this.$emit('close-modal')
            }
        })
        .catch(err => console.log(err))
      }
    }
  }
  </script>
  
  <style scoped>
      .new-patient {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100%;
        overflow: auto;
        width: 100%;
        background: rgba(0,0,0,0.3);
        padding: 20px 0px;
      }
  
      .modal-content {
        height: 70%;
        width: 60%;
        background: #fff;
        color: #262626;
        border-radius: 10px;
        padding: 0px 3rem;
        box-shadow: 0 0 6px 2px #00000035;
        overflow: auto;
        position: relative;
        /* margin-top: 10rem; */
      }
  
      .close-btn {
        display: flex;
        align-items: right;
        justify-content: right;
        margin-bottom: 10px;
        margin-right: 10px;
        cursor: pointer;
        color: #999999;
        font-size: 3rem;
      }
  
      .close-btn:hover {
        color: #000;
      }

      .top {
        margin-bottom: 10px;
      }

      .top h4 {
        color: #646464;
        font-weight: 600;
      }

      .form .form-area {
        flex: 3;
        background-color: #fff;
        border-radius: 10px;
      }


      .form label {
        font-size: 14px;
        font-weight: 500;
      }

      form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
      }

      form input {
        font-size: 14px;
        padding: 10px;
        border: 1px solid #5cb6af6c;
        background-color: #f3f3f3;
      }

      form button {
        width: 200px;
        background-color: #5cb6ae;
        padding: 15px 30px;
        font-size: 15px;
        color:  #fff;
        font-weight: 500;
      }
  
      
      .scroll::-webkit-scrollbar {
          width: 0.2em;
      }
      
      .scroll::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;
        outline: none;
      }
      .italic-text {
        font-style: italic;
      }
  
      @media(max-width: 768px) {
        .modal-content {
          width: 95%;
          font-size: 12px !important;
        }
  
      }
  </style>