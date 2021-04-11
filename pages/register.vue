<template>

  <div>
   <LoaderHome v-if="loading"></LoaderHome>
    <transition name="fade">
<div class="c_modal" tabindex="-1" role="dialog" aria-labelledby="regModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">EASY REGISTRATION<br>
            <h5 class=""> of <a href="/" >STEM Olympiad 2021</a> </h5>
            <p class="tmc">Clicking Register Means You're Agreed To The <a href="/toc" target="_blank"> <strong> Terms &amp; Conditions!</strong></a></p></h4>
        </div>
      <form class="" @submit.prevent="registerSelf">
        <div class="regform">
        <label><input class="form-control shadow-none" required v-model="form.firstname" type="text" placeholder="First Name"/><span>First Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.lastname" type="text" placeholder="Last Name"/><span>Last Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.email" type="email" placeholder="Email Address"/><span>Email *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.password" type="password" placeholder="Password"/><span>Password *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.phone" type="phone" placeholder="Contact Number"/><span>Mobile *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.class" type="text" title="Your current class which you are read in. example: class-10 " placeholder="Class (ex: class-8 or Undergraduate-1st year)"/><span>Class *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.institution" type="text" placeholder="Institution/Office Name"/><span>Institution *</span></label>
        <label><input class="form-control shadow-none" v-model="form.membership" type="text" title="American /EMK center membership ID number" placeholder="(Optional) American /EMK center membership ID number"/><span>MemberShip(Optional)</span></label>
        <select class="form-control shadow-none" required v-model="form.category">
            <option value='' disabled>Choose Category</option>
            <option value="Class 8 - 10">Class 8 - 10</option>
            <option value="Class 11 - 12">Class 11 - 12</option>
            <option value="Undergraduate">Undergraduate</option>
          </select>
        </div>
          <div class="c_box box1">
           <label for="z"> <p><input type="checkbox" id="z" required/>   I Am a Girl. </p></label>
        </div>
          <div class="c_box box2">
           <label for="y"> <p><input type="checkbox" id="y" required/>   I'm aware that my participation in the event will be recorded &amp; streamed in social media. </p></label>
        </div>
        <div class="f_footer"><button class="btn btn-primary" :disabled="btndisabled"> REGISTER</button></div>
      </form>
    </div>
  </div>
</div></transition>
</div>

</template>

<script>
import LoaderHome from '../components/LoaderHome'
export default {
    head: {
    title: 'STEM Olympiad Easy Registration',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STEAM Olympiad is Organized by U.S. Embassy Dhaka and Robolab. Register now!' }
    ],
  },
    components:{
        LoaderHome
    },
    data(){
        return{
       error:false,
      btndisabled:false,
      form:{
          firstname:null,
          lastname:null,
          email:null,
          phone:null,
          institution:null,
          membership:null,
          category:'',
          password:null,
          class:null

      },
      loading:false,
        }
    },
     methods: {
      registerSelf: async function(){
        this.loading=true
          this.btndisabled=true
          let res=null
          res= await this.$strapi.register({ username: this.form.email,
            email: this.form.email, 
            class:this.form.class,
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
                this.$notify({ group: 'all', title:"SUCCESS!", text: 'Your Registration for STEM Olympiad 2021 has been successful. Thanks!',duration: 15000, type:'success' })
                this.sendMail(this.form.email)
                this.$router.push('/')
            }
           this.loading=false
            this.btndisabled=false
           
            
      },
       sendMail(to){
        try{
            this.$axios.$post('https://madmailserver.herokuapp.com/api/send', {
             mailOptions : {
                  from: "STEM Olympiad 2021 <madmailserver@gmail.com>",
                  to: to,
                  subject: "STEM OLYMPIAD REGISTRATION",
                  text: "Your Registration for STEM-OLYMPIAD organized by US Embassy & Robolab has been successful! Thanks."
              }
            })
        }
        catch(err){
          console.log(err)
        }
      },
  },
  middleware: 'authenticated',
}
</script>
