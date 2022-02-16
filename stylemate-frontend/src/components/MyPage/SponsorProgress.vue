<template>
  <div class="sponsers-wrap">
      <ItemCard :progressDetails="item" v-for="(item,index) in progress" :key="index" />
  </div>
</template>

<script>
import ItemCard from "@/components/MyPage/ItemCard.vue";
export default {
    name: "SponsorProgress",
    components: { ItemCard },
    data() {
        return {
            progress: [
                {
                    imgTag: "re-registration",
                    img: "MyPage-item1.png",
                    title: "NCOVER",
                    desc: "CHECKER BOARD  URTLEN...",
                    endDate: "2012-02-13 15:30",
                    status: "re-registration",
                },
                {
                    imgTag: "Sponsor Selection",
                    img: "MyPage-item1.png",
                    title: "ROLAROLA",
                    desc: "leopard fleece jumper black",
                    endDate: "2012-02-13 15:30",
                    status: "sponsor-selection",
                },
                {
                    imgTag: "Post registration",
                    img: "MyPage-item1.png",
                    title: "NCOVER",
                    desc: "CHECKER BOARD  URTLEN...",
                    endDate: "2012-02-13 15:30",
                    status: "post-registration",
                },
                {
                    imgTag: "Checking",
                    img: "MyPage-item1.png",
                    title: "NCOVER",
                    desc: "CHECKER BOARD  URTLEN...",
                    endDate: "2012-02-13 15:30",
                    status: "checking",
                },
                
            ]
        }
    }
}
</script>

<style scoped>
.sponsers-wrap{
    padding: 0 20px;
}
</style>