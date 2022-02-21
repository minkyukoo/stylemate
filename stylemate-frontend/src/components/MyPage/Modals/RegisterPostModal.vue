<template>
  <Modal
    v-show="store.state.isPostModalVisible"
    @close="closeModal"
    v-bind:showCloseBtn="false"
    modalSize="modal-lg"
  >
    <template v-slot:header>
      <div></div>
    </template>
    <template v-slot:body>
      <div class="modal-content">
        <div class="Post-header">
          <div class="img-con">
            <img src="../../../assets/images/MyPage-item1.png" alt="" />
          </div>
          <div class="item-desc">
            <div class="heading-wrap">
              <h2>NCOVER</h2>
            </div>
            <div>
              <h4>Plaster Cast Hoodie Blouse</h4>
              <h6>End date 2012-02-13 15:30</h6>
            </div>
          </div>
        </div>
        <div class="post-body">
          <div class="refresh-btn">
            <img src="../../../assets/icons/refresh.svg" alt="refresh" />
          </div>
          <div class="post-card-con">
            <PostModalCard :cardData="modalData" />
            <div>
              <button class="btn-outline-block">see more</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="post-footer">
        <button
          class="btn-grey"
          @click="() => (store.state.isPostModalVisible = false)"
        >
          to close
        </button>
        <button type="button" class="btn-black">포스트 등록하기</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { inject } from "vue";
import Modal from "../../Modal.vue";
import PostModalCard from "./PostModalCard.vue";
export default {
  name: "register-post-modal",
  data() {
    return {
      modalData: [
        {
          img: "Rectangle8.png",
          date: "2021.11.23 12:30",
          desc: "#supa #streetfashion #nike #ncover #fashion people #fashionstagram...",
        },
        {
          img: "Rectangle9.png",
          date: "2021.11.23 12:30",
          desc: "#supa #streetfashion #nike #ncover #fashion people #fashionstagram...",
        },
        {
          img: "Rectanglec2.png",
          date: "2021.11.23 12:30",
          desc: "#supa #streetfashion #nike #ncover #fashion people #fashionstagram...",
        },
        {
          img: "MyPage-item1.png",
          date: "2021.11.23 12:30",
          desc: "#supa #streetfashion #nike #ncover #fashion people #fashionstagram...",
        },
      ],
    };
  },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  components: {
    Modal,
    PostModalCard,
  },
  methods: {
    closeModal() {
      this.isPostModalVisible = false;
    },
  },
};
</script>

<style scoped>
.modal-content {
  padding: 24px 10px 0;
  background: linear-gradient(
    175.12deg,
    rgba(255, 255, 255, 0.5) -23.33%,
    #ffffff 34.31%
  );
  /* backdrop-filter: blur(30px); */
}
.Post-header {
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #f7f7f7;
}
.Post-header .img-con {
  width: 93.75px;
  height: 100px;
  border-radius: 6px;
}
.Post-header .img-con img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.Post-header .item-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 11px;
  width: calc(100% - 100px);
}
.Post-header .item-desc h2 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
}
.Post-header .item-desc h4 {
  font-size: 12px;
  line-height: 14px;
  color: #25282b;
  margin-top: 5px;
}
.Post-header .item-desc h6 {
  font-size: 12px;
  line-height: 16px;
  color: #5700ff;
  margin-top: 5px;
}
.post-card-con {
  max-height: 250px;
  overflow-y: auto;
}
.refresh-btn {
  text-align: right;
  padding: 12px 0 4px;
}
.refresh-btn img {
  margin: 0 0 0 auto;
}
.post-footer {
  display: flex;
  width: 100%;
}
.btn-grey {
  background: #e5e5e5;
  border-radius: 0px 0px 0px 6px;
  color: #797979;
  font-size: 14px;
  line-height: 18px;
  width: 50%;
}
.post-footer .btn-black {
  width: 50%;
  font-size: 14px;
  line-height: 18px;
}
.btn-outline-block {
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 14px 0;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  margin: 4px 0 40px;
}
</style>