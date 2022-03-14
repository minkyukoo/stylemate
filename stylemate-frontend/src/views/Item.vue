<template>
  <!-- <ion-page> -->
  <div class="Item-page">
    <!-- header -->
    <TopNav headerTitle="ITEM"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap" @scroll="onScroll">
      <!-- <ExploreContainer name="Item page" /> -->
      <CategoryList
        @clicked="onClickChild"
        v-on:fltData="fltData2($event)"
        v-on:filterproductList="filterproductList2($event)"
      />

      <CardItem
        :isBanner="isBanner"
        :isFltData="isFltData"
        :isproductfilter="isproductfilter"
      />
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </div>
  <!-- </ion-page> -->
</template>

<script>
// import { IonPage } from "@ionic/vue";
import { inject } from "vue";
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
      isallbutton: null,
      arr: [],
      page: 1,

    }
  },
  setup() {
    const store = inject("store");

    // onMounted(() => {
    //   store.methods.getData();
    // });

    return { store };
  },
  methods: {

    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log('end reached');
        this.arr.push(this.arr.length + 1);
        let last_page = this.store.state.productMeta.last_page;
        console.log('last_page', last_page);
        if (this.page < last_page) {
          this.page = this.page + 1;
          console.log('page from incerement:',this.page);
          this.store.methods.getData(null,this.page);
        } else {
          this.page = last_page;
        }
      }
    },

    onClickChild(value) {
      console.log(value); // someValue
      this.isBanner = value;
    },
    fltData2(event) {
      this.isFltData = event;
      console.log("this.isFltData", this.isFltData);
      // alert(event);
    },

    filterproductList2(event) {
      this.isproductfilter = event;
      console.log("this.isproductfilter", this.isproductfilter);
    },

  },
};
</script>

<style scoped>
</style>