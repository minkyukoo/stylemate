<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <ExploreContainer name="Item page" /> -->
      <div class="product-main-banner">
        <img src="@/assets/images/product-banner.jpg" />
      </div>
      <CardItem />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage,  IonContent,} from '@ionic/vue';
import TopNav from '@/components/TopNav.vue';
import CardItem from '@/components/CardItem.vue';

export default  {
  name: 'Item',
  components: { TopNav,  IonContent, IonPage, CardItem}
}
</script>

<style scoped>
.product-main-banner {
  position: fixed;
  top: 105px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.product-main-banner img {
  width: 100%;
}
</style>