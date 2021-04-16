<template>
<div>
   <form id="regForm" class="quizeform"  v-if="questions ? c_index < questions.length:false" v-bind:key="c_index">
     <data-load v-if="loading"></data-load>
     <div v-else>
           <h4 class="q_name">Ques: {{c_index+1}}/{{questions.length}}</h4>
            <div class="tab">
               <p class="ques" v-html="$md.render(questions[c_index].Question)"></p>
              <div class="img-container" v-if="questions[c_index].Image.length > 0">
              <img class="img" :src="api_url + questions[c_index].Image[0].url" alt=""/>
              </div>
              <div v-for="val in o_values" :key="val">
              <label class="c_container">{{questions[c_index]['Option'+val]}}
                <input type="checkbox" class="checkb" :checked="answer[questions[c_index].quesid] == val"  :value="val" @click="selectOpt($event,questions[c_index].quesid,val)">
                <span class="checkmark"></span>
              </label>
              </div>
            </div>
            <div style="overflow:auto;">
              <div style="float:right;">
                <button type="button" class="btn" @click="prev()" :disabled="c_index < 1">Previous</button>
                 <button type="button" v-if="questions.length > c_index + 1" class="btn" v-on:click="next();" :disabled="c_index>=questions.length">
                    NEXT</button>
                <button type="button" v-else class="btn" @click="saveRes">Submit</button>
              </div>
          </div>
      </div>     
   </form>
   <data-load v-else></data-load>
  </div>
</template>

<script>
 let cat = ''
import DataLoad from '../components/DataLoad.vue'
import {quesQuery,getcontrols} from '../graphql/query'
export default {
 components: { DataLoad},

 data(){
     return{
       api_url: process.env.strapiBaseUri,
       loading:0,
       c_index:0,
       o_values:['A','B','C','D'],
       max:1,
       answer:{},
       updated:0,
       pivt:0,
       Category:'',
       user:null,
       questions:null,
    }
 },

    
      // async fetch({$strapi,redirect}){
      //   let ctl = await $strapi.graphql({
      //     query:getcontrols
      //   })
      //   let ques = await $strapi.graphql({
      //     query:quesQuery
      //   })
      //   if(!ctl.controls[0].StratExam){
      //     redirect('/')
      //   }
      //   this.questions = ques.questions
      //   console.log(this.questions)
      // },
    watch:{
      updated(){
        localStorage.setItem('ansState',JSON.stringify(this.answer))
      }
    },

 // middleware:'authenticated',
  methods:{
    
    selectOpt(e,ques,ans){
      let checkboxs = document.getElementsByClassName('checkb')
      if(e.target.checked){
      this.answer[ques.toString()] = ans
      this.updated ++
        checkboxs.forEach((box)=>{
               if(box != e.target){
                 box.checked = false;
               }
        })
      }
      else{
        this.answer[ques.toString()]=''
        this.updated ++
      }
    },


    calcRes(){
      let  ca =0
      for(const key in this.answer){
        let uans = this.answer[key]
        let oans = this.questions.find(a=> a.quesid == key).Answer
        if(uans == oans){
          ca++
        }
      }
      console.log(ca)
      return ca
    },



    getCat(cat){
      switch(cat){
        case 'class8-10':
          return 'catA'
        case 'class11-12':
          return 'catB' 
        case 'undergraduate':
          return 'catC'  
      }
    },


    saveRes:async function(){
      this.loading=true;
      let mark = this.calcRes()
      let resp = await this.$strapi.$results.create({
        uid:this.user.id,
        Fullname:this.user.Fullname,
        Category:cat,
        Mark:mark,
        Result:{Answers:this.answer},
        })
      if(resp && resp!=null){
        this.$notify({ group: 'all', title:"SUCCESS!", text: 'Your Answers Has Been Submitted ! Thank you.',duration: 8000, type:'success' })
        this.$router.push('/profile')
      } 
      this.loading=false;
    },


     next: function() {
         if (this.c_index < this.questions.length)
            this.c_index++;
      },

      prev: function() {
         if (this.questions.length > 0) this.c_index--;
      },
  },
}
</script>















<style>
.examhead{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    position: sticky;
    position: -webkit-sticky;
    top: 1px;
    z-index: 999;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight:bold;
    background-image: linear-gradient(to right, rgba(51, 157, 243, 0.952), rgba(90, 0, 78, 0.87));
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.timer,.catname{
    font-size: 1.5rem;
     color: white;
}
.catname{
    padding-left: 0;
   
}





.quizeform {
    word-wrap: break-word;
    background-color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
    margin: 10% auto;
    padding: 40px;
    width: 60%;
    height: auto;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
.img-container{
  height: 100%;
  width: 100%;
  overflow: scroll!important;
  margin-bottom: 10px;
}
.c_container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    word-wrap: break-word;
  }
  
  /* Hide the browser's default checkbox */
  .c_container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  /* On mouse-over, add a grey background color */
  .c_container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background */
  .c_container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .c_container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .c_container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .tab p{
      font-size: 30px;
      padding-top: 15px;
      padding-bottom: 20px;
      line-height: 97%;
  }
  .btn{
      z-index: 9999;
      border-radius: 0;

      height: 48px;
      padding: 8px 25px;
      border: 2px solid rgb(110, 134, 241);
      background-color: rgb(255, 255, 255);
      
      width: auto;
      text-transform: uppercase;
      -moz-box-shadow:    3px 3px 5px 6px rgb(164, 165, 170);
      -webkit-box-shadow: 3px 3px 5px 6px rgb(185, 178, 178);
      box-shadow:         3px 3px 5px 6px rgb(204, 199, 199);
      transition: all 0.3s ease 0s;
      outline: none;
      cursor: pointer;
  }
  .btn:hover{
    background-color: #108ed6;
    border: none;
  }


@media only screen and (max-width: 1400px){
 .quizeform{
  margin: 10% auto;
  padding: 30px;
  width: 70%;
 }
}
@media only screen and (max-width: 990px){
  .quizeform{
   width: 90%;
   margin: 5% 5% auto;
  }
 }
 @media only screen and (max-width: 767px){
  .quizeform{
    width: 96%;
    margin: 4% 2% auto;
    padding:20px;
  }
}

</style>
