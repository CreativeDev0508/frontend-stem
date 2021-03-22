<template>
  <div class="c_warp">
      <h2> Excellency Has </h2><br>
      <h1> <strong>No Set Gender</strong></h1>
    <client-only>
      <slick :options="slickOptions">
        <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="require(`~/assets/images/${i}.jpg`)" />
          <h5>{{bio[Number(i-1)]}}</h5>
        </div>
      </slick>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
     
    return {
      bio:['Lillian Moller Gilbreth (May 24, 1878 – January 2, 1972) was an American psychologist and industrial engineer. Her long list of first times include being the first female engineering professor at Purdue, and the first woman elected to the National Academy of Engineering.',
      'Edith Clarke (February 10, 1883 – October 29, 1959) was a pioneering electrical engineer in the early 20th century. Before the invention of modern day computers and calculators, she was someone who could perform difficult mathematical calculations without their aid.  Although the industry did not welcome female engineers then, Clarke became the first professionally employed female electrical engineer in the United States in 1922.',
      'Rosalind Franklin (July 25, 1920 – April 16, 1958) was a British chemist and crystallographer, best known for her research that was essential to explaining the structure of DNA. During her lifetime, she was not credited for her important role, but years later, she is now recognized as having provided a pivotal piece of the DNA story',
      'Katherine Johnson (August 26, 1918 – February 24, 2020), an African-American space scientist and mathematician, has made enormous contributions to America’s aeronautics and space programs by her incorporation of computing tools. She played a huge role in calculating key trajectories – including that for Alan Shepard, the first American in space as well as for the 1969 Apollo 11 flight to the moon.',
      'Rachel Carson (May 27, 1907 – April 14, 1964) was a marine biologist and environmentalist – whose groundbreaking book, Silent Spring, has been credited as the catalyst for the modern environmental movement'],
      slickOptions: {
         slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
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
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 100%;
  height: 450px;
  background-image: linear-gradient(gray 100%, transparent 0);
  -webkit-box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 21px 3px rgba(0,0,0,0.75);
    border-radius: 5%;

}
.img-wrapper h5{
    margin-top: 25px;
    color: black;
}
.img-wrapper{
    padding: 10%;
    text-align: center;
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
  @media (max-width: 1050px) {
    .img-wrapper img{
        height: 350px;
    }
    .img-wrapper{
        padding: 10%;
        text-align: center;
        } 
    }
    .img-wrapper h5{
        font-size: 17px;
    }

  @media (max-width: 767px) {
    .c_warp h1{
    padding-top: 70px;
    font-size: 30px;
   }
   .img-wrapper img{
        height: 280px;
    }
  }
</style>