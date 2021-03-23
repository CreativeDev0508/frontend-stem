<template>
    <transition name="fade">
<div class="c_modal" tabindex="-1" role="dialog" aria-labelledby="regModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">REGISTRATION<br>
            <p class="tmc">Clicking Register Means You're Agreed To The <a href="/toc" target="_blank">Terms & Conditions!</a></p></h4>
             <img src="../assets/images/cancel.png" class="cancelbtn" @click="$emit('closeRmodal')">
        </div>
      <form class="" @submit.prevent="registerSelf">
        <div class="regform">
        <label><input class="form-control shadow-none" required v-model="form.firstname" type="text" placeholder="First Name"/><span>First Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.lastname" type="text" placeholder="Last Name"/><span>Last Name *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.email" type="email" placeholder="Email Address"/><span>Email *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.password" type="password" placeholder="Password"/><span>Password *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.phone" type="phone" placeholder="Contact Number"/><span>Mobile *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.class" type="text" title="Your current class which you are read in. example: class-10 " placeholder="Class (ex: class-8)"/><span>Class *</span></label>
        <label><input class="form-control shadow-none" required v-model="form.institution" type="text" placeholder="Institution/Office Name"/><span>Institution *</span></label>
        <label><input class="form-control shadow-none" v-model="form.membership" type="text" placeholder="American /EMK center membership ID number"/><span>MemberShip(Optional)</span></label>
        <select class="form-control shadow-none" required v-model="form.category">
            <option disabled>Choose Category</option>
            <option>Class 8 - 10</option>
            <option>Class 10 - 12</option>
            <option>Undergraduate</option>
          </select>
        <div class="c_check">
           <label for="z"> <p>Are You a Girl? </p><input type="checkbox" id="z" required/></label>
        </div>
        </div>
        <div class="f_footer"><button class="btn btn-primary" :disabled="btndisabled"> REGISTER</button></div>
      </form>
    </div>
  </div>
</div></transition>
</template>

<script>
export default {
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
          category:null,
          password:null,
          class:null

      }
        }
    },
     methods: {
      registerSelf: async function(){
        this.$emit('startLoader')
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
                 this.$emit('closeRmodal')
                //this.sendMail(this.form.email)
            }
           this.$emit('stopLoader')
            this.btndisabled=false
           
            
      },
      sendMail(to){
          this.$axios.$post('https://madmail.herokuapp.com/api/send', {
             to:to,
             subject:'STEM OLYMPIAD',
             msg:'Your Registration for STEM-OLYMPIAD organized by US Embassy & Robolab has been successful! Thanks.'
            })
      },
  },
}
</script>

<style>
.c_check{
  text-align: center;
  padding: 5px;
}
.c_check input {
  position: absolute;
 vertical-align: middle;
 margin-top: 5px;
 margin-left: 67%;
}
.c_check label p {
  position: absolute;
  vertical-align: middle;
  color: #000;
  margin-left: 20%;
}
</style>