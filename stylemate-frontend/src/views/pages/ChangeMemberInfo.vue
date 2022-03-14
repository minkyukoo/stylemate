<template>
  <ion-page class="main-container relative">
    <TopNav headerTitle="회원정보 변경" />
    <ion-content :fullscreen="true">
      <div class="changeMemberInfoWrap">
        <div class="chnageInfoHead">
          <p>계정정보 수정</p>
        </div>
        <div class="form-wrap">
            <div class="input-grp">
                <label>이메일</label>
                <input type="text" placeholder="mediance@mediance.co.kr" disabled/>
            </div>
            <div class="password-grp">
                <div class="input-grp">
                    <label>기존 비밀번호</label>
                    <input type="text" placeholder="기존 비밀번호 입력"/>
                </div>
                <div class="input-grp">
                    <label>새 비밀번호</label>
                    <input type="text" placeholder="비밀번호 입력 (영문+숫자+특수기호 조합)"/>
                </div>
                <div class="input-grp">
                    <label>새 비밀번호 확인</label>
                    <input type="text" placeholder="비밀번호 입력 확인"/>
                </div>
                <div class="input-grp"><button class="white-btn" type="button">비밀번호 저장</button></div>
                
            </div>
            <div class="input-grp">
                <label>휴대폰 번호 </label>
                <div class="inlineForm">
                    <div class="notiWrap">
                        <vue-select placeholder="SKT" :options="options"> </vue-select>
                    </div>
                    <div class="codeWrap">
                        <span>010-</span>
                        <input type="text"/>
                    </div>
                    <div class="contWrapbtn">
                        <button
                        type="button">인증번호</button>
                    </div>
                </div>
            </div>
            <div class="timerWrap">
                <div class="input-grp">
                    <input type="text" placeholder="인증번호 입력"/>
                    <span class="timer">01:53</span>
                </div>
                <div class="input-grp"><button class="black-btn" type="button">인증번호 확인</button></div>
            </div>
        </div>
      </div>
      <div class="button-group">
          <button class="black-btn-fixed">확인</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import VueNextSelect from "vue-next-select";
export default {
  name: "ChangeMemberInfo",
  components: { TopNav, IonContent, IonPage, "vue-select": VueNextSelect, },
  setup() {
    const options = ["SKT", "SKT 1", "SKT 2", "SKT 3"];
    return { options };
  },
};
</script>

<style scoped>
.changeMemberInfoWrap{
    padding: 20px 16px 160px;
}
.changeMemberInfoWrap input[type="text"],
.changeMemberInfoWrap input[type="password"],
.contWrapbtn [type="button"] {
  border: 1px solid#E5E5E5;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
}
.chnageInfoHead{
    border-bottom: 1px solid #F7F7F7;
}
.chnageInfoHead p{
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #C4C4C4;
    padding-bottom: 11px;
}
.input-grp{
    margin-bottom: 19px;
    display: flex;
    flex-direction: column;
}
.input-grp label{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #25282B;
    margin-bottom: 8px;
}
.input-grp input{
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    padding: 14px 16px;
}
.input-grp input:disabled{
    background: #F7F7F7;
}
.white-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #595959;
    border: 1px solid #25282B;
    border-radius: 4px;
    background: #FFFFFF;
    width: 100%;
    padding: 14px;
}
.black-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    border: 1px solid #090909;
    border-radius: 4px;
    background: #090909;
    width: 100%;
    padding: 14px;
}
.inlineForm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
}
.inlineForm div {
  margin: 0 2px;
}
.codeWrap {
  position: relative;
}
.codeWrap span {
  position: absolute;
  left: 15px;
  top: 15px;
  color: #c4c4c4;
  font-size: 14px;
}
.codeWrap input[type="text"] {
  padding-left: 50px !important;
}
.button-group{
    bottom: 0;
    max-width: 500px;
    position: fixed;
    width: 100%;
}
.button-group .black-btn-fixed{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    padding: 21px;
    color: #ffffff;
    background: #090909;
}
button{
    white-space: nowrap;
}
.timerWrap .input-grp{
    position: relative;
}
.timerWrap .input-grp input{
    padding-right: 55px;
}
.timerWrap .input-grp .timer{
    position: absolute;
    top: 50%;
    right: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9D6AFF;
    transform: translate(0, -50%);
}
</style>