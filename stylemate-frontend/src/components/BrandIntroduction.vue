<template>
  <ion-page>
    <!-- header -->
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="mainse">
        <h1>Brand...Introduction</h1>
        <h3>
          ‘Nike’ starts with having faith and confidence in my own abilities and
          values.<br />
          It has the meaning of French 'amour propre' which contains the meaning
          of self-esteem and self-respect. We pursue a sensible everyday look so
          that the wearer can have a natural look of their own with minimal and
          neat details and a snug fit that fits the body type.
        </h3>
        <img src="@/assets/images/Rectangle10.png" class="imgsec" />
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "BrandIntroduction",
  components: { IonContent, IonPage },
};
</script>

<style>
.mainse {
  text-align: left;
}
</style>
