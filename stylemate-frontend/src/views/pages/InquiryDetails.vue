<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="1:1 문의"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inqDetailsBox">
        <form @submit.prevent="submitHendler">
          <div class="box">
            <h2>문의유형선택</h2>

            <div class="buttonGrp">
              <button
                type="button"
                @click="clickOption(`stylemateCampaign`)"
                :class="{ active: option === `stylemateCampaign` }"
                class="inq-btn"
              >
                협찬문의
              </button>
              <button
                type="button"
                @click="clickOption(`stylemateService`)"
                :class="{ active: option === `stylemateService` }"
                class="inq-btn"
              >
                서비스 이용문의
              </button>
              <button
                type="button"
                @click="clickOption(`stylemateEtc`)"
                :class="{ active: option === `stylemateEtc` }"
                class="inq-btn"
              >
                기타문의
              </button>
            </div>
          </div>
          <div class="box">
            <h2>문의 내용</h2>

            <div class="form-box">
              <div class="input-row">
                <input
                  class="form-control"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  v-model="subject"
                />
                <div v-if="subjectError" class="invalid-feedback-danger">
                  문의 제목을 입력해 주세요.
                </div>
              </div>
              <div class="input-row">
                <textarea
                  class="form-control"
                  placeholder="내용을 입력해주세요."
                  v-model="details"
                ></textarea>
                <div v-if="detailsError" class="invalid-feedback-danger">
                  문의 내용을 입력해 주세요.
                </div>
              </div>
              <div class="button-row">
                <button @click="resetForm()" type="button" class="grey-btn">
                  취소
                </button>
                <button type="submit" class="black-btn">문의 등록</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import { API } from "@/services/AxiosInstance";
import UserInfoService from "@/services/UserInfoService";
import { inject } from "vue";

export default {
  name: "InquiryDetails",
  components: { TopNav, IonContent, IonPage },
  data() {
    return {
      option: "stylemateCampaign",
      subject: null,
      details: null,
      subjectError: false,
      detailsError: false,
      id: null,
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  watch: {
    subject: function (vl) {
      vl === null ? (this.subjectError = true) : (this.subjectError = false);
    },
    details: function (vl) {
      vl === null ? (this.detailsError = true) : (this.detailsError = false);
    },
  },
  created() {
    this.service = new UserInfoService();
  },
  mounted() {
    if (this.$route.params.id !== undefined) {
      this.service.QNAsById(this.$route.params.id).then((res) => {
        this.option = res.type;
        this.subject = res.title;
        this.details = res.inquiry;
        this.id = res.id;
      });
    }
  },
  methods: {
    clickOption(vl) {
      this.option = vl;
    },
    resetForm() {
      this.subject = "";
      this.details = "";
      this.subjectError = false;
      this.detailsError = false;
      this.$router.go(-1);
    },
    submitHendler() {
      if (!this.subject || !this.details) {
        if (!this.subject) this.subjectError = true;
        if (!this.details) this.detailsError = true;
        return false;
      }
      let formData = {
        type: this.option,
        title: this.subject,
        inquiry: this.details,
        isAnswerReceiving: true,
      };
      if (this.id !== null) {
        API.put(
          `/qnas/${this.id}`,
          formData
        )
          .then((res) => {
            if (res.status === 200) {
              // this.$router.push({
              //   name: "InquiryRegisterDetails",
              //   params: { id: res.data.id },
              // });
              this.$router.back();
            }
          })
          .catch((err) => console.log(err));
      } else {
        API.post(`/qnas`, formData)
          .then((res) => {
            if (res.status === 201) {
              // this.$router.push({
              //   name: "InquiryRegisterDetails",
              //   params: { id: res.data.id },
              // });
              this.$router.back();
            }
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
.invalid-feedback-danger {
  color: #c01f1f;
}
.inqDetailsBox {
  padding: 40px 16px;
}
.inqDetailsBox h2 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #212226;
  margin-bottom: 7px;
}
.box {
  margin-top: 40px;
}
.box:first-child,
.input-row:first-child {
  margin-top: 0;
}
.form-box .form-control {
  border: 1px solid #d4d4d8;
  background: #ffffff;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
}
textarea {
  resize: none;
  height: 204px;
}
.input-row {
  margin-top: 7px;
}
.buttonGrp {
  display: flex;
  flex-wrap: wrap;
}
.buttonGrp .inq-btn {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
  border: 1px solid #d4d4d8;
  background: #ffffff;
  padding: 8px 16px;
}
.buttonGrp .inq-btn.active {
  color: #ffffff;
  font-weight: bold;
  background: #52525b;
}
.button-row {
  display: flex;
  margin-top: 42px;
}
.button-row button {
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  border-radius: 6px;
  padding: 13px 20px;
  flex: 1;
  margin-left: 8px;
}
.input-row:first-child {
  margin-left: 0;
}
.button-row button.grey-btn {
  background: #e4e4e7;
  color: #a1a1aa;
}
.button-row button.black-btn {
  background: #25282b;
  color: #ffffff;
}
</style>
