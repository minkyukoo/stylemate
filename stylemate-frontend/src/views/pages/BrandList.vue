<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="main">
        <div class="maincard" v-for="(item, i) of data" :key="i+1" @click="$router.push({name: 'signUp'})">
          <ion-item>
            <img src="@/assets/images/Rectangle1.png" class="imgsec" alt="ion" />
          </ion-item>
          <ion-card-header>
            <ion-card-title>
              Hotel Panama Garden
              <ion-icon :icon="heart" />

              <!-- <img src="@/assets/icons/Vector.svg" alt="" slot="end"> -->
            </ion-card-title>
          </ion-card-header>
          <ion-card-content
            class="maincontent"
          >ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.</ion-card-content>
          <ion-card-content
            class="subcontent"
          >ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.</ion-card-content>
        </div>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>
<script>
import { IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/vue';
import { heart } from 'ionicons/icons';

export default {
  name: 'BrandList',
  components: { IonCardContent, IonCardHeader, IonCardTitle, IonItem },
  setup() {
    return { heart };
  },
  data() {
    return {
      data: [
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "subcontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Panama Garden",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "subcontent": "ipsum dolor, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "subcontent": "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden value",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "subcontent": "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden amet",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "subcontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
        }
      ]
    }

  }
}
</script>
<style scoped>
.subcontent {
  font-family: Pretendard;
  color: #c4c4c4;
  font-size: 10px;
}
.maincontent {
  font-size: 14px;
  color: #25282b;
}
.miancard {
  width: 0px;
  height: 150px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
}
.main {
  width: fit-content;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  padding: center;
}
.imgsec {
  width: 100%;
}
img:hover {
  background-color: rgb(36, 29, 29);
  border-color: rgb(63, 13, 110);
  border: #25282b;
}
</style>
