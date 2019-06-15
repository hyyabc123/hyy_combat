<template>
    <div class="wrap sort">
        <header>
            <span ></span>
            <div></div>
            <span class="add">排序</span>
            <div></div>
            <span ></span>
        </header>
        <div class="mian_choose" >
            <div class="choose" v-for = "(item,index) in list" :key='index'>  
                <p class="time">
                    {{item.title}}
                </p>
                <p class="choose_choose" >
                    <span 
                    v-for='(item1,index1) in item.children' :key='index1' 
                    >{{item1.title}}</span>
                </p>
            </div>
        </div>
        <footer class="footer">
            <span class="back">返回</span>
            <span class="sure">确认</span>
        </footer>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[
                {
                    title:'按发起时间排序',
                    children:[
                        {
                            title:'按时间倒序',
                            id:0
                        },
                        {
                            title:'按时间顺序',
                            id:0
                        },
                    ]
                },
                {
                    title:'按加班日期排序',
                    children:[
                        {
                            title:'按日期倒序',
                            id:0
                        },
                        {
                            title:'按日期顺序',
                            id:0
                        },
                    ]
                },
                {
                    title:'按加班时数排序',
                    children:[
                        {
                            title:'按时数倒序',
                            id:0
                        },
                        {
                            title:'按时数顺序',
                            id:0
                        },
                    ]
                }
            ]
        }
    },
    computed:{

    },
    methods:{

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