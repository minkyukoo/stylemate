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
              <label>배송지 등록/수정</label>
            </div>
          </li>
          <li>
            <div>
              <span @click="showModal">
                <input
                  type="text"
                  placeholder="서울특별시 강남구 삼성로 95길 6"
                  v-model="addnew"
                />
              </span>
            </div>
          </li>
          <li>
            <div>
              <span>
                <input
                  type="text"
                  placeholder="상세 주소를 입력해 주세요."
                  v-model="address2"
                />
                <small v-show="render" style="color: red"
                  >don't keep it blank</small
                >
              </span>
            </div>
          </li>
          <!-- <li class="checkBoxWrap">
            <div class="checkLabel">
              <ion-checkbox color="primary" checked disabled></ion-checkbox>
              <label style="color: #000">기본 배송지</label>
            </div>
          </li> -->
          <li class="checkboxWrap">
            <label class="check-container">
              <input type="checkbox" checked disabled />
              <span class="checkmark"></span>기본 배송지
            </label>
          </li>
        </ul>
      </div>
      <div class="button-group">
        <button class="grey-btn">삭제</button>
        <button class="black-btn" @click="submitAddress">확인</button>
      </div>

      <FullCustomModal
        v-show="isModalVisible"
        @close="closeModal"
        class="overLapmodal"
      >
        <template v-slot:header>
          <div class="overHeader">
            <h2>Modal heading</h2>
            <!-- <span @click="close">Close</span> -->
            <button type="button" @click="closeModal" aria-label="Close modal">
              Close
            </button>
          </div>
        </template>
        <template v-slot:body>
          <div class="modal-content">
            <div class="modalBody" style="max-height: 450px">
              <!-- <div class="overSearch">
                  <input type="text" placeholder="서울특별시 강남구 삼성로 95길 6">
                  <h3>Tip</h3>
                  <ul>
                    <li>
                      Loremipsum
                      <span>Loremipsum 2</span>
                    </li>
                  </ul>
                  
              </div> -->
              <VueDaumPostcode @complete="handleAddress" />
            </div>
          </div>
        </template>
      </FullCustomModal>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { VueDaumPostcode } from "vue-daum-postcode";
import UserInfoService from "@/services/UserInfoService";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
// import MyTop from '@/components/MyPageTop.vue';
// import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import FullCustomModal from "@/components/FullModal.vue";

export default {
  name: "ShippingInfo",
  components: { TopNav, IonContent, IonPage, FullCustomModal, VueDaumPostcode },
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
      uid: localStorage.getItem("userId"),
      render: false,
      isModalVisible: false,
      // isActive: false,
      addnew: "",
      name: "divii",
      recipient: "school",
      addressLocale: "domestic",
      addressZipcode: "",
      address1: "",
      address2: "",
      isDefault: true,
    };
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  methods: {
    handleAddress(data) {
      this.addnew = data.address;
      (this.addressZipcode = data.zonecode),
        (this.address1 = data.jibunAddress),
        //  alert('xcx')
        console.log(data);
      this.closeModal();
    },

    openlink() {
      console.log("clivk");
    },
    //rec, loc, zip, adr1, adr2, def
    submitAddress() {
      if (this.address2 == "") {
        this.render = true;
      } else {
        this.userInfoService
          .addaddress(
            this.uid,
            this.name,
            this.recipient,
            this.addressLocale,
            this.addressZipcode,
            this.address1,
            this.address2,
            this.isDefault
          )
          .then(() => {});
        this.render = false;
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.overLapmodal {
  z-index: 9;
  width: 500px;
  left: 50%;
  margin-left: -250px;
}
.overLapmodal .modal {
  width: 100% !important;
}

.overLapmodal .overHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}

.modal-content {
  padding: 0;
}
.overLapmodal .overHeader h2 {
  margin: 0;
  text-align: justify;
}
.overLapmodal .overSearch {
  display: flex;
  flex-direction: column;
}
.overLapmodal .overSearch input {
  border-top: 1px solid#E5E5E5;
  border-bottom: 1px solid#000;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  padding: 15px;
  margin-bottom: 30px;
}
.overLapmodal .overSearch h3,
.overLapmodal .overSearch ul {
  padding: 0 20px 30px;
}
.overLapmodal .overSearch h3 {
  margin-bottom: 10px;
  font-weight: bold;
}
.overLapmodal .overSearch ul li {
  display: flex;
  flex-direction: column;
}
.overLapmodal .overSearch ul li span {
  display: block;
  margin-top: 10px;
  color: #00c3ff;
}
.contWrap {
  padding: 20px 20px 150px;
}
.codeWrap {
  position: relative;
}
.codeWrap span {
  position: absolute;
  left: 15px;
  top: 15px;
  color: #c4c4c4;
  font-size: 14px;
}
.codeWrap input[type="text"] {
  padding-left: 50px !important;
}
.contWrap input[type="text"],
.contWrapbtn [type="button"] {
  border: 1px solid#E5E5E5;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
}
.labelGap {
  margin-bottom: 8px;
  display: flex;
}
.inlineForm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
}
.inlineForm div {
  margin: 0 2px;
}

.inlineTime {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inlineTime span:first-child {
  color: #c4c4c4;
}

.inlineTime span {
  color: #9d6aff;
  font-size: 14px;
  font-weight: 400;
}

.contWrap ul li {
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex-direction: column;
  padding: 10px 0;
}
.contWrap ul li:first-child {
  border-bottom: 1px solid #f6f6f6;
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

.checkLabel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.checkLabel label {
  margin: 0 0 0 10px;
}

.button-group {
  display: flex;
  position: fixed;
  max-width: 500px;
  bottom: 0;
  width: 100%;
}
.button-group button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
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
.checkBoxWrap {
  border: none !important;
}
</style>