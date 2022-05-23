<template>
  <!-- type = cancel -->
  <div class="drawer-wrap" v-if="isCancelspon">
    <div class="drawer-top">
      <h2>캠페인 협찬 신청을 취소하시겠어요?</h2>
    </div>
    <div class="button-group">
      <button class="grey-btn" @click="cancelspon">아니요</button>
      <button class="black-btn" @click="applycancelspon(uid, bookingId)">
        예
      </button>
    </div>
  </div>
  <div class="drawer-wrap" v-else>
    <div class="drawer-top">
      <div class="selectWrap" v-for="(item, i) in productColor" :key="i">
        <vue-select
          :placeholder="item.optionName"
          :options="item.optionValues"
          v-model="selected[i]"
          @toggle="control()"
          :close-on-select="true"
          :disabled="item.disabled"
        ></vue-select>
      </div>
    </div>
    <div class="button-group">
      <button class="grey-btn" @click="cancelspon">취소</button>
      <button class="black-btn" @click="apply" :disabled="disable">
        신청하기
      </button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
import { defineComponent } from "vue";
import Toast from "@/alert/alert.js";
import VueNextSelect from "vue-next-select";
import ItemService from "@/services/ItemService";
import UserInfoService from "@/services/UserInfoService";
export default defineComponent({
  name: "DrawerBottom",
  components: {
    "vue-select": VueNextSelect,
  },
  props: {
    isCancelspon: Boolean,
  },
  data() {
    return {
      uid: "",
      compainId: "",
      channelId: "",
      bookingId: "",
      deliveryId: "",
      productColor: [],
      selected: [],
      disable: true,
      option: "",
      selected1: "",
      selected2: "",
      conditionDisable: false,
    };
  },
  setup() {
    const getOptionValue = (e) => {
      console.log(e.target.value);
    };

    return { getOptionValue };
  },

  created() {
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
  },
  watch: {
    option: function (val) {
      console.log("change", val, this.productColor.length);
      let arr = val.split("/");
      let fillterArr = arr.filter((x) => {
        return x !== "";
      });
      console.log(fillterArr);
      if (!val || fillterArr.length < 1) {
        console.log("condition 1st");
        for (let i = 1; i < this.productColor.length; i++) {
          this.productColor[i].disabled = true;
        }
      } else if (fillterArr.length === this.productColor.length) {
        console.log("condition 3rd", fillterArr.length);
        for (let i = 1; i < this.productColor.length; i++) {
          this.productColor[i].disabled = false;
        }
      } else if (1 <= fillterArr.length < this.productColor.length) {
        console.log(
          "condition 2nd",
          fillterArr.length,
          this.productColor.length
        );
        for (
          let i = fillterArr.length + 1;
          i <= this.productColor.length;
          i++
        ) {
          if (fillterArr.length + 1 === this.productColor.length) {
            this.productColor[i - 1].disabled = false;
          } else {
            this.productColor[i - 1].disabled = true;
          }
        }
      } else {
        for (let i = 1; i < this.productColor.length; i++) {
          this.productColor[i].disabled = true;
        }
      }
    },
  },
  mounted() {
    var proId = this.$route.params.id;
    this.itemService.getProductDetails(proId).then((data) => {
      this.productColor = data.productOption;
      if (data.productOption.length > 1 && this.selected.length < 1) {
        for (var i = 1; i < data.productOption.length; i++) {
          this.productColor[i].disabled = true;
        }

        // let lastproduct = data.productOption.pop()
        // lastproduct.disabled = true;
        // console.log("last", lastproduct);
        // this.productColor = [...data.productOption, lastproduct];
      }
      console.log("this.productColor", this.productColor);
      this.compainId = data.campaign[0].id;
      this.uid = data.campaign[0].uid;
      if (data.campaign[0].booking.length > 0) {
        this.bookingId = data.campaign[0].booking[0].id;
        // console.log("bookingID:", this.bookingId);
      }
      // console.log(this.compainId)
    });
    this.userInfoService.getUserInfo().then((res) => {
      this.channelId = res.data.influence.channel[0].id;
      // this.uid = res.data.uid;
    });
    this.userInfoService.getUserdeliveries(this.uid).then((res) => {
      this.deliveryId = res[0].id;
    });
  },
  methods: {
    control() {
      var option = this.selected.filter((f) => f !== null && f !== undefined);
      if (option.length > 0 && this.option !== option.join("/")) {
        this.disable = false;
        this.option = option.join("/");
      } else {
        this.disable = true;
      }
    },

    apply() {
      this.itemService
        .applySponsership(
          this.uid,
          this.compainId,
          this.channelId,
          this.deliveryId,
          this.option
        )
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          // console.log(data);
          this.$emit("closePopup", true);
          if (data.message == "Request failed with status code 412") {
            Toast.fire({ title: "인스타그램 채널 연결 상태를 확인해주세요." });
          }
        }).catch((err) => {
          console.log(err.message);
          if (data.message == "Request failed with status code 412") {
            Toast.fire({ title: "인스타그램 채널 연결 상태를 확인해주세요." });
          }
        });
    },
    // close cancel sponsership popup
    cancelspon() {
      this.$emit("closePopup", true);
    },
    // Apply cancel sponsership popup
    applycancelspon(campUid, campbookingId) {
      // console.log("applycancelspon");
      // eslint-disable-next-line no-unused-vars
      this.itemService
        .cancelSponsership(campUid, campbookingId)
        .then((res) => {
          console.log("rescel:", res);
          this.$emit("closePopup", true);
        })
        .catch((err) => {
          console.log("err:", err);
          this.$emit("closePopup", true);
          if (err.message == "Request failed with status code 412") {
            Toast.fire({ title: "신청마감일이 지나 신청 취소를 할 수 없습니다." });
          }
          else {
            Toast.fire({ title: err.message });
          }
        });
    },
  },
});
</script>

<style scoped>
.drawer-wrap {
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 20px 20px 0px 0px;
}
.drawer-top {
  padding: 24px 20px;
}
.drawer-top h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  text-align: center;
  padding: 46px 0px;
}
.drawer-top .selectWrap {
  margin-top: 4px;
}
.drawer-top .selectWrap:first-child {
  margin-top: 0;
}
.drawer-top .selectWrap .vue-select {
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
}
.vue-select:focus {
  border: 1px solid #5700ff;
}
.button-group {
  display: flex;
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
.xyz {
  border: 1px solid red;
}
</style>
