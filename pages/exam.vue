<template>
<div>
  <Pageheader/>
   <form id="regForm" action="" class="quizeform">
     <div v-if="loading" class="loading"></div>
     <div v-else>
           <h4 class="q_name">Ques: {{c_index+1}}/{{questions.length}}</h4>
            <div class="tab">
               <client-only><p class="ques" v-html="$md.render(questions[c_index].Question)"></p> </client-only>
              <div class="img-container" v-if="questions[c_index].Image.length > 0">
              <img class="img" src="../assets/images/sliders/1.jpg" alt=""/>
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
                <button type="button" class="btn" @click="next(c_index-1)">Previous</button>
                <button type="button" v-if="questions.length>c_index+1" class="btn" @click="next(c_index+1)">Next</button>
                <button type="button" v-else class="btn" @click="SubmitHandller">Submit</button>
              </div>
          </div>
      </div>     
   </form>
  </div>
</template>

<script>


import Pageheader from '../components/Pageheader'
import {quesQuery} from '../graphql/query'
export default {
 components: { Pageheader },

 data(){
     return{
       loading:0,
       isSubmitting:0,
       c_index:0,
       o_values:['A','B','C','D'],
       max:1,
       answer:{},
       updated:0,
       pivt:0,
       Fullname:this.$strapi.user.Fullname,
       Category:this.getCat(this.$strapi.user.Category.replace(/\s+/g, '').toLowerCase()),
       Uid:this.$strapi.user.id
    }
 },
 mounted(){
      let state = localStorage.getItem('ansState')
      if(state){
        this.answer = JSON.parse(state)
        console.log(JSON.parse(state))
      }
       document.onkeydown = function(e) {
         e.preventDefault()
        }
    },
  
 async asyncData({$strapi}) {
    const questions = await $strapi.graphql({
      query:quesQuery('catA')
    })
    console.log(questions)
    return questions
  },
 watch:{
   updated(){
     localStorage.setItem('ansState',JSON.stringify(this.answer))
   }
 },
  middleware:'authenticated',
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
    saveRes:async function(id){
      this.isSubmitting=1;
      console.log(this.$strapi.user)
      let resp = await this.$strapi.$results.create({Uid:this.Uid,Fullname:this.Fullname,Category:this.Category,Mark:this.calcRes(),Result:{Answers:this.answer}})
      this.isSubmitting=0;
    },
    SubmitHandller(){
        //A alart function before submiting!
        this.saveRes(1)
    },
   next(quesno){
      console.log(quesno)
      this.c_index = quesno
    },
  },
}
</script>






















<style>
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
