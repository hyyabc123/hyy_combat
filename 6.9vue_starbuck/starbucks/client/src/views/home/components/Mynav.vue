<template>
     <nav class="nav">
        <div :class="['item1',index==ind1? 'active' : '']" 
        v-for="(item,index) in list" :key='index'
        @click="changeTypeFn(index,item.status)"
        >
            <span :class="['iconfont',item.icon]"></span>
            <span>{{item.title}}</span>
        </div>
    </nav>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind1:0,
            list:[
                {
                    title:'待处理',
                    icon:'icon-05',
                    status:0
                },
                {
                    title:'已发起',
                    icon:'icon-07',
                    status:1
                },
                {
                    title:'已处理',
                    icon:'icon-yibangding',
                    status:2
                }
            ],
        }
    },
    computed:{

    },
    methods:{
        changeTypeFn(index,status){
            this.ind1=index     
            this.$emit('change',status)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../../uitle/scss/_mixin.scss";
    @import "../../../uitle/fonts/iconfont.css"; 
    @import "../../../uitle/scss/common.scss";
    @import "../../../static/css/style.scss"
</style>