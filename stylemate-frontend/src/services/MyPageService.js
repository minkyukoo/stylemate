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
      }
    );
  }
  async getPostingList(id) {
    let encodedUrl = encodeURIComponent('{"influenceId":' + id + "}");
    console.log(encodedUrl);
    return await axios.get(`/stylemates/posts?filters=${encodedUrl}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        campaignId: 246,
        bookingId: 5722,
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
        // hashtags: "HOVEHOVER 호브호버 스타일메이트 패션",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
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
