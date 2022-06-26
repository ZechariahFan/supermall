<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="icon"></slot>
      </div>
      <div v-else>
        <slot name="icon-selected"></slot>
      </div>
      <div :style="activeColors">
        <slot name="icon-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    activeColors(){
      return this.isActive?{"color":this.activeColor}:{};
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

</style>
