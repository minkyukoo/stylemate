<template>
  <tabs v-model="selectedTab">
    <tab v-for="(tab, i) in tabs" :key="`t${i}`" :val="tab.value">
      <div :class="{ 'active-tab': getActive(tab.value) }" class="tab">
        {{ tab.label }}
      </div>
    </tab>
  </tabs>
  <tab-panels
    v-model="selectedTab"
    :animate="true"
    :swipeable="true"
    class="tab-panels"
  >
    <tab-panel
      v-for="(tab, i) in tabs"
      :key="`tp${i}`"
      :val="tab.value"
      :class="{ 'active-tab-panel': getActive(tab.value) }"
      class="tab-panel"
      :style="`background: ${tab.color};`"
    >
      <!-- tab 1 content -->
      <div class="tab-wrap">
        <figure><img src="@/assets/images/product-details.jpg" /></figure>
        <div class="pre-div">
            <h3>
                <span><img src="@/assets/icons/warning.svg" /></span>
                {{tab.headname}}
            </h3>
            <div class="text-box">
                <p v-for="desc in tab.description" :key="desc">
                    ※ {{desc.para}}
                </p>
            </div>
        </div>
    </div>
      <!-- tab 2 content -->
      <div class="tag-info">
        <div class="tag-info-row" v-for="tag in tab.taglist" :key="tag">
          <div class="top">
            <h3>{{tag.topic}}</h3>
            <span>Copy</span>
          </div>
          <div class="tag-content">
            <span
              >#StyleMate #OEF #OEF #OEFWINTER21 #StyleMate #OEF #OEF
              #OEFWINTER21</span
            >
          </div>
        </div>
        <!-- <div class="tag-info-row">
          <div class="top">
            <h3>hashtag</h3>
            <span>Copy</span>
          </div>
          <div class="tag-content">
            <span
              >#StyleMate #OEF #OEF #OEFWINTER21 #StyleMate #OEF #OEF
              #OEFWINTER21</span
            >
          </div>
        </div> -->
      </div>
    </tab-panel>
  </tab-panels>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";

const tabs = [
  {
    label: "캠페인",
    value: 1,
    headname: "주의사항",
    description: [
      {
        para: "본 캠페인의 참여로 제작, 게재된 회원님의 포스트는 캠페인 종료 후 1년간 영리 목적의 홍보나 기타 필요에 의해 미디언스가 임의로 사용하거나 공유할 수 있습니다. 이를 원하지 않으실 경우 캠페인 신청을 취소하거나 이미 캠페인을 진행한 경우 지급 받은 보상을 반환해야 합니다.",
      },
      {
        para: "캠페인에 선정된 분들께는 선정 안내 문자를 발송해드립니다. 단, 수신자 휴대폰의 스팸설정 또는 기타 에러 등으로 인해 문자를 받지 못하는 경우가 발생할 수도 있습니다. 따라서 캠페인에 지원하신 분들은 선정자 발표일에 미디언스 앱 > 나의 캠페인에서 승인여부를 꼭 확인해주세요.",
      },
      {
        para: "캠페인을 통해 제공받으신 물품은 중고나라 등 온라인 거래사이트에서 거래하실 수 없습니다. 거래행위가 적발될 시 유무형적인 브랜드 이미지와 가치 측면에서 발생한 손해에  대하여 손해배상청구를 할 수 있습니다.",
      },
    ],
  },
  {
    label: "가이드",
    value: 2,
    taglist:[
        {topic: "hashtag"},
        {topic: "account tag"},
    ]
  },
];

export default defineComponent({
  name: "TabProductDetails",
  components: {
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const state = reactive({
      selectedTab: tabs[0].value,
    });
    function getActive(tab) {
      return state.selectedTab === tab;
    }
    return {
      tabs,
      getActive,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
.tabs {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}
.tabs > div {
  width: 50%;
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
}
.tabs .tab.active-tab {
  color: #ffffff;
  background: #090909;
}
.tab-panels .tab-panel .tab-wrap {
  display: none;
}
.tab-panels .tab-panel.active-tab-panel .tab-wrap {
  display: block;
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
}
.tag-content span{
    font-size: 10px;
    line-height: 12px;
    color: #595959;
}
</style>