<template>
  <Modal
    v-show="store.state.isReRegisterModalVisible"
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
            <img :src="small_img" alt="" />
          </div>
          <div class="item-desc">
            <div class="heading-wrap">
              <h2>{{ name }}</h2>
            </div>
            <div>
              <h4>{{ description }}</h4>
              <h6>종료일 {{ date }}</h6>
            </div>
          </div>
        </div>
        <div class="post-body">
          <div class="edit-btn">포스트 수정 요청</div>
          <div class="post-card-con">
            <div class="hashtagBox">
              <p>
                {{ rejection_msg }}
              </p>
            </div>
            <div class="grey-box">
              <img :src="insta_post.img" alt="" />
            </div>
            <div class="description-hashtag">
              {{ insta_post.desc }}
            </div>
            <div class="flex insta-popularity">
              <span class="flex mr-3.5">
                <img
                  src="../../../assets/icons/heart-outline-dark.svg"
                  alt=""
                  class="mr-1"
                />
                {{ insta_post.like }}
              </span>
              <span class="flex insta-popularity">
                <img
                  src="../../../assets/icons/comment-outline.svg"
                  alt=""
                  class="mr-1"
                />
                {{ insta_post.comment }}
              </span>
            </div>
            <div class="date-of-collection">
              Data collected on {{ insta_post.publishDate }}.
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="post-footer">
        <button
          class="btn-grey"
          @click="
            () => {
              store.state.isReRegisterModalVisible = false;
              store.state.hideBar = false;
            }
          "
        >
          닫기
        </button>
        <button
          type="button"
          class="btn-black"
          @click="
            () => {
              store.state.isReRegisterModalVisible = false;
              store.state.isPostModalVisible = true;
            }
          "
        >
          포스트 등록하기
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { inject } from "vue";
import Modal from "../../Modal.vue";
// import MyPageService from "@/services/MyPageService";
import ItemService from "@/services/ItemService";
import moment from "moment";
export default {
  name: "re-register-modal",
  data() {
    return {
      itemService: null,
      name: "",
      description: "",
      small_img: "",
      date: "",
      rejection_msg: "",
      insta_post: {
        img: "",
        desc: "",
        like: 0,
        comment: 0,
        publishDate: "",
      },
    };
  },
  created() {
    this.itemService = new ItemService();
    this.moment = moment;
  },
  mounted() {
    this.itemService
      .getProductDetails(this.store.MyPageModals.productID)
      .then((res) => {
        console.log(res);
        this.name = res.brand.korName;
        this.description = res.brand.description;
        this.small_img = res.brand.imageThumbnailPath;
        this.date = moment(res.campaign[0].campaignSchedule.finishedAt).format(
          "YYYY-MM-DD HH:mm"
        );
        this.rejection_msg = res.campaign[0].booking[0].postHistory[0].message;
        this.insta_post.img = res.campaign[0].booking[0].post?.instagramPost
          .thumbnailUrl
          ? res.campaign[0].booking[0].post?.instagramPost.thumbnailUrl
          : res.campaign[0].booking[0].post?.instagramPost.thumbnailOriginalUrl;
        this.insta_post.desc =
          `#${res.campaign[0].booking[0].post?.instagramPost.hashTag.join(
            " #"
          )} ` + res.campaign[0].booking[0].post?.instagramPost.description;
        this.insta_post.like =
          res.campaign[0].booking[0].post?.instagramPost.likeCount;
        this.insta_post.comment =
          res.campaign[0].booking[0].post?.instagramPost.commentCount;
        this.insta_post.publishDate = moment(
          res.campaign[0].booking[0].post?.instagramPost.publishDate
        ).format("YYYY-MM-DD HH:mm");
      });
  },

  // unmounted() {
  //   this.store.state.hideBar = false;
  // },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.isPostModalVisible = false;
    },
  },
};
</script>

<style scoped>
.modal-content {
  padding: 24px 10px 0;
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
  /* position: relative; */
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
}
.edit-btn {
  text-align: center;
  padding: 24px 0 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #5700ff;
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
  margin: 4px 0 40px;
}
.hashtagBox {
  padding-bottom: 24px;
  border-bottom: 1px solid #f7f7f7;
}
.hashtagBox p {
  font-size: 14px;
  line-height: 18px;
  color: #090909;
  border: 1px solid #5700ff;
  border-radius: 6px;
  padding: 16px 16px 24px;
}
.grey-box {
  width: 300px;
  height: 300px;
  background: #c4c4c4;
}
.grey-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description-hashtag {
  padding: 4px 10px 12px;
  font-size: 12px;
  line-height: 16px;
  color: #595959;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
}
.date-of-collection {
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #9d6aff;
  padding-bottom: 40px;
}
.insta-popularity {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  align-items: center;
}
</style>