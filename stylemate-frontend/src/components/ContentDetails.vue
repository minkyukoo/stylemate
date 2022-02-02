<template>
  <!-- <ion-header>
    <ion-toolbar>
      <ion-title>Content Detaisl</ion-title>
    </ion-toolbar>
  </ion-header> -->
  <ion-content :fullscreen="true" >
   <div class="ion-page">
      <img
        src="@/assets/images/Rectanglec5.png"
        alt="modalImage"
        class="modalimage"
      />
      <p class="text">
        #streetfashion #swoofa #hoodie #streetfashion #swoofa #hoodie
        #streetfashion #sufa #hoodie #streetfashion #sufa #hoodie to close
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

export default defineComponent({
  name: "ContentDetails",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: { IonContent, IonButton },
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
