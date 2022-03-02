<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <h2 class="contentchannel">Channel Connection</h2>
            </ion-col>
            <ion-col class="icon">
              <ion-icon :src="sync" class="ioconsyn"></ion-icon>
            </ion-col>
          </ion-row>
        </ion-grid>

        <!-- <ChannelLinkVue/> -->
      </div>

      <div>
        <ion-button shape="round" color="light" class="connectbtn">See how to connect</ion-button>
        <div v-for="data in cards" :key="data">
          <img :src="data.src" />
          <h1>{{ data.cardName }}</h1>
          <div class="addcard">
            <ion-card>
              <ion-item>
                <ion-chip class="btnadd">
                  <ion-icon :src="add"></ion-icon>
                  <ion-label>Add Channel</ion-label>
                </ion-chip>
              </ion-item>
            </ion-card>
          </div>
        </div>
        <!-- <AddChannelsVue/> -->
      </div>
      <div></div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonGrid, IonButton } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
//import ChannelLinkVue from "@/components/ChannelLink.vue";
//import AddChannelsVue from "@/components/AddChannels.vue";
import { sync, add } from "ionicons/icons";


export default {
  name: "LinkChannel",
  components: { IonContent, IonPage, TopNav, IonGrid, IonButton, },
  data() {
    return {
      cards: [
        { src: "@/assets/icons/instagram.svg", cardName: "Instagram" },
        { src: "@/assets/icons/instagram.svg", cardName: "Youtube" },
        { src: "@/assets/icons/instagram.svg", cardName: "Tiktok" },
        { src: "@/assets/icons/instagram.svg", cardName: "Facebook" },
      ],
    };
  },
  setup() {
    return {
      sync,
      add,
    };
  },
  methods: {
  },
};
</script>
<style>
.contentchannel {
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
}
.ioconsyn {
  color: #c4c4c4;
  text-align: right;
}
.connectbtn {
  font-family: Pretendard;
}
.btnadd {
  background: #969090;
}
</style>
