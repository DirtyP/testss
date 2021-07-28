<template>
  <div class="banner" >
    <el-button type="primary" @click="sss">主要按钮</el-button>
    <div class="banner_content">
      <div class="main_image_div">
        <!-- <img :src="imageList[0][0]" class="main_image"> -->
      </div>
      <div class="introduce_image_div">
        <!-- <img :src="this.$store.state.imageList[this.$store.state.timer][1]" class="introduce_image">
        <img :src="this.$store.state.imageList[this.$store.state.timer][2]" class="introduce_image">
        <img :src="this.$store.state.imageList[this.$store.state.timer][3]" class="introduce_image">
        <img :src="this.$store.state.imageList[this.$store.state.timer][4]" class="introduce_image"> -->
      </div>
    </div>
    
    
  </div>
</template>


<script>
export default {
  computed: {
    imageList(){
      return this.$store.state.imageList
    },
    timer(){
      return this.$store.state.timer
    }
  },
  methods: {
   sss(){
        console.log(this.timer)
   }
  },
  created () {
  },
}
</script>

<style scoped>
.banner_content{
  width: 940px;
  height: 353px;
  display: flex;

}
.main_image{
  width: 616px;
  height: 353px;
}
.introduce_image{

}
</style>