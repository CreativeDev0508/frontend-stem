<template>
   <div class="examhead ">
        <h5 class="catname">{{cat}}</h5>
         <div :class="{ redalart: isRedAlart }">{{ minutes | twoDigits }} : {{ seconds | twoDigits}}</div>
    </div>
</template>

<script>
let interval = null;
export default {
     props:{
        cat:{
            type:String
        },
        submitted:{
            type:Number
        },
        stop: {
            type: Boolean
        },
        end:{
            type: String
        },
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
        },
        submitted(){
            this.$emit('TimeNowx',this.diff)
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
.examhead{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    position: sticky;
    position: -webkit-sticky;
    top: 1px;
    z-index: 999;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight:bold;
    background-image: linear-gradient(to right, rgba(51, 157, 243, 0.952), rgba(90, 0, 78, 0.87));
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.timer,.catname{
    font-size: 1.5rem;
     color: white;
}
.catname{
    padding-left: 0;
   
}
</style>