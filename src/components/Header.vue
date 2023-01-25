<template>
  <div class="header flex-align">
    <div>
        <h5 class="colored-text">Grace of God Medical Centre</h5>
    </div>

    <div>
        <h5 class="datetime">12th October, 2022 12:33PM</h5>
    </div>

    <div class="logged-in flex-align colored-text"> 
        <i class="fa fa-user-circle" style="font-size: 2.5rem;"></i>
        <div class="info colored-text">
            <div class="name">OluwaKorede Tunde</div>
            <div class="role">Clerk(Medical records)</div>
        </div>
        <div class="flex-align">
            <i class="fa fa-angle-down" style="font-size: 1rem;margin-right: 10px;"></i>
            <i class="fa fa-message" style="font-size: 1.8rem;"></i>
        </div>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        padding: 15px 5rem;
        margin-bottom: 20px;
        background-color: #fff;
    }

    .header h5 {
        font-size: 16px;
        font-weight: bold;
    }

    .datetime {
        color: #8D8D8E;
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
        width: 280px;
    }
</style>