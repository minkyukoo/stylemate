<template>
  <transition name="modal-fade">
    <div :class="`modal-backdrop ${modalSize? '' : ''}`">
      <div
        :class="`modal ${modalSize? modalSize : ''}`"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> This is the default tile! </slot>
          <!-- <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button> -->
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-black"
              @click="close"
              aria-label="Close modal"
            >
              닫기
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CustomModal",
  props: {
    modalSize: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 100%;
  padding: 0;
  border-radius: 6px;
}
.modal.modal-lg{
  width: 320px;
}
.modal-content{
  padding: 24px;
}
.modal-content p{
  font-size: 14px;
  line-height: 18px;
  color: #25282B;
}
.modal-header {
  position: relative;
  justify-content: space-between;
  display: flex;
}

.modal-header h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
  text-align: center;
  margin-top: 24px;
  width: 100%;
}

.modal-footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #090909;
  border-radius: 0px 0px 6px 6px;
}

.modal-footer .btn-black {
  background: #090909;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
  padding: 20px;
}

.modal-body {
  position: relative;
  padding: 0;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
