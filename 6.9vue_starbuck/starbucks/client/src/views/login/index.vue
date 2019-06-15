<template>
    <div class="wrap login"  style=''>
        <dd class="login_Nav">
            <p class="times">&times;</p>
            <h2>欢迎来到星享俱乐部</h2>
        </dd>
       <p class="phone">
            <input type="text" placeholder="手机号码" v-model="user_value">
       </p>
       <p class="number">
            <input type="text" placeholder="验证码" v-model="pwd_value">
       </p>
        <p class="btn">
            <button @click="login">登陆/注册</button>
        </p>
        <p class="user">
            使用账号密码登陆
        </p>
        <p class="discript">
            使用以下方式进行账户注册/登陆
        </p>
        <div class="ico">
            <div class="image">
                <img src="../../static/images/1.jpg" alt="" />                
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../api/index"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user_value:'',
            pwd_value:'',
            reg:/^1[3579]\d{9}$/
        }
    },
    computed:{

    },
    methods:{
        login(){
            if(this.user_value.trim() !='' && this.reg.test( this.user_value)){
                api.login({
                    phone:this.user_value,
                    password:this.pwd_value
                }).then((res)=>{
                    let { token }=res
                    window.localStorage.setItem('token',token)
                    this.$router.history.go(-1)
                }).catch((res)=>{
                    this.$alert(res.response.data.message)
                })
            }else{
                this.$alert('格式不对啊，老弟')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../uitle/scss/_mixin.scss";
    @import "../../uitle/fonts/iconfont.css"; 
    @import "../../uitle/scss/common.scss";
    @import "../../static/css/style.scss"
</style>