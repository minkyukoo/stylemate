<template>
  <transition name="modal-fade">
    <div class="popup-backdrop" v-show="store.state.cancelPopup">
      <div class="popup-container">
        <div class="popup-body">
          <h3>
            신청하신 협찬을 취소하시겠습니까?
          </h3>
          <p>확인을 클릭하시면 협찬이 취소됩니다.</p>
        </div>
        <div class="popup-footer">
          <button
            class="btn-grey"
            @click="() => (store.state.cancelPopup = false)"
          >
            취소
          </button>
          <button type="button" class="btn-black" @click="confirmDelete">
            확인
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MyPageService from "@/services/MyPageService.js";
import { inject } from "vue";
export default {
  name: "cancelPopUp",
  data() {
    return {
      myPageService: null,
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
  methods: {
    async confirmDelete() {
      let res = await this.myPageService.deleteSponsor(
        this.store.MyPageModals.campaignUID,
        this.store.MyPageModals.bookingID
      );
      if (res.status === 204) {
        this.store.state.FltCampaignData = [];
        this.$emit("cancelSponsor");
        console.log("delete", res);
        // this.store.methods.getcampList();
      }
    },
  },
  unmounted() {
    this.store.MyPageModals.campaignUID = null;
    this.store.MyPageModals.bookingID = null;
    this.store.state.hideBar = false;
  },
};
</script>

<style scoped>
.popup-backdrop {
  background: rgba(9, 9, 9, 0.75);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 500px;
  height: 100%;
  z-index: 9;
  display: flex;
  align-items: flex-end;
}
.popup-container {
  background: linear-gradient(
    150.57deg,
    rgba(255, 255, 255, 0.5) -60.05%,
    #ffffff 71.1%
  );
  backdrop-filter: blur(30px);
  border-radius: 20px 20px 0px 0px;
  width: 100%;
}
.popup-body {
  padding: 30px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.popup-body h3 {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
  margin-bottom: 13px;
}
.popup-body p {
  font-size: 14px;
  line-height: 18px;
  color: #595959;
}
.popup-footer {
  display: flex;
}
.popup-footer button {
  width: 50%;
  height: 60px;
  font-size: 14px;
  line-height: 18px;
}
.popup-footer .btn-grey {
  background: #e5e5e5;
  color: #797979;
}
.popup-footer .btn-black {
  background: #090909;
  color: #ffffff;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>