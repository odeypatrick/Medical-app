<template>
    <div class="tab-details">
        <div>
            <div class="msg" v-if="vital?.temperature">
                <small>No Recent Vitals</small>
            </div>
            <div class="vital-info" v-else>
                <div>Last Checked</div>
                
                <div class="vital">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>

                    <div class="flex-align">
                        <div class="item">Date:</div>
                        <div class="value">21/12/23</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">Temperature</div>
                        <div class="value">29 C</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">Height</div>
                        <div class="value">5ft 7</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">Weight</div>
                        <div class="value">37Kg</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">Blood Pressure</div>
                        <div class="value">456mmHG</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">Pulse rate</div>
                        <div class="value">23m/s</div>
                    </div>
                    <div class="flex-align">
                        <div class="item">BMI</div>
                        <div class="value">56Kg/ft</div>
                    </div>
                </div>
            </div>
            <div>
                <button class="btn colored-text" @click="$emit('showModal')">Add New Vitals +</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vital: {

            }
        }
    }
}
</script>

<style scoped>
    .tab-details {
        background-color: #ebebeb;
        min-height: 400px;
        border-radius: 10px;
        padding: 2rem;
    }

    .btn {
        padding: 0;
    }

    .btn:hover {
        text-decoration: underline;
    }

    .msg {
        margin-bottom: 20px;
        font-weight: 500;
    }

    .vital-info > div:first-child {
        margin-bottom: 14px;
        font-weight: 500;
    }

    .vital {
        width: 250px;
        min-height: 200px;
        background-color: #fff;
        margin-bottom: 25px;
        border-radius: 5px;
        position: relative;
        padding: 20px 10px;
        font-size: 14px
    }

    .vital .flex-align {
        justify-content: flex-start;
        gap: 1em;
        margin-bottom: 10px;
    }

    .vital .item {
        font-weight: 700;
    }

    .vital .value {
        font-weight: 500;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: 10px;
    }
</style>