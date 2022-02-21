<template>
  <button type="button" :class="style" @click="FireEvent">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "MyPageTopButton",
  props: {
    name: String,
    style: String,
  },
  methods: {
    FireEvent() {
      this.$emit("buttonEvent");
    },
  },
};
</script>

<style scoped>
.btn-dark {
  background: #090909;
  border: 1px solid #090909;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 20px;
}

.btn-grey-outline {
  border: 1px solid #ffffff;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 20px;
}

.btn-grey-solid {
  border: 1px solid #c4c4c4;
  background: #c4c4c4;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 20px;
}
</style>