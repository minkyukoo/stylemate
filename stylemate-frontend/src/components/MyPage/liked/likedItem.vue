<template>
  <div class="item-card">
    <div
      class="img-con cursor-pointer"
      @click="
        $router.push({
          name: 'ItemDetails',
          params: { id: progressDetails.id },
        })
      "
    >
      <img
        :src="progressDetails.imageThumbnailPath"
        :alt="progressDetails.name"
      />
      <img src="../../../assets/icons/instagram.svg" class="img-tag" alt />
    </div>
    <div class="item-desc">
      <div class="heading-wrap">
        <h2
          class="cursor-pointer"
          @click="
            $router.push({
              name: 'ItemDetails',
              params: { id: progressDetails.id },
            })
          "
        >
          {{ progressDetails.brand.korName }}
        </h2>
        <!-- <h2>{{ progressDetails.name }}</h2> -->
        <button
          type="button"
          class="like"
          @click="dislikeProduct(progressDetails.id)"
        >
          <img src="../../../assets/icons/heart-filled.svg" alt />
        </button>
      </div>
      <div>
        <h4>{{ progressDetails.name }}</h4>
        <!-- <h6>종료일 {{ dateFormat(progressDetails.createdAt) }}</h6> -->
        <div class="hashWrap">
          <span>{{ setTags(progressDetails.tag) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "@/alert/alert";
import ItemService from "@/services/ItemService";
import TokenService from "@/services/TokenService";
import UserInfoService from "@/services/UserInfoService";
export default {
  name: "ItemCard",
  props: {
    progressDetails: Object,
  },
  created() {
    this.itemservice = new ItemService();
    this.tokenService = new TokenService();
    this.userInfoService = new UserInfoService();
  },
  methods: {
    dateFormat(date) {
      let dt = new Date(date);
      return `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}`;
    },

    setTags(items) {
      var filterItems = [];
      items.forEach((value) => {
        if (value.status === "active") {
          filterItems.push("#" + value.tag);
        }
      });
      return filterItems.join(" ").toString();
    },
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
    //isUserid
    async isUserid() {
      let isLogedIn = await this.tokenService.isAuth();
      if (isLogedIn) {
        return await this.userInfoService.getUserInfo().then((res) => {
          return res.data.uid;
        });
      }
    },
    async dislikeProduct(productId) {
      // console.log('productId', productId);
      let uid;

      await this.isUserid().then((res) => {
        uid = res;
        // console.log('uid', uid);

        this.itemservice
          .influencedislikes(uid, "product", productId)
          .then((res) => {
            // console.log('dres', res);
            if (res) {
              if (res.response.status && res.response.status !== 204) {
                Toast.fire({ title: res.response.data.error.message });
              }
            } else {
              this.$emit("productDislike", true);
            }
          });
      });
      // return false;
      // console.log('dislike');
    },
  },
};
</script>

<style scoped>
.hashWrap span {
  font-size: 10px;
  color: #c4c4c4;
}

.cursor-pointer {
  cursor: pointer;
}
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
  width: 24px;
  height: 24px;
  border-radius: 6px 0px;
  font-size: 10px;
  line-height: 12px;
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
.item-desc .heading-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heading-wrap img {
  width: 16px;
  height: 15px;
  margin-right: 5px;
}
</style>
