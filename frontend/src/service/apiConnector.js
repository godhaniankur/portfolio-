import axios from 'axios'

export const apiInstance =  axios.create({});

export const apiConnector = (method,url,bodydata,headers,params) =>{
     return apiInstance({
         method:`${method}`,
         url:`${url}`,
         data: bodydata ?? null,
         headers:headers ?? null,
         params:params ?? null
     })
}