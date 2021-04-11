<template>
    
    <section id="contact" class="contact-area pt-80 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-info pt-40">
                        <div class="section-title pb-10">
                            <h2 class="title">Get In Touch</h2>
                        </div> <!-- section title -->
                        <ul>
                            <li>
                                <div class="single-info d-flex mt-25">
                                    <div class="info-icon">
                                        <i class="lni-envelope"></i>
                                    </div>
                                    <div class="info-content media-body">
                                        <h6 class="info-title">Email address</h6>
                                        <p class="text">info@stemolympiadforgirls.org</p>
                                    </div>
                                </div> <!-- single info -->
                            </li>
                            <li>
                                <div class="single-info d-flex mt-25">
                                    <div class="info-icon">
                                        <i class="lni-money-location"></i>
                                    </div>
                                    <div class="info-content media-body">
                                        <h6 class="info-title">Location</h6>
                                        <p class="text">Dhaka, Bangladesh</p>
                                    </div>
                                </div> <!-- single info -->
                            </li>
                        </ul>
                    </div> <!-- contact info -->
                </div>
                <div class="col-lg-8">
                    <div class="contact-form pt-20">
                        <form id="contact-form" @submit.prevent="sendMessage">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" required v-model="msg.name" placeholder="Your Name">
                                        <i class="lni-user"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="email" v-model="msg.email" required placeholder="Your Email">
                                        <i class="lni-envelope"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" v-model="msg.subject" required placeholder="Your Subject">
                                        <i class="lni-pencil-alt"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" v-model="msg.phoneno" required placeholder="Phone Number">
                                        <i class="lni-phone-handset"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-12">
                                    <div class="single-form">
                                        <textarea v-model="msg.message" required placeholder="Your Message"></textarea>
                                        <i class="lni-comment-alt"></i>
                                    </div> <!-- single form -->
                                </div>
                                <p class="form-message"></p>
                                <div class="col-md-12">
                                    <div class="single-form">
                                        <button type="submit" class="main-btn main-btn-2">Send Message</button>
                                    </div> <!-- single form -->
                                </div>
                            </div> <!-- row -->
                        </form>
                    </div> <!-- contact form -->
                </div>
            </div> <!-- row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-map pt-130">
                        <div class="gmap_canvas">                            
                            <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6169383523184!2d90.41977941544856!3d23.79665139292367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a93a0cd37b%3A0x5f6ad10e0e4200fe!2sUS%20Consulate!5e0!3m2!1sen!2sin!4v1616404341260!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div> <!-- contact map -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
</template>

<script>
export default {
    data(){
        return{
           msg:{ 
            name:null,
            email:null,
            subject:null,
            phoneno:null,
            message:null
           },
           error:false
        }
    },
    methods:{
        sendMessage:async function(){
            var res =await this.$strapi.$messages.create( this.msg )
            .catch((err)=>{
                 this.error = true
                 this.$notify({ group: 'all', title:"Failed!", text:err ,duration: 5000, type:'error' })
            });
            if(res && this.error!=true){
                 this.$notify({ group: 'all', title:"SUCCESS!", text: 'Message Sent. We will contact you soon if necessary. Thanks!',duration: 15000, type:'success' })
            }

            
        }
    }
}
</script>