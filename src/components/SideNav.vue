<template>
  <div class="side-bar p-3 bg-white">
    <div class="menu-bar">
        <i class="pi pi-bars" style="font-size: 20px"></i>
    </div>
    <div class="links">
        <router-link to="/" exact="">
            <i class="pi pi-home"></i>
        </router-link>
        <router-link to="/search">
            <i class="pi pi-search"></i>
        </router-link>
        <router-link to="/notifications" exact-active-class="">
            <i class="pi pi-bell"></i>
        </router-link>
        <router-link to="/calender" exact-active-class="">
            <i class="pi pi-calendar"></i>
        </router-link>
        <router-link to="/settings" exact-active-class="">
            <i class="pi pi-cog"></i>
        </router-link>
        <router-link to="/help" exact-active-class="">
            <i class="pi pi-question-circle"></i>
        </router-link>
        <router-link to="/darkmode" exact-active-class="">
            <i class="pi pi-moon"></i>
        </router-link>

        <div class="user-icon colored-text">
            <i class="pi pi-user" style="font-size: 2rem; margin-right: 10px"></i>  
        </div>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .side-bar {
        height: 100%;
        box-shadow: 1px -2px 5px 1px#65C4BD3D;
        border-radius: 10px;
        position: fixed;
        top: 100px;
        width: 80px;
        background-color: #fff;
        z-index: 1;
    }

    .menu-bar {
        margin-bottom: 1rem;
        color: #478984;
        padding: 15px;
    }

    .links a {
        display: block;
        color: inherit;
        font-size: 18px;
        padding: 10px 13px;
        margin-bottom: 10px;
        border-radius: 5px;
        text-align: center;
        width: fit-content
    }

    .links a:hover {
        background-color: #f3f3f3;
        /* color: #fff; */
    }

    .links a.router-link-exact-active {
        background-color: #478984;
        color: #fff;
    }

    .links {
        position: relative;
        height: 80%;
    }

    .user-icon {
        padding: 5px;
        position: absolute;
        bottom: 10px;
    }
</style>