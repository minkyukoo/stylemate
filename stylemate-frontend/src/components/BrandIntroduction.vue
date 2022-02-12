<template>
    <div class="mainse">
      <p>‘Nike’ 는 나 스스로의 능력과 가치에 믿음과 자신감을 갖는 것으로부터 시작합니다.</p>
      <p>self-esteem, self-respect 의 의미를 담고있는 프랑스어 'amour propre' 의 뜻을 가집니다. 미니멀하고 정갈한 디테일과 체형에 꼭 맞는 군더더기 없는 핏감으로 입는 사람으로 하여금 자연스러운 자신만의 멋을 지닐 수 있도록 센스있는 매일의 룩을 추구합니다.</p>
      <img src="@/assets/images/Rectangle10.png" class="imgsec" />
    </div>
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
  max-width: 500px;
  min-width: 500px;
  padding: 30px 0 0 0;
}

.mainse p{
    margin: 0 0 20px 0;
  }
.imgsec{
  width: 500px;
}

</style>
