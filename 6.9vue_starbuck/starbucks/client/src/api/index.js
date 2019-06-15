import request from "../uitle/request/index"

export default {
    //是否 登录
    isLogin:()=>request.get('/api/user/info'),
    // 登录 接口    
    login:(data)=>request.post('/api/login',data),
    //列表数据接口
    getList:(data)=>request.get('/api/task/list',data),
    // 获取加班详情数据
    overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
    // 获取详情数据
    vacationDetail:(data)=>request.get('/api/apply/vacation',data),
    //  发送图片
    vacationSubmit:(data)=>request.post('/api/apply/vacation',data),

    overtimeSubmit:(data)=>request.post('/api/apply/overtime',data),

    commitFile:(file)=>request.post('/api/upload',file)
}