<template>
  <div class="search-result">
   <div class="wrapper">
    <div class="top flex-align">
        <div>
            <h4>
            Recent Search
            </h4>
            <h6 class="colored-text">Search Query: Last viewed</h6>
        </div>

        <button class="btn btn-lg" @click="$emit('showModal')" v-if="clerk">Add New Patient</button>
    </div>

    <div class="results">
        <div class="head flex-align colored-text">
            <div class="label label1">S/N</div>
            <div class="label">Patient ID</div>
            <div class="label">Names</div>
            <div class="label">Gender</div>
            <div class="label">Telephone Number</div>
            <div class="label">Payment Category</div>
        </div>
        <router-link to="/patient/1" class="value flex-align">
            <div class="label1">1</div>
            <div>004699</div>
            <div>Felix Anokwu John</div>
            <div>Male</div>
            <div>081  2130 2662</div>
            <div>Out of Pocket</div>
        </router-link>
        <div class="value flex-align">
            <div class="label1">2</div>
            <div>004699</div>
            <div>Felix Anokwu John</div>
            <div>Male</div>
            <div>081  2130 2662</div>
            <div>Out of Pocket</div>
        </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            clerk: true
        }
    }
}
</script>

<style scoped>
    .search-result {
        display: grid;
        place-items: center;
        margin-top: 2rem;
    }

    .wrapper {
        width: 80%;
    }

    .wrapper h4 {
        color: #707070;
    }

    .wrapper h6 {
        font-size: 15px;
        margin-bottom: 10px;
    }

    .top button {
        background-color: #5cb6ae;
        padding: 15px 30px;
        font-size: 15px;
        color:  #fff;
    }

    .head > div, .value > div {
        flex: 1;
        padding: 20px;
        font-size: 15px;
        font-weight: 600;
        /* align-items: center; */
        display: flex;
        justify-content: left;
    }
    .label1 {
        flex:0.5 !important;
    }

    .head {
        background-color: #E6E6E6;
        margin-bottom: 10px;
    }

    .value {
        background-color: #fff;
        margin-bottom: 10px;
        color: #999999;
    }
</style>