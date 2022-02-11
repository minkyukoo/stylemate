<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <ExploreContainer name="Item page" /> -->
      <CategoryList @clicked="onClickChild" v-on:fltData="fltData2($event)" />
      <CardItem :isBanner=isBanner :isFltData ="isFltData" />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent, } from '@ionic/vue';
import TopNav from '@/components/TopNav.vue';
import CardItem from '@/components/CardItem.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'Item',
  components: { TopNav, IonContent, IonPage, CardItem, CategoryList },
  data(){
    return {
      isBanner: true,
      isFltData: true
    }
  },
  methods: {
    onClickChild(value) {
      console.log(value) // someValue
      this.isBanner = value;
    },
    fltData2(event){
      this.isFltData = event;
      alert(event)
    }
  }
}
</script>

<style scoped>
</style>