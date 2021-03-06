import axios from "axios";

export default class MyPageService {
  async getMyPageData() {
    return await axios.get("/stylemates/myInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getCampaignData(
    pageNo,
    uid,
    sponsorTabState,
    sponcerFilterId,
    sponcerChannelType
  ) {
    console.log(sponsorTabState, sponcerFilterId, sponcerChannelType);
    let filterType =
      '{"channelType" :"' +
      `${sponcerChannelType}` +
      '" ,"menuType" : "' +
      `${sponsorTabState}` +
      '"' +
      (sponcerFilterId ? ',"type": "' + `${sponcerFilterId}` + '"' : "") +
      "}";
    let encodedUrl = encodeURIComponent(filterType);
    console.log("console encode", encodedUrl);
    return await axios.get(
      `/stylemates/users/${uid}/campaigns?filters=${encodedUrl}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          page: pageNo,
        },
      }
    );
  }
  async getPostingList(id,per_page,pageNo) {
    let encodedUrl = encodeURIComponent('{"influenceId":' + id + "}");
    console.log(encodedUrl);
    return await axios.get(`/stylemates/posts?filters=${encodedUrl}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        perPage: per_page,
        page: pageNo,
      },
    });
  }
  async putCampaignDetail(
    Postid,
    campaignId,
    bookingId,
    channelId,
    caption,
    id,
    ig_id,
    comments_count,
    like_count,
    media_product_type,
    media_type,
    media_url,
    thumbnail_url,
    permalink,
    shortcode,
    username,
    timestamp,
    userProfile
  ) {
    return await axios.put(
      `/stylemates/posts/${Postid}/instagram`,
      {
        campaignId: campaignId,
        bookingId: bookingId,
        channelId: channelId,
        caption: caption,
        id: id,
        ig_id: ig_id,
        comments_count: comments_count,
        like_count: like_count,
        media_product_type: media_product_type,
        media_type: media_type,
        media_url: media_url,
        thumbnail_url: thumbnail_url,
        permalink: permalink,
        shortcode: shortcode,
        username: username,
        timestamp: timestamp,
        userProfile: userProfile,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  async postCampaign(
    campaignId,
    bookingId,
    channelId,
    caption,
    id,
    ig_id,
    comments_count,
    like_count,
    media_product_type,
    media_type,
    media_url,
    permalink,
    shortcode,
    username,
    timestamp,
    userProfile
  ) {
    return await axios.post(
      `/stylemates/posts/instagram`,
      {
        campaignId: campaignId,
        bookingId: bookingId,
        channelId: channelId,
        caption: caption,
        id: id,
        ig_id: ig_id,
        comments_count: comments_count,
        like_count: like_count,
        media_product_type: media_product_type,
        media_type: media_type,
        media_url: media_url,
        permalink: permalink,
        shortcode: shortcode,
        username: username,
        timestamp: timestamp,
        userProfile: userProfile,
        // hashtags: "",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  async patchCampaign (postId, campaignId, bookingId ) {
    return await axios.patch(`/stylemates/posts/${postId}/modify-complete`,{
      campaignId: campaignId,
      bookingId: bookingId,
      postId: postId,
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  }

  async deleteSponsor(campaignUID, bookingId) {
    return await axios.delete(
      `https://elsa.beta.mediance.co.kr/stylemates/campaigns/${campaignUID}/bookings/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }
}
