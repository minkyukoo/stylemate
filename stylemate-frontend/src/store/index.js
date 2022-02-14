import { reactive,inject } from "vue";
import axios from "axios";

const state = reactive({
  AppData: undefined,
  number: 13,
  status: "NotEmpty",
});

 const methods = {
  async getData() {
    await axios
      .get("list_data")
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          state.status = 'NotEmpty';
          loader.hide();
          state.AppData = response.data.data;
        } else {
          state.status = 'Empty';
          loader.hide();
          Toast.fire({
            icon: "error",
            title: response.data.data,
          });
          // console.log("else success false");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  methods,
};
