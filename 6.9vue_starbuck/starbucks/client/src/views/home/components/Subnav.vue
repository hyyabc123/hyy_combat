<template>

    <div class="subnav">
        <div class="center">
            <span
                v-for='(item,index) in work' :key='index'
                :class="[index==subtit?'active':'']"
                @click="changeWorkFn(index,item.tit)"
            >
            {{item.title}}</span>
        </div>               
        <div class="poa">
            <span class='iconfont icon-gengduo-2'></span>
            <span class='iconfont icon-shouqi-01'></span>
        </div>
    </div>

    
</template>
<script>
export default {
    props:['subtit'],
    components:{

    },
    data(){
        return {
            ind2:0,
            work:[
                {
                    title:'加班',
                    tit:'overtime'
                },
                {
                    title:'休假',
                    tit:'vacation'
                }
            ],
        }
    },
    computed:{

    },
    methods:{
        changeWorkFn(index,tit){
            this.$emit('subnavFn',tit,index)
        }
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../../uitle/scss/_mixin.scss";
    @import "../../../uitle/fonts/iconfont.css"; 
    @import "../../../uitle/scss/common.scss";
    @import "../../../static/css/style.scss";
</style>