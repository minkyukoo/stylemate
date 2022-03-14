<template>
  <!-- <ion-header>
    <ion-toolbar>
      <ion-title>Content Detaisl</ion-title>
    </ion-toolbar>
  </ion-header> -->
  <Modal modalSize="modal-lg" v-show="store.state.contentDetailsModal">
    <template v-slot:header>
      <div></div>
    </template>
    <template v-slot:body>
      <div class="details-body">
        <img
          :src="[modalImg ? modalImg : '']"
          alt="img"
          class="modalimage"
        />
        <ul class="text">
          <li v-for="(item,index) in description" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:footer>
      <Button
        :name="'닫기'"
        :style="'btn-dark w-100'"
        v-on:buttonEvent="() => (store.state.contentDetailsModal = false)"
      />
      <!-- <button
        @click="() => (store.state.contentDetailsModal = false)"
        class="btn-dark"
      >
        to close
      </button> -->
    </template>
  </Modal>
</template>

<script>
import { inject, defineComponent } from "vue";
import ContentService from "@/services/ContentService";
import Modal from "./Modal.vue";
import Button from "./MyPage/MyPageTopButton.vue";

export default defineComponent({
  name: "ContentDetails",

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },

  data() {
    return {
      new_contents: {},
      description: [],
      modalImg: "",
      contentService: null,
      id: null,
    };
  },
  components: { Modal, Button },
  mounted() {
    this.contentService
      .getPostDetail(this.store.state.contentDetailsId)
      .then((response) => {
        console.log(response);
        this.new_contents = response.data;
        this.description = response.data.instagramPost.hashTag;
        this.modalImg = response.data.instagramPost.thumbnailUrl
          ? response.data.instagramPost.thumbnailUrl
          : response.data.instagramPost.thumbnailOriginalUrl;
        this.id = response.data.id;
        // console.log(response.data, this.modalImg);
        // this.description = response.data.description;
      });
  },
  unmounted() {
    this.store.state.contentDetailsId = "";
    this.store.state.contentDetailsModal = false;
    this.store.state.hideBar = false;
  },
  created() {
    console.log("Page No", this.store.state.contentDetailsId);
    this.contentService = new ContentService();
    // this.contentService
    //   .getPostDetail(this.store.state.contentDetailsId)
    //   .then((response) => {
    //     console.log(response);
    //     this.new_contents = response.data;
    //     this.description = response.data.instagramPost.hashTag;
    //     this.modalImg = response.data.instagramPost.thumbnailUrl
    //       ? response.data.instagramPost.thumbnailUrl
    //       : response.data.instagramPost.thumbnailOriginalUrl;
    //     this.id = response.data.id;
    //     // console.log(response.data, this.modalImg);
    //     // this.description = response.data.description;
    //   });
  },
  methods: {
    closeModal() {
      // modalController.dismiss({ closebutton: true });
    },
  },
});
</script>
<style>
.ion-page {
  left: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  contain: layout size style;
  overflow: hidden;
  z-index: 0;
}
.details-body {
  padding: 10px 10px 36px;
}
.modalimage {
  width: 300px;
  height: 300px;
  margin-bottom: 16px;
  border-radius: 6px;
}
.text {
  text-align: center;
  color: #c4c4c4;
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
}
.text li {
  padding: 0px 3px;
}
</style>
