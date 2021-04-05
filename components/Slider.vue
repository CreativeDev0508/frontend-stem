<template>
  <div class="mainbox">
    <transition-group name="fade" tag="div">
      <div class='imgbox' v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        'https://i.ibb.co/NS754ZN/35042784091-7d27e7b877-w.jpg',
        'https://i.ibb.co/4R7w4V8/34363953253-dfa06789c6-w.jpg',
        'https://i.ibb.co/G3mTcjW/34328700854-43e0d121a4-w.jpg',
        'https://i.ibb.co/D7J2QRm/35042783841-1dfa2a5ab5-w.jpg',
        'https://i.ibb.co/DDJd5tH/34786753930-21d6ea40b1-w.jpg',
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style>

.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.imgbox img {
    background-position: center; 
    background-size: cover;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   margin-top: 4%;
   margin-left: 3%;
   height: 100%;
   width: 100%;
}
 @media only screen and (max-width: 767px){
  .imgbox img{
    margin: 4% 2% auto;
  }
}


</style>