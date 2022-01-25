<template>
  <div>
    <ion-button @click="loginHandelar"> Login </ion-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    loginHandelar(){
      console.log('Login in clicked!');
    }
  }
};
</script>

<style lang="scss" scoped></style>
