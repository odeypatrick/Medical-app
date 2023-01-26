import axios from 'axios'
import router from '../router/index'
import store from '.';

export default {
    state: {
        token: null,
        userId: null,
        apiUrl: 'http://localhost:5000/api',
        user: {
          firstName: '',
          lastName: '',
          role: '',
          department: ""
        },
        loginError: "",
        loginSuccess: "",
        fetchError: "",
        loading: false,
        editSecondaryProfile: false,
        generalMessage: ""
    },
    getters: {
        user(state){
            return state.user;
        },
        isAuthenticated(state) {
            return state.token !== null;
        }
    },
      mutations: {
        loginUser(state, authData){
            state.userId = authData.userId
            state.token = authData.token
        },
        fetchUserData(state, data) {
          state.user = data.user
        }
    //     logout(state) {
    //       state.user = {},
    //       state.loginSuccess = ""
    //       state.userId = "",
    //       state.token = ""
    //     }
      },
      actions: {
        login({commit, state}, authData) {
          state.loading = true
            axios.post(`${state.apiUrl}/user/login`, authData)
            .then((res) => {
        //       state.loginSuccess = "Login successful"
        //       state.generalMessage = { type: 1, text: "Login successful!" }
        //       state.loginError = ""
        //       state.loading = false
        //       setTimeout(() => {
        //         state.generalMessage = ""
        //       }, 3000)

              commit('loginUser', {
                token: res.data.data.token,
                userId: res.data.data.userId
              })

              // Store token and userId in local storage
              localStorage.setItem("token", res.data.data.token)
              localStorage.setItem("userId", res.data.data.userId)

              store.dispatch('fetchUser')
              
            })
            .catch(err => {
              state.loginError = `${err.response?.data.message ? err.response?.data.message : '[Login failed]' + err }`
              state.loginSuccess = ""
              state.loading = false
              console.log(err)
            })
          },
        //   preSignup({commit, state}, authData) {
        //     state.loading = true
        //       axios.post(`${state.apiUrl}/user/pre-signup`, authData)
        //       .then((res) => {
        //         state.loginSuccess = res.data.message
        //         state.generalMessage = { type: 1, text: res.data.message }
        //         state.loginError = ""
        //         state.loading = false
        //         setTimeout(() => {
        //           state.generalMessage = ""
        //         }, 3000)
  
        //         console.log(res.data.message)
        //       })
        //       .catch(err => {
        //         state.loginError = `[signup failed] ${err.response?.data.message ? err.response?.data.message : err }`
        //         state.generalMessage = { type: 0, text: err.response?.data.message ? err.response?.data.message : err }
        //         state.loginSuccess = ""
        //         state.loading = false
        //         setTimeout(() => {
        //           state.generalMessage = ""
        //         }, 3000)
        //         console.log(err)
        //       })
        //     },
        //   signup({commit, state}, token) {
        //     state.loading = true
        //       axios.post(`${state.apiUrl}/user/signup`, {
        //         name: "signup"
        //       } ,{
        //         headers: {
        //           "Authorization": `Bearer ${token}` 
        //         }
        //       })
        //       .then((res) => {
        //         state.loginSuccess = "Login successful"
        //         state.generalMessage = { type: 1, text: "Login successful!" }
        //         state.loginError = ""
        //         state.loading = false
        //         setTimeout(() => {
        //           state.generalMessage = ""
        //         }, 3000)
  
        //         commit('loginUser', {
        //           token: res.data.data.token,
        //           userId: res.data.data.userId
        //         })
  
        //         localStorage.setItem("userId", res.data.data.userId)
        //         localStorage.setItem("token", res.data.data.token)
  
        //         router.replace('/dashboard');
        //       })
        //       .catch(err => {
        //         alert(err.response?.data.message ? err.response?.data.message : 'Token has expired' )
        //         // state.loginError = `[Login failed] ${err.response?.data.message ? err.response?.data.message :  }`
        //         state.loginSuccess = ""
        //         state.loading = false
        //       })
        //     },
        fetchUser({commit, state}) {
            if(localStorage.getItem("token")) {
                axios.get(`${state.apiUrl}/user/info`, {
                    headers: {
                        "Authorization":`Bearer ${state.token}`
                    }
                })
                .then(res => {
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    console.log(res.data)
                    commit('fetchUserData', {
                        user: res.data.data,
                    })
                })
                .catch(err => {
                    state.loginError = `[failed] ${err}`
                    console.log(err)
                })
            }
        },
        autoLogin({commit}) {
            const token = localStorage.getItem("token")
            const userId = localStorage.getItem("userId")
            commit('loginUser', {
                token,
                userId
            })
        },
        //     logoutUser({ commit }) {
        //         localStorage.removeItem("token")
        //         localStorage.removeItem("userId")
        //         localStorage.removeItem("user")
        //         commit('logout');
        //         router.replace('/login');
        //     }
    }
}