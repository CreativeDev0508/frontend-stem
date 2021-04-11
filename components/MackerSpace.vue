<template>
<section id="mackerspace" class="features-area pt-115 pb-130 gray-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="mc-title text-center pb-20">
                        <h2 class="title">Something More Interesting?</h2>
                        
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-content mt-45" data-aos="slide-left" data-aos-delay="50"
                        data-aos-duration="1000" data-aos-once="false" >
                        <!-- section title -->

                        <p class="text mt-30"><b> The American Center Dhaka's Makerspace</b> is a place for public engagement with innovative ideas, where individuals or groups participate in hands-on, self-paced learning. We focus on Science, Technology, Engineering, and Mathematics to enrich the curriculum of the 21st century. ​The Makerspace works to engage, inspire, connect, empower, and make the world around us a better place. It's an innovative space for collaboration and experimentation. The Makerspace offers robotics instruction and access to a 3D printer and other high-tech and low-tech equipment to help you create something new, explore own interests, and learn about Science, Technology, Engineering and Math (STEM). Our programs offer experiential learning and support innovation. We embrace failure and celebrate critical thinking. Activities range from coding and robotics to painting and 3D printing. The Makerspace is an excellent platforms for entrepreneurs to create product prototypes before making huge investments.
                        </p>
                    </div> <!-- about content -->
                </div>
                 <div class="col-lg-6">
                    <Slider  data-aos="slide-right" data-aos-delay="50"
                        data-aos-duration="1000" data-aos-once="false" class="imgbo"/>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>

</template>

<script>
import Slider from "./Slider";
export default {
  components: {
    Slider
  }
}
</script>

<style scoped>
  .floating{
      padding: 10px;
      margin-left: 15%;
  }
  .floating img{
      height: 300px;
      width: 300px;
  }
  @media (max-width: 767px) {
      .floating{
      padding: none;
      margin: none;
      margin-left: 6%;
     } 
  }
  .imgbo{
    padding-bottom: 70%;
  }

</style>