<template>
  <!-- <ion-page> -->
    <!-- header -->
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
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
    <!-- </ion-content> -->
    <!-- End page content -->
  <!-- </ion-page> -->
</template>
<script>
// import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "BrandIntroduction",
  // components: { IonContent, IonPage },
};
</script>

<style scoped>
.mainse {
height:1000px;
   max-width: 500px;
  min-width: 500px;
}
.imgsec{
  position: absolute;
  width: 500px;
height: 1000px;
left: 20px;
top: 800px;
}

</style>
