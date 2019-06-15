<template>
    <div class="wrap detail">
        <Head>
            <p>{{$route.params.type == 'overtime'? '加班申请':'休假申请' }}</p>
        </Head >
        <div v-if="!detaildata.annex">
            ...loading
        </div>
        <div v-else class="detailhead">
            <!-- <img  v-for="(item,index) in detaildata.annex" :key=index :src="'http://localhost:3000'+`${item}`" /> -->
            <div class="dehead">
                <div class="deheadbotton">
                    <dl>
                        <dt>
                            <div class="img">
                                <img :src="detaildata.avatar" alt="">
                            </div>
                        </dt>
                        <dd>
                            <p>
                                <span class="first">申请人姓名</span>
                                <span>{{detaildata.nickname}}</span>
                                <span></span>
                            </p>             
                            <p>
                                <span class="first">直接主管</span>
                                <span>秦义超</span>
                                <span></span>
                            </p>             
                        </dd>
                    </dl>
                    <span class="iconfont icon-xiangzuo"></span>
                </div>
                <div class="bb">

                </div>
            </div>
            
            <div class="bottomdetail">
                <div class="msg">
                    <p class="msgtit">
                        申请信息
                    </p>
                    <p>
                        <span>加班日期</span>
                        <span class="ms">{{alltime.toFixed(2)}}天</span>
                    </p>
                    <p>
                        <span>加班类型</span>
                        <span class="ms">双休日加班</span>
                    </p>
                    <p>
                        <span>加班起始时间</span>
                        <span class="ms">{{Ctimes}}</span>
                    </p>
                    <p>
                        <span>加班截止时间</span>
                        <span class="ms">{{Etimes}}</span>
                    </p>
                    <p>
                        <span>共计时数</span>
                        <span class="ms">{{alltime.toFixed(2)}}天</span>
                    </p>
                </div>
                <div class="work">
                    <p class="work_k">
                        加班事由
                    </p>
                    <div>
                        {{detaildata.describes}}
                    </div>
                </div>
                <div class="up">
                    <p class="upimg">
                        <span class="iconfont icon-tianjia"></span>
                        <span>上传附件</span>
                    </p>
                    <div class="imgs">
                        <img v-for="(item,index) in detaildata.annex" :key=index :src="'http://localhost:3000'+`${item}`" alt="">
                    </div>
                </div>
                <div class="tnt">
                    <p>1.对实行埃里克到家了卡萨经典款垃圾啊数量肯定</p>
                    <p>2.对实行埃里克到家了卡萨经典款垃圾啊数量肯定阿萨德</p>
                </div>
               
            </div>
             
        </div>
        <div class="footer">
                <span class="out">取消</span>
                <span class="sub">提交</span>
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
            detaildata:{}
        }
    },
    computed:{
        Ctimes(){
            return new Date(this.detaildata.endTime).toLocaleDateString()
        },
        Etimes(){
            return new Date(this.detaildata.startTime).toLocaleDateString()
        },
        alltime(){
            return (new Date(this.detaildata.endTime)*1-new Date(this.detaildata.startTime)*1)/86400000
        }
    },
    methods:{

    },
    created(){
        api[this.$route.params.type+'Detail']({
            applicationNumber:this.$route.params.id
        }).then((res)=>{
            console.log(res.data)
            this.detaildata=res.data
        })
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