<template>
  <div class="mall" >
    <global_header></global_header>
    <div class="mall_page_content">
      <button class="bt1" @click="login">
      登录
      </button>
      <img v-if="imageList[0][0]" :src="imageList[0][0]">
      <!-- <banner/> -->
    </div>
  </div>
  </div>
</template>

<script>

import axios from "axios"

import global_header from "components/content/global_header/global_header"
import Banner from "components/common/banner/Banner"
export default {
name:"Mall",
data(){
return{
  imageList:[],
  image:'',
}
},
components: {
  global_header,
  Banner
},
methods: {
    login(item){
        // this.$router.push('/login')
        
    },
  },
created () {
  this.$store.dispatch("get_data")
    .then(res=>{
      console.log(this)
      console.log(res)
      this.imageList=res
      // this.$set(this.imageList)
      // console.log(this.imageList[0][0])
      // this.$set(this.imageList,1,res[1])
      // console.log(this.imageList[0][0])
      // for(let i=0;i++;i<res.length){
      //   console.log(res[i])
      // }
      // console.log(this.imageList)
    })
},
mounted () {
    
},

}
</script>

<style scoped>
.mall_page_content{
  width: 1903px;
  height: 3430px;
  background-color: salmon;
}

</style>