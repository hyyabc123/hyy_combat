<template>
    <div class="list" @click="detailFn(list_type,applicationNumber)">  
        <p class="phead">
            <span>{{applicationNumber}}</span>
            <span></span>
            <span></span>
            <span>待确认</span>
        </p>
        <div class="msg">
            <p><span style='color:#B1B1B1'>申请人</span><span><i class="iconfont icon-"></i> {{nickname}}</span></p>
            <p><span style='color:#B1B1B1'>加班类型</span><span>{{type1 }}</span></p>
            <p><span style='color:#B1B1B1'>加班日期</span><span>{{beginTime}}</span></p>
            <p><span style='color:#B1B1B1'>加班时数</span><span>{{alltime.toFixed(2)}}天</span></p>
        </div>    
    </div>
</template>
<script>
export default {
    props:['nickname','applicationNumber','list_type','status','type','endTime','startTime'],
    components:{

    },
    data(){
        return {
            typeWord:''
        }
    },
    computed:{
        type1(){
            if(this.list_type=='overtime'){
                if(this.type===1){
                    return '双休日加班'
                }else if(this.type==2){
                    return '节假日加班'
                }else if(this.type==3){
                    return '工作日加班'
                }
            }else{
                if(this.type===1){
                    return '年假'
                }else if(this.type==2){
                    return '调休'
                }
            }
            
        },
        alltime(){
            return (new Date(this.endTime)*1-new Date(this.startTime)*1)/86400000
        },
        beginTime(){
            return new Date(this.startTime).toLocaleDateString()
        }
    },
    methods:{
        detailFn(type,id){
            this.$router.push({
                name:'detail',
                params:{
                    type,
                    id
                }
            })
        }
    },
    created(){

    },
    mounted(){
        console.log(this.list_type,'---------------')
    }
}
</script>
<style scoped lang="scss">
    @import "../../../uitle/scss/_mixin.scss";
    @import "../../../uitle/fonts/iconfont.css"; 
    @import "../../../uitle/scss/common.scss";
    .phead{
        @include fn(100%,pxTorem(30px));              
        display: flex;
        line-height: pxTorem(30px);
        span{
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    .msg{
        @include fn(100%,pxTorem(80px));
        display: flex;
        flex-wrap: wrap;
        
        p{
            @include fn(48%,pxTorem(40px));
            text-align: center;
            line-height: pxTorem(40px);
            display: flex;
            span{
                flex: 1;
                display: flex;
                padding-left: pxTorem(10px);
                justify-content: flex-start;
            }
        }
    }

</style>