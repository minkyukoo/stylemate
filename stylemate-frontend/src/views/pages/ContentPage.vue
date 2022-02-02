<template>
  <!-- header -->
  <!-- <ion-header>
      <ion-toolbar>
        <ion-title>ContentPage</ion-title>
      </ion-toolbar>
    </ion-header> -->
  <!-- End header -->
  <!-- page content -->
  <ion-content :fullscreen="true">
    <ion-grid>
      <div>
      <h1 class="title">BEST CONTENTS</h1>
      <br />
      <!-- Content row start -->
      <ion-row >
        <ion-col size-md="7">
          <img src="@/assets/images/Rectanglec1.png" alt="" class="imagesize"/>
        </ion-col>
        <ion-col size-md="4">
          <ion-row>
            <img src="@/assets/images/Rectanglec2.png" alt="" class="io"/>
          </ion-row><br/>
          <ion-row>
            <img src="@/assets/images/Rectanglec3.png" alt="" class="io"/>
          </ion-row>
        </ion-col>
      </ion-row> 
<br/>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglec4.png" alt="" class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglec5.png" alt="" class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglec6.png" alt="" class="io"/>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size-md="4">
          <ion-row>
            <img src="@/assets/images/Rectanglec7.png" alt="" class="io"/>
          </ion-row><br/>
          <ion-row>
            <img src="@/assets/images/Rectanglec8.png" alt="" class="io"/>
          </ion-row>
        </ion-col>
        <ion-col size-md="7">
          <img src="@/assets/images/Rectanglec9.png" alt=""  class="imagesize"/>
        </ion-col>
      </ion-row>
      </div><br/>
      <!-- Content row Ends -->

<div>
      <h1 class="title">NEW</h1>
      <br />
      <ion-row>
        <!-- New content start -->
        <ion-col>
          <img
            src="@/assets/images/Rectanglen1.png"
            alt="NewImage"
            class="io"
          />
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen2.png" alt="NewImage"   class="io"/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen3.png" alt="NewImage" class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen4.png" alt="NewImage" class="io" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen5.png" alt="NewImage"  class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen6.png" alt="NewImage"  class="io"/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen7.png" alt="NewImage"  class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen8.png" alt="NewImage" class="io"/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen9.png" alt="NewImage"  class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen10.png" alt="NewImage" class="io" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen11.png" alt="NewImage" class="io" />
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen12.png" alt="NewImage" class="io"/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <img src="@/assets/images/Rectanglen13.png" alt="NewImage" class="io"/>
        </ion-col>
        <ion-col>
          <img src="@/assets/images/Rectanglen14.png" alt="NewImage" class="io"/>
        </ion-col>
      </ion-row>
      </div>
      <!-- New content ends -->
    </ion-grid>
  </ion-content>
  <!-- End page content -->
</template>
<script>
import { IonContent, IonCol, IonGrid, IonRow } from "@ionic/vue";
//import ExploreContainer from "@/components/ExploreContainer.vue";
//import TopNav from "@/components/TopNav.vue";
export default {
  name: "ContentPage",
  components: { IonContent, IonCol, IonGrid, IonRow },
  data() {
    return {
      img: [
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
      ],
      img_new: [
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
      ],
    };
  },
};
</script>
<style>
.row1 {
  height: 200px;
  width: 100%;
}
.row2 {
  height: 200px;
  width: 100%;
}
.title {
  position: absolute;
  font-family: Europa-Bold;
  font-weight: bold;
  display: flex;
  font-size: 24px;
  line-height: 24px;
}
.newimage {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
/* .img-wrapper{
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
} */
/* img{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
} */
.io{
  width: 100%;
}
.imagesize{
  height: 100%;
}

</style>
