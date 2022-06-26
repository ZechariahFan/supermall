<template>
  <div>
    <img id="pic" src="~assets/img/swiper/i.jpg" width="300px"/>
    <button @click="getImge">获取imgList</button>
  </div>
</template>

<script>
export default {
  name: "Swiper2",
  props:{
    imgList: Array
  },
  data(){
    return{
      index: 0
    }
  },
  mounted() {
    //console.log(this.imgList);
  },
  methods: {
    getImge(){
      setInterval(()=>{
        let pic = document.getElementById("pic");
        if(this.index== this.imgList.length){
          this.index = 0;
        }
        pic.src = this.imgList[this.index].image;
        console.log(pic.src)
        this.index ++;
     },5000)
     console.log(this.imgList);
    },
    init(){
      setInterval(()=>{
        let index = 0;
        setInterval(()=>{
          let pic = document.getElementById("pic");
          if(index== picArr.length){
            index = 0;
          }
          pic.src = './img/'+picArr[index];
          console.log(pic.src)
          index ++;
        },1000)
      },1000)
    }
  }
}
</script>

<style scoped>

</style>
