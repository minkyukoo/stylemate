<template>
  <div class="empty">{{ errors }}</div>
</template>

<script>
export default {
  name: "ErrorMsg",
  props: {
    errors: String,
  },
};
</script>

<style scoped>
.empty {
  text-align: center;
  padding: 30px 0;
  font-size: 14px;
  line-height: 17px;
  color: #c4c4c4;
}
</style>