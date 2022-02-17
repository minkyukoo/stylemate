<template>
    <div class="drawer-wrap">
        <div class="drawer-top">
            <div class="selectWrap">
                <vue-select
                 placeholder="COLOR"
                 :options="options"> </vue-select>
            </div>

            <div class="selectWrap">
                <vue-select
                 placeholder="SIZE"
                 :options="options"> </vue-select>
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
import { defineComponent } from "vue";
import VueNextSelect from 'vue-next-select';

export default defineComponent({
    name: 'DrawerBottom',
    components: {
        'vue-select': VueNextSelect,
    },
    data() {
        return {
            //
        }
    },
    setup() {
        // const selectedItem = ref("Black");

        const options = [
           'Black', 'White', 'Green', 'Yellow', 'Bright blue','Black', 'White', 'Green', 'Yellow', 'Bright blue'
        ];
        return { options };
    },
})
</script>

<style scoped>
.drawer-wrap{
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
}
.drawer-top{
    padding: 24px 20px;
}
.drawer-top .selectWrap{
    margin-top: 4px;
}
.drawer-top .selectWrap:first-child{
    margin-top: 0;
}
.drawer-top .selectWrap .vue-select{
    width: 100%;
    border: 1px solid #C4C4C4;
    border-radius: 6px;
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