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
          :src="[
            store.state.MyPageTopDetails.profile_img
              ? store.state.MyPageTopDetails.profile_img
              : '../../assets/images/profile-img.png',
          ]"
        />
      </div>
      <div class="profile-desc">
        <h3>안녕하세요, {{ store.state.MyPageTopDetails.name }}</h3>
        <p>{{ store.state.MyPageTopDetails.email }}</p>
      </div>
      <div class="social-media" v-if="store.state.MyPageTopState === 'approve'">
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
      <div class="btn-con" v-else>
        <!-- <button class="btn-dark" @click="() => (this.viewSocialMedia = true)">
          로그아웃
        </button> -->
        <MyPageTopButton
          :name="'Connecting Channels'"
          :style="'btn-dark'"
          v-on:buttonEvent="fireButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import MyPageTopButton from "@/components/MyPage/MyPageTopButton.vue";
export default {
  name: "MyPageTop",
  components: { MyPageTopButton },

  data() {
    return {
      viewSocialMedia: false,
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  methods: {
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