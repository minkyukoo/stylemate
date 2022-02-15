<template>
  <div class="sponsor-box">
    <div class="sponsor-item">
      <h3>0</h3>
      <p>Sponsorship</p>
    </div>
    <div class="sponsor-item">
      <h3>0</h3>
      <p>post activity</p>
    </div>
    <div class="sponsor-item">
      <h3>0</h3>
      <p>like</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorshipBox",
};
</script>

<style scoped>
.sponsor-box {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 20px 0px;
  display: flex;
  background: #fff;
  margin-top: 5px;
}
.sponsor-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  border-right: 1px solid #f7f7f7;
}
.sponsor-item:last-child {
  border-right: none;
}
</style>