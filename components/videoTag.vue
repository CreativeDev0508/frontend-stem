<template>
  <section id="mackerspace" class="features-area pt-115 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <video autoplay loop class="videoclass">
                     <source src="../assets/videos/winnersvideo.mp4">
                </video>
            </div>
        </div>  
  </section>
</template>

<script>
export default {

}
</script>

<style>
.videoclass{
    width: 80vw;
}
 @media (max-width: 767px) {
     .videoclass{
         width: 97vw;
     }
 }
 @media (max-width: 950px) {
     .videoclass{
         width: 90vw;
     }
     .pt-115{
         padding-top: 47px;
     } 
     .pb-130{
         padding-bottom: 47px;
     }
 }
 @media (max-width: 450px) {
     .videoclass{
         width: 99vw;
     }
     .pt-115{
         padding-top: 40px;
     } 
     .pb-130{
         padding-bottom: 40px;
     }
 }
</style>