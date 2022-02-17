<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="알림"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true" part="scroll">
      <div class="inner-container">
        <!-- <DropDown class="pad-t-32" /> -->
        <div class="notiWrap">
          <vue-select placeholder="전체알림" :options="options"> </vue-select>
        </div>
        <ul class="loopList">
          <li v-for="item in notifications" :key="item.id">
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>{{ humanReadableFormat(item.createdAt) }}</span>
              <b>{{ item.title }}</b>
              <p>{{ item.message }}</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <!-- <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li> -->
          <!-- <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li>
          <li>
            <span class="circle"
              ><img src="@/assets/icons/calender.svg"
            /></span>
            <div class="loopInner">
              <span>2021년 01월 26일</span>
              <b>포스트 등록 요청</b>
              <p>협찬요청이 승인되었습니다. 포스트 등록을 진행해주세요</p>
              <a href="#">바로가기 <img src="@/assets/icons/smallarw.png" /></a>
            </div>
          </li> -->
        </ul>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
// import DropDown from "@/components/utilities/DropDown.vue";

import VueNextSelect from "vue-next-select";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "Notifications",
  components: { TopNav, IonContent, IonPage, "vue-select": VueNextSelect },
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    this.userInfoService.getUserInfo().then((userInfo) => {
      this.userInfoService.getNotice(userInfo.data.uid).then((notice) => {
        this.notifications = notice.data.data;
      });
    });
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
  },
  setup() {
    // const selectedItem = ref("Black");

    const options = [
      "all",
      "Campaign",
      "Selection",
      "Sample Post Registration",
      "Edit sample post",
      "Post registration",
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
  margin: 0 0 0 10px;
  width: 5px;
  height: 9px;
}
</style>
