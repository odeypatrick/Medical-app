<template>
    <div class="new-patient center-element" v-if="show" @click="closeModal">
      <div class="modal-content" id="modal-content">
        <div class="close-btn d-flex justify-content-end pointer mb-4" @click="closeModal">
            &times;
        </div>
        
        <div class="top d-flex justify-content-between">
            <div>
                <h4>Register new patient</h4>
                <div class="italic-text">
                    <small class="colored-text"><u>Patient ID: Add New Patient Identification</u></small>
                </div>
            </div>
            <div class="profile-pic">
                <div class="image-holder"></div>
                <div class="italic-text">
                    <small class="colored-text"><u>Upload profile picture if any</u></small>
                </div>
            </div>
        </div>

        <div class="form d-flex justify-content-between">
            <div class="process">
                <h6>Demographics</h6>
                <div class="d-flex justify-content-start align-items-center">
                    <div class="hor" :style="stage == 2 ? 'background-color: #478984' : 'background-color: #ccc'"></div>
                    <div class="vert" :style="stage == 2 ? 'background-color: #478984' : 'background-color: #ccc'"></div>
                    <span :class="stage == 1 ? 'colored-text' : 'pointer'" @click="stage = 1">
                        Name
                        <i class="pi pi-check-circle" style="color: #478984" v-if="stage == 2"></i>
                    </span>
                </div>
                <div class="d-flex justify-content-start align-items-center">
                    <div class="hor" :style="stage > 2 ? 'background-color: #478984' : 'background-color: #ccc'"></div>
                    <div class="vert" :style="stage > 2 ? 'background-color: #478984' : 'background-color: #ccc'"></div>
                    <span :class="stage == 2 ? 'colored-text' : null">Others</span>
                </div>  
                <div class="d-flex justify-content-start align-items-center">
                    <div class="hor" style="background-color: #ccc"></div>
                </div>
            </div>

            <div class="form-area" v-show="stage == 1">
                <div class="heading">What's the patient name?</div>

                <form @submit.prevent="stage++">
                    <div class="form-group">
                        <label class="colored-text">Surname (Family Name)</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" v-model="formData.lastName" required>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <label class="colored-text">Middle Name</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" v-model="formData.middleName" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">First Name (Given Name)</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" v-model="formData.firstName" required>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <button class="btn colored-text">Next</button>
                        <div class="colored-text">1/2</div>
                    </div>
                </form>
            </div>

            <div class="form-area" v-show="stage == 2">
                <div class="heading">Other details</div>

                <form @submit.prevent="addPatient">
                    <div class="form-group">
                        <label class="colored-text">Gender</label>
                        <div>
                            <select class="form-control" v-model="formData.gender" required>
                                <option selected hidden>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <label class="colored-text">BirthDate</label>
                        <div>
                            <input type="date" placeholder="Details Here" class="form-control" v-model="formData.dob" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="colored-text">Phone Number</label>
                        <div>
                            <input type="text" placeholder="Details Here" class="form-control" v-model="formData.phoneNumber" required>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <button class="btn colored-text">Submit</button>
                        <div class="colored-text">{{ stage }}/2</div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios'
  export default {
    data(){
      return {
        classes: ['new-patient center-element', 'close-btn flex-center', 'fa fa-times', 'close-btn d-flex justify-content-end pointer mb-4'],
        show: true,
        stage: 1,
        formData: {
            firstName: "",
            lastName: "",
            middleName: "",
            gender: "Select Gender",
            dob: "",
            phoneNumber: ""
        }
      }
    },
    methods: {
      closeModal(e){
        if(this.classes.includes(e.target.className)){
            console.log(e.target.className)
            this.$emit('close-modal')
        }
      },
      addPatient(){
        axios.post(`${this.$store.state.apiUrl}/patient`, this.formData, {
            headers: {
                "Authorization": `Bearer ${this.$store.state.auth.token}`
            }
        })
        .then(async res => {
            console.log(res.data)
            await this.$store.dispatch('getPatients');
            // this.stage = 1;
            this.$emit('close-modal')
        })
        .catch(error => console.log(error))
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
        height: 90%;
        width: 70%;
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
        color: #999999;
        font-size: 3rem;
      }
  
      .close-btn:hover {
        color: #000;
      }

      .top {
        align-items: flex-end;
        margin-bottom: 10px;
      }

      .top h4 {
        color: #646464;
      }

      .image-holder {
        height: 80px;
        width: 80px;
        border-radius: 100%;
        background-color: #dcdbdb;
        text-align: right;
        background: url('https://cdn-icons-png.flaticon.com/512/72/72737.png');
        background-size: cover;
        background-color: #ccc;
      }

      .profile-pic {
        display: grid;
        place-items: end;
      }

      .form h6 {
        color: #646464;
        font-weight: 600;
      }

      .form .process {
        flex: 1;
      }

      .form .process h6 {
        margin-bottom: 10px;
      }

      .process .flex-align {
        justify-content: start;
      }

      .process .hor {
        height: 50px;
        width: 2px;
      }

      .process .vert {
        height: 2px;
        width: 25px;
        margin-right: 10px;
      }

      .process span {
        font-weight: 500;
      }

      .form .form-area {
        flex: 3;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #eeee;
        border-radius: 10px;
        box-shadow: -7px 19px 28px -5px #65c4be50;
      }

      .form-area .heading {
        margin-bottom: 20px;
        color: #9e9e9e;
      }

      .form label {
        font-size: 14px;
        font-weight: 500;
      }

      form > div {
        margin-bottom: 20px;
      }

      form input, form select {
        font-size: 14px;
        padding: 10px;
        border: 2px solid #ddd;
        background-color: #f3f3f3;
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