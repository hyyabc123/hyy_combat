<template>
    <div class="wrap homewrap">
        <Head />
       <Mynav @change="changeFn"/>

        <Subnav @subnavFn='subnavFn' :subtit='subtit'/>
        <div class="box">
            <List v-for ='(item,index) in renderList' 
                :key='index'
                :nickname=item.nickname
                :applicationNumber=item.applicationNumber
                :status=dataOption.status
                :list_type =item.list_type 
                :type=item.type
                :endTime=item.endTime
                :startTime=item.startTime
            />
        </div>
        <Dialog  :open=open @dis='disfn' />
        <div class="task">
            <div class="tasks" @click="dialogFn">
                <span class="iconfont icon-jia"></span>
                <p>发起任务</p>
            </div>
        </div>
    </div>
</template>
<script>
import List from "./components/list"
import Mynav from "./components/Mynav" 
import Subnav from "./components/Subnav"
import api from "../../api/index"
import Dialog from "../dialog/index"
import {mapActions} from "vuex"
export default {
    props:{
       
    },
    components:{
        List,
        Mynav,
        Subnav,
        Dialog
    },
    data(){
        return {
            subtit:0,
            dataOption:{
                page:1,
                pageSize:10,
                create_at:0,
                type:'overtime',
                status:0
            },
            renderList:[],
            open:false
        }
    },
    computed:{
        
    },
    methods:{
        ...mapActions('Info',['testUserInfo']),
        changeFn(status){
            this.dataOption.status=status
            this.getdata()
            this.subtit=0
            this.dataOption.type='overtime'       
             
        },
        getdata(){
            api.getList(this.dataOption).then((res)=>{
                this.renderList=res.data
            })
        },
        subnavFn(tit,index){
            this.subtit =index
            this.dataOption.type=tit
            this.getdata()
        },
        dialogFn(){
            this.open=true
        },
        disfn(){
            this.open=false
        }
    },
    created(){
        this.testUserInfo()        
        this.getdata() // 首次 待处理  加班
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../uitle/scss/_mixin.scss";
    @import "../../uitle/fonts/iconfont.css"; 
    @import "../../uitle/scss/common.scss";
    @import "../../static/css/style.scss";
</style>