<template>
    <div >
        <div class="header-countdown pt-70 d-flex justify-content-center">
            <div class="single-count-content count-color-1">
                <span class="count">{{ days | twoDigits }}</span><p class="text">Days</p>
            </div>
            <div class="single-count-content count-color-2">
                <span class="count">{{hours | twoDigits}}</span><p class="text">Hours</p>
            </div>
            <div class="single-count-content count-color-3">
                <span class="count">{{minutes | twoDigits}}</span><p class="text">Minutes</p>
            </div>
            <div class="single-count-content count-color-4">
                 <span class="count">{{seconds | twoDigits}}</span><p class="text">Seconds</p>
            </div>
        </div>
    </div>
</template>
<script>
let interval = null;
export default {
    props: {
        deadline: {
            type: String
        },
        end: {
            type: String
        },
        stop: {
            type: Boolean
        }
    },
   data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0
        }
    },
   created() {
        if (!this.deadline && !this.end) {
            throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.deadline ? this.deadline : this.end;
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
                // Remove interval
                clearInterval(interval);
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