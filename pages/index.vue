<template>
<div>
 
   <LoaderHome v-show="loading" ></LoaderHome>

    <HeaderHome @openSign='showModalS = !showModalS' @openReg='showModalR=!showModalR'></HeaderHome>
   <Carousel></Carousel>
   <AboutHome></AboutHome>
    <MackerSpace></MackerSpace>
   <!-- <FeatureHome></FeatureHome> -->

   <RegModal v-if="showModalR" @closeRmodal='showModalR=false' @startLoader="loading=true" @stopLoader="loading=false"></RegModal>

<transition name="fade">
    <div v-if="showModalS" class="c_modal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">SIGN IN<br>
                <p class="tmc">Please Enter Your Registered Email & Password or <NuxtLink to="/register">Register Now!</NuxtLink></p></h4>
                <img src="../assets/images/cancel.png" class="cancelbtn" @click="showModalS=false">
            </div>
            <form class="" action="">
            <div class="regform">
            <label><input class="form-control shadow-none" required type="email" placeholder="Email"/><span>Email *</span></label>
            <label><input class="form-control shadow-none" required type="password" placeholder="Password"/><span>Password *</span></label>
            </div>
            <div class="f_footer"><button class="btn btn-primary" > Log In</button></div>
            </form>
        </div>
        </div>
    </div>  
</transition>

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
