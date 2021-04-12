<template>
<div>
    <div :class="{ redalart: isRedAlart }" v-if="onlyminutes">{{ minutes | twoDigits }} : {{ seconds | twoDigits}}</div>
    <div v-else>{{ days | twoDigits }} days : {{ hours | twoDigits }} Hours
        : {{ minutes | twoDigits }} Minutes : {{ seconds | twoDigits}} Seconds</div>
</div>
</template>
<script>
let interval = null;
export default {
    props: {
        stop: {
            type: Boolean
        },
        end:{
            type: String
        },
        onlyminutes:{
            type: Boolean,
            default:false
        }
    },
   data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0,
            isRedAlart: false,
        }
    },
   created() {
        if (!this.end) {
            throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.end;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline' or 'end'");
        }
        interval = setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60
        },
        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
    },
    watch: {
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                this.$emit('finished', this.onlyminutes)
                // Remove interval
                clearInterval(interval);
            }
            else if(this.diff < 120 && this.isRedAlart == false){
                this.isRedAlart = true
            }
        }
    },
    filters: {
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    destroyed() {
        clearInterval(interval);
    }
}
</script>

<style>
 .redalart{
     color: red;
 }
</style>