import axios from "axios";

export default class MyPageService {
  async getMyPageData() {
    return await axios.get("/stylemates/myInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getCampaignData(uid, sponsorTabState, sponcerFilterId, sponcerChannelType ) {
    console.log( sponsorTabState ,sponcerFilterId, sponcerChannelType);
    let filterType = '{"channelType" :"'+`${sponcerChannelType}`+'" ,"menuType" : "'+`${sponsorTabState}`+'"'
			+  ( sponcerFilterId ? ',"type": "'+`${sponcerFilterId}`+'"' : '')
			+ '}'
    let encodedUrl = encodeURIComponent(filterType);
    console.log("console encode",encodedUrl);
    return await axios.get(`/stylemates/users/${uid}/campaigns?filters=${encodedUrl}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getPostingList(id) {
    let encodedUrl = encodeURIComponent('{"influenceId":'+ id +'}')
    console.log(encodedUrl)
    return await axios.get(`/stylemates/posts?filters=${encodedUrl}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async postCampaign() {
    return await axios.post(`/stylemates/posts/instagram`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    {
      
    }
    );
  }
  
}
