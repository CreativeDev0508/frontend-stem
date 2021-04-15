<template>
<transition name="fade">
    <div class="c_modal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">SIGN IN<br>
                <p class="tmc">Please Enter Your Registered Email & Password or <NuxtLink to="/register">Register Now!</NuxtLink></p></h4>
                <img src="../assets/images/cancel.png" class="cancelbtn" @click="$emit('closeSmodal')">
            </div>
            <form @submit="loginUser">
            <div class="regform">
            <label><input class="form-control shadow-none" v-model="identifier" required type="email" placeholder="Email"/><span>Email *</span></label>
            <label><input class="form-control shadow-none" v-model="password" required type="password" placeholder="Password"/><span>Password *</span></label>
            </div>
            <div class="f_footer">
              <button v-if="!loading" class="btn btn-primary"> Log In</button>
              <data-load v-else></data-load>
              </div>
            </form>
        </div>
        </div>
    </div>  
</transition>
</template>

<script>
import DataLoad from './DataLoad.vue'
export default {
  components:{
    DataLoad
  },
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
      loading:false
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      this.loading=true
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        console.log(user)
        if (user !== null) {
          this.error = ''
          localStorage.setItem('user',user)
          this.$nuxt.$router.push('/profile')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
        this.$notify({ group: 'all', title:"Failed!", text:error ,duration: 5000, type:'error' })
      }
      this.loading=false
    },
  },
}
</script>