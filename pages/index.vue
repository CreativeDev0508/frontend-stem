<template>
<div>
 
   <LoaderHome v-show="loading" ></LoaderHome>

    <HeaderHome @openSign='showModalS = !showModalS' @openReg='showModalR=!showModalR'></HeaderHome>
   <Carousel></Carousel>
   <AboutHome></AboutHome>
    <MackerSpace></MackerSpace>
   <!-- <FeatureHome></FeatureHome> -->

   <RegModal v-if="showModalR" @closeRmodal='showModalR=false'></RegModal>
  
  <LoginHome v-if="showModalS" @closeSmodal='showModalS=false'></LoginHome>

<ContactHome></ContactHome>

<FooterHome></FooterHome>

</div>
</template>










<script>
import HeaderHome from '../components/HeaderHome'
import FeatureHome from '../components/FeatureHome'
import AboutHome from '../components/AboutHome'
import ContactHome from '../components/ContactHome'
import FooterHome from '../components/FooterHome'
import Carousel from '../components/Carousel'
import RegModal from '../components/RegModal'
import MackerSpace from '../components/MackerSpace'
import LoginHome from '../components/LoginHome'
export default {
  components:{
      HeaderHome,
      FeatureHome,
      AboutHome,
      ContactHome,
      FooterHome,
      Carousel,
      RegModal,
      MackerSpace,
      LoginHome,
  },

  data() {
    return {
      showModalR:false,
      showModalS:false,
    }
  },
 
}
</script>






















<style>
.c_modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 16;
  overflow-x: hidden;
  overflow-y: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
