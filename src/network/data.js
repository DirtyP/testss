import {request} from './request'
export function getData(){
  return request({
    url:"/test"
  })
}