import request from "../../uitle/request/index"
import api from "../../api/index"
export default { 
    namespaced:true,
    state:{
        listdata:{}
    },
    mutations:{
        setinfodata(state,data){
            state.listdata=data
        }
    },
    actions:{
        testUserInfo({commit}){
            api.isLogin().then((res)=>{
                commit('setinfodata',res.data)
            })
        }
    }       
}