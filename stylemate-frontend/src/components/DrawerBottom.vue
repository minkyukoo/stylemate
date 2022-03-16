<template>
  <!-- type = cancel -->
  <div class="drawer-wrap" v-if="isCancelspon">
    <div class="drawer-top">
      <h2>캠페인 협찬 신청을 취소하시겠어요?</h2>
    </div>
    <div class="button-group">
      <button class="grey-btn" @click="cancelspon">취소</button>
      <button class="black-btn" @click="applycancelspon(uid, bookingId)">신청하기</button>
    </div>
  </div>
  <div class="drawer-wrap" v-else>
    <div class="drawer-top">
      <div class="selectWrap" v-for="(item, i) in productColor" :key="item.optionName">
        <vue-select
          :placeholder="item.optionName"
          :options="item.optionValues"
          v-model="selected"
          @toggle="control(i)"
          :close-on-select="true"
        ></vue-select>
      </div>
    </div>
    <div class="button-group">
      <button class="grey-btn" @click="cancelspon">취소</button>
      <button class="black-btn" @click="apply" :disabled="disable">신청하기</button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
import { defineComponent } from "vue";
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
      productColor: "",
      selected: "",
      disable: true,
      option: "",
      selected1: "",
      selected2: "",
    };
  },
  setup() {
    // const selectedItem = ref("Black");
    // const options = [
    //    'Black', 'White', 'Green', 'Yellow', 'Bright blue','Black', 'White', 'Green', 'Yellow', 'Bright blue'
    // ];
    // return { options };
  },
  created() {
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    var proId = this.$route.params.id;
    this.itemService.getProductDetails(proId).then((data) => {
      this.productColor = data.productOption;
      this.compainId = data.campaign[0].id;
      this.uid = data.campaign[0].uid;
      if (data.campaign[0].booking.length > 0) {
        this.bookingId = data.campaign[0].booking[0].id;
        console.log('bookingID:', this.bookingId);
      }
      // console.log("this.productColor", this.productColor);
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
    control(i) {
      if (this.selected != "") {
        this.disable = false;
      } else {
        this.disable = true;
      }
      if (this.selected != "" && i == 0) {
        this.selected1 = this.selected;
      }
      if (this.selected != "" && i == 1) {
        this.selected2 = this.selected;
      }

      this.option =
        this.selected1 == ""
          ? this.selected2
          : this.selected2 == ""
            ? this.selected1
            : `${this.selected1}/${this.selected2}`;
      console.log(this.option);
    },
    cancel() {
      console.log(this.selected);
      //   alert(this.selected);
      // this.$router.go(-1);
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
        .then((data) => {
          console.log(data);
          this.$emit("closePopup", true);
        });
    },
    // close cancel sponsership popup
    cancelspon() {
      this.$emit("closePopup", true);
    },
    // Apply cancel sponsership popup
    applycancelspon(campUid, campbookingId) {
      console.log('applycancelspon');
      this.itemService.cancelSponsership(campUid, campbookingId).then((res) => {
        console.log('rescel:', res);
        this.$emit("closePopup", true);
      });
    }
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
</style>