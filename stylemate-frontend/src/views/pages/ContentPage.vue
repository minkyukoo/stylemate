<template>
  <div class="contents-div pad-t-40">
    <h1 class="title">BEST CONTENTS</h1>
    <!-- Content row start -->
    <div class="gridcontainer">
      <div
        v-for="(image, i) of best_contents"
        :key="i + 1"
        :class="'g-img-wrap a' + (i + 1)"
        class="cursor-pointer"
      >
        <img
          :src="[
            image.post.instagramPost.thumbnailUrl
              ? image.post.instagramPost.thumbnailUrl
              : image.post.instagramPost.thumbnailOriginalUrl,
          ]"
          v-bind:alt="img"
          @click="store.methods.setContentsDetailsModal(image.post.id,true)"
        />
      </div>
    </div>
    <br />
    <!-- Content row Ends -->

    <div>
      <h1 class="title">NEW</h1>
      <!-- New content start -->
      <div class="new-row">
        <div class="new-grid cursor-pointer" v-for="image in new_contents" :key="image">
          <img
            :src="[
              image.instagramPost.thumbnailUrl
                ? image.instagramPost.thumbnailUrl
                : image.instagramPost.thumbnailOriginalUrl,
            ]"
            v-bind:alt="img"
            @click="
              store.methods.setContentsDetailsModal(image.instagramPost.postId,true)
            "
          />
        </div>
      </div>
    </div>
    <!-- New content ends -->
    <ContentDetails v-if="store.state.contentDetailsModal" />
  </div>
</template>
<script>
import { inject } from "vue";
import ContentDetails from "../../components/ContentDetails.vue";
import ContentService from "@/services/ContentService";
// import axios from "axios";
import PostService from "@/services/PostService";
export default {
  name: "ContentPage",
  data() {
    return {
      new_contents: [],
      best_contents: [],
      // img: [
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/1" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/2" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/3" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/4" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/5" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/6" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/7" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/8" },
      //   { src: "https://source.unsplash.com/random/800x400?fashion-model/9" },

      // ],
      // img_new: [
      //   {
      //     src: "@/assets/images/Rectanglen1.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=1",
      //   },
      //   {
      //     src: "@/assets/images/Rectanglen2.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=2",
      //   },
      //   {
      //     src: "@/assets/images/Rectanglen3.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=1",
      //   },
      //   {
      //     src: "@/assets/images/Rectanglen4.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=1",
      //   },
      //   {
      //     src: "@/assets/images/Rectanglen5.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=1",
      //   },
      //   {
      //     src: "@/assets/images/Rectanglen6.png",
      //     srci: "https://source.unsplash.com/random/800x400?i=1",
      //   },
      // ],
      contentService: null,
    };
  },

  components: {
    ContentDetails,
  },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },

  created() {
    this.postService = new PostService();
    this.contentService = new ContentService();
  },
  mounted() {
    // new_contents
    this.contentService
      .getNewContent()
      .then((response) => {
        this.new_contents = response.data.data;
        console.log("content", response);
      })
      .catch((e) => {
        console.log(e);
      });

    // best_contents
    this.contentService
      .getBestContent()
      .then((res) => {
        this.best_contents = res.data;
        console.log("best_contents", res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {},
};
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
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
  height: 210px;
}

.a2 {
  grid-area: b;
  height: 100px;
}
.a3 {
  grid-area: c;
  height: 100px;
}

.a4 {
  grid-area: d;
  height: 100px;
}

.a5 {
  grid-area: e;
  height: 100px;
}

.a6 {
  grid-area: f;
  height: 100px;
}

.a7 {
  grid-area: g;
  height: 210px;
}

.a8 {
  grid-area: h;
  height: 100px;
}

.a9 {
  grid-area: i;
  height: 100px;
}
.g-img-wrap {
  border-radius: 6px;
  overflow: hidden;
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
  color: #090909;
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
