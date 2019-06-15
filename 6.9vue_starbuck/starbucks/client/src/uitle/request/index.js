import axios from "axios";
import router from "../../router/index"
let request = axios.create({
    baseURL:'http://localhost:3000'
});

request.interceptors.request.use((config)=>{ //  请求前 添加一个token
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
    return Promise.reject(error)
})  

request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    const response = error.response
    const status =response.status
    if(status>400){
        switch(status){
            case 401: 
                router.app.$router.push('/login')
                break 
            case 403:
                alert(403)
                break 
        }
    }
    return Promise.reject(error)
})

export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
};