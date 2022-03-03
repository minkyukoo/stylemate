<template>
  <Modal
    v-show="store.state.isReRegisterModalVisible"
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
          <div class="edit-btn">Post edit request</div>
          <div class="post-card-con">
            <div class="hashtagBox">
              <p>
                Please change the #sponsorship hashtag to #advertising hashtag.
              </p>
            </div>
            <div class="grey-box"></div>
            <div class="description-hashtag">
              #Sponsored #Nyangpummongpoom gave me “liver health powder” as a
              gift. When the parcel arrived, the box was so cute, so I cooked it
              right away 💛 A teddy bear in a cute yellow box? It has a puppy?
              it's so cute 😘❤️ It smells like cheese, so it smells delicious🧀
              I found out that Danish cheese powder was used for puppies who
              don't eat nutritional supplements!! It smells so delicious that
              spring breathes in a storm 🤣 Every time Bom goes out for a walk,
              he smells garbage and puts it in his mouth, but he said he was
              worried about it, but the liver health powder has alleviated that
              worry!! It contains ingredients such as milk thistle, zinc, and B
              complex vitamin B that help to regenerate and recover damaged
              liver cells. #dog nutrition #dog liver level #dog liver nutrition
            </div>
            <div class="flex">
              <span class="flex mr-3.5">
                <img
                  src="../../../assets/icons/heart-outline-dark.svg"
                  alt=""
                  class="mr-1"
                />
                10
              </span>
              <span class="flex">
                <img
                  src="../../../assets/icons/comment-outline.svg"
                  alt=""
                  class="mr-1"
                />
                10
              </span>
            </div>
            <div class="date-of-collection">
              Data collected on 08/23/2021 09:33.
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="post-footer">
        <button
          class="btn-grey"
          @click="() => (store.state.isReRegisterModalVisible = false)"
        >
          to close
        </button>
        <button
          type="button"
          class="btn-black"
          @click="
            () => {
              store.state.isReRegisterModalVisible = false;
              store.state.isPostModalVisible = true;
            }
          "
        >
          포스트 등록하기
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { inject } from "vue";
import Modal from "../../Modal.vue";
export default {
  name: "re-register-modal",
  data() {
    return {};
  },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  components: {
    Modal,
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
  /* position: relative; */
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
.edit-btn {
  text-align: center;
  padding: 24px 0 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #5700ff;
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
.hashtagBox {
  padding-bottom: 24px;
  border-bottom: 1px solid #f7f7f7;
}
.hashtagBox p {
  font-size: 14px;
  line-height: 18px;
  color: #090909;
  border: 1px solid #5700ff;
  border-radius: 6px;
  padding: 16px 16px 24px;
}
.grey-box {
  width: 300px;
  height: 300px;
  background: #c4c4c4;
}
.description-hashtag {
  padding: 4px 10px 12px;
  font-size: 12px;
  line-height: 16px;
  color: #595959;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
}
.date-of-collection {
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #9d6aff;
  padding-bottom: 40px;
}
</style>