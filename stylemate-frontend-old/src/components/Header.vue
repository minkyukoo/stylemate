<template>
  <div class="header bg-green-1">
    <div class="container mx-auto">
      <div class="flex items-center justify-center relative">
        <img src="../assets/images/logo-black.svg" alt="Stylemate Logo" />
        <NotificationIcon notificationCount="24" />
      </div>
    </div>
  </div>
</template>

<script>
import NotificationIcon from "./utilities/NotificationIcon.vue";
export default {
  name: "Header",
  components: { NotificationIcon }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  // background: rgba(255, 255, 255, 0.85);
  background-color: $green-1;
  backdrop-filter: blur(10px);
  
}
</style>