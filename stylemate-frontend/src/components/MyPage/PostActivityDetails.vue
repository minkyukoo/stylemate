<template>
  <div class="PostDetails-wrap">
    <ItemCardPost
      :progressDetails="item"
      v-for="(item, index) in progress"
      :key="index"
    />
    <ReRegisterModal />
  </div>
</template>

<script>
// import SponsorProgress from "@/components/MyPage/SponsorProgress.vue";
import ItemCardPost from "./ItemCardPost.vue";
import ReRegisterModal from "./Modals/ReRegisterModal.vue";
import MyPageService from "@/services/MyPageService";
export default {
  name: "PostActivityDetails",
  components: {
    ItemCardPost,
    ReRegisterModal,
  },
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
      myPageService: null,
    };
  },
  created() {
    this.myPageService = new MyPageService();
  },
  mounted() {
    this.myPageService.getPostingList().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped>
.PostDetails-wrap {
  padding: 20px;
}
</style>