<template>
<div>
 
   <LoaderHome v-if="loading"></LoaderHome>

    <HeaderHome @openSign='showModalS = !showModalS' @openReg='showModalR=!showModalR'></HeaderHome>

   <AboutHome></AboutHome>

   <FeatureHome></FeatureHome>

   <!-- MODAL FOR REGISTRATION -->
<!-- Modal -->
<transition name="fade">
<div  v-if="showModalR" class="c_modal" tabindex="-1" role="dialog" aria-labelledby="regModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">REGISTRATION<br>
            <p class="tmc">Clicking Register Means You're Agreed To The <a href="toc.html">Terms & Conditions!</a></p></h4>
             <img src="../assets/images/cancel.png" class="cancelbtn" @click="showModalR=false">
        </div>
      <form class="" @submit.prevent="registerSelf">
        <div class="regform">
        <label><input class="form-control shadow-none" required v-model="form.firstname" type="text" placeholder="First Name"/><span>First Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.lastname" type="text" placeholder="Last Name"/><span>Last Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.email" type="email" placeholder="Email Address"/><span>Email *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.password" type="password" placeholder="Password"/><span>Password *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.phone" type="phone" placeholder="Contact Number"/><span>Mobile *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.institution" type="text" placeholder="Institution/Office Name"/><span>Institution *</span></label>
        <label><input class="form-control shadow-none" v-model="form.membership" type="text" placeholder="American /EMK center membership ID number"/><span>MemberShip(Optional)</span></label>
        <select class="form-control shadow-none" required v-model="form.category">
            <option disabled>Choose Category</option>
            <option>Class 8 - 10</option>
            <option>Class 10 - 12</option>
            <option>Undergraduate</option>
          </select>
        </div>
        <div class="f_footer"><button class="btn btn-primary" :disabled="btndisabled"> REGISTER</button></div>
      </form>
    </div>
  </div>
</div></transition>

<transition name="fade">
    <div v-if="showModalS" class="c_modal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">SIGN IN<br>
                <p class="tmc">Enter Your Eleven Digit Phone Number & Password Received by Email.</p></h4>
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
export default {
  components:{
      HeaderHome,
      FeatureHome,
      AboutHome,
      ContactHome,
      FooterHome,
      LoaderHome
  },

  data() {
    return {
      showModalR:false,
      showModalS:false,
      loading:false,
      error:false,
      btndisabled:false,
      form:{
          firstname:null,
          lastname:null,
          email:null,
          phone:null,
          institution:null,
          membership:null,
          category:null,
          password:null

      }
    }
  },
  methods: {
      registerSelf: async function(){
          this.btndisabled=true
          this.loading=true
          let res=null
          res= await this.$strapi.register({ username: this.form.email,
            email: this.form.email, 
            password: this.form.password,
            Phone:this.form.phone,
            Fullname: this.form.firstname+' '+ this.form.lastname,
            Institution:this.form.institution,
            Membership:this.form.membership,
            Category:this.form.category
          }).catch((err) =>{
              this.error=true
               this.$notify({ group: 'all', title:"Failed!", text:err ,duration: 5000, type:'error' })
            });
    
            if(res && res!=null && res.user!=null){
                this.$notify({ group: 'all', title:"SUCCESS!", text: 'Kindly Check Your Provided Email For Your Login Info! Thanks.',duration: 15000, type:'success' })
            }
            this.loading=false
            this.showModalR=false
            this.btndisabled=false
           
            
      },
      getApass(){
          return "a new pass"
      },
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
