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
        },
        logout(state) {
          state.user = {},
          state.loginSuccess = ""
          state.userId = null,
          state.token = null
        }
      },
      actions: {
        login({commit, state}, authData) {
            state.loading = true
                axios.post(`${state.apiUrl}/user/login`, authData)
                .then((res) => {
                  state.loginSuccess = "Login successful"
                  state.generalMessage = { type: 1, text: "Login Successful!" }
                  state.loginError = ""
                  state.loading = false
                  setTimeout(() => {
                    state.generalMessage = ""
                  }, 3000)

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
                    state.generalMessage = { type: 0, text: err.response?.data.message || err }
                    setTimeout(() => {
                        state.generalMessage = ""
                      }, 3000)
                    state.loginSuccess = ""
                    state.loading = false
                    console.log(err)
                })
        },
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
                    state.generalMessage = { type: 0, text: err.response?.data.message || err }
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
        logoutUser({ commit }) {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("user")
            commit('logout');   
            router.replace('/');
        }
    }
}