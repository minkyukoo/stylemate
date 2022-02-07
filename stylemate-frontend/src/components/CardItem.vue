<template>
  <div class="main">
    <ul>
        <li>
            <figure><img src="@/assets/images/Rectangle-2.jpg"></figure>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  components: "CardItem",
};
</script>

<style scoped>
.main {
  width: fit-content;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  padding: center;
}
</style>