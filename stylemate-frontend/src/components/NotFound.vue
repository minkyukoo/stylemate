<template>
  <div class="pagenotfound">
    <h1 class="title">Stylemate</h1>
    <div class="num-wrap">
      <h1 class="num">404</h1>
      <p>Page Not Found</p>
    </div>
    <router-link class="homebtn" to="/">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found',
}
</script>

// <style lang="scss" scoped>
// .pagenotfound {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: 100vh;
//   padding: 30px;
//   .title {
//     font-weight: bold;
//     font-size: 43px;
//     line-height: 59px;
//     text-align: center;
//   }
//   .num-wrap {
//     text-align: center;
//     margin-bottom: 48px;
//     .num {
//       font-size: 100px;
//       color: #757575;
//     }
//     p {
//       font-size: 20px;
//       color: #757575;
//     }
//   }
//   .homebtn {
//     @include flex-justify-center;
//     background-color: $orange-1;
//     color: $white-1;
//     height: 58px;
//     font-size: 24px;
//     line-height: 33px;
//     border-radius: 5px;
//     min-width: 260px;
//     max-width: 380px;
//     width: 100%;
//   }
// }
// </style>