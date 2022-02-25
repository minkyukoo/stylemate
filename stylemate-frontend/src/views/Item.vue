<template>
  <!-- <ion-page> -->
    <!-- header -->
    <TopNav headerTitle="ITEM"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
      <div class="main-wrap">
      <!-- <ExploreContainer name="Item page" /> -->
      <CategoryList @clicked="onClickChild" v-on:fltData="fltData2($event)" v-on:filterproductList="filterproductList2($event)"/>
      
      <CardItem :isBanner=isBanner :isFltData ="isFltData"  :isproductfilter ="isproductfilter"/>
      </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  <!-- </ion-page> -->
</template>

<script>
// import { IonPage } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import CardItem from "@/components/CardItem.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: "Item",
  components: { TopNav, CardItem, CategoryList },
  data() {
    return {
      isBanner: true,
      isFltData: true,
      isproductfilter: null,
      isallbutton:null,
    }
  },
  methods: {
    onClickChild(value) {
      console.log(value); // someValue
      this.isBanner = value;
    },
    fltData2(event) {
      this.isFltData = event;
      console.log("this.isFltData",this.isFltData);
      // alert(event);
    },
   
    filterproductList2(event){
      this.isproductfilter = event;
      console.log("this.isproductfilter",this.isproductfilter);
    },

  },
};
</script>

<style scoped>
</style>