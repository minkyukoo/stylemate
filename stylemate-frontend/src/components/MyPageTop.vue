<template>
  <div class="">
    <div class="top-container">
      <div class="img-con">
        <img src="@/assets/images/profile-img.png" />
      </div>
      <div class="profile-desc">
        <h3>안녕하세요, 옹한아님</h3>
        <p>hana.oh@mediance.co.kr</p>
      </div>
      <div class="btn-con">
        <button class="btn-dark">로그아웃</button>
      </div>
      <!-- <div class="social-media">
        <a href="#" class="btn-instagram media-icons">
          <img src="../assets/icons/instagram.svg" />
          <span>150k</span>
        </a>
        <a href="#" class="btn-facebook">
          <img src="@/assets/images/facebook.png" />
        </a>
        <a href="#" class="btn-twitter">
          <img src="@/assets/images/twitter.png" />
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPageTop",
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
}
.btn-con {
  position: relative;
  z-index: 9;
}
.btn-dark {
  background: #090909;
  border: 1px solid #090909;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 20px;
}
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
}
</style>