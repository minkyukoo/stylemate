<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="mainslide">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide v-for="slide in list" :key="slide">
            <div>
              <img :src="slide.pcImagePath" alt />
              <!-- <img :src="slide.mobileImagePath" alt=""> -->
            </div>
          </ion-slide>
          <!-- <img src="@/assets/images/main-banner-1.png"> -->
          <!-- <div class="bannerCont">
              <h1>IDUN</h1>
              <p>MINERALS<span>Stockholm</span></p>
          </div>-->

          <!-- </ion-slide> -->
          <!-- <template v-for="s in slideData" :key="s.id">
              <swiper>
                <swiper-slide>
                  <ion-card>
                 <ion-card-content> Slide Name:{{ s.name }} </ion-card-content>
                  </ion-card>
                  </swiper-slide>
              </swiper>
          </template>-->
          <!-- <ion-slide>
          <img src="@/assets/images/main-banner-1.png">-->
          <!-- <div class="bannerCont">
              <h1>IDUN</h1>
              <p>MINERALS<span>Stockholm</span></p>
          </div>-->
          <!-- </ion-slide>
          <ion-slide>
          <img src="@/assets/images/main-banner-1.png">-->
          <!-- <div class="bannerCont">
              <h1>IDUN</h1>
              <p>MINERALS<span>Stockholm</span></p>
          </div>-->
          <!-- </ion-slide> -->
        </ion-slides>
      </div>




      <div class="overlapSlide">
        <button @click="getMyinfo">My Info</button>
        <div class="headerLine">
          <h4>NEW ITEM</h4>
        </div>
        <ion-slides pager="true" :options="multiSlideOpts">


          <ion-slide v-for="(slide, i) of NewProItems" :key="i+1">

            <div class="multiSlideWrap">

              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban {{i+1}}</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>



              <!-- <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div> -->
            </div>

          </ion-slide>




          <!-- <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
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
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
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
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide> -->
        </ion-slides>






        <div class="headerLine">
          <h4>LOOKBOOK</h4>
          <span>
            <img src="@/assets/icons/arrow-right.svg" />
          </span>
        </div>
        <div class="lookBookMain">
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png" />
          </div>
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png" />
          </div>
        </div>
        <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button>
        <button class="greyBtnFull">
          <span>중요</span> [알림] 서비스 점검 안내
        </button>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import { IonSlides, IonSlide } from '@ionic/vue';
import BannerService from '@/services/BannerService';
import ItemService from '@/services/ItemService';


export default {
  name: 'Home',
  components: { TopNav, IonContent, IonPage, IonSlides, IonSlide },
  data() {
    return {
      list: null,
      newItems: null,

      tempNewProItems: [],
      NewProItems: null

    }
  },
  created() {
    this.bannerService = new BannerService();
    this.itemService = new ItemService();

    this.itemService.getProductLsit().then((resp) => {
      console.log('newItems', resp);
      // this.newItems = resp;
      // const slicedArray = resp.slice(0, 5);
      // console.log('slicedArray', slicedArray);

      var i, temporary, chunk = 4;
      for (i = 0; i < 12; i += chunk) {
        temporary = resp.slice(i, i + chunk);
        // do whatever
        this.tempNewProItems.push(temporary);
        // console.log('temporary', temporary);
      }
      this.NewProItems = this.tempNewProItems;
      console.log('this.NewProItems', this.NewProItems);
    });

  },
  mounted() {

    // this.bannerService.getBannerList("home").then((resp) => {
    //                 console.log(resp)
    //                 this.list = resp;

    //             })
    // this.bannerService.getNewItemList().then((resp) => {
    //   console.log('newItems', resp);

    //   this.newItems = resp;
    // })
    
  },

  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  },

};
</script>

