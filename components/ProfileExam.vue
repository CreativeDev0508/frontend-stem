<template>
<div><ClientOnly>
    <LoginHome v-if="showModalS" @closeSmodal='showModalS=false' @logedin="showModalS=false"></LoginHome>
    <div v-else class="parent">
        <div class="child">
            <div v-if="!$strapi.user">
               <h4> Hay There, Stranger !</h4>
               <button class="main-btn" @click="showModalS=true">Sign In</button>
            </div>
            <div v-else>
                <div v-if="isResultAvilable" class="profilepage">
                    <h4>congratulations ! {{$strapi.user.Fullname}} <br> Position : {{ position }} </h4>
                    <!-- <h4>{{}} Days {{}} Hours {{}} </h4> -->
                    <button class="main-btn">Get Certificate!</button>
                    <button class="main-btn">Result</button>
                </div>
                <div v-else>
                    <h4>Welcome ! {{$strapi.user.Fullname}}</h4><br>
                    <nuxt-link class="main-btn" v-if="isCounok && isExamAvilable" to="/platfrom">Start Exam !</nuxt-link>
                    <div v-else-if="!isExamAvilable ">
                        <h3>Results will be published soon! </h3>
                        <div class="main-btn" style="cursor: not-allowed;">Thanks For Your Participation</div>
                    </div>
                    <div v-else>
                        <h3>The Exam Will Start In</h3>
                        <countdown-exam @finished="isCounok=true"  class="main-btn" style="cursor: not-allowed;" end="Apr 16 2021 16:00:00" :onlyminutes="false"></countdown-exam>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </ClientOnly>
    </div>
</template>

<script>
import LoginHome from '../components/LoginHome'
import CountdownExam from './CountdownExam.vue'
import DataLoad from './DataLoad.vue'
import {getcontrols} from '../graphql/query'
export default {
    components:{
        CountdownExam,
        LoginHome,
        DataLoad,
        
    },
    data(){
        return{
            isExamAvilable:false,
            isCounok:false,
            isResultAvilable:false,
            position:'',
            showModalS:false,
            logedin:false,
            username:''
        }
    },
     async mounted(){
        let ctl = await this.$strapi.graphql({
          query:getcontrols
        })
        this.isExamAvilable = ctl.controls[0].StratExam
        this.isResultAvilable = ctl.controls[0].PublishResult
      },
}
</script>
<style scoped>
 .parent{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

 }
 .child{
    text-align: center;
    padding: 5%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .main-btn{
     max-width: 90vw;
     border: none;
     border-radius: 10px;
     margin-top: 30px;
     color: white;
     background-image: linear-gradient(to right ,  rgba(139, 52, 209, 0.753) ,rgba(52, 49, 204, 0.753));
     font-size: clamp(0.5rem, 2.5vw, 1rem);
 }
</style>