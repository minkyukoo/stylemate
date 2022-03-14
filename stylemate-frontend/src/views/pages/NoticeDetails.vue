<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav :headerTitle="store.state.noticeTabPageName"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="notice-details-wrap">
        <div class="tag-row">
          <span
            v-if="notice.category !== null"
            class="notice-tag"
            :class="{
              'red-solid': notice.category === 'notification',
              'dark-solid': notice.category !== 'notification',
            }"
            >{{
              notice.category === "notification" ? "notice" : notice.category
            }}</span
          >
          <span v-if="notice.fixed" class="notice-tag red-outline">중요</span>
        </div>
        <h2>{{ notice.title }}</h2>
        <div class="bottom-row">
          <span>{{ notice.category }}</span
          ><span>{{ notice.createdAt }}</span>
        </div>
      </div>
      <div class="content-details" v-html="notice.body"></div>
      <div class="bottom-sec-scroll">
        <div class="btn-wrap">
          <button class="main-btn" @click="$router.push({ name: 'Notice', hash: '#notice' })">
            목록으로
          </button>
        </div>
        <div class="pagination-wrap">
          <a href="#" @click.prevent="prev()">
            <img src="@/assets/icons/arrow-left-thin.svg" />
            이전글
          </a>
          <a href="#" @click.prevent="next()">
            다음글
            <img src="@/assets/icons/arrow-right-thin.svg" />
          </a>
        </div>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import UserInfoService from "@/services/UserInfoService";
import { inject } from "vue";

export default {
  name: "NoticeDetails",
  components: { TopNav, IonContent, IonPage },
  data() {
    return {
      notice: {
        title: null,
        body: null,
        createdAt: null,
        category: null,
        fixed: null,
        prev: null,
        next: null,
      },
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  created() {
    this.service = new UserInfoService();
  },
  mounted() {
    this.service.NoticeById(this.$route.params.id).then((res) => {
      this.notice.title = res.title;
      this.notice.body = res.body;
      this.notice.createdAt = this.dateFormat(res.createdAt);
      this.notice.category = res.category;
      this.notice.prev = res.previousId;
      this.notice.next = res.nextId;
      this.notice.fixed = res.fixed;
    });

    this.service.Notice().then((res) => {
      this.noticelist = res.data;
    });
  },
  methods: {
    prev() {
      if (this.notice.prev !== null) {
        this.$router.push({
          name: "NoticeDetails",
          params: { id: this.notice.prev },
        });
      }
    },
    next() {
      if (this.notice.next !== null) {
        this.$router.push({
          name: "NoticeDetails",
          params: { id: this.notice.next },
        });
      }
    },
    dateFormat(date) {
      let dt = new Date(date);
      return `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
    },
  },
};
</script>

<style scoped>
.notice-details-wrap {
  padding: 33px 16px;
}
.notice-details-wrap h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #090909;
  margin: 16px 0;
}
.tag-row {
  display: flex;
}
.notice-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.6px;
  padding: 0 10px;
  margin-left: 4px;
}
.notice-tag:first-child {
  margin-left: 0;
}
.notice-tag.red-solid {
  background: #f44848;
  color: #ffffff;
  border: solid 1px #f44848;
}
.notice-tag.red-outline {
  background: #ffffff;
  color: #f44848;
  border: solid 1px #f44848;
}
.notice-tag.dark-solid {
  background: #52525b;
  color: #ffffff;
}
.notice-tag.grey-solid {
  border: 1px solid #a1a1aa;
  background: #e4e4e7;
  color: #212226;
}
.notice-tag.dark-outline {
  color: #212226;
  border: 1px solid #a1a1aa;
  background: #ffffff;
}
.bottom-row {
  display: flex;
}
.bottom-row span {
  font-size: 12px;
  line-height: 16px;
  color: #797979;
  margin-left: 16px;
}
.bottom-row span:first-child {
  margin-left: 0;
}
.content-details {
  padding: 32px 24px;
}
.content-details p {
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.bottom-sec-scroll {
  border-top: solid 8px #fafafa;
}
.btn-wrap {
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-btn {
  background: #25282b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  padding: 13px 24px;
}
.pagination-wrap {
  padding: 0 16px 24px;
  border-top: solid 1px #f4f4f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}
.pagination-wrap > a {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: #25282b;
}
</style>
