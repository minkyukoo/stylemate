<template>
  <div class="notification" to="/notification" @click="alertConfirm()">
    <div class="notification-inner">
      <i class="icon-notification"></i>
      <!-- <span v-if="userLoggedIn && notificationCount > 1" class="badge">{{
        notificationCount
      }}</span> -->
      <i v-if="userLoggedIn && notificationCount > 1" class="icon-blue-dot"></i>
    </div>
  </div>
</template>

<script>
// import { IonPopover } from '@ionic/vue';
import UserInfoService from "@/services/UserInfoService";
import { API } from "@/services/AxiosInstance";

export default {
  name: "NotificationIcon",
  // components: { IonPopover },
  props: {
    notificationCount: Number,
    userLoggedIn: Boolean,
  },
  created() {
    this.user = new UserInfoService();
  },
  methods: {
    alertConfirm() {
      if (this.$props.userLoggedIn) {
        this.user.getUserInfo().then((userInfo) => {
          API.patch(`/users/${userInfo.data.uid}/alarm-confirm`)
            .then((alarm) => {
              console.log(alarm);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      this.$router.push({ path: "/notification" });
      // alert("test")
    },
  },
};
</script>

<style scoped>
.notification {
  height: 24px;
  width: 24px;
  position: absolute;
  right: 0;
  cursor: pointer;
}
.notification .icon-blue-dot {
  position: absolute;
  right: 0px;
  top: -2px;
  width: 4px;
  height: 4px;
  background-color: #00a8ff;
  border-radius: 50%;
}
.notification .badge {
  position: absolute;
  background: #090909;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
}
/* .inner-header .notification .badge,
.main-header .notification .icon-blue-dot {
  display: none;
} */
</style>
