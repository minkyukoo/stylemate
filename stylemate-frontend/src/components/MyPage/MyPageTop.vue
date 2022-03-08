<template>
  <div class="">
    <div
      class="top-container"
      :style="{
        backgroundImage: `url(${store.state.MyPageTopDetails.profile_img})`,
      }"
    >
      <div class="img-con">
        <img
          :src="store.state.MyPageTopDetails.profile_img"
          v-if="store.state.MyPageTopDetails.profile_img"
        />
        <img src="@/assets/images/profile-img.png" v-else />
      </div>
      <div class="profile-desc">
        <h3>안녕하세요, {{ store.state.MyPageTopDetails.name }}</h3>
        <p>{{ store.state.MyPageTopDetails.email }}</p>
      </div>
      <div
        class="btn-con"
        v-if="
          store.state.MyPageTopState === 'cancel'
        "
      >
        <MyPageTopButton
          :name="'Reapply'"
          :style="'btn-dark'"
          v-on:buttonEvent="fireButton"
        />
      </div>
      <div
        class="btn-con"
        v-else-if="
          !store.state.isChannelExists 
        "
      >
        <MyPageTopButton
          :name="'Connecting Channels'"
          :style="'btn-dark'"
          v-on:buttonEvent="fireButton"
        />
      </div>
      <div
        class="social-media"
        v-else-if="store.state.MyPageTopState === 'approve'"
      >
        <div class="media-item">
          <a href="#" class="btn-instagram media-icons">
            <img src="@/assets/icons/instagram.svg" />
          </a>
          <span>150k</span>
        </div>
        <!-- <div class="media-item">
          <a href="#" class="btn-facebook media-icons">
            <img src="@/assets/icons/tiktok.svg" />
          </a>
          <span>150k</span>
        </div>
        <div class="media-item">
          <a href="#" class="btn-twitter media-icons">
            <img src="@/assets/icons/youtube.svg" />
          </a>
          <span>150k</span>
        </div> -->
      </div>
      <div class="btn-con" v-else-if="store.state.MyPageTopState === 'request'">
        <MyPageTopButton
          :name="'Checking channel'"
          :style="'btn-grey-outline'"
          v-on:buttonEvent="fireButton"
        />
      </div>
      <div class="btn-con" v-else-if="store.state.MyPageTopState === 'hold'">
        <MyPageTopButton
          :name="'hold'"
          :style="'btn-grey-solid'"
          v-on:buttonEvent="fireButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import MyPageTopButton from "@/components/MyPage/MyPageTopButton.vue";
import MyPageServices from "@/services/MyPageService";
export default {
  name: "MyPageTop",
  components: { MyPageTopButton },

  data() {
    return {
      viewSocialMedia: "request",
      myPageServices: null,
      defaultImg: "../../assets/images/profile-img.png",
    };
  },

  created() {
    this.myPageServices = new MyPageServices();
    this.checkState();
  },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  // mounted() {
  //   // this.getMyPageTopDetails();
  //   this.checkState();
  // },
  methods: {
    checkState() {
      if (
        this.store.state.UserId === "" ||
        this.store.state.MyPageTopDetails.name === "" ||
        this.store.state.MyPageTopDetails.email === "" ||
        this.store.state.MyPageTopDetails.profile_img === ""
      ) {
        this.myPageServices.getMyPageData().then((res) => {
          let globalState = this.store.state;
          globalState.UserId = res.data.uid;
          globalState.influenceId =
            res.data.influence.influenceStat.influenceId;
          globalState.MyPageTopDetails.name = res.data.name;
          globalState.MyPageTopDetails.email = res.data.email;
          globalState.isChannelExists = res.data.influence.channel.length > 0;
          globalState.MyPageTopState =
            res.data.influence.channel[0].stylemateStatus;
          globalState.MyPageTopDetails.profile_img = res.data.influence
            .channel[0].instagramChannel.thumbnailUrl
            ? res.data.influence.channel[0].instagramChannel.thumbnailUrl
            : res.data.influence.channel[0].instagramChannel
                .thumbnailOriginalUrl;
        });
      }
    },
    fireButton() {
      console.log("fireButton");
    },
  },
};
</script>

<style scoped>
.top-fixed {
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
}
.top-container {
  padding-top: 32px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 307px;
  position: relative;
}
.top-container::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}
.img-con {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 11px;
  position: relative;
  z-index: 9;
}
.img-con img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.btn-con {
  position: relative;
  z-index: 9;
}
/* .btn-dark {
  background: #090909;
  border: 1px solid #090909;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 20px;
} */
.profile-desc {
  margin-bottom: 20px;
  color: #c4c4c4;
  position: relative;
  z-index: 9;
}
.profile-desc h3 {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}
.profile-desc p {
  font-size: 12px;
  line-height: 12px;
  opacity: 0.6;
}
.social-media {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9;
}
.media-icons {
  width: 40px;
  height: 40px;
  background: #ffffff;
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
}
.media-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
}
.media-item span {
  font-size: 12px;
  line-height: 12px;
  color: #f7f7f7;
}
</style>