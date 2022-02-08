<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
       <!-- <ion-button router-link="/mypage">mypage</ion-button> -->
      <!-- <ExploreContainer name="Home page" /> -->
      <!-- <Tab1List /> -->
      <ion-slides pager="true" :options="slideOpts" class="mainslide">
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <div class="bannerCont">
            <h1>IDUN</h1>
            <p>MINERALS<span>Stockholm</span></p>
          </div> -->
        </ion-slide>
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <div class="bannerCont">
            <h1>IDUN</h1>
            <p>MINERALS<span>Stockholm</span></p>
          </div> -->
        </ion-slide>
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <div class="bannerCont">
            <h1>IDUN</h1>
            <p>MINERALS<span>Stockholm</span></p>
          </div> -->
        </ion-slide>
      </ion-slides>

      <ion-slides pager="true" :options="multiSlideOpts" class="overlapSlide">
        <ion-slide>
          <div class="multiSlideWrap">
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="multiSlideWrap">
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="multiSlideWrap">
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
            <div class="slideItem">
              <img src="@/assets/images/main-item1.jpg">
              <h4>Areuban</h4>
              <p>리플렉 오버핏 조거 스웨...</p>
              <span>#street fashion #sufa #hoodie</span>
            </div>
          </div>
        </ion-slide>
      </ion-slides>

        <div class="lookBookMain">
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png">
          </div>
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png">
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png">
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png">
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png">
            </div>
          </div>
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png">
          </div>
        </div>

    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import { IonSlides, IonSlide } from '@ionic/vue';
//import axios from 'axios';


export default {
  name: 'Home',
  components: { TopNav, IonContent, IonPage, IonSlides, IonSlide},
  mounted() {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var token = urlParams.get('token')
    localStorage.setItem('token', token);
    console.log(urlParams);
    console.log(token);
  },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    }; 
    return { slideOpts }
  }
};
</script>

