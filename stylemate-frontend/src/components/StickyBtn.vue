<template>
  <button><img src="@/assets/icons/gotop.svg" alt=""></button>
  <button><img src="@/assets/icons/gotop.svg" alt=""></button>
</template>

<script>
export default {
  name: "StickyBtn",
};
</script>

<style>
.styckyBtnHolder{
  position: absolute;
  right: 10px;
  bottom: 100px;
  z-index: 9;
  width: 44px;
}
</style>
