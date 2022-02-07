<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <ExploreContainer name="Item page" /> -->
      
      <CardItem />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage,  IonContent,} from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
import CardItem from '@/components/CardItem.vue';

export default  {
  name: 'Item',
  components: { TopNav,  IonContent, IonPage, CardItem}
}
</script>