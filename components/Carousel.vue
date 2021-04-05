<template>
  <div class="c_warp">
      <h2> Excellency Has </h2><br>
      <h1> <strong>No Set Gender</strong></h1>
    <client-only>
      <slick :options="slickOptions">
        <div v-for="i in 8" :key="i" class="img-wrapper">
          <img :src="require(`~/assets/images/sliders/${i}.jpg`)" />
          <i><b>{{bio[Number(i-1)][0]}}</b>{{bio[Number(i-1)][1]}}</i>
        </div>
      </slick>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
     
    return {
      bio:[
      ['Rosalind Franklin',' (July 25, 1920 – April 16, 1958) was a British chemist and crystallographer, best known for her research that was essential to explaining the structure of DNA. She was gifted with scholastics from a young age, and carried her intellect into her work field. During her lifetime, she was not credited for her important role, but years later, she is now recognized as having provided a pivotal piece of the DNA story.'],
      ['Aisha Bowe',' is a Bahamian-American aerospace engineer. Although discouraged by her guidance counselor, she decided to pursue a degree in aerospace engineering after which she wound up at NASA, working as a mission engineer. She is currently the CEO of STEMBoard which produces software solutions and also runs educational workshops for the youth in concepts such as coding and engineering.'],
      ['Lillian Moller Gilbreth',' (May 24, 1878 – January 2, 1972) was an American psychologist and industrial engineer. Her long list of first times include being the first female engineering professor at Purdue, and the first woman elected to the National Academy of Engineering.'],
      ['Susan McKinney-Steward',' (March 7, 1847 – March 17, 1918) was the third black woman to earn a medical degree in the US. She paid her own way through medical school by offering lessons – and graduated as valedictorian. Besides running her own practice in Brooklyn, she co-founded the Brooklyn Women’s Homeopathic Hospital and Dispensary and worked as a college physician at the University of Ohio.'],
      ['Katherine Johnson',' (August 26, 1918 – February 24, 2020), an African-American space scientist and mathematician, has made enormous contributions to America’s aeronautics and space programs. She played a huge role in calculating key trajectories, which were critical to the success of the space flights – including that for Alan Shepard, the first American in space as well as for the 1969 Apollo 11 flight to the moon.'],
      ['Barbara McClintock',' (une 16, 1902 – September 2, 1992) was an American geneticist, and to this day is still considered to be one of the world’s most prestigious cytogeneticists (someone who studies chromosomes). In 1983, McClintock won the Nobel Prize in Physiology for her discovery of the “jumping gene” (the ability of genes to change position on the chromosome), which is one of the most important keys to human evolution.'],
      ['Aprille Ericsson-Jackson',' (April 1, 1963 – present) was the first African American woman to receive a Ph.D. in mechanical engineering from Howard University and a Ph.D. in engineering from the NASA Goddard Space Flight Center. With more than a decade of experience in her field, she helps manage science instruments such as ATLAS and is also the instrument manager for a proposed mission to bring dust back from Mars.'],
      ['Edith Clarke',' (February 10, 1883 – October 29, 1959) was a pioneering electrical engineer in the early 20th century. Before the invention of modern day computers and calculators, she was someone who could perform difficult mathematical calculations without their aid.  Although the industry did not welcome female engineers then, Clarke became the first professionally employed female electrical engineer in the United States in 1922.'],
      ],
      slickOptions: {
         slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerMode:true,
          centerPadding:'60px',

 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]




      }
    }
  }
}
</script>

<style>
.img-wrapper{
    padding: 10%;
    text-align: center;
}

.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 320px;
  height:320px;
  background-image: linear-gradient(gray 100%, transparent 0);
  -webkit-box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    border-radius: 5%;

}
.img-wrapper i{
    margin-top: 25px;
    color: black;
    /* font-family: "Times New Roman", Times, serif; */
}

.c_warp{
    margin-top: 20px;
    text-align: center;
    word-break: break-all;
}
.c_warp h2{
 padding-top: 70px;
}
.c_warp h1{
   
    font-size: 50px;
}
  @media (max-width: 1250px) {
    .img-wrapper img{
        height: 250px;
        width: 250px;
    }
    .img-wrapper{
        padding: 8%;
        margin: 5%;
        text-align: center;
        } 
    }
    .img-wrapper i{
        font-size: 14px;
    }

  @media (max-width: 767px) {
    .c_warp h1{
    padding-top: 70px;
    font-size: 30px;
   }
   .img-wrapper img{
        height: 230px;
        width: 230px;
    }
    .img-wrapper{
        margin: 5%;
        text-align: center;
    } 
     .img-wrapper i{
        font-size: 11px;
        letter-spacing: -0.5px;
        line-height: 12px;
    }
    
  }
</style>