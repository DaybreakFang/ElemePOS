import {request} from './request'
export function getOftenData(){
  return request({
    url:'./oftenGoods'
  })
}
export function getTypeGoodsData(){
  return request({
    url:'./typeGoods'
  })
}