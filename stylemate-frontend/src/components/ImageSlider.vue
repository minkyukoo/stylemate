<template>
  <!-- <div class="mt-10">
      <div class="relative slider-content flex-none hover:flex-1"> 
          <div
        v-for="(slide, i) in slides"
        v-bind:key="slide"
        v-bind:data-index="i"
        class="absolute shadow-lg"
      >
        <img v-bind:src="slide" />
      </div> <br>
      
       <div>
      <div  v-for="(slide, i) in slides"
        v-bind:key="slide"
        @click="selectSlide(i)" class=""></div>
    </div>
      </div>
  </div>-->
  <div>
    <Splide :options="{ rewind: true }" class="mySplide">
      <SplideSlide
        v-for="(slide, i) in slides"
        v-bind:key="slide"
        v-bind:data-index="i"
        class="shadow-lg"
      >
        <img v-bind:src="slide" alt="Sample 1" />
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
//import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'ImageSlider',
  components: { Splide, SplideSlide },
  data() {
    return {
      slides: [
        'https://source.unsplash.com/random/800x400?i=1',
        'https://source.unsplash.com/random/800x400?i=2',
        'https://source.unsplash.com/random/800x400?i=3',
        'https://source.unsplash.com/random/800x400?i=4',
        'https://source.unsplash.com/random/800x400?i=5',
        'https://source.unsplash.com/random/800x400?i=6',
      ],
      //current: 0
    }
  },
  methods: {
    //     selectSlide: function(i) {
    //   this.current = i;
    //   this.resetPlay();
    // },
    // resetPlay: function() {
    //   clearInterval(this.timer);
    //   this.play();
    // },
    //  play: function() {
    //   let app = this;
    //   this.timer = setInterval(function() {
    //     app.nextSlide();
    //   }, 2000);
    // }
  }


}
</script>
<style>
</style>