import { reactive } from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";

const state = reactive({
  AppData: undefined,
  number: 13,
  status: "NotEmpty",
});

var itemService = new ItemService();


 const methods = {
  getData() {
    itemService.getProductLsit().then((data) => {
      console.log("ItemList", data);
      // state.AppData = data;
    })
  },
};

export default {
  state,
  methods,
};
