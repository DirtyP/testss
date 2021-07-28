<template>
  <div class="login">
    <body>
    <global_header/>
    <div class="login_page">
      <img class="left_image" src="~assets/img/join/left_image.png">
      <div class="page_content">
        <div class="page_content_flex">
          <div class="login_left_col">
            <div class="loginbox_padding">
              <div class="loginbox_content">
                <div class="login_title" >登录</div>
                <transition name="el-zoom-in-top" v-show="this.$store.state.errorShow">
                  <div class="error" v-show="this.$store.state.errorShow">您输入的帐户名称或密码错误。</div>
                </transition>
                <div class="login_form">
                  <div class="login_row">
                    <div class="input_title"> Steam 帐户名称</div>
                   <input class="input_username" v-model="loginForm.username">
                  </div>
                  <div class="login_row">
                    <div class="input_title">密码</div>
                    <input class="password" type="password" v-model="loginForm.password">
                  </div>
                  <div class="login_btn_in">
                    <div class="login_btn">
                      <button class="submit" @click="login" @mouseover="btn_mouseover" @mouseleave="btn_mouseleave" ><span :class="{btn_isOver:btn_isOver}" class="sub" >登录</span></button>
                    </div>
                    <a id="forgor_password" href="https://help.steampowered.com/zh-cn/wizard/HelpWithLogin?redir=store%2Flogin%2F%3Fredir%3D%26redir_ssl%3D1%26snr%3D1_4_4__global-header">忘记您的密码?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="login_right_col">
            <div class="login_join_desc">加入 Steam，探索数千款精彩游戏。</div>
            <a class="login_join_desc about_link" href="https://store.steampowered.com/about">了解更多</a>
            <img class="join_image" src="~/assets/img/join/join_pc.png">
            <div class="login_btn_in">
              <div class="subtext">免费加入且简单易用。</div>
              <a class="join_steam_a" href="https://store.steampowered.com/join/?&snr=1_60_4__62">
                <div class="join_steam" @mouseover="mouseover" @mouseleave="mouseleave" :class="{isOver:isOver}">加入 Steam</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>

<script>

import global_header from "components/content/global_header/global_header"
export default {
name:"Login",
data(){
  return{
    loginForm:{
      username:'',
      password:''
    },
    isOver:false,
    btn_isOver:false
  }
},
components: {
  global_header
},
methods: {
  login(){ 
    // console.log(localStorage.getItem("Token"))
    // console.log(this.$store.state.userData)
    let i=0
    if(this.loginForm.username===""||this.loginForm.password === ''){
    }
    else{
     for(const user of this.$store.state.userList){
        i++
      if(this.loginForm.username==user.username&&this.loginForm.password==user.password){
        this.$store.commit('LoginByUsername', user)
        this.$router.push({path : "/"})
        return
        }
      }
      if(i==this.$store.state.userList.length){
        this.$store.commit("error")
        this.loginForm.password=''
        console.log(this.$store.state.errorShow)
      }
    }
    
  },
  mouseover(){
    this.isOver=true
  },
  mouseleave(){
    this.isOver=false
  },
  btn_mouseover(){
    this.btn_isOver=true
  },
  btn_mouseleave(){
    this.btn_isOver=false
  }
}
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
body{
  color: #E9E9E9;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  line-height: normal !important;
}
input{
  max-width: 300px;
  background: #32353C;
  border-radius: 3px;
  color: #E9E9E9;
  padding: 8px 6px;
  display: block;
  box-shadow: none;
  width: 100%;
  transition: border ease-in-out .5s;
  border: 1px solid #26282D;
  outline: none;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 12px;
  height: 19px;
}
.login_page{
  width: 1903px;
  height: 800px;
  background-color: #212429;
  display: flex;
}
.page_content{
  position: relative;
  left: -324px;
  width: 940px;
  margin: 0 auto;
  padding: 0;
  z-index: 9;
}
.page_content_flex{
  display: flex;
  justify-content: space-between;
  min-height: 800px;
}
.login_left_col{
  flex-grow: 1;
  /* background: radial-gradient(at 0% 50%, rgba(31,36,41,1) 0%,  #fff 100%); */
  /* background:linear-gradient(to right,#1E2429 200px ,#212429 419px);  */
  background:linear-gradient(to right,#1E2429 200px ,rgba(34,40,46, 0.1),#212429 419px); 
  width: 620px;
  height: 800px;
  background-color: #23262B;
}
.loginbox_padding{
  min-height: 352px;
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.loginbox_content{
  min-height: 264px;
  padding-bottom: 16px;
  max-width: 300px;
}
.login_title{
 text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 200;
  letter-spacing: 2px;
  text-align: center;
}
.login_form{
  width: 274px;
  height: 142px;
  display: block;
}
.login_row{
  margin-bottom: 18px;
}
.input_title{
  font-size: 14px;
  color: #b8b6b4;
  margin-bottom: 5px;
  width: 274px;
  height: 20px;
}
.login_btn_in{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.submit{
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #c3e1f8;
  background: transparent;
  text-shadow: 1px 1px 0px rgba( 0, 0, 0, 0.3 );
}
.submit .sub{
  padding: 3px 80px;
  font-size: 15px;
  line-height: 30px;
  border-radius: 2px;
  display: block;
  background: linear-gradient( to right, #47bfff 5%, #1a44c2 60%);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-position: 25%;
  background-size: 330% 100%;
  cursor: pointer;
  color: #c3e1f8;
  text-shadow: 1px 1px 0px rgba( 0, 0, 0, 0.3);
}
#forgor_password{
  margin: 20px 0 0;
}
a{
  display: block;
  text-decoration: none;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
}
a:hover {
  text-decoration: none;
  color: #66c0f4;
}
.login_right_col{
  padding-top: 100px;
  width: 320px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_join_desc{
  max-width: 60%;
  text-align: center;
  font-size: 14px;
  color: #b8b6b4;
}
.about_link{
  margin-top: 10px;
  color: #FFFFFF;
}
.join_image{
  width: 320px;
}
.subtext{
  font-size: 14px;
  color: #b8b6b4;
}
.join_steam_a{
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #fff !important;
  background: transparent;
  margin: 20px 0 0 0;
  display: block;
  text-align: center;
}
.join_steam{
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 2px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  display: block;
}
.left_image{
  width: 34%;
  position: relative;
  left: 0px;
  top: 0;
}
.error{
  color: #FFFFFF;
font-size: 14px;
margin-bottom: 20px;
padding: 16px;
background: rgba( 0, 0, 0, 0.2 );
margin-bottom: 8px;
border: 1px solid #b44040;
max-width: 350px;
margin: 15px 0px 20px 0px;
height: 20px;
font-family: "Motiva Sans", Sans-serif;
font-weight: 300;
}
.isOver{
 border: 1px solid #fff;
}
 .btn_isOver  {
  background: linear-gradient( to right, #47bfff 5%, #47bfff 5%) !important;
}
</style>