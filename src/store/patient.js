import axios from "axios";
import store from ".";
import moment from 'moment'

export default {
    state: {
        patients: [],
        allPatients: [],
        patient: {}
    },
    getters: {
        patients(state){
            return state.patients
        },
        patient(state){
            return state.patient
        }
    },
    mutations: {
        fetchPatients(state, data){
            state.patients = data.patients
            state.allPatients = data.patients
        },
        fetchPatient(state, data) {
            state.patient = data.patient
            state.patient = data.patient
        }
    },
    actions: {
        getPatients({commit}){
            axios.get(`${store.state.apiUrl}/patients`, {
                headers: {
                    "Authorization": `Bearer ${store.state.auth.token}`
                }
            })
            .then(res => {
                commit('fetchPatients', {
                    patients: res.data.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
        },
        getPatientInfo({commit, state}, id){
            axios.get(`${store.state.apiUrl}/patient/${id}`, {
                headers: {
                    "Authorization": `Bearer ${store.state.auth.token}`
                }
            })
            .then(res => {
                const currentDate = new Date();
                const dob = res.data.data?.patient?.dob;
        
                const a = moment(currentDate); // Now
                const b = moment(dob); // Date of birth
        
                const age = a.diff(b, 'years'); // Get the difference in years between dates using moment.js
                res.data.data.patient.age = age;    

                commit('fetchPatient', {
                    patient: res.data.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}