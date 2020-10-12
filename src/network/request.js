import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  },err=>{
    console.log(err);
  })
  return instance(config)
}