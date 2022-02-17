<template>
  <Modal
    v-show="store.state.isPostModalVisible"
    @close="closeModal"
    v-bind:showCloseBtn="false"
  >
    <template v-slot:header>
      <div class="Post-header">
        <div class="img-con">
          <img
            src="../../assets/images/MyPage-item1.png"
            alt=""
          />
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
    </template>
  </Modal>
</template>

<script>
import { inject } from "vue";
import Modal from "../Modal.vue";
export default {
  name: "register-post-modal",
  //   data() {
  //     return {
  //       isPostModalVisible: false,
  //     };
  //   },

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
</style>