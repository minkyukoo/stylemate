<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="알림"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <div class="inner-container">
        <!-- <DropDown class="pad-t-32" /> -->
        <div class="notiWrap">
          <vue-select
            placeholder="전체알림"
            :options="options"
            v-model="noticeOption"
            :close-on-select="true"
          >
          </vue-select>
        </div>
        <ul class="loopList">
          <li v-for="item in notifications" :key="item.id">
            <span class="circle">
              <img src="@/assets/icons/calender.svg" />
            </span>
            <div class="loopInner">
              <span>{{ humanReadableFormat(item.createdAt) }}</span>
              <b>{{ setTitle(item.subType) }}</b>
              <p>{{ item.message }}</p>
              <router-link
                :to="{
                  name: 'ItemDetails',
                  params: { id: item.campaign.productId },
                }"
              >
                바로가기
                <img src="@/assets/icons/smallarw.png" />
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";

import VueNextSelect from "vue-next-select";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "Notifications",
  components: { TopNav, IonPage, "vue-select": VueNextSelect },
  data() {
    return {
      notifications: [],
      noticeOption: null,
    };
  },

  created() {
    this.userInfoService = new UserInfoService();
  },

  mounted() {
    this.userInfoService.getUserInfo().then((userInfo) => {
      this.userInfoService.getNotice(userInfo.data.uid).then((notice) => {
        this.notifications = notice.data.data;
        console.log(notice.data.data);
        // this.options = notice.data.data
        //   .map((option) => option.type)
        //   .filter((v, i, a) => a.indexOf(v) === i);
      });
    });
  },

  watch: {
    noticeOption: function (type) {
      this.userInfoService.getUserInfo().then((userInfo) => {
        var typeValue = this.getValue(type);
        if (typeValue.value === "all") {
          this.userInfoService.getNotice(userInfo.data.uid).then((notice) => {
            this.notifications = notice.data.data;
            // console.log(notice.data.data);
          });
        } else {
          this.userInfoService
            .getFilterNotice(userInfo.data.uid, typeValue)
            .then((notice) => {
              this.notifications = notice.data.data;
            });
        }
      });
    },
  },

  methods: {
    humanReadableFormat(date) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let dt = new Date(date);
      let month = months[dt.getMonth()];
      return `${month} ${dt.getDate()}, ${dt.getFullYear()}`;
    },

    setTitle(arg) {
      if (arg === "postRequest") {
        return "포스트 등록 요청";
      } else if (arg === "announce") {
        return "발표하다";
      } else if (arg === "postModifyRequest") {
        return "수정 요청 게시";
      } else if (arg === "disconnected") {
        return "연결이 끊긴";
      } else if (arg === "finish") {
        return "마치다";
      } else if (arg === "postCancel") {
        return "게시물 취소";
      }
    },

    getValue(opt) {
      switch (opt) {
        case "모두":
          return { data: "type", value: "all" };
          // eslint-disable-next-line no-unreachable
          break;
        case "협찬선정":
          return { data: "subType", value: "announce" };
          // eslint-disable-next-line no-unreachable
          break;
        case "포스트 등록요청":
          return { data: "subType", value: "postRequest" };
          // eslint-disable-next-line no-unreachable
          break;
        case "포스트 수정요청":
          return { data: "subType", value: "postModifyRequest" };
          // eslint-disable-next-line no-unreachable
          break;
        case "협찬취소":
          return { data: "subType", value: "postCancel" };
          // eslint-disable-next-line no-unreachable
          break;
        case "협찬완료":
          return { data: "subType", value: "finish" };
          // eslint-disable-next-line no-unreachable
          break;
        case "연결해제확인":
          return { data: "subType", value: "disconnection" };
          // eslint-disable-next-line no-unreachable
          break;
        default:
          break;
      }
    },
  },
  setup() {
    const options = [
      "모두",
      "협찬선정",
      "포스트 등록요청",
      "포스트 수정요청",
      "협찬취소",
      "협찬완료",
      "연결해제확인",
    ];
    return { options };
  },
};
</script>

<style>
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.notiWrap {
  margin-top: 30px;
}
.notiWrap .vue-select {
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
}
.loopList {
  margin-top: 32px;
}
.loopList li {
  position: relative;
  padding: 0 0 60px 24px;
  margin-left: 20px;
}
.loopList li::before {
  border: 1px solid #e4e4e7;
  content: "";
  left: 0;
  top: -32px;
  position: absolute;
  height: 32px;
  z-index: 1;
}
.loopList li::after {
  border: 1px solid #e4e4e7;
  content: "";
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  z-index: 1;
}
.loopList li .circle {
  position: absolute;
  left: -12px;
  top: 0;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #090909;
  border-radius: 50%;
  z-index: 2;
  justify-content: center;
}
.loopList li .loopInner span {
  font-size: 14px;
  font-weight: 400;
  color: #25282b;
  margin-bottom: 16px;
  display: block;
}
.loopList li .loopInner b {
  font-size: 16px;
  font-weight: 700;
  color: #090909;
  margin-bottom: 5px;
  display: block;
}
.loopList li .loopInner p {
  font-size: 12px;
  font-weight: 400;
  color: #25282b;
  margin-bottom: 10px;
}
.loopList li .loopInner a {
  color: #c4c4c4;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.loopList li .loopInner a img {
  margin: 0 0 0 5px;
  width: 5px;
  height: 9px;
}
</style>
