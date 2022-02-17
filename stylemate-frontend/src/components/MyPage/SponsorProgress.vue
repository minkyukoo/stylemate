<template>
  <div class="sponsers-wrap">
    <div v-if="progress.length > 0">
      <ItemCard
        :progressDetails="item"
        v-for="(item, index) in progress"
        :key="index"
      />
    </div>
    <div v-else>
      <Error errors="You have not yet been selected for sponsorship. Please apply for sponsorship for products from other brands as well." />
    </div>
    <RegisterPostModal />
    <CancelSponser />
  </div>
</template>

<script>
import ItemCard from "@/components/MyPage/ItemCard.vue";
import Error from "../Error.vue";
import RegisterPostModal from "../MyPage/RegisterPostModal.vue";
import CancelSponser from "../MyPage/CancelSponser.vue";
export default {
  name: "SponsorProgress",
  components: { ItemCard, Error, RegisterPostModal, CancelSponser },
  data() {
    return {
      progress: [
        {
          imgTag: "re-registration",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD  URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "re-registration",
        },
        {
          imgTag: "Sponsor Selection",
          img: "MyPage-item1.png",
          title: "ROLAROLA",
          desc: "leopard fleece jumper black",
          endDate: "2012-02-13 15:30",
          status: "sponsor-selection",
        },
        {
          imgTag: "Post registration",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD  URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "post-registration",
        },
        {
          imgTag: "Checking",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD  URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "checking",
        },
      ],
      errorMsg: "",
    };
  },
};
</script>

<style scoped>
.sponsers-wrap {
  padding: 0 20px;
}
</style>