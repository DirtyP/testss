<template>
  <div class="global_header">
    <div class="content">
      <div class="logo">
        <a href="https://store.steampowered.com/?snr=1_60_4__global-header"> <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"> </a>
      </div>
      <div class="supernav_container">
        <a class="menuitem" href="https://store.steampowered.com/?snr=1_60_4__global-header" @mousemove="shopMousemove" @mouseleave="shopMouseleave">商店</a>
        <a class="menuitem" href="https://steamcommunity.com/ " @mousemove="communityMousemove" @mouseleave="communityMouseleave">社区</a>
        <a class="menuitem" href="https://store.steampowered.com/about/?snr=1_60_4__global-header">关于</a>
        <a class="menuitem" href="https://help.steampowered.com/zh-cn/">客服</a>
        <transition name="el-fade-in">
          <div class="supernav_content" v-show="shopShow" @mousemove="shopMousemove" @mouseleave="shopMouseleave">
            <div class="submenu_store">
              <a class="submenuitem" href="https://store.steampowered.com/?snr=1_60_4__global-header">主页</a>
              <a class="submenuitem" href="https://store.steampowered.com/explore/?snr=1_60_4__global-header">探索队列</a>
              <a class="submenuitem" href="https://steamcommunity.com/my/wishlist/">愿望单</a>
              <a class="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_60_4__global-header">点数商店</a>
              <a class="submenuitem" href="https://store.steampowered.com/news/?snr=1_60_4__global-header">新闻</a>
              <a class="submenuitem" href="https://store.steampowered.com/stats/?snr=1_60_4__global-header">统计数据</a>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div class="supernav_content community" v-show="communityShow" @mousemove="communityMousemove"  @mouseleave="communityMouseleave">
            <div class="submenu_community">
              <a class="submenuitem" href="https://steamcommunity.com/">主页</a>
              <a class="submenuitem" href="https://steamcommunity.com/discussions/">讨论</a>
              <a class="submenuitem" href="https://steamcommunity.com/workshop/">创意工坊</a>
              <a class="submenuitem" href="https://steamcommunity.com/market/">市场</a>
              <a class="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">实况直播</a>
            </div>
        </div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
export default {
name:"global_header",
data:()=>{
  return{
    shopShow:false,
    communityShow:false
  }
},
methods: {
  shopMousemove(){
    this.shopShow=true
  },
  shopMouseleave(){
    this.shopShow=false
  },
  communityMousemove(){
    this.communityShow=true
  },
  communityMouseleave(){
    this.communityShow=false
  }
} 
}
</script>

<style scoped>
*{
  margin: 0;
}
a{
  text-decoration: none;
}
.global_header{
  width: 1903px;
  height: 104px;
  font-weight: normal;
  font-size: 14px;
  background: #171a21;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 14px;
}
.content{
  position: relative;
  width: 940px;
  height: 104px;
  margin: 0px auto;
  z-index: 402;
}
.logo{
  float: left;
  padding-top: 30px;
  margin-right: 40px;
  width: 176px;
  height: 44px;
 
}
img{
  width: 176px;
  height: 44px;
}
.supernav_container{
  position: absolute;
  left: 200px;
}
.menuitem{
  display: block;
  position: relative;
  padding-top: 45px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 7px;
  line-height: 16px;
  float: left;
  font-size: 14px;
  color: #b8b6b4;
  text-transform: uppercase;
}
.supernav_content{
  position: absolute;
  z-index: 1500;
  /* opacity: 0; */
  left: 1px;
  top: 64px;
  /* pointer-events: none; */
  background: #171a21;
  max-width: 132px;
  padding: 5px 15px 10px 15px;
  box-shadow: 3px 3px 5px -3px #000;
  text-align: left;
}
.submenuitem{
  text-decoration: none;
  text-transform: uppercase;
  font-size: 11px;
  color: #b8b6b4;
  padding-right:6px ;

}
a.submenuitem{
  display: block;
  padding: 6px 6px 6px 0;
}
.community{
  position: absolute;
  left: 43px;
}
</style>