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
        v-on:filterproductList="filterproductList($event)"
        v-on:pageResetcat="pageReset($event)"
        v-on:categoryId="categoryId($event)"
        :page="page"
      />

      <CardItem
        :isBanner="isBanner"
        :isFltData="isFltData"
        :isproductfilter="isproductfilter"
        v-on:bookOption="bookOption($event)"
        v-on:pageReset="pageReset($event)"
        :page="page"
        :categoryId="dcategoryId"
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
import ItemService from "@/services/ItemService";

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
      bookOptionVal: null,
      dcategoryId: null,

    }
  },
  setup() {
    const store = inject("store");

    // onMounted(() => {
    //   store.methods.getData();
    // });

    return { store };
  },
  created() {
    this.itemService = new ItemService();
  },
  methods: {

    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log('end reached');
        let last_page = this.store.state.productMeta.last_page;
        if (this.page < last_page) {
          this.page = this.page + 1;
          console.log('page from itemvue:-:', this.page);
          this.store.methods.getData(this.bookOptionVal, this.page, this.dcategoryId);

          // if (this.bookOptionVal) {
          //   console.log('this.bookOption:', this.bookOptionVal);
          //   this.store.methods.getData(this.bookOptionVal, this.page, null);
          // } else {
          //   this.store.methods.getData(null, this.page, null);
          // }
          // // cat filter
          // if (this.dcategoryId) {
          //   console.log('this.categoryId:', this.dcategoryId);
          //   this.store.methods.getData(null, this.page, this.dcategoryId);
          //   //  this.itemService.getFilterProduct(ids,this.page).then((data) => {
          //   //  }
          // }

        } else {
          this.page = last_page;
        }
      }
    },

    bookOption(event) {
      if (event) {
        console.log('bookOption event:', event);
        this.bookOptionVal = event;
      }
    },

    pageReset(event) {
      if (event) {
        console.log('pageReset event:', event);
        this.page = event;
      }
    },

    categoryId(event) {
      if (event) {
        console.log('categoryId event:', event);
        this.dcategoryId = event;
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

    filterproductList(event) {
      this.isproductfilter = event;
      console.log("this.isproductfilter", this.isproductfilter);
    },

  },
};
</script>

<style scoped>
</style>