<template>
    <div >
        <div class="header-countdown pt-70 d-flex justify-content-center">
            <div class="single-count-content count-color-1">
                <span class="count">{{days.toString().length > 1 ? days : '0'+days}}</span><p class="text">Days</p>
            </div>
            <div class="single-count-content count-color-2">
                <span class="count">{{hours.toString().length > 1 ? hours : '0'+hours}}</span><p class="text">Hours</p>
            </div>
            <div class="single-count-content count-color-3">
                <span class="count">{{minutes.toString().length > 1 ? minutes : '0'+minutes}}</span><p class="text">Minutes</p>
            </div>
            <div class="single-count-content count-color-4">
                 <span class="count">{{seconds.toString().length > 1 ? seconds : '0'+seconds}}</span><p class="text">Seconds</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
 props: ['starttime','endtime'] ,
  data: function(){
      return{
      timer:"",
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",

    };
  },
  mounted(){
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start,end){
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = start - now;
        var passTime =  end - now;

        if(distance < 0 && passTime < 0){
            this.days=0
            this.hours=0
            this.minutes=0
            this.seconds=0
        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);

        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance); 
         
        }
    },
    calcTime: function(dist){
      // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }

  }
}
</script>