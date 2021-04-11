<template>
<div>
 
   <LoaderHome v-show="loading" ></LoaderHome>

    <HeaderHome @openSign='showModalS = !showModalS' @openReg='showModalR=!showModalR'></HeaderHome>
   <Carousel></Carousel>
   <AboutHome></AboutHome>
    <MackerSpace></MackerSpace>
   <!-- <FeatureHome></FeatureHome> -->

   <RegModal v-if="showModalR" @closeRmodal='showModalR=false' @startLoader="loading=true" @stopLoader="loading=false"></RegModal>
  
  <LoginHome v-if="showModalS" @closeSmodal='showModalS=false' @startLoader="loading=true" @stopLoader="loading=false"></LoginHome>

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
import LoaderHome from '../components/LoaderHome'
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
      LoaderHome,
      Carousel,
      RegModal,
      MackerSpace,
      LoginHome,
  },

  data() {
    return {
      showModalR:false,
      showModalS:false,
      loading:false,
    }
  },
 
}
</script>






















<style>
.cancelbtn{
    top:0;
    right: 0;
    float: right;
    position: absolute;
    height: 15px;
    width: 15px;
    cursor: pointer;
}
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
