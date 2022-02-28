<template>
  <div class="item-card">
    <div class="img-con">
      <img
        :src="`${progressDetails.campaign.product.imageThumbnailPath}`"
        alt=""
      />
      <!-- <span class="img-tag" :style="{ backgroundColor: `${getColor()}` }">{{
        progressDetails.imgTag
      }}</span> -->
    </div>
    <div class="item-desc">
      <h2>{{ progressDetails.campaign.product.brand.korName }}</h2>
      <div>
        <h4>{{ progressDetails.campaign.product.name }}</h4>
        <h6>
          End date
          {{
            moment(progressDetails.campaign.campaignSchedule.finishedAt).format(
              "YYYY.MM.DD  h:mm"
            )
          }}
        </h6>
        <!-- <div
          class="item-button"
          v-if="progressDetails.status === 're-registration'"
        >
          <button>re-registration</button>
        </div>
        <div
          class="item-button"
          v-else-if="progressDetails.status === 'post-registration'"
        >
          <button>Register a post</button>
        </div>
        <div v-else></div> -->
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
  methods: {
    getColor() {
      if (this.progressDetails.status === "re-registration") {
        return "#addad9bf";
      } else if (this.progressDetails.status === "post-registration") {
        return "rgba(87, 0, 255, 0.75)";
      } else if (this.progressDetails.status === "sponsor-selection") {
        return "rgba(226, 153, 195, 0.75)";
      } else if (this.progressDetails.status === "checking") {
        return "rgba(255, 214, 123, 0.75)";
      } else {
        return "rgba(121, 121, 121, 0.75)";
      }
    },
  },
  created() {
    this.moment = moment;
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
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
  background: rgba(173, 218, 217, 0.75);
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
  padding: 0 0 0 24px;
  width: calc(100% - 100px);
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
</style>