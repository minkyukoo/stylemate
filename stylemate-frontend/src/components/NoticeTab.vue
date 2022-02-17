<template>
  <div class="tab-wrap">
    <div class="tabs">
      <a
        class="tab"
        @click="layout = 'tab1'"
        :class="{ active: layout === 'tab1' }"
      >
        공지사항
      </a>
      <a
        class="tab"
        @click="layout = 'tab2'"
        :class="{ active: layout === 'tab2' }"
      >
        FAQ
      </a>
      <a
        class="tab"
        @click="layout = 'tab3'"
        :class="{ active: layout === 'tab3' }"
      >
        1:1문의
      </a>
    </div>
    <!-- tab content 1 -->
    <div class="tab-content" v-if="layout === 'tab1'">
      <div v-for="notice in noticelist" :key="notice" class="notice-row">
          <div class="tag-row">
              <span class="notice-tag red-solid">알림</span>
              <span class="notice-tag red-outline">중요</span>
              <span class="notice-tag dark-solid">이벤트</span>
          </div>
          <div class="text-desc">
              <p>{{notice.desc}}</p>
          </div>
          <div class="bottom-row">
              <span>미디언스</span><span>2021. 01. 03</span>
          </div>
      </div>
    </div>

    <!-- tab content 2 -->
    <div class="tab-content" v-if="layout === 'tab2'">
      tab 2
    </div>

    <!-- tab content 3 -->
    <div class="tab-content" v-if="layout === 'tab3'">
      tab 3
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeTab",
  data() {
    return {
      layout: "tab1",
      noticelist:[
          {
              desc: '숨가쁘게 살아가는 순간 속에도 잃지 않는 회색의 그레이',
              type: '미디언스',
              date: '2021. 01. 03'
          },
          {
              desc: '빠르고 강력한 알레르기 치료제, 알티싹 세티! 제목은 최대 2줄까지 지원',
              type: '미디언스',
              date: '2021. 01. 03'
          },
          {
              desc: '연말 가요대상은 누구일까요? 가요톱텐에서 확인해보세요.',
              type: '미디언스',
              date: '2021. 01. 03'
          },
          {
              desc: '여러분들의 친구 뽀로로와 함께 어덜트 카페로',
              type: '미디언스',
              date: '2021. 01. 03'
          },
          {
              desc: '팔딱팔딱 뛰는 가슴 구해줘 오 내 마음 십년이 지나도',
              type: '미디언스',
              date: '2021. 01. 03'
          }
      ]
    };
  },
};
</script>

<style scoped>
.tabs {
  border: 1px solid #F7F7F7;
  display: flex;
  justify-content: space-around;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  padding: 13px 0 9px;
  cursor: pointer;
}
.tabs .tab.active {
  color: #090909;
  font-weight: bold;
  border-bottom: solid 2px #090909;
}
.notice-row{
    border-bottom: solid 1px #F4F4F5;
    padding: 20px 16px 22px;
}
.tag-row{
    display: flex;
}
.notice-tag{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: -0.6px;
    padding: 0 10px;
    margin-left: 4px;
}
.notice-tag:first-child{
    margin-left: 0;
}
.notice-tag.red-solid{
    background: #F44848;
    color: #FFFFFF;
    border: solid 1px #F44848;
}
.notice-tag.red-outline{
    background: #FFFFFF;
    color: #F44848;
    border: solid 1px #F44848;
}
.notice-tag.dark-solid{
    background: #52525B;
    color: #FFFFFF;
}
.text-desc{
    margin: 12px 0;
}
.text-desc p{
    font-size: 14px;
    line-height: 18px;
    color: #25282B;
}
.bottom-row{
    display: flex;
}
.bottom-row span{
    font-size: 12px;
    line-height: 16px;
    color: #797979;
    margin-left: 24px;
}
.bottom-row span:first-child{
    margin-left: 0;
}
</style>