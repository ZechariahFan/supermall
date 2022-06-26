<template>
  <div class="home-navbar">
    <NavBar>
      <div slot="center">购物街</div>
    </NavBar>
    <swiper2 :imgList="banners"></swiper2>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import Swiper2 from "@/components/common/swiper/Swiper2";
export default {
  name: "Home2",
  components:{
    NavBar,
    Swiper2
  },
  data(){
    return{
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res =>{
      this.banners = res.data.data.banner.list
      // console.log(this.banners);
    });
  }
}
</script>

<style scoped>
.home-navbar{
  background: var(--color-tint);
  color: white;
}
</style>
