<template>
  <div class="side-bar p-3 bg-white">
    <div class="menu-bar">
        <i class="fa fa-bars" style="font-size: 20px"></i>
    </div>
    <div class="links">
        <router-link to="/">
            <i class="fa fa-home"></i>
        </router-link>
        <router-link to="/search">
            <i class="fa fa-search"></i>
        </router-link>
        <a href="#">
            <i class="fa fa-bell"></i>
        </a>
        <a href="#">
            <i class="fa fa-calendar"></i>
        </a>
        <a href="#">
            <i class="fa fa-cog"></i>
        </a>
        <a href="#">
            <i class="fa fa-question-circle"></i>
        </a>
        <a href="#">
            <i class="fa fa-moon"></i>
        </a>
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
        margin-left: 10px;
        top: 100px;
    }

    .menu-bar {
        margin-bottom: 1rem;
        color: #478984;
        padding: 15px;
    }

    .links a {
        display: block;
        color: inherit;
        font-size: 20px;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .links a:hover {
        background-color: #4da88a;
        color: #fff;
    }
</style>