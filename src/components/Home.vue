<template>
<div class="landing">
  <carousel :perPage="1" :paginationEnabled="false" class="landing-carousel">
    <slide>
      <h1>We provide commercially<br />viable solutions</h1>
    </slide>
    <slide>
      <img src="../assets/home-banner-2.jpg" />
    </slide>
  </carousel>
  <ul class="landing-side">
    <li>
      Learn more
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1014" height="1024" viewBox="0 0 1014 1024">
        <path
          d="M535.801 555.211c-11.319-11.258-29.957-11.258-41.277 0l-328.509 328.7c-11.386 11.258-29.957 11.258-41.405 0l-78.231-78.422c-11.386-11.386-11.386-29.831 0-41.277l328.763-328.318c11.386-11.258 29.957-29.831 41.342-41.341l78.295-78.166c11.386-11.449 29.831-11.449 41.215 0l447.256 447.064c11.512 11.449 11.512 30.086 0 41.532l-78.166 78.167c-11.386 11.512-30.022 11.512-41.341 0l-327.936-327.936z"></path>
      </svg>
    </li>
    <li>About</li>
    <li>Our Team</li>
    <li>Statistics</li>
    <li>Areas of Expertise</li>
    <li>Explore our Services</li>
    <li>Industries</li>
    <li>Testimonials</li>
  </ul>
  <div class="container landing-about">
    <div class="col"></div>
    <div class="col">
      <h6>01.<span></span>About</h6>
      <h2>Advisors and advocates to professionals and businesses alike.</h2>
      <p>We are premier trusted advisors and advocates to professionals and businesses alike, enabling them to competently survive, sustain and succeed in their ventures. Our clients’ interests being our prime concern, we provide commercially viable solutions
        and pragmatic advice to each client built on a deep understanding of their vision coupled with our legal prowess and resourceful insights.</p>
    </div>
  </div>
  <div class="container landing-team nopad">
    <div class="col">
      <carousel ref="teamCarousel" :perPage="1" :autoplay="true" :autoplayTimeout="3000" :loop="true" :paginationEnabled="false" class="team-carousel" :autoplayHoverPause="false">
        <slide>
          <img src="http://via.placeholder.com/600x600/687aa8" />
        </slide>
        <slide>
          <img src="http://via.placeholder.com/600x600/687aa8" />
        </slide>
        <slide>
          <img src="http://via.placeholder.com/600x600/687aa8" />
        </slide>
      </carousel>
    </div>
    <div class="col">
      <h6>02.<span></span>Our Team</h6>
      <div class="points" :class="{ 'active': (currentIndex == 0) }">
        <h2>Jayashree Wad</h2>
        <p>A leading advocate on record at the Supreme Court Of India with 44 years experience.</p>
      </div>
      <div class="points" :class="{ 'active': (currentIndex == 1) }">
        <h2>Manoj Wad</h2>
        <p>A meticulous worker and expert in the field of Corporate law, Environmental, Commercial Transactions and Dispute Resolutions with over 28 years of experience.</p>
      </div>
      <div class="points" :class="{ 'active': (currentIndex == 2) }">
        <h2>Aashish Wad</h2>
        <p>A disruptive thinker that boasts of 26 years of industry experience in Civil & Commercial litigations.</p>
      </div>
      <h6>04.<span></span>Statistics</h6>
    </div>
  </div>
  <div class="container landing-stats">
    <div class="col">
      <h3>#</h3> Cases Won
    </div>
    <div class="col">
      <h3>#</h3> Team
    </div>
    <div class="col">
      <h3>#</h3> Clients
    </div>
    <div class="col">
      <h3>#</h3> M & As Orchestrated
    </div>
  </div>
  <div class="container landing-expertise">
    <div class="col">
      <ul>
        <li>Legal Advisory Services</li>
        <li>Contracts & Agreements</li>
        <li>Legal Due Diligence Review</li>
        <li>Government Certification &
          <br />Legal Compliances</li>
        <li>Legal Audits</li>
        <li>Corporate Training</li>
        <li>Litigation Practice</li>
      </ul>
    </div>
    <div class="col">
      <h6>05.<span></span>Areas of Expertise</h6>
      <h2>Survive. Sustain. Succeed.</h2>
      <p>We offer the entire gamut of legal advisory and litigation services for a global clientele. Our team has helped a wide variety of governmental corporations and multinational private organisations.</p>
      <a href="#" class="blue-btn">Explore Our Services</a>
    </div>
  </div>
  <div class="container landing-industries">
    <div class="col">
      <ul>
        <li>Oil and Gas</li>
        <li>Infrastructure</li>
        <li>Power</li>
        <li>Pharmaceuticals</li>
        <li>Media, Manufacturing</li>
        <li>FMGC</li>
        <li>IT Supply</li>
        <li>Services Agreements Contract</li>
        <li>Management and Claims.</li>
      </ul>
    </div>
    <div class="col">
      <h6>06.<span></span>Industries</h6>
      <h2>Knowledge of global and national</h2>
      <p>We create only Winning situations for our clients. Our industry wide experience and deep knowledge of global and national legal frameworks have helped us deliver services that are timely, progressive and accurate for the requirement.</p>
    </div>
  </div>
  <div class="container landing-testimonials">
    <div class="col"></div>
    <div class="col">
      <h6>07.<span></span>Testimonials</h6></div>
  </div>
  <div class="container nopad">
    <carousel :perPage="3" :autoplay="true" :autoplayTimeout="3000" :loop="true" :paginationEnabled="false" class="testimonial-carousel" :autoplayHoverPause="false">
      <slide>
        <h3>Mr. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </slide>
      <slide>
        <h3>Mr. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </slide>
      <slide>
        <h3>Mr. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </slide>
      <slide>
        <h3>Mr. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </slide>
    </carousel>
  </div>
  <div class="container landing-advice">
    <h2>Want legal advice?</h2>
    <a href="#" class="blue-btn">Contact Us</a>
  </div>
</div>
</template>

<script>
import {
  Carousel,
  Slide
} from 'vue-carousel';
export default {
  name: 'Home',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    currentIndex: {
      cache: false,
      get() {
        return this.$refs.teamCarousel ? this.$refs.teamCarousel.currentPage : 0
      }
    }
  },
  mounted() {
    var self = this

    // Team slideshow fix
    self.$forceUpdate()
  }
}
</script>
