<template>
  <div class="bg_cover">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="require(`~/assets/images/blackbg.png`)" />
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
        "blackbg",
        "1",
        "1",
        "1"
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
   height: 100%;
   overflow: hidden;
   width:100%;
   position: absolute;
   z-index: -1;
}
.bg_cover{
   width: 100%;
   height: 100%;
   position: absolute;
   background-position: center center;
   background-size: cover;
}

</style>