import axios from "axios"

export default{
  get_data(context){
    return new Promise((resolve=>{
      axios.get("https://www.fastmock.site/mock/6f2a38f4665c8ff722c0bd678fe18dfe/steam/product")
      .then(res=>{
      context.commit("get_data",res.data)
      for(let key in res.data){
        context.commit("push_image",res.data[key].product_image_url)
      }
        context.commit("add_timer")
        resolve(context.state.imageList)
    })
    .catch(error=>{console.log(error)})
    }))
    
  }
}