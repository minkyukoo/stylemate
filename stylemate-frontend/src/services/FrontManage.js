import {
    API,
    UAPI
} from "./AxiosInstance";

export default class FrontManage {
    async lookBook(log = false) {
        var inst = log ? API : UAPI;
        return await inst.get(`/front-manages?type=post&limit=9`).then((res) => res.data).catch((err) => err);
    }

    async newBrands(log = false) {
        var inst = log ? API : UAPI;
        return await inst.get(`/front-manages?type=brand&limit=9`).then((res) => res.data).catch((err) => err);
    }

    async newItems(log = false) {
        var inst = log ? API : UAPI;
        return await inst.get(`/front-manages?type=product&limit=12`).then((res) => res.data).catch((err) => err);
    }
}