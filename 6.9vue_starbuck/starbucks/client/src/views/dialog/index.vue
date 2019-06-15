<template>
    <div class="dialog" v-if='open' @click="removefn">
        <div class="bottom">
            <div v-for="(item,index) in list" 
            :key=index
            @click="jump(item)"
            class="item">
                <span class="iconfont icon-wode"></span>
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations,mapState,mapGetters,mapActions} from 'vuex'
export default {
    props:[
        'open'
    ],
    components:{

    },
    data(){
        return {
            list:[
                {
                    title:'加班',
                    ico:'icon-wode',
                    type:'overtime',
                },
                {
                    title:'休假',
                    ico:'icon-shouye',
                    type:'vacation',
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        removefn(){
            this.$emit('dis')
        },
        jump(item){
            this.$router.push({name:'commit' ,params:{type:item.type}})
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
    @import "../../static/css/style.scss";
    .dialog{
        @include fn (100%,100%);
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        .bottom{
            position: absolute;
            bottom: 0;
            @include fn (100%,pxTorem(60px));
            background: white;
            display: flex;
            .item{
                flex: 1;
                text-align: center;
                line-height:pxTorem(30px);
                font-size: pxTorem(16px);
                display: flex;
                flex-direction: column;
                color: #333;
            }
        }
    }
</style>