<template>
  <div class="tab text-center" :style="active == false ? 'background-color: #6a6a6a;' : 'background-color: #fff;color: #478984'">
    {{ value  }}
  </div>
</template>

<script>
export default {
    props: {
        value: String,
        active: Boolean
    }
}
</script>

<style scoped>
    .tab {
        padding: 1rem;
        color: #fff;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        font-size: 14px;
        width: 100%;
        font-weight:600;
        cursor: pointer;
    }
</style>