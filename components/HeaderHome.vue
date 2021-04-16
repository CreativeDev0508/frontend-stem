<template>
  <header class="header-area">
      <div class="warp">
        <div class="navbar-area navbar-two">
          <div class="container">

            <div class="row">
              <div class="col-lg-12">
                
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="index.html">
                    <img src="../assets/logo/use-dhaka-seal-PNG.png" alt="" class="mainlogo">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo"
                    aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation"
                    @click.stop="toggleNavbar()">
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse sub-menu-bar" id="navbarTwo" :class="{ 'show': show }">
                    <ul class="navbar-nav m-auto">
                      <li class="nav-item active">
                        <a class="page-scroll" href="#home">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#about">About Us</a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">Contact</a>
                      </li>
                      <li class="nav-item">
                        <a v-if="!$strapi.user" @click="$emit('openSign')" style="cursor:pointer;">Sign In</a>
                        <a v-else @click="logout" style="cursor:pointer;">Signout</a>
                      </li>
                      <li v-if="isLive" class="nav-item">
                        <a @click="$emit('openLive')" style="cursor:pointer;"><img src="../assets/images/live.gif" height="11px" style="padding:0px 3px 2px 0px;">LIVE</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-btn d-none d-sm-inline-block">
                     <img src="../assets/logo/robolab logo.png" alt="" class="robologo">
                     <a v-if="!$strapi.user" class="main-btn" @click="$emit('openReg')">Register Now</a>
                     <NuxtLink v-else class="main-btn" to="/profile">Profile</NuxtLink>
                  </div>
                </nav> <!-- navbar -->
              </div>
            </div> <!-- row -->
          </div> <!-- container -->
        </div>

        <div id="home" class="header-content-area bg_cov_main d-flex align-items-center">
          <!-- <Slider style="z-index:-1;"/> -->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="header-content text-center">
                 <h3 class="sub-title">FRIDAY, APRIL 16, 2021 &#9830; ONLINE EVENT</h3>
                 </div>
                <div>
                  <CountdownHome deadline="Apr 16 2021 15:00:00 GMT+6"></CountdownHome>
                </div>
                <div class="header-content text-center">
                  <h2 class="header-title">{{displayText.join('')}}</h2>
                  <ul class="header-btn">
                    <li><a class="main-btn main-btn-2" @click="$emit('openReg')">Register Now</a></li>
                    <li><a class="main-btn" href="#about">Learn More</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div> <!-- container -->
        </div> <!-- header content -->
      </div>
  </header>
</template>

<script>
  import CountdownHome from './CountdownHome'
  export default {
    components: {
      CountdownHome,
    },
    props: {
      speed: {
        type: Number,
        default: 150,
      },
      deleteSpeed: {
        type: Number,
        default: 50,
      },
      nextWordInterval: {
        type: Number,
        default: 1200
      },
      isLive:{
        type:Boolean,
        default:false
      },
      
    },
    data() {
      return {
        show: false,
        words: ["STEM OLYMPIAD 2021", "ORGANIZED BY U.S. EMBASSY DHAKA & ROBOLAB"],
        displayText: [],
        currentWord: '',
        wordIdx: 0,
        timeoutSpeed: null,
        isWaitingNextWord: false,
      }
    },
    mounted() {
      this.start()
    },
    methods: {
      start() {
        if (this.words && this.words.length > 0) {
          this.currentWord = this.words[this.wordIdx].split('')
          this.timeoutSpeed = this.speed
          this.animate = setTimeout(this.type, this.timeoutSpeed)
        }
      },
      logout(){
        console.log(this.$strapi.user)
        this.$strapi.logout()
        localStorage.setItem('user',null)
      },
      type() {
        // if typing...
        if (this.currentWord.length > 0) {
          this.displayText.push(this.currentWord.shift())
          // if done typing, wait for a while
        } else if (!this.isWaitingNextWord && this.currentWord.length === 0 && this.displayText.length === this.words[
            this.wordIdx].length) {
          this.timeoutSpeed = this.nextWordInterval
          this.isWaitingNextWord = true
          // if done typing, then delete
        } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
          this.timeoutSpeed = this.deleteSpeed
          this.displayText.pop()
          // if done typing & deleting
        } else if (this.currentWord.length === 0 && this.displayText.length === 0) {
          // change words
          if (this.wordIdx < (this.words.length - 1)) {
            this.wordIdx++
          } else {
            // reset
            this.wordIdx = 0
          }

          this.timeoutSpeed = this.speed
          this.isWaitingNextWord = false
          this.currentWord = this.words[this.wordIdx].split('')
          this.displayText.push(this.currentWord.shift())
        }

        setTimeout(this.type, this.timeoutSpeed)
      },
      toggleNavbar() {
        this.show = !this.show
      },
    },
  }

</script>


<style scoped>
   .mainlogo{
     height: 80px;
     padding-left: 5px;
   }
   .robologo{
     height: 45px;
     padding-right: 10px;
   }
     @media (max-width: 767px) {
       .mainlogo{
         height: 50px;
       }
     }
</style>