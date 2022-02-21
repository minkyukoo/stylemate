<template>
  <div class="Post-card-wrap" v-for="(i, e) in cardData" :key="e">
    <label class="custom-radio" :for="`radio-${e}`"
      ><div class="Post-header">
        <div class="img-con">
          <img :src="require('../../../assets/images/' + i.img)" alt="" />
        </div>
        <div class="item-desc">
          <div>
            <h4>{{ i.date }}</h4>
            <h6>{{ i.desc }}</h6>
          </div>
        </div>
      </div>
      <input type="radio" name="radio" :id="`radio-${e}`" />
      <span class="checkmark"></span>
    </label>
    <!-- <div class="pad-x-10">
      <input type="radio" class="custom-radio" id="radio1" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "PostModalCard",
  props: {
    cardData: Array,
  },
};
</script>

<style scoped>
.Post-card-wrap {
  /* display: flex;
  align-items: center; */
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 10px 0;
  margin-bottom: 10px;
  transition: all 0.3s;
}
.Post-card-wrap.active {
  border: 1px solid #5700ff;
}
.Post-header {
  display: flex;
  border-bottom: 1px solid #f7f7f7;
  flex-grow: 1;
}
.Post-header .img-con {
  width: 80px;
  height: 80px;
  border-radius: 6px;
}
.Post-header .img-con img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.Post-header .item-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 11px;
  width: calc(100% - 80px);
}
.Post-header .item-desc h4 {
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
  margin-top: 5px;
}
.Post-header .item-desc h6 {
  font-size: 10px;
  line-height: 12px;
  color: #595959;
  margin-top: 5px;
}
.custom-radio {
  display: block;
  position: relative;
  padding-left: 32px;
  /* margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 50%;
  left: 10px;
  height: 12px;
  width: 12px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  transform: translateY(-50%);
}

/* On mouse-over, add a grey background color */
.custom-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.custom-radio input:checked ~ .checkmark {
  background-color: #ffffff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.custom-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.custom-radio .checkmark:after {
  top: 3px;
  left: 3px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #5700ff;
}
</style>