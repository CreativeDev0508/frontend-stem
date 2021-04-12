<template>
   <div class="examhead ">
        <h5 class="catname">CLASS 8 - 10</h5>
        <countdown-exam @finished="$emit('timeup')" class="timer" end="Apr 12 2021 10:45:40" :onlyminutes="true"></countdown-exam>
    </div>
</template>

<script>
import CountdownExam from './CountdownExam.vue'
export default {
  components: { CountdownExam },

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
</style>