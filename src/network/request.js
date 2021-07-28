import axios from 'axios'
export function request(config){
  const instance=axios.create({
    baseURL:'https://www.fastmock.site/mock/beb035a939ae209719ec628c045bc838/api',
    timeout:100000
  })
  instance.interceptors.request.use(config=>{
    return config
    },err=>{
    })
    instance.interceptors.response.use(res=>{
      return res
    },err=>{
      console.log(err)
    })
  return instance(config)
}

