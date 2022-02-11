<template>
  <router-link class="notification" to="/notification">
    <div class="notification-inner">
      <i class="icon-notification"></i>
      <span class="badge">{{ notificationCount }}</span>
    </div>
  </router-link>
</template>

<script>
// import { IonRoute } from '@ionic/vue';
export default {
  name: 'NotificationIcon',
  // components: { IonRoute },
  props: {
    notificationCount: String
  }

}
</script>

<style scoped>
.notification {
  height: 24px;
  width: 24px;
  position: absolute;
  right: 0;
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
</style>