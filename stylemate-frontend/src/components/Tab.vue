<template>
  <div class="tab-wrap">
    <div class="tabs">
      <button class="tab" @click="layout = 'tab1'" :class="{ active: layout === 'tab1' }">
        캠페인
      </button>
      <button class="tab" @click="layout = 'tab2'" :class="{ active: layout === 'tab2' }">
        가이드
      </button>
    </div>

    <div class="subscribe-wrap">
      <figure><img src="@/assets/icons/heart-filled.svg" /></figure>
      <button class="black-btn">협찬 신청</button>
    </div>

    <!-- tab content 1 -->
    <div class="tab-content" v-if="layout === 'tab1'">
      <figure class="product-banner"><img src="@/assets/images/product-details.jpg" /></figure>
      <div class="pre-div">
        <h3>
          <span><img src="@/assets/icons/warning.svg" /></span>
          주의사항</h3>
          <div class="text-box">
            <p>※ 본 캠페인의 참여로 제작, 게재된 회원님의 포스트는 캠페인 종료 후 
              1년간 영리 목적의 홍보나 기타 필요에 의해 미디언스가 임의로 사용하거나 공유할 수 있습니다.
               이를 원하지 않으실 경우 캠페인 신청을 취소하거나 이미 캠페인을 진행한 경우 지급 받은 보상을 반환해야 합니다.
            </p>
            <p>
              ※ 캠페인에 선정된 분들께는 선정 안내 문자를 발송해드립니다. 단, 수신자 휴대폰의 
              스팸설정 또는 기타 에러 등으로 인해 문자를 받지 못하는 경우가 발생할 수도 있습니다. 
              따라서 캠페인에 지원하신 분들은 선정자 발표일에 미디언스 앱 > 나의 캠페인에서 승인여부를 꼭 확인해주세요.
            </p>
            <p>
              ※ 캠페인을 통해 제공받으신 물품은 중고나라 등 온라인 거래사이트에서 거래하실 수 
              없습니다. 거래행위가 적발될 시 유무형적인 브랜드 이미지와 가치 측면에서 발생한 
              손해에 대하여 손해배상청구를 할 수 있습니다.
            </p>
          </div>
      </div>
    </div>

    <!-- tab content 2 -->
    <div class="tab-content" v-if="layout === 'tab2'">
      <div class="tag-info">
        <div v-for="tagcell in tagrow" :key="tagcell" class="tag-info-row">
          <div class="top">
            <h3>{{tagcell.name}}</h3>
            <span>복사</span>
          </div>
          <div class="tag-content">
            <span v-for="hash in tagcell.hashtag" :key="hash">{{hash.name}}</span>
          </div>
        </div>
      </div>

      <div class="terms-wrap">
        <div class="guide">
          <div class="heading">
            <span><img src="@/assets/icons/icon-check.svg"/></span>
            <h3>꼭 읽어주세요</h3>
          </div>
          <ul class="guide-body">
            <li>
              ※ 원활한 제품 배송을 위하여 미디언스에 등록되어 있는 주소지와 연락처를 최신화 해주세요.
            </li>
            <li>※ 제품은 1번 제품을 포함하여 최대 3개까지 선택 가능하며 제품 선택에 따라 포스팅 해주셔야 합니다. 
              (ex_2개 선택 시 포스팅 2개)</li>
            <li>※ 선택 제품 리스트는 제품 상세 페이지(클릭) 에서 확인 부탁드립니다. 
              포스트 업로드 시 댓글 숨김(막기) / 좋아요 숨김 되지 않도록 유의부탁드립니다.</li>
            <li>※ 가이드 내용을 준수하지 않을 시, 담당자가 콘텐츠 수정 요청을 드릴 수 있습니다.</li>
          </ul>
        </div>

        <div class="guide">
          <div class="heading">
            <span><img src="@/assets/icons/icon-image.svg"/></span>
            <h3>꼭 읽어주세요</h3>
          </div>
          <ul class="guide-body">
            <li>
              ※ 원활한 제품 배송을 위하여 미디언스에 등록되어 있는 주소지와 연락처를 최신화 해주세요.
            </li>
            <li>※ 제품은 1번 제품을 포함하여 최대 3개까지 선택 가능하며 제품 선택에 따라 포스팅 해주셔야 합니다. 
              (ex_2개 선택 시 포스팅 2개)</li>
            <li>※ 선택 제품 리스트는 제품 상세 페이지(클릭) 에서 확인 부탁드립니다. 
              포스트 업로드 시 댓글 숨김(막기) / 좋아요 숨김 되지 않도록 유의부탁드립니다.</li>
            <li>※ 가이드 내용을 준수하지 않을 시, 담당자가 콘텐츠 수정 요청을 드릴 수 있습니다.</li>
          </ul>
        </div>

        <div class="guide">
          <div class="heading">
            <span><img src="@/assets/icons/icon-text.svg"/></span>
            <h3>텍스트 가이드</h3>
          </div>
          <ul class="guide-body">
            <li>
              ※ 원활한 제품 배송을 위하여 미디언스에 등록되어 있는 주소지와 연락처를 최신화 해주세요.
            </li>
            <li>※ 제품은 1번 제품을 포함하여 최대 3개까지 선택 가능하며 제품 선택에 따라 포스팅 해주셔야 합니다. 
              (ex_2개 선택 시 포스팅 2개)</li>
            <li>※ 선택 제품 리스트는 제품 상세 페이지(클릭) 에서 확인 부탁드립니다. 
              포스트 업로드 시 댓글 숨김(막기) / 좋아요 숨김 되지 않도록 유의부탁드립니다.</li>
            <li>※ 가이드 내용을 준수하지 않을 시, 담당자가 콘텐츠 수정 요청을 드릴 수 있습니다.</li>
          </ul>
        </div>

        <div class="guide">
          <div class="heading">
            <span><img src="@/assets/icons/icon-calendar.svg"/></span>
            <h3>일정 가이드</h3>
          </div>
          <ul class="guide-body">
            <li>
              ※ 원활한 제품 배송을 위하여 미디언스에 등록되어 있는 주소지와 연락처를 최신화 해주세요.
            </li>
            <li>※ 제품은 1번 제품을 포함하여 최대 3개까지 선택 가능하며 제품 선택에 따라 포스팅 해주셔야 합니다. 
              (ex_2개 선택 시 포스팅 2개)</li>
            <li>※ 선택 제품 리스트는 제품 상세 페이지(클릭) 에서 확인 부탁드립니다. 
              포스트 업로드 시 댓글 숨김(막기) / 좋아요 숨김 되지 않도록 유의부탁드립니다.</li>
            <li>※ 가이드 내용을 준수하지 않을 시, 담당자가 콘텐츠 수정 요청을 드릴 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default({
  name: "TabProductDetails",
  data() {
    return {
      tagrow:[
        {
          name: '해시태그',
          hashtag: [
            { name: "#스트릿패션" },
            { name: "#스우파" },
            { name: "#후디" },
            { name: "#스트릿패션" },
            { name: "#스우파" },
            { name: "#후디" },
            { name: "#스트릿패션" },
            { name: "#스우파" },
            { name: "#후디" },
          ],
        },
        {
          name: '계정태그',
          hashtag: [
            { name: "@stylemate_official" },
            { name: '@oef__official'}
          ],
        }
      ],
      layout: "tab1",
    };
  },
});
</script>

<style scoped>
.subscribe-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
}
.subscribe-wrap figure{
  margin-right: 10px;
}
.subscribe-wrap .black-btn{
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #090909;
  border-radius: 6px;
  padding: 24px;
  width: calc(100% - 30px);
}
.subscribe-wrap .white-btn{
  font-size: 14px;
  line-height: 18px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #090909;
  border-radius: 6px;
  padding: 24px;
  width: calc(100% - 30px);
  border: 1px solid #595959;
}
.tab-wrap .tab-content{
  padding-bottom: 50px;
}
.tabs {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  display: flex;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 50%;
}
.tabs .tab.active {
  color: #ffffff;
  background: #090909;
}
.product-banner img{
  margin: 0 auto;
}
.pre-div {
  margin-top: 42px;
}
.pre-div h3 {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.pre-div h3 span {
  margin-right: 4px;
}
.pre-div .text-box {
  background: #f7f7f7;
  border-radius: 6px;
  padding: 30px 20px 60px;
  margin-top: 13px;
  text-align: left;
}
.pre-div .text-box p {
  font-size: 12px;
  line-height: 16px;
  color: #595959;
  margin-top: 20px;
}
.pre-div .text-box p:first-child {
  margin-top: 0;
}
.tag-info{
    border: 1px solid #797979;
    padding: 0 20px;
    border-radius: 6px;
}
.tag-info .tag-info-row{
    border-top: solid 1px #F6F6F6;
    padding: 20px 0;
}
.tag-info .tag-info-rowfirst-child{
    border-top: 0;
}
.tag-info .tag-info-row .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tag-info .tag-info-row .top h3{
    font-size: 12px;
    line-height: 16px;
    color: #797979;
}
.tag-info .tag-info-row .top span{
    font-size: 10px;
    line-height: 12px;
    color: #595959;
    border: 1px solid #595959;
    border-radius: 4px;
    padding: 4px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tag-content{
    margin-top: 8px;
    text-align: left;
}
.tag-content span{
    font-size: 10px;
    line-height: 12px;
    color: #595959;
}
.terms-wrap .guide{
  margin-top: 58px;
}

.terms-wrap .guide .heading{
  display: flex;
  align-items: center;
}
.terms-wrap .guide .heading h3{
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #25282B;
}
.terms-wrap .guide .heading span{
  margin-right: 4px;
}
.terms-wrap .guide .guide-body{
  margin-top: 12px;
  border-top: solid 1px #F7F7F7;
  padding-top: 12px;
}
.terms-wrap .guide .guide-body li{
  text-align: left;
  font-size: 12px;
  line-height: 18px;
  color: #797979;
}

</style>