<template>
  <button v-if="btnType == 'toparrow'" class="floatbtn toparrow-btn" type="button">
    <i class="icon icon-arrow-up"></i>
  </button>
  <button v-else-if="btnType == 'heartdefault'" class="floatbtn heartdefault-btn" type="button">
    <i class="icon icon-heart-default"></i>
  </button>
</template>

<script>
export default {
  name: 'FloatBtn',
  props: {
    btnType: String,
  }
  
}
</script>

<style lang="scss" scoped>
.floatbtn {
  @include flex-justify-center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  &.heartdefault-btn {
    background: rgba(0, 0, 0, 0.75);
  }
  &.toparrow-btn {
    background: rgba(255, 255, 255, 0.75);
  }
}
</style>