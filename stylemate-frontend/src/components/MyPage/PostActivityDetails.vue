<template>
  <div class="PostDetails-wrap">
    <div v-if="!ErrMsg">
      <ItemCardPost
        :progressDetails="item"
        v-for="(item, index) in progressdata"
        :key="index"
      />
    </div>
    <Error :errors="ErrMsg" v-else />
    <!-- <ReRegisterModal /> -->
  </div>
</template>

<script>
import { inject } from "vue";
// import SponsorProgress from "@/components/MyPage/SponsorProgress.vue";
import ItemCardPost from "./ItemCardPost.vue";
import Error from "@/components/Error.vue";
// import ReRegisterModal from "./Modals/ReRegisterModal.vue";
import MyPageService from "@/services/MyPageService";
export default {
  name: "PostActivityDetails",
  props: {
    page: {
      type: Number,
    },
  },
  components: {
    ItemCardPost,
    Error,
    // ReRegisterModal,
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
      progressdata: [],
      per_page: 10,
      ErrMsg: "",
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  created() {
    this.myPageService = new MyPageService();
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      console.log(
        "page from PostActivityDetails:-",
        this.store.state.influenceId
      );
      if (this.store.state.influenceId) {
        this.myPageService
          .getPostingList(
            this.store.state.influenceId,
            this.per_page,
            this.page
          )
          .then((res) => {
            console.log(res);
            this.progressdata = res.data.data;
            if (!this.progressdata.length) {
              this.ErrMsg =
                "아직 협찬에 선정되지 못하였습니다. 다른 브랜드의 제품들도 협찬을 신청해보세요.";
            }
            let last_page = res.data.meta.last_page;
            this.$emit("lastPage", last_page);
          });
      } else {
        let res = await this.myPageService.getMyPageData();
        this.myPageService
          .getPostingList(
            res.data.influence.influenceStat.influenceId,
            this.per_page,
            this.page
          )
          .then((res) => {
            console.log(res);
            this.progressdata = res.data.data;
            if (!this.progressdata.length) {
              this.ErrMsg =
                "아직 협찬에 선정되지 못하였습니다. 다른 브랜드의 제품들도 협찬을 신청해보세요.";
            }
            let last_page = res.data.meta.last_page;
            this.$emit("lastPage", last_page);
          });
      }
    },
  },

  watch: {
    page: function () {
      this.myPageService
        .getPostingList(this.store.state.influenceId, this.per_page, this.page)
        .then((res) => {
          console.log(res);
          this.progressdata.push(...res.data.data);
          let last_page = res.data.meta.last_page;
          this.$emit("lastPage", last_page);
        });
    },
  },
};
</script>

<style scoped>
.PostDetails-wrap {
  padding: 20px;
}
</style>