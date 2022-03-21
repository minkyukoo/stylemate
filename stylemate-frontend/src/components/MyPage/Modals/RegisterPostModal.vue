<template>
  <Modal
    v-show="store.state.isPostModalVisible"
    @close="closeModal"
    v-bind:showCloseBtn="false"
    modalSize="modal-lg"
  >
    <template v-slot:header>
      <div></div>
    </template>
    <template v-slot:body>
      <div class="modal-content">
        <div class="Post-header">
          <div class="img-con">
            <img :src="brand_img" alt="" />
          </div>
          <div class="item-desc">
            <div class="heading-wrap">
              <h2>{{ brand_name }}</h2>
            </div>
            <div>
              <h4>{{ brand_desc }}</h4>
              <h6>End date {{ date }}</h6>
            </div>
          </div>
        </div>
        <div class="post-body">
          <div class="refresh-btn" role="button" @click="reloadcontentData">
            <img src="../../../assets/icons/refresh.svg" alt="refresh" />
          </div>
          <div class="post-card-con">
            <PostModalCard
              :cardData="postList"
              @choosePost="setDetails($event)"
            />
            <div>
              <button
                class="btn-outline-block"
                @click="pageCalc"
                v-if="show_button"
              >
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="post-footer">
        <button
          class="btn-grey"
          @click="() => (store.state.isPostModalVisible = false)"
        >
          닫기
        </button>
        <button type="button" class="btn-black" @click="isSubmit">
          포스트 등록하기
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { inject } from "vue";
import Modal from "../../Modal.vue";
import PostModalCard from "./PostModalCard.vue";
import MyPageService from "@/services/MyPageService";
import ChannelService from "@/services/ChannelService";
import ItemService from "@/services/ItemService";
import moment from "moment";
export default {
  name: "register-post-modal",
  components: {
    Modal,
    PostModalCard,
  },
  data() {
    return {
      myPageService: null,
      channelService: null,
      itemService: null,
      postList: [],
      postListBackup: [],
      campaignId: 0,
      bookingId: 0,
      channelId: 0,
      caption: "",
      comments_count: 0,
      id: 0,
      ig_id: "",
      like_count: 0,
      media_product_type: "",
      media_type: "",
      media_url: "",
      thumbnail_url: "",
      permalink: "",
      shortcode: "",
      username: "",
      timestamp: "",
      userProfile: {},
      requiredAccount: "",
      requiredHashtag: "",
      per_page: 4,
      show_button: false,
      brand_img: "",
      date: "",
      brand_name: "",
      brand_desc: "",
    };
  },

  created() {
    this.myPageService = new MyPageService();
    this.channelService = new ChannelService();
    this.itemService = new ItemService();
    this.channelService.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.channelService.initFacebook();
    this.moment = moment;
  },

  setup() {
    const store = inject("store");
    const linkedChannel = inject("linkedChannel");

    return {
      store,
      linkedChannel,
    };
  },
  mounted() {
    // this.myPageService
    //   .getPostingList(this.store.state.influenceId, this.per_page)
    //   .then((res) => {
    //     console.log(res);
    //     this.postList = res.data.data;
    //     this.total_posts = res.data.meta.total;
    //     if (this.total_posts > this.per_page) {
    //       this.show_button = true;
    //     }
    //     console.log(
    //       "checking",
    //       this.postList,
    //       this.show_button,
    //       this.total_posts,
    //       this.per_page
    //     );
    //   });
    this.itemService
      .getProductDetails(this.store.MyPageModals.productID)
      .then((res) => {
        console.log(res);
        this.brand_name = res.brand.korName;
        this.brand_desc = res.brand.description;
        this.date = moment(res.campaign[0].campaignSchedule.finishedAt).format(
          "YYYY-MM-DD HH:mm"
        );
        this.brand_img = res.brand.imageThumbnailPath;
        if (res.campaign[0].campaignMission.requiredAccount) {
          this.requiredAccount =
            res.campaign[0].campaignMission.requiredAccount.join(" #");
        }
        if (res.campaign[0].campaignMission.requiredHashtag) {
          this.requiredHashtag =
            res.campaign[0].campaignMission.requiredHashtag.join(" #");
        }
        console.log(
          "requiredAccount",
          this.requiredAccount,
          this.requiredHashtag
        );
      });

    this.myPageService.getMyPageData().then((res) => {
      console.log(res);
      let fbid =
        res.data.influence.channel[res.data.influence.channel.length - 1]
          .instagramChannel.fbid;
      this.channelService.getIgPosts(fbid).then((response) => {
        console.log("getIgPosts", response);
        this.total_posts = response.data.length;
        if (this.total_posts > this.per_page) {
          this.show_button = true;
        }
      });
    });

    this.myPageService.getMyPageData().then((res) => {
      console.log(res);
      let fbid =
        res.data.influence.channel[res.data.influence.channel.length - 1]
          .instagramChannel.fbid;
      this.channelService.getIgPosts(fbid, this.per_page).then((response) => {
        console.log("getIgPosts", response);
        this.postList = response.data;
      });
      // this.userProfile = res.data.data.user;
    });
    // this.linkedChannel.methods.logInWithFacebook();
    // console.log(this.store.MyPageModals.reRegistrationNo,this.store.MyPageModals.reRegistration);
  },

  unmounted() {
    this.store.MyPageModals.campaignId = null;
    this.store.MyPageModals.bookingId = null;
    this.store.MyPageModals.productID = null;
    this.store.state.hideBar = false;
  },

  methods: {
    closeModal() {
      this.isPostModalVisible = false;
    },
    pageCalc() {
      if (this.per_page < this.total_posts) {
        this.per_page += 4;
        this.show_button = true;
        this.myPageService.getMyPageData().then((res) => {
          console.log(res);
          let fbid =
            res.data.influence.channel[res.data.influence.channel.length - 1]
              .instagramChannel.fbid;
          this.channelService
            .getIgPosts(fbid, this.per_page)
            .then((response) => {
              console.log("getIgPosts", response);
              this.postList = response.data;
              this.total_posts = response.data.length;
              if (this.total_posts <= this.per_page) {
                this.show_button = false;
              }
            });
        });

        // this.myPageService
        //   .getPostingList(this.store.state.influenceId, this.per_page)
        //   .then((res) => {
        //     console.log(res);
        //     this.postList = res.data.data;
        //     this.total_posts = res.data.meta.total;
        //     if (this.total_posts <= this.per_page) {
        //       this.show_button = false;
        //     }
        //     console.log(
        //       "checking",
        //       this.postList,
        //       this.show_button,
        //       this.total_posts,
        //       this.per_page
        //     );
        //   });
      } else {
        this.show_button = false;
      }
    },
    reloadcontentData() {
      // this.myPageService
      //   .getPostingList(this.store.state.influenceId)
      //   .then((res) => {
      //     console.log(res);
      //     this.postList = res.data.data;
      //   });
      this.myPageService.getMyPageData().then((res) => {
        console.log(res);
        let fbid =
          res.data.influence.channel[res.data.influence.channel.length - 1]
            .instagramChannel.fbid;
        this.channelService.getIgPosts(fbid).then((response) => {
          console.log("getIgPosts", response);
          this.postList = response.data;
          this.total_posts = response.data.length;
        });
      });
    },
    setDetails(event) {
      console.log("test", event);
      this.comments_count = event.comments_count;
      this.like_count = event.like_count;
      this.media_type = event.media_type;
      this.media_product_type = event.media_product_type;
      if (event.media_product_type === "video") {
        this.thumbnail_url = event.instagramPost.thumbnailUrl;
      }
      this.media_url = event.media_url;
      this.id = `${event.id}`;
      this.ig_id = event.ig_id;
      this.shortcode = event.shortcode;
      this.username = event.username;
      this.timestamp = moment(event.timestamp).format("YYYY-MM-DD HH:mm:ss");
      this.caption = `${event.caption} ${
        this.requiredAccount ? `#${this.requiredAccount}` : ""
      } ${this.requiredHashtag ? `#${this.requiredHashtag} ` : ""}`;
    },
    async isSubmit() {
      let res = await this.channelService.getIguserinfo();
      let res2 = await this.channelService.getIgusermediainfo();
      console.log("res2", res2);
      this.userProfile = res;
      // this.ig_id = res2.ig_id;
      // this.shortcode = res2.shortcode;
      this.permalink = res2.permalink;
      // this.timestamp = moment(res2.timestamp).format("YYYY-MM-DD HH:mm:ss");
      // this.caption = `${res2.caption} ${
      //   this.requiredAccount ? `#${this.requiredAccount}` : ""
      // } ${this.requiredHashtag ? `#${this.requiredHashtag} ` : ""}`;
      // this.username = res2.username;
      this.campaignId = this.store.MyPageModals.campaignId;
      this.bookingId = this.store.MyPageModals.bookingId;
      this.channelId = this.store.MyPageModals.channelId;
      // this.media_url = res2.media_url;
      // console.log("unique state",this.userProfile);
      if (
        this.store.MyPageModals.reRegistration ||
        this.store.MyPageModals.reRegistrationNo
      ) {
        this.myPageService
          .putCampaignDetail(
            this.store.MyPageModals.reRegistrationNo,
            this.campaignId,
            this.bookingId,
            this.channelId,
            this.caption,
            this.id,
            this.ig_id,
            this.comments_count,
            this.like_count,
            this.media_product_type,
            this.media_type,
            this.media_url,
            this.thumbnail_url,
            this.permalink,
            this.shortcode,
            this.username,
            this.timestamp,
            this.userProfile
          )
          .then(async (res) => {
            console.log("if true res", res);
            if (res.status == 200) {
              let res3 = this.myPageService.patchCampaign(
                this.store.MyPageModals.reRegistrationNo,
                this.campaignId,
                this.bookingId
              );
              console.log(res3);
            }
          });
        // console.log("if true unique state", this.userProfile);
      } else {
        this.myPageService
          .postCampaign(
            this.campaignId,
            this.bookingId,
            this.channelId,
            this.caption,
            this.id,
            this.ig_id,
            this.comments_count,
            this.like_count,
            this.media_product_type,
            this.media_type,
            this.media_url,
            this.permalink,
            this.shortcode,
            this.username,
            this.timestamp,
            this.userProfile
          )
          .then((res) => {
            console.log("if false res", res);
            if(res.status === 201) {
              // this.store.state.FltCampaignData = [];
              // this.store.methods.getcampList(1);
              this.store.state.isPostModalVisible = false;
            }
          });
        // console.log("if false unique state", this.userProfile);
      }
    },
  },
};
</script>

<style scoped>
.modal-content {
  padding: 24px 10px 10px;
  background: linear-gradient(
    175.12deg,
    rgba(255, 255, 255, 0.5) -23.33%,
    #ffffff 34.31%
  );
  /* backdrop-filter: blur(30px); */
}
.Post-header {
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #f7f7f7;
}
.Post-header .img-con {
  width: 93.75px;
  height: 100px;
  border-radius: 6px;
}
.Post-header .img-con img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.Post-header .item-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 11px;
  width: calc(100% - 100px);
}
.Post-header .item-desc h2 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
}
.Post-header .item-desc h4 {
  font-size: 12px;
  line-height: 14px;
  color: #25282b;
  margin-top: 5px;
}
.Post-header .item-desc h6 {
  font-size: 12px;
  line-height: 16px;
  color: #5700ff;
  margin-top: 5px;
}
.post-card-con {
  max-height: 250px;
  overflow-y: auto;
  padding-bottom: 30px;
}
.refresh-btn {
  text-align: right;
  padding: 12px 0 4px;
}
.refresh-btn img {
  margin: 0 0 0 auto;
}
.post-footer {
  display: flex;
  width: 100%;
}
.btn-grey {
  background: #e5e5e5;
  border-radius: 0px 0px 0px 6px;
  color: #797979;
  font-size: 14px;
  line-height: 18px;
  width: 50%;
}
.post-footer .btn-black {
  width: 50%;
  font-size: 14px;
  line-height: 18px;
}
.btn-outline-block {
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 14px 0;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  margin: 4px 0 10px;
}
</style>