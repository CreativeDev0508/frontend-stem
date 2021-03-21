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
                                        <p class="text">contact@mail.com</p>
                                    </div>
                                </div> <!-- single info -->
                            </li>
                            <li>
                                <div class="single-info d-flex mt-25">
                                    <div class="info-icon">
                                        <i class="lni-phone-handset"></i>
                                    </div>
                                    <div class="info-content media-body">
                                        <h6 class="info-title">Phone Number</h6>
                                        <p class="text">123 456 789</p>
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
                        <form id="contact-form" action="" method="post">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" name="name" placeholder="Your Name">
                                        <i class="lni-user"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="email" name="email" placeholder="Your Email">
                                        <i class="lni-envelope"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" name="subject" placeholder="Your Subject">
                                        <i class="lni-pencil-alt"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <input type="text" name="number" placeholder="Phone Number">
                                        <i class="lni-phone-handset"></i>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-md-12">
                                    <div class="single-form">
                                        <textarea name="message" placeholder="Your Message"></textarea>
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
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div> <!-- contact map -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
</template>