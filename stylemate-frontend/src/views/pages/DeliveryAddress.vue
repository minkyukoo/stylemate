<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="배송지 정보" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="contWrap">
        <ul>
          <li>
            <div>
              <label>배송지</label>
            </div>
          </li>
        </ul>
        <ul>
          <li v-for="item in addressList" :key="item.id">
            <div>{{ item.address1 }} , {{ item.address2 }}</div>
            <div class="pointer">
              <router-link :to="'/update-address/'+ item.id">
              <img
                src="@/assets/icons/arrow-right.svg"
              />
              </router-link>
            </div>
          </li>
          <!-- <li>
            <div>서울특별시 강남구 삼성로 95길 6</div>
            <div class="pointer">
              <img src="@/assets/icons/arrow-right.svg" />
            </div>
          </li>
          <li>
            <div>서울특별시 서초구 반포대로125</div>
            <div class="pointer">
              <img src="@/assets/icons/arrow-right.svg" />
            </div>
          </li> -->
        </ul>
        <ul class="secList">
          <router-link to="/shippingInfo">
            <li>
              <button type="button">배송지 추가</button>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="button-group">
        <button class="black-btn" @click="$router.go(-1)">확인</button>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
import UserInfoService from "@/services/UserInfoService";
// import MyTop from '@/components/MyPageTop.vue';
// import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default {
  name: "DeliveryAddress",
  components: { TopNav, IonContent, IonPage },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  data() {
    return {
      addressList:"",
      // isModalVisible: false,
      // isActive: false,
    };
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted(){
   this.userInfoService.getUserInfo().then((res) => {
      // localStorage.setItem("userId", res.data.uid);
      this.userInfoService.getUserdeliveries(res.data.uid).then((res) => {
        this.addressList=res;
        // localStorage.setItem("del_list", JSON.stringify(res));
      });
    });
  },
  methods: {
    showId(ids) {
      alert(ids);
    },
    openlink() {
      console.log("clivk");
    },
  },
  
};
</script>

<style scoped>
.contWrap {
  padding: 20px 20px 150px;
}
.contWrap ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px 0;
}
.contWrap li label {
  color: #c4c4c4;
  font-size: 12px;
  font-weight: 700;
}
.contWrap ul li lspanabel {
  color: #25282b;
  font-size: 14px;
  font-weight: 400;
}

.secList,
.thirdList,
.forthList {
  margin-top: 40px;
}
.secList button {
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #595959;
  color: #595959;
  padding: 14px 0;
}

.thirdList li {
  justify-content: flex-start !important;
}
.thirdList li ion-checkbox {
  margin-right: 10px;
}
.button-group {
  bottom: 0;
  max-width: 500px;
  position: fixed;
  width: 100%;
}
.button-group button {
  width: 100%;
  display: block;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 21px;
}
.button-group button.grey-btn {
  color: #797979;
  background: #e5e5e5;
}
.button-group button.black-btn {
  color: #ffffff;
  background: #090909;
}
.pointer {
  cursor: pointer;
}
</style>