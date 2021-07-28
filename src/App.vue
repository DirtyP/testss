<template>
  <div id="app">
    <keep-alive>
     <router-view/>
    </keep-alive>
  </div>
</template>

<script>

// import {getData} from 'network/data'

export default {
  
  name:"App",
   created () {
    //  if (sessionStorage.getItem("store") ) {
    //     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    //   }
    //   window.addEventListener("beforeunload",()=>{
    //     sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    //   })
    // getData()//获取数据
    // .then(({data})=>{
    //   for(let key in data){
    //     this.$store.commit('addUsers',data[key])
    //   }
    // })
 },
}
</script>

<style scoped>

</style>