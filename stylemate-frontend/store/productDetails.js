import {
  reactive
} from "vue";
import ItemService from "@/services/ItemService";

const state = reactive({
  AppData: undefined,
});

var itemService = new ItemService();


const methods = {
  async getData() {
    return await itemService.getProductList().then((data) => {
      console.log("ItemList from store", data);
      state.AppData = data;
      return state.AppData;
    })
  },
};

export default {
  state,
  methods,
};