<template>
  <div class="item-card">
    <div
      class="img-con"
      @click="
        $router.push({
          name: 'ItemDetails',
          params: { id: progressDetails.product.id },
        })
      "
    >
      <img :src="progressDetails.product.imageThumbnailPath" alt="" />
      <span
        class="img-tag"
        :class="{
          'aqua-bg': getImgTag(progressDetails) === '재등록',
          'green-bg': getImgTag(progressDetails) == '신청완료',
          'pink-bg': getImgTag(progressDetails) === '협찬선정',
          'blue-bg': getImgTag(progressDetails) === '포스트 등록',
          'yellow-bg': getImgTag(progressDetails) === '확인중',
          'grey-bg': getImgTag(progressDetails) === '협찬완료',
          'dark-bg': getImgTag(progressDetails) === '미선정',
        }"
        id="imgTag"
        >{{ getImgTag(progressDetails) }}</span
      >
    </div>
    <div class="item-desc">
      <div class="heading-wrap">
        <h2>{{ progressDetails.product.brand.korName }}</h2>
        <span
          class="cancel-tag"
          v-if="
            this.progressDetails.processStatus === 'progress' &&
            this.progressDetails.processDetailStatus === 'booking' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].bookingStatus === 'booking' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].postStatus === 'ready'
          "
          @click="
            () => {
              store.state.cancelPopup = true;
              store.MyPageModals.campaignUID = progressDetails.uid;
              store.MyPageModals.bookingID = progressDetails.booking[0].id;
              store.state.hideBar = true;
            }
          "
          >협찬취소</span
        >
      </div>
      <div>
        <h4>{{ progressDetails.product.name }}</h4>
        <h6>
          종료일
          {{
            moment(progressDetails.campaignSchedule.finishedAt).format(
              "YYYY.MM.DD  h:mm"
            )
          }}
        </h6>
        <div
          class="item-button"
          v-if="
            this.progressDetails.processStatus === 'progress' &&
            this.progressDetails.processDetailStatus === 'posting' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].bookingStatus === 'join' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].postStatus === 'post_modify_request' &&
            store.state.sponsorTabState !== 'application-details'
          "
        >
          <button
            @click="
              () => {
                store.state.isReRegisterModalVisible = true;
                store.state.hideBar = true;
                store.MyPageModals.reRegistrationNo = this.progressDetails.id;
                store.MyPageModals.productID = this.progressDetails.product.id;
                store.MyPageModals.reRegistration = true;
                store.MyPageModals.campaignId =
                  this.progressDetails.campaignSchedule.campaignId;
                store.MyPageModals.bookingId =
                  this.progressDetails.booking[0].id;
                store.MyPageModals.channelId =
                  this.progressDetails.booking[0].channelId;
              }
            "
          >
            재등록
          </button>
        </div>
        <div
          class="item-button"
          v-else-if="
            this.progressDetails.processStatus === 'progress' &&
            this.progressDetails.processDetailStatus === 'posting' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].bookingStatus === 'join' &&
            this.progressDetails.booking[
              this.progressDetails.booking.length - 1
            ].postStatus === 'post_request' &&
            store.state.sponsorTabState !== 'application-details'
          "
        >
          <button
            @click="
              () => {
                store.state.isPostModalVisible = true;
                store.state.hideBar = true;
                store.MyPageModals.productID = this.progressDetails.product.id;
                store.MyPageModals.campaignId =
                  this.progressDetails.campaignSchedule.campaignId;
                store.MyPageModals.bookingId =
                  this.progressDetails.booking[0].id;
                store.MyPageModals.channelId =
                  this.progressDetails.booking[0].channelId;
              }
            "
          >
            포스트 등록하기
          </button>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import moment from "moment";
export default {
  name: "ItemCard",
  props: {
    progressDetails: Object,
  },
  data() {
    return {
      Modaltype: "",
      tagShow: false,
    };
  },
  setup() {
    const store = inject("store");

    // function setTab(val) {
    //   store.state.sponsorTabState = val;
    // }

    return {
      store,
      // setTab,
    };
  },
  created() {
    this.moment = moment;
  },
  // updated() {
  //   if(this.store.state.cancelPopup) {

  //   }
  // },
  methods: {
    getImgTag(progressDetails) {
      if (
        progressDetails.processStatus ||
        progressDetails.processDetailStatus ||
        progressDetails.booking[progressDetails.booking.length - 1]
          .bookingStatus ||
        progressDetails.booking[progressDetails.booking.length - 1].postStatus
      ) {
        // let tag = document.getElementById("imgTag");
        // console.log(progressDetails.booking[progressDetails.booking.length - 1]);
        if (
          progressDetails.processStatus === "progress" &&
          progressDetails.processDetailStatus === "booking" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "booking" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "ready"
        ) {
          this.tagShow = true;
          return "신청완료";
        } else if (
          progressDetails.processStatus === "progress" &&
          progressDetails.processDetailStatus === "posting" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "join" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "post_request"
        ) {
          this.tagShow = true;
          this.Modaltype = "post-registration";
          return "포스트 등록";
        } else if (
          progressDetails.processStatus === "progress" &&
          progressDetails.processDetailStatus === "posting" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "join" &&
          (progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "post_progress" ||
            progressDetails.booking[progressDetails.booking.length - 1]
              .postStatus === "post_modify_completed")
        ) {
          this.tagShow = true;
          return "확인중";
        } else if (
          progressDetails.processStatus === "progress" &&
          progressDetails.processDetailStatus === "posting" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "join" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "post_modify_request"
        ) {
          this.tagShow = true;
          this.Modaltype = "re-registration";
          return "재등록";
        } else if (
          progressDetails.processStatus === "progress" &&
          progressDetails.processDetailStatus === "posting" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "join" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "ready"
        ) {
          this.tagShow = true;
          this.Modaltype = "sponsor-selection";
          return "협찬선정";
        } else if (
          (progressDetails.processStatus === "progress" ||
            progressDetails.processStatus === "finish") &&
          (progressDetails.processDetailStatus === "announce" ||
            progressDetails.processDetailStatus === "posting" ||
            progressDetails.processDetailStatus === "finish") &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "booking" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "ready"
        ) {
          this.tagShow = true;
          return "미선정";
        } else if (
          (progressDetails.processStatus === "progress" ||
            progressDetails.processStatus === "finish") &&
          progressDetails.processDetailStatus === "posting" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .bookingStatus === "join" &&
          progressDetails.booking[progressDetails.booking.length - 1]
            .postStatus === "finish"
        ) {
          this.tagShow = true;
          return "협찬완료";
        }
      }
    },
    // getColor(progressDetails) {
    //   if (
    //     progressDetails.processStatus === "progress" &&
    //     progressDetails.processDetailStatus === "posting" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "join" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "post_modify_request"
    //   ) {
    //     return "#addad9bf";
    //   } else if (
    //     progressDetails.processStatus === "progress" &&
    //     progressDetails.processDetailStatus === "posting" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "join" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "ready"
    //   ) {
    //     return "rgba(87, 0, 255, 0.75)";
    //   } else if (
    //     progressDetails.processStatus === "progress" &&
    //     (progressDetails.processDetailStatus === "announce" ||
    //       progressDetails.processDetailStatus === "booking") &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "join" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "ready"
    //   ) {
    //     return "rgba(226, 153, 195, 0.75)";
    //   } else if (
    //     progressDetails.processStatus === "progress" &&
    //     progressDetails.processDetailStatus === "posting" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "join" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "postProgress"
    //   ) {
    //     return "rgba(255, 214, 123, 0.75)";
    //   } else if (
    //     (progressDetails.processStatus === "progress" ||
    //       progressDetails.processStatus === "finish") &&
    //     progressDetails.processDetailStatus === "posting" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "join" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "finish"
    //   ) {
    //     return "rgba(188, 212, 108, 0.75)";
    //   } else if (
    //     (progressDetails.processStatus === "progress" ||
    //       progressDetails.processStatus === "finish") &&
    //     (progressDetails.processDetailStatus === "announce" ||
    //       progressDetails.processDetailStatus === "posting" ||
    //       progressDetails.processDetailStatus === "finish") &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .bookingStatus === "booking" &&
    //     progressDetails.booking[progressDetails.booking.length - 1]
    //       .postStatus === "ready"
    //   ) {
    //     return "rgba(196, 196, 196, 0.75)";
    //   } else {
    //     return "";
    //   }
    // },
  },
};
</script>

<style scoped>
.item-card {
  display: flex;
  margin-bottom: 24px;
}
.item-card .img-con {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  position: relative;
}
.item-card .img-con .img-tag {
  position: absolute;
  top: 0;
  left: 0;
  /* background: rgba(173, 218, 217, 0.75); */
  backdrop-filter: blur(10px);
  border-radius: 6px 0px;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
  display: inline-block;
  padding: 3px 4px;
}
.item-card .img-con img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.item-card .item-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 12px;
  width: calc(100% - 100px);
}
.item-desc .heading-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heading-wrap .cancel-tag {
  font-size: 10px;
  line-height: 12px;
  color: #797979;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 2px 8px;
  cursor: pointer;
}
.item-desc h2 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
}
.item-desc h4 {
  font-size: 12px;
  line-height: 14px;
  color: #25282b;
  margin-top: 5px;
}
.item-desc h6 {
  font-size: 12px;
  line-height: 16px;
  color: #5700ff;
  margin-top: 5px;
}
.item-button button {
  width: 100%;
  padding: 10px 0;
  background: #ffffff;
  border: 1px solid #595959;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
  color: #090909;
  margin-top: 10px;
}
.item-card .img-con .img-tag.aqua-bg {
  background: rgba(173, 218, 217, 0.75);
}
.item-card .img-con .img-tag.pink-bg {
  background: rgba(226, 153, 195, 0.75);
}
.item-card .img-con .img-tag.blue-bg {
  background: rgba(87, 0, 255, 0.75);
}
.item-card .img-con .img-tag.yellow-bg {
  background: rgba(255, 214, 123, 0.75);
}
.item-card .img-con .img-tag.green-bg {
  background: rgba(188, 212, 108, 0.75);
}
.item-card .img-con .img-tag.dark-bg {
  background: rgba(121, 121, 121, 0.75);
}
.item-card .img-con .img-tag.grey-bg {
  background: rgba(196, 196, 196, 0.75);
}
</style>