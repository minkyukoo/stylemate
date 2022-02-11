<template>
    <div class="tab-wrap">
        <div class="tabs">
            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tab 2</a>
            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Tab 3</a>
        </div>

        <div class="content">
            <div v-if="activetab === 1" class="tabcontent">
                Content for tab one
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                Content for tab two
            </div>
            <div v-if="activetab === 3" class="tabcontent">
                Content for tab three
            </div>
        </div>
    </div>
</template>

<script>
export default({
    name: "TabProductDetails",
})


// new Vue({
//     el: '#tabs',
//     data: function() {
// return { activetab: 1 };
// },
// });


</script>
