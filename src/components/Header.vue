<template>
  <div class="header flex-align">
    <div>
        <h5 class="colored-text logo">Grace of God Medical Centre</h5>
    </div>

    <div>
        <h5 class="datetime">{{ date }}</h5>
    </div>

    <div class="logged-in flex-align colored-text" v-if="isAuthenticated"> 
        <div class="flex-align">
            <i class="pi pi-user" style="font-size: 2.5rem; margin-right: 10px"></i>
            <div class="info colored-text">
                <div class="name">{{ user?.lastName }} {{ user?.firstName }}</div>
                <div class="role">{{ user?.role  }} {{ user?.department ? `(${user.department})` : null }}</div>
            </div>
        </div>
        <div class="flex-align">
            <i class="pi pi-angle-down dropdown" style="font-size: 1rem;margin-right: 10px;"></i>
            <i class="pi pi-comment" style="font-size: 1.8rem;"></i>
        </div>

        <!-- <div class="logout">
            <button>Logout</button>
        </div> -->
    </div>  
    
    <div v-else>
        <button @click="loginUser" class="btn btn-secondary">Login</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        ...mapGetters([
            'user',
            'isAuthenticated'
        ])
    },
    created() {
        this.$store.dispatch('fetchUser')
    },
    data(){
        return {
            formData: {
                email: "tunde@gmail.com",
                password: "password"
            },
            date: moment().format("DD MMMM YYYY hh:mmA")
        }
    },  
    methods: {
        loginUser(){
            this.$store.dispatch('login', this.formData)
        }
    }
}
</script>

<style scoped>
    .header {
        padding: 15px 4rem;
        margin-bottom: 20px;
        background-color: #fff;
    }

    .logo {
        letter-spacing: 0.1em;
    }

    .header h5 {
        font-size: 16px;
        font-weight: bold;
    }

    .datetime {
        color: #8f8f8f;
        font-weight: 500 !important;
    }

    .info .name {
        font-weight: 500;
        font-size: 14px;
    }

    .info .role {
        font-size: 12px;
        font-weight: 600;
    }

    .logged-in {
        gap: 1em;
    }
</style>