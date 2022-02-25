<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="My page"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="tab-wrap">
        <div class="tabs">
          <a
            class="tab"
            @click="layout = 'tab1'"
            :class="{ active: layout === 'tab1' }"
          >
            이용약관
          </a>
          <a
            class="tab"
            @click="layout = 'tab2'"
            :class="{ active: layout === 'tab2' }"
          >
            개인정보처리방침
          </a>
        </div>
        <!-- tab content 1 -->
        <div class="tab-content" v-if="layout === 'tab1'">
          <TermsUse />
        </div>

        <!-- tab content 2 -->
        <div class="tab-content" v-if="layout === 'tab2'">
          <PrivacyPolicy />
        </div>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import TermsUse from "@/components/TermsUse.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
export default {
  name: "CustomerServiceCenter",
  components: { TopNav, IonContent, IonPage, TermsUse, PrivacyPolicy },
  data() {
    return {
      layout: "tab1",
    };
  },
  methods: {
    openlink() {
      console.log("clivk");
    },
  },
};
</script>

<style scoped>
.tabs {
  border: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-around;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  padding: 13px 0 9px;
  cursor: pointer;
}
.tabs .tab.active {
  color: #090909;
  font-weight: bold;
  border-bottom: solid 2px #090909;
}
</style>
