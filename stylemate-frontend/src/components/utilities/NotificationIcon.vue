<template>
  <router-link class="notification" to="/notification">
    <div class="notification-inner">
      <i class="icon-notification"></i>
      <span class="badge">{{ notificationCount }}</span>
      <i class="icon-blue-dot"></i>
    </div>
  </router-link>
  <ion-popover> </ion-popover>
</template>

<script>
// import { IonPopover } from '@ionic/vue';
export default {
  name: "NotificationIcon",
  // components: { IonPopover },
  props: {
    notificationCount: String,
  },
};
</script>

<style scoped>
.notification {
  height: 24px;
  width: 24px;
  position: absolute;
  right: 0;
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
.inner-header .notification .badge,
.main-header .notification .icon-blue-dot {
  display: none;
}
</style>