<template>
  <div class="contents-div pad-t-40">
    <h1 class="title">BEST CONTENTS</h1>
    <!-- Content row start -->
    <div class="gridcontainer">
      <div v-for="(image, i) of img" :key="i + 1" :class="'g-img-wrap a' + (i + 1)">
        <img :src="image.src" v-bind:alt="img" @click="openModal" />
      </div>
    </div>
    <br />
    <!-- Content row Ends -->

    <div>
      <h1 class="title">NEW</h1>
      <!-- New content start -->
      <div class="new-row">
        <div class="new-grid" v-for="image in new_contents" :key="image">
          <img
            :src="image.campaign.imageThumbnailPath"
            v-bind:alt="img"
            @click="openModal(image.campaign.imageMainPath, image.campaign.brandId)"
          />
        </div>
      </div>
    </div>
    <!-- New content ends -->
  </div>
</template>
<script>
import {
  modalController,
} from "@ionic/vue";
import ContentDetails from "@/components/ContentDetails.vue";
import axios from "axios";
import PostService from "@/services/PostService";
export default {
  name: "ContentPage",
  data() {
    return {
      new_contents: [],
      img: [
        { src: "https://source.unsplash.com/random/800x400?fashion-model/1" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/2" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/3" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/4" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/5" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/6" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/7" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/8" },
        { src: "https://source.unsplash.com/random/800x400?fashion-model/9" },
      ],
      img_new: [
        {
          src: "@/assets/images/Rectanglen1.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen2.png",
          srci: "https://source.unsplash.com/random/800x400?i=2",
        },
        {
          src: "@/assets/images/Rectanglen3.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen4.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen5.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen6.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
      ],
    };
  },
  created(){

    this.postService = new PostService();

  },
  mounted() {
    this.postService.getPost('post', 2).then((res) => {
      console.log('res', res);
    });
    axios
      .get("https://elsa.beta.mediance.co.kr/stylemates/contents")
      .then((response) => {
        this.new_contents = response.data.data;
        console.log("content", response);
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: ContentDetails,
        componentProps: {
          propsData: {
            title: 'String to pass!',
          },

        },
      });
      return modal.present();
    },
  },
};
</script>
<style scoped>
.contents-div {
  padding-top: 40px;
}
.gridcontainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "a a b"
    "a a c"
    "d e f"
    "h g g"
    "i g g";
}

.a1 {
  grid-area: a;
}

.a2 {
  grid-area: b;
}

.a3 {
  grid-area: c;
}

.a4 {
  grid-area: d;
}

.a5 {
  grid-area: e;
}

.a6 {
  grid-area: f;
}

.a7 {
  grid-area: g;
}

.a8 {
  grid-area: h;
}

.a9 {
  grid-area: i;
}

.g-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 156px;
  gap: 8px 8px;
  grid-auto-flow: row;
}
.new-row .new-grid {
  border-radius: 6px;
  overflow: hidden;
}
.new-row .new-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row1 {
  height: 200px;
  width: 100%;
}
.row2 {
  height: 200px;
  width: 100%;
}
.title {
  /* position: absolute; */
  /* font-family: Europa-Bold; */
  font-weight: bold;
  display: flex;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
}
.newimage {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
/* .img-wrapper{
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
} */
.io {
  width: 100%;
}
.imagesize {
  height: 100%;
  width: 100%;
}
</style>
