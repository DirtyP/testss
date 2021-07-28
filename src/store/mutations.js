export default{
  addUsers(state,user){
    state.userList.push(user)
  },
  LoginByUsername(state,user){
    state.Token = user.data.token;//记录登录人
    localStorage.setItem('Token', user.data.token);//保存登录信息
  },
  GetUserData(state){
    for(const user of state.userList){
      if(user.data.token==localStorage.getItem("Token")){
        state.userData=user.data
      }
    }
  },
  error(state){
    state.errorShow=true
  },
  get_data(state,data){
    state.DATA=data
  },
  push_image(state,image_url){
    state.imageList.push(image_url)
  },
  add_timer(state){
    setInterval(() => {
      state.timer++
      if(state.timer==state.imageList.length){
        state.timer=0
      }
    //  console.log(state.timer)
    }, 1000);
  }
}