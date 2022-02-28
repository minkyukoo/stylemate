<template>
  <div class="termsWrap">
    <!-- <h3>스타일메이트 이용약관</h3> -->

    <div class="box">
      <p>
        {{termsUSe}}
      </p>
    </div>

    <!-- <div class="box">
      <h4>제 1조 목적</h4>
      <p>
        본 약관은 (주)미디언스(MEDIANCE)(이하 ‘회사’라 함)에서 제공하는 미디언스
        온라인 서비스(이하 ‘서비스’라 함)를 이용함에 있어 회사와 회원간의회원
        간의 권리 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
      </p>
    </div> -->
    <!-- <div class="box">
      <h4>제 2조 목적</h4>
      <p>
        1. '회사'란 (주)미디언스를 말합니다. <br />
        2. '회원'이란 사이트에 접속하여 본 약관에 따른 회사와의 이용계약을
        체결하여 회사가 제공하는 서비스를 이용하는 고객을 말합니다.<br /><br />

        3. '클라이언트'란 마케팅 또는 콘텐츠 제휴 등의 목적으로 회사와 계약
        관계에 있는 개인 또는 단체를 말합니다.<br /><br />

        ]4. '사이트'란 회사가 운영하는 미디언스(https://app.mediance.co.kr)를
        말합니다.<br /><br />

        5. '서비스'란 회사가 회원으로 하여금 사이트에 게시된 캠페인에 회원이
        참여하여 캠페인에서 제시한 조건을 수행할 수 있도록 하는 것과 이와
        관련하여 회사가 회원에게 제공하는 혜택 및 관련 제반 서비스
        전반을말합니다.<br /><br />

        6. '캠페인'은 클라이언트가 마케팅 및 콘텐츠 제휴 등을 목적으로 회원들이
        참여하여 클라이언트의 목적을 달성할 수 있도록 기획된<br /><br />

        이벤트 전반을 말합니다.<br /><br />

        7. '포스트'는 회원이 캠페인에 참여하여 회원의 블로그 또는 소셜 미디어
        등에 작성 및 등록한 게재물 및 게재물의 내용을 말하며, 이는 게시글,
        이미지, 동영상 비디오 등 온라인 디지털 플랫폼에 게재할 수 있는 다양한
        형태의 창작물을 포함합니다.<br /><br />

        8. '소셜미디어'는 회원이 클라이언트가 요청한 캠페인 활동을 통해 포스트를
        노출할 소셜 미디어 서비스를 말하며, 페이스북(Facebook),
        인스타그램(Instargram), 유튜브(YouTube), 틱톡(Tiktok), 블로그(Blog) 등을
        대표하는 모든 서비스를 의미합니다.<br /><br />

        9. '포인트'는 회사가 회사의 서비스를 통해 클라이언트의 캠페인에 참여하여
        클라이언트의 요청을 완수하였을 경우 대가로 사이트 내에서 지급되는 무형의
        형태의 사례금을 말합니다.<br /><br />

        10. '캐시인포인트출금'은 사이트내에 적립된 포인트를 현금으로 전환하여
        회원의 개인 계좌에 입금처리하는 것을 말합니다.
      </p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "TermsUse",
  data(){
    return{
      termsUSe:'',
    }
  },
  mounted() {
    axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards/recently?type=terms`)
      .then((res) => {
        console.log("this.termsUSe",res.data.body);
        this.termsUSe = res.data.body;
    });
  },
};
</script>

<style scoped>
.termsWrap {
  padding: 41px 16px 100px;
}
.termsWrap h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #212226;
}
.box {
  margin-top: 15px;
  font-size: 12px;
  line-height: 16px;
}
.box h4 {
  margin-bottom: 15px;
}
</style>