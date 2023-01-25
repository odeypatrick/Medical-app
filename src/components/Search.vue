<template>
  <div class="search">
   <div class="wrapper flex-align">
    <div class="navigation flex-align colored-text">
        <div style="margin-right: 10px">
            <i class="fa fa-arrow-left"></i>
        </div>
        <div>
            <i class="fa fa-arrow-right"></i>
        </div>
    </div>
    <div class="mid flex-align">
        <div class="history colored-text">
            <i class="fa fa-history"></i>
        </div>
        <div class="search-box flex-align">
            <div class="icon">
                <i class="fa fa-search"></i>
            </div>
            <input type="text">
            <div  class="filter flex-align">
                <span>Sort By</span>
                <i class="fa fa-angle-down"></i>
            </div>
        </div>
    </div>

    <div class="advanced">
        <i class="fa fa-filter" style="margin-right: 10px"></i> Advance Search
    </div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .search  {
        height: 120px;
        margin: 20px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .wrapper > div:nth-child(1) {
        flex: 0.3;
    }

    .wrapper > div:nth-child(2) {
        flex: 4;
    }

    .wrapper > div:nth-child(3) {
        flex: 1;
    }

    .wrapper {
        width: 75%;
        gap: 2rem;
        margin: 0 auto;
        padding-top: 10px;
    }

    .navigation div {
        opacity: 0.5;
    }

    .navigation div, .history {
        height: 40px;
        width: 40px;
        display: grid;
        place-items: center;
        background-color: #fff;
        border-radius: 5px;
    }

    .history {
        flex: 0.5;
        margin-right: 10px;
    }

    .search-box {
        background-color: #fff;
        border-radius: 10px;
        flex: 7;
        box-shadow: 0px 5px 20px 0px #65c4be56;
    }

    .search-box .icon {
        flex: 0.5;
        text-align: right;
        font-size: 20px;
        color: #4da88a;
    }

    .search-box input {
        flex: 5;
        border: none;
        padding: 15px;
        outline: none;
        font-weight: bold;
        color: #707070;
    }

    .search-box .filter {
        flex: 1.5;
        color: #979797;
        border: 1px solid #4da88a60;
        padding: 15px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .wrapper .advanced {
        font-size: 15px;
    }
</style>