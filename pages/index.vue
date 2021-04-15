<template>
<div>
    <HeaderHome @openLive="liveFrame=true" :isLive="isLive" @openSign='showModalS = !showModalS' @openReg='showModalR=!showModalR'></HeaderHome>
    <live-page v-if="liveFrame && isLive" :url="LiveURL" @closeLive="liveFrame = false" :height="height" :width="width"></live-page>
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
import LivePage from '../components/LivePage.vue'
import {getcontrols} from '../graphql/query'
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
      LivePage,
  },

  data() {
    return {
      showModalR:false,
      showModalS:false,
      liveFrame:true,
    }
  }, 
  async asyncData({ $strapi }){
    let ctl = await $strapi.graphql({
      query:getcontrols
    })
    var LiveURL = ctl.controls[0].LiveURL
    let isLive = ctl.controls[0].GoLive
    let platform = ctl.controls[0].Platform
    let height =ctl.controls[0].Height
    let width =ctl.controls[0].Width
    return {LiveURL,isLive,platform,height,width}
  }
 
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
