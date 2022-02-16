<template>
    <div class="drawer-wrap">
        <div class="drawer-top">
            <div class="selectWrap">
                <v-select
                    class="style-chooser"
                    placeholder="Choose a Styling Option"
                    :options="['Components', 'CSS / Variables', 'Slots']"
                />
            </div>
        </div>
        <div class="button-group">
            <button class="grey-btn">취소</button>
            <button class="black-btn">신청하기</button>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
import vSelect from 'vue-select';

export default {
    name: 'DrawerBottom',
    components: {
        vSelect,
    }
    // Vue.component('v-select', vSelect)
}
</script>

<style scoped>
.drawer-wrap{
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    background: #ffffff;
}
.button-group{
    display: flex;
}
.button-group button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    padding: 21px;
}
.button-group button.grey-btn{
    color: #797979;
    background: #E5E5E5;
}
.button-group button.black-btn{
    color: #FFFFFF;
    background: #090909;
}
</style>