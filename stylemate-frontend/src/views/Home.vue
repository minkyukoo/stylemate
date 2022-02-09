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
      <div class="mainslide">
        <ion-slides pager="true" :options="slideOpts">
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
      </div>
      <div class="overlapSlide">
        <div class="headerLine">
          <h4>NEW ITEM</h4>
        </div>
        <ion-slides pager="true" :options="multiSlideOpts">
          <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">      
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>       
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
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
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
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
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta">
                  <img src="@/assets/icons/wish.svg" class="wishList">
                </div>
                <img src="@/assets/images/main-item1.jpg">
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
      

      <div class="headerLine">
        <h4>LOOKBOOK</h4>
        <span><img src="@/assets/icons/arrow-right.svg"></span>
      </div>
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
        <div class="bookLabel2">
          <div>
            <img src="@/assets/images/Rectanglec1.png">
          </div>
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
      
      <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button>
      <button class="greyBtnFull"><span>중요</span> [알림] 서비스 점검 안내</button>

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

