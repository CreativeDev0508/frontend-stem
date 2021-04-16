<template>
  <transition name="fade">
    <div class="out">
        <img src="../assets/images/cancel.png" class="cancelbtn" @click="$emit('closeLive')">
        <iframe class="sec" :src="url + '&autoplay=1'"
         :width="width"
          :height="height"
           style="border:none;overflow:hidden"
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
    </div>
  </transition>
</template>

<script>


export default {
  props:{
      width:{
          type:Number,
          default:860
      },
      height:{
          type:Number,
          default:550
      },
      url:{
          type:String
      },

  }
}
</script>

<style scoped>
.out{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation-name: animatetop;
    animation-duration: 0.4s;
    z-index: 16;
}
.cancelbtn{
  z-index: 999;
  width: 35px;
  height: 35px;
  margin: 5px;
  padding: 5px;
  position: absolute;
  top: 0px;
  right: 0px;
}
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}
@media only screen and (max-width: 990px){
  .out iframe{
      width: 92vw;
      max-height: 65vh;
  }
  .cancelbtn{
    width: 30px;
    height: 30px;
    margin: 8px;
  }
 }

</style>