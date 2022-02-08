<template>
  <!-- <ion-header>
    <ion-toolbar>
      <ion-title>Content Detaisl</ion-title>
    </ion-toolbar>
  </ion-header> -->
  <ion-content :fullscreen="true">
    <div class="ion-page" v-for="data in datas" :key="data">
      <img :src="data.src" v-bind:alt="img" class="modalimage" />
      <p class="text">
        {{data.content}}
      </p>
      <ion-button expand="full" color="dark" @click="closeModal()"
        >to close</ion-button
      >
    </div>
  </ion-content>
</template>

<script>
import { IonContent, IonButton, modalController } from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ContentDetails",
  props: {
    title: { type: String, default: "Super Modal", title: String },
  },
  data() {
    return {
      datas:[
       { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "1 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "2 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "3 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "4 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "5 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "6 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "7 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "8 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
        { src: "https://source.unsplash.com/random/800x400?i=1", 
        content: "9 #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie#streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close" },
      ]
    };
  },
  components: { IonContent, IonButton },
     mounted() {
    axios
      .get("https://elsa.beta.mediance.co.kr/stylemates/contents/6")
      .then((response) => {
        this.new_contents = response.data.data;
        console.log("contentdetaisl", response);
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
  created: function() {
		console.log('this.title', this.title);
	},
  methods: {
    closeModal() {
      modalController.dismiss({ closebutton: true });
    },
  },
});
</script>
<style>
.ion-page {
  left: 0;
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
.modalimage {
  width: 100%;
  padding: 10px;
  height: 89%;
}
.text {
  text-align: center;
  color: #c4c4c4;
  font-size: 10px;
}
</style>
